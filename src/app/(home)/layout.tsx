"use client";

import React, { useEffect } from "react";
import Navbar from "@/modules/layout/components/navbar";
import { Toaster } from "sonner";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        if (ScrollSmoother.get()) ScrollSmoother?.get()?.kill();

        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper" className="overflow-hidden bg-[#101114]">
            <div id="smooth-content" className="p-6">
                <Navbar />
                <main className="transition-all duration-300 flex flex-col">
                    {children}
                    <Toaster richColors position="bottom-right" />
                </main>
            </div>
        </div>
    );
};

export default HomeLayout;
