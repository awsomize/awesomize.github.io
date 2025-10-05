import { Home, PlaySquare, Users, Library } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const iconMap = {
  '/': Home,
  '/shorts': PlaySquare,
  '/subscriptions': Users,
  '/library': Library,
};

function TabButton({ to, label }) {
  const location = useLocation();
  const Icon = iconMap[to];
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={
        'flex-1 rounded-xl py-2 text-xs transition-colors flex flex-col items-center gap-1 ' +
        (active
          ? 'bg-purpleAccent/20 text-purple-200 border border-purpleGlassBorder/70'
          : 'bg-purpleGlassBg border border-purpleGlassBorder/60 text-purple-300 hover:bg-purpleAccent/10')
      }
    >
      <Icon size={18} />
      <span className="text-[10px]">{label}</span>
    </Link>
  );
}

export default function GlassTabBar() {
  return (
    <div className="safe-bottom fixed bottom-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-screen-sm px-4">
        <div className="mb-2 rounded-2xl border border-purpleGlassBorder/50 bg-surface/70 backdrop-blur-xl shadow-glass flex items-center gap-2 px-2 py-2">
          <TabButton to="/" label="Home" />
          <TabButton to="/shorts" label="Shorts" />
          <TabButton to="/subscriptions" label="Subs" />
          <TabButton to="/library" label="Library" />
        </div>
      </div>
    </div>
  );
}
