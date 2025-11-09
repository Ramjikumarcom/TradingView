"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useMemo, useState } from "react";

export type AuthMode = "signup" | "login";

export default function AuthModal({
                                    open,
                                    mode: initialMode = "signup",
                                    onClose,
                                    illustrationSrc,
                                    onGoogle,
                                    onPhantom,
                                  }: {
  open: boolean;
  mode?: AuthMode;
  onClose: () => void;
  illustrationSrc?: string; // optional top image
  onGoogle?: () => Promise<void> | void;
  onPhantom?: () => Promise<void> | void;
}) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState("");

  useEffect(() => setMode(initialMode), [initialMode]);

  const emailValid = useMemo(() => {
    // very light validation (frontend only)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  const handlePrimary = () => {
    // TODO: call your backend API here
    // For now just close if valid
    if (!emailValid) return;
    onClose();
  };

  const handleGoogle = async () => {
    if (onGoogle) return void onGoogle();
    // Placeholder: redirect to your OAuth route
    // window.location.href = "/api/auth/google"; // if using NextAuth later
    alert("Google OAuth not wired yet. Plug your provider here.");
  };

  const handlePhantom = async () => {
    if (onPhantom) return void onPhantom();
    // Minimal Phantom connect (if available)
    const anyWindow = window as any;
    if (anyWindow?.solana?.isPhantom) {
      try {
        await anyWindow.solana.connect();
        alert("Phantom connected: " + anyWindow.solana.publicKey?.toString());
        onClose();
      } catch (e) {
        console.error(e);
        alert("Phantom connection failed.");
      }
    } else {
      alert("Phantom not detected. Please install Phantom wallet.");
      window.open("https://phantom.app/", "_blank");
    }
  };

  return (
      <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-[2px]" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[60] w-[92vw] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[rgba(16,20,29,0.95)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Dialog.Title className="text-base font-semibold text-foreground">
                {mode === "signup" ? "Sign Up" : "Login"}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-muted-foreground hover:text-foreground">✕</button>
              </Dialog.Close>
            </div>

            {illustrationSrc && (
                <div className="mb-3 overflow-hidden rounded-lg">
                  <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flog-on&psig=AOvVaw0EhVdelAX8Eah1DlQh8K4F&ust=1762725348929000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDkieTF45ADFQAAAAAdAAAAABAE"
                      alt="Auth"
                      className="w-full h-28 object-cover opacity-90"
                  />
                </div>
            )}

            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Email</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md bg-white/5 text-sm text-foreground placeholder:text-muted-foreground/70 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/60 border border-white/10"
                />
              </div>

              {mode === "signup" && (
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">Invite code (optional)</label>
                    <input
                        type="text"
                        placeholder="Invite code (optional)"
                        className="w-full rounded-md bg-white/5 text-sm text-foreground placeholder:text-muted-foreground/70 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/60 border border-white/10"
                    />
                  </div>
              )}

              <button
                  disabled={!emailValid}
                  onClick={handlePrimary}
                  className={`w-full rounded-md ${emailValid ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600/40 cursor-not-allowed"} text-white py-2 text-sm font-medium transition`}
              >
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>

              <div className="text-center text-xs text-muted-foreground">
                Or {mode === "signup" ? "Sign Up" : "Login"} with
              </div>

              <button
                  onClick={handleGoogle}
                  className="w-full rounded-md bg-white/6 hover:bg-white/10 text-foreground py-2 text-sm font-medium flex items-center justify-center gap-2 border border-white/10"
              >
                <span>Continue with Google</span>
              </button>
              <button
                  onClick={handlePhantom}
                  className="w-full rounded-md bg-white/6 hover:bg-white/10 text-foreground py-2 text-sm font-medium flex items-center justify-center gap-2 border border-white/10"
              >
                <span>Connect with Phantom</span>
              </button>

              <div className="pt-2 text-center text-xs text-muted-foreground">
                {mode === "signup" ? (
                    <>
                      Already have an account?{" "}
                      <button className="underline hover:text-foreground" onClick={() => setMode("login")}>
                        Login
                      </button>
                    </>
                ) : (
                    <>
                      New here?{" "}
                      <button className="underline hover:text-foreground" onClick={() => setMode("signup")}>
                        Create an account
                      </button>
                    </>
                )}
              </div>

              <div className="pt-2 text-[10px] leading-relaxed text-muted-foreground text-center">
                By creating an account, you agree to Axiom's{" "}
                <a className="underline" href="#">Privacy Policy</a> and{" "}
                <a className="underline" href="#">Terms of Service</a>.
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  );
}