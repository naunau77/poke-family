export default function Header({ onNavigate }) {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-pokemon-primary to-pokemon-primary shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="text-white text-xl font-black hover:opacity-80 transition cursor-pointer sm:text-2xl text-left"
        >
          ⚡ Pokémon Family
        </button>
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm text-white font-semibold sm:text-base md:justify-end">
          <button onClick={() => onNavigate('home')} className="hover:text-pokemon-electric transition">
            Accueil
          </button>
          <button onClick={() => onNavigate('pokedex')} className="hover:text-pokemon-electric transition">
            Pokédex
          </button>
          <button onClick={() => onNavigate('articles')} className="hover:text-pokemon-electric transition">
            Articles
          </button>
          <button onClick={() => onNavigate('trainers')} className="hover:text-pokemon-electric transition">
            Dresseurs
          </button>
          <button onClick={() => onNavigate('replays')} className="hover:text-pokemon-electric transition">
            Replays
          </button>
        </nav>
      </div>
    </header>
  )
}
