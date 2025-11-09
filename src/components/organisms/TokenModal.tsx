"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Token } from "@/types/token";

export default function TokenModal({
                                       token,
                                       onClose,
                                   }: {
    token: Token;
    onClose: () => void;
}) {
    return (
        <Dialog.Root open onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-xl shadow-xl p-6 w-[350px] space-y-4">
                    <Dialog.Title className="text-lg font-semibold text-foreground">
                        {token.name} ({token.pair})
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-muted-foreground">
                        View token analytics or perform on-chain actions.
                    </Dialog.Description>

                    <div className="space-y-1 text-sm">
                        <p>Price: ${token.price.toFixed(3)}</p>
                        <p>24h Change: {token.change24h}%</p>
                        <p>Liquidity: {token.liquidity.toLocaleString()}</p>
                    </div>

                    <div className="flex justify-between gap-2">
                        <button className="flex-1 py-1.5 rounded bg-green/10 text-green hover:bg-green/20">
                            Swap
                        </button>
                        <button className="flex-1 py-1.5 rounded bg-blue-600/10 text-blue-400 hover:bg-blue-600/20">
                            Add Liquidity
                        </button>
                    </div>

                    <Dialog.Close asChild>
                        <button className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
                            ✕
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}