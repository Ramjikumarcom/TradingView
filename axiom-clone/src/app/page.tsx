"use client";
import Header from "@/components/organisms/Header";
import BackgroundVideo from "@/components/organisms/BackgroundVideo";
import HeroText from "@/components/organisms/HeroText";
import Hero from "@/components/organisms/Hero";
import Rewards from "@/components/organisms/Rewards";
import Architecture from "@/components/organisms/Architecture";
import FAQ from "@/components/organisms/FAQ";
import CTA from "@/components/organisms/CTA";
import Footer from "@/components/organisms/Footer";

export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <Header />

            {/* First viewport: video with hero text on top */}
            <BackgroundVideo>
                <HeroText />
            </BackgroundVideo>

            {/* Second viewport: full Hero section (panels / gallery) */}
            <Hero />

            {/* Rest of the page */}
            <section className="py-16">
                <Rewards />
            </section>

            <section className="container mx-auto py-16">
                <Architecture />
            </section>

            <section className="container mx-auto py-16">
                <FAQ />
            </section>

            <section className="container mx-auto py-16">
                <CTA />
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}