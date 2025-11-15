import { POKEMONS } from '../data/pokemons'
import { getTypeColor, getTypeHexColor } from '../utils/typeColors'

export default function Pokedex({ onNavigate }) {
  const getGradientStyle = (type) => {
    const color = getTypeHexColor(type)
    return {
      background: `linear-gradient(135deg, ${color}20 0%, ${color}05 100%)`
    }
  }

  return (
    <section className="py-16" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f0ff 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-4 text-pokemon-primary">Pokédex Complet</h1>
          <p className="text-xl text-gray-600">Explorez la base de données complète avec {POKEMONS.length} Pokémon</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POKEMONS.map((pokemon) => {
            const typeColor = getTypeColor(pokemon.type)
            const typeHex = getTypeHexColor(pokemon.type)
            
            return (
              <button
                key={pokemon.id}
                onClick={() => onNavigate('pokemon-detail', pokemon)}
                className="group relative bg-white rounded-xl border-2 overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
                style={{ borderColor: typeHex }}
              >
                {/* Background gradient based on type */}
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${typeHex} 0%, transparent 100%)` }}
                ></div>
                
                {/* Content wrapper */}
                <div className="relative z-10 p-4 text-center">
                  {/* Image container with type gradient */}
                  <div 
                    className="h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:opacity-90 transition"
                    style={{ background: `linear-gradient(135deg, ${typeHex}15 0%, ${typeHex}05 100%)` }}
                  >
                    <img 
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="w-40 h-40 object-contain drop-shadow-lg group-hover:scale-110 transition duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/160?text=${pokemon.name}`
                      }}
                    />
                  </div>
                  
                  {/* Info */}
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: typeHex }}>#{pokemon.number.toString().padStart(3, '0')}</p>
                    <h3 className="font-black text-lg mb-2 group-hover:opacity-80 transition">{pokemon.name}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {pokemon.type.split('/').map((type, idx) => (
                        <span 
                          key={idx}
                          className="text-xs text-white px-3 py-1 rounded-full font-semibold"
                          style={{ backgroundColor: getTypeHexColor(type.trim()) }}
                        >
                          {type.trim()}
                        </span>
                      ))}
                    </div>
                    
                    {/* Quick stats */}
                    <div className="mt-3 pt-3 border-t-2" style={{ borderColor: `${typeHex}30` }}>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <p className="font-semibold" style={{ color: typeHex }}>PV</p>
                          <p className="text-gray-700">{pokemon.hp}</p>
                        </div>
                        <div>
                          <p className="font-semibold" style={{ color: typeHex }}>ATK</p>
                          <p className="text-gray-700">{pokemon.attack}</p>
                        </div>
                        <div>
                          <p className="font-semibold" style={{ color: typeHex }}>DEF</p>
                          <p className="text-gray-700">{pokemon.defense}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
