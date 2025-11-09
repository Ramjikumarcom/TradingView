import type { Token } from "@/types/token";

export async function fetchTokens(): Promise<Token[]> {
  // simulate delay
  await new Promise((res) => setTimeout(res, 700));

  return [
    {
      id: "1",
      pair: "ETH/USDC",
      name: "Ethereum",
      price: 3210.12,
      change24h: 2.5,
      volume24h: 5230000,
      liquidity: 1100000,
      tag: "Final Stretch",
    },
    {
      id: "2",
      pair: "SOL/USDT",
      name: "Solana",
      price: 148.45,
      change24h: -1.2,
      volume24h: 2100000,
      liquidity: 850000,
      tag: "New",
    },
    {
      id: "3",
      pair: "MIG/USDC",
      name: "Migrato",
      price: 0.012,
      change24h: 12.3,
      volume24h: 18000,
      liquidity: 3200,
      tag: "Migrated",
    },
  ];
}
