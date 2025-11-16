import { REPLAYS } from '../data/replays'

const toWatchUrl = (videoUrl) => {
  if (!videoUrl) return '#'
  const marker = '/embed/'
  if (videoUrl.includes(marker)) {
    const [, id] = videoUrl.split(marker)
    return `https://www.youtube.com/watch?v=${id}`
  }
  return videoUrl
}

function ReplayPreviewCard({ replay, onNavigate }) {
  const handleNavigate = () => onNavigate('replay-detail', replay.slug)

  return (
    <article className="bg-white/90 backdrop-blur rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col">
      <div className="relative h-56">
        <img
          src={replay.coverImage?.src ?? 'https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/pokemon-masters/pokemon-masters-08.jpg'}
          alt={replay.coverImage?.alt ?? replay.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
        <div className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white shadow bg-black/50">
          {replay.category}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
          <h3 className="text-2xl font-black leading-tight">{replay.title}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {replay.date} • {replay.duration} • {replay.platform}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-grow">
        <p className="text-gray-700 flex-grow">{replay.description}</p>
        {replay.timestamps?.length > 0 && (
          <div className="text-xs text-gray-500 flex flex-wrap gap-2">
            {replay.timestamps.slice(0, 3).map((stamp) => (
              <span key={`${replay.slug}-${stamp.time}`} className="px-2 py-1 rounded-full bg-gray-100 font-mono">
                {stamp.time} — {stamp.label}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleNavigate}
            className="px-4 py-2 rounded-full bg-pokemon-primary text-white font-semibold hover:-translate-y-0.5 transition shadow"
          >
            Analyse complète
          </button>
          <a
            href={toWatchUrl(replay.videoUrl)}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full border border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 transition"
          >
            Voir sur YouTube →
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ReplaysList({ onNavigate }) {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'radial-gradient(circle at top, #020617 0%, #0f172a 55%, #111827 100%)' }}
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/pokemon-masters/pokemon-masters-09.jpg"
          alt="Fond ligue Pokémon"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 space-y-10 text-white">
        <header className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Base de données vidéo</p>
          <h1 className="text-5xl font-black">Replays commentés</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Choisis un replay pour accéder à l’analyse détaillée, aux timestamps clés et aux liens directs vers YouTube.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REPLAYS.map((replay) => (
            <ReplayPreviewCard key={replay.slug} replay={replay} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  )
}
