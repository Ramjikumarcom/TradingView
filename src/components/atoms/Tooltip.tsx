"use client";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export function Tooltip({
    children,
    content,
}: {
    children: React.ReactNode;
    content: string;
}) {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side="top"
                        className="rounded bg-gray-800 text-white px-2 py-1 text-xs shadow-md animate-in fade-in"
                    >
                        {content}
                        <TooltipPrimitive.Arrow className="fill-gray-800" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
