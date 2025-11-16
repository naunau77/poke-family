import { ARTICLES } from '../data/articles'
import { POKEMONS } from '../data/pokemons'
import { getTypeHexColor } from '../utils/typeColors'
import { getArticleArtwork } from '../utils/articleAssets'

const HERO_BACKGROUND = 'https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/pokemon-masters/pokemon-masters-06.jpg'
const HERO_CHARACTER = '/images/naulynn-victoire.jpg'
const HERO_SUPPORT = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/923.png'

const VIDEO_FEATURE = {
  url: 'https://www.youtube.com/embed/1roy4o4tqQM',
  title: 'Trailer officiel Pokémon Scarlet & Violet',
  caption: 'Revivez l’annonce officielle de Scarlet/Violet par la chaîne Pokémon : idéal pour se replonger dans l’ambiance compétitive.'
}

export default function Home({ onNavigate }) {
  const featuredPokemon = [POKEMONS[3], POKEMONS[0], POKEMONS[2], POKEMONS[4], POKEMONS[1], POKEMONS[5]]
  const highlightedArticles = ARTICLES.slice(0, 3)

  return (
    <>
      <section className="relative py-20 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={HERO_BACKGROUND} alt="Fond Pokémon" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#0b1234]/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Lognes Battle Network</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">Naulynn vous guide à travers l’univers Pokémon</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Guides compétitifs, Pokédex narratif, replays commentés et récits épiques inspirés des jeux et mangas officiels. Prépare ton équipe et rejoins la garde de Lognes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('pokedex')}
                className="px-8 py-3 rounded-full font-semibold text-gray-900 bg-pokemon-electric shadow-lg hover:-translate-y-0.5 transition cursor-pointer"
              >
                Explorer le Pokédex
              </button>
              <button
                onClick={() => onNavigate('articles')}
                className="px-8 py-3 rounded-full font-semibold border border-white/60 hover:bg-white/10 transition cursor-pointer"
              >
                Lire les Guides
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[{ label: 'Guides', value: ARTICLES.length }, { label: 'Pokémon', value: POKEMONS.length }, { label: 'Replays', value: 6 }].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 -left-10 w-40 h-40 rounded-full bg-pokemon-electric opacity-40 blur-3xl"></div>
            <div className="relative bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
              <img src={HERO_CHARACTER} alt="Pikachu" className="w-72 mx-auto drop-shadow-2xl" loading="lazy" />
              <img src={HERO_SUPPORT} alt="Pohmarmotte" className="w-40 absolute -top-10 -right-6 drop-shadow-2xl opacity-80" loading="lazy" />
              <p className="text-center text-sm text-white/80 mt-4">Naulynn & Pohmarmotte vous attendent sur le front.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 text-pokemon-primary">Replay en vedette</h2>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/40">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent pointer-events-none"></div>
            <div className="aspect-video">
              <iframe
                src={VIDEO_FEATURE.url}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                title={VIDEO_FEATURE.title}
              ></iframe>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
              <h3 className="text-2xl font-black">{VIDEO_FEATURE.title}</h3>
              <p className="text-sm text-white/80">{VIDEO_FEATURE.caption}</p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-pokemon-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-4xl font-black text-pokemon-primary">Articles récents</h2>
            <button
              onClick={() => onNavigate('articles')}
              className="px-6 py-2 rounded-full bg-pokemon-primary text-white font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Voir tous les articles →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedArticles.map((article) => {
              const artwork = getArticleArtwork(article.slug)
              return (
                <button
                  key={article.slug}
                  onClick={() => onNavigate('article-detail', article.slug)}
                  className="rounded-3xl border border-gray-100 bg-white shadow-lg overflow-hidden flex flex-col text-left hover:-translate-y-1 hover:shadow-2xl transition"
                >
                  <div className="relative h-48">
                    <img
                      src={artwork.hero}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">{article.category}</p>
                      <h3 className="text-2xl font-black">{article.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-2">{article.date} • {article.readingTime}</p>
                    <p className="text-gray-700 flex-grow">{article.description}</p>
                    <span className="mt-4 text-pokemon-primary font-semibold">Lire l’article →</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

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
                  className="group bg-white rounded-2xl border-2 p-4 text-center hover:shadow-xl transition cursor-pointer overflow-hidden"
                  style={{ borderColor: typeColor }}
                >
                  <div
                    className="h-28 rounded-2xl mb-3 flex items-center justify-center overflow-hidden group-hover:opacity-80 transition"
                    style={{ background: `linear-gradient(135deg, ${typeColor}33 0%, ${typeColor}05 100%)` }}
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
              className="bg-pokemon-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition inline-block cursor-pointer"
            >
              Voir tout le Pokédex →
            </button>
          </div>
        </div>
      </section>

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
                className="block bg-white border-l-4 border-pokemon-primary p-6 rounded-2xl hover:shadow-lg transition w-full text-left cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-1">{replay.title}</h3>
                <p className="text-sm text-gray-600">{replay.date} • {replay.duration} • {replay.category}</p>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('replays')}
              className="bg-pokemon-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition inline-block cursor-pointer"
            >
              Tous les replays →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
