import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { unitsGrade1 } from './data/units_grade1';
import { unitsGrade3 } from './data/units_grade3';
import TOC from './components/Navigation/TOC';
import UnitViewer from './components/Learning/UnitViewer';
import QuizModule from './components/Interaction/QuizModule';
import { Home, Lightbulb, Zap, BookOpen, GraduationCap, Layout } from 'lucide-react';

function App() {
  const [grade, setGrade] = useState(null); // null, 1, 2, 3
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [viewMode, setViewMode] = useState('landing'); // 'landing', 'toc', 'learning', 'quiz'

  // grade 1 and grade 2 use the same units currently as per user request
  const units = (grade === 1 || grade === 2) ? unitsGrade1 : unitsGrade3;

  const handleSelectGrade = (g) => {
    setGrade(g);
    setViewMode('toc');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
    setViewMode('learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setViewMode('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setViewMode('landing');
    setGrade(null);
    setSelectedUnit(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToTOC = () => {
    setViewMode('toc');
    setSelectedUnit(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getHeaderTitle = () => {
    if (!grade) return "스마트 기술 교실";
    return `중학교 ${grade}학년 기술·가정`;
  };

  const getUnitBadge = () => {
    if (grade === 1 || grade === 2) return "중학교 기술·가정 ①";
    return "중학교 기술·가정 ②";
  };

  const getFooterInfo = () => {
    const textbook = (grade === 1 || grade === 2) ? "미래엔 기술·가정 ① 4단원" : "천재교과서 기술·가정 ② 5단원";
    return `&copy; 2026 ${textbook} 스마트 학습 보조 도구`;
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-tech-primary/30 tech-grid">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-tech-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-tech-accent/5 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-tech-border/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={handleGoHome}
          >
            <div className="p-2 bg-tech-primary/20 rounded-lg group-hover:bg-tech-primary/30 transition-colors">
              <Zap className="text-tech-primary" size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              {getHeaderTitle()}
            </h1>
          </div>

          <nav className="flex items-center gap-4 md:gap-8">
            {grade && (
              <button
                onClick={handleGoHome}
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Home size={16} /> <span className="hidden sm:inline">학년 선택</span>
              </button>
            )}
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2 text-sm font-medium text-tech-accent neon-glow">
              <Lightbulb size={16} /> <span className="hidden sm:inline">2026학년도 수업</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <AnimatePresence mode="wait">
          {viewMode === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-12 md:py-20 text-center space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  학년을 <span className="text-tech-primary">선택</span>하세요
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                  각 학년별 교과 수준에 맞는 인터랙티브 학습 콘텐츠가 준비되어 있습니다.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto pt-8">
                {/* Grade 1 Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectGrade(1)}
                  className="glass p-8 rounded-3xl border border-tech-border/30 hover:border-tech-primary/50 cursor-pointer group transition-all"
                >
                  <div className="mb-6 p-4 bg-tech-primary/10 rounded-2xl inline-block group-hover:bg-tech-primary/20 transition-colors">
                    <BookOpen size={40} className="text-tech-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">중학교 1학년</h3>
                  <p className="text-slate-400 text-sm">기술혁신과 발명, 기술과 사회</p>
                  <div className="mt-8 text-tech-primary font-bold flex items-center justify-center gap-2">
                    시작하기 <Zap size={16} />
                  </div>
                </motion.div>

                {/* Grade 2 Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectGrade(2)}
                  className="glass p-8 rounded-3xl border border-tech-border/30 hover:border-tech-secondary/50 cursor-pointer group transition-all"
                >
                  <div className="mb-6 p-4 bg-tech-secondary/10 rounded-2xl inline-block group-hover:bg-tech-secondary/20 transition-colors">
                    <Layout size={40} className="text-tech-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">중학교 2학년</h3>
                  <p className="text-slate-400 text-sm">기술의 세계, 생활 속 기술</p>
                  <div className="mt-8 text-tech-secondary font-bold flex items-center justify-center gap-2">
                    시작하기 <Zap size={16} />
                  </div>
                </motion.div>

                {/* Grade 3 Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectGrade(3)}
                  className="glass p-8 rounded-3xl border border-tech-border/30 hover:border-tech-accent/50 cursor-pointer group transition-all sm:col-span-2 lg:col-span-1"
                >
                  <div className="mb-6 p-4 bg-tech-accent/10 rounded-2xl inline-block group-hover:bg-tech-accent/20 transition-colors">
                    <GraduationCap size={40} className="text-tech-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">중학교 3학년</h3>
                  <p className="text-slate-400 text-sm">정보 통신 기술과 생활, AI 윤리</p>
                  <div className="mt-8 text-tech-accent font-bold flex items-center justify-center gap-2">
                    시작하기 <Zap size={16} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {viewMode === 'toc' && (
            <motion.div
              key="toc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-12 text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20 text-tech-primary text-xs font-bold uppercase tracking-widest"
                >
                  {getUnitBadge()}
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  {(grade === 1 || grade === 2) ? (
                    <>세상을 바꾸는 <span className="text-tech-primary">아이디어</span></>
                  ) : (
                    <>연결된 세상, <span className="text-tech-primary">스마트한 기술</span></>
                  )}
                </h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                  {(grade === 1 || grade === 2)
                    ? "기술의 발전과 혁신 과정을 배우고, 우리 주변의 문제를 창의적으로 해결하는 발명가가 되어봅시다."
                    : "정보 통신 기술의 원리를 이해하고, 인공지능과 함께하는 똑똑한 미래를 설계해봅시다."}
                </p>
              </div>
              <TOC units={units} onSelectUnit={handleSelectUnit} />
            </motion.div>
          )}

          {viewMode === 'learning' && selectedUnit && (
            <motion.div
              key="learning"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <UnitViewer
                unit={selectedUnit}
                onComplete={handleStartQuiz}
              />
            </motion.div>
          )}

          {viewMode === 'quiz' && selectedUnit && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-12"
            >
              <QuizModule
                quizData={selectedUnit.quiz}
                onFinish={handleGoToTOC}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 mt-12 bg-black/20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: getFooterInfo() }} />
          <div className="flex justify-center gap-6 opacity-30">
            <div className="w-12 h-1 bg-tech-primary rounded-full" />
            <div className="w-12 h-1 bg-tech-accent rounded-full" />
            <div className="w-12 h-1 bg-tech-secondary rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
