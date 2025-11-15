import { POKEMONS } from '../data/pokemons'
import { getTypeHexColor } from '../utils/typeColors'

const CATEGORY_THEMES = {
  'Pacte des origines': { primary: '#FBD24D', secondary: '#FF8661', badge: '🌀' },
  'Évolution & protecteurs': { primary: '#8A9BFF', secondary: '#3E4ACF', badge: '🛡️' },
  'Recrues Paldea': { primary: '#7FD5A5', secondary: '#167E56', badge: '🌿' },
  'Légendaires libérés': { primary: '#FFB5F5', secondary: '#8F5FFF', badge: '✨' },
  default: { primary: '#FF6B6B', secondary: '#FFC145', badge: '⭐' }
}

const DEFAULT_THEME = CATEGORY_THEMES.default

const getTheme = (category) => CATEGORY_THEMES[category] ?? DEFAULT_THEME

const getStoryPreview = (history, fallback) => {
  if (!history) return fallback
  const candidate = history
    .split('\n')
    .find((line) => line && !line.startsWith('Prologue') && !line.startsWith('Chapitre') && !line.startsWith('Épilogue'))
  if (!candidate) return fallback
  return candidate
}

export default function Pokedex({ onNavigate }) {
  const groupedPokemons = (() => {
    const map = new Map()
    POKEMONS.forEach((pokemon) => {
      const key = pokemon.category || 'Autres'
      if (!map.has(key)) {
        map.set(key, [])
      }
      map.get(key).push(pokemon)
    })

    return Array.from(map.entries()).map(([category, pokemons]) => ({
      category,
      pokemons: [...pokemons].sort((a, b) => a.number - b.number)
    }))
  })()

  const totalCount = POKEMONS.length
  const categoryCount = groupedPokemons.length
  const signaturePokemon = POKEMONS.find((pokemon) => pokemon.name.toLowerCase() === 'pikachu') ?? POKEMONS[0]
  const heroTheme = getTheme(signaturePokemon.category)
  const heroStoryLine = getStoryPreview(signaturePokemon.history, signaturePokemon.description)

  const renderCard = (pokemon) => {
    const typeHex = getTypeHexColor(pokemon.type)
    const theme = getTheme(pokemon.category)
    const preview = getStoryPreview(pokemon.history, pokemon.description)
    const shortPreview = preview.length > 140 ? `${preview.slice(0, 140)}…` : preview
    const quickStats = [
      { label: 'PV', value: pokemon.hp },
      { label: 'ATK', value: pokemon.attack },
      { label: 'VIT', value: pokemon.speed }
    ]

    return (
      <button
        key={pokemon.id}
        onClick={() => onNavigate('pokemon-detail', pokemon)}
        className="group relative text-left rounded-2xl overflow-hidden border-2 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          borderColor: theme.primary,
          background: `linear-gradient(140deg, ${theme.primary}11 0%, ${theme.secondary}11 100%)`
        }}
      >
        <div className="absolute -top-10 -right-6 w-32 h-32 rounded-full border-4 border-white/40 opacity-40"></div>
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition" style={{
          background: `radial-gradient(circle at 20% 20%, ${typeHex}33, transparent 60%)`
        }}></div>
        <div className="relative z-10 flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold" style={{ color: theme.primary }}>#{pokemon.number.toString().padStart(3, '0')}</p>
              <h3 className="text-2xl font-black text-gray-900">{pokemon.name}</h3>
            </div>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full text-white shadow"
              style={{ background: `linear-gradient(120deg, ${theme.primary}, ${theme.secondary})` }}
            >
              {theme.badge} {pokemon.category}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="w-28 h-28 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner"
              style={{ backgroundColor: '#ffffffdd' }}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/160?text=${pokemon.name}`
                }}
              />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2">
                {pokemon.type.split('/').map((type, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-white px-3 py-1 rounded-full"
                    style={{ backgroundColor: getTypeHexColor(type.trim()) }}
                  >
                    {type.trim()}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 min-h-[48px]">{shortPreview}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/60">
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-semibold text-gray-500">{stat.label}</p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${Math.min((stat.value / 150) * 100, 100)}%`, backgroundColor: typeHex }}
                  ></div>
                </div>
                <p className="text-sm font-black" style={{ color: theme.primary }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </button>
    )
  }

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'radial-gradient(circle at top, #eef7ff 0%, #f9fbff 45%, #f4f0ff 100%)' }}
    >
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/diagmonds.png)' }}></div>
      <div className="container mx-auto px-4 space-y-12 relative z-10">
        <div
          className="relative overflow-hidden rounded-3xl text-white shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${heroTheme.primary}, ${heroTheme.secondary})` }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10 p-10">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs font-bold opacity-80">Pokédex narratif</p>
              <h1 className="text-4xl md:text-5xl font-black mt-4 mb-6">Chroniques héroïques de Naulynn</h1>
              <p className="text-lg opacity-90 max-w-2xl">{heroStoryLine}</p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-70">Pokémon</p>
                  <p className="text-4xl font-black">{totalCount}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-70">Catégories</p>
                  <p className="text-4xl font-black">{categoryCount}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-70">Spotlight</p>
                  <p className="text-4xl font-black">{signaturePokemon.name}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {groupedPokemons.map(({ category }) => {
                  const theme = getTheme(category)
                  return (
                    <span
                      key={category}
                      className="px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
                      style={{ background: `linear-gradient(120deg, ${theme.primary}, ${theme.secondary})` }}
                    >
                      {theme.badge} {category}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="bg-white/15 rounded-2xl p-6 shadow-inner border border-white/40">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] opacity-80">Spotlight</p>
                  <h3 className="text-3xl font-black">{signaturePokemon.name}</h3>
                  <p className="opacity-80">{signaturePokemon.category}</p>
                </div>
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl"></div>
                  <img
                    src={signaturePokemon.image}
                    alt={signaturePokemon.name}
                    className="relative w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <p className="text-sm text-white/90 mb-6">
                {heroStoryLine.length > 220 ? `${heroStoryLine.slice(0, 220)}…` : heroStoryLine}
              </p>
              <button
                onClick={() => onNavigate('pokemon-detail', signaturePokemon)}
                className="w-full bg-white text-gray-900 font-semibold py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition"
              >
                Voir la fiche complète
              </button>
            </div>
          </div>
        </div>

        {groupedPokemons.map(({ category, pokemons }) => {
          const theme = getTheme(category)
          return (
            <section
              key={category}
              className="rounded-3xl p-6 shadow-xl border border-white/60"
              style={{ background: `linear-gradient(120deg, ${theme.primary}08, ${theme.secondary}08)` }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Catégorie</p>
                  <h2 className="text-3xl font-black" style={{ color: theme.primary }}>
                    {theme.badge} {category}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{pokemons.length} récits disponibles</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }}></span>
                  Chroniques actives
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {pokemons.map((pokemon) => renderCard(pokemon))}
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
