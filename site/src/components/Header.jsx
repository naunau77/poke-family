export default function Header({ onNavigate }) {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-pokemon-primary to-pokemon-primary shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="text-white text-2xl font-black hover:opacity-80 transition cursor-pointer"
        >
          ⚡ Pokémon Family
        </button>
        <nav className="flex gap-8 text-white font-semibold">
          <button onClick={() => onNavigate('home')} className="hover:text-pokemon-electric transition">Accueil</button>
          <button onClick={() => onNavigate('pokedex')} className="hover:text-pokemon-electric transition">Pokédex</button>
          <button onClick={() => onNavigate('articles')} className="hover:text-pokemon-electric transition">Articles</button>
          <button onClick={() => onNavigate('trainers')} className="hover:text-pokemon-electric transition">Dresseurs</button>
          <button onClick={() => onNavigate('replays')} className="hover:text-pokemon-electric transition">Replays</button>
        </nav>
      </div>
    </header>
  )
}
