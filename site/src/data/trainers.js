export const TRAINERS = [
  {
    id: 'naulynn',
    name: 'Naulynn',
    title: 'Exploratrice de Lognes',
    age: 17,
    hometown: 'Lognes (Île-de-France)',
    image: '/images/naulynn-dresseuse.jpg',
    dream: 'Devenir Maîtresse des dresseurs tout en protégeant les sanctuaires Pokémon',
    signaturePokemon: ['Pikachu', 'Florizarre', 'Dracaufeu', 'Tortank', 'Raichu d\'Alola', 'Grodoudou'],
    biography: `Naulynn a grandi à Lognes en observant les voyageurs du RER transporter leurs Pokémon. 
Elle a rapidement rejoint le cercle d'amis de Sacha et s'est spécialisée dans les missions de terrain
qui mêlent aide humanitaire et recherche de Pokémon rares.`,
    strengths: [
      'Stratégie hybride : combine support végétal, défense aquatique et percées électriques',
      'Empathie naturelle avec les Pokémon blessés',
      'Leadership collaboratif avec les dresseurs vétérans'
    ],
    weaknesses: [
      'Tendance à accepter trop de missions en même temps',
      'Expose Pikachu à des risques élevés pour protéger les autres',
      'Surcharge émotionnelle lorsque des sanctuaires sont profanés'
    ],
    captureHighlights: [
      { pokemon: 'Pikachu', detail: 'Capture aux abords de Lognes en synchronisant un orage pour rallumer le phare de Vermilava.' },
      { pokemon: 'Bulbizarre', detail: 'Sauvetage du sanctuaire de Baies de Meaux ; a appris à canaliser la lumière pour guérir.' },
      { pokemon: 'Salamèche', detail: 'Libéré d\'un four industriel abandonné, puis entraîné pour escorter les convois aériens.' },
      { pokemon: 'Carapuce', detail: 'Sauvetage d\'œufs emportés par le canal de la Marne ; expertise dans la gestion des crues.' }
    ],
    quests: [
      'Rallumer le phare de Vermilava pour guider les marins',
      'Restaurer le parc botanique de Lognes avec Florizarre',
      'Escorter des convois humanitaires sur la Manche avec Tortank',
      'Sceller le portail dimensionnel de la Tour Céladon avec Alakazam et Ectoplasma',
      'Opération Arceus : libérer Lugia, Ho-Oh et Suicune des griffes de la Team Plasma 2.0'
    ],
    relations: {
      allies: ['Sacha', 'Ondine', 'Pierre', 'Serena', 'Cynthia', 'Leon'],
      rivals: ['Red', 'Blue'],
      mentors: ['Diantha', 'Professeur Chen']
    }
  },
  {
    id: 'ash',
    name: 'Sacha Ketchum',
    title: 'Défi Nomade',
    age: 20,
    hometown: 'Bourg Palette',
    dream: 'Visiter toutes les ligues et consolider un réseau mondial de dresseurs',
    signaturePokemon: ['Pikachu', 'Dracaufeu', 'Greninja'],
    biography: `Sacha continue d'explorer le monde avec un œil mentor pour les jeunes talents. 
Il sert de grand frère à Naulynn, partage ses carnets de badges et a coordonné le raid contre la Team Plasma 2.0 lorsque les légendaires ont été capturés.`,
    strengths: [
      'Instincts de combat incomparables',
      'Capacité à se lier rapidement avec les Pokémon sauvages',
      'Résilience émotionnelle face aux défaites'
    ],
    weaknesses: [
      'Planification stratégique parfois improvisée',
      'Difficulté à rester longtemps dans une seule région'
    ],
    quests: [
      'Tournoi amical à Lognes pour tester Dracaufeu de Naulynn',
      'Patrouilles aériennes au-dessus des Rocheuses d\'Unys',
      'Formations de terrain pour les nouveaux dresseurs',
      'Raid en montagne pour libérer Suicune et neutraliser la Team Plasma 2.0'
    ],
    relations: {
      allies: ['Naulynn', 'Ondine', 'Pierre', 'Serena'],
      rivals: ['Gladion', 'Paul'],
      mentors: ['Professeur Chen']
    }
  },
  {
    id: 'misty',
    name: 'Ondine',
    title: 'Gardienne des mers',
    age: 19,
    hometown: 'Azuria',
    dream: 'Moderniser les infrastructures aquatiques pour les dresseurs voyageurs',
    signaturePokemon: ['Lokhlass', 'Starmie', 'Psykokwak'],
    biography: `Ondine dirige le Centre Aquatique d'Azuria tout en aidant Naulynn à sécuriser les voies maritimes. 
Elle conçoit des protocoles pour les transports médicaux par voie d'eau et a dirigé l'évacuation sous-marine pour libérer Lugia.`,
    strengths: [
      'Stratégies défensives solides',
      'Expertise en hydrologie et en soins',
      'Capacité à coordonner de grandes équipes aquatiques'
    ],
    weaknesses: [
      'Manque de patience avec les dresseurs désorganisés',
      'Peut sous-estimer les types Plante'
    ],
    quests: [
      'Escortes sur la Manche avec Tortank',
      'Installation de bouées Paratonnerre en mer',
      'Formation des jeunes dresseurs de Lognes aux secours nautiques',
      'Opération Arceus : rétablir les courants pour guider Lugia hors de sa prison'
    ],
    relations: {
      allies: ['Naulynn', 'Sacha', 'Pierre'],
      rivals: ['Carolina'],
      mentors: ['Ondine\'s sisters']
    }
  },
  {
    id: 'brock',
    name: 'Pierre',
    title: 'Médecin itinérant',
    age: 21,
    hometown: 'Argenta',
    dream: 'Établir des cliniques mobiles Pokémon',
    signaturePokemon: ['Onix', 'Steelix', 'Blissey'],
    biography: `Pierre a converti son expertise de champion Roche en un rôle de soigneur itinérant.
Il aide Naulynn à maintenir en forme ses partenaires durant leurs missions de secours.`,
    strengths: [
      'Connaissances médicales approfondies',
      'Sang-froid face aux catastrophes naturelles',
      'Capacité à combiner défenses Roc et soins'
    ],
    weaknesses: [
      'Fait parfois passer la médecine avant les objectifs compétitifs',
      'Sensibilité émotionnelle qui le déconcentre'
    ],
    quests: [
      'Installation d\'une mini-clinique à Lognes',
      'Soutien aux convois humanitaires de Tortank',
      'Recherche sur les spores médicinales de Florizarre'
    ],
    relations: {
      allies: ['Naulynn', 'Sacha', 'Ondine'],
      rivals: ['Forrest (pour l\'amusement fraternel)'],
      mentors: ['Professeur Orme']
    }
  },
  {
    id: 'serena',
    name: 'Serena',
    title: 'Scénographe des concours',
    age: 19,
    hometown: 'Bourg Croquis',
    dream: 'Fusionner concours, musique et compétitions Pokémon',
    signaturePokemon: ['Feunnec', 'Pancham', 'Sylveon'],
    biography: `Serena coordonne les festivals où Naulynn présente ses replays.
Elle conçoit des chorégraphies qui valorisent Grodoudou et Pikachu et a dirigé la diversion scénique qui a permis de libérer Ho-Oh.`,
    strengths: [
      'Créativité scénique',
      'Gestion de l\'image publique des dresseurs',
      'Analyse fine des émotions des Pokémon'
    ],
    weaknesses: [
      'Préférences marquées pour les mises en scène au détriment de l\'efficacité pure',
      'Peut hésiter lors des décisions tactiques rapides'
    ],
    quests: [
      'Festival "Lumières de Lognes"',
      'Campagnes média pour documenter les quêtes de Naulynn',
      'Ateliers de chorégraphie pour Grodoudou',
      'Spectacle de diversion à Rosalia pour délivrer Ho-Oh'
    ],
    relations: {
      allies: ['Naulynn', 'Sacha', 'Ondine'],
      rivals: ['Aria'],
      mentors: ['Paloma']
    }
  },
  {
    id: 'cynthia',
    name: 'Cynthia',
    title: 'Maîtresse de Sinnoh',
    age: 25,
    hometown: 'Celestia',
    dream: 'Transmettre la connaissance des mythes et ruines aux futurs champions',
    signaturePokemon: ['Carchacrok', 'Lucario', 'Togekiss'],
    biography: `Cynthia parraine les recherches de Naulynn sur les lignes ley. 
Elle prête ses archives et son Lucario pour entraîner Abra et Alakazam, et a fourni les coordonnées historiques permettant de localiser Suicune et les sanctuaires de Lugia/Ho-Oh.`,
    strengths: [
      'Stratégies offensives équilibrées',
      'Maîtrise historique des mythes Pokémon',
      'Présence imposante qui inspire le respect'
    ],
    weaknesses: [
      'Attentes élevées envers ses protégés',
      'Disponibilité limitée'
    ],
    quests: [
      'Décodage des inscriptions de Voilaroc',
      'Formations tactiques avancées à Sinnoh',
      'Conseils pour affronter les rivaux Red et Blue',
      'Analyse des ruines Johto pour anticiper le plan de la Team Plasma 2.0'
    ],
    relations: {
      allies: ['Naulynn', 'Sacha'],
      rivals: ['Ghechis'],
      mentors: ['Professeur Carolina']
    }
  },
  {
    id: 'leon',
    name: 'Leon',
    title: 'Champion invaincu de Galar',
    age: 23,
    hometown: 'Puralis',
    dream: 'Former une génération de pilotes de dragons capables d\'assurer des secours aériens',
    signaturePokemon: ['Dracaufeu', 'Dragapult', 'Dorlodon'],
    biography: `Leon sert de sparring partner à Naulynn et supervise ses sessions d'entraînement aérien à Hammerlocke. 
Il partage ses méthodes de planification de vols humanitaires et a supervisé l'escorte aérienne de l'Opération Arceus pour empêcher la Team Plasma 2.0 de transférer les légendaires.`,
    strengths: [
      'Offensives aériennes agressives',
      'Vision stratégique à grande échelle',
      'Charisme qui galvanise les équipes'
    ],
    weaknesses: [
      'Peut sous-estimer les tactiques défensives lentes',
      'Tendance à improviser des figures risquées'
    ],
    quests: [
      'Sparrings réguliers avec Dracaufeu',
      'Plan d\'évacuation aérienne pour les Rocheuses d\'Unys',
      'Coaching des jeunes dresseurs de Lognes en pilotage',
      'Escorte des légendaires libérés pour éviter leur recapture'
    ],
    relations: {
      allies: ['Naulynn', 'Sacha', 'Cynthia'],
      rivals: ['Tarak dans certaines timelines', 'Champion Raihan'],
      mentors: ['Professeur Magnolia']
    }
  }
]
