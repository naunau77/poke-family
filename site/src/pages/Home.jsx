import { POKEMONS } from '../data/pokemons'
import { getTypeHexColor } from '../utils/typeColors'

export default function Home({ onNavigate }) {
  const featuredPokemon = [POKEMONS[3], POKEMONS[0], POKEMONS[2], POKEMONS[4], POKEMONS[1], POKEMONS[5]]

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-pokemon-primary to-pokemon-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-black mb-4">Bienvenue dans l'univers Pokémon</h1>
          <p className="text-xl mb-8">Explorez guides compétitifs, Pokédex détaillé, replays commentés et culture Pokémon</p>
          <button 
            onClick={() => onNavigate('pokedex')}
            className="bg-pokemon-electric text-pokemon-secondary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition cursor-pointer"
          >
            Découvrir →
          </button>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8">Replay en vedette</h2>
          <div className="aspect-video mb-4 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe 
              src="https://www.youtube.com/embed/sKFDj2nRABQ" 
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="Pokémon Sword & Shield - Gameplay"
            ></iframe>
          </div>
          <p className="text-gray-600"><strong>Pokémon Sword & Shield</strong> — Les meilleurs moments de gameplay sur Nintendo Switch</p>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-8">Articles récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Guide Compétitif pour débuter',
                date: '15 nov',
                readTime: '8 min',
                excerpt: 'Apprenez les bases du teambuilding, EV training et stratégie mentale...',
                gradient: 'from-pokemon-electric to-pokemon-fire'
              },
              {
                title: 'Top 10 Pokémon Compétitifs 2025',
                date: '10 nov',
                readTime: '12 min',
                excerpt: 'Découvrez les Pokémon les plus dominants du métagame actuel...',
                gradient: 'from-pokemon-primary to-pokemon-electric'
              },
              {
                title: 'Stratégies Avancées : Double Format',
                date: '5 nov',
                readTime: '10 min',
                excerpt: 'Maîtrisez les synergies et les combos en format 2v2...',
                gradient: 'from-pokemon-accent to-pokemon-primary'
              }
            ].map((article) => (
              <article key={article.title} className="bg-white rounded-lg border shadow-md hover:shadow-xl transition">
                <div className={`bg-gradient-to-r ${article.gradient} h-48`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-black mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{article.date} • {article.readTime}</p>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <button className="text-pokemon-primary font-semibold hover:underline cursor-pointer">
                    Lire plus →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pokédex Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-8">Pokédex en vedette</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {featuredPokemon.map((pokemon) => {
              const typeColor = getTypeHexColor(pokemon.type)
              return (
                <button
                  key={pokemon.id}
                  onClick={() => onNavigate('pokemon-detail', pokemon)}
                  className="group bg-white rounded-lg border-2 p-4 text-center hover:shadow-lg transition cursor-pointer overflow-hidden"
                  style={{ borderColor: typeColor }}
                >
                  <div 
                    className="h-28 rounded mb-3 flex items-center justify-center overflow-hidden group-hover:opacity-80 transition"
                    style={{ background: `linear-gradient(135deg, ${typeColor}20 0%, ${typeColor}05 100%)` }}
                  >
                    <img 
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/96?text=${pokemon.name}`
                      }}
                    />
                  </div>
                  <h3 className="font-black text-sm mb-1">{pokemon.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">#{pokemon.number.toString().padStart(3, '0')}</p>
                  <span 
                    className="text-xs text-white px-2 py-1 rounded-full inline-block font-semibold"
                    style={{ backgroundColor: typeColor }}
                  >
                    {pokemon.type.split('/')[0]}
                  </span>
                </button>
              )
            })}
          </div>
          <div className="text-center">
            <button 
              onClick={() => onNavigate('pokedex')}
              className="bg-pokemon-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block cursor-pointer"
            >
              Voir tout le Pokédex →
            </button>
          </div>
        </div>
      </section>

      {/* Replays */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-8">Replays commentés</h2>
          <div className="space-y-4">
            {[
              { title: 'VGC 2025 Finals — Stall vs Hyper Offense', date: '15 nov', duration: '38:45', category: 'Compétitif' },
              { title: 'Guide : 6v6 Doubles Format', date: '10 nov', duration: '25:30', category: 'Tutoriel' },
              { title: 'Pikachu Comp Sweep — Moments Forts', date: '5 nov', duration: '15:20', category: 'Fun' },
              { title: 'Championnat Régional 2025 — Highlights', date: '1 nov', duration: '42:10', category: 'Compétitif' },
              { title: 'Breeding Shiny : Techniques Avancées', date: '25 oct', duration: '20:15', category: 'Tutoriel' },
              { title: 'Pokémon Paradox : Stratégies Modernes', date: '20 oct', duration: '35:50', category: 'Compétitif' }
            ].map((replay) => (
              <button
                key={replay.title}
                className="block bg-white border-l-4 border-pokemon-primary p-6 rounded hover:shadow-lg transition w-full text-left cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">{replay.title}</h3>
                <p className="text-sm text-gray-600">{replay.date} • {replay.duration} • {replay.category}</p>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => onNavigate('replays')}
              className="bg-pokemon-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block cursor-pointer"
            >
              Tous les replays →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
