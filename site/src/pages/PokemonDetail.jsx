import { getTypeHexColor } from '../utils/typeColors'
import { getGalleryForPokemon } from '../data/pokemonGallery'

const HISTORY_HEADING_REGEX = /^(Prologue|Chapitre|Épilogue)/i

const buildHistorySections = (historyText = '') => {
  const sections = []
  if (!historyText.trim()) {
    return sections
  }

  const lines = historyText.split('\n')
  let currentSection = null

  lines.forEach((rawLine) => {
    const line = rawLine.trim()
    if (!line) {
      return
    }

    if (HISTORY_HEADING_REGEX.test(line)) {
      if (currentSection) {
        sections.push(currentSection)
      }
      currentSection = { title: line, lines: [] }
      return
    }

    if (!currentSection) {
      currentSection = { title: 'Histoire', lines: [] }
    }
    currentSection.lines.push(line)
  })

  if (currentSection) {
    sections.push(currentSection)
  }

  return sections
}

export default function PokemonDetail({ pokemon, onNavigate }) {
  const maxStat = 150
  const typeColor = getTypeHexColor(pokemon.type)
  const slug = pokemon.slug || pokemon.name.toLowerCase().replace(/\s+/g, '-')
  const primaryType = pokemon.type.split('/')[0].trim().toLowerCase()
  const gallery = getGalleryForPokemon(slug, primaryType)
  const historySections = buildHistorySections(pokemon.history)

  return (
    <article>
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden py-12"
        style={{
          background: `linear-gradient(135deg, ${typeColor}30 0%, ${typeColor}10 100%)`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: typeColor }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: typeColor }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => onNavigate('pokedex')}
            className="inline-flex items-center font-semibold hover:opacity-70 transition mb-6 cursor-pointer"
            style={{ color: typeColor }}
          >
            <span className="mr-2">←</span> Retour au Pokédex
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-2">#{pokemon.number.toString().padStart(3, '0')}</p>
              <h1 className="text-6xl md:text-7xl font-black mb-4 drop-shadow-lg" style={{ color: typeColor }}>{pokemon.name}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {pokemon.type.split('/').map((type, idx) => (
                  <span 
                    key={idx}
                    className="text-white px-4 py-2 rounded-full font-semibold text-sm"
                    style={{ backgroundColor: getTypeHexColor(type.trim()) }}
                  >
                    {type.trim()}
                  </span>
                ))}
              </div>
              <p className="text-lg leading-relaxed max-w-lg text-gray-700 bg-white bg-opacity-50 backdrop-blur-sm px-4 py-3 rounded-lg">
                {pokemon.description}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div 
                className="rounded-2xl p-8 shadow-2xl"
                style={{ backgroundColor: `${typeColor}15` }}
              >
                <img 
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-96 h-96 object-contain drop-shadow-2xl hover:scale-105 transition duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/384?text=${pokemon.name}`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section - 2 Columns */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - Histoire */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-4xl font-black mb-4" style={{ color: typeColor }}>Histoire et Origines</h2>
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden" style={{ backgroundColor: `${typeColor}05` }}>
                {historySections.length === 0 ? (
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {pokemon.history}
                  </p>
                ) : (
                  <div className="relative">
                    <div
                      className="absolute left-6 top-0 bottom-0 w-px"
                      style={{ backgroundColor: `${typeColor}55` }}
                    ></div>
                    <div className="space-y-10">
                      {historySections.map((section, sectionIndex) => (
                        <div key={`${section.title}-${sectionIndex}`} className="relative pl-16">
                          <div
                            className="absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: `${typeColor}15`, border: `2px solid ${typeColor}` }}
                          >
                            <span className="text-lg font-black" style={{ color: typeColor }}>
                              {(sectionIndex + 1).toString().padStart(2, '0')}
                            </span>
                          </div>
                          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                            <h3
                              className="text-2xl font-black mb-4"
                              style={{ color: typeColor }}
                            >
                              {section.title}
                            </h3>
                            <div className="space-y-3 text-gray-700 leading-relaxed">
                              {section.lines.map((line, lineIndex) => (
                                <p key={`${sectionIndex}-${lineIndex}`} className="text-base">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {gallery.length > 0 && (
              <div>
                <h3 className="text-3xl font-black mb-4" style={{ color: typeColor }}>Moments illustrés</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {gallery.map((scene, sceneIndex) => (
                    <figure
                      key={`${scene.title}-${sceneIndex}`}
                      className="rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-gray-900"
                    >
                      <div className="relative">
                        <img
                          src={scene.image}
                          alt={scene.title}
                          className="h-48 w-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = `https://source.unsplash.com/800x600/?pokemon,${primaryType}`
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
                        <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-xs uppercase tracking-widest text-white/80">{scene.title}</p>
                          <p className="text-white font-semibold">{scene.description}</p>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Stats et Capacités */}
          <div className="space-y-6">
            {/* Stats Compactes */}
            <div className="bg-white rounded-xl shadow-lg p-6" style={{ borderTop: `4px solid ${typeColor}` }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: typeColor }}>Stats</h3>
              <div className="space-y-3">
                {[
                  { label: 'PV', value: pokemon.hp, icon: '❤️' },
                  { label: 'ATK', value: pokemon.attack, icon: '⚔️' },
                  { label: 'DEF', value: pokemon.defense, icon: '🛡️' },
                  { label: 'ATK SPE', value: pokemon.spAtk, icon: '✨' },
                  { label: 'DEF SPE', value: pokemon.spDef, icon: '🔮' },
                  { label: 'VIT', value: pokemon.speed, icon: '⚡' }
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{stat.icon}</span>
                      <span className="text-sm font-semibold text-gray-700">{stat.label}</span>
                    </div>
                    <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-2 rounded-full transition-all"
                        style={{ 
                          width: `${(stat.value / maxStat) * 100}%`,
                          backgroundColor: typeColor
                        }}
                      ></div>
                    </div>
                    <span 
                      className="text-sm font-black w-8 text-right"
                      style={{ color: typeColor }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="mt-4 pt-4 border-t-2" style={{ borderColor: `${typeColor}30` }}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Total</span>
                  <span 
                    className="text-lg font-black"
                    style={{ color: typeColor }}
                  >
                    {[pokemon.hp, pokemon.attack, pokemon.defense, pokemon.spAtk, pokemon.spDef, pokemon.speed].reduce((a, b) => a + b, 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Capacités Compactes */}
            <div className="bg-white rounded-xl shadow-lg p-6" style={{ borderTop: `4px solid ${typeColor}` }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: typeColor }}>Capacités</h3>
              <div className="space-y-2">
                {pokemon.abilities.map((ability) => (
                  <div 
                    key={ability} 
                    className="px-4 py-2 rounded-lg text-white text-sm font-semibold text-center"
                    style={{ backgroundColor: typeColor }}
                  >
                    ⚡ {ability}
                  </div>
                ))}
              </div>
            </div>

            {/* Évolutions Compactes */}
            <div className="bg-white rounded-xl shadow-lg p-6" style={{ borderTop: `4px solid ${typeColor}` }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: typeColor }}>Évolutions</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-semibold">
                {pokemon.evolutions[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
