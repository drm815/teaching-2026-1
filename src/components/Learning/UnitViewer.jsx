import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, RotateCcw } from 'lucide-react';

const UnitViewer = ({ unit, onComplete }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 1 + 1 + unit.content.length + (unit.activity ? 1 : 0) + 1; // Video + Goals + Content + Activity + Quiz

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

    return (
        <div className="max-w-2xl mx-auto p-4 md:p-8 min-h-[70vh] flex flex-col">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <span className="text-tech-primary font-mono text-2xl tracking-widest uppercase">Unit {unit.id}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">{unit.title}</h2>
                </div>
                <div className="text-right">
                    <span className="text-slate-500 text-xl font-mono">{currentPage + 1} / {totalPages}</span>
                    <div className="w-32 h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                        <motion.div
                            className="h-full bg-tech-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow relative glass rounded-3xl p-6 md:p-10 overflow-hidden min-h-[450px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full"
                    >
                        {/* 0. Intro Video Page */}
                        {currentPage === 0 && (
                            <div className="space-y-6 h-full flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="inline-block px-3 py-1 bg-tech-primary/10 border border-tech-primary/20 rounded-full text-tech-primary text-2xl font-bold uppercase tracking-wider">학습 도입 영상</div>
                                    <a
                                        href={`https://www.youtube.com/watch?v=${unit.videoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-slate-400 hover:text-tech-primary flex items-center gap-1 transition-colors"
                                    >
                                        <RotateCcw size={12} className="rotate-45" />
                                        유튜브에서 직접 보기
                                    </a>
                                </div>
                                <div className="flex-grow w-full relative group aspect-video rounded-2xl overflow-hidden border border-tech-border/30 blue-glow bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${unit.videoId}?rel=0&modestbranding=1&origin=${window.location.origin}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                    {/* Overlay for better UX in local env */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                                        <p className="text-white font-bold mb-2">영상이 재생되지 않나요?</p>
                                        <a
                                            href={`https://www.youtube.com/watch?v=${unit.videoId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-tech-primary text-tech-bg text-sm font-bold rounded-lg hover:scale-105 transition-transform"
                                        >
                                            새 창에서 영상 보기
                                        </a>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-xl text-center italic">
                                    본문 학습 전 영상을 시청하며 주제를 환기해보세요. (마우스 오버 시 새 창 보기 가능)
                                </p>
                            </div>
                        )}

                        {/* 1. Learning Goals Page */}
                        {currentPage === 1 && (
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-tech-primary/10 border border-tech-primary/20 rounded-full text-tech-primary text-2xl font-bold">학습 목표</div>
                                <ul className="space-y-4">
                                    {unit.learningGoals.map((goal, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-3 text-4xl text-slate-200"
                                        >
                                            <CheckCircle2 className="text-tech-accent shrink-0 mt-1" size={20} />
                                            {goal}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* 2. Content Pages */}
                        {currentPage > 1 && currentPage <= unit.content.length + 1 && (
                            <div className="space-y-6 flex flex-col md:flex-row gap-8 h-full">
                                <div className={`flex-grow space-y-6 ${unit.content[currentPage - 2].image ? 'md:w-1/2' : 'w-full'}`}>
                                    <h3 className="text-xl font-bold text-tech-primary">
                                        {unit.content[currentPage - 2].subtitle}
                                    </h3>
                                    <p className="text-4xl text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {unit.content[currentPage - 2].text}
                                    </p>
                                </div>
                                {unit.content[currentPage - 2].image && (
                                    <div className="md:w-1/2 flex items-center justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="rounded-2xl overflow-hidden border border-tech-border/30 blue-glow"
                                        >
                                            <img
                                                src={unit.content[currentPage - 2].image}
                                                alt={unit.content[currentPage - 2].subtitle}
                                                className="w-full h-auto object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* 3. Activity Page (if exists) */}
                        {unit.activity && currentPage === unit.content.length + 2 && (
                            <div className="space-y-6">
                                <div className="inline-block px-3 py-1 bg-tech-accent/10 border border-tech-accent/20 rounded-full text-tech-accent text-2xl font-bold">활동</div>
                                <h3 className="text-2xl font-bold text-white leading-tight">
                                    {unit.activity.title}
                                </h3>
                                <p className="text-slate-400 text-xl">{unit.activity.description}</p>
                                <div className="space-y-3 mt-4">
                                    {unit.activity.steps.map((step, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-tech-primary/20 text-tech-primary text-xs font-bold shrink-0">{i + 1}</span>
                                            <p className="text-slate-300 text-xl">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 4. Quiz Page (Placeholder - will be replaced by QuizModule) */}
                        {currentPage === totalPages - 1 && (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                                <div className="p-6 rounded-full bg-tech-primary/10">
                                    <RotateCcw className="text-tech-primary animate-spin-slow" size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">학습 내용을 확인해볼까요?</h3>
                                <p className="text-slate-400 text-xl">간단한 퀴즈를 통해 오늘 배운 내용을 복습합니다.</p>
                                <button
                                    onClick={onComplete}
                                    className="mt-4 px-8 py-3 bg-tech-primary text-tech-bg font-bold rounded-xl hover:bg-tech-accent transition-colors"
                                >
                                    퀴즈 시작하기
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="flex items-center gap-2 px-6 py-2 rounded-xl border border-tech-border/30 text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-xl"
                >
                    <ChevronLeft size={20} />
                    이전
                </button>
                {currentPage < totalPages - 1 && (
                    <button
                        onClick={nextPage}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-tech-primary text-tech-bg font-bold hover:blue-glow transition-all text-xl"
                    >
                        다음
                        <ChevronRight size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default UnitViewer;
