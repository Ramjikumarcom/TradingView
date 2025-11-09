import { FC, useState } from "react";
import AuthModal, { AuthMode } from "./AuthModal";

const Header: FC = () => {
    const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState<AuthMode>("signup");
    const [illustration, setIllustration] = useState<string | undefined>(undefined);

    const openAuth = (mode: AuthMode, withIllustration?: boolean) => {
        setAuthMode(mode);
        setIllustration(withIllustration ? "/auth-illustration.png" : undefined);
        setAuthOpen(true);
    };

    const handleGoogle = async () => {
        // TODO: Plug NextAuth or your OAuth here
        alert("Google OAuth not wired yet. Plug your provider here.");
    };

    const handlePhantom = async () => {
        const anyWindow = window as any;
        if (anyWindow?.solana?.isPhantom) {
            try {
                await anyWindow.solana.connect();
                alert("Phantom connected: " + anyWindow.solana.publicKey?.toString());
                setAuthOpen(false);
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
        <>
            <header className="container mx-auto py-4 flex justify-between items-center overflow-hidden ">
                <div className="text-2xl font-bold tracking-wider">
                    AXIOM <span className="text-accent">Pro</span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => openAuth("login", true)}
                    >
                        Live Trading
                    </button>
                    <button
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => openAuth("login")}
                    >
                        Login
                    </button>
                    <button
                        className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                        onClick={() => openAuth("signup")}
                    >
                        Sign Up
                    </button>
                </div>
            </header>

            <AuthModal
                open={authOpen}
                mode={authMode}
                onClose={() => setAuthOpen(false)}
                illustrationSrc={illustration}
                onGoogle={handleGoogle}
                onPhantom={handlePhantom}
            />
        </>
    );
};

export default Header;