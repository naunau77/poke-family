from pathlib import Path
from textwrap import indent


class SafeFormatDict(dict):
    def __missing__(self, key):
        return f"{{{key}}}"


DESIRED_SECTION_LINES = 20

PROLOGUE_LINES = [
    "{name} errait encore parmi les ruines silencieuses de Kalos, persuadé que le monde l'avait oublié.",
    "Les conteurs de Lognes murmuraient que {name} gardait l'équilibre entre lumière et orage.",
    "Avant toute rencontre, {name} vivait entre instinct sauvage et discipline héroïque.",
    "Ses pas suivaient les lignes telluriques que les professeurs n'avaient jamais cartographiées.",
    "Chaque nuit, {name} inscrivait ses doutes dans les étoiles comme un langage secret.",
    "Les collectionneurs avides de pouvoir-type {type} rêvaient de capturer sa force, forçant {name} à se cacher.",
    "Il conservait des souvenirs de batailles perdues pour ne jamais répéter les mêmes failles.",
    "{name} répétait des rituels anciens afin d'apaiser les esprits des lieux qu'il protégeait.",
    "Les saisons passaient, mais {name} refusait de se fossiliser dans l'attente.",
    "Son aura rappelait la première fois où le monde entier avait entendu son cri.",
    "Un souffle venu de Paldea prononça le nom de Naulynn et déchira la solitude.",
    "Même les légendaires captifs percevaient la veille silencieuse de {name}."
]

NAULYNN_LINES = [
    "À Lognes, Naulynn se lève avant l'aube pour écouter l'eau contre les berges.",
    "Elle cartographie les lacs afin de prévoir les terrains où {name} pourra s'élancer.",
    "La radio familiale capte les témoignages de dresseurs et nourrit sa stratégie.",
    "Elle révise les carnets de Sacha et note comment adapter chaque combo à {name}.",
    "Sa chambre est tapissée de cartes reliant Lognes à Paldea et Galar.",
    "Elle s'entraîne à courir sur les quais pour apprendre à résister aux rafales.",
    "Ses parents lui rappellent que l'empathie est aussi importante que la puissance.",
    "Naulynn porte des bracelets tissés par ses premiers Pokémon pour garder le lien.",
    "Elle étudie les réactions des foules pour préparer les missions de sauvetage.",
    "Elle note chaque erreur dans un carnet et s'oblige à trouver une amélioration.",
    "À l'arène de Vaires, elle simule les cris de {name} pour anticiper les signaux.",
    "Elle collabore avec Leon pour apprendre à lire les flux aériens.",
    "Avec Serena, elle imagine comment traduire les étincelles de {name} en spectacle apaisant.",
    "Les enfants de Lognes lui confient des Poké Balls à réparer et gagnent ainsi un mentor.",
    "Elle apprend les gestes des secouristes auprès de Pierre et superpose des diagrammes.",
    "Le Professeur Chen lui prête des Pokédex anciens pour étudier la lignée de {name}.",
    "Naulynn garde dans sa besace des baies adaptées à chaque tempérament de Pokémon.",
    "Elle médite au bord du lac pour entendre la ville respirer avec ses partenaires.",
    "Elle jure de bâtir un réseau où chaque Pokémon rare trouvera un foyer sûr.",
    "La mission de rencontrer {name} devient une étoile fixe qui oriente toutes ses décisions."
]

MEETING_LINES = [
    "Le destin précipite Naulynn face à {name} lors d'une mission improvisée.",
    "Les drones de la Team Obscura saturent le ciel lorsque leurs regards se croisent.",
    "Naulynn propose toujours un duel d'honneur avant de lancer une Poké Ball.",
    "Elle protège les témoins avant même de demander la victoire de {name}.",
    "{name} teste la sincérité de la dresseuse en libérant une attaque sans avertir.",
    "Le combat se déroule entre éclairs et brume, ponctué par la voix de Sacha à la radio.",
    "Naulynn transforme l'environnement en allié pour ouvrir un chemin jusqu'à {name}.",
    "Une baie partagée devient la promesse qui scelle la confiance avec {name}.",
    "Le silence juste après la capture est rempli des respirations synchronisées.",
    "Les alliés applaudissent depuis Lognes quand {name} accepte la nouvelle alliance."
]

TRAINING_LINES = [
    "De retour à Lognes, Naulynn aligne des obstacles inspirés de la région {category}.",
    "{name} apprend à écouter les battements de cœur de la ville avant chaque attaque.",
    "Les enfants assistent aux séances et écrivent un journal de progression.",
    "Grodoudou module ses chants pour suivre les impulsions de {name}.",
    "Abra crée des mirages afin de tester la coordination du duo.",
    "Leon commente les sessions par holo-appel et corrige la posture de Naulynn.",
    "{name} consigne les progrès par des étincelles sur le tableau de bord.",
    "Serena transforme quelques répétitions en scènes publiques pour gérer le trac.",
    "Les mains de Naulynn soignent elles-mêmes les éraflures pour maintenir la confiance.",
    "Chaque séance se conclut par un serment partagé devant toute l'équipe.",
]

BATTLE_LINES = [
    "Le duo affronte Ondine et ses fronts aquatiques pour apprendre la patience.",
    "Tili défie {name} avec un style d'Alola, obligeant Naulynn à jouer sur le tempo.",
    "Un champion de Kalos spécialisé en acier sous-estime la créativité tactique de {name}.",
    "Les habitants de Lognes se rassemblent pour applaudir chaque combo réussi.",
    "Naulynn partage ses analyses après chaque duel afin d'entraîner toute la communauté.",
    "Sacha propose des matchs amicaux pour tester les limites émotionnelles du duo.",
    "{name} détourne les pièges de la Team Rocket lors d'un tournoi clandestin.",
    "Cynthia observe le duo et transmet des conseils sur l'endurance mentale.",
    "Les rivaux Jalil et Amaya documentent ces combats pour leurs propres équipes.",
    "Les badges s'accumulent mais servent surtout à mesurer la progression intérieure."
]

THREAT_LINES = [
    "Très vite, une menace globale ordonne que les légendaires soient capturés et drainés.",
    "La Team Obscura construit une forteresse céleste qu'il faut infiltrer.",
    "{name} décode les impulsions envoyées par les oiseaux prisonniers.",
    "Naulynn réunit Serena, Leon, Ondine et Sacha pour monter une coalition.",
    "Chaque tunnel exploré offre des indices sur les plans visant Lognes.",
    "Grodoudou et Coiffeton distraient les foules tandis que {name} infiltre les conduits.",
    "Victor, ancien rival, hésite entre honneur et traîtrise jusqu'à ce que {name} lui tende la patte.",
    "Lugia et Ho-Oh perçoivent la signature énergétique de {name} et gardent espoir.",
    "Les flux électriques se transforment en langage secret pour coordonner l'opération.",
    "Naulynn promet de libérer chaque Pokémon opprimé avant la fin du cycle lunaire."
]

EVOLUTION_LINES = [
    "{name} réfléchit à évoluer physiquement ou spirituellement selon les besoins de l'équipe.",
    "Naulynn préfère écouter la décision de son partenaire plutôt que d'imposer une pierre.",
    "Ils voyagent à Kalos et Alola pour comprendre d'autres manières de canaliser l'énergie.",
    "Le Professeur Chen supervise des rituels symboliques à l'Arbre de Combat.",
    "Raichu d'Alola montre des techniques pour surfer sur les émotions collectives.",
    "Naulynn délègue une partie du commandement pour faire mûrir la confiance mutuelle.",
    "Ils inventent la technique du « Cœur de Lognes » qui fusionne météo, chant et instincts élémentaires.",
    "Chaque respiration est synchronisée avec les battements de la ville.",
    "Les légendaires répondent à cette croissance intérieure par des cris harmonisés.",
    "Victor offre un artefact isolant pour canaliser les charges les plus dangereuses."
]

FINAL_BATTLE_LINES = [
    "La forteresse ennemie descend sur Paldea et déclenche le combat final.",
    "Naulynn érige un dôme énergétique grâce à {name} pour protéger les civils.",
    "Dame Alectra manipule les courants météorologiques pour tenter de rompre le cercle.",
    "Les alliés se synchronisent via les signaux envoyés par {name}.",
    "Chaque tête de l'hydre mécanique correspond à une fréquence que Naulynn décortique.",
    "{name} libère les légendaires un par un en fracturant les verrous énergétiques.",
    "Serena crée des illusions de foule pour semer la panique chez les sbires.",
    "Abra téléporte les otages pendant que {name} affronte le noyau principal.",
    "Un impact final signe la chute du sceptre de la Team Obscura.",
    "La lumière de Lognes se reflète sur l'armure de {name} lorsqu'il revient auprès de Naulynn."
]

EPILOGUE_LINES = [
    "De retour à Lognes, Naulynn transforme la radio familiale en tour de contrôle solidaire.",
    "{name} patrouille les toits pour s'assurer que les dresseurs nocturnes restent en sécurité.",
    "Les enfants réécrivent leur propre légende en dessinant {name} sur les murs de l'école.",
    "Des plumes et symboles offerts par les légendaires décorent désormais le gymnase.",
    "Chaque semaine, le duo raconte une nouvelle aventure sur les ondes.",
    "{name} supervise des ateliers pour enseigner la gestion des émotions aux jeunes Pokémon.",
    "Naulynn planifie déjà la prochaine expédition vers Kitakami et Paldea.",
    "Les rivaux deviennent mentors dans l'académie ouverte au bord du lac.",
    "Lognes est surnommée « phare terrestre » par les voyageurs reconnaissants.",
    "L'histoire se poursuit car {name} sent que d'autres destins attendent d'être reliés."
]

GLOBAL_BEATS = {
    "encounter": [
        "{name} inspecte chaque pierre du terrain avant d'accepter la présence humaine.",
        "{name} reconnaît le parfum des baies stockées par la Team Rocket.",
        "{name} laisse des marques lumineuses pour guider les civils.",
        "{name} s'allie temporairement aux Pokémon sauvages pour surveiller la zone.",
        "{name} écoute le fleuve de Lognes porter les rumeurs des dresseurs.",
        "{name} contrôle sa respiration pour rester invisible aux drones.",
        "{name} se sert des orages comme d'un camouflage naturel.",
        "{name} note mentalement la position de chaque allié potentiel."
    ],
    "trial": [
        "{name} répète chaque mouvement jusqu'à ce qu'il devienne respiratoire.",
        "{name} accepte que Grodoudou règle le tempo des séances.",
        "{name} enregistre les variations de terrain pour élaborer des tactiques.",
        "{name} apprend à canaliser ses forces sans mettre les civils en péril.",
        "{name} étudie les combos multi-types avec Poussacha et Coiffeton.",
        "{name} s'entraîne sous la pluie artificielle déclenchée par Tortank.",
        "{name} se laisse filmer pour que Naulynn analyse le moindre faux pas.",
        "{name} transforme chaque cicatrice en carte de progression."
    ],
    "alliance": [
        "{name} harmonise ses signaux avec ceux de Leon pour couvrir les airs.",
        "{name} ouvre des couloirs d'énergie pour Serena et son équipe artistique.",
        "{name} transmet des codes lumineux aux plongeurs de Suicune.",
        "{name} détourne les drones ennemis vers de faux objectifs.",
        "{name} se coordonne avec Alakazam pour déceler les pièges psychiques.",
        "{name} protège les otages en formant un rempart autour d'eux.",
        "{name} redistribue la puissance aux alliés qui faiblissent.",
        "{name} laisse un symbole de Lognes à chaque lieu libéré."
    ],
    "legacy": [
        "{name} supervise les ateliers communautaires toute l'année.",
        "{name} raconte ses missions aux enfants pour cultiver le courage.",
        "{name} veille sur les transports afin que les voyageurs arrivent en paix.",
        "{name} consigne des données météo pour la station libre de Lognes.",
        "{name} partage ses techniques avec les jeunes Pokémon rares.",
        "{name} inaugure chaque festival en rappelant les sacrifices passés.",
        "{name} garde un œil sur les frontières énergétiques autour de la ville.",
        "{name} remercie toujours Naulynn de lui laisser courir librement."
    ]
}

SECTION_CONFIG = [
    {"title": "Prologue — Le destin du Pokémon", "sources": ["encounter"], "custom_lines": PROLOGUE_LINES},
    {"title": "Chapitre I — Naulynn, 17 ans, dresseuse de Lognes", "custom_lines": NAULYNN_LINES},
    {"title": "Chapitre II — La rencontre épique", "sources": ["encounter"], "custom_lines": MEETING_LINES},
    {"title": "Chapitre III — Entraînement et complicité", "sources": ["trial"], "custom_lines": TRAINING_LINES},
    {"title": "Chapitre IV — Premiers combats", "sources": ["trial", "alliance"], "custom_lines": BATTLE_LINES},
    {"title": "Chapitre V — Grande menace ou tournoi majeur", "sources": ["alliance"], "custom_lines": THREAT_LINES},
    {"title": "Chapitre VI — L'évolution", "sources": ["trial", "legacy"], "custom_lines": EVOLUTION_LINES},
    {"title": "Chapitre VII — Combat final", "sources": ["alliance"], "custom_lines": FINAL_BATTLE_LINES},
    {"title": "Épilogue — L'héritage de Lognes", "sources": ["legacy"], "custom_lines": EPILOGUE_LINES}
]


def format_line(template: str, data: dict) -> str:
    safe_data = SafeFormatDict(data)
    return template.format_map(safe_data)


def gather_templates(entry, blueprint):
    templates = list(blueprint.get("custom_lines", []))
    for source in blueprint.get("sources", []):
        templates.extend(entry.get(source, []))
        templates.extend(GLOBAL_BEATS.get(source, []))
    return templates


def build_section(entry, blueprint):
    templates = gather_templates(entry, blueprint)
    if not templates:
        return ""
    lines = []
    for i in range(DESIRED_SECTION_LINES):
        template = templates[i % len(templates)]
        lines.append(format_line(template, entry))
    return blueprint["title"] + "\n" + "\n".join(lines)


def build_story(entry):
    sections = []
    for blueprint in SECTION_CONFIG:
        section_text = build_section(entry, blueprint)
        if section_text:
            sections.append(section_text)
    return "\n\n".join(sections)


PIKACHU_CUSTOM_HISTORY = """Prologue — Le destin du Pokémon
Avant de croiser la route de Naulynn, Pikachu vivait perché sur le phare brisé de Vermilava, observant la mer qui gronde.
Il s'était inventé une famille de mouettes électriques pour ne pas sentir le vent salé comme un isolement.
Chaque nuit, il dressait ses oreilles pour écouter les murmures des orages et deviner lequel viendrait le tester.
Ses décharges étaient puissantes mais instables, capables autant de ranimer un bateau que de fissurer la pierre.
Les pêcheurs parlaient d'un esprit de foudre qui protégeait les tempêtes et punissait les intrus.
Cette légende attira des collectionneurs avides qui tentèrent de le piéger avec des cages en magnétite.
Pikachu les repoussa, mais il apprit que sa célébrité pouvait attirer des dangers plus rusés.
Il mémorisait les éclairs comme des poèmes, persuadé qu'un jour quelqu'un comprendrait leur rythme secret.
Sa solitude était adoucie par les visites lointaines de Sacha qui envoyait parfois un Dracolosse déposer des baies.
Pourtant, Pikachu refusait de quitter son poste car il craignait que la mer ne perde son gardien.
La poussière de charbon qui couvrait ses pattes racontait ses combats contre les sbires de la Team Rocket.
Il rêvait de voyager jusqu'à Paldea pour comprendre le nouveau courant qui parcourait les légendaires.
Parfois, il voyait le reflet de Raikou dans les vagues et se demandait lequel des deux était le véritable mythe.
Il collectionnait des boulons rouillés pour fabriquer des paratonnerres improvisés autour du village.
Lorsqu'un typhon brisa le dôme du phare, il resta accroché aux câbles pour éviter l'effondrement.
Les enfants de Lognes en vacances lui écrivaient des messages lumineux et il répondait avec des étincelles.
Il étudiait les migrations des Goélise pour synchroniser ses charges avec la lune.
Sa fourrure sentait l'ozone et le sable humide, mélange qui rappelait aux marins la maison.
Malgré la fatigue, il répétait ses esquives afin de rester plus rapide que les drones chasseurs.
Il jurait de n'appartenir à personne tant que son destin ne serait pas lié à un rêve plus grand.

Chapitre I — Naulynn, 17 ans, dresseuse de Lognes
Naulynn grandit dans les rues calmes de Lognes, entre les plans d'eau étincelants et les halles transformées en arènes improvisées.
Ses parents tenaient une radio communautaire qui diffusait les récits des voyageurs Pokémon, nourrissant son imagination.
À douze ans elle sécurisa un Salamèche blessé en pleine tempête et comprit la valeur du courage discret.
Elle étudia la cartographie des routes régionales pour savoir où les dresseurs avaient besoin d'aide.
La nuit, elle relisait les carnets de Sacha, prêtés par le Professeur Chen, pour comprendre comment canaliser la passion sans se brûler.
Son rêve n'était pas seulement de devenir Maîtresse Pokémon, mais de bâtir un réseau d'entraide reliant Lognes à toutes les ligues.
Elle s'entraîne au lever du soleil près du lac de Vaires, où la brume lui apprend à anticiper les silhouettes ennemies.
Ses stratégies favorisent l'écoute des terrains : elle classe les sols, les vents et les échos pour optimiser chaque combo.
Elle travaille ses réflexes avec les courses de drones de Léon, apprenant à lire les trajectoires en un clin d'œil.
Son Pikachu idéal devait comprendre la nuance entre éclat héroïque et protection des civils.
Naulynn porte toujours un bracelet de lianes tissé par Bulbizarre pour se souvenir que la patience nourrit la puissance.
Elle correspond avec Cynthia et Nabil pour échanger des plans d'entraînement adaptés aux duos rapides.
Leon lui envoya une cape ignifugée après avoir vu sa détermination lors d'une simulation d'incendie.
Les habitants de Lognes lui confient leurs Poké Balls quand ils doivent voyager, preuve de confiance absolue.
Elle a appris à réparer des générateurs pour que les centres Pokémon ruraux restent ouverts pendant les crises.
Son équipe de base compte Grodoudou, Abra, et Coiffeton, tous sensibles à ses tactiques rythmiques.
Elle note chaque erreur dans un carnet bleu marine et transforme la honte en plan de progression.
Son rire encourage ses partenaires après chaque défaite, rappelant que les cicatrices sont des cartes.
Elle sentait que le phare de Vermilava appelait ses pas, comme si la foudre murmurait son nom.
Elle promit à Sacha de revenir avec l'étincelle qui manque à sa stratégie de double attaque.

Chapitre II — La rencontre épique
Naulynn atteint Vermilava en plein crépuscule et découvre le phare plongé dans une tempête artificielle.
Les sbires de la Team Rocket avaient déployé des paraboles pour siphonner l'énergie de Pikachu.
Elle analyse rapidement le terrain : sol détrempé, câbles conducteurs, falaises instables.
Elle ordonne à Abra de créer des illusions de vagues géantes pour détourner les lasers.
Pikachu surgit sur le balcon supérieur, entouré d'arcs électriques indisciplinés.
Le regard de Naulynn croise celui du Pokémon et elle y lit autant de défi que de fatigue.
Elle comprend qu'une capture classique serait un affront et propose un duel de confiance.
Pikachu teste sa sincérité en lançant Éclair croisé avec les tirs ennemis.
Naulynn esquive, glisse sur la pierre humide, et frappe le sol pour mettre à nu un câble qu'elle relie à un paratonnerre improvisé.
La tempête se concentre sur sa perche métallique, libérant un couloir pour Pikachu.
Elle déploie sa cape ignifugée pour protéger les Wingull piégés sur une rambarde.
Pikachu note qu'elle protège les témoins avant d'attaquer et voit en elle une stratégie digne d'un partenaire.
Un sbire déclenche une cage, mais Pikachu la fait fondre en surchauffant les verrous.
Naulynn lance un Poké Bloc renforcé d'oranges Sitrus, symbole de respect dans sa culture.
Pikachu goûte l'énergie, sent la promesse d'un futur partagé et laisse la Poké Ball s'entrouvrir.
La capture se réalise dans un flash silencieux, seulement troublé par le souffle rassuré de la mer.
Elle remercie le phare, promettant d'en entretenir la lumière même à distance.
Pikachu ressort aussitôt pour lui frapper la main, scellant l'alliance par un choc contrôlé.
Sacha, connecté par la radio, félicite Naulynn et lui confie que le destin du réseau dépendra de ce duo.
La tempête artificielle se dissipe, révélant une aurore boréale électrique qui fait vibrer Lognes à travers les communications.

Chapitre III — Entraînement et complicité
De retour à Lognes, Naulynn installe un terrain électro-hydro avec des plaques métalliques cachées sous l'eau claire.
Pikachu apprend à sentir la circulation des ions sans dépendre d'étincelles visibles.
Les enfants viennent assister aux séances et servent de chronométreurs, renforçant la cohésion communautaire.
Naulynn enseigne la respiration profonde pour éviter les surcharges émotionnelles qui altèrent la précision.
Pikachu imite ses gestes et découvre qu'un battement de cœur calme peut guider un éclair plus sûrement qu'un cri.
Ils intègrent Grodoudou pour travailler la synchronisation entre son chant protecteur et les attaques rapides.
Abra projette des illusions de terrains glissants pour tester la stabilité du duo.
La nuit, Naulynn raconte des histoires de légendaires capturés par les méchants dans Paldea, motivant Pikachu à surpasser ses limites.
Ils créent un code de tapotements sur la Poké Ball pour communiquer sans mots durant les missions.
Naulynn fait construire par Pierre des anneaux en pierre volcanique que Pikachu traverse pour exercer sa précision.
Ils testent des combinaisons Tonnerre + Surf avec Coiffeton pour préparer les tournois doubles.
Pikachu visite les écoles pour expliquer comment éviter la foudre naturelle, devenant un mentor.
Ils conçoivent ensemble un atelier où les habitants fabriquent des lampes alimentées par les charges excédentaires de Pikachu.
Naulynn repère que sa queue bouge comme un métronome lorsqu'il est concentré et utilise ce rythme pour planifier les combos.
Pikachu découvre que les rituels matinaux de la dresseuse l'aident à évacuer ses propres peurs.
Ils enregistrent leurs progrès dans un carnet audio envoyé à Leon pour obtenir des retours stratégiques.
Serena propose d'intégrer le duo dans ses spectacles pour tester la gestion du trac devant des foules massives.
Naulynn accepte, et Pikachu apprend à moduler son voltus pour accompagner les violons.
Le duo s'entraîne à la falaise de Vaires, où le vent violent simule les tourbillons de Paldea.
Chaque séance se conclut par un juron complice : "Lognes veille, même quand l'orage hurle".

Chapitre IV — Premiers combats
Le premier affrontement officiel du duo se déroule contre Ondine lors d'une exhibition nautique.
Ondine utilise Staross et Lokhlass pour créer des miroirs d'eau qui renvoient les éclairs.
Naulynn ordonne à Pikachu de frapper le sable à proximité pour faire jaillir une pluie de particules conductrices.
Les éclairs se réfractent en arcs multiples, surprenant Staross et forçant Ondine à se replier.
Le badge aquatique de Lognes leur est remis, symbole de reconnaissance locale.
Ensuite, ils défient Tili et son Archeduc rapide, apprenant à temporiser face aux attaques à distance.
Naulynn fait courir Pikachu entre les arbres pour forcer Archeduc à descendre dans une zone piégée de Parabocharge.
Le public de Lognes acclame le duo, voyant que stratégie et improvisation peuvent cohabiter.
Ils affrontent ensuite un champion itinérant d'Unys spécialisé en acier qui pensait neutraliser les attaques électriques.
Pikachu détourne les aimants métalliques pour créer un champ tournoyant qui perturbe l'armure adverse.
Cynthia observe le combat et félicite Naulynn pour sa capacité à transformer la défense en spectacle.
Les rivaux locaux, Jalil et Amaya, rejoignent la tournée pour profiter de cette école de tactique en plein air.
Naulynn partage ses analyses, renforçant l'idée que la victoire se construit à plusieurs.
Ils participent à un double match avec Sacha et Dracaufeu contre un duo de la Team Rocket déguisé.
Pikachu détourne les filets grâce à Vive-Attaque tandis que Naulynn ordonne à Dracaufeu de créer une bulle d'air protectrice.
Le combat se conclut sur un tonnerre synchronisé avec une rafale flamboyante, faisant exploser les gadgets ennemis.
À Kalos, le duo affronte un spécialiste des illusions nommé Arthus qui manipule des Zoroark.
Naulynn se sert de l'odeur d'ozone laissée par Pikachu pour distinguer le vrai du faux.
Ils remportent la victoire et gagnent l'accès à un ancien gymnase abandonné qui devient leur quartier général.
Chaque victoire est consignées sur la radio familiale, inspirant de nouveaux dresseurs à Lognes.

Chapitre V — Grande menace ou tournoi majeur
Une rumeur enfle : la Team Obscura a capturé les oiseaux légendaires de Galar et siphonne leur énergie.
Le Conseil Régional mandate Naulynn pour infiltrer la forteresse flottante qui survole Paldea.
Pikachu analyse les fréquences résiduelles et détecte un motif lié au cri désespéré de Zapdos.
Sacha, Leon, Serena et Ondine forment une escouade multi-régions pour soutenir Naulynn.
À l'approche de la forteresse, les vents deviennent ionisés et perturbent les communications classiques.
Pikachu agit comme relais, traduisant les signaux en impulsions lumineuses sur la coque.
Ils découvrent que la Team Obscura veut fusionner les oiseaux en une arme unique nommée Trinité Sombre.
Naulynn préparait depuis des mois un protocole d'infiltration qui exploite les couloirs énergétiques.
Elle déploie Grodoudou pour endormir les gardes tandis qu'Abra téléporte des balises.
Pikachu se glisse dans les conduits pour calmer les oiseaux paniqués avec son propre rythme cardiaque.
Ils rencontrent Victor, un rival charismatique qui hésite entre aider la Team Obscura et retrouver son honneur.
Naulynn lui rappelle une bataille passée où il avait protégé un village, rallumant sa conscience.
La tension monte lorsque Lugia, prisonnier, frappe les parois et menace de s'effondrer sur Paldea.
Pikachu propose de canaliser la surcharge dans son propre corps, consciente du risque.
Naulynn refuse d'abord, puis élabore une stratégie où l'énergie est dispersée via les anneaux de pierre.
Ils organisent un tournoi improvisé dans la forteresse pour distraire les sbires, donnant du temps à Leon.
Pikachu affronte un Magneton modifié qui absorbe les attaques électriques.
Naulynn utilise l'eau d'une citerne pour créer un nuage de vapeur qui bloque les capteurs, permettant à Pikachu de frapper en mêlée.
Serena, grâce à ses spectacles, détourne l'attention du public mondial connecté au stream pirate.
Le tournoi se transforme en rébellion ouverte lorsque les oiseaux légendaires entendent la voix de Pikachu résonner dans les couloirs.

Chapitre VI — L'évolution
Pikachu refuse la pierre foudre que lui tend Leon, préférant évoluer intérieurement plutôt que physiquement.
Naulynn respecte sa décision et cherche un rituel symbolique avec le Professeur Chen.
Ils voyagent à l'Arbre de Combat de Kalos pour méditer sur les choix de vie et de lumière.
Là-bas, Pikachu rencontre un Raichu d'Alola qui lui apprend à surfer sur les courants psychiques.
Ils passent une nuit entière à équilibrer sur des fils d'arc-en-ciel créés par Ho-Oh.
Naulynn réalise que son propre leadership doit mûrir : elle délègue plus de décisions aux membres de son équipe.
Elle organise des séances où Pikachu dirige l'entraînement, apprenant à motiver Grodoudou et Abra.
Le duo développe une nouvelle technique appelée "Cœur de Lognes", mélange de Chargeur, Danse Pluie et Tonnerre.
Cette technique nécessite une confiance absolue, car Naulynn doit guider le rythme tandis que Pikachu canalise l'énergie communautaire.
Ils testent la combinaison sur le lac de Vaires, créant des anneaux lumineux visibles depuis la stratosphère.
Les légendaires captifs ressentent cette pulsation et répondent par des cris harmonisés.
Pikachu découvre qu'il peut stocker les souvenirs sonores de ses amis et les rejouer comme des notes de soutien.
Naulynn note que sa posture a changé : ses épaules se sont ouvertes, signe de fierté assumée.
Ils rédigent une charte pour les jeunes dresseurs indiquant comment respecter le choix d'évolution de leurs partenaires.
Victor, repentant, offre un gantelet isolant pour aider Pikachu à canaliser les charges extrêmes.
La mère de Naulynn diffuse un reportage radiophonique intitulé "Quand la maturité brille plus qu'une pierre".
Pikachu médite désormais chaque soir sur une plaque de basalte envoyée par Pierre, ancrant son esprit.
Ils jurent de ne jamais forcer une transformation juste pour impressionner le public.
Cette évolution intérieure devient leur arme secrète face aux ambitions de la Team Obscura.
Les couches de foudre de Pikachu chantent désormais comme des chœurs, preuve d'une âme grandie.

Chapitre VII — Combat final
La forteresse descend vers la Plaine Cristalline de Paldea, menaçant de libérer Trinité Sombre.
Naulynn assemble tous ses alliés sur le toit : Leon, Sacha, Serena, Ondine, Victor et une escouade de dresseurs locaux.
Le chef de la Team Obscura, Dame Alectra, dévoile un sceptre qui commande les courants météorologiques.
Le combat s'ouvre sur une pluie d'éclairs incontrôlés qui fait trembler la structure.
Naulynn déclenche Cœur de Lognes, créant un dôme protecteur où les alliés se synchronisent.
Pikachu affronte une hydre mécanique alimentée par les plumes des oiseaux légendaires.
Il esquive les lasers, puis court le long des câbles pour atteindre le noyau.
Naulynn remarque que chaque tête possède un rythme propre et ordonne une série de Tonnerres cadencés.
Le premier coup libère Articuno, le second Moltres, le troisième Zapdos.
Les légendaires se joignent au dôme énergétique, multipliant la puissance du duo.
Dame Alectra riposte en inversant le champ magnétique, faisant flotter les alliés dans un chaos dangereux.
Naulynn utilise Abra pour repositionner les combattants tandis que Serena crée des illusions de foule pour distraire l'ennemie.
Pikachu concentre toutes les voix qu'il a enregistrées : cris d'encouragement, rires, promesses.
Il propulse cette mémoire dans un Giga Tonnerre qui traverse le sceptre et brise la couronne de la Team Obscura.
La forteresse s'effondre lentement, mais Leon et Dracaufeu stabilisent les débris avec des courants ascendants.
Naulynn attrape Pikachu en plein vol, leurs mains étincelant d'une lumière dorée.
Les oiseaux légendaires les entourent et offrent une plume chacun, symbolisant un pacte de protection mutuelle.
Dame Alectra, vaincue, jure de se reformer, mais Victor la désarme et la livre aux autorités de Galar.
Le sol de Paldea applaudit littéralement, libérant des geysers de lumière terra cristallisée.
Sacha annonce officiellement que Naulynn mérite le titre de Gardienne des Réseaux.
Pikachu, haletant, sourit en sentant que sa quête de sens a enfin trouvé un foyer.

Épilogue — L'étincelle inépuisable
De retour à Lognes, Naulynn transforme la radio familiale en station de coordination des dresseurs solidaires.
Pikachu supervise la maintenance de la station météo, intégrant les plumes légendaires dans les capteurs.
Les habitants reconstruisent un phare miniature au bord du lac pour célébrer leur protecteur électrique.
Naulynn anime des ateliers où elle enseigne comment écrire son propre code d'honneur de dresseur.
Les oiseaux légendaires visitent parfois la ville, attirant des chercheurs fascinés par cette alliance improbable.
Pikachu patrouille les marchés nocturnes en laissant des arcs doux pour éclairer les stands.
Il écrit chaque semaine une lettre à Dame Alectra, espérant la guider vers la rédemption.
Naulynn et ses amis planifient déjà une expédition vers Kitakami pour enquêter sur de nouveaux mythes.
Sacha lui confie un vieux Pokédex à encre, persuadé qu'elle saura y consigner des histoires humaines.
Serena compose un ballet inspiré du Cœur de Lognes, diffusé dans les écoles de Galar.
Leon fait livrer une statue de Dracaufeu et Pikachu jouant avec des enfants, symbole d'amitié inter-ligues.
Les jeunes dresseurs affichent des bandanas jaunes pour montrer qu'ils soutiennent la cause de la liberté des Pokémon.
Naulynn garde près d'elle la Poké Ball de Pikachu mais préfère le laisser courir librement dans la ville.
La nuit, ils montent ensemble sur le toit de la radio pour écouter les tempêtes lointaines.
Pikachu entonne le chant des éclairs appris auprès des légendaires, et la ville répond par un chœur de lumières.
Naulynn promet de continuer à raconter chaque rencontre sur les ondes afin que personne ne se sente seul dans la tempête.
Les légendes murmurent que Lognes est devenue un phare terrestre guidant les voyageurs perdus.
Pikachu garde la mémoire de chaque sourire enregistré dans son cœur électrique.
L'étincelle qui les unit refuse de faiblir, même lorsque les saisons changent.
Leur saga ne fait que commencer, et déjà l'horizon prophétise de nouvelles quêtes pour la Gardienne de Lognes."""


def story_entry(**kwargs):
    return kwargs

DATA = [
    story_entry(
        slug="bulbizarre",
        id=1,
        name="Bulbizarre",
        number=1,
        type="Plante/Poison",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        description="La graine sur son dos lui permet de synthétiser l'énergie solaire.",
        hp=45,
        attack=49,
        defense=49,
        sp_atk=65,
        sp_def=65,
        speed=45,
        abilities=["Engrais", "Chlorophyle"],
        evolutions=["Bulbizarre → Florizarre → Florus"],
        encounter=[
            "{name} découvre Naulynn agenouillée dans les braises encore fumantes du sanctuaire de Meaux.",
            "{name} étend ses lianes humides afin de créer un rideau qui filtre les étincelles des torches Rocket.",
            "{name} guide Sacha jusqu'au cœur de la clairière en laissant des gouttes parfumées qui brillent dans la fumée.",
            "{name} réchauffe les enfants frigorifiés en posant sa graine comme un feu de camp végétal.",
            "{name} se laisse bercer par le chant de Grodoudou pour synchroniser ses pulsations avec celles de la forêt.",
            "{name} attire les Roucool locaux en libérant un parfum de baies afin qu'ils dispersent les braises restantes.",
            "{name} offre à Pikachu un bouquet de feuilles humides pour envelopper ses joues surchauffées.",
            "{name} s'accroche à la cape de Naulynn lorsqu'elle escalade un rocher pour surveiller les drones.",
            "{name} mémorise l'odeur de chaque arbre abîmé pour vérifier, plus tard, qu'ils cicatrisent bien.",
            "{name} brille d'une couleur turquoise lorsque Ho-Oh projette son ombre dans les nuages.",
            "{name} se promet de transformer chaque étincelle destructrice en germination, même si cela exige des nuits sans sommeil.",
            "{name} partage ses premiers souvenirs avec Abra afin que la clairière vive aussi dans la mémoire psychique de l'équipe."
        ],
        trial=[
            "{name} accompagne Naulynn de village en village pour enseigner la taille douce des arbres rescapés.",
            "{name} affronte les scientifiques de Kalos lors d'un duel botanique et gagne grâce à ses spores luminescentes.",
            "{name} aide Salamèche à stabiliser sa flamme en lui offrant des pétales frais à respirer chaque matin.",
            "{name} développe une nouvelle Vampigraine qui peut filtrer les toxines avant qu'elles ne touchent la terre.",
            "{name} s'entraîne avec Florizarre pour canaliser les vibrations du sol pendant les tremblements provoqués par Plantagruel.",
            "{name} participe aux ateliers de Lognes où les enfants dessinent leur arbre tutélaire.",
            "{name} grimpe sur les toits du gymnase pour nettoyer les gouttières et vérifier que l'eau de pluie reste pure.",
            "{name} enregistre dans un carnet l'heure exacte à laquelle chaque bourgeon s'ouvre, aidant ainsi Léon à prévoir la météo.",
            "{name} patrouille avec Carapuce afin de détecter les nappes d'huile déversées dans les canaux.",
            "{name} collabore avec Grodoudou pour créer des fragrances apaisantes destinées aux refuges temporaires.",
            "{name} restaure les serres du vieux collège, transformant les salles de classe en jungles miniatures.",
            "{name} garde une liane enroulée autour du poignet de Naulynn comme un fil d'Ariane qui les relie toujours."
        ],
        alliance=[
            "{name} transporte les spores luminescentes offertes par Ho-Oh à travers chaque ruelle de Rosalia.",
            "{name} trace un chemin de mousse fraîche pour que les otages puissent marcher pieds nus sans se brûler.",
            "{name} transmet à Alakazam les vibrations du sol pour détecter les tunnels de la Team Plasma 2.0.",
            "{name} sert de relais entre les équipes terrestres et les plongeurs en absorbant l'humidité excessive.",
            "{name} diffuse une odeur d'agrumes qui masque la présence de l'escouade de Serena.",
            "{name} redirige ses lianes pour former un filet silencieux qui attrape les drones en patrouille.",
            "{name} soutient Tortank en pompant l'eau qui infiltrait la tour, évitant ainsi toute explosion électrique.",
            "{name} libère des fleurs phosphorescentes afin que Leon repère le clocher depuis son Dracaufeu.",
            "{name} espionne les serres ennemies et remplace leurs semences toxiques par des graines curatives.",
            "{name} échange avec Suicune un souffle pur qui neutralise les gaz lacrymogènes libérés par les sbires.",
            "{name} dessine dans le sol un symbole ancestral pour rassurer les habitants réveillés par le tumulte.",
            "{name} célèbre la victoire en plantant un bourgeon arc-en-ciel au sommet de la tour libérée."
        ],
        legacy=[
            "{name} sillonne les parcs de Lognes et note dans un carnet la couleur de chaque feuille observée.",
            "{name} anime les ateliers de respiration où les enfants apprennent à calmer leur cœur grâce aux parfums végétaux.",
            "{name} supervise les serres communautaires et déclenche une alarme dès que l'humidité baisse trop.",
            "{name} prête ses spores curatives aux cliniques mobiles de Pierre lorsque les missions s'éternisent.",
            "{name} aide Tortank à replanter les berges après les tempêtes qui frappent la Manche.",
            "{name} sert d'oracle végétal : il ressent l'approche des distorsions dimensionnelles avant même Abra.",
            "{name} conserve des pétales arc-en-ciel sur sa graine pour bénir les nouveaux dresseurs venus de loin.",
            "{name} planifie l'extension du sanctuaire urbain en dessinant des cartes fluorescentes visibles de nuit.",
            "{name} collabore avec Poussacha pour créer un herbier consacré aux plantes de Paldea.",
            "{name} rappelle à Naulynn qu'arroser une graine est souvent l'acte le plus héroïque de la journée.",
            "{name} écrit des lettres parfumées aux villes alliées pour leur partager les progrès des serres.",
            "{name} rêve déjà de transformer une ligne du RER en tunnel botanique et note chaque idée pour plus tard."
        ]
    ),
    story_entry(
        slug="abra",
        id=63,
        name="Abra",
        number=63,
        type="Psy",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
        description="Abra est capable de se téléporter instantanément dans l'espace.",
        hp=25,
        attack=20,
        defense=15,
        sp_atk=105,
        sp_def=30,
        speed=90,
        abilities=["Synchronise", "Magie Miroir"],
        evolutions=["Abra → Kadabra → Alakazam"],
        encounter=[
            "{name} se matérialise par fragments dans une rame du RER A secouée par une distorsion magnétique.",
            "{name} entend Naulynn chanter doucement pour couvrir le grondement métallique.",
            "{name} accepte de suspendre sa téléportation lorsque Pikachu stabilise la tension électrique.",
            "{name} se laisse glisser dans les bras de Grodoudou pour reprendre confiance.",
            "{name} perçoit les pensées bienveillantes de Pierre qui lui promet un thé brûlant.",
            "{name} note dans son esprit la cadence des rails afin de prévoir les crises futures.",
            "{name} respire au rythme de Naulynn pour caler ses sauts dimensionnels sur son cœur.",
            "{name} ressent la gratitude des voyageurs et décide de rester dans l'équipe.",
            "{name} mémorise la voix de chaque ami pour pouvoir les retrouver dans la foule.",
            "{name} trace un sigil mental autour du RER pour empêcher la distorsion de revenir.",
            "{name} apprend à rire lorsque Carapuce lui raconte des blagues de tunnel.",
            "{name} cache une phrase secrète dans l'esprit de Leon pour vérifier leur connexion à distance."
        ],
        trial=[
            "{name} participe à un tournoi d'échecs Pokémon orchestré par Cynthia et remporte la finale en trois coups.",
            "{name} étudie les réseaux ferroviaires afin de détecter les variations psychiques liées aux trains.",
            "{name} enseigne aux élèves de Lognes des exercices de concentration.",
            "{name} accompagne Serena dans les coulisses pour l'aider à combattre le trac.",
            "{name} crée des cartes mentales qui superposent les sanctuaires naturels aux villes modernes.",
            "{name} affine sa téléportation pour transporter des médicaments urgents.",
            "{name} assiste Leon en analysant les trajectoires aériennes depuis son point de vue.",
            "{name} collabore avec Pikachu pour traduire des impulsions électriques en messages codés.",
            "{name} passe des nuits entières à écouter les rêves de la ville pour anticiper les angoisses.",
            "{name} s'entraîne avec Alakazam à multiplier les illusions pour tromper la Team Plasma.",
            "{name} se téléporte dans les serres pour vérifier l'état d'humidité avant les tempêtes.",
            "{name} compile un dictionnaire des émotions qu'il perçoit chez les Pokémon de Lognes."
        ],
        alliance=[
            "{name} surveille les lignes ley et transmet en temps réel les trajectoires ennemies pendant l'Opération Arceus.",
            "{name} stocke la mémoire des galeries pour que l'équipe puisse naviguer dans l'obscurité.",
            "{name} synchronise ses pulsations avec celles d'Alakazam afin de décupler leur portée télépathique.",
            "{name} se téléporte à côté de Serena pour lui souffler la prochaine note malgré le vacarme.",
            "{name} renvoie les drones dans une boucle temporelle de deux secondes pour les désorienter.",
            "{name} partage ses coordonnées avec Lugia afin d'harmoniser les sorties des tunnels.",
            "{name} envoie des visions rassurantes aux otages qui descendent les escaliers.",
            "{name} détourne l'attention des scientifiques ennemis en déclenchant de faux signaux psychiques.",
            "{name} prévient Raichu du moment exact où le flux magnétique devient instable.",
            "{name} enregistre dans sa mémoire les plans de la base pour les archiver au gymnase.",
            "{name} se dédouble brièvement pour guider simultanément deux équipes sur des étages différents.",
            "{name} clôt la mission en projetant un message de victoire visible dans le ciel nocturne."
        ],
        legacy=[
            "{name} cartographie chaque hotspot énergétique d'Île-de-France et publie ses rapports sur Radio Pokémon Family.",
            "{name} anime des ateliers de méditation pour les apprentis champions.",
            "{name} assiste Naulynn lors des briefings en projetant des hologrammes mémoriels.",
            "{name} veille sur le RER A et déclenche des alertes psychiques lorsqu'une distorsion réapparaît.",
            "{name} aide les élèves stressés à affronter leurs examens grâce à des mantras personnalisés.",
            "{name} se téléporte dans les serres pour préserver les plantes sensibles lors des pics de chaleur.",
            "{name} garde un lien constant avec Leon afin d'anticiper les routes aériennes saturées.",
            "{name} documente les rêves collectifs de Lognes pour inspirer Serena et Grodoudou.",
            "{name} offre ses services aux scientifiques qui cartographient les lignes ley européennes.",
            "{name} surveille les signaux faibles laissés par la Team Plasma pour prévenir l'équipe.",
            "{name} entraîne les jeunes télépathes à compartimenter leurs émotions.",
            "{name} se réserve toujours quelques minutes pour jouer aux échecs avec les enfants du quartier."
        ]
    ),
    story_entry(
        slug="alakazam",
        id=65,
        name="Alakazam",
        number=65,
        type="Psy",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
        description="Alakazam possède un QI incroyable et un cerveau extraordinaire.",
        hp=55,
        attack=50,
        defense=65,
        sp_atk=135,
        sp_def=95,
        speed=120,
        abilities=["Synchronise", "Magie Miroir"],
        evolutions=["Abra → Kadabra → Alakazam"],
        encounter=[
            "{name} émerge du rituel de la Tour Céladon lorsque Naulynn scelle un portail instable.",
            "{name} brandit ses deux cuillères comme des antennes capables de lire les vents cosmiques.",
            "{name} partage immédiatement un flux d'informations avec Abra pour rassurer son ancienne forme.",
            "{name} remercie Grodoudou de la musique qui a facilité son ascension.",
            "{name} enregistre chaque pierre runique de la tour pour enrichir les archives de Lognes.",
            "{name} perçoit les applaudissements silencieux des habitants connectés par Pikachu.",
            "{name} jure de protéger Naulynn comme un bibliothécaire protège sa salle secrète.",
            "{name} s'accorde avec Leon pour comprendre les trajectoires aériennes.",
            "{name} goûte le cacao offert par Pierre et mémorise sa composition moléculaire.",
            "{name} salue Salamèche en calculant la vitesse exacte de sa flamme.",
            "{name} intègre immédiatement dans sa mémoire les cartes de Paldea envoyées par Poussacha.",
            "{name} promet à Naulynn de transformer chaque plan stratégique en récit limpide."
        ],
        trial=[
            "{name} affronte l'élite de Sinnoh dans un battle royal mental orchestré par Cynthia.",
            "{name} neutralise Lucario en prédisant douze coups d'avance.",
            "{name} entraîne les jeunes télépathes à compartimenter leurs émotions.",
            "{name} rédige un manuel de tactiques que Leon utilise lors des exercices de vol.",
            "{name} se synchronise avec Pikachu pour coder des signaux lumineux lisibles à distance.",
            "{name} collabore avec Tortank pour calculer la meilleure répartition de l'eau dans les canons.",
            "{name} traduit les chants de Grodoudou en partitions mathématiques.",
            "{name} améliore la mémoire des élèves en leur apprenant des jeux mnémoniques.",
            "{name} observe les sessions de surf de Raichu afin de comprendre la dynamique des vagues.",
            "{name} travaille avec Coiffeton pour créer un protocole d'évacuation millimétré.",
            "{name} expérimente des illusions projetées dans le ciel pour tromper les drones.",
            "{name} tient un journal où il note toute variation énergétique détectée autour de Lognes."
        ],
        alliance=[
            "{name} coordonne les communications télépathiques pendant l'Opération Arceus.",
            "{name} calcule la synchronisation des trois fronts à la microseconde près.",
            "{name} partage avec Pikachu une carte mentale des capteurs ennemis.",
            "{name} envoie à Serena des visions rassurantes pour qu'elle chante sans trembler.",
            "{name} aide Tortank à repérer les failles énergétiques dans la prison sous-marine.",
            "{name} offre à Léon et Dracaufeu une trajectoire optimisée à travers les nuages toxiques.",
            "{name} protège Suicune en créant un dôme psychique lorsque les drones lancent des lasers.",
            "{name} imprime dans la mémoire des otages le chemin le plus court vers la sortie.",
            "{name} décode les transmissions chiffrées de la Team Plasma en temps réel.",
            "{name} surveille les émotions de Naulynn pour lui signaler quand respirer profondément.",
            "{name} transforme les cris de Ho-Oh en coordonnées exploitables par les plongeurs.",
            "{name} referme le portail énergétique en traçant un symbole lumineux visible depuis Lognes."
        ],
        legacy=[
            "{name} rédige un grimoire tactique pour la future académie de Naulynn.",
            "{name} anime des ateliers de gestion du stress destinés aux jeunes champions.",
            "{name} met à jour quotidiennement la cartographie des lignes ley européennes.",
            "{name} conserve les souvenirs des missions dans une bibliothèque mentale.",
            "{name} aide Leon à planifier les couloirs aériens en fonction des flux psychiques.",
            "{name} supervise un laboratoire où les élèves testent des dispositifs anti-distorsion.",
            "{name} collabore avec Serena pour transformer des équations en chorégraphies éducatives.",
            "{name} partage des bulletins télépathiques avec Ondine pour anticiper les tempêtes.",
            "{name} accompagne Pikachu sur les toits pour analyser les étoiles filantes.",
            "{name} maintient un lien avec les anciens alliés comme Diantha et Cynthia.",
            "{name} raconte chaque mois une légende scientifique aux enfants de Lognes.",
            "{name} médite au sommet du gymnase afin d'entendre les futurs appels à l'aide."
        ]
    ),
    story_entry(
        slug="florizarre",
        id=3,
        name="Florizarre",
        number=3,
        type="Plante/Poison",
        category="Évolution & protecteurs",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        description="Florizarre absorbe l'énergie solaire par ses fleurs magnifiques.",
        hp=80,
        attack=82,
        defense=83,
        sp_atk=100,
        sp_def=100,
        speed=80,
        abilities=["Engrais", "Chlorophyle"],
        evolutions=["Bulbizarre → Florizarre → Florus"],
        encounter=[
            "{name} émerge à Kalos après avoir absorbé une tempête solaire au Colosse de Lumiose.",
            "{name} étale sa fleur comme une parabole pour stocker la lumière destinée aux serres de Lognes.",
            "{name} sent les applaudissements des botanistes qui n'avaient jamais vu une telle conversion d'énergie.",
            "{name} remercie Bulbizarre pour la patience qui l'a mené jusqu'à cette forme majestueuse.",
            "{name} serre la main de Naulynn avec une délicatesse étonnante malgré sa taille.",
            "{name} promet de devenir l'ancre verte des missions internationales.",
            "{name} inhale l'air de Kalos pour en conserver les notes sucrées.",
            "{name} prend le temps de calmer Salamèche encore impressionné par sa taille.",
            "{name} laisse les enfants accrocher des rubans à sa tige sans jamais bouger.",
            "{name} installe ses racines dans une plate-forme mobile pour voyager jusqu'à Lognes.",
            "{name} salue Leon par une révérence botanique.",
            "{name} ressent la chaleur de Ho-Oh qui l'encourage depuis le ciel."
        ],
        trial=[
            "{name} affronte Golemastoc du champion Plantagruel en combinant Poudre Dodo et Lance-Soleil.",
            "{name} stabilise la terre autour du gymnase pendant les travaux de rénovation.",
            "{name} canalise les vibrations provoquées par les concerts de Grodoudou.",
            "{name} aide Tortank à purifier les sols contaminés par la Team Plasma 2.0.",
            "{name} enseigne aux jeunes botanistes comment écouter la sève.",
            "{name} teste différentes combinaisons d'engrais pour nourrir les serres communautaires.",
            "{name} multiplie des plantes médicinales rares offertes par Serena.",
            "{name} coordonne des patrouilles écologiques avec Bulbizarre et Poussacha.",
            "{name} prête sa fleur comme parasol aux habitants pendant les canicules.",
            "{name} installe des capteurs naturels qui détectent la sécheresse avant les appareils humains.",
            "{name} développe un « parfum de calme » diffusé dans les cliniques mobiles.",
            "{name} participe aux concours horticoles inter-régions pour sensibiliser à la préservation des sanctuaires."
        ],
        alliance=[
            "{name} crée un réseau racinaire géant sous Rosalia pour transporter l'eau bénite de Lugia.",
            "{name} sert de tour de contrôle végétale pour coordonner les déplacements au sol.",
            "{name} soutient Serena en libérant des effluves qui amplifient sa voix.",
            "{name} alimente en énergie les boucliers d'Ondine grâce à sa photosynthèse.",
            "{name} envoie des pollens luminescents vers les plongeurs pour signaler les issues.",
            "{name} filtre l'air chargé de fumée en temps réel.",
            "{name} coopère avec Suicune pour créer un brouillard protecteur autour des otages.",
            "{name} capture les éclats d'énergie ennemis dans ses pétales pour les neutraliser.",
            "{name} prolonge ses racines jusqu'à Chochodile pour lui fournir de l'eau fraîche.",
            "{name} dessine sur le sol un motif ancestral visible depuis les airs pour guider Leon.",
            "{name} restitue la lumière accumulée afin de recharger les équipements de Pikachu.",
            "{name} bénit les légendaires libérés d'un parfum qui symbolise leur nouvelle alliance."
        ],
        legacy=[
            "{name} dirige les serres communautaires et suit chaque cycle de floraison.",
            "{name} abrite des Pokémon orphelins sous sa fleur durant les nuits froides.",
            "{name} sert d'autel vivant pour les cérémonies de Lognes.",
            "{name} supervise des stages de botanique appliquée pour les apprentis dresseurs.",
            "{name} prête ses pétales à Serena pour créer des costumes parfumés.",
            "{name} maintient un index botanique accessible à toute la communauté.",
            "{name} collabore avec Poussacha pour étudier les espèces de Paldea.",
            "{name} envoie des semences bénies à Kalos, Kanto et Alola.",
            "{name} assure la pollinisation des cultures urbaines grâce à ses spores guidées.",
            "{name} offre un refuge aux insectes qui servent ensuite de baromètres naturels.",
            "{name} emmène régulièrement Naulynn en randonnée pour qu'elle recharge ses batteries.",
            "{name} raconte aux enfants l'histoire du sanctuaire de Meaux pour honorer Bulbizarre."
        ]
    ),
    story_entry(
        slug="dracaufeu",
        id=6,
        name="Dracaufeu",
        number=6,
        type="Feu/Vol",
        category="Évolution & protecteurs",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        description="Dracaufeu crache du feu capable de faire fondre n'importe quoi.",
        hp=78,
        attack=84,
        defense=78,
        sp_atk=109,
        sp_def=85,
        speed=100,
        abilities=["Brasier", "Blaze"],
        evolutions=["Salamèche → Reptincel → Dracaufeu"],
        encounter=[
            "{name} naît du duel amical entre Salamèche et Sacha, sous une tempête de sable à Unys.",
            "{name} déploie ses ailes pour la première fois au-dessus des Rocheuses balayées par le vent.",
            "{name} comprend immédiatement qu'il devra escorter les convois de Lognes.",
            "{name} teste ses griffes sur les rochers pour ne pas perdre son équilibre en plein vol.",
            "{name} remercie Leon pour les conseils de navigation qu'il reçoit au clair de lune.",
            "{name} promet à Pikachu de toujours surveiller les éclairs qui frappent les cargaisons.",
            "{name} pratique des atterrissages silencieux dans les rues étroites de la banlieue.",
            "{name} dessine avec ses flammes des messages visibles depuis le RER pour rassurer les habitants.",
            "{name} s'entraîne à porter des charges lourdes en transportant des pièces de gymnase.",
            "{name} laisse Grodoudou peindre des constellations sur ses ailes lors des festivals.",
            "{name} discute avec Tortank des meilleures stratégies pour coordonner feu et eau.",
            "{name} conserve une brique du vieux four comme porte-bonheur."
        ],
        trial=[
            "{name} affronte Métalosse de Pierre dans un combat aérien ponctué de Gyro Ball.",
            "{name} apprend avec Leon à lire les vents froids de Hammerlocke.",
            "{name} participe aux escortes de vivres vers les villages isolés d'Unys.",
            "{name} collabore avec Pikachu pour cartographier les couloirs de tempête.",
            "{name} invente une technique Flammes en spirale pour repousser les drones.",
            "{name} réalise des simulations de sauvetage avec Tortank pour synchroniser feu et eau.",
            "{name} teste des combinaisons de flammes bleues pour réduire les risques d'incendie urbain.",
            "{name} sert de plate-forme d'observation à Abra lorsqu'il doit surveiller les distorsions.",
            "{name} anime des ateliers sur la sécurité aérienne pour les jeunes dresseurs.",
            "{name} participe à des expositions où il démontre l'importance du respect des couloirs aériens.",
            "{name} prête ses ailes à Serena pour une chorégraphie aérienne lors d'une collecte de fonds.",
            "{name} pousse Leon à écrire un guide complet sur les gestes d'urgence en altitude."
        ],
        alliance=[
            "{name} escorte Ho-Oh et Suicune loin des dirigeables pendant l'Opération Arceus.",
            "{name} génère un mur thermique bleu cobalt pour masquer la progression de l'équipe.",
            "{name} transporte des otages évacués sur son dos en plongeant entre les faisceaux laser.",
            "{name} synchronise sa trajectoire avec celle de Lugia pour éviter les collisions.",
            "{name} transmet en direct à Leon la force des rafales rencontrées.",
            "{name} brûle les filets énergétiques déployés autour du clocher sans abîmer la pierre.",
            "{name} coopère avec Raichu pour détourner les capteurs aériens.",
            "{name} sert de relais pour les messages lumineux envoyés par Pikachu.",
            "{name} chauffe les conduits glacés de Rosalia pour empêcher la formation de stalactites dangereuses.",
            "{name} attire sur lui l'attention des drones pendant que Serena libère les prisonniers.",
            "{name} stabilise Ho-Oh lorsque celui-ci retombe affaibli après la libération.",
            "{name} referme l'opération en dessinant une spirale de feu colorée visible jusqu'à Lognes."
        ],
        legacy=[
            "{name} forme les pilotes de Galar aux techniques de secours aérien.",
            "{name} tient un journal de vol partagé avec Leon et Naulynn.",
            "{name} patrouille les couloirs aériens pour dégager les routes commerciales.",
            "{name} accompagne Tortank lors des exercices combinés feu/eau.",
            "{name} anime des ateliers sur la météorologie pour les élèves de l'académie.",
            "{name} sert de taxi aérien pour les missions médicales urgentes.",
            "{name} chauffe les serres pendant les nuits glacées en volant au-dessus des verrières.",
            "{name} participe à des shows caritatifs où Serena chorégraphie ses flammes.",
            "{name} transporte des télescopes portables pour Abra et Alakazam.",
            "{name} veille à ce que les coulées de lave naturelles restent loin des villages.",
            "{name} porte sur lui une cloche miniature rappelant la libération de Rosalia.",
            "{name} raconte aux cadets comment la patience et la discipline l'ont transformé."
        ]
    ),
    story_entry(
        slug="tortank",
        id=9,
        name="Tortank",
        number=9,
        type="Eau",
        category="Évolution & protecteurs",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        description="Tortank use d'un canon à eau puissant intégré à sa carapace.",
        hp=79,
        attack=83,
        defense=100,
        sp_atk=83,
        sp_def=83,
        speed=78,
        abilities=["Torrent", "Tempêtade"],
        evolutions=["Carapuce → Carabaffe → Tortank"],
        encounter=[
            "{name} évolue après avoir escorté plusieurs convois humanitaires sur la Manche.",
            "{name} sent ses canons se déployer pour la première fois face à une houle gigantesque.",
            "{name} promet d'être la forteresse aquatique de Lognes.",
            "{name} reçoit de Leon un harnais spécial pour transporter du matériel médical.",
            "{name} teste ses turbines sur le lac de Kalos afin de stabiliser les barges.",
            "{name} se laisse peindre un symbole de tortue ailée par les enfants.",
            "{name} grave les noms des villages secourus sur l'intérieur de sa carapace.",
            "{name} s'exerce avec Carapuce et Coiffeton à coordonner les signaux de nage.",
            "{name} alimente des pompes d'irrigation improvisées autour des serres.",
            "{name} apprend à Grodoudou comment respirer calmement dans un sous-marin improvisé.",
            "{name} discute stratégie avec Tortank du Conseil de Kanto par visioconférence.",
            "{name} garde la vieille corde utilisée lors de la crue comme talisman."
        ],
        trial=[
            "{name} remporte une bataille navale contre le Léviator géant du Capitaine Dianta.",
            "{name} perfectionne la répartition de l'eau dans ses canons pour éviter toute perte.",
            "{name} participe à des manœuvres avec Ondine pour former des sauveteurs professionnels.",
            "{name} développe un système d'irrigation portable utilisé sur les toits de Lognes.",
            "{name} collabore avec Florizarre pour planter des mangroves protectrices.",
            "{name} construit des digues temporaires lors des tempêtes de la Manche.",
            "{name} anime des ateliers sur la sécurité nautique pour les écoles.",
            "{name} teste des canons modulaires pour arroser les champs en période de sécheresse.",
            "{name} enregistre la salinité des mers explorées et partage ses données avec Raichu.",
            "{name} transporte des générateurs pour Pikachu lors des missions maritimes.",
            "{name} aide Pierre à installer des cliniques flottantes.",
            "{name} garde toujours un compartiment vide pour accueillir les Pokémon blessés."
        ],
        alliance=[
            "{name} perce la cage énergétique de Lugia pendant l'Opération Arceus.",
            "{name} maintient la pression de ses canons pour stabiliser les tunnels inondés.",
            "{name} transporte les otages sur sa carapace blindée à travers les vortex.",
            "{name} coordonne ses jets avec Raichu afin de neutraliser les mines magnétiques.",
            "{name} surveille la respiration des plongeurs et leur fournit de l'oxygène en cas de besoin.",
            "{name} installe des balises hydrauliques pour guider les hydravions de Leon.",
            "{name} transforme les filets ennemis en cordages utiles aux équipes de surface.",
            "{name} protège Serena et Grodoudou lorsqu'ils traversent la zone humide.",
            "{name} fournit un plan détaillé des conduits aquatiques pour les archives d'Alakazam.",
            "{name} sert de catapulte à Chochodile qui doit atteindre une plateforme élevée.",
            "{name} refroidit les circuits surchauffés des dispositifs ennemis.",
            "{name} escorte Suicune à la surface en harmonisant leurs jets d'eau."
        ],
        legacy=[
            "{name} entretient un réseau de balises sous-marines qui surveillent la Manche.",
            "{name} irrigue les jardins historiques avec un système portable co-conçu par Naulynn.",
            "{name} transforme ses canons en fontaines lumineuses lors des festivals.",
            "{name} dirige des entraînements nautiques pour les dresseurs débutants.",
            "{name} prête ses données à Ondine pour mettre à jour les manuels de secours.",
            "{name} transporte des arbres entiers pour reboiser les berges.",
            "{name} accompagne Florizarre lors des cérémonies en transportant l'eau bénite.",
            "{name} reste de garde près des digues pendant chaque tempête annoncée.",
            "{name} supervise la logistique des convois humanitaires de la région.",
            "{name} sert de base flottante aux médecins lors des vaccinations de masse.",
            "{name} anime une émission radio où il raconte des aventures maritimes.",
            "{name} rappelle sans cesse que la force d'un tank réside aussi dans la douceur avec laquelle il transporte la vie."
        ]
    ),
    story_entry(
        slug="ectoplasma",
        id=94,
        name="Ectoplasma",
        number=94,
        type="Spectre/Poison",
        category="Évolution & protecteurs",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
        description="Ectoplasma peut passer à travers les murs et gèle tout autour.",
        hp=45,
        attack=50,
        defense=75,
        sp_atk=100,
        sp_def=75,
        speed=110,
        abilities=["Lévitation"],
        evolutions=["Fantominus → Spectrum → Ectoplasma"],
        encounter=[
            "{name} hante les catacombes de Lumiville, dirigeant une rébellion d'esprits.",
            "{name} observe Naulynn poser une lanterne respectueuse avant d'entrer.",
            "{name} écoute les souvenirs qu'elle partage avec Sacha et abdique sa colère.",
            "{name} accepte de sceller un pacte après que Grodoudou lui chante une berceuse.",
            "{name} retrouve sa forme rieuse lorsqu'il goûte au cacao chaud apporté par Pierre.",
            "{name} se synchronise avec Abra pour cartographier les couloirs secrets.",
            "{name} promet de protéger les âmes plutôt que de les tourmenter.",
            "{name} transforme les brouillards toxiques en brumes rafraîchissantes.",
            "{name} s'amuse à faire léviter les lanternes pour distraire les enfants en visite.",
            "{name} inscrit dans la pierre un glyphe indiquant que les catacombes sont désormais alliées.",
            "{name} raconte à Naulynn des légendes oubliées sur Rosalia.",
            "{name} porte toujours une clochette autour du cou pour signaler sa présence aux vivants."
        ],
        trial=[
            "{name} affronte le Darkrai d'un sorcier urbain pour prouver sa loyauté.",
            "{name} s'entraîne à geler les serveurs sans abîmer les circuits.",
            "{name} enseigne aux apprentis dresseurs comment respecter les esprits.",
            "{name} collabore avec Abra pour créer un réseau d'alerte spectral.",
            "{name} patrouille les tunnels sous Lognes afin de détecter les intrusions.",
            "{name} anime des visites nocturnes éducatives dans les catacombes.",
            "{name} prête son humour pour détendre Naulynn avant les missions.",
            "{name} attrape les cauchemars des enfants et les transforme en rêves amusants.",
            "{name} remplace les pièges de la Team Plasma par des illusions inoffensives.",
            "{name} participe aux répétitions de Grodoudou pour équilibrer les fréquences.",
            "{name} sert de projecteur vivant lors des spectacles de Serena.",
            "{name} apprend aux scientifiques comment mesurer une température fantomatique."
        ],
        alliance=[
            "{name} infiltre la base de la Team Plasma 2.0 en passant à travers les murs.",
            "{name} gèle les serveurs pour bloquer les communications ennemies.",
            "{name} guide Suicune dans les couloirs obscurs.",
            "{name} neutralise les drones grâce à des illusions glacées.",
            "{name} protège Serena en détournant les lasers par des reflets spectraux.",
            "{name} transporte des messages silencieux en les gravant sur la vapeur.",
            "{name} se coordonne avec Abra pour créer des doubles fantomatiques.",
            "{name} déplace les caisses d'archives sans laisser de traces physiques.",
            "{name} amuse les otages pour éviter la panique lors de l'évacuation.",
            "{name} repousse les sbires en gelant le sol sous leurs pieds.",
            "{name} relaie les instructions d'Alakazam aux équipes souterraines.",
            "{name} conclut l'opération en libérant une nuée de feux follets qui célèbrent la victoire."
        ],
        legacy=[
            "{name} tient le registre spectral de Lognes et note chaque apparition amicale.",
            "{name} guide les âmes perdues vers les foyers où elles sont attendues.",
            "{name} collabore avec Abra pour surveiller les distorsions pendant la nuit.",
            "{name} anime des ateliers de contes dans les catacombes reconverties.",
            "{name} protège les archives en refroidissant les pièces lors des canicules.",
            "{name} réalise des effets spéciaux pour les pièces de théâtre caritatives.",
            "{name} accompagne Naulynn lors des enquêtes paranormales en région parisienne.",
            "{name} se substitue aux climatiseurs quand les générateurs tombent en panne.",
            "{name} entretient un musée discret dédié aux héros tombés.",
            "{name} offre des blagues glacées à Pikachu pour détendre l'atmosphère.",
            "{name} assure une présence rassurante auprès des patients qui redoutent la nuit.",
            "{name} reste à l'écoute des esprits qui murmurent des avertissements utiles."
        ]
    ),
    story_entry(
        slug="nymphali",
        id=700,
        name="Nymphali",
        number=700,
        type="Fée",
        category="Évolution & protecteurs",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
        description="Nymphali apaise ses alliés avec des rubans lumineux qui dissipent toute colère.",
        hp=95,
        attack=65,
        defense=65,
        sp_atk=110,
        sp_def=130,
        speed=60,
        abilities=["Joli Sourire", "Synchro-Peau"],
        evolutions=["Évoli → Nymphali"],
        encounter=[
            "{name} apparaît dans le studio de Serena lorsqu'un Évoli apeuré cherche refuge.",
            "{name} suit les pas de Naulynn en laissant des traînées roses sur les pavés de Lognes.",
            "{name} choisit Pikachu comme ami après avoir senti son cœur brûlant et loyal.",
            "{name} dépose un ruban sur la radio familiale pour harmoniser les ondes.",
            "{name} accompagne Florizarre dans une serre nocturne et ouvre toutes les fleurs à son passage.",
            "{name} danse autour du lac de Vaires en faisant miroiter la lune sur ses rubans.",
            "{name} apaise les enfants réfugiés en enveloppant leurs rêves d'étincelles.",
            "{name} médite avec Grodoudou pour accorder leur signature sonore.",
            "{name} salue Ondine en créant des ronds d'eau lumineux.",
            "{name} illumine les murs du gymnase de symboles féeriques.",
            "{name} trace un cœur lumineux pour rappeler à Naulynn sa mission.",
            "{name} jure de devenir le ruban protecteur de toute l'équipe."
        ],
        trial=[
            "{name} dirige un atelier de gestion des émotions pour les recrues.",
            "{name} développe des rubans qui amplifient les soins de Pierre.",
            "{name} cartographie les zones de tension à Lognes pour Naulynn.",
            "{name} invente un protocole d'accueil pour les Pokémon traumatisés.",
            "{name} collabore avec Abra pour détecter les mensonges subtils.",
            "{name} protège les archives des ondes négatives en apposant des sceaux.",
            "{name} organise des concerts féeriques avec Serena afin de motiver les civils.",
            "{name} harmonise l'énergie de Pikachu avant chaque mission critique.",
            "{name} transforme les blessures psychiques en souvenirs apaisés.",
            "{name} entraîne Nymphali sauvages à intervenir sans violence.",
            "{name} veille aux transitions émotionnelles lorsque les légendaires se réveillent.",
            "{name} tient un journal des pulsations de la ville pour anticiper les crises."
        ],
        alliance=[
            "{name} tisse un bouclier rose autour des otages durant l'Opération Arceus.",
            "{name} sert de relais empathique entre Pikachu et les légendaires.",
            "{name} calme les sbires repentis pour qu'ils livrent leurs informations.",
            "{name} diffuse un parfum rassurant dans la forteresse flottante.",
            "{name} éclaire les couloirs pour que Serena prépare sa diversion.",
            "{name} neutralise les projectiles énergétiques en absorbant leur colère.",
            "{name} transmet des messages secrets via des motifs de lumière.",
            "{name} soutient Dracaufeu lorsque les vents deviennent instables.",
            "{name} transforme les cris d'alerte en mélodies pour éviter la panique.",
            "{name} rappelle à Naulynn de respirer avant chaque décision cruciale.",
            "{name} scelle les cellules libérées avec des rubans protecteurs.",
            "{name} signe la victoire par un arc lumineux visible depuis Lognes."
        ],
        legacy=[
            "{name} gère un salon de médiation où dresseurs et Pokémon règlent leurs différends.",
            "{name} coordonne les cérémonies de gratitude envers les légendaires.",
            "{name} enseigne aux enfants comment créer des rubans d'énergie positive.",
            "{name} illumine le gymnase lors des veillées en hommage aux héros.",
            "{name} prête ses pouvoirs aux infirmières pour calmer les patients inquiets.",
            "{name} co-écrit avec Naulynn un manuel de leadership empathique.",
            "{name} veille aux sanctuaires féeriques de Kalos et envoie des rapports mensuels.",
            "{name} orchestre la décoration des festivals nocturnes de Lognes.",
            "{name} conserve un ruban pour chaque mission réussie.",
            "{name} installe des balises lumineuses pour guider les voyageurs égarés.",
            "{name} continue de rappeler que la douceur est une arme absolue.",
            "{name} reste le symbole des alliances sincères forgées par Naulynn."
        ]
    ),
    story_entry(
        slug="poussacha",
        id=906,
        name="Poussacha",
        number=906,
        type="Plante",
        category="Recrues Paldea",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png",
        description="Poussacha libère un parfum sucré lorsqu'il pétrit le sol avec ses pattes.",
        hp=40,
        attack=61,
        defense=54,
        sp_atk=45,
        sp_def=45,
        speed=65,
        abilities=["Engrais", "Protéen"],
        evolutions=["Poussacha → Matourgeon → Miascarade"],
        encounter=[
            "{name} se glisse dans le sac de Naulynn à Paldea, attiré par les graines luminescentes de Florizarre.",
            "{name} ronronne dans l'atelier des serres académiques sous les yeux de Clavel.",
            "{name} découvre les cartes de Lognes et se promet d'explorer chaque ruelle.",
            "{name} tresse des petites lianes pour décorer le carnet de Naulynn.",
            "{name} échange avec Poussacha locaux des recettes de parfums aux herbes.",
            "{name} se lie d'amitié avec les étudiants qui travaillent de nuit dans les jardins suspendus.",
            "{name} apprend à se cacher derrière des rabats de livres géants.",
            "{name} enregistre l'odeur de chaque plante rare afin de les identifier à distance.",
            "{name} retaille ses griffes pour graver des symboles dans la terre.",
            "{name} danse sur les tables lors des soirées étudiantes en libérant des pétales.",
            "{name} promet à Grodoudou de lui composer un parfum de scène unique.",
            "{name} salue les professeurs en leur offrant des sachets de feuilles séchées."
        ],
        trial=[
            "{name} gagne le concours d'infiltration de Naranja en neutralisant les pièges toxiques.",
            "{name} invente un baume anti-stress distribué aux étudiants avant les examens.",
            "{name} guide Naulynn à travers les serres labyrinthiques de Paldea.",
            "{name} travaille avec Bulbizarre pour transplanter des plantes en voie d'extinction.",
            "{name} apprend à dessiner des plans botaniques précis.",
            "{name} conçoit des filtres naturels pour purifier l'air des salles d'étude.",
            "{name} sert de guide touristique aux visiteurs curieux de Lognes.",
            "{name} partage ses découvertes avec Florizarre qui les consigne dans la bibliothèque.",
            "{name} entraîne les Coxy locaux à polliniser les serres portatives.",
            "{name} installe des détecteurs parfumés qui signalent la présence d'intrus.",
            "{name} collabore avec Coiffeton pour créer des chorégraphies végétales.",
            "{name} anime des ateliers de jardinage pour les adolescents de Lognes."
        ],
        alliance=[
            "{name} tresse des lianes discrètes reliant les équipes à la salle de contrôle ennemie.",
            "{name} marque les portes secrètes avec des senteurs différentes pour chaque escouade.",
            "{name} cache des graines explosives inoffensives qui créent des écrans de fumée parfumée.",
            "{name} se faufile entre les serveurs pour débrancher les câbles sans bruit.",
            "{name} délivre des messages codés en frottant ses pattes sur le sol.",
            "{name} prête ses moustaches comme antennes à Pikachu pour mieux capter les signaux.",
            "{name} distribue des sachets d'herbes à Grodoudou pour préserver sa voix.",
            "{name} communique avec les plantes locales pour connaître les mouvements ennemis.",
            "{name} transporte des clés thermiques dans sa fourrure sans attirer l'attention.",
            "{name} efface les traces de pas de l'équipe grâce à des feuilles absorbantes.",
            "{name} dépose un bouquet de remerciement sur la console principale après la victoire.",
            "{name} envoie un parfum apaisant aux otages pour calmer leur respiration."
        ],
        legacy=[
            "{name} veille sur les serres mobiles reliant Paldea et Lognes.",
            "{name} anime un club d'herboristerie pour les collégiens.",
            "{name} conçoit des codes olfactifs utilisés par l'équipe lors des missions.",
            "{name} expédie des graines rares à Serena pour ses costumes.",
            "{name} aide Bulbizarre à cartographier la flore urbaine.",
            "{name} parfume les wagons du RER transformés en jardins.",
            "{name} supervise une pépinière de plantes médicinales.",
            "{name} collabore avec Coiffeton pour décorer les parades nautiques de Paldea.",
            "{name} prévient Naulynn dès qu'un parasite menace les cultures.",
            "{name} partage des tutoriels de compostage avec la communauté.",
            "{name} reste l'ambassadeur discret des recrues Paldea.",
            "{name} écrit un journal parfumé relatant la vie entre deux régions."
        ]
    ),
    story_entry(
        slug="chochodile",
        id=909,
        name="Chochodile",
        number=909,
        type="Feu",
        category="Recrues Paldea",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png",
        description="Chochodile emmagasine l'énergie thermique dans sa carapace épaisse.",
        hp=67,
        attack=45,
        defense=59,
        sp_atk=63,
        sp_def=40,
        speed=36,
        abilities=["Brasier", "Inconscient"],
        evolutions=["Chochodile → Crocalor → Flâmigator"],
        encounter=[
            "{name} mime le chant lors d'un concert étudiant à Paldea, projetant des étincelles rythmiques.",
            "{name} rencontre Grodoudou qui lui propose un duo improvisé.",
            "{name} apprend à doser ses flammes pour ne pas brûler la scène.",
            "{name} goûte aux spécialités locales et garde une sauce piquante dans sa poche.",
            "{name} suit Naulynn dans les coulisses pour aider à porter les instruments.",
            "{name} s'inscrit à un atelier de percussion où il utilise sa carapace comme tambour.",
            "{name} peint son museau en rouge pour fêter son arrivée à Lognes.",
            "{name} observe Salamèche pour comprendre comment respirer avant un solo.",
            "{name} interprète une berceuse en duo avec Pikachu, mêlant étincelles et accords.",
            "{name} fait rire les enfants en claquant ses dents au rythme des chansons.",
            "{name} promet de chauffer les salles de répétition sans déclencher d'alarmes.",
            "{name} garde un médaillon offert par Clavel pour se souvenir de Paldea."
        ],
        trial=[
            "{name} affronte le garde Magmar de la Compagnie Frigomax pour défendre les artistes.",
            "{name} forge des clés thermiques capables de fondre les menottes.",
            "{name} accompagne Serena en tournée pour assurer la logistique pyrotechnique.",
            "{name} invente un système de chauffage portatif utilisé dans les refuges.",
            "{name} apprend la synchronisation nécessaire pour accompagner Dracaufeu.",
            "{name} travaille avec Tortank pour créer de la vapeur décorative.",
            "{name} enseigne aux élèves comment chauffer une scène sans brûler les rideaux.",
            "{name} collabore avec Florizarre afin de ne pas dessécher les plantes des serres.",
            "{name} expérimente des rythmes de claquements avec Coiffeton pour les parades.",
            "{name} sert de métronome vivant pendant les répétitions de Grodoudou.",
            "{name} enregistre des pistes percussives pour les replays diffusés par Serena.",
            "{name} aide Pikachu à calibrer les générateurs des festivals."
        ],
        alliance=[
            "{name} fournit la chaleur nécessaire pour forger les clés thermiques utilisées à Rosalia.",
            "{name} chauffe les rouages du clocher pour faciliter l'ouverture des portes.",
            "{name} divertit les gardes en jouant un solo de percussion sur les conduits.",
            "{name} prête sa carapace comme four portatif pour les équipes en infiltration.",
            "{name} collabore avec Salamèche pour créer des signaux lumineux codés.",
            "{name} alimente les projecteurs du spectacle de Serena lorsque l'électricité est coupée.",
            "{name} porte des messages gravés au fer rouge jusqu'à Tortank dans les tunnels.",
            "{name} partage sa chaleur avec Coiffeton afin de sécher les uniformes après les missions aquatiques.",
            "{name} dessine des runes de feu qui servent de repères aux otages.",
            "{name} distrait les scientifiques ennemis en claquant des dents rythmiques.",
            "{name} laisse des traces rouges brillantes pour guider Leon depuis les airs.",
            "{name} souffle une flamme finale en forme de note de musique pour célébrer la victoire."
        ],
        legacy=[
            "{name} agit comme four mobile dans les Rocheuses d'Unys pour forger les outils des Rangers.",
            "{name} compose des harmonies de flammes avec Dracaufeu et Salamèche.",
            "{name} anime des ateliers de percussions thermiques pour les collégiens.",
            "{name} chauffe les halls lors des festivals afin que personne ne grelotte.",
            "{name} invente des recettes culinaires qui utilisent sa carapace comme plancha.",
            "{name} prête sa chaleur aux cliniques mobiles pour stériliser le matériel.",
            "{name} accompagne Serena lors des tournées caritatives et gère les effets pyrotechniques.",
            "{name} travaille avec Chochodile sauvages pour qu'ils deviennent guides culturels de Paldea.",
            "{name} chauffe les rails du RER transformés en jardins afin d'éviter le gel.",
            "{name} participe aux répétitions de Grodoudou même lorsqu'il n'est pas sur scène.",
            "{name} partage ses rythmes avec Pikachu pour dynamiser les bulletins météo.",
            "{name} garde toujours un coin de sa carapace libre pour transporter des lettres brûlantes dédiées aux fans."
        ]
    ),
    story_entry(
        slug="coiffeton",
        id=912,
        name="Coiffeton",
        number=912,
        type="Eau",
        category="Recrues Paldea",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png",
        description="Coiffeton protège sa houppe brillante en sécrétant une huile douce.",
        hp=55,
        attack=65,
        defense=45,
        sp_atk=50,
        sp_def=45,
        speed=50,
        abilities=["Torrent", "Livraison"],
        evolutions=["Coiffeton → Canarbello → Palmaval"],
        encounter=[
            "{name} se présente à l'atelier nautique d'Ondine à Porto Marinada, impeccablement coiffé.",
            "{name} propose spontanément d'organiser la cérémonie d'accueil de Naulynn à Paldea.",
            "{name} inspecte chaque bateau pour vérifier la propreté des ponts.",
            "{name} offre à Pikachu une serviette siglée pour essuyer ses joues.",
            "{name} note dans son carnet la façon dont les enfants saluent les dresseurs.",
            "{name} fait répéter aux élèves un salut militaire comique.",
            "{name} collectionne les plumes tombées de Ho-Oh pour en faire des accessoires.",
            "{name} apprend des pas de danse aquatique à Coiffeton locaux.",
            "{name} synchronise ses mouvements avec ceux de Tortank au premier regard.",
            "{name} s'émerveille devant les serres mobiles et propose des idées de décoration.",
            "{name} installe un miroir sur son navire pour vérifier que sa houppe reste parfaite.",
            "{name} salue Naulynn en lui proposant un calendrier d'entraînement nautique."
        ],
        trial=[
            "{name} remporte la parade navale de Paldea en dirigeant une escadrille de Tortank.",
            "{name} conçoit des chorégraphies aquatiques utilisées lors des festivals de Lognes.",
            "{name} élabore des uniformes pour les jeunes sauveteurs.",
            "{name} apprend auprès d'Ondine les protocoles d'évacuation maritime.",
            "{name} forme des groupes de synchronisation qui traversent les canaux sans se heurter.",
            "{name} supervise la propreté des ports improvisés.",
            "{name} développe une huile protectrice qui empêche l'eau de salir les costumes.",
            "{name} place des marqueurs colorés sur la Manche afin de guider les convois.",
            "{name} participe à des duels amicals contre les capitaines de Paldea.",
            "{name} invente des appels codés basés sur le battement d'ailes.",
            "{name} collabore avec Raichu pour associer signalisation lumineuse et chorégraphies.",
            "{name} dirige un club de jeunes marins à Lognes."
        ],
        alliance=[
            "{name} coordonne les formations aquatiques pendant la libération de Lugia.",
            "{name} reflète les signaux lumineux d'Alakazam sur sa houppe huilée.",
            "{name} conserve son calme et rassure les otages par son port élégant.",
            "{name} dirige les embarcations en dessinant des arabesques parfaites.",
            "{name} supervise l'accueil des légendaires libérés avec un protocole digne d'un gala.",
            "{name} détourne la garde en organisant une micro-parade improvisée.",
            "{name} sert de liaison entre les équipes de surface et les plongeurs.",
            "{name} transmet des messages codés en agitant ses plumes.",
            "{name} transporte discrètement des clés thermiques dans ses gants.",
            "{name} polit les carapaces des Tortank pour améliorer leur hydrodynamisme.",
            "{name} garde un registre des navires alliés et ennemis aperçus autour de Rosalia.",
            "{name} conclut l'opération en alignant les bateaux afin de créer un couloir d'honneur."
        ],
        legacy=[
            "{name} sert d'officier de liaison entre Ondine et Naulynn.",
            "{name} orchestre les chorégraphies nautiques des festivals.",
            "{name} note chaque variation de marée dans un carnet illustré.",
            "{name} propose des cours d'étiquette maritime aux dresseurs débutants.",
            "{name} collabore avec Chochodile pour synchroniser percussions et jets d'eau.",
            "{name} inspecte les uniformes des équipes avant chaque mission.",
            "{name} anime des podcasts sur l'histoire navale de Paldea.",
            "{name} supervise un atelier de restauration de bateaux miniatures.",
            "{name} assure la coordination des convois sur la Manche.",
            "{name} aide les enfants à fabriquer des maquettes de navires.",
            "{name} conçoit des défilés sur l'eau retraçant l'Opération Arceus.",
            "{name} tient un journal de bord que Naulynn consulte avant chaque voyage."
        ]
    ),
    story_entry(
        slug="otaquin",
        id=728,
        name="Otaquin",
        number=728,
        type="Eau",
        category="Recrues Paldea",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
        description="Otaquin projette des bulles élastiques qu'il utilise comme trampolines sonores.",
        hp=50,
        attack=54,
        defense=54,
        sp_atk=66,
        sp_def=56,
        speed=40,
        abilities=["Torrent", "Hydrovoile"],
        evolutions=["Otaquin → Otarlette → Oratoria"],
        encounter=[
            "{name} surgit d'une fontaine lors d'un spectacle de Serena et fait applaudir la foule.",
            "{name} suit Naulynn jusqu'à la radio pour diffuser des bulles musicales.",
            "{name} amuse Pikachu en transformant ses éclairs en gerbes d'étincelles aquatiques.",
            "{name} glisse sur les dalles humides du gymnase pour polir le sol.",
            "{name} laisse des coquillages gravés du symbole de Lognes dans chaque plan d'eau.",
            "{name} accompagne Coiffeton pour vérifier la propreté des quais.",
            "{name} se présente chez Ondine avec un bouquet d'algues parfumées.",
            "{name} installe des bulles géantes autour des enfants qui apprennent à nager.",
            "{name} guide Tortank à travers un labyrinthe d'eau avec des notes lumineuses.",
            "{name} partage un chant marin avec Grodoudou sur le toit du centre Pokémon.",
            "{name} capture des reflets de Ho-Oh dans ses bulles pour les offrir à Naulynn.",
            "{name} promet que chaque mission se terminera par une célébration aquatique."
        ],
        trial=[
            "{name} apprend à maintenir des bulles protectrices autour des blessés.",
            "{name} collabore avec Ondine pour cartographier les courants secondaires.",
            "{name} accompagne Tortank lors des convois humanitaires sur la Manche.",
            "{name} développe un language codé basé sur les éclats d'eau.",
            "{name} s'exerce à chanter sous l'eau pour transmettre des messages secrets.",
            "{name} aide Poussacha à arroser les toits végétalisés.",
            "{name} construit des bulles acoustiques pour les répétitions de Serena.",
            "{name} crée des miroirs liquides pour Alakazam afin d'anticiper les attaques.",
            "{name} s'entraîne avec Pikachu pour amortir les ondes de choc.",
            "{name} participe aux rondes nocturnes sur les canaux.",
            "{name} invente un dispositif de signalisation basé sur des bulles colorées.",
            "{name} consigne les niveaux d'eau quotidiens dans le carnet de Lognes."
        ],
        alliance=[
            "{name} enveloppe les civils d'une bulle géante durant l'Opération Arceus.",
            "{name} guide Suicune à travers les couloirs inondés.",
            "{name} sert de plate-forme flottante à Pikachu pour viser les drones.",
            "{name} diffuse la voix de Naulynn dans toute la forteresse grâce à un mégaphone aquatique.",
            "{name} renvoie les lasers ennemis en modifiant l'angle de ses bulles.",
            "{name} protège les archives de Serena avec une capsule étanche.",
            "{name} détourne les sbires en organisant une parade nautique improvisée.",
            "{name} transmet les codes lumineux de Nymphali via des gouttes suspendues.",
            "{name} rafraîchit Dracaufeu quand ses flammes menacent de le brûler.",
            "{name} transporte Leon et Ondine dans une même bulle pour coordonner leurs actions.",
            "{name} amplifie les chants de Grodoudou pour qu'ils couvrent toute la base.",
            "{name} scelle les portes inondées afin que les civils traversent sans danger."
        ],
        legacy=[
            "{name} organise les parades de bulles durant les festivals de Lognes.",
            "{name} anime des cours de natation artistiques pour les enfants.",
            "{name} surveille les réserves d'eau des serres urbaines.",
            "{name} crée des installations artistiques à partir de gouttes suspendues.",
            "{name} enregistre des podcasts humoristiques sur la vie aquatique.",
            "{name} aide Ondine à moderniser les protocoles de secours nautiques.",
            "{name} construit des bulles-miroirs pour les entraînements de chorégraphie.",
            "{name} prête ses chants aux cérémonies d'accueil des réfugiés.",
            "{name} sert de mascotte lors des collectes de fonds pour les sanctuaires.",
            "{name} offre des coquillages personnalisés aux visiteurs.",
            "{name} rappelle à Naulynn que la joie est une énergie stratégique.",
            "{name} reste à Lognes comme ambassadeur d'Alola."
        ]
    ),
    story_entry(
        slug="suicune",
        id=245,
        name="Suicune",
        number=245,
        type="Eau",
        category="Légendaires libérés",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
        description="Suicune court sur l'eau et purifie l'air où il passe.",
        hp=100,
        attack=75,
        defense=115,
        sp_atk=90,
        sp_def=115,
        speed=85,
        abilities=["Pression", "Cœur Noble"],
        evolutions=["Suicune"],
        encounter=[
            "{name} est retenu au sommet des monts Houleux par la Team Plasma 2.0.",
            "{name} observe Naulynn, Sacha et Léon gravir la forteresse malgré les drones Cryogonal.",
            "{name} sent l'air se purifier à chaque pas de l'équipe.",
            "{name} écoute Pikachu qui frappe ses joues pour annoncer l'assaut.",
            "{name} pousse un cri strident qui résonne dans les vallées d'Unys.",
            "{name} voit Salamèche transporter les braises sacrées jusqu'à son autel.",
            "{name} retient son souffle lorsque Tortank perce la barrière énergétique inférieure.",
            "{name} reconnaît en Naulynn la même détermination que chez les anciens héros.",
            "{name} échange un regard amical avec Leon malgré la tempête de glace.",
            "{name} inspire profondément pour préserver sa force avant le duel final.",
            "{name} laisse Sacha lui poser une main sur l'épaule pour le rassurer.",
            "{name} promet déjà de patrouiller sur les lacs de Johto une fois libre."
        ],
        trial=[
            "{name} impose un duel chrono à Dracaufeu et Salamèche pour tester la détermination de l'équipe.",
            "{name} déclenche des torrents d'eau pure pour éteindre les feux ennemis.",
            "{name} purifie l'air autour de Rosalia après chaque bataille.",
            "{name} apprend aux dresseurs à respirer pendant les tempêtes émotionnelles.",
            "{name} entraîne les sauveteurs à courir sur l'eau grâce à des plateformes énergétiques.",
            "{name} surveille les chutes d'Unys et signale les tremblements suspects.",
            "{name} collabore avec Tortank pour purifier les canaux pollués.",
            "{name} partage avec Raichu les secrets des courants invisibles.",
            "{name} prête son pouvoir aux cliniques pour stériliser les salles.",
            "{name} participe aux festivals en créant des arcs-en-ciel aquatiques.",
            "{name} aide Grodoudou à calibrer ses chants pour les cérémonies.",
            "{name} consigne dans l'eau des messages destinés aux générations futures."
        ],
        alliance=[
            "{name} invoque une tempête pure qui efface les toxines autour de Rosalia.",
            "{name} sert de guide pour les plongeurs dans les tunnels inondés.",
            "{name} coopère avec Lugia pour synchroniser les courants marins.",
            "{name} court sur les murs de la tour pour détourner les lasers ennemis.",
            "{name} partage son souffle avec les otages qui peinent à respirer.",
            "{name} transporte des messages d'espoir en surfant sur les vagues.",
            "{name} inspire à Naulynn la stratégie finale lorsqu'ils observent le champ de bataille.",
            "{name} refroidit les circuits ennemis par des jets parfaitement ciblés.",
            "{name} libère des perles d'eau qui servent de repères lumineux.",
            "{name} entoure Ho-Oh d'un voile d'humidité protectrice après sa libération.",
            "{name} aide Raichu à éviter les charges électrostatiques en plein combat.",
            "{name} saute de toit en toit pour attirer les drones loin des civils."
        ],
        legacy=[
            "{name} patrouille les lacs de Johto et répond à l'appel de Naulynn.",
            "{name} enseigne aux élèves comment écouter la respiration du vent.",
            "{name} alimente les fontaines de Lognes durant les sécheresses.",
            "{name} organise des rituels de purification pour les sanctuaires.",
            "{name} inspire les artistes qui peignent des fresques aquatiques.",
            "{name} transmet ses données météorologiques à Leon.",
            "{name} aide Ondine à perfectionner les protocoles de secours.",
            "{name} offre des gouttes d'eau bénite aux cliniques mobiles.",
            "{name} participe aux parades en courant sur les canaux éclairés.",
            "{name} soutient Tortank lors des missions de reboisement des berges.",
            "{name} raconte aux enfants comment il a résisté aux prisons de glace.",
            "{name} rappelle sans cesse que la pureté de l'air est un combat quotidien."
        ]
    ),
    story_entry(
        slug="lugia",
        id=249,
        name="Lugia",
        number=249,
        type="Psy/Vol",
        category="Légendaires libérés",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
        description="Lugia contrôle les courants des mers profondes.",
        hp=106,
        attack=90,
        defense=130,
        sp_atk=90,
        sp_def=154,
        speed=110,
        abilities=["Pression", "Multiécaille"],
        evolutions=["Lugia"],
        encounter=[
            "{name} est enfermé dans une cage énergétique sous-marine par la Team Plasma 2.0.",
            "{name} observe Tortank et Ondine percer la barrière.",
            "{name} entend Ectoplasma geler les serveurs ennemis.",
            "{name} ressent la présence télépathique d'Alakazam.",
            "{name} teste la détermination de Naulynn avant de se libérer.",
            "{name} accepte un duel rituel contre Dracaufeu et Tortank.",
            "{name} libère un cri qui résonne jusqu'à Lognes.",
            "{name} offre à Pikachu une plume argentée en signe de gratitude.",
            "{name} synchronise sa respiration avec Suicune.",
            "{name} confie à Leon ses doutes sur la surface.",
            "{name} promet de surveiller les océans une fois libre.",
            "{name} déploie ses ailes pour la première fois hors de sa prison."
        ],
        trial=[
            "{name} apprend aux sauveteurs à lire les courants profonds.",
            "{name} coopère avec Tortank pour installer des balises hydrauliques.",
            "{name} empêche des tempêtes de frapper les convois.",
            "{name} partage ses connaissances avec Ondine pour améliorer les protocoles.",
            "{name} entraîne Coiffeton à guider les navires sous une pluie battante.",
            "{name} offre des leçons d'hydro-courants aux élèves.",
            "{name} agit comme serveur météo pour Leon et Dracaufeu.",
            "{name} surveille les Vikings de Galar qui veulent capturer des légendaires.",
            "{name} crée des tunnels aquatiques permettant aux équipes de voyager discrètement.",
            "{name} participe aux festivals en dessinant des arcs d'eau géants.",
            "{name} sert de médiateur entre les Pokémon marins et les humains.",
            "{name} inscrit ses calculs des marées dans les archives d'Alakazam."
        ],
        alliance=[
            "{name} ouvre un tunnel d'eau pour Ho-Oh et Suicune.",
            "{name} stabilise les vortex afin que Carapuce les traverse.",
            "{name} protège les otages en les enveloppant dans une bulle aqueuse.",
            "{name} renvoie les drones sous-marins vers la surface par des courants inversés.",
            "{name} partage sa vision sonar avec Pikachu pour cartographier la base.",
            "{name} synchronise ses battements d'aile avec les chants de Grodoudou.",
            "{name} sert de repère lumineux grâce aux écailles qui reflètent la lune.",
            "{name} absorbe les coups énergétiques destinés aux plongeurs.",
            "{name} guide Leon pour qu'il puisse poser ses hydravions sur une mer tumultueuse.",
            "{name} aide Alakazam à transmettre les instructions sous l'eau.",
            "{name} libère un souffle puissant qui détruit les barrières finales.",
            "{name} salue les habitants de Rosalia en dessinant une vague d'honneur."
        ],
        legacy=[
            "{name} veille sur les océans et informe Naulynn des tempêtes lointaines.",
            "{name} enseigne les sciences marines aux élèves de Lognes.",
            "{name} collabore avec Tortank pour alimenter les fontaines.",
            "{name} prête ses données météorologiques à la station de Pikachu.",
            "{name} accompagne Leon lors des missions aériennes au-dessus de la mer.",
            "{name} héberge des chercheurs qui étudient les courants profonds.",
            "{name} participe aux exercices d'évacuation maritimes.",
            "{name} raconte des légendes océaniques lors des festivals.",
            "{name} transporte des équipements lourds vers les îles isolées.",
            "{name} plane régulièrement au-dessus de Lognes pour rassurer les habitants.",
            "{name} sert de symbole pour les programmes de protection des mers.",
            "{name} rappelle à Naulynn que la vigilance sur l'eau est un acte d'amour."
        ]
    ),
    story_entry(
        slug="hooh",
        id=250,
        name="Ho-Oh",
        number=250,
        type="Feu/Vol",
        category="Légendaires libérés",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
        description="Ho-Oh symbolise la renaissance et répand des plumes arc-en-ciel.",
        hp=106,
        attack=130,
        defense=90,
        sp_atk=110,
        sp_def=154,
        speed=90,
        abilities=["Pression", "Régé-Force"],
        evolutions=["Ho-Oh"],
        encounter=[
            "{name} est exploité par la Team Plasma 2.0 dans le clocher de Rosalia.",
            "{name} entend Serena et Grodoudou monter une diversion musicale.",
            "{name} ressent les braises sacrées apportées par Salamèche.",
            "{name} aperçoit Naulynn gravir les escaliers en silence.",
            "{name} brûle d'impatience mais attend le signal pour éviter d'être capturé à nouveau.",
            "{name} perçoit les drones tournoyer autour du clocher.",
            "{name} se prépare à prendre son envol dès que les verrous sautent.",
            "{name} imprime sa gratitude dans une plume qu'il confie à Pikachu.",
            "{name} remercie Grodoudou pour la berceuse improvisée.",
            "{name} éclaire Rosalia d'une lumière dorée qui rassure les habitants.",
            "{name} promet de bénir les sanctuaires que l'équipe protège.",
            "{name} écoute le vent emporter les rumeurs de liberté."
        ],
        trial=[
            "{name} teste Naulynn dans un duel aérien avec Dracaufeu.",
            "{name} enseigne aux élèves comment honorer les traditions sans se faire piéger par le passé.",
            "{name} purifie les lieux sacrés profanés par la Team Plasma.",
            "{name} offre des plumes arc-en-ciel aux enfants méritants.",
            "{name} chauffe les serres pendant les nuits glaciales.",
            "{name} supervise la restauration du clocher de Rosalia.",
            "{name} entraîne Salamèche à manipuler des flammes célestes.",
            "{name} réalise des survols symboliques lors des festivals.",
            "{name} aide Serena à chorégraphier des spectacles lumineux.",
            "{name} insuffle du courage aux habitants de Lognes lors des annonces importantes.",
            "{name} consigne dans le ciel les événements marquants en traçant des motifs de feu.",
            "{name} baptise chaque nouvelle promotion de dresseurs par une pluie de pétales incandescents."
        ],
        alliance=[
            "{name} embrase le ciel pour signaler à Lugia la position des otages.",
            "{name} bénit les lames de Poussacha pour couper les chaînes.",
            "{name} participe au spectacle de Serena en diffusant des volutes arc-en-ciel.",
            "{name} protège les otages refroidis en diffusant une chaleur douce.",
            "{name} coordonne ses cris avec les signaux électriques de Pikachu.",
            "{name} éloigne les drones en simulant des explosions de lumière.",
            "{name} se perche au sommet du clocher pour surveiller l'avancée des alliés.",
            "{name} transmet de l'énergie à Dracaufeu lorsque ses ailes fatiguent.",
            "{name} réchauffe les mains de Naulynn avec une plume ardente.",
            "{name} remercie Serena par un arc lumineux visible jusqu'à Lognes.",
            "{name} accompagne Suicune lorsqu'il purifie Rosalia.",
            "{name} dessine dans le ciel un message invitant les habitants à célébrer la paix."
        ],
        legacy=[
            "{name} plane régulièrement au-dessus des festivals de Lognes.",
            "{name} offre des plumes arc-en-ciel aux artistes et aux scientifiques.",
            "{name} chauffe les cérémonies nocturnes pour que personne ne frissonne.",
            "{name} inspire des peintures murales qui racontent l'Opération Arceus.",
            "{name} bénit les serres avant chaque saison de plantation.",
            "{name} accompagne Serena lors des tournées pour illuminer la scène.",
            "{name} collabore avec Pikachu pour créer des aurores artificielles.",
            "{name} veille sur Rosalia et prévient Naulynn lorsque des menaces approchent.",
            "{name} se pose parfois sur le gymnase pour prêter sa chaleur aux entraînements.",
            "{name} transmet des légendes anciennes aux enfants regroupés autour du feu.",
            "{name} participe aux rituels de gratitude organisés par Florizarre.",
            "{name} rappelle à toute l'équipe que la renaissance est possible après chaque bataille."
        ]
    ),
    story_entry(
        slug="arceus",
        id=493,
        name="Arceus",
        number=493,
        type="Normal",
        category="Légendaires libérés",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
        description="Arceus, le Pokémon Alpha, module les plates afin de changer de type.",
        hp=120,
        attack=120,
        defense=120,
        sp_atk=120,
        sp_def=120,
        speed=120,
        abilities=["Multitype"],
        evolutions=["Arceus"],
        encounter=[
            "{name} observe Naulynn depuis les ruines de Sinnoh alors que la Team Plasma 2.0 siphonne son énergie.",
            "{name} ressent la lueur de Pikachu qui gravit la tour dimensionnelle.",
            "{name} entend les chants de Serena qui résonnent dans l'espace-temps.",
            "{name} aperçoit les rubans de Nymphali se refléter sur les plaques sacrées.",
            "{name} teste la foi de Naulynn en projetant des illusions de futurs possibles.",
            "{name} reconnaît l'odeur de Lognes portée par le vent cosmique.",
            "{name} laisse une plaque s'éveiller lorsque Salamèche réchauffe le sanctuaire.",
            "{name} voit Grodoudou et Raichu harmoniser leurs signaux pour stabiliser la dimension.",
            "{name} ressent les prières silencieuses des habitants de Lognes.",
            "{name} accepte que Naulynn pose sa main sur son front lumineux.",
            "{name} brise ses chaînes lorsque Tortank inonde les circuits d'Alectra.",
            "{name} promet à Naulynn de rester l'allié vigilant des mondes liés."
        ],
        trial=[
            "{name} demande à Naulynn de coordonner toutes les équipes simultanément.",
            "{name} entraîne Pikachu à manipuler les plaques élémentaires.",
            "{name} confie à Leon une simulation de cataclysme pour vérifier son sang-froid.",
            "{name} vérifie la loyauté de chaque légendaire libéré.",
            "{name} apprend à Grodoudou à moduler son chant selon les dimensions.",
            "{name} teste la patience de Nymphali en ralentissant le temps.",
            "{name} exige que Tortank et Suicune fusionnent leurs flux.",
            "{name} rédige avec Naulynn un pacte inter-régions.",
            "{name} inspire Cynthia qui documente les nouvelles prophéties.",
            "{name} confie à Alakazam les clefs d'un réseau de portails.",
            "{name} supervise la reconstruction des sanctuaires de Sinnoh.",
            "{name} bénit Lognes en traçant un cercle lumineux autour de la ville."
        ],
        alliance=[
            "{name} reconfigure la forteresse flottante pour piéger Alectra.",
            "{name} synchronise les plaques avec les signaux de Pikachu pour ouvrir un corridor.",
            "{name} confie à Naulynn une vision de la disposition des drones.",
            "{name} neutralise les armes ennemies en changeant constamment de type.",
            "{name} protège les civils en créant des bulles de réalité stable.",
            "{name} amplifie la voix de Naulynn pour qu'elle résonne dans toute la base.",
            "{name} prête des éclats de plaques à chaque légendaire pour augmenter leur puissance.",
            "{name} éteint la corruption énergétique en un éclair multicolore.",
            "{name} garde un œil sur les plaques restées en arrière et les téléporte au QG.",
            "{name} supprime la gravité autour des otages pour faciliter leur évacuation.",
            "{name} ordonne aux sbires repentis de déposer les armes en modulant leurs émotions.",
            "{name} referme le portail dimensionnel dès que la mission est accomplie."
        ],
        legacy=[
            "{name} veille sur Lognes via un halo discret qui flotte au-dessus du lac.",
            "{name} remet à Naulynn une plaque vivante qui s'illumine lors des urgences.",
            "{name} appelle régulièrement Pikachu pour vérifier l'équilibre des réseaux.",
            "{name} confie à Serena des visions artistiques inspirant les nouveaux dresseurs.",
            "{name} installe des portails sécurisés entre les sanctuaires alliés.",
            "{name} charge Tortank et Suicune de surveiller les anomalies marines.",
            "{name} envoie des fragments de lumière aux villes en détresse.",
            "{name} garde un registre cosmique des promesses tenues par Naulynn.",
            "{name} ouvre les bibliothèques célestes aux chercheurs de Lognes.",
            "{name} bénit chaque nouveau pacte conclu avec les dresseurs amis.",
            "{name} rappelle à tous que la responsabilité accompagne la puissance.",
            "{name} demeure l'étoile tutélaire du réseau de Naulynn."
        ]
    ),
    story_entry(
        slug="salameche",
        id=4,
        name="Salamèche",
        number=4,
        type="Feu",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        description="La flamme sur sa queue indique l'état de sa santé.",
        hp=39,
        attack=52,
        defense=43,
        sp_atk=60,
        sp_def=50,
        speed=65,
        abilities=["Brasier", "Blaze"],
        evolutions=["Salamèche → Reptincel → Dracaufeu"],
        encounter=[
            "{name} tremble près du four à briques abandonné pendant que les siphonneurs de chaleur se moquent de lui.",
            "{name} voit Naulynn se couvrir de sa cape pour l'abriter des étincelles qui retombent.",
            "{name} laisse Ondine refroidir le sol avec un mur d'eau pour qu'il puisse marcher sans s'effondrer.",
            "{name} ressent la pression de Pikachu qui encercle la salle avec des arcs contrôlés.",
            "{name} reprend vie lorsqu'il entend Grodoudou chanter et que Pierre casse les chaînes.",
            "{name} promet de devenir la torche qui guidera les convois de Lognes.",
            "{name} s'imprègne de l'odeur de l'argile pour se souvenir d'où il vient.",
            "{name} souffle une première braise stable grâce aux conseils de Sacha.",
            "{name} remarque le regard bienveillant de Leon projeté dans la fumée.",
            "{name} trace de petites runes de feu sur les briques refroidies pour prévenir les criminels.",
            "{name} accepte de dormir près de Grodoudou afin d'apprivoiser les battements d'un cœur humain.",
            "{name} se met à rire quand Carapuce verse un seau d'eau sur sa tête pour tester sa résistance."
        ],
        trial=[
            "{name} affronte Plantagruel et esquive les jets de métal en fusion avec des spirales de Flammes.",
            "{name} apprend les bases de la voltige avec Leon sur les remparts de Hammerlocke.",
            "{name} combine Lance-Flammes et Vive-Attaque pour découper les filets tendus par la Team Plasma.",
            "{name} travaille avec Tortank afin de produire une vapeur contrôlée lors des patrouilles nocturnes.",
            "{name} forge des braises calibrées pour réchauffer les campements de Naulynn sans incendier les toits.",
            "{name} invente une danse de feu avec Serena pour les festivals \"Lumières de Lognes\".",
            "{name} apprend à se doucher à l'eau froide pour ne pas fissurer les briques encore fragiles.",
            "{name} alimente la forge mobile où Pierre prépare les outils des cliniques.",
            "{name} développe un souffle précis qui permet d'éteindre les mèches explosives des sbires.",
            "{name} écrit ses mémoires sur des plaques d'argile que Florizarre enfouit dans le gymnase.",
            "{name} s'entraîne avec Dracaufeu de Sacha pour comprendre les flux d'air montagneux.",
            "{name} supervise une brigade d'enfants qui apprennent à manipuler les extincteurs Pokémon."
        ],
        alliance=[
            "{name} transporte les braises sacrées de Ho-Oh pour déclencher le spectacle de Serena à Rosalia.",
            "{name} chauffe les engrenages du clocher afin de dilater silencieusement les charnières verrouillées.",
            "{name} envoie des signaux lumineux sur les toits pour orienter Leon au-dessus de la tour.",
            "{name} détourne des drones en leur présentant des illusions de flammes bleues contrôlées.",
            "{name} partage sa chaleur avec Chochodile pour forger des clés thermiques.",
            "{name} tient la main de Grodoudou dans les coulisses pour calmer son trac avant le chant décisif.",
            "{name} synchronise sa flamme avec la respiration d'Alakazam afin d'indiquer le moment exact de l'assaut.",
            "{name} attire les sbires dans une ruelle éclairée par ses flammes cobalt, permettant à Ectoplasma de les neutraliser.",
            "{name} laisse Raichu surfer sur ses courants chauds pour booster les communications psychiques.",
            "{name} enflamme un symbole de résistance au sommet du clocher lorsque Ho-Oh se libère.",
            "{name} délivre des étincelles miniatures à Poussacha pour qu'il puisse marquer les issues secrètes.",
            "{name} garde un œil sur les archives volées et les réduit en cendres avant que la Team Plasma ne puisse les récupérer."
        ],
        legacy=[
            "{name} dirige les patrouilles incendie de Lognes et intervient à la moindre alarme déclenchée par les jeunes dresseurs.",
            "{name} enseigne aux apprentis pompiers Pokémon comment respirer sous un masque couvert de fumée.",
            "{name} entretient les fours communautaires utilisés pour les ateliers de poterie.",
            "{name} chauffe les serres pendant les nuits glaciales pour protéger les plantes rares.",
            "{name} accompagne Dracaufeu lors des convoyages de vivres vers les Rocheuses d'Unys.",
            "{name} rédige avec Leon un manuel de navigation aérienne destiné aux futures équipes de secours.",
            "{name} maintient un brasier commémoratif sur le toit du gymnase en hommage aux mentors passés.",
            "{name} anime un club de \"pyrographie raisonnée\" où les adolescents apprennent à dessiner avec la chaleur.",
            "{name} collabore avec Poussacha pour éclairer doucement les tunnels transformés en jardins.",
            "{name} fournit des étincelles calibrées à Pikachu pour alimenter la station météo artisanale.",
            "{name} surveille les zones industrielles pour éviter qu'un nouveau siphonnage de chaleur ne recommence.",
            "{name} répète chaque semaine la chorégraphie de Rosalia pour rester prêt au prochain appel légendaire."
        ]
    ),
    story_entry(
        slug="carapuce",
        id=7,
        name="Carapuce",
        number=7,
        type="Eau",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        description="Carapuce peut rester des heures sous l'eau grâce à sa carapace.",
        hp=44,
        attack=48,
        defense=65,
        sp_atk=50,
        sp_def=64,
        speed=43,
        abilities=["Torrent", "Tempêtade"],
        evolutions=["Carapuce → Carabaffe → Tortank"],
        encounter=[
            "{name} nage à contre-courant dans le canal de la Marne pour récupérer des œufs ballotés par la crue.",
            "{name} attrape les cordes improvisées par Naulynn avec ses nageoires encore tremblantes.",
            "{name} observe Pikachu électriser doucement les pontons afin de les stabiliser.",
            "{name} convie les Bulbizarre du marais à planter leurs racines sur la berge vacillante.",
            "{name} se gonfle comme une bouée pour servir de radeau aux enfants paniqués.",
            "{name} dessine dans la vase un schéma des courants pour aider Ondine à prévoir la montée des eaux.",
            "{name} partage ses réserves d'eau douce avec les tortues sauvages qui cherchent désespérément un abri.",
            "{name} camoufle les œufs sauvés dans une cavité secrète jusqu'à ce que le niveau redescende.",
            "{name} promet à Naulynn d'inspecter chaque semaine les écluses artisanales du canal.",
            "{name} rigole en arrosant Salamèche pour tester sa nouvelle résistance thermique.",
            "{name} respire au rythme de Grodoudou pour calmer son cœur après la tempête.",
            "{name} garde sur sa carapace une marque de boue, souvenir de cette première grande mission."
        ],
        trial=[
            "{name} affronte le chef du Squirtle Squad sur un radeau illuminé par les lanternes de Lognes.",
            "{name} apprend auprès de Tortank à répartir l'eau dans ses canons miniatures.",
            "{name} cartographie les tunnels sous-marins utilisés par la Team Plasma 2.0.",
            "{name} participe à une course nautique à Paldea et guide Coiffeton au milieu des courants croisés.",
            "{name} escorte les convois humanitaires sur la Manche en notant la salinité heure par heure.",
            "{name} aide Pierre à transporter un bloc opératoire gonflable vers une clinique flottante.",
            "{name} collabore avec Serena pour synchroniser des jets d'eau lors des festivals caritatifs.",
            "{name} invente un signal sonore de bulles pour prévenir Pikachu d'une anomalie aquatique.",
            "{name} teste des micro-capsules de purification distribuées aux habitants riverains.",
            "{name} enseigne aux enfants à fabriquer des flotteurs recyclés à partir de bouteilles.",
            "{name} tient un registre des tempêtes et compare ses notes à celles de Leon.",
            "{name} s'entraîne avec Suicune pour apprendre à courir sur l'eau pendant les exercices de sauvetage."
        ],
        alliance=[
            "{name} guide Tortank à travers les vortex menant à la prison sous-marine de Lugia.",
            "{name} envoie des bulles phosphorescentes en surface pour indiquer la progression aux équipes terrestres.",
            "{name} partage son oxygène avec Ectoplasma lorsque celui-ci gèle les serveurs.",
            "{name} transporte les clés thermiques forgées par Salamèche jusqu'aux cadenas immergés.",
            "{name} installe des balises artisanales afin que Leon puisse poser ses hydravions.",
            "{name} détourne les drones amphibies en leur projetant des tourbillons précis.",
            "{name} convainc des Pokémon sauvages de pousser les cages vers la surface.",
            "{name} dresse une carte en relief de la base qui servira plus tard aux formations d'Ondine.",
            "{name} cède son masque respiratoire à un otage paniqué et remonte en apnée jusqu'au tunnel.",
            "{name} plie les filets ennemis pour en faire des hamacs où Lugia et les prisonniers se reposent.",
            "{name} surveille les vibrations du sol sous-marin pour prévenir Tortank d'une rave d'énergie.",
            "{name} encadre Raichu lorsqu'il utilise Parabocharge au fond de l'eau."
        ],
        legacy=[
            "{name} patrouille les canaux européens et note chaque variation de courant dans un carnet nautique.",
            "{name} forme les sauveteurs de Paldea aux techniques de cordage apprises à Lognes.",
            "{name} maintient la propreté des berges en organisant les opérations \"Marne sans plastique\".",
            "{name} collabore avec Tortank pour alimenter les fontaines lors des festivals.",
            "{name} prête sa carapace comme tableau aux artistes qui peignent des fresques aquatiques.",
            "{name} vérifie l'état des digues artisanales avant chaque saison de pluie.",
            "{name} sert d'ambassadeur lors des conférences d'Ondine sur les secours nautiques.",
            "{name} transmet à Naulynn un rapport quotidien sur le niveau d'eau des serres.",
            "{name} entraîne les élèves à garder leur calme lorsqu'ils tombent à l'eau.",
            "{name} aide Coiffeton à préparer des chorégraphies aquatiques pour les cérémonies.",
            "{name} surveille la température des cours d'eau pour prévenir les sécheresses.",
            "{name} partage ses données avec Abra afin de détecter les distorsions liées aux marées."
        ]
    ),
    story_entry(
        slug="pikachu",
        id=25,
        name="Pikachu",
        number=25,
        type="Électrique",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        description="Pikachu est capable de générer une puissance électrique supérieure à celle d'une centrale électrique.",
        hp=35,
        attack=55,
        defense=40,
        sp_atk=50,
        sp_def=50,
        speed=90,
        abilities=["Électromorphose", "Paratonnerre"],
        evolutions=["Pichu → Pikachu → Raichu"],
        custom_history=PIKACHU_CUSTOM_HISTORY,
        encounter=[
            "{name} observe Naulynn depuis le lampadaire qui vacille au bord du phare de Vermilava.",
            "{name} accepte de canaliser la foudre lorsque Naulynn promet d'écouter le tonnerre comme une symphonie.",
            "{name} synchronise ses respirations avec celles de Sacha afin de stabiliser la décharge.",
            "{name} ravive le faisceau du phare et voit les bateaux applaudir depuis la mer noire.",
            "{name} se laisse coiffer par les enfants de Lognes qui trouvent sa fourrure électrique fascinante.",
            "{name} installe un atelier de paratonnerres artisanaux dans le gymnase désaffecté.",
            "{name} partage ses biscuits préférés avec Grodoudou après chaque séance d'entraînement.",
            "{name} synchronise ses joues avec les boucliers de Plantagruel pour étudier leurs faiblesses.",
            "{name} immortalise l'instant en dessinant un éclair discret sur le carnet de Naulynn.",
            "{name} consacre chaque lever de soleil à vérifier les panneaux solaires de la ville.",
            "{name} glisse des blagues dans les messages radio envoyés à Leon pour garder le moral haut.",
            "{name} considère ce phare comme son premier foyer loin des forêts."
        ],
        trial=[
            "{name} remporte le badge Électro de Lymington grâce à la combinaison Tonnerre + Change Éclair.",
            "{name} développe un protocole de sécurité pour débrancher les pièges électriques de la Team Plasma.",
            "{name} collabore avec Abra pour transformer des impulsions en messages codés.",
            "{name} enregistre chaque tempête afin de constituer la première base de données météo underground.",
            "{name} enseigne aux enfants comment construire de petits détecteurs d'orage avec du matériel recyclé.",
            "{name} affûte Vive-Attaque pour renverser des robots en plein vol.",
            "{name} apprend à amplifier sa voix pour donner des ordres clairs lors des missions nautiques.",
            "{name} aide Raichu à calibrer ses champs psychiques.",
            "{name} expérimente des harmonies électriques avec Grodoudou pour nourrir les concerts caritatifs.",
            "{name} installe des stations de recharge publiques alimentées par ses propres étincelles.",
            "{name} met au point une danse d'échauffement pour éviter les crampes statiques.",
            "{name} explore les catacombes avec Ectoplasma pour cartographier les points de fuite d'énergie."
        ],
        alliance=[
            "{name} brouille les capteurs ennemis pendant l'Opération Arceus à l'aide d'un rythme électrique irrégulier.",
            "{name} maintient la communication entre les trois fronts en modulant ses signaux.",
            "{name} envoie des étincelles codées à Leon pour lui indiquer quand Dracaufeu doit accélérer.",
            "{name} charge les lampes frontales des plongeurs avant chaque descente.",
            "{name} alimente les instruments de Serena pour que son spectacle ne connaisse aucune panne.",
            "{name} fournit à Alakazam un retour sensoriel constant sur la position des drones.",
            "{name} suit Suicune pour tester la conductivité de l'eau purifiée.",
            "{name} distribue des bracelets lumineux aux otages libérés afin qu'ils restent visibles dans la nuit.",
            "{name} scelle les portes magnétisées en overloadant les serrures.",
            "{name} protège Ho-Oh lorsqu'il traverse les nuages chargés d'étincelles parasites.",
            "{name} coordonne Raichu et Coiffeton pour créer un couloir d'énergie autour de Lugia.",
            "{name} signe la victoire par un éclair qui dessine le symbole de Lognes dans le ciel."
        ],
        legacy=[
            "{name} gère la station météo artisanale installée sur le toit du gymnase.",
            "{name} anime les soirées d'école en racontant l'histoire du phare à travers des sons électriques.",
            "{name} supervise un atelier où les adolescents apprennent à réparer leurs appareils magnétiques.",
            "{name} inspecte les lignes de tram chaque lundi pour prévenir les surtensions.",
            "{name} envoie des bulletins d'alerte via Grodoudou lorsque la Team Plasma est repérée.",
            "{name} entraîne une brigade de Pichu afin qu'ils deviennent éclaireurs pour les missions éloignées.",
            "{name} prête ses charges à Tortank pour alimenter les pompes hydrauliques.",
            "{name} surveille en secret les pylônes plantés par les entreprises suspectes autour de Lognes.",
            "{name} collabore avec Alakazam pour coder des messages lumineux lisibles uniquement par l'équipe.",
            "{name} offre des éclairs miniatures à Chochodile pour qu'il puisse chauffer ses percussions.",
            "{name} prend le temps d'écrire à Leon après chaque tempête afin de partager ses analyses.",
            "{name} garde toujours une étincelle en réserve pour rappeler à Naulynn qu'elle n'est jamais seule."
        ]
    ),
    story_entry(
        slug="raichu",
        id=26,
        name="Raichu",
        number=26,
        type="Électrique",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        description="Raichu accumule l'électricité dans ses joues de manière intense.",
        hp=60,
        attack=90,
        defense=55,
        sp_atk=90,
        sp_def=80,
        speed=110,
        abilities=["Électromorphose", "Paratonnerre"],
        evolutions=["Pikachu → Raichu"],
        encounter=[
            "{name} surfe sur une vague gigantesque à Mele-Mele lorsque le cyclone piège des touristes.",
            "{name} observe Naulynn improviser une corde en algues pour sauver un surfeur emporté.",
            "{name} accepte un duel amical sur la plage et se laisse convaincre par ses propres fous rires.",
            "{name} partage avec Pikachu un bol de malasada pour sceller leur fraternité électrique.",
            "{name} laisse Grodoudou lui apprendre une chorégraphie pour équilibrer sa planche psychique.",
            "{name} présente Naulynn aux maîtres surfers d'Alola qui lui offrent un collier de coquillages.",
            "{name} explore les ruines d'Ulola en lévitant au-dessus des fresques.",
            "{name} promet à Ondine de surveiller les courants équatoriaux et d'envoyer un rapport chaque lune.",
            "{name} personnalise son surf avec le symbole de Lognes peint par les enfants.",
            "{name} découvre qu'il peut ressentir les émotions humaines à travers les vagues.",
            "{name} enregistre les chants des Wingull pour agrémenter les replays de Serena.",
            "{name} partage ses techniques de méditation avec Abra dans une cabane suspendue."
        ],
        trial=[
            "{name} remporte la Coupe Doubles de Kaorine en orchestrant Cage-Éclair et Parabocharge.",
            "{name} établit un protocole pour détecter les champs magnétiques instables des centrales clandestines.",
            "{name} enseigne aux Pichu de Lognes comment surfer sur de petites vagues de sable.",
            "{name} conçoit des planches anti-foudre pour les sauveteurs marins.",
            "{name} collabore avec Coiffeton pour chorégraphier une parade nautique.",
            "{name} développe un signal télépathique discret pour avertir Naulynn lorsque la météo se dérègle.",
            "{name} s'entraîne avec Pikachu à moduler les fréquences nécessaires aux transmissions longue portée.",
            "{name} assiste Pierre en utilisant ses joues comme défibrillateur mobile.",
            "{name} supervise les ateliers où les enfants apprennent à lire les cartes de vagues.",
            "{name} invente une routine d'échauffement pour éviter les crampes psychiques.",
            "{name} organise un championnat amical entre les surfeurs de Lognes et ceux de Mele-Mele.",
            "{name} compose des mélodies électriques qui aident Serena à caler ses spectacles aquatiques."
        ],
        alliance=[
            "{name} établit un réseau télépathique reliant Léon, Ondine, Cynthia et Sacha pendant l'Opération Arceus.",
            "{name} ajuste la polarité des équipements de plongée pour que les communications fonctionnent sous l'eau.",
            "{name} sert de tour de contrôle pour Dracaufeu, donnant le feu vert à chaque décollage.",
            "{name} ralentit les projectiles énergétiques ennemis grâce à un champ antistatique.",
            "{name} synchronise son surf avec Suicune pour dévier les vagues toxiques.",
            "{name} guide Coiffeton à travers un ballet aquatique qui dissimule la progression de l'escouade.",
            "{name} neutralise les mines magnétiques en modulant la fréquence de ses joues.",
            "{name} partage des impulsions calmantes avec les otages avant leur évacuation.",
            "{name} envoie des instructions codées à Poussacha pour marquer les portes secrètes.",
            "{name} empêche un drone de s'écraser sur Serena en créant un coussin psychique.",
            "{name} traduit en signaux lumineux les pensées d'Alakazam pour les plongeurs.",
            "{name} referme la ligne télépathique en diffusant une note finale qui apaise toute l'équipe."
        ],
        legacy=[
            "{name} cartographie les flux électromagnétiques de tous les océans visités par Lognes.",
            "{name} dirige une académie de surf électrique où se rencontrent Pichu, Elektek et humains.",
            "{name} prête assistance aux garde-côtes quand les tempêtes sabotent les radars.",
            "{name} anime un journal de bord audio diffusé sur Radio Pokémon Family.",
            "{name} collabore avec la station météo de Pikachu pour anticiper les cyclones lointains.",
            "{name} enseigne aux enfants comment lire les étoiles lorsqu'ils naviguent de nuit.",
            "{name} étudie les aurores boréales pour aider Leon à planifier ses trajets.",
            "{name} alimente des bornes de recharge publiques pour les dresseurs voyageurs.",
            "{name} compose des playlists énergisantes pour les équipes en route vers Unys et Paldea.",
            "{name} médite chaque soir sur un toit différent afin de ressentir la ville comme une mer tranquille.",
            "{name} aide les ingénieurs à concevoir des trains alimentés par les vagues électriques.",
            "{name} rappelle à Naulynn que la patience et la respiration sont aussi importantes que les coups d'éclat."
        ]
    ),
    story_entry(
        slug="grodoudou",
        id=39,
        name="Grodoudou",
        number=39,
        type="Normal/Fée",
        category="Pacte des origines",
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        description="Grodoudou use de son charme pour captiver ses ennemis.",
        hp=70,
        attack=70,
        defense=65,
        sp_atk=100,
        sp_def=60,
        speed=60,
        abilities=["Sérénité", "Féérie"],
        evolutions=["Grodoudou"],
        encounter=[
            "{name} se terre dans la loge vide d'un concours d'Illumis, convaincu d'avoir perdu sa voix.",
            "{name} entend Serena et Naulynn improviser une jam session au pied de la scène.",
            "{name} ose chanter une note tremblante lorsqu'il voit Pikachu éclairer la salle de répétition.",
            "{name} redécouvre le vibrato qui faisait se lever les foules à l'époque des cabarets de Kalos.",
            "{name} demande à Pierre d'installer un micro artisanal pour sentir les vibrations du public.",
            "{name} confie à Abra ses peurs les plus secrètes dans les coulisses.",
            "{name} accepte que ses poils gonflent de stress tant que Naulynn reste à portée de main.",
            "{name} dédie son premier rappel à tous les Pokémon malmenés par la Team Plasma.",
            "{name} apprend à moduler ses fréquences pour ne pas assourdir les partenaires humains.",
            "{name} signe sur les affiches avec une étoile musicale qui devient emblème sur Lognes.",
            "{name} cache dans sa malle un vieux ruban offert par Diantha après un concours mémorable.",
            "{name} promet d'utiliser sa voix pour protéger, même si cela signifie affronter les ténèbres."
        ],
        trial=[
            "{name} gagne le Gala de Lumiose face à la Primarina de Diantha et retrouve sa confiance.",
            "{name} s'entraîne avec Serena pour synchroniser chants et danseuses lors des festivals.",
            "{name} apprend à baisser le volume de son Chant Canon pour ne blesser personne.",
            "{name} compose des hymnes destinés aux cliniques mobiles pour apaiser les patients.",
            "{name} adapte sa voix aux acoustiques du gymnase de Lognes fraîchement rénové.",
            "{name} travaille avec Bulbizarre pour parfumer les salles de concert.",
            "{name} collabore avec Pikachu afin d'intégrer des effets lumineux à ses prestations.",
            "{name} enregistre des berceuses diffusées dans les centres Pokémon de la région.",
            "{name} crée des exercices de respiration pour les apprentis chanteurs de Lognes.",
            "{name} mentore des Rondoudou timides et leur apprend l'humour scénique.",
            "{name} tient un carnet où il note chaque réaction du public pour mieux les protéger.",
            "{name} développe des signaux gestuels avec Naulynn afin d'ajuster la puissance de ses chansons."
        ],
        alliance=[
            "{name} participe au spectacle de diversion à Rosalia et hypnotise la foule par un Chant Canon.",
            "{name} coordonne ses notes avec les braises de Salamèche pour dessiner des halos magenta.",
            "{name} rassure Ho-Oh dans les coulisses en fredonnant des mélodies ancestrales.",
            "{name} diffuse des ultrasons ciblés qui brouillent les casques des gardes.",
            "{name} prête sa voix à Raichu pour amplifier le réseau télépathique.",
            "{name} entonne une berceuse pour calmer les otages avant leur évacuation.",
            "{name} encode des messages secrets dans ses harmoniques afin qu'Alakazam les traduise.",
            "{name} dirige un chœur improvisé de Pokémon sauvages pour masquer les bruits de pas.",
            "{name} enregistre les vibrations du clocher pour détecter les passages cachés.",
            "{name} s'allie à Coiffeton pour créer des vagues sonores qui bloquent les renforts ennemis.",
            "{name} tient la main de Naulynn lorsque la tension atteint son paroxysme dans la tour.",
            "{name} termine la mission en lançant un dernier refrain qui signale aux habitants que la ville est libre."
        ],
        legacy=[
            "{name} anime les festivals \"Lumières de Lognes\" en composant un nouvel hymne chaque année.",
            "{name} gère un studio de répétition ouvert aux jeunes artistes de la région.",
            "{name} archive toutes ses chansons dans les carnets sonores de Naulynn.",
            "{name} accompagne les missions diplomatiques pour calmer les foules agitées.",
            "{name} enregistre des podcasts où il raconte les aventures de l'équipe.",
            "{name} collabore avec Serena sur des comédies musicales itinérantes.",
            "{name} apprend la langue des signes afin d'inclure tous les publics dans ses concerts.",
            "{name} offre des ateliers sur la respiration aux dresseurs stressés avant les championnats.",
            "{name} diffuse chaque soir une berceuse à travers Radio Pokémon Family.",
            "{name} prépare des playlist personnalisées pour Tortank lorsqu'il sillonne les mers.",
            "{name} transforme le gymnase de Lognes en salle de spectacle lors des collectes de fonds.",
            "{name} écoute toujours les confidences de Naulynn pour les convertir en chansons d'espoir."
        ]
    ),
]


for entry in DATA:
    if entry.get("custom_history"):
        entry["history_text"] = entry["custom_history"]
    else:
        entry["history_text"] = build_story(entry)


def esc(value: str) -> str:
    return value.replace("\\", "\\\\").replace("\"", "\\\"")


def js_string(value: str) -> str:
    escaped = esc(value).replace("\n", "\\n")
    return f"\"{escaped}\""


def js_array(items, indent_level=0):
    indent_spaces = "  " * indent_level
    inner = ",\n".join(f"{indent_spaces}  {js_string(item)}" for item in items)
    return f"[\n{inner}\n{indent_spaces}]"


lines = []
lines.append("export const POKEMONS = [")
pokemon_blocks = []
for entry in DATA:
    block = []
    block.append("  {")
    block.append(f"    slug: {js_string(entry['slug'])},")
    block.append(f"    id: {entry['id']},")
    block.append(f"    name: {js_string(entry['name'])},")
    block.append(f"    number: {entry['number']},")
    block.append(f"    type: {js_string(entry['type'])},")
    block.append(f"    category: {js_string(entry['category'])},")
    block.append(f"    image: {js_string(entry['image'])},")
    block.append(f"    description: {js_string(entry['description'])},")
    block.append(f"    hp: {entry['hp']}, attack: {entry['attack']}, defense: {entry['defense']}, spAtk: {entry['sp_atk']}, spDef: {entry['sp_def']}, speed: {entry['speed']},")
    block.append(f"    abilities: {indent(js_array(entry['abilities'], 3), '    ')},")
    block.append(f"    evolutions: {indent(js_array(entry['evolutions'], 3), '    ')},")
    block.append(f"    history: {js_string(entry['history_text'])}")
    block.append("  }")
    pokemon_blocks.append("\n".join(block))
lines.append(",\n".join(pokemon_blocks))
lines.append("];")

output = "\n".join(lines) + "\n"
Path("site/src/data/pokemons.js").write_text(output, encoding="utf-8")
