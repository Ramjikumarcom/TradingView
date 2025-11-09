"use client";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { Token } from "@/types/token";
import TokenModal from "../organisms/TokenModal";

export default function TokenPopover({ token }: { token: Token }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button className="px-2 py-1 text-sm border rounded hover:bg-gray-100">
                    Details
                </button>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    side="right"
                    align="center"
                    className="w-56 bg-white border shadow-md rounded-lg p-3 space-y-2"
                >
                    <h3 className="font-semibold text-gray-800">{token.name}</h3>
                    <p className="text-sm text-gray-500">Pair: {token.pair}</p>
                    <p className="text-sm text-gray-500">Price: ${token.price.toFixed(3)}</p>
                    <p className="text-sm text-gray-500">Volume: {token.volume24h.toLocaleString()}</p>

                    <button
                        onClick={() => setOpenModal(true)}
                        className="w-full py-1.5 text-sm bg-axiom-500 text-white rounded hover:bg-axiom-600"
                    >
                        Swap / Liquidity
                    </button>

                    <Popover.Arrow className="fill-white" />
                    {openModal && (
                        <TokenModal token={token} onClose={() => setOpenModal(false)} />
                    )}
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
