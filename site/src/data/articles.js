export const ARTICLES = [
  {
    slug: 'guide-debut-competitif',
    title: 'Les meilleures stratégies pour débuter en Pokémon Compétitif',
    date: '15 novembre 2025',
    author: 'Alex Poke',
    description: 'Guide complet pour démarrer en compétition : teambuilding, EV training, stratégie mentale et ressources utiles.',
    readingTime: '8 min',
    category: 'Articles',
    featured: true,
    heroImage: {
      src: '/images/article-competitive.webp',
      alt: 'Guide compétitif Pokémon'
    },
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Bienvenue dans le monde passionnant de la compétition Pokémon ! Si vous souhaitez tester vos compétences contre d’autres joueurs sans savoir par où commencer, cette fiche est faite pour vous. La scène compétitive peut sembler intimidante mais, avec une préparation méthodique, n’importe quel joueur peut progresser rapidement.'
        ]
      },
      {
        heading: 'Comprendre les bases du teambuilding',
        paragraphs: [
          'La première étape consiste à construire une équipe équilibrée capable d’encaisser comme d’attaquer. Chaque rôle couvert limite les faiblesses et ouvre des opportunités de victoire.'
        ],
        listTitle: 'Rôles indispensables',
        listItems: [
          'Tank spécial : encaisse les coups spéciaux (ex. Blissey, Tritosor).',
          'Tank physique : bloque les attaques physiques (ex. Feraligatr, Donphan).',
          'Sweepers offensifs : infligent des dégâts massifs rapidement.',
          'Support / pivot : offre des buffs et des switchs sécurisés.',
          'Cleaner : termine les matchs lorsque les défenses sont affaiblies.'
        ],
        subSections: [
          {
            subheading: 'Exemple de composition équilibrée',
            listItems: [
              'Lead rapide pour poser Piège de Roc ou créer du momentum.',
              'Tank physique avec moves de soutien.',
              'Tank spécial pour absorber les attaques magiques.',
              'Sweeper spécial polyvalent.',
              'Attaquant physique pour casser les défenses lourdes.',
              'Cleaner ultra rapide pour conclure.'
            ]
          }
        ]
      },
      {
        heading: 'EV training et natures',
        paragraphs: [
          'Les EV (Effort Values) et les natures constituent l’optimisation invisible qui sépare les joueurs occasionnels des compétiteurs. Chaque Pokémon battu offre des EV spécifiques et, cumulés correctement, ils définissent les statistiques finales.',
          'Concentrez 252 EV dans la statistique primaire (attaque, défense ou vitesse), complétez avec 252 EV dans la statistique secondaire, et placez les 4 EV restants en PV. Choisissez une nature qui augmente la statistique clé (+10 %) et diminue une statistique inutile (-10 %).'
        ],
        subSections: [
          {
            subheading: 'Exemple : Pikachu sweeper spécial',
            paragraphs: [
              'Nature Modeste (+Atk.Sp, -Atk).',
              'EV : 252 Attaque Spéciale / 252 Vitesse / 4 PV.',
              'Ce profil lui permet d’outspeeder la majorité des menaces et de mettre K.O. en un coup.'
            ]
          }
        ]
      },
      {
        heading: 'Stratégie mentale et momentum',
        paragraphs: [
          'La lecture du jeu est cruciale : prédisez les switches adverses pour gagner des tours gratuits. Conservez vos ressources : chaque PP compte en fin de partie.',
          'Le momentum est roi : maintenez la pression et empêchez vos adversaires de placer leurs propres setup ou leurs défenseurs.'
        ]
      }
    ],
    keyPoints: [
      'Construisez une équipe équilibrée, pas une armée de sweepers fragiles.',
      'Optimisez EV et natures avant toute session ranked.',
      'Entraînez votre lecture du jeu pour anticiper switches et setups.',
      'Pratiquez régulièrement sur Pokémon Showdown et rejoignez une communauté.'
    ],
    resources: [
      { label: 'Guide avancé : Coverage moves', href: '/articles/advanced-coverage' },
      { label: 'Top 10 Pokémon compétitifs 2025', href: '/articles/top-10-pokemon-competitifs' },
      { label: 'Pokémon Showdown', href: 'https://pokemonshowdown.com' }
    ]
  },
  {
    slug: 'strategies-double-format',
    title: 'Stratégies Avancées : Double Format',
    date: '5 novembre 2025',
    author: 'Pokémon Family',
    description: 'Maîtrisez les synergies offensives et défensives propres au format doubles et apprenez à bâtir des duos performants.',
    readingTime: '10 min',
    category: 'Tutoriel',
    featured: true,
    heroImage: {
      src: '/images/og-double-format.webp',
      alt: 'Stratégies double format Pokémon'
    },
    sections: [
      {
        heading: 'Format doubles : guide stratégique',
        paragraphs: [
          'Le format doubles offre une profondeur tactique unique où deux Pokémon agissent simultanément. Les synergies entre partenaires, la gestion des priorités et la rotation constante définissent le rythme des matchs.'
        ]
      },
      {
        heading: 'Principes fondamentaux',
        subSections: [
          {
            subheading: 'Synergies offensives',
            listItems: [
              'Couplez des mouvements complémentaires (ex. Garde Large + attaques ciblées).',
              'Profitez des boosts de puissance comme Électromorphose ou Léviathan.',
              'Exploitez les immunités de type pour lancer des attacks sans risque.'
            ]
          },
          {
            subheading: 'Synergies défensives',
            listItems: [
              'Couvrez en permanence la faiblesse de votre partenaire.',
              'Abri, Rempart et autres mouvements protecteurs sont indispensables.',
              'Répartissez les soins et la gestion des statuts sur des supports dédiés.'
            ]
          }
        ]
      },
      {
        heading: 'Constructions d’équipes doubles',
        paragraphs: [
          'Une équipe efficace s’appuie sur un noyau offensif, un support spécialisé et des Pokémon flexibles capables de réagir à tous les matchups.'
        ],
        subSections: [
          {
            subheading: 'Structure classique',
            listItems: [
              '2 Pokémon agressifs pour mettre la pression d’entrée.',
              '2 supports pour buff/debuff.',
              '2 Pokémon polyvalents pour s’adapter.'
            ]
          },
          {
            subheading: 'Rôles clés',
            listItems: [
              'Sweeper (physique/spécial),',
              'Wall,',
              'Support,',
              'Setter (Distorsion, Champ, Climats).'
            ]
          }
        ]
      },
      {
        heading: 'Stratégies avancées',
        subSections: [
          {
            subheading: 'Priorité et vitesse',
            paragraphs: ['Gérez l’ordre des actions via les attaques prioritaires et les investissements en Vitesse.']
          },
          {
            subheading: 'Redirection de cibles',
            paragraphs: ['Utilisez des Pokémon capables d’attirer les attaques adverses pour protéger votre win condition.']
          },
          {
            subheading: 'Rotations efficaces',
            paragraphs: ['Alternez intelligemment vos Pokémon pour renouveler les buffs et préserver vos ressources.']
          }
        ]
      },
      {
        heading: 'Matchups courants',
        paragraphs: [
          'Identifiez les archétypes (Trick Room, Hyper Offense, Balance) et préparez des plans anti-meta : Taunt, Distorsion, Imprison, etc.'
        ]
      }
    ]
  },
  {
    slug: 'breeding-competitif-guide',
    title: 'Breeding Compétitif : Guide Complet',
    date: '25 octobre 2025',
    author: 'Pokémon Family',
    description: 'Patience, sélection et outils : la recette pour produire des Pokémon parfaits pour la compétition.',
    readingTime: '15 min',
    category: 'Tutoriel',
    featured: true,
    heroImage: {
      src: '/images/og-breeding.webp',
      alt: 'Guide breeding compétitif'
    },
    sections: [
      {
        heading: 'Comprendre les IVs',
        paragraphs: [
          'Chaque Pokémon possède des IV (0 à 31) par statistique. Recherchez les IV parfaits dans les stats critiques et utilisez l’hyper-entraînement pour finaliser les autres.'
        ],
        listItems: [
          'IV parfaits : 31 dans les stats importantes.',
          'Hyper-entraînement : augmente artificiellement un IV grâce à des Capsules.'
        ]
      },
      {
        heading: 'Sélectionner les parents',
        paragraphs: [
          'Débusquez des Pokémon aux bons IV dans les raids ou via Pokémon Home, puis composez une chaîne de reproduction.'
        ],
        subSections: [
          {
            subheading: 'Rappels utiles',
            listItems: [
              'La femelle transmet l’espèce, le mâle transmet les IV.',
              'Les natures s’obtiennent via Menthes ou Everstone.',
              'Les talents s’héritent selon le parent sélectionné.'
            ]
          }
        ]
      },
      {
        heading: 'Processus de breeding',
        paragraphs: [
          'Travaillez par générations : commencez par des parents moyens puis améliorez progressivement jusqu’à obtenir du 31/31/31/31/31/31.'
        ],
        codeBlock: [
          'Génération 1 : IV médiocres',
          'Génération 2 : IV améliorés',
          'Génération 3 : presque parfait',
          'Génération 4+ : 31 partout'
        ]
      },
      {
        heading: 'Shinys compétitifs',
        paragraphs: [
          'Combinez Charme Chroma, méthode Masuda et patience. Comptez 3 à 4 fois plus d’œufs pour un shiny irréprochable.'
        ]
      },
      {
        heading: 'Outils essentiels',
        listItems: [
          'Poké Radar pour chaîner les rencontres.',
          'Destiny Knot pour hériter de cinq IV.',
          'Power Items pour forcer un IV spécifique.',
          'Everstone pour bloquer la nature.'
        ]
      },
      {
        heading: 'Timeline réaliste',
        paragraphs: [
          'Pokémon parfait : 2 à 4 semaines.',
          'Shiny compétitif : 2 à 3 mois.',
          'Shiny parfait : 3 à 6 mois. Patience et automatisation sont les maîtres mots.'
        ]
      }
    ]
  },
  {
    slug: 'metagame-switch-evolution',
    title: 'Métagame Switch : Évolution 2024-2025',
    date: '20 octobre 2025',
    author: 'Pokémon Family',
    description: 'Analyse des changements majeurs sur Nintendo Switch avec l’arrivée des Pokémon paradoxaux.',
    readingTime: '11 min',
    category: 'Analyse',
    featured: true,
    heroImage: {
      src: '/images/og-metagame.webp',
      alt: 'Métagame Switch 2024-2025'
    },
    sections: [
      {
        heading: 'Avant : métagame pré-Dynamax',
        paragraphs: [
          'Le format reposait sur des archétypes équilibrés : Balance, Trick Room et Hyper Offense.',
          'Alakazam, Dracaufeu, Grodoudou et Raichu dominaient la scène.'
        ]
      },
      {
        heading: 'Après : invasion des paradoxes (2023-2025)',
        paragraphs: [
          'Iron Hands, Flamme et Alchimie ont redistribué les cartes avec leurs statistiques hors normes et leurs talents uniques.'
        ]
      },
      {
        heading: 'Changements de format',
        subSections: [
          {
            subheading: 'VGC 2024',
            listItems: [
              'Arrivée officielle des paradoxes.',
              'Formats plus agressifs.',
              'La vitesse perd légèrement de son importance.'
            ]
          },
          {
            subheading: 'VGC 2025',
            listItems: [
              'Retour à des équipes hybrides classiques + paradoxes.',
              'Recherche d’équilibre et de nouvelles synergies.'
            ]
          }
        ]
      },
      {
        heading: 'Impact sur la compétition',
        paragraphs: [
          'Les créateurs d’équipes ciblent désormais un mix de Pokémon traditionnels et de paradoxes pour couvrir toutes les situations.'
        ],
        codeBlock: [
          '2023 : Alakazam + Dracaufeu + support',
          '2024 : Iron Hands + Paradox + support',
          '2025 : Mélange des deux mondes'
        ]
      },
      {
        heading: 'Prédictions 2026',
        paragraphs: [
          'Les prochaines générations ajouteront encore plus de combinaisons. Attendez-vous à des formats hybrides plus techniques et à un retour de certaines légendes classiques.'
        ]
      }
    ]
  },
  {
    slug: 'top-10-pokemon-competitifs',
    title: 'Top 10 Pokémon Compétitifs 2025',
    date: '10 novembre 2025',
    author: 'Pokémon Family',
    description: 'Les dix Pokémon qui dictent la loi dans le métagame actuel.',
    readingTime: '12 min',
    category: 'Compétitif',
    featured: true,
    heroImage: {
      src: '/images/og-top10.webp',
      alt: 'Top 10 Pokémon compétitifs'
    },
    rankings: [
      { title: 'Iron Hands', text: 'Hybrid électrique/combat redoutable en doubles, couplé à Électromorphose.' },
      { title: 'Flamme', text: 'Feu/Acier solide qui offre couverture et résistance physique.' },
      { title: 'Alchimie', text: 'Mur paradoxal quasi invulnérable.' },
      { title: 'Grodoudou', text: 'Support polyvalent capable de calmer tous les matchups.' },
      { title: 'Alakazam', text: 'Toujours aussi dangereux grâce à sa vitesse et son attaque spéciale.' },
      { title: 'Dracaufeu', text: 'Couverture Feu/Dragon avec accès à des attaques massives.' },
      { title: 'Tortank', text: 'Support défensif incontournable en teams équilibre.' },
      { title: 'Florizarre', text: 'Support plante avec Synthèse et spores utilitaires.' },
      { title: 'Raichu', text: 'Version améliorée de Pikachu, type double et stats supérieures.' },
      { title: 'Ectoplasma', text: 'Vitesse et puissance spéciale pour finir n’importe quel duel.' }
    ],
    heroImage: {
      src: '/images/og-types-faibles.webp',
      alt: 'Stratégies des types faibles'
    },
    sections: [
      {
        heading: 'Analyse du métagame',
        paragraphs: [
          'Ces Pokémon dominent grâce à leur couverture de types, leurs statistiques équilibrées, des movepools essentiels et des synergies naturelles avec les paradoxes.'
        ]
      },
      {
        heading: 'Tendances futures',
        paragraphs: [
          'Les prochaines générations et mécaniques Dynamax/Téracristal continuent d’ouvrir des opportunités. Restez agile : de nouveaux challengers ne manqueront pas de bousculer ce classement.'
        ]
      }
    ]
  },
  {
    slug: 'types-faibles-strategies',
    title: 'Types Faibles : Comment les Utiliser',
    date: '1 novembre 2025',
    author: 'Pokémon Family',
    description: 'Transformez les typages fragiles en véritables atouts grâce à des synergies ciblées.',
    readingTime: '7 min',
    category: 'Stratégie',
    heroImage: {
      src: '/images/og-dresseurs-naulynn.webp',
      alt: 'Naulynn et ses alliés'
    },
    sections: [
      {
        heading: 'Les typages sous-estimés',
        paragraphs: [
          'Les Pokémon avec des faiblesses multiples peuvent devenir centraux si vous construisez votre équipe autour d’eux.'
        ]
      },
      {
        heading: 'Exemples de rédemption',
        subSections: [
          {
            subheading: 'Pokémon Eau',
            paragraphs: [
              'Forces : couverture défensive.',
              'Faiblesses : Électrique et Plante.',
              'Utilisation : support en doubles ou wallbreaker spécialisé.'
            ]
          },
          {
            subheading: 'Pokémon Feu',
            paragraphs: [
              'Forces : couverture offensive.',
              'Faiblesses : Eau, Sol, Roche.',
              'Utilisation : sweeper rapide et stratégies dites « tricks ».'
            ]
          },
          {
            subheading: 'Pokémon Plante',
            paragraphs: [
              'Forces : polyvalence.',
              'Faiblesses : Vol, Feu, Glace, Poison.',
              'Utilisation : support avec Synthèse et walls spécialisés.'
            ]
          }
        ]
      },
      {
        heading: 'Techniques pour compenser',
        listItems: [
          'Couverture de partenaires : placez à leurs côtés des Pokémon couvrant leurs faiblesses.',
          'Éléments d’équipe : écrans, Vent Arrière et anti-status pour limiter les dégâts.',
          'Mouvements spécialisés : utilisez des attaques qui exploitent malgré tout leurs points forts.',
          'Timing stratégique : sortez vos Pokémon fragiles au moment exact où leurs contres sont neutralisés.'
        ]
      },
      {
        heading: 'Cas d’étude : Grodoudou',
        paragraphs: [
          'Malgré quatre faiblesses, Grodoudou reste pertinent grâce à son utilité de support et sa capacité à survivre assez longtemps pour placer ses chants.'
        ]
      }
    ]
  },
  {
    slug: 'dresseurs-legendes-naulynn',
    title: 'Naulynn et les Dresseurs de Légende',
    date: '18 novembre 2025',
    author: 'Naulynn & Pokémon Family',
    description: 'Portrait de Naulynn, 17 ans, et tour d’horizon des alliés qui la soutiennent dans sa route vers le titre.',
    readingTime: '9 min',
    category: 'Lore',
    sections: [
      {
        heading: 'Prologue — Les braises de Lognes',
        paragraphs: [
          'La nuit où tout commença, le vent d’automne traversait les immeubles de Lognes comme un chœur de Pokéflûtes. Naulynn gravitait entre les tours, carnet du Professeur Chen à la main, consignant chaque scintillement des lampadaires et chaque vibration du RER. À dix-sept ans, elle se sentait déjà gardienne de la ville, bien plus que simple aspirante championne. Les rumeurs d’une renaissance de la Team Plasma se mêlaient au grondement du ciel ; Pikachu, encore sauvage, obser-vait depuis un lampadaire en attendant qu’on lui prouve que l’humanité méritait sa confiance. Lorsque l’orage éclata sur le phare de Vermilava, Naulynn et Sacha synchronisèrent leurs gestes : elle prit la foudre, Pikachu la canalisa, et le faisceau réchauffa jusqu’aux tunnels franciliens. Certains pêcheurs affirmèrent avoir vu la silhouette de Lugia dans le nuage d’étincelles, comme si le légendaire avait choisi cet instant pour juger la nouvelle protectrice de Lognes.',
          'Ce prologue s’achève sur un serment silencieux. Naulynn sut que son destin ne consisterait pas seulement à collectionner des badges. Chaque note de son carnet deviendrait un chapitre, chaque mission dans sa banlieue un front contre l’obscurité. Les habitants parlaient déjà de la “fille à l’éclair” tandis que le tonnerre reflétait son reflet déterminé dans le canal. Ainsi s’ouvrit la saga.'
        ]
      },
      {
        heading: 'Chapitre I — Le pacte des six',
        paragraphs: [
          'Bulbizarre fut la première alliance et le premier sacrifice. Dans le sanctuaire de Baies de Meaux incendié par Cassidy et Butch, le petit Pokémon planta ses lianes devant les enfants pour les protéger des flammes. Naulynn, Sacha et Pikachu menèrent un double combat où Bomb-Beurk et Lance-Flammes dessinèrent des cercles protecteurs. Salamèche suivit dans une briqueterie, Carapuce dans une crue de la Marne, Grodoudou lors d’un concours à Illumis, Pikachu au phare, Abra au cœur d’une rame distordue. Chacun de ces épisodes dura plusieurs jours, ponctués d’entrainements nocturnes, de blessures pansées par Pierre et de récits contés par Serena sur la place du marché.',
          'À mesure que ces six compagnons rejoignaient l’équipe, Lognes se transformait en base de soutien. Les enfants apprenaient à jardiner avec Bulbizarre, à rationner l’eau avec Carapuce, à chanter avec Grodoudou, à apprendre les mathématiques via les énigmes d’Abra. Le pacte des six ne visait pas que les combats : il instaurait une société parallèle où la coopération primait. La Team Plasma 2.0 nota ces progrès et inscrivit Naulynn sur ses listes de surveillance, sans savoir que Pikachu interceptait déjà leurs signaux grâce à sa station météo artisanale.'
        ]
      },
      {
        heading: 'Chapitre II — Les arènes de la résilience',
        paragraphs: [
          'Les badges que Naulynn décrocha furent autant de batailles scénarisées qu’un roman. À Lymington, le champion Électro l’obligea à combattre sous une pluie acide produite par des turbines. Pikachu combinait Vive-Attaque et Queue de Fer, Salamèche filtrait la vapeur, Grodoudou utilisait Chant Canon pour détruire les illusions. À Plantagruel, Florizarre sortit son plus puissant Lance-Soleil pour fissurer la carapace de Golemastoc. Au tournoi de Kaorine, Raichu affronta Machopeur et Pharamp dans un puzzle électrique où chaque mur changeait de polarité toutes les trente secondes. Ces matchs n’étaient pas de simples affrontements : on y croisait des spectateurs terrifiés par la Team Plasma, des apprentis dresseurs cherchant refuge, des journalistes relatant chaque détail pour inspirer la résistance.',
          'Au fil de ce chapitre, Naulynn comprit qu’elle était devenue un symbole, peut-être malgré elle. Ses victoires finançaient la restauration du gymnase de Lognes et les cliniques itinérantes de Pierre. Les dresseurs rivaux, Red et Blue, vinrent même affronter l’équipe pour tester leur cohésion, et repartirent en jurant de prêter main-forte si les légendaires étaient menacés. Cette section du roman clôt les “années de formation” et annonce l’inévitable collision avec les criminels.'
        ]
      },
      {
        heading: 'Chapitre III — Opération Arceus',
        paragraphs: [
          'Lorsque la Team Plasma 2.0 captura Lugia, Ho-Oh et Suicune, Naulynn déclencha un plan à trois volets baptisé “Opération Arceus”. Dans les abysses, Tortank, Ondine et Ectoplasma plongèrent dans une cage énergétique alimentée par des rayons prismatiques. Chaque paragraphe décrit la pression des profondeurs, les coups de canon aquatique, la synchronisation millimétrée avec les téléportations d’Alakazam. Au sommet des monts Houleux, Sacha, Léon et Naulynn affrontèrent des drones Cryogonal et un Tokekiss cybernétique en équilibre sur des ponts de glace. À Rosalia, Serena et Grodoudou montèrent un spectacle si spectaculaire que les soldats cessèrent un instant de surveiller le clocher, offrant à Salamèche l’occasion d’y déposer les braises sacrées.',
          'Le climax voit Pikachu brouiller les capteurs, Dracaufeu ériger un mur de flammes bleues, Raichu relier mentalement chaque escouade, tandis que les légendaires retrouvent leurs forces. Cette libération simultanée, décrite en une vingtaine de scènes croisées, constitue le cœur héroïque du roman.'
        ]
      },
      {
        heading: 'Chapitre IV — L’éveil des alliances',
        paragraphs: [
          'Une fois libérés, les légendaires ne retournèrent pas simplement dans leurs royaumes : ils participèrent à la reconstruction. Lugia apprit à Naulynn comment suivre les courants invisibles pour prévenir les tempêtes ; Ho-Oh bénit les serres de Lognes en déposant des plumes arc-en-ciel ; Suicune patrouilla les lacs pour purifier l’air. Les alliés humains – Ondine, Pierre, Serena, Cynthia, Leon – révélèrent leurs propres fragilités : la peur d’échouer, la fatigue, la difficulté à concilier art et guerre. Le roman s’attarde sur ces confidences nocturnes, ces entraînements improvisés, ces lettres de soutien échangées entre régions.',
          'Ce chapitre décrit également la transformation de Lognes en bastion communautaire. Les festivals “Lumières de Lognes” financent les missions, les écoles enseignent l’histoire des régimes criminels passés, les jeunes dresseurs découvrent comment combiner technologie et respect de la nature. Les rivalités amicales avec Red et Blue maintiennent la vigilance. Chaque page montre l’importance des liens tissés pendant l’aventure.'
        ]
      },
      {
        heading: 'Épilogue — La voie des maîtres',
        paragraphs: [
          'L’épilogue revient à Lognes, mais la ville a changé. Les serres brillent de mille couleurs, Florizarre distribue des semis, Tortank alimente les fontaines, Dracaufeu patrouille avec Leon, Lugia plane au-dessus du canal, Ho-Oh illumine les festivals. Naulynn prépare son académie dédiée aux dresseurs qui veulent mêler art, science et compassion. Chaque badge gagné finance un projet citoyen ; chaque mission renforce l’idée que la coopération est plus puissante que la peur. Pourtant, Abra détecte une nouvelle distorsion vers Paldea, et Leon repère des signaux à Galar, laissant présager une suite.',
          'Le roman se referme sur une image : Naulynn, cape orange au vent, Pikachu sur l’épaule, écrivant “À suivre” dans son carnet. Les Chroniques de Naulynn ne sont pas seulement un récit : elles invitent chaque lecteur à prendre part à la prochaine expédition. C’est ainsi que l’histoire reste vivante, chapitre après chapitre.'
        ]
      }
    ]
  }
]
