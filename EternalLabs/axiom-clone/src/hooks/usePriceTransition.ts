import { useEffect, useState } from "react";

export function usePriceTransition(current: number, previous?: number) {
    const [flash, setFlash] = useState<"up" | "down" | "none">("none");

    useEffect(() => {
        if (previous === undefined) return;

        if (current > previous) setFlash("up");
        else if (current < previous) setFlash("down");
        else setFlash("none");

        if (flash !== "none") {
            const timeout = setTimeout(() => setFlash("none"), 700);
            return () => clearTimeout(timeout);
        }
    }, [current, previous]);

    return flash;
}
