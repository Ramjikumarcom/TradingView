"use client";

export default function Rewards() {
  return (
    <section className="relative">
      {/* Outer soft container with depth */}
      <div className="w-[92vw] md:w-[80vw] mx-auto rounded-2xl bg-[linear-gradient(180deg,rgba(28,41,66,0.45),rgba(12,16,26,0.35))] shadow-[0_40px_120px_RGBA(0,0,0,0.45)] p-4 md:p-6">
        {/* Inner glass surface */}
        <div className="rounded-xl bg-white/5 backdrop-blur-[2px] p-6 md:p-8">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rewards block */}
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">Rewards</h3>
                <p className="text-sm text-muted-foreground">Earn SOL from trading.</p>
              </div>

              {/* Notification glass chip */}
              <div className="rounded-lg bg-white/8 px-4 py-3 text-sm text-foreground/90 shadow-[inset_0_0_0_1px_RGBA(255,255,255,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="opacity-90">0.12 SOL Received!</span>
                  <span className="text-xs text-muted-foreground">Now</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Congratulations! Trade more to earn more!</div>
              </div>

              {/* CTA pill */}
              <div className="max-w-sm">
                <button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-600/90 hover:to-blue-500/90 text-white py-2.5 text-sm font-medium shadow-[0_12px_30px_RGBA(37,99,235,0.35)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-2 focus:ring-offset-black/20 transition">
                  Buy Trump 12
                </button>
              </div>
            </div>

            {/* Progress block */}
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">Progress through the Ranks</h3>
                <p className="text-sm text-muted-foreground">Earn higher reward rates.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <RankCard title="Wood" subtitle="1x Rewards" />
                <RankCard title="Champion" subtitle="5x Rewards" />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Referrals */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground">Referrals</h4>
              <p className="text-sm text-muted-foreground">Earn points and SOL from your friends.</p>
              <div className="rounded-lg bg-white/7 px-4 py-4 text-sm text-foreground/90 shadow-[inset_0_0_0_1px_RGBA(255,255,255,0.05)]">
                Invite friends to level up your network.
              </div>
            </div>

            {/* Points */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground">Axiom Points</h4>
              <p className="text-sm text-muted-foreground">Earn points through trading, referrals, and quests.</p>
              <div className="space-y-2.5">
                {[
                  { title: "Refer 2 people", pts: "+1,500 Points" },
                  { title: "Share 1 PnL card", pts: "+50 Points" },
                  { title: "Trade 1 SOL in Volume", pts: "+500 Points" },
                ].map((q, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between rounded-md bg-white/6 px-4 py-2.5 text-sm shadow-[inset_0_0_0_1px_RGBA(255,255,255,0.05)] transition hover:bg-white/8 hover:shadow-[0_10px_24px_RGBA(0,0,0,0.25)]"
                  >
                    <span className="text-foreground/90">{q.title}</span>
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-foreground/80 bg-white/10 px-2 py-1 rounded-md">{q.pts}</span>
                      <span className="text-muted-foreground group-hover:text-foreground/80 transition">›</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RankCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-lg bg-white/7 px-4 py-6 text-center shadow-[inset_0_0_0_1px_RGBA(255,255,255,0.05)] h-[92px] grid place-items-center">
      <div>
        <div className="text-foreground font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}
