export const REPLAYS = [
  {
    slug: 'replay-vgc-2025-stall-hyper-offense',
    title: 'VGC 2025 Finals — Stall vs Hyper Offense',
    date: '15 novembre 2025',
    author: 'Pro Player Sam',
    duration: '38:45',
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
          'Lire les tendencies adverses permet d’anticiper un Tonnerre ou un switch critique.',
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
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
  },
  {
    slug: 'pikachu-sweep-moments',
    title: 'Pikachu Comp Sweep — Moments Forts',
    date: '5 novembre 2025',
    author: 'Pokémon Family',
    duration: '15:20',
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'Fun',
    coverImage: {
      src: '/images/og-pikachu-sweep.webp',
      alt: 'Pikachu en pleine attaque'
    },
    description: 'Compilation commentée des meilleurs moments d’un sweep Pikachu compétitif.',
    timestamps: [
      { time: '0:00', label: 'Setup initial' },
      { time: '2:10', label: 'Première élimination' },
      { time: '5:45', label: 'Deuxième Pokémon tombe' },
      { time: '8:30', label: 'Troisième élimination' },
      { time: '12:00', label: 'Victoire finale' }
    ],
    sections: [
      {
        heading: 'Build utilisé',
        paragraphs: [
          'Nature Modeste, 252 Attaque Spéciale / 252 Vitesse, Lumotte et talent Électromorphose pour booster l’attaque spéciale sur terrain électrique.'
        ],
        listItems: [
          'Tonnerre — move principal.',
          'Palpillume — couverture eau/plante.',
          'Danse-Fleur — augmente la vitesse.',
          'Repos — survie.'
        ]
      },
      {
        heading: 'Plan de sweep',
        listItems: [
          'Poser un champ électrique avec un support.',
          'Booster la vitesse.',
          'Utiliser Tonnerre et Palpillume pour nettoyer.',
          'Conserver de quoi se soigner.'
        ]
      },
      {
        heading: 'Points clés',
        listItems: [
          'La vitesse prime sur tout.',
          'Électromorphose transforme Pikachu en menace réelle.',
          'Le support de terrain est obligatoire.',
          'La survie prime sur l’attaque brute.'
        ]
      }
    ]
  },
  {
    slug: 'regional-2025-highlights',
    title: 'Championnat Régional 2025 — Highlights',
    date: '1 novembre 2025',
    author: 'Pokémon Family',
    duration: '42:10',
    coverImage: {
      src: '/images/og-regional-2025.webp',
      alt: 'Championnat régional 2025'
    },
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'Compétitif',
    description: 'Les moments clés du championnat régional, de l’équipe surprise à la grande finale.',
    timestamps: [
      { time: '0:00', label: 'Ouverture' },
      { time: '2:30', label: 'Premiers matchs' },
      { time: '8:45', label: 'Upset surprise' },
      { time: '15:20', label: 'Demi-finales' },
      { time: '25:00', label: 'Moment décisif' },
      { time: '35:15', label: 'Grande finale' },
      { time: '40:00', label: 'Interviews' }
    ],
    sections: [
      {
        heading: 'Événements marquants',
        paragraphs: [
          'Une équipe non conventionnelle a surpris le bracket, la demi-finale a opposé deux champions historiques, et la finale a mis en scène tradition vs innovation.'
        ]
      },
      {
        heading: 'Équipe gagnante',
        listItems: [
          'Alakazam, Tortank, Dracaufeu, Grodoudou, Raichu, Florizarre.'
        ]
      },
      {
        heading: 'Runner-up',
        listItems: [
          'Iron Hands, Flamme, Alchimie, Raichu, Tortank, Alakazam.'
        ]
      },
      {
        heading: 'Leçons',
        listItems: [
          'La flexibilité paie.',
          'La vitesse reste reine.',
          'Les supports sont critiques.'
        ]
      }
    ]
  },
  {
    slug: 'shiny-breeding-advanced',
    title: 'Breeding Shiny : Techniques Avancées',
    date: '25 octobre 2025',
    author: 'Pokémon Family',
    duration: '20:15',
    coverImage: {
      src: '/images/og-shiny-breeding.webp',
      alt: 'Méthodes de breeding shiny'
    },
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: 'Tutoriel',
    description: 'Méthode Masuda avancée, statistiques réalistes et automatisation pour produire des Shinys compétitifs.',
    timestamps: [
      { time: '0:00', label: 'Introduction' },
      { time: '1:45', label: 'Méthode Masuda' },
      { time: '4:30', label: 'Chaîning vs breeding passif' },
      { time: '7:15', label: 'Optimiser avec Poké Radar' },
      { time: '10:00', label: 'Gestion des IVs' },
      { time: '14:20', label: 'Statistiques et temps' },
      { time: '18:00', label: 'Astuces finales' }
    ],
    sections: [
      {
        heading: 'Méthode Masuda avancée',
        paragraphs: [
          'Croisez deux Pokémon de langues différentes, fixez la nature avec Everstone et équipez un parent de Destiny Knot.'
        ],
        listItems: [
          'Utilisez Poké Radar pour améliorer les IV des sauvages.',
          'Créez des chaînes de parents Shinys pour augmenter les chances.',
          'Hyper-entraînement pour polir les IV finaux.'
        ]
      },
      {
        heading: 'Statistiques réalistes',
        paragraphs: [
          'Sans Charme Chroma : ~1 shiny toutes les 8h.',
          'Avec Charme : ~1 toutes les 3-4h.',
          'Masuda + Charme : ~1 toutes les 1,5-2h.'
        ]
      },
      {
        heading: 'Outils essentiels',
        listItems: [
          'Poké Radar, Destiny Knot, Everstone, Power Items, Shiny Charm.'
        ]
      },
      {
        heading: 'Stratégie pro',
        codeBlock: [
          'Jours 1-7 : trouver les parents parfaits.',
          'Jours 8-14 : établir une chaîne d’IV.',
          'Jours 15-45 : breeding Masuda Method.',
          'Jour 45+ : attendre le Shiny.'
        ]
      },
      {
        heading: 'Automatisation',
        paragraphs: [
          'Utilisez des macros/farming passif pour éclore en boucle et vérifiez périodiquement vos œufs.'
        ]
      }
    ]
  },
  {
    slug: 'paradox-pokemon-strats',
    title: 'Pokémon Paradox : Stratégies Modernes',
    date: '20 octobre 2025',
    author: 'Pokémon Family',
    duration: '35:50',
    platform: 'YouTube',
    videoUrl: 'https://www.youtube.com/embed/OTZQ-7-RnFo',
    category: 'Compétitif',
    coverImage: {
      src: '/images/og-paradox-strats.webp',
      alt: 'Stratégies Pokémon paradoxaux'
    },
    description: 'Tour d’horizon des piliers paradoxes (Iron Hands, Flamme, Alchimie) et des synergies qui les accompagnent.',
    timestamps: [
      { time: '0:00', label: 'Introduction' },
      { time: '3:15', label: 'Iron Hands' },
      { time: '8:00', label: 'Flamme' },
      { time: '12:45', label: 'Alchimie' },
      { time: '17:20', label: 'Combinaisons' },
      { time: '22:10', label: 'Synergies gagnantes' },
      { time: '28:30', label: 'Matchups' },
      { time: '33:00', label: 'Conseils finaux' }
    ],
    sections: [
      {
        heading: 'Les trois piliers',
        subSections: [
          {
            subheading: 'Iron Hands',
            paragraphs: [
              'Électrique/Combat avec Électromorphose. Peut servir de sweeper ou pivot avec Champ Électrique.'
            ]
          },
          {
            subheading: 'Flamme',
            paragraphs: [
              'Feu/Acier avec Armure Acérée. Excellente défense et wallbreaker redoutable.'
            ]
          },
          {
            subheading: 'Alchimie',
            paragraphs: [
              'Feu/Spectre doté d’une pseudo-invulnérabilité. Support parfait pour les setups lents.'
            ]
          }
        ]
      },
      {
        heading: 'Synergies avec les classiques',
        subSections: [
          { subheading: 'Groupe pur paradoxal', codeBlock: ['Iron Hands + Flamme + Alchimie + 3 supports classiques'] },
          { subheading: 'Groupe mixte équilibré', codeBlock: ['2 paradoxes + 4 classiques polyvalents'] },
          { subheading: 'Groupe focus paradoxe', codeBlock: ['6 paradoxes optimisés pour des rôles précis'] }
        ]
      },
      {
        heading: 'Techniques stratégiques',
        listItems: [
          'Poser un terrain électrique pour Iron Hands.',
          'Utiliser Distorsion pour booster Alchimie.',
          'En doubles, combinez les paradoxes avec des supports classiques pour maximiser la durabilité.'
        ]
      },
      {
        heading: 'Matchups critiques',
        listItems: [
          'Contre Alakazam : miser sur la défense.',
          'Contre Dracaufeu : tirer parti de la résistance Feu/Acier.',
          'Contre Grodoudou : trouver des brèches offensives rapidement.'
        ]
      }
    ]
  }
]
