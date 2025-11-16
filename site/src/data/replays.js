export const REPLAYS = [
  {
    slug: 'replay-vgc-2025-stall-hyper-offense',
    title: 'VGC 2025 Finals — Stall vs Hyper Offense',
    date: '15 novembre 2025',
    author: 'Pro Player Sam',
    duration: '38:45',
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/embed/3pxvptLoreQ',
    category: 'Compétitif',
    coverImage: {
      src: '/images/replay-vgc-2025.webp',
      alt: 'Finale VGC Stall vs Hyper Offense'
    },
    description: 'Analyse complète d’une finale opposant une équipe Stall ultra défensive à une Hyper Offense explosive.',
    timestamps: [
      { time: '0:00', label: 'Intro & Présentations' },
      { time: '2:30', label: 'Équipes : Stall vs Hyper Offense' },
      { time: '5:45', label: 'Tour 1 : Lead strategy' },
      { time: '12:00', label: 'Mid-Game pivots' },
      { time: '22:15', label: 'Switch décisif' },
      { time: '30:00', label: 'Endgame cleaner' },
      { time: '36:00', label: 'Recap stratégique' }
    ],
    sections: [
      {
        heading: 'Contexte',
        paragraphs: [
          'Opposition entre « Wall Master » (Stall) et « Sweep God » (Hyper Offense) pour la couronne VGC 2025. Deux philosophies radicalement différentes se rencontrent dans un match de 38 minutes où chaque move compte.'
        ]
      },
      {
        heading: 'Équipe Stall',
        listItems: [
          'Feraligatr — tank physique, Assaut Lentille, Hydro-Pump / Tir à Gogo / Soutien / Ténacité (252 Def / 252 HP / 4 SpD).',
          'Blissey — tank spécial, Vestiges de Vie, Soin / Garde / Chant Séduction / Laser Glace (252 HP / 252 SpD / 4 Spe).',
          'Incinéraire — support Burn, Gilet Pare-Flammes, Flare Blitz / Coup Franc / Brouhaha / Éclat de Coquille.',
          'Tokopisco — cleaner lent, Roche d’Évolution, Vibrobscur / Saut d’Honneur / Pince Monstre / Puis-de-Rage.',
          'Dracolosse — pivot, Tonnerre / Envol / Séisme / Riposte.',
          'Alakazam — speed control, Psi / Folie Furieuse / Éclair / Soin.'
        ]
      },
      {
        heading: 'Équipe Hyper Offense',
        listItems: [
          'Garchomp — sweeper physique principal.',
          'Alakazam — sweeper spécial ultra rapide.',
          'Dracaufeu Gigantamax — wallbreaker Dynamax.',
          'Machamp — puissance brute.',
          'Roucarnage — lead Fake Out.',
          'Pikachu Gigantamax — cleaner électrique.'
        ]
      },
      {
        heading: 'Moments clés',
        listItems: [
          '5:45 — Lead Roucarnage vs Feraligatr : Fake Out anticipé grâce à un switch sur Blissey.',
          '12:00 — Dynamax trop tôt côté Hyper Offense, avantage Stall.',
          '22:15 — Switch de Dracolosse sur Pikachu : prédiction parfaite qui inverse le momentum.',
          '30:00 — Tokopisco nettoie la fin de partie avec trois K.O. consécutifs.'
        ]
      },
      {
        heading: 'Leçons',
        listItems: [
          'Ne Dynamaxez pas sans objectif clair.',
          'Les pivots (Volt Switch, Demi-Tour) changent une rencontre.',
          'Lire les tendances adverses permet d’anticiper un Tonnerre ou un switch critique.',
          'Les cleaners lents brillent lorsque les défenses adverses sont déstabilisées.'
        ]
      }
    ],
    links: [
      { label: 'Guide VGC 2025 : Stall Teams', href: '/articles/vgc-2025-stall-guide' },
      { label: 'Tokopisco : analyse détaillée', href: '/pokedex/tokopisco' }
    ]
  },
  {
    slug: 'guide-doubles-format',
    title: 'Guide : 6v6 Doubles Format',
    date: '10 novembre 2025',
    author: 'Pokémon Family',
    duration: '25:30',
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/embed/k-Zr_fHxjPs',
    category: 'Tutoriel',
    coverImage: {
      src: '/images/og-doubles.webp',
      alt: 'Analyse du format doubles'
    },
    description: 'Comprendre et maîtriser le format doubles 6v6 : règles, sélections et stratégies gagnantes.',
    timestamps: [
      { time: '0:00', label: 'Introduction' },
      { time: '2:15', label: 'Différences avec les simples' },
      { time: '5:30', label: 'Synergies essentielles' },
      { time: '10:45', label: 'Mouvements prioritaires' },
      { time: '15:20', label: 'Exemple de matchup' },
      { time: '20:00', label: 'Conseils finaux' }
    ],
    sections: [
      {
        heading: 'Règles de base',
        listItems: [
          '6 Pokémon dans votre roster, 2 sur le terrain en simultané.',
          '4 mouvements par Pokémon et items uniques.',
          'Importance cruciale de la gestion des switchs.'
        ]
      },
      {
        heading: 'Phases du double format',
        subSections: [
          {
            subheading: 'Phase de sélection',
            paragraphs: [
              'Choisissez les bons Pokémon à apporter, puis la paire initiale en fonction du matchup.'
            ]
          },
          {
            subheading: 'Phase de combat',
            paragraphs: [
              'Gérez vos switchs, activez vos synergies (screens, Distorsion, champs) et adaptez vos plans à la seconde.'
            ]
          }
        ]
      },
      {
        heading: 'Stratégies gagnantes',
        subSections: [
          { subheading: 'Approche équilibrée', codeBlock: ['2 Offensifs + 2 Défensifs + 2 Flexibles'] },
          { subheading: 'Approche agressive', codeBlock: ['4 Offensifs + 2 Support'] },
          { subheading: 'Approche défensive', codeBlock: ['2 Offensifs + 4 Défensifs'] }
        ]
      },
      {
        heading: 'Équipes recommandées',
        paragraphs: [
          'Couvrez les types, diversifiez les items et prévoyez toujours au moins une option de speed control. Les meilleurs duos alternent pression offensive et protection.'
        ]
      }
    ]
  }
]
