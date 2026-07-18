"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    {
        num: 4,
        text: "Production projects",
    },
    {
        num: 10,
        text: "Core technologies",
    },
    {
        num: 3,
        text: "AI/agent frameworks",
    },
    {
        num: 3,
        text: "Cloud platforms deployed to",
    },
];

const Stats = () => {
    return (
        <section className="mt-10 mb-10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10"
                >
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex flex-col items-center xl:items-start gap-1 px-4 py-6"
                                key={index}>
                                <span className="font-mono text-xs text-accent/70">
                                    [{String(index + 1).padStart(2, "0")}]
                                </span>
                                <div className="flex items-baseline gap-0.5">
                                    <CountUp
                                        end={item.num}
                                        duration={2.5}
                                        className="text-3xl xl:text-4xl font-extrabold gradient-text"
                                    />
                                    <span className="text-2xl xl:text-3xl font-extrabold gradient-text">+</span>
                                </div>
                                <p className="leading-snug text-white/60 text-sm text-center xl:text-left">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
