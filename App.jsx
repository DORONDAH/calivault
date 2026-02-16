import React, { useState, useMemo } from 'react';
import { X, Search, Dumbbell, Zap, Flame, TrendingUp } from 'lucide-react';

// Mock Database - Real YouTube Videos for Calisthenics
const exercises = [
  {
    id: 1,
    title: "Perfect Push-Up Form Tutorial",
    channelName: "THENX",
    videoId: "IODxDxX7oi4",
    category: "Push",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "How to Muscle Up - Step by Step",
    channelName: "OFFICIALTHENX",
    videoId: "3pWsALogR2g",
    category: "Pull",
    difficulty: "Advanced"
  },
  {
    id: 3,
    title: "Pull-Up Progressions for Beginners",
    channelName: "Calisthenicmovement",
    videoId: "fO3dKSQayfg",
    category: "Pull",
    difficulty: "Beginner"
  },
  {
    id: 4,
    title: "Ultimate Core Workout - No Equipment",
    channelName: "Athlean-X",
    videoId: "dhpoahdXND4",
    category: "Core",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    title: "Pistol Squat Tutorial - Master It",
    channelName: "FitnessFAQs",
    videoId: "vq5-vdgJc0I",
    category: "Legs",
    difficulty: "Advanced"
  },
  {
    id: 6,
    title: "Handstand Push-Up Tutorial",
    channelName: "THENX",
    videoId: "tQhrk6WMcKw",
    category: "Push",
    difficulty: "Advanced"
  },
  {
    id: 7,
    title: "Front Lever Progressions",
    channelName: "Calisthenicmovement",
    videoId: "Bly3LsqhJJA",
    category: "Pull",
    difficulty: "Advanced"
  },
  {
    id: 8,
    title: "L-Sit Tutorial for Beginners",
    channelName: "GMB Fitness",
    videoId: "IUZJrKn4AZ0",
    category: "Core",
    difficulty: "Intermediate"
  },
  {
    id: 9,
    title: "Dips Tutorial - Perfect Form",
    channelName: "THENX",
    videoId: "2z8JmcrW-As",
    category: "Push",
    difficulty: "Intermediate"
  },
  {
    id: 10,
    title: "Jump Squat Variations",
    channelName: "Calisthenicmovement",
    videoId: "mGvzVjuY8SY",
    category: "Legs",
    difficulty: "Beginner"
  }
];

const categories = ['All', 'Push', 'Pull', 'Legs', 'Core'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDifficulty, setActiveDifficulty] = useState('All');

  const filteredExercises = useMemo(() => {
    return exercises.filter(exercise => {
      const matchesSearch = exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          exercise.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          exercise.difficulty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || exercise.category === activeCategory;
      const matchesDifficulty = activeDifficulty === 'All' || exercise.difficulty === activeDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, activeCategory, activeDifficulty]);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-lime-400';
      case 'Intermediate': return 'text-cyan-400';
      case 'Advanced': return 'text-fuchsia-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Push': return <Flame className="w-4 h-4" />;
      case 'Pull': return <TrendingUp className="w-4 h-4" />;
      case 'Legs': return <Zap className="w-4 h-4" />;
      case 'Core': return <Dumbbell className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-lime-500/20 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg shadow-lime-500/50">
                  <Zap className="w-7 h-7 text-slate-950" />
                </div>
                <div>
                  <h1 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    CALI<span className="text-white">VAULT</span>
                  </h1>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Street Workout Database</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-lg">
                  <span className="text-sm font-mono text-lime-400">{filteredExercises.length} Exercises</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search exercises, body parts, difficulty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border-2 border-slate-800 rounded-xl text-white placeholder-gray-500 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-all font-mono text-sm"
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider self-center">Categories:</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm tracking-wide transition-all transform hover:scale-105 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-lime-500 to-cyan-500 text-slate-950 shadow-lg shadow-lime-500/50'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Difficulty Chips */}
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider self-center">Difficulty:</span>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setActiveDifficulty(diff)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm tracking-wide transition-all transform hover:scale-105 ${
                    activeDifficulty === diff
                      ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/50'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white border border-slate-700'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Exercise Grid */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {filteredExercises.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No exercises found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(exercise)}
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-slate-900 border-2 border-slate-800 transition-all duration-300 hover:border-lime-500 hover:shadow-2xl hover:shadow-lime-500/20 hover:-translate-y-2">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${exercise.videoId}/maxresdefault.jpg`}
                        alt={exercise.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center shadow-2xl shadow-lime-500/50 transform group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-slate-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-slate-950/90 backdrop-blur-sm rounded-lg border border-lime-500/30">
                        {getCategoryIcon(exercise.category)}
                        <span className="text-xs font-bold text-lime-400">{exercise.category}</span>
                      </div>

                      {/* Difficulty Badge */}
                      <div className={`absolute top-3 right-3 px-3 py-1.5 bg-slate-950/90 backdrop-blur-sm rounded-lg border border-slate-700 text-xs font-mono font-bold ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-lime-400 transition-colors line-clamp-2">
                        {exercise.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-mono">{exercise.channelName}</p>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-cyan-500/10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Video Player Modal (Theater Mode) */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-14 right-0 w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all shadow-2xl shadow-red-500/50 hover:scale-110 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-lime-500/20 border-4 border-lime-500/30">
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="bg-slate-900 p-6 border-t-2 border-lime-500/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h2>
                    <p className="text-gray-400 font-mono text-sm">{selectedVideo.channelName}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-lime-500/30">
                      {getCategoryIcon(selectedVideo.category)}
                      <span className="text-sm font-bold text-lime-400">{selectedVideo.category}</span>
                    </div>
                    <div className={`px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm font-mono font-bold ${getDifficultyColor(selectedVideo.difficulty)}`}>
                      {selectedVideo.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default App;