const categories = ['All','Music','Gaming','News','Live','Podcasts','AI','Trailers','Tech','Sports'];

export default function CategoryChips() {
  return (
    <div className="sticky top-[64px] z-30 mx-auto max-w-screen-sm px-4 pt-2 pb-3 bg-gradient-to-b from-black/10 to-transparent backdrop-blur-0">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((c) => (
          <button key={c} className="whitespace-nowrap rounded-2xl border border-purpleGlassBorder/60 bg-purpleGlassBg px-3 py-1.5 text-xs text-purple-200 hover:bg-purpleAccent/10">
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
