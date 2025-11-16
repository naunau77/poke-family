import { TRAINERS } from '../data/trainers'

const buildSignatureEntries = (trainer) => {
  if (!trainer) return []
  if (trainer.signaturePokemonDetails?.length) {
    return trainer.signaturePokemonDetails
  }
  return (trainer.signaturePokemon || []).map((name) => ({ name }))
}

const SignatureChips = ({ entries, light }) => (
  <div className="flex flex-wrap gap-2">
    {entries.map((entry) => (
      <span
        key={entry.name}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border ${
          light ? 'bg-white/10 border-white/30 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'
        }`}
      >
        {entry.image && (
          <img
            src={entry.image}
            alt={entry.name}
            className="w-8 h-8 object-contain rounded-full bg-white"
            loading="lazy"
          />
        )}
        <span>{entry.name}</span>
      </span>
    ))}
  </div>
)

export default function Trainers() {
  const naulynn = TRAINERS.find((trainer) => trainer.id === 'naulynn')
  const otherTrainers = TRAINERS.filter((trainer) => trainer.id !== 'naulynn')
  const naulynnSignatures = buildSignatureEntries(naulynn)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero Section */}
        <header className="text-center">
          <p className="uppercase tracking-widest text-sm font-semibold text-pokemon-electric mb-2">
            Alliances & Mentors
          </p>
          <h1 className="text-5xl font-black text-pokemon-primary mb-4">Dresseurs emblématiques</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez Naulynn, 17 ans, et les dresseurs légendaires qui l'accompagnent dans sa quête pour devenir
            Maîtresse des dresseurs. Chaque profil détaille forces, faiblesses, relations et quêtes majeures.
          </p>
        </header>

        {/* Naulynn Spotlight */}
        {naulynn && (
          <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pokemon-primary/20">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 space-y-6">
                <div>
                  <p className="uppercase text-xs tracking-widest text-gray-500 mb-2">Profil principal</p>
                  <h2 className="text-4xl font-black text-pokemon-primary mb-2">{naulynn.name}</h2>
                  <p className="text-lg text-gray-700 mb-1">{naulynn.title}</p>
                  <p className="text-sm text-gray-500">
                    {naulynn.age} ans • {naulynn.hometown}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{naulynn.biography}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-pokemon-primary mb-3">Forces</h3>
                    <ul className="space-y-2 text-gray-700">
                      {naulynn.strengths.map((strength) => (
                        <li key={strength} className="flex items-start gap-2">
                          <span className="text-pokemon-electric mt-1">⚡</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pokemon-primary mb-3">Faiblesses</h3>
                    <ul className="space-y-2 text-gray-700">
                      {naulynn.weaknesses.map((weakness) => (
                        <li key={weakness} className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">⚠️</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <h3 className="text-lg font-bold text-pokemon-primary mb-3">Captures marquantes</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {naulynn.captureHighlights.map(({ pokemon, detail }) => (
                        <li key={pokemon}>
                          <strong className="text-gray-900">{pokemon}</strong> — {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <h3 className="text-lg font-bold text-pokemon-primary mb-3">Quêtes vécues</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {naulynn.quests.map((quest) => (
                        <li key={quest}>• {quest}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-b from-pokemon-primary to-pokemon-accent text-white p-8 space-y-6">
                {naulynn.image && (
                  <div className="rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                    <img
                      src={naulynn.image}
                      alt={`Illustration de ${naulynn.name}`}
                      className="w-full h-72 object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                      }}
                    />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70 px-4 py-2 bg-black/30">
                      Légende : Naulynn & Pikachu
                    </p>
                  </div>
                )}
                <div>
                  <p className="uppercase text-xs tracking-widest mb-2 text-white/70">Rêve</p>
                  <p className="text-2xl font-black">{naulynn.dream}</p>
                </div>
                <div>
                  <p className="uppercase text-xs tracking-widest mb-2 text-white/70">Relations</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Alliés</p>
                      <p className="text-white/80">{naulynn.relations.allies.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Rivaux</p>
                      <p className="text-white/80">{naulynn.relations.rivals.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Mentors</p>
                      <p className="text-white/80">{naulynn.relations.mentors.join(', ')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="uppercase text-xs tracking-widest mb-2 text-white/70">Équipe signature</p>
                  <SignatureChips entries={naulynnSignatures} light />
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other Trainers */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black text-pokemon-primary">Alliés et rivaux</h2>
            <p className="text-gray-600 text-sm">
              Cliquer sur un profil (ou le survoler) révèle forces, faiblesses et missions réalisées avec Naulynn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherTrainers.map((trainer) => (
              <article
                key={trainer.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                {trainer.image && (
                  <img
                    src={trainer.image}
                    alt={`Portrait de ${trainer.name}`}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                    style={{ objectPosition: 'center top' }}
                    loading="lazy"
                  />
                )}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">{trainer.title}</p>
                    <h3 className="text-2xl font-bold text-pokemon-primary">{trainer.name}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{trainer.age} ans</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{trainer.hometown}</p>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-4">
                  {trainer.biography}
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-pokemon-primary mb-2">Pokémon signature</p>
                  <SignatureChips entries={buildSignatureEntries(trainer)} />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-pokemon-primary mb-2">Forces</p>
                    <ul className="space-y-1 text-gray-700">
                      {trainer.strengths.slice(0, 3).map((strength) => (
                        <li key={strength}>• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-pokemon-primary mb-2">Faiblesses</p>
                    <ul className="space-y-1 text-gray-700">
                      {trainer.weaknesses.slice(0, 3).map((weakness) => (
                        <li key={weakness}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  <p>
                    <span className="font-semibold text-pokemon-primary">Quêtes :</span>{' '}
                    {trainer.quests.slice(0, 2).join(' • ')}
                  </p>
                  <p>
                    <span className="font-semibold text-pokemon-primary">Relations :</span>{' '}
                    Alliés {trainer.relations.allies.slice(0, 3).join(', ')} | Rivaux{' '}
                    {trainer.relations.rivals.slice(0, 2).join(', ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
