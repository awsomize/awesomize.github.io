export default function VideoCard({
  title = 'Purple Glass iOS UI in React',
  channel = 'Purple Labs',
  views = '1.2M views',
  age = '2 days ago',
  thumbnail = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
  avatar = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop'
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-purpleGlassBorder/50 bg-surface/60 backdrop-blur-xl shadow-glass">
      <div className="relative">
        <img src={thumbnail} alt="thumbnail" className="w-full aspect-video object-cover" />
        <div className="absolute bottom-2 right-2 rounded-md bg-black/60 text-[10px] px-1.5 py-0.5">12:34</div>
      </div>
      <div className="p-3 flex gap-3">
        <img src={avatar} alt="avatar" className="h-9 w-9 rounded-full border border-purpleGlassBorder/70" />
        <div className="min-w-0">
          <div className="text-sm font-semibold leading-snug text-purple-100 line-clamp-2">{title}</div>
          <div className="text-[11px] text-purple-300/80 mt-1">{channel} • {views} • {age}</div>
        </div>
        <button className="ml-auto self-start rounded-xl px-2 py-1 text-xs bg-purpleGlassBg border border-purpleGlassBorder/60 text-purple-300">•••</button>
      </div>
    </div>
  );
}
