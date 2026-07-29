import './App.css';
import GlassNavBar from './components/GlassNavBar.jsx';
import GlassTabBar from './components/GlassTabBar.jsx';
import CategoryChips from './components/CategoryChips.jsx';
import VideoCard from './components/VideoCard.jsx';

function App() {
  const sample = new Array(10).fill(null);
  return (
    <div className="pb-28">{/* space for bottom tab bar */}
      <GlassNavBar />
      <div className="safe-top h-[68px]" />
      <CategoryChips />
      <main className="mx-auto max-w-screen-sm px-4 space-y-3">
        {sample.map((_, i) => (
          <VideoCard key={i} />
        ))}
      </main>
      <GlassTabBar />
    </div>
  );
}

export default App;
