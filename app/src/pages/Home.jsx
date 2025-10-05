import CategoryChips from '../components/CategoryChips.jsx';
import GlassNavBar from '../components/GlassNavBar.jsx';
import GlassTabBar from '../components/GlassTabBar.jsx';
import VideoCard from '../components/VideoCard.jsx';

export default function Home() {
  const sample = new Array(10).fill(null);
  return (
    <div className="pb-28">
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
