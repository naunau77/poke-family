const encodeSvg = (svg) => `data:image/svg+xml,${encodeURIComponent(svg.replace(/\n+/g, ''))}`

const sanitizeId = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const createSceneImage = ({ title, colors, accent, icon, index = 0 }) => {
  const gradientId = `grad-${sanitizeId(title)}-${index}`
  const circleOffset = (index % 3) * 40
  const secondaryOffset = (index % 2) * 60

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors[0]}" />
          <stop offset="100%" stop-color="${colors[1]}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#${gradientId})" rx="32" />
      <circle cx="${120 + circleOffset}" cy="${100 + secondaryOffset}" r="110" fill="${accent}" opacity="0.18" />
      <circle cx="${640 - circleOffset}" cy="${380 - secondaryOffset}" r="160" fill="${accent}" opacity="0.12" />
      <path d="M40 340 Q 180 ${300 - circleOffset}, 320 360 T 600 ${330 + circleOffset}" fill="none" stroke="${accent}" stroke-width="12" stroke-linecap="round" opacity="0.15" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="120" opacity="0.25">${icon}</text>
      <text x="48" y="460" fill="rgba(255,255,255,0.9)" font-family="'Poppins', sans-serif" font-size="34" font-weight="700">${title}</text>
    </svg>
  `

  return encodeSvg(svg)
}

const THEMES = {
  verdant: { colors: ['#134E4A', '#2DD4BF'], accent: '#BBF7D0', icon: '🌿' },
  ember: { colors: ['#7F1D1D', '#F97316'], accent: '#FECACA', icon: '🔥' },
  tide: { colors: ['#0F172A', '#22D3EE'], accent: '#BFDBFE', icon: '🌊' },
  storm: { colors: ['#111827', '#FBBF24'], accent: '#FDE68A', icon: '⚡' },
  aurora: { colors: ['#312E81', '#A855F7'], accent: '#F5D0FE', icon: '✨' },
  stage: { colors: ['#4C1D95', '#EC4899'], accent: '#FBCFE8', icon: '🎵' },
  psychic: { colors: ['#581C87', '#9333EA'], accent: '#E9D5FF', icon: '🔮' },
  mystic: { colors: ['#0F172A', '#4C1D95'], accent: '#93C5FD', icon: '🕊️' },
  chronicle: { colors: ['#1F2937', '#9CA3AF'], accent: '#D1D5DB', icon: '📜' }
}

const TYPE_THEME_MAP = {
  plante: 'verdant',
  poison: 'verdant',
  eau: 'tide',
  feu: 'ember',
  electrique: 'storm',
  électrique: 'storm',
  normal: 'chronicle',
  fée: 'aurora',
  psy: 'psychic',
  psyc: 'psychic',
  spectre: 'aurora',
  vol: 'mystic',
  combat: 'ember',
  acier: 'chronicle'
}

const resolveThemeKey = (key) => {
  if (!key) return 'chronicle'
  if (THEMES[key]) return key
  return TYPE_THEME_MAP[key.toLowerCase()] || 'chronicle'
}

const createScenes = (themeKey, scenes) => {
  const theme = THEMES[themeKey] || THEMES.chronicle
  return scenes.map((scene, index) => ({
    ...scene,
    image: createSceneImage({ ...theme, title: scene.title, index })
  }))
}

export const POKEMON_GALLERY = {
  bulbizarre: createScenes('verdant', [
    { title: 'Sanctuaire de Meaux', description: 'Les lianes humides apaisent les braises du sanctuaire.' },
    { title: 'Serre de Lognes', description: 'Un écosystème miniature renaît autour de la graine totem.' },
    { title: 'Clairière guidée', description: 'Un chemin mousseux éclaire les otages libérés.' }
  ]),
  salameche: createScenes('ember', [
    { title: 'Falaises ardentes', description: 'La flamme protège les navigateurs perdus en mer.' },
    { title: 'Aube de Lognes', description: 'La braise se reflète dans l’eau du lac Vaires.' },
    { title: 'Tournoi céleste', description: 'Les combos aériens incendient les nuages.' }
  ]),
  carapuce: createScenes('tide', [
    { title: 'Canaux urbains', description: 'Les jets d’eau nettoient les berges après la tempête.' },
    { title: 'Barge de secours', description: 'Les civils se regroupent derrière une muraille liquide.' },
    { title: 'Pluie artificielle', description: 'Une averse contrôlée rafraîchit l’arène mobile.' }
  ]),
  dracaufeu: createScenes('ember', [
    { title: 'Aérium de Lognes', description: 'Un rempart flamboyant veille sur la ville.' },
    { title: 'Remparts ardents', description: 'Le duo trace des spirales pour l’Opération Arceus.' },
    { title: 'Raid Paldea', description: 'Un ciel rouge accompagne la libération des légendaires.' }
  ]),
  tortank: createScenes('tide', [
    { title: 'Patrouille nautique', description: 'Les pompes alimentent les quartiers immergés.' },
    { title: 'Port de Rosalia', description: 'Des arcs d’eau filtrent les braises de Ho-Oh.' },
    { title: 'Escouade marine', description: 'Les plongeurs suivent la cadence aquatique.' }
  ]),
  florizarre: createScenes('verdant', [
    { title: 'Serre luminescente', description: 'Les spores colorent les serres communautaires.' },
    { title: 'Rituel de renaissance', description: 'Des pétales arc-en-ciel tombent sur la graine totem.' },
    { title: 'Forêt suspendue', description: 'Les lianes reconstruisent la canopée des ruines.' }
  ]),
  abra: createScenes('psychic', [
    { title: 'Observatoire astral', description: 'Les flux psychiques se dessinent dans le ciel.' },
    { title: 'Veille télépathique', description: 'Les runes flottent autour des quartiers protégés.' },
    { title: 'Corridor téléporté', description: 'Des portails relient Lognes aux bases alliées.' }
  ]),
  alakazam: createScenes('psychic', [
    { title: 'Salle stratégique', description: 'Les cuillères lévitent au-dessus des plans.' },
    { title: 'Chambre des miroirs', description: 'Les illusions préparent les combats majeurs.' },
    { title: 'Tour mentale', description: 'Une spirale violette synchronise les télépathes.' }
  ]),
  ectoplasma: createScenes('aurora', [
    { title: 'Catacombes codées', description: 'Les glyphes mauves animent les galeries secrètes.' },
    { title: 'Veille spectrale', description: 'Un brouillard fluorescent protège Lognes.' },
    { title: 'Concert astral', description: 'Les rires spectrals accompagnent Grodoudou.' }
  ]),
  poussacha: createScenes('verdant', [
    { title: 'Ruelle botanique', description: 'Les symboles verdoyants marquent les murs.' },
    { title: 'Mission furtive', description: 'Un halo lunaire entoure sa silhouette.' },
    { title: 'Atelier herbiers', description: 'Les élèves recopient des feuilles de Paldea.' }
  ]),
  chochodile: createScenes('stage', [
    { title: 'Scène improvisée', description: 'Les percussions éveillent la foule de Lognes.' },
    { title: 'Bataille verre et feu', description: 'Des vitraux flamboyants reflètent son rythme.' },
    { title: 'Studio radio', description: 'Les hymnes sont enregistrés pour Radio Family.' }
  ]),
  coiffeton: createScenes('tide', [
    { title: 'Parade nautique', description: 'Les chorégraphies aquatiques illuminent Paldea.' },
    { title: 'Surf éclair', description: 'Les planches brillent sous les arcs électriques.' },
    { title: 'Canaux festifs', description: 'Une procession colorée traverse les ponts.' }
  ]),
  suicune: createScenes('mystic', [
    { title: 'Lac immaculé', description: 'Les rubans polaires ondulent sur les eaux pures.' },
    { title: 'Course cosmique', description: 'Des arcs argentés fendent la nuit.' },
    { title: 'Opération Arceus', description: 'Le brouillard sacré dissimule l’escouade.' }
  ]),
  lugia: createScenes('mystic', [
    { title: 'Abysse argenté', description: 'Les courants profonds se calment à son passage.' },
    { title: 'Forteresse flottante', description: 'Les chaînes énergétiques se fissurent.' },
    { title: 'Réveil légendaire', description: 'Un halo blanc perce la tempête magnétique.' }
  ]),
  hooh: createScenes('aurora', [
    { title: 'Clocher ardent', description: 'Les plumes éclairent Rosalia.' },
    { title: 'Plumes sacrées', description: 'Des pigments arc-en-ciel bénissent les artistes.' },
    { title: 'Vol inaugural', description: 'Un soleil doré se reflète sur Lognes.' }
  ]),
  pikachu: createScenes('storm', [
    { title: 'Phare de Vermilava', description: 'Les éclairs dessinent le symbole de Lognes.' },
    { title: 'Atelier météo', description: 'Les capteurs artisanaux s’illuminent.' },
    { title: 'Forteresse Obscura', description: 'Un Giga Tonnerre transperce les nuages violets.' }
  ]),
  raichu: createScenes('storm', [
    { title: 'Plage d’Alola', description: 'Les vagues psychiques sculptent le sable.' },
    { title: 'Galerie électrique', description: 'Les néons suivent sa danse.' },
    { title: 'Station météo', description: 'Les senseurs marins brillent au crépuscule.' }
  ]),
  grodoudou: createScenes('stage', [
    { title: 'Scène d’Illumis', description: 'Un chant canon soulève la foule.' },
    { title: 'Studio itinérant', description: 'Les berceuses se gravent sur bande.' },
    { title: 'Concert solidaire', description: 'Des lanternes s’alignent dans la nuit.' }
  ])
}

export const getGalleryForPokemon = (slug, fallbackKey = 'chronicle') => {
  if (POKEMON_GALLERY[slug]) {
    return POKEMON_GALLERY[slug]
  }

  const fallback = THEMES[resolveThemeKey(fallbackKey)] || THEMES.chronicle
  return [
    {
      title: 'Souvenir légendaire',
      description: 'Illustration générée dynamiquement selon le type.',
      image: createSceneImage({ ...fallback, title: 'Souvenir légendaire', index: 0 })
    }
  ]
}
