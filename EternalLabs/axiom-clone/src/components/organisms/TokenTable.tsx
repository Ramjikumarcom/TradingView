"use client";
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/lib/api";
import type { Token } from "@/types/token";
import Skeleton from "../atoms/Skeleton";
import { useMockSocket } from "@/hooks/useMockSocket";
import { usePriceTransition } from "@/hooks/usePriceTransition";
import TokenPopover from "../molecules/TokenPopover";
import { Tooltip } from "../atoms/Tooltip";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import { setSort } from "@/store/tokensSlice";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function TokenTable() {
    const { data, isLoading, isError } = useQuery<Token[]>({
        queryKey: ["tokens"],
        queryFn: fetchTokens,
    });

    const [tokens, setTokens] = useState<Token[]>([]);
    const dispatch = useAppDispatch();
    const { sortBy, sortDir } = useAppSelector((state: RootState) => state.tokens);

    useEffect(() => {
        if (data) setTokens(data);
    }, [data]);

    const handleUpdates = useCallback(
        (updates: Partial<Token & { id: string }>[]) => {
            setTokens((prev) =>
                prev.map((t) => {
                    const update = updates.find((u) => u.id === t.id);
                    return update ? { ...t, ...update } : t;
                })
            );
        },
        []
    );

    useMockSocket(tokens, handleUpdates);

    const sortedTokens = [...tokens].sort((a, b) => {
        if (!sortBy) return 0;
        const valueA = a[sortBy as keyof Token];
        const valueB = b[sortBy as keyof Token];

        if (typeof valueA === "number" && typeof valueB === "number") {
            return sortDir === "asc" ? valueA - valueB : valueB - valueA;
        }
        if (typeof valueA === "string" && typeof valueB === "string") {
            return sortDir === "asc"
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }
        return 0;
    });

    if (isLoading)
        return (
            <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-14 rounded-md bg-card" />
                ))}
            </div>
        );

    if (isError)
        return (
            <div className="p-4 rounded-md bg-destructive/20 text-destructive-foreground text-center">
                Failed to load tokens — please try again.
            </div>
        );

    return (
        <div className="table-card w-full max-w-4xl mx-auto">
            <div className="table-header">
                <Header title="Pair" field="pair" sortBy={sortBy} sortDir={sortDir} dispatch={dispatch} colSpan={2} />
                <Header title="Price" field="price" sortBy={sortBy} sortDir={sortDir} dispatch={dispatch} />
                <Header title="24h" field="change24h" sortBy={sortBy} sortDir={sortDir} dispatch={dispatch} />
                <Header title="Volume" field="volume24h" sortBy={sortBy} sortDir={sortDir} dispatch={dispatch} />
                <Header title="Liquidity" field="liquidity" sortBy={sortBy} sortDir={sortDir} dispatch={dispatch} />
            </div>
            <AnimatePresence initial={false}>
                {sortedTokens.map((t) => (
                    <motion.div
                        key={t.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        <TokenRow token={t} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

function Header({ title, field, sortBy, sortDir, dispatch, colSpan }: any) {
    return (
        <div
            className={clsx(
                "cursor-pointer flex items-center gap-1 select-none",
                colSpan && `col-span-${colSpan}`,
                sortBy === field && "sort-active"
            )}
            onClick={() => dispatch(setSort({ by: field }))}
        >
            {title}
            {sortBy === field && <span className="text-xs">{sortDir === "asc" ? "↑" : "↓"}</span>}
        </div>
    );
}

function TokenRow({ token }: { token: Token }) {
    const [prevPrice, setPrevPrice] = useState<number>();
    const flash = usePriceTransition(token.price, prevPrice);

    useEffect(() => {
        setPrevPrice(token.price);
    }, [token.price]);

    return (
        <div
            className={clsx(
                "table-row price-flash",
                flash === "up" && "price-up",
                flash === "down" && "price-down"
            )}
        >
            <div className="col-span-2">
                <div className="font-semibold text-foreground">{token.pair}</div>
                <div className="text-xs text-muted-foreground">{token.name}</div>
                {token.tag && (
                    <span className="ml-1 text-xs px-2 py-0.5 rounded bg-accent/15 text-accent">
                        {token.tag}
                    </span>
                )}
            </div>
            <div className="font-medium">${token.price.toFixed(3)}</div>
            <div className={token.change24h >= 0 ? "text-green" : "text-red"}>
                {token.change24h}%
            </div>
            <div>${token.volume24h.toLocaleString()}</div>
            <div className="flex items-center justify-between">
                <span>${token.liquidity.toLocaleString()}</span>
                <Tooltip content="More token actions">
                    <div>
                        <TokenPopover token={token} />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}