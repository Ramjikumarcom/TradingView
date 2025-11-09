import { useEffect } from "react";
import type { Token } from "@/types/token";

type UpdateFn = (updates: Partial<Token & { id: string }>[]) => void;

export function useMockSocket(tokens: Token[] = [], onUpdate: UpdateFn) {
    useEffect(() => {
        if (!tokens.length) return;

        const interval = setInterval(() => {
            const updates = tokens.map((t) => {
                // Simulate small random price changes
                const change = (Math.random() - 0.5) * (t.price * 0.02);
                const newPrice = Number((t.price + change).toFixed(3));
                const newChange24h = Number(
                    (t.change24h + (Math.random() - 0.5) * 0.5).toFixed(2)
                );

                return { id: t.id, price: newPrice, change24h: newChange24h };
            });

            onUpdate(updates);
        }, 2000); // update every 2s

        return () => clearInterval(interval);
    }, [tokens, onUpdate]);
}
