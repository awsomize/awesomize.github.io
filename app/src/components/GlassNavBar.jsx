import { Search, Cast } from 'lucide-react';

export default function GlassNavBar() {
  return (
    <div className="safe-top fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-screen-sm px-4">
        <div className="mt-2 rounded-2xl border border-purpleGlassBorder/50 bg-surface/70 backdrop-blur-xl shadow-glass flex items-center gap-3 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purpleGlassBg border border-purpleGlassBorder/60 flex items-center justify-center text-purple-300 font-bold">YT</div>
            <span className="text-sm text-purple-200/90">YouTube</span>
          </div>
          <div className="flex-1" />
          <button className="rounded-xl p-2 text-xs bg-purpleGlassBg border border-purpleGlassBorder/60 text-purple-200 hover:bg-purpleGlassBorder/10">
            <Search size={16} />
          </button>
          <button className="rounded-xl p-2 text-xs bg-purpleGlassBg border border-purpleGlassBorder/60 text-purple-200 hover:bg-purpleGlassBorder/10">
            <Cast size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
