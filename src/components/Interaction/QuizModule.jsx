import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, Award, HelpCircle } from 'lucide-react';

const QuizModule = ({ quizData, onFinish }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentQuiz = quizData[currentIndex];

    const handleAnswer = (answer) => {
        if (showResult) return;

        setSelectedOption(answer);
        setShowResult(true);

        const isCorrect = currentQuiz.type === 'choice'
            ? answer === currentQuiz.answer
            : answer === currentQuiz.answer;

        if (isCorrect) {
            setScore(score + 1);
            setFeedback('정답입니다! 참 잘했어요.');
        } else {
            setFeedback('아쉽네요. 다시 한번 생각해보세요.');
        }
    };

    const nextQuiz = () => {
        if (currentIndex < quizData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setShowResult(false);
            setFeedback(null);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-10 text-center space-y-6"
            >
                <div className="w-24 h-24 rounded-full bg-tech-accent/20 flex items-center justify-center text-tech-accent">
                    <Award size={48} />
                </div>
                <h3 className="text-3xl font-bold text-white">퀴즈 완료!</h3>
                <p className="text-xl text-slate-400">
                    모든 퀴즈를 마쳤습니다. <br />
                    점수: <span className="text-tech-primary font-bold">{score} / {quizData.length}</span>
                </p>
                <button
                    onClick={onFinish}
                    className="px-10 py-4 bg-tech-primary text-tech-bg font-bold rounded-2xl hover:blue-glow transition-all"
                >
                    학습 종료하기
                </button>
            </motion.div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center gap-3">
                <HelpCircle className="text-tech-primary" size={24} />
                <span className="text-slate-500 font-mono text-sm">Question {currentIndex + 1} of {quizData.length}</span>
            </div>

            <h3 className="text-2xl font-bold text-white leading-relaxed">
                {currentQuiz.question}
            </h3>

            <div className="grid grid-cols-1 gap-4 mt-8">
                {currentQuiz.type === 'choice' ? (
                    currentQuiz.options.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => handleAnswer(i)}
                            disabled={showResult}
                            className={`p-5 rounded-2xl text-left border transition-all duration-300 ${showResult
                                    ? i === currentQuiz.answer
                                        ? 'border-tech-accent bg-tech-accent/10 text-tech-accent'
                                        : i === selectedOption
                                            ? 'border-red-500/50 bg-red-500/10 text-red-500'
                                            : 'border-white/5 bg-white/5 opacity-50'
                                    : 'border-white/10 bg-white/5 hover:border-tech-primary/50 hover:bg-tech-primary/5 text-slate-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <span>{option}</span>
                                {showResult && i === currentQuiz.answer && <Check size={20} />}
                                {showResult && i === selectedOption && i !== currentQuiz.answer && <X size={20} />}
                            </div>
                        </button>
                    ))
                ) : currentQuiz.type === 'ox' ? (
                    <div className="flex gap-4">
                        {[true, false].map((val) => (
                            <button
                                key={val.toString()}
                                onClick={() => handleAnswer(val)}
                                disabled={showResult}
                                className={`flex-1 p-8 rounded-2xl border text-4xl font-bold transition-all duration-300 ${showResult
                                        ? val === currentQuiz.answer
                                            ? 'border-tech-accent bg-tech-accent/10 text-tech-accent'
                                            : val === selectedOption
                                                ? 'border-red-500/50 bg-red-500/10 text-red-500'
                                                : 'border-white/5 bg-white/5 opacity-50'
                                        : 'border-white/10 bg-white/5 hover:border-tech-primary/50 hover:bg-tech-primary/5 text-slate-300'
                                    }`}
                            >
                                {val ? 'O' : 'X'}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="정답을 입력하세요"
                            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-tech-primary focus:outline-none"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleAnswer(e.target.value);
                            }}
                            disabled={showResult}
                        />
                        {showResult && (
                            <div className="text-tech-accent font-bold">정답: {currentQuiz.answer}</div>
                        )}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showResult && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3"
                    >
                        <div className={`font-bold ${feedback.includes('정답') ? 'text-tech-accent' : 'text-red-400'}`}>
                            {feedback}
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {currentQuiz.explanation}
                        </p>
                        <button
                            onClick={nextQuiz}
                            className="mt-4 flex items-center gap-2 text-tech-primary font-bold hover:translate-x-1 transition-transform"
                        >
                            {currentIndex < quizData.length - 1 ? '다음 문제' : '결과 보기'}
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuizModule;
