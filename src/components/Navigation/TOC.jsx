import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Settings, Lightbulb, ShieldCheck, ChevronRight } from 'lucide-react';

const icons = [BookOpen, Zap, Settings, Lightbulb, ShieldCheck];

const TOC = ({ onSelectUnit, units }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {units.map((unit, index) => {
                const Icon = icons[index % icons.length];
                return (
                    <motion.div
                        key={unit.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        onClick={() => onSelectUnit(unit)}
                        className="group glass p-6 rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-300 hover:blue-glow border-tech-border/30"
                    >
                        {/* Background Decoration */}
                        <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Icon size={120} />
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="p-3 bg-tech-primary/10 rounded-xl group-hover:bg-tech-primary/20 transition-colors">
                                <Icon className="text-tech-primary" size={24} />
                            </div>
                            <span className="text-base font-mono text-tech-primary/50">UNIT 0{unit.id}</span>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-white group-hover:text-tech-primary transition-colors">
                                {unit.title}
                            </h3>
                            <p className="mt-2 text-3xl text-slate-400 line-clamp-2 leading-relaxed">
                                {unit.description}
                            </p>
                        </div>

                        <div className="mt-8 flex items-center text-2xl font-semibold text-tech-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                            학습 시작하기
                            <ChevronRight size={14} className="ml-1" />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TOC;
