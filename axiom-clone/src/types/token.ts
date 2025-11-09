export type Token = {
    id: string;
    pair: string;
    name: string;
    price: number;
    change24h: number;
    volume24h: number;
    liquidity: number;
    tag?: "New" | "Final Stretch" | "Migrated";
    logo?: string;
    lastUpdated?: string;
};
