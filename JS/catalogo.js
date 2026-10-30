/* =========================================================
   Arcanum - Catálogo de Jogos
   Organização: 1) dados  2) estado  3) funções  4) eventos
   ========================================================= */
 
// 1) DADOS ---------------------------------------------------
const jogos = [
  { id: 1,  titulo: "Hollow Knight",         categoria: "Aventura", ano: 2017, plataforma: "PC, Switch, PS4", nota: 9.4, cores: ["#1f2a60", "#7b2fe0"],
    descricao: "Explore o reino subterrâneo de Hallownest em um metroidvania desenhado à mão, com combates desafiadores, chefes memoráveis e uma atmosfera melancólica." },
  { id: 2,  titulo: "The Witcher 3",         categoria: "RPG",      ano: 2015, plataforma: "PC, PS4, Xbox One", nota: 9.7, cores: ["#3d1a78", "#e11d48"],
    descricao: "Interprete o caçador de monstros Geralt em um mundo aberto enorme, repleto de missões com escolhas que mudam o rumo da história." },
  { id: 3,  titulo: "Celeste",               categoria: "Plataforma", ano: 2018, plataforma: "PC, Switch, PS4", nota: 9.2, cores: ["#7b2fe0", "#b388ff"],
    descricao: "Ajude Madeline a escalar a montanha Celeste em fases precisas e difíceis, acompanhadas por uma história sensível sobre ansiedade e superação." },
  { id: 4,  titulo: "DOOM Eternal",          categoria: "Ação",     ano: 2020, plataforma: "PC, PS4, Xbox One", nota: 8.8, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Tiroteio frenético em primeira pessoa onde você precisa alternar armas e habilidades o tempo todo para sobreviver contra hordas de demônios." },
  { id: 5,  titulo: "Stardew Valley",        categoria: "Simulação", ano: 2016, plataforma: "PC, Switch, Mobile", nota: 9.0, cores: ["#2f6b3a", "#7b2fe0"],
    descricao: "Herde uma fazenda, plante, crie animais, pesque, minere e conquiste a amizade dos moradores da vila neste simulador relaxante." },
  { id: 6,  titulo: "Hades",                 categoria: "Ação",     ano: 2020, plataforma: "PC, Switch, PS5", nota: 9.3, cores: ["#5a0f2b", "#e11d48"],
    descricao: "Fuja do submundo grego como Zagreu em um roguelike rápido, com combate fluido, narrativa que avança a cada tentativa e ótima trilha sonora." },
  { id: 7,  titulo: "Civilization VI",       categoria: "Estratégia", ano: 2016, plataforma: "PC, Switch", nota: 8.6, cores: ["#1d3b5c", "#7b2fe0"],
    descricao: "Construa um império do zero até a era moderna, gerenciando cidades, pesquisa, diplomacia e guerra em partidas por turnos." },
  { id: 8,  titulo: "Elden Ring",            categoria: "RPG",      ano: 2022, plataforma: "PC, PS5, Xbox Series", nota: 9.5, cores: ["#4a3a10", "#7b2fe0"],
    descricao: "Mundo aberto sombrio criado pela FromSoftware, com liberdade de exploração, builds variadas e chefes que exigem paciência e estratégia." },
  { id: 9,  titulo: "Portal 2",              categoria: "Puzzle",   ano: 2011, plataforma: "PC, PS3, Xbox 360", nota: 9.5, cores: ["#0f4c75", "#b388ff"],
    descricao: "Resolva quebra-cabeças com portais e física em laboratórios cheios de humor, ótimos diálogos e um modo cooperativo muito elogiado." },
  { id: 10, titulo: "Forza Horizon 5",       categoria: "Corrida",  ano: 2021, plataforma: "PC, Xbox", nota: 9.0, cores: ["#b45309", "#7b2fe0"],
    descricao: "Corra livremente por um México virtual com centenas de carros, eventos sazonais e gráficos impressionantes." },
  { id: 11, titulo: "Minecraft",             categoria: "Simulação", ano: 2011, plataforma: "Todas", nota: 9.1, cores: ["#256d3a", "#3d1a78"],
    descricao: "Mundo de blocos onde você coleta recursos, constrói qualquer coisa que imaginar e sobrevive à noite, sozinho ou com amigos." },
  { id: 12, titulo: "Hades II: Ecos",        categoria: "Aventura", ano: 2024, plataforma: "PC", nota: 8.9, cores: ["#2b0b4d", "#e11d48"],
    descricao: "Título fictício usado como exemplo: uma aventura de exploração com feitiços, chefes e escolhas que alteram o caminho da jornada." },
  { id: 13, titulo: "Resident Evil 4",       categoria: "Terror",   ano: 2023, plataforma: "PC, PS5, Xbox Series", nota: 9.0, cores: ["#2a0a12", "#e11d48"],
    descricao: "Refilmagem do clássico de sobrevivência em que o agente Leon S. Kennedy precisa resgatar a filha do presidente em uma vila isolada, com combate tenso, recursos escassos e muita ação." },
  { id: 14, titulo: "The Legend of Zelda: Breath of the Wild", categoria: "Aventura", ano: 2017, plataforma: "Switch, Wii U", nota: 9.7, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Explore Hyrule com total liberdade, escalando qualquer superfície e resolvendo santuários e desafios com a física e os elementos do mundo." },
  { id: 15, titulo: "God of War (2018)", categoria: "Ação", ano: 2018, plataforma: "PC, PS4, PS5", nota: 9.5, cores: ["#3b1010", "#e11d48"],
    descricao: "Kratos e o filho Atreus viajam pela mitologia nórdica em uma aventura com combate brutal, câmera sem cortes e forte carga emocional." },
  { id: 16, titulo: "Red Dead Redemption 2", categoria: "Ação", ano: 2018, plataforma: "PC, PS4, Xbox One", nota: 9.6, cores: ["#5a2a0f", "#e11d48"],
    descricao: "Viva como Arthur Morgan, fora da lei no fim do Velho Oeste, em um mundo aberto detalhado e uma história sobre lealdade e declínio." },
  { id: 17, titulo: "Dark Souls III", categoria: "RPG", ano: 2016, plataforma: "PC, PS4, Xbox One", nota: 9.0, cores: ["#2a2a2a", "#e11d48"],
    descricao: "Enfrente chefes monumentais em um reino em ruínas, com combate exigente, fogueiras como pontos de descanso e uma história contada nas entrelinhas." },
  { id: 18, titulo: "Bloodborne", categoria: "RPG", ano: 2015, plataforma: "PS4", nota: 9.3, cores: ["#2b0b1f", "#7a0b1f"],
    descricao: "Caçe bestas pelas ruas góticas de Yharnam em um RPG de ação agressivo, que premia a coragem e a esquiva no momento certo." },
  { id: 19, titulo: "Sekiro: Shadows Die Twice", categoria: "Ação", ano: 2019, plataforma: "PC, PS4, Xbox One", nota: 9.2, cores: ["#4a1a10", "#b45309"],
    descricao: "Como um shinobi no Japão feudal, domine duelos baseados em postura e deflexão, com ferramentas de furtividade e um prótese de braço versátil." },
  { id: 20, titulo: "Cyberpunk 2077", categoria: "RPG", ano: 2020, plataforma: "PC, PS5, Xbox Series", nota: 8.5, cores: ["#f2d600", "#7b2fe0"],
    descricao: "Viva como V em Night City, uma metrópole futurista repleta de implantes, corporações e missões que podem terminar de várias formas." },
  { id: 21, titulo: "Disco Elysium", categoria: "RPG", ano: 2019, plataforma: "PC, PS4, Switch", nota: 9.3, cores: ["#5c3a1d", "#7b2fe0"],
    descricao: "Um detetive sem memória investiga um assassinato em um RPG sem combate, movido por diálogos afiados e habilidades que discutem dentro da sua cabeça." },
  { id: 22, titulo: "Baldur's Gate 3", categoria: "RPG", ano: 2023, plataforma: "PC, PS5, Xbox Series", nota: 9.7, cores: ["#3d1a78", "#b45309"],
    descricao: "RPG por turnos baseado em Dungeons & Dragons, com companheiros marcantes, escolhas de grande impacto e liberdade para resolver situações do seu jeito." },
  { id: 23, titulo: "Divinity: Original Sin 2", categoria: "RPG", ano: 2017, plataforma: "PC, PS4, Xbox One, Switch", nota: 9.2, cores: ["#2f4f2f", "#b388ff"],
    descricao: "RPG tático por turnos com interação entre elementos, cooperativo para até quatro jogadores e missões que reagem às suas decisões." },
  { id: 24, titulo: "Persona 5 Royal", categoria: "RPG", ano: 2019, plataforma: "PC, PS4, PS5, Switch, Xbox", nota: 9.4, cores: ["#7a0b1f", "#111111"],
    descricao: "Estudante de dia e ladrão fantasma à noite, você equilibra a vida escolar com a exploração de palácios sobrenaturais em combates por turnos estilosos." },
  { id: 25, titulo: "Final Fantasy VII Remake", categoria: "RPG", ano: 2020, plataforma: "PC, PS4, PS5", nota: 8.9, cores: ["#0f4c75", "#7b2fe0"],
    descricao: "Releitura do clássico que mistura combate em tempo real com comandos táticos, acompanhando Cloud e seus aliados pela cidade de Midgar." },
  { id: 26, titulo: "Chrono Trigger", categoria: "RPG", ano: 1995, plataforma: "SNES, PC, Mobile, DS", nota: 9.5, cores: ["#1d3b5c", "#b388ff"],
    descricao: "Viaje no tempo com um grupo carismático em um JRPG clássico, com múltiplos finais e combate dinâmico sem batalhas aleatórias." },
  { id: 27, titulo: "Super Mario Odyssey", categoria: "Plataforma", ano: 2017, plataforma: "Switch", nota: 9.4, cores: ["#b91c1c", "#3d1a78"],
    descricao: "Mario viaja por reinos variados com o chapéu Cappy, capturando inimigos e objetos em fases cheias de segredos e criatividade." },
  { id: 28, titulo: "Super Mario World", categoria: "Plataforma", ano: 1990, plataforma: "SNES, Switch Online", nota: 9.3, cores: ["#2f6b3a", "#b91c1c"],
    descricao: "Clássico de plataforma em que Mario e Yoshi atravessam a Terra dos Dinossauros em fases com saídas secretas e capa voadora." },
  { id: 29, titulo: "Ori and the Will of the Wisps", categoria: "Plataforma", ano: 2020, plataforma: "PC, Xbox, Switch", nota: 9.2, cores: ["#0f4c75", "#b388ff"],
    descricao: "Metroidvania visualmente deslumbrante, com movimentação fluida, combate ágil e uma história delicada sobre amizade e perda." },
  { id: 30, titulo: "Cuphead", categoria: "Plataforma", ano: 2017, plataforma: "PC, Switch, PS4, Xbox One", nota: 8.8, cores: ["#b45309", "#1f2a60"],
    descricao: "Run and gun difícil, com visual de desenho animado dos anos 1930 e chefes que mudam de forma durante a luta." },
  { id: 31, titulo: "Dead Cells", categoria: "Ação", ano: 2018, plataforma: "PC, Switch, PS4, Xbox One, Mobile", nota: 9.0, cores: ["#2a0a12", "#7b2fe0"],
    descricao: "Roguelite com estrutura de metroidvania, combate rápido e uma enorme variedade de armas e mutações a cada tentativa." },
  { id: 32, titulo: "Hotline Miami", categoria: "Ação", ano: 2012, plataforma: "PC, PS4, Switch", nota: 8.7, cores: ["#e11d48", "#3d1a78"],
    descricao: "Ação top-down violenta e acelerada, em que cada fase é um quebra-cabeça de tentativa e erro embalado por trilha sonora eletrônica." },
  { id: 33, titulo: "Undertale", categoria: "RPG", ano: 2015, plataforma: "PC, Switch, PS4", nota: 9.2, cores: ["#111111", "#e11d48"],
    descricao: "RPG em que você pode vencer sem matar ninguém, com batalhas criativas, personagens inesquecíveis e escolhas que mudam o desfecho." },
  { id: 34, titulo: "Terraria", categoria: "Aventura", ano: 2011, plataforma: "PC, Consoles, Mobile", nota: 9.0, cores: ["#256d3a", "#0f4c75"],
    descricao: "Cave, construa e lute em um mundo 2D cheio de chefes, itens e biomas, sozinho ou em cooperativo." },
  { id: 35, titulo: "Factorio", categoria: "Simulação", ano: 2020, plataforma: "PC, Switch", nota: 9.4, cores: ["#b45309", "#1d3b5c"],
    descricao: "Construa e otimize fábricas automatizadas em um planeta hostil, com esteiras, trens e cadeias de produção cada vez maiores." },
  { id: 36, titulo: "Cities: Skylines", categoria: "Simulação", ano: 2015, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.5, cores: ["#1d4f5c", "#2f6b3a"],
    descricao: "Planeje ruas, transporte, serviços e zonas para fazer sua cidade crescer sem entrar em colapso." },
  { id: 37, titulo: "Planet Coaster", categoria: "Simulação", ano: 2016, plataforma: "PC, PS4, Xbox One", nota: 8.8, cores: ["#b45309", "#7b2fe0"],
    descricao: "Projete montanhas-russas e parques de diversões com ferramentas detalhadas, cuidando dos visitantes e das finanças." },
  { id: 38, titulo: "Euro Truck Simulator 2", categoria: "Simulação", ano: 2012, plataforma: "PC", nota: 8.8, cores: ["#1d3b5c", "#b45309"],
    descricao: "Dirija caminhões por estradas da Europa, entregando cargas e expandindo sua empresa de transporte." },
  { id: 39, titulo: "Microsoft Flight Simulator", categoria: "Simulação", ano: 2020, plataforma: "PC, Xbox Series", nota: 8.6, cores: ["#0f4c75", "#b388ff"],
    descricao: "Pilote aeronaves em uma reprodução gigantesca do planeta, com clima em tempo real e cabines fiéis às originais." },
  { id: 40, titulo: "XCOM 2", categoria: "Estratégia", ano: 2016, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.8, cores: ["#1f2a60", "#2f6b3a"],
    descricao: "Lidere uma resistência contra uma ocupação alienígena em combates táticos por turnos, onde cada decisão e cada tiro contam." },
  { id: 41, titulo: "Age of Empires II: Definitive Edition", categoria: "Estratégia", ano: 2019, plataforma: "PC, Xbox", nota: 8.8, cores: ["#5a3a10", "#1d3b5c"],
    descricao: "Estratégia em tempo real medieval remasterizada, com campanhas históricas, dezenas de civilizações e partidas multijogador." },
  { id: 42, titulo: "StarCraft II: Wings of Liberty", categoria: "Estratégia", ano: 2010, plataforma: "PC", nota: 9.0, cores: ["#1d3b5c", "#e11d48"],
    descricao: "Estratégia em tempo real com três raças bem distintas, campanha cinematográfica e cena competitiva consagrada." },
  { id: 43, titulo: "Total War: Warhammer III", categoria: "Estratégia", ano: 2022, plataforma: "PC", nota: 8.6, cores: ["#7a0b1f", "#3d1a78"],
    descricao: "Combine gestão de campanha em turnos com batalhas em tempo real no universo de fantasia sombria de Warhammer." },
  { id: 44, titulo: "Into the Breach", categoria: "Estratégia", ano: 2018, plataforma: "PC, Switch, Mobile", nota: 9.0, cores: ["#2f4f2f", "#1f2a60"],
    descricao: "Comande mechas em tabuleiros minúsculos para proteger cidades de monstros, num quebra-cabeça tático onde todo ataque inimigo é previsível." },
  { id: 45, titulo: "Slay the Spire", categoria: "Estratégia", ano: 2019, plataforma: "PC, Switch, PS4, Mobile", nota: 9.2, cores: ["#7a0b1f", "#2b0b4d"],
    descricao: "Mistura de card game com roguelike, em que você monta seu baralho a cada subida pela torre e enfrenta chefes cada vez mais fortes." },
  { id: 46, titulo: "Fire Emblem: Three Houses", categoria: "Estratégia", ano: 2019, plataforma: "Switch", nota: 8.9, cores: ["#1d4f5c", "#b45309"],
    descricao: "Como professor em uma academia militar, escolha uma casa, treine seus alunos e lidere batalhas táticas que definem o destino de Fódlan." },
  { id: 47, titulo: "Frostpunk", categoria: "Estratégia", ano: 2018, plataforma: "PC, PS4, Xbox One", nota: 8.6, cores: ["#1d3b5c", "#b388ff"],
    descricao: "Mantenha viva a última cidade da humanidade em um mundo congelado, tomando decisões morais difíceis sobre trabalho, calor e leis." },
  { id: 48, titulo: "Half-Life: Alyx", categoria: "Tiro", ano: 2020, plataforma: "PC (VR)", nota: 9.3, cores: ["#b45309", "#111111"],
    descricao: "Aventura em realidade virtual no universo de Half-Life, com combate, quebra-cabeças e interação com objetos que impressiona pela imersão." },
  { id: 49, titulo: "Half-Life 2", categoria: "Tiro", ano: 2004, plataforma: "PC, Consoles", nota: 9.6, cores: ["#b45309", "#1f2a60"],
    descricao: "Gordon Freeman enfrenta uma ocupação alienígena em um tiro com física revolucionária para a época, ritmo impecável e a icônica pistola de gravidade." },
  { id: 50, titulo: "Counter-Strike: Global Offensive", categoria: "Tiro", ano: 2012, plataforma: "PC, PS3, Xbox 360", nota: 8.9, cores: ["#5c3a1d", "#1d3b5c"],
    descricao: "Tiro tático por rodadas, em que terroristas e contraterroristas disputam bombas e reféns com muita mira e comunicação em equipe." },
  { id: 51, titulo: "Halo 3", categoria: "Tiro", ano: 2007, plataforma: "Xbox 360", nota: 9.3, cores: ["#2f4f2f", "#1d3b5c"],
    descricao: "Master Chief encerra a guerra contra o Covenant em um tiro em primeira pessoa com campanha épica, veículos e um multijogador histórico." },
  { id: 52, titulo: "Titanfall 2", categoria: "Tiro", ano: 2016, plataforma: "PC, PS4, Xbox One", nota: 9.0, cores: ["#b45309", "#2a2a2a"],
    descricao: "Combine parkour acelerado com combate ao lado de titãs gigantes em uma campanha curta e criativa e um multijogador veloz." },
  { id: 53, titulo: "Team Fortress 2", categoria: "Tiro", ano: 2007, plataforma: "PC", nota: 9.0, cores: ["#b91c1c", "#1d3b5c"],
    descricao: "Tiro em equipes com nove classes bem distintas, visual caricato e muito humor, que virou referência dos jogos de herói." },
  { id: 54, titulo: "Apex Legends", categoria: "Tiro", ano: 2019, plataforma: "PC, PS4, PS5, Xbox, Switch", nota: 8.7, cores: ["#7a0b1f", "#2a2a2a"],
    descricao: "Battle royale em trios com lendas de habilidades únicas, movimentação ágil e sistema de comunicação por pings." },
  { id: 55, titulo: "Valorant", categoria: "Tiro", ano: 2020, plataforma: "PC, Consoles", nota: 8.4, cores: ["#e11d48", "#1f2a60"],
    descricao: "Tiro tático 5 contra 5 que une mira precisa a agentes com habilidades, em partidas competitivas por rodadas." },
  { id: 56, titulo: "BioShock", categoria: "Tiro", ano: 2007, plataforma: "PC, PS3, Xbox 360, Switch", nota: 9.4, cores: ["#1d4f5c", "#b45309"],
    descricao: "Explore a cidade submarina de Rapture em um tiro com poderes genéticos, atmosfera marcante e uma das viradas mais famosas dos games." },
  { id: 57, titulo: "Borderlands 2", categoria: "Tiro", ano: 2012, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.9, cores: ["#b45309", "#f2d600"],
    descricao: "Tiro cooperativo com loot e visual em cel-shading, cheio de humor e milhões de combinações de armas." },
  { id: 58, titulo: "Left 4 Dead 2", categoria: "Tiro", ano: 2009, plataforma: "PC, Xbox 360", nota: 9.0, cores: ["#3b1010", "#2f4f2f"],
    descricao: "Quatro sobreviventes enfrentam hordas de zumbis em cooperativo, com um diretor de IA que muda o ritmo de cada partida." },
  { id: 59, titulo: "Metro Exodus", categoria: "Tiro", ano: 2019, plataforma: "PC, PS4, Xbox One", nota: 8.3, cores: ["#1d3b5c", "#5c3a1d"],
    descricao: "Viaje de trem pela Rússia pós-apocalíptica em um tiro com furtividade, escassez de recursos e ambientes abertos." },
  { id: 60, titulo: "Outer Wilds", categoria: "Aventura", ano: 2019, plataforma: "PC, PS4, Xbox One", nota: 9.4, cores: ["#b45309", "#1f2a60"],
    descricao: "Explore um sistema solar preso em um ciclo de 22 minutos e descubra seus mistérios apenas com o que aprende a cada volta." },
  { id: 61, titulo: "Subnautica", categoria: "Aventura", ano: 2018, plataforma: "PC, PS4, Xbox One, Switch", nota: 9.0, cores: ["#0f4c75", "#1d4f5c"],
    descricao: "Sobreviva em um oceano alienígena, construindo bases e submarinos enquanto explora cavernas e profundezas assustadoras." },
  { id: 62, titulo: "Firewatch", categoria: "Aventura", ano: 2016, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.2, cores: ["#b45309", "#7a0b1f"],
    descricao: "Vigie uma floresta no Wyoming enquanto conversa por rádio com sua supervisora, em uma história de mistério e relações humanas." },
  { id: 63, titulo: "Life is Strange", categoria: "Aventura", ano: 2015, plataforma: "PC, PS4, Xbox One", nota: 8.5, cores: ["#b388ff", "#1d4f5c"],
    descricao: "Max descobre que pode voltar no tempo e usa o poder para investigar um desaparecimento, com escolhas que afetam amizades e desfechos." },
  { id: 64, titulo: "What Remains of Edith Finch", categoria: "Aventura", ano: 2017, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.8, cores: ["#2f4f2f", "#7b2fe0"],
    descricao: "Visite a casa de uma família amaldiçoada e reviva as histórias de cada membro em pequenos episódios criativos e emocionantes." },
  { id: 65, titulo: "Journey", categoria: "Aventura", ano: 2012, plataforma: "PC, PS4, PS5", nota: 9.0, cores: ["#b45309", "#f2d600"],
    descricao: "Atravesse o deserto rumo a uma montanha distante, encontrando outros viajantes anônimos, em uma jornada breve e poética." },
  { id: 66, titulo: "Gris", categoria: "Plataforma", ano: 2018, plataforma: "PC, Switch, PS4, Mobile", nota: 8.6, cores: ["#b388ff", "#1d4f5c"],
    descricao: "Aventura artística e sem diálogos sobre luto, em que a protagonista recupera cores e habilidades ao longo de cenários de aquarela." },
  { id: 67, titulo: "Limbo", categoria: "Puzzle", ano: 2010, plataforma: "PC, Consoles, Mobile", nota: 8.7, cores: ["#111111", "#2a2a2a"],
    descricao: "Plataforma em preto e branco, em que um garoto atravessa uma floresta sombria enfrentando armadilhas e quebra-cabeças de física." },
  { id: 68, titulo: "Inside", categoria: "Puzzle", ano: 2016, plataforma: "PC, PS4, Xbox One, Switch", nota: 9.0, cores: ["#1d3b5c", "#2a2a2a"],
    descricao: "Fuja de uma instalação misteriosa em uma aventura 2D sem palavras, com puzzles inventivos e atmosfera inquietante." },
  { id: 69, titulo: "The Witness", categoria: "Puzzle", ano: 2016, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.6, cores: ["#2f6b3a", "#0f4c75"],
    descricao: "Explore uma ilha tomada por painéis de labirinto e descubra, sem instruções, as regras que governam cada quebra-cabeça." },
  { id: 70, titulo: "Tetris Effect: Connected", categoria: "Puzzle", ano: 2018, plataforma: "PC, PS4, Xbox, Switch", nota: 9.0, cores: ["#3d1a78", "#0f4c75"],
    descricao: "O clássico das peças que caem ganha luzes, música e efeitos hipnóticos, além de modos cooperativo e competitivo." },
  { id: 71, titulo: "Baba Is You", categoria: "Puzzle", ano: 2019, plataforma: "PC, Switch, Mobile", nota: 9.1, cores: ["#e11d48", "#f2d600"],
    descricao: "Empurre blocos de texto para reescrever as regras de cada fase e descobrir soluções que só fazem sentido em um jogo como este." },
  { id: 72, titulo: "Return of the Obra Dinn", categoria: "Puzzle", ano: 2018, plataforma: "PC, Consoles, Switch", nota: 9.2, cores: ["#111111", "#b45309"],
    descricao: "Investigue a morte de toda a tripulação de um navio mercante, deduzindo identidades e causas a partir de cenas congeladas no tempo." },
  { id: 73, titulo: "Monument Valley", categoria: "Puzzle", ano: 2014, plataforma: "Mobile, PC", nota: 8.6, cores: ["#7b2fe0", "#1d4f5c"],
    descricao: "Guie a princesa Ida por arquiteturas impossíveis em quebra-cabeças de perspectiva com visual minimalista e relaxante." },
  { id: 74, titulo: "The Talos Principle", categoria: "Puzzle", ano: 2014, plataforma: "PC, Consoles, Mobile", nota: 8.8, cores: ["#b45309", "#1d3b5c"],
    descricao: "Resolva puzzles em ruínas antigas enquanto reflete, por meio de textos e diálogos, sobre consciência, livre-arbítrio e humanidade." },
  { id: 75, titulo: "Gran Turismo 7", categoria: "Corrida", ano: 2022, plataforma: "PS4, PS5", nota: 8.7, cores: ["#1d3b5c", "#e11d48"],
    descricao: "Simulador de corrida com mais de 400 carros fiéis, pistas reais e um modo café que celebra a cultura automotiva." },
  { id: 76, titulo: "Mario Kart 8 Deluxe", categoria: "Corrida", ano: 2017, plataforma: "Switch", nota: 9.2, cores: ["#b91c1c", "#0f4c75"],
    descricao: "Corridas de kart com itens malucos, pistas antigravidade e muita diversão para jogar com a família ou online." },
  { id: 77, titulo: "Need for Speed: Most Wanted (2005)", categoria: "Corrida", ano: 2005, plataforma: "PC, PS2, Xbox, GameCube", nota: 8.5, cores: ["#1f2a60", "#e11d48"],
    descricao: "Corridas de rua com perseguições policiais intensas, carros personalizáveis e uma lista de rivais para derrotar um a um." },
  { id: 78, titulo: "Burnout Paradise", categoria: "Corrida", ano: 2008, plataforma: "PC, PS3, Xbox 360", nota: 8.7, cores: ["#f2d600", "#e11d48"],
    descricao: "Corridas em mundo aberto onde bater nos rivais é parte da estratégia, com acidentes espetaculares em câmera lenta." },
  { id: 79, titulo: "Assetto Corsa", categoria: "Corrida", ano: 2014, plataforma: "PC, PS4, Xbox One", nota: 8.8, cores: ["#2a2a2a", "#e11d48"],
    descricao: "Simulador realista valorizado por sua física e pelos mods criados pela comunidade, com carros e circuitos de todo tipo." },
  { id: 80, titulo: "DiRT Rally 2.0", categoria: "Corrida", ano: 2019, plataforma: "PC, PS4, Xbox One", nota: 8.5, cores: ["#5c3a1d", "#1d3b5c"],
    descricao: "Rali exigente, em que um erro numa curva pode custar a prova, com etapas em terra, neve e asfalto e carros clássicos." },
  { id: 81, titulo: "Rocket League", categoria: "Esporte", ano: 2015, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.8, cores: ["#0f4c75", "#e11d48"],
    descricao: "Futebol com carros acrobáticos, partidas rápidas e uma curva de habilidade que parece nunca acabar." },
  { id: 82, titulo: "Tony Hawk's Pro Skater 1 + 2", categoria: "Esporte", ano: 2020, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.5, cores: ["#f2d600", "#1d3b5c"],
    descricao: "Remake dos clássicos do skate, com manobras encadeadas em combos, pistas icônicas e trilha cheia de punk rock." },
  { id: 83, titulo: "Street Fighter 6", categoria: "Luta", ano: 2023, plataforma: "PC, PS4, PS5, Xbox Series", nota: 9.0, cores: ["#e11d48", "#f2d600"],
    descricao: "Jogo de luta com sistema de controle acessível, modo de mundo aberto para criar seu lutador e elenco variado." },
  { id: 84, titulo: "Mortal Kombat 11", categoria: "Luta", ano: 2019, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.5, cores: ["#7a0b1f", "#111111"],
    descricao: "Luta brutal com fatalities exagerados, modo história que mexe com o tempo e muitas opções de customização." },
  { id: 85, titulo: "Tekken 7", categoria: "Luta", ano: 2015, plataforma: "PC, PS4, Xbox One", nota: 8.5, cores: ["#1f2a60", "#e11d48"],
    descricao: "Luta 3D com foco em combos e movimentação, que conclui a rivalidade da família Mishima." },
  { id: 86, titulo: "Super Smash Bros. Ultimate", categoria: "Luta", ano: 2018, plataforma: "Switch", nota: 9.2, cores: ["#b91c1c", "#1d3b5c"],
    descricao: "Reúne personagens de diversas franquias em lutas caóticas de plataforma, com todos os lutadores da série reunidos em um só jogo." },
  { id: 87, titulo: "Guilty Gear -Strive-", categoria: "Luta", ano: 2021, plataforma: "PC, PS4, PS5", nota: 8.8, cores: ["#e11d48", "#111111"],
    descricao: "Luta 2D em estilo anime, rápida e agressiva, com visual estiloso, boa trilha de rock e netcode elogiado." },
  { id: 88, titulo: "Resident Evil 2 (2019)", categoria: "Terror", ano: 2019, plataforma: "PC, PS4, Xbox One", nota: 9.2, cores: ["#3b1010", "#2f4f2f"],
    descricao: "Leon e Claire tentam escapar de Raccoon City, em uma recriação tensa com o perseguidor Mr. X e gerenciamento de munição." },
  { id: 89, titulo: "Silent Hill 2", categoria: "Terror", ano: 2001, plataforma: "PS2, Xbox, PC, PS5", nota: 9.4, cores: ["#2a2a2a", "#5c3a1d"],
    descricao: "James procura sua esposa em uma cidade coberta de névoa, em um terror psicológico focado em culpa e simbolismo." },
  { id: 90, titulo: "Alien: Isolation", categoria: "Terror", ano: 2014, plataforma: "PC, Consoles, Switch", nota: 8.8, cores: ["#111111", "#2f6b3a"],
    descricao: "Sobreviva em uma estação espacial sendo caçado por um xenomorfo imprevisível, usando furtividade em vez de armas." },
  { id: 91, titulo: "Amnesia: The Dark Descent", categoria: "Terror", ano: 2010, plataforma: "PC, PS4, Switch", nota: 8.6, cores: ["#2a2a2a", "#7a0b1f"],
    descricao: "Explore um castelo sombrio sem poder lutar, controlando sua sanidade e se escondendo de criaturas na escuridão." },
  { id: 92, titulo: "Dead Space (2023)", categoria: "Terror", ano: 2023, plataforma: "PC, PS5, Xbox Series", nota: 8.9, cores: ["#1d3b5c", "#e11d48"],
    descricao: "Isaac Clarke luta em uma nave tomada por necromorfos, em um terror espacial onde desmembrar os inimigos é a melhor tática." },
  { id: 93, titulo: "Outlast", categoria: "Terror", ano: 2013, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.0, cores: ["#111111", "#b45309"],
    descricao: "Um jornalista explora um hospício abandonado, usando apenas uma câmera com visão noturna para fugir de pacientes violentos." },
  { id: 94, titulo: "Phasmophobia", categoria: "Terror", ano: 2020, plataforma: "PC", nota: 8.2, cores: ["#1f2a60", "#2a2a2a"],
    descricao: "Cooperativo em que você e amigos investigam casas assombradas, coletando evidências sem ser pegos por fantasmas, com reconhecimento de voz." },
  { id: 95, titulo: "Five Nights at Freddy's", categoria: "Terror", ano: 2014, plataforma: "PC, Consoles, Mobile", nota: 7.8, cores: ["#5c3a1d", "#111111"],
    descricao: "Vigie uma pizzaria durante a noite, monitorando câmeras e portas para impedir que os animatrônicos se aproximem." },
  { id: 96, titulo: "Little Nightmares", categoria: "Terror", ano: 2017, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.0, cores: ["#b45309", "#111111"],
    descricao: "Uma garotinha de capa amarela foge de moradores grotescos em um navio, em um terror de plataforma e furtividade." },
  { id: 97, titulo: "Among Us", categoria: "Estratégia", ano: 2018, plataforma: "PC, Mobile, Switch, Consoles", nota: 8.0, cores: ["#e11d48", "#1f2a60"],
    descricao: "Tripulantes tentam concluir tarefas na nave enquanto impostores sabotam tudo, em partidas cheias de acusações e blefes." },
  { id: 98, titulo: "Fall Guys", categoria: "Plataforma", ano: 2020, plataforma: "PC, PS4, PS5, Xbox, Switch", nota: 8.0, cores: ["#b388ff", "#f2d600"],
    descricao: "Dezenas de feijõezinhos competem em provas de obstáculos até restar um vencedor, em um caos colorido e divertido." },
  { id: 99, titulo: "Vampire Survivors", categoria: "Ação", ano: 2022, plataforma: "PC, Consoles, Mobile", nota: 8.9, cores: ["#3d1a78", "#e11d48"],
    descricao: "Sobreviva a hordas crescentes com ataques automáticos, escolhendo melhorias que transformam a tela em um festival de projéteis." },
  { id: 100, titulo: "Risk of Rain 2", categoria: "Ação", ano: 2019, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.8, cores: ["#1d4f5c", "#b45309"],
    descricao: "Roguelike em terceira pessoa em que você acumula itens que se combinam de forma absurda, sozinho ou com amigos." },
  { id: 101, titulo: "Enter the Gungeon", categoria: "Ação", ano: 2016, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.5, cores: ["#5c3a1d", "#e11d48"],
    descricao: "Shooter top-down com salas procedurais e uma enorme variedade de armas esquisitas, repleto de referências a outros jogos." },
  { id: 102, titulo: "The Binding of Isaac: Rebirth", categoria: "Ação", ano: 2014, plataforma: "PC, PS4, Switch, Xbox One", nota: 9.0, cores: ["#7a0b1f", "#2a2a2a"],
    descricao: "Roguelike de tiro em masmorras com centenas de itens, que mudam completamente o seu personagem a cada partida." },
  { id: 103, titulo: "Spelunky 2", categoria: "Plataforma", ano: 2020, plataforma: "PC, PS4, Switch, Xbox", nota: 8.8, cores: ["#b45309", "#2f4f2f"],
    descricao: "Explore cavernas geradas aleatoriamente com explosivos, armadilhas e inimigos, em um desafio punitivo e cheio de surpresas." },
  { id: 104, titulo: "Rayman Legends", categoria: "Plataforma", ano: 2013, plataforma: "PC, PS4, Xbox One, Switch", nota: 9.0, cores: ["#7b2fe0", "#e11d48"],
    descricao: "Plataforma 2D lindíssimo, com fases musicais ritmadas e cooperativo local para até quatro jogadores." },
  { id: 105, titulo: "Sonic Mania", categoria: "Plataforma", ano: 2017, plataforma: "PC, PS4, Xbox One, Switch", nota: 8.8, cores: ["#0f4c75", "#f2d600"],
    descricao: "Retorno do ouriço aos tempos de 16 bits, com fases clássicas reimaginadas e muita velocidade." },
  { id: 106, titulo: "Shovel Knight", categoria: "Plataforma", ano: 2014, plataforma: "PC, Consoles, Mobile", nota: 8.9, cores: ["#0f4c75", "#b388ff"],
    descricao: "Plataforma em pixel art inspirado nos clássicos de 8 bits, com um cavaleiro de pá, chefes marcantes e trilha excelente." },
  { id: 107, titulo: "Metroid Dread", categoria: "Aventura", ano: 2021, plataforma: "Switch", nota: 9.0, cores: ["#7a0b1f", "#1d3b5c"],
    descricao: "Samus é perseguida por robôs implacáveis em um planeta hostil, em uma aventura 2D de exploração e ação veloz." },
  { id: 108, titulo: "Super Metroid", categoria: "Aventura", ano: 1994, plataforma: "SNES, Switch Online", nota: 9.6, cores: ["#2f4f2f", "#7a0b1f"],
    descricao: "Clássico que ajudou a definir o gênero metroidvania, com um mapa interconectado e atmosfera solitária e tensa." },
  { id: 109, titulo: "Castlevania: Symphony of the Night", categoria: "Aventura", ano: 1997, plataforma: "PS1, Xbox 360, Mobile, PC", nota: 9.4, cores: ["#2b0b4d", "#7a0b1f"],
    descricao: "Controle Alucard em um castelo gigantesco e interligado, com elementos de RPG, itens e uma trilha sonora marcante." },
  { id: 110, titulo: "Devil May Cry 5", categoria: "Ação", ano: 2019, plataforma: "PC, PS4, Xbox One", nota: 9.0, cores: ["#e11d48", "#2a2a2a"],
    descricao: "Hack and slash estiloso, com três heróis jogáveis e combos que premiam variedade e ousadia." },
  { id: 111, titulo: "NieR: Automata", categoria: "RPG", ano: 2017, plataforma: "PC, PS4, Xbox One, Switch", nota: 9.3, cores: ["#b8a98c", "#2a2a2a"],
    descricao: "Androides lutam contra máquinas em um mundo pós-apocalíptico, com ação rápida e reflexões sobre humanidade e propósito." },
  { id: 112, titulo: "Horizon Zero Dawn", categoria: "Ação", ano: 2017, plataforma: "PC, PS4", nota: 9.0, cores: ["#b45309", "#1d4f5c"],
    descricao: "Aloy caça máquinas gigantes em um mundo aberto pós-apocalíptico, descobrindo os segredos de sua origem." },
  { id: 113, titulo: "Ghost of Tsushima", categoria: "Ação", ano: 2020, plataforma: "PC, PS4, PS5", nota: 9.1, cores: ["#b45309", "#7a0b1f"],
    descricao: "Como o samurai Jin Sakai, defenda a ilha de Tsushima da invasão mongol em um mundo aberto com duelos de katana e furtividade." },
  { id: 114, titulo: "Death Stranding", categoria: "Aventura", ano: 2019, plataforma: "PC, PS4, PS5", nota: 8.4, cores: ["#1d3b5c", "#b45309"],
    descricao: "Atravesse um território devastado entregando cargas para reconectar a humanidade, em uma experiência estranha e contemplativa." },
  { id: 115, titulo: "Control", categoria: "Ação", ano: 2019, plataforma: "PC, PS4, PS5, Xbox", nota: 8.8, cores: ["#7a0b1f", "#1f2a60"],
    descricao: "Jesse Faden explora um prédio governamental em constante mutação, usando poderes telecinéticos em combates cheios de destruição." },
    { id: 116, titulo: "A Plague Tale: Innocence", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em A Plague Tale: Innocence." },
  { id: 117, titulo: "A Plague Tale: Requiem", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em A Plague Tale: Requiem." },
  { id: 118, titulo: "Alan Wake", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em Alan Wake." },
  { id: 119, titulo: "Alan Wake 2", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em Alan Wake 2." },
  { id: 120, titulo: "American Arcadia", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de American Arcadia." },
  { id: 121, titulo: "Animal Well", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Animal Well." },
  { id: 122, titulo: "Armored Core VI: Fires of Rubicon", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Armored Core VI: Fires of Rubicon." },
  { id: 123, titulo: "Astral Chain", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Astral Chain." },
  { id: 124, titulo: "Axiom Verge", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Axiom Verge." },
  { id: 125, titulo: "Axiom Verge 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Axiom Verge 2." },
  { id: 126, titulo: "Bastion", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Bastion." },
  { id: 127, titulo: "Bayonetta", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Bayonetta." },
  { id: 128, titulo: "Bayonetta 2", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Bayonetta 2." },
  { id: 129, titulo: "Bayonetta 3", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Bayonetta 3." },
  { id: 130, titulo: "Before Your Eyes", categoria: "Puzzle", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Quebra-cabeças e desafios de lógica exigem observação e criatividade. Experimente soluções diferentes e desvende os mistérios de Before Your Eyes." },
  { id: 131, titulo: "Beneath a Steel Sky", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Beneath a Steel Sky." },
  { id: 132, titulo: "Beyond: Two Souls", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Beyond: Two Souls." },
  { id: 133, titulo: "Black Mesa", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Black Mesa." },
  { id: 134, titulo: "Blasphemous", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Blasphemous." },
  { id: 135, titulo: "Blasphemous 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Blasphemous 2." },
  { id: 136, titulo: "Bomb Rush Cyberfunk", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Bomb Rush Cyberfunk." },
  { id: 137, titulo: "Bravely Default", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Bravely Default." },
  { id: 138, titulo: "Bravely Default II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Bravely Default II." },
  { id: 139, titulo: "Breath of Fire III", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Breath of Fire III." },
  { id: 140, titulo: "Broken Age", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Broken Age." },
  { id: 141, titulo: "Call of Duty 4: Modern Warfare", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Call of Duty 4: Modern Warfare." },
  { id: 142, titulo: "Call of Duty: Black Ops", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Call of Duty: Black Ops." },
  { id: 143, titulo: "Call of Duty: Modern Warfare II", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Call of Duty: Modern Warfare II." },
  { id: 144, titulo: "Call of Duty: World at War", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Call of Duty: World at War." },
  { id: 145, titulo: "Catherine", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Catherine." },
  { id: 146, titulo: "Chained Echoes", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Chained Echoes." },
  { id: 147, titulo: "Child of Light", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Child of Light." },
  { id: 148, titulo: "Chicory: A Colorful Tale", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Chicory: A Colorful Tale." },
  { id: 149, titulo: "Citizen Sleeper", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Citizen Sleeper." },
  { id: 150, titulo: "Clair Obscur: Expedition 33", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Clair Obscur: Expedition 33." },
  { id: 151, titulo: "Code Vein", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Code Vein." },
  { id: 152, titulo: "Command & Conquer: Red Alert 2", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Command & Conquer: Red Alert 2." },
  { id: 153, titulo: "Commandos 2", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Commandos 2." },
  { id: 154, titulo: "Conker's Bad Fur Day", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Conker's Bad Fur Day." },
  { id: 155, titulo: "Crash Bandicoot N. Sane Trilogy", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Crash Bandicoot N. Sane Trilogy." },
  { id: 156, titulo: "Crash Bandicoot 4: It's About Time", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Crash Bandicoot 4: It's About Time." },
  { id: 157, titulo: "Cult of the Lamb", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Cult of the Lamb." },
  { id: 158, titulo: "Danganronpa: Trigger Happy Havoc", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Danganronpa: Trigger Happy Havoc." },
  { id: 159, titulo: "Danganronpa 2: Goodbye Despair", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Danganronpa 2: Goodbye Despair." },
  { id: 160, titulo: "Darkest Dungeon", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Darkest Dungeon." },
  { id: 161, titulo: "Darkest Dungeon II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Darkest Dungeon II." },
  { id: 162, titulo: "Darksiders", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Darksiders." },
  { id: 163, titulo: "Darksiders II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Darksiders II." },
  { id: 164, titulo: "Darksiders III", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Darksiders III." },
  { id: 165, titulo: "Darksiders Genesis", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Darksiders Genesis." },
  { id: 166, titulo: "DAVE THE DIVER", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em DAVE THE DIVER." },
  { id: 167, titulo: "DayZ", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de DayZ." },
  { id: 168, titulo: "Demon's Souls", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Demon's Souls." },
  { id: 169, titulo: "Desperados III", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Desperados III." },
  { id: 170, titulo: "Detroit: Become Human", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Detroit: Become Human." },
  { id: 171, titulo: "Diablo II: Resurrected", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Diablo II: Resurrected." },
  { id: 172, titulo: "Diablo III", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Diablo III." },
  { id: 173, titulo: "Diablo IV", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Diablo IV." },
  { id: 174, titulo: "Diddy Kong Racing", categoria: "Corrida", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Dispute provas em pistas e ambientes variados, buscando melhorar seu desempenho e dominar cada curva em Diddy Kong Racing." },
  { id: 175, titulo: "Doki Doki Literature Club!", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Doki Doki Literature Club!." },
  { id: 176, titulo: "Donkey Kong Country Returns", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Donkey Kong Country Returns." },
  { id: 177, titulo: "Donkey Kong Country: Tropical Freeze", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Donkey Kong Country: Tropical Freeze." },
  { id: 178, titulo: "Dragon Age: Origins", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Dragon Age: Origins." },
  { id: 179, titulo: "Dragon Age: Inquisition", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Dragon Age: Inquisition." },
  { id: 180, titulo: "Dragon's Dogma: Dark Arisen", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Dragon's Dogma: Dark Arisen." },
  { id: 181, titulo: "Dragon's Dogma 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Dragon's Dogma 2." },
  { id: 182, titulo: "Dragon Quest XI S: Echoes of an Elusive Age", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Dragon Quest XI S: Echoes of an Elusive Age." },
  { id: 183, titulo: "Dragon Quest Builders 2", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Dragon Quest Builders 2." },
  { id: 184, titulo: "Dredge", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Dredge." },
  { id: 185, titulo: "Dying Light", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em Dying Light." },
  { id: 186, titulo: "Dying Light 2 Stay Human", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em Dying Light 2 Stay Human." },
  { id: 187, titulo: "EarthBound", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de EarthBound." },
  { id: 188, titulo: "Eiyuden Chronicle: Hundred Heroes", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Eiyuden Chronicle: Hundred Heroes." },
  { id: 189, titulo: "Ender Lilies: Quietus of the Knights", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Ender Lilies: Quietus of the Knights." },
  { id: 190, titulo: "Ender Magnolia: Bloom in the Mist", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Ender Magnolia: Bloom in the Mist." },
  { id: 191, titulo: "Eternal Darkness: Sanity's Requiem", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em Eternal Darkness: Sanity's Requiem." },
  { id: 192, titulo: "Everybody's Gone to the Rapture", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Everybody's Gone to the Rapture." },
  { id: 193, titulo: "Everspace 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Everspace 2." },
  { id: 194, titulo: "F-Zero GX", categoria: "Corrida", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Dispute provas em pistas e ambientes variados, buscando melhorar seu desempenho e dominar cada curva em F-Zero GX." },
  { id: 195, titulo: "Fable", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Fable." },
  { id: 196, titulo: "Fable II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Fable II." },
  { id: 197, titulo: "Fable III", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Fable III." },
  { id: 198, titulo: "Farming Simulator 22", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Farming Simulator 22." },
  { id: 199, titulo: "Fe", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Fe." },
  { id: 200, titulo: "F.E.A.R.", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de F.E.A.R.." },
  { id: 201, titulo: "F.E.A.R. 2: Project Origin", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de F.E.A.R. 2: Project Origin." },
  { id: 202, titulo: "Final Fantasy IX", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy IX." },
  { id: 203, titulo: "Final Fantasy X", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy X." },
  { id: 204, titulo: "Final Fantasy XII: The Zodiac Age", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy XII: The Zodiac Age." },
  { id: 205, titulo: "Final Fantasy XIV", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy XIV." },
  { id: 206, titulo: "Final Fantasy XV", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy XV." },
  { id: 207, titulo: "Final Fantasy XVI", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy XVI." },
  { id: 208, titulo: "Final Fantasy Tactics", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Final Fantasy Tactics." },
  { id: 209, titulo: "Final Fantasy X-2", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy X-2." },
  { id: 210, titulo: "Final Fantasy Type-0 HD", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Final Fantasy Type-0 HD." },
  { id: 211, titulo: "Forager", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Forager." },
  { id: 212, titulo: "Freedom Planet 2", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Freedom Planet 2." },
  { id: 213, titulo: "FTL: Faster Than Light", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de FTL: Faster Than Light." },
  { id: 214, titulo: "Gears 5", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Gears 5." },
  { id: 215, titulo: "Gears of War 2", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Gears of War 2." },
  { id: 216, titulo: "Gears of War 3", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Gears of War 3." },
  { id: 217, titulo: "Ghostrunner", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Ghostrunner." },
  { id: 218, titulo: "Ghostrunner 2", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Ghostrunner 2." },
  { id: 219, titulo: "Gnosia", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Gnosia." },
  { id: 220, titulo: "Golden Sun", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Golden Sun." },
  { id: 221, titulo: "Golden Sun: The Lost Age", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Golden Sun: The Lost Age." },
  { id: 222, titulo: "Gothic", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Gothic." },
  { id: 223, titulo: "Gothic II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Gothic II." },
  { id: 224, titulo: "Grand Theft Auto: San Andreas", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Grand Theft Auto: San Andreas." },
  { id: 225, titulo: "Grand Theft Auto IV", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Grand Theft Auto IV." },
  { id: 226, titulo: "Grand Theft Auto V", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Grand Theft Auto V." },
  { id: 227, titulo: "Grim Fandango Remastered", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Grim Fandango Remastered." },
  { id: 228, titulo: "Grounded", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Grounded." },
  { id: 229, titulo: "Guacamelee!", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Guacamelee!." },
  { id: 230, titulo: "Guacamelee! 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Guacamelee! 2." },
  { id: 231, titulo: "Guitar Hero III: Legends of Rock", categoria: "Esporte", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Competições, técnica e timing dão o ritmo da experiência. Aprimore suas habilidades e encare desafios esportivos em Guitar Hero III: Legends of Rock." },
  { id: 232, titulo: "Gunstar Heroes", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Gunstar Heroes." },
  { id: 233, titulo: "Hades II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Hades II." },
  { id: 234, titulo: "Hatsune Miku: Project DIVA Mega Mix+", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Hatsune Miku: Project DIVA Mega Mix+." },
  { id: 235, titulo: "Heaven's Vault", categoria: "Puzzle", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Quebra-cabeças e desafios de lógica exigem observação e criatividade. Experimente soluções diferentes e desvende os mistérios de Heaven's Vault." },
  { id: 236, titulo: "Hellblade: Senua's Sacrifice", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Hellblade: Senua's Sacrifice." },
  { id: 237, titulo: "Hi-Fi Rush", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Hi-Fi Rush." },
  { id: 238, titulo: "Hollow Knight: Silksong", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Hollow Knight: Silksong." },
  { id: 239, titulo: "Hot Wheels Unleashed", categoria: "Corrida", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Dispute provas em pistas e ambientes variados, buscando melhorar seu desempenho e dominar cada curva em Hot Wheels Unleashed." },
  { id: 240, titulo: "Immortals Fenyx Rising", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Immortals Fenyx Rising." },
  { id: 241, titulo: "Inscryption", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Inscryption." },
  { id: 242, titulo: "Into the Radius", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Into the Radius." },
  { id: 243, titulo: "Ikaruga", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Ikaruga." },
  { id: 244, titulo: "Jak and Daxter: The Precursor Legacy", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Jak and Daxter: The Precursor Legacy." },
  { id: 245, titulo: "Jak II", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Jak II." },
  { id: 246, titulo: "Jak 3", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Jak 3." },
  { id: 247, titulo: "Katana ZERO", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Katana ZERO." },
  { id: 248, titulo: "Kentucky Route Zero", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Kentucky Route Zero." },
  { id: 249, titulo: "Kena: Bridge of Spirits", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Kena: Bridge of Spirits." },
  { id: 250, titulo: "Killer Instinct", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Killer Instinct." },
  { id: 251, titulo: "Kingdom Come: Deliverance", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Kingdom Come: Deliverance." },
  { id: 252, titulo: "Kingdom Hearts", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Kingdom Hearts." },
  { id: 253, titulo: "Kingdom Hearts II", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Kingdom Hearts II." },
  { id: 254, titulo: "Kingdom Hearts III", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Kingdom Hearts III." },
  { id: 255, titulo: "Kirby and the Forgotten Land", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Kirby and the Forgotten Land." },
  { id: 256, titulo: "Kirby Super Star Ultra", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Kirby Super Star Ultra." },
  { id: 257, titulo: "Kirby: Planet Robobot", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Kirby: Planet Robobot." },
  { id: 258, titulo: "L.A. Noire", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de L.A. Noire." },
  { id: 259, titulo: "Lies of P", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Lies of P." },
  { id: 260, titulo: "Lost in Random", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Lost in Random." },
  { id: 261, titulo: "Luigi's Mansion 3", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Luigi's Mansion 3." },
  { id: 262, titulo: "Mafia: Definitive Edition", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Mafia: Definitive Edition." },
  { id: 263, titulo: "Mafia II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Mafia II." },
  { id: 264, titulo: "Maneater", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Maneater." },
  { id: 265, titulo: "Marvel's Guardians of the Galaxy", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Marvel's Guardians of the Galaxy." },
  { id: 266, titulo: "Marvel's Spider-Man", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Marvel's Spider-Man." },
  { id: 267, titulo: "Marvel's Spider-Man: Miles Morales", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Marvel's Spider-Man: Miles Morales." },
  { id: 268, titulo: "Mass Effect", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Mass Effect." },
  { id: 269, titulo: "Mass Effect 2", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Mass Effect 2." },
  { id: 270, titulo: "Mass Effect 3", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Mass Effect 3." },
  { id: 271, titulo: "Mega Man 11", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Mega Man 11." },
  { id: 272, titulo: "Mega Man X", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Mega Man X." },
  { id: 273, titulo: "Mega Man Zero", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Mega Man Zero." },
  { id: 274, titulo: "Melatonin", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Melatonin." },
  { id: 275, titulo: "Metal Gear Solid", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Metal Gear Solid." },
  { id: 276, titulo: "Metal Gear Solid 2: Sons of Liberty", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Metal Gear Solid 2: Sons of Liberty." },
  { id: 277, titulo: "Metal Gear Solid 3: Snake Eater", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Metal Gear Solid 3: Snake Eater." },
  { id: 278, titulo: "Metal Gear Solid V: The Phantom Pain", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Metal Gear Solid V: The Phantom Pain." },
  { id: 279, titulo: "Metal Slug 3", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Metal Slug 3." },
  { id: 280, titulo: "Middle-earth: Shadow of Mordor", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Middle-earth: Shadow of Mordor." },
  { id: 281, titulo: "Middle-earth: Shadow of War", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Middle-earth: Shadow of War." },
  { id: 282, titulo: "Minecraft Dungeons", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Minecraft Dungeons." },
  { id: 283, titulo: "Monster Hunter: World", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Monster Hunter: World." },
  { id: 284, titulo: "Monster Hunter Rise", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Monster Hunter Rise." },
  { id: 285, titulo: "Monster Hunter Generations Ultimate", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Monster Hunter Generations Ultimate." },
  { id: 286, titulo: "Moonlighter", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Moonlighter." },
  { id: 287, titulo: "Moss", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Moss." },
  { id: 288, titulo: "Moss: Book II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Moss: Book II." },
  { id: 289, titulo: "N++", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em N++." },
  { id: 290, titulo: "Nexomon: Extinction", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Nexomon: Extinction." },
  { id: 291, titulo: "Noita", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Noita." },
  { id: 292, titulo: "Octopath Traveler", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Octopath Traveler." },
  { id: 293, titulo: "Octopath Traveler II", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Octopath Traveler II." },
  { id: 294, titulo: "Okami HD", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Okami HD." },
  { id: 295, titulo: "Omori", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Omori." },
  { id: 296, titulo: "Oneshot", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Oneshot." },
  { id: 297, titulo: "Overcooked! 2", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Overcooked! 2." },
  { id: 298, titulo: "Overwatch 2", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Overwatch 2." },
  { id: 299, titulo: "Papers, Please", categoria: "Puzzle", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Quebra-cabeças e desafios de lógica exigem observação e criatividade. Experimente soluções diferentes e desvende os mistérios de Papers, Please." },
  { id: 300, titulo: "Pathologic 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Pathologic 2." },
  { id: 301, titulo: "Payday 2", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Payday 2." },
  { id: 302, titulo: "Peggle Deluxe", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Peggle Deluxe." },
  { id: 303, titulo: "Pikmin 3 Deluxe", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Pikmin 3 Deluxe." },
  { id: 304, titulo: "Pikmin 4", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Pikmin 4." },
  { id: 305, titulo: "Pillars of Eternity", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Pillars of Eternity." },
  { id: 306, titulo: "Pillars of Eternity II: Deadfire", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Pillars of Eternity II: Deadfire." },
  { id: 307, titulo: "Pistol Whip", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Pistol Whip." },
  { id: 308, titulo: "PowerWash Simulator", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em PowerWash Simulator." },
  { id: 309, titulo: "Prey", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Prey." },
  { id: 310, titulo: "Prince of Persia: The Sands of Time", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Prince of Persia: The Sands of Time." },
  { id: 311, titulo: "Prince of Persia: The Lost Crown", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Prince of Persia: The Lost Crown." },
  { id: 312, titulo: "Psychonauts", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Psychonauts." },
  { id: 313, titulo: "Psychonauts 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Psychonauts 2." },
  { id: 314, titulo: "PUBG: Battlegrounds", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em PUBG: Battlegrounds." },
  { id: 315, titulo: "Quake", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Quake." },
  { id: 316, titulo: "Quake II", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Quake II." },
  { id: 317, titulo: "R-Type Final 2", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em R-Type Final 2." },
  { id: 318, titulo: "Rage 2", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Rage 2." },
  { id: 319, titulo: "Ratchet & Clank: Rift Apart", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Ratchet & Clank: Rift Apart." },
  { id: 320, titulo: "Red Faction: Guerrilla", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Red Faction: Guerrilla." },
  { id: 321, titulo: "Remnant: From the Ashes", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Remnant: From the Ashes." },
  { id: 322, titulo: "Remnant II", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Remnant II." },
  { id: 323, titulo: "Returnal", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Returnal." },
  { id: 324, titulo: "RimWorld", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em RimWorld." },
  { id: 325, titulo: "Rivals of Aether", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Rivals of Aether." },
  { id: 326, titulo: "Sable", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Sable." },
  { id: 327, titulo: "Sackboy: A Big Adventure", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Sackboy: A Big Adventure." },
  { id: 328, titulo: "Saints Row: The Third", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Saints Row: The Third." },
  { id: 329, titulo: "Samurai Shodown", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Samurai Shodown." },
  { id: 330, titulo: "Satisfactory", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Satisfactory." },
  { id: 331, titulo: "Sea of Stars", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Sea of Stars." },
  { id: 332, titulo: "Sea of Thieves", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Sea of Thieves." },
  { id: 333, titulo: "Shadow Tactics: Blades of the Shogun", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Shadow Tactics: Blades of the Shogun." },
  { id: 334, titulo: "Shadow of the Colossus", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Shadow of the Colossus." },
  { id: 335, titulo: "Shin Megami Tensei V: Vengeance", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Shin Megami Tensei V: Vengeance." },
  { id: 336, titulo: "Shin Megami Tensei III: Nocturne", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Shin Megami Tensei III: Nocturne." },
  { id: 337, titulo: "Shovel Knight: Treasure Trove", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Shovel Knight: Treasure Trove." },
  { id: 338, titulo: "Signalis", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em Signalis." },
  { id: 339, titulo: "Skate 3", categoria: "Esporte", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Competições, técnica e timing dão o ritmo da experiência. Aprimore suas habilidades e encare desafios esportivos em Skate 3." },
  { id: 340, titulo: "Skul: The Hero Slayer", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Skul: The Hero Slayer." },
  { id: 341, titulo: "Sniper Elite 4", categoria: "Tiro", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma experiência de combate com foco em precisão, posicionamento e gerenciamento de recursos. Encare missões e confrontos em Sniper Elite 4." },
  { id: 342, titulo: "SOMA", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em SOMA." },
  { id: 343, titulo: "Sonic Frontiers", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Sonic Frontiers." },
  { id: 344, titulo: "Sonic Generations", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Sonic Generations." },
  { id: 345, titulo: "Soulcalibur VI", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Soulcalibur VI." },
  { id: 346, titulo: "South Park: The Stick of Truth", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de South Park: The Stick of Truth." },
  { id: 347, titulo: "South Park: The Fractured But Whole", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de South Park: The Fractured But Whole." },
  { id: 348, titulo: "Spec Ops: The Line", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Spec Ops: The Line." },
  { id: 349, titulo: "Spiritfarer", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Spiritfarer." },
  { id: 350, titulo: "Splatoon 3", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Splatoon 3." },
  { id: 351, titulo: "Spyro Reignited Trilogy", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Spyro Reignited Trilogy." },
  { id: 352, titulo: "Star Wars Jedi: Fallen Order", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Star Wars Jedi: Fallen Order." },
  { id: 353, titulo: "Star Wars Jedi: Survivor", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Star Wars Jedi: Survivor." },
  { id: 354, titulo: "Star Wars: Knights of the Old Republic", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Star Wars: Knights of the Old Republic." },
  { id: 355, titulo: "Star Wars: Republic Commando", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Star Wars: Republic Commando." },
  { id: 356, titulo: "SteamWorld Dig 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de SteamWorld Dig 2." },
  { id: 357, titulo: "SteamWorld Heist", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de SteamWorld Heist." },
  { id: 358, titulo: "Streets of Rage 4", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Streets of Rage 4." },
  { id: 359, titulo: "Super Mario 3D World", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Super Mario 3D World." },
  { id: 360, titulo: "Super Mario Galaxy", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Super Mario Galaxy." },
  { id: 361, titulo: "Super Mario Galaxy 2", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Super Mario Galaxy 2." },
  { id: 362, titulo: "Super Meat Boy", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em Super Meat Boy." },
  { id: 363, titulo: "Superhot", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Superhot." },
  { id: 364, titulo: "Surviving Mars", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Surviving Mars." },
  { id: 365, titulo: "Tales of Arise", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Tales of Arise." },
  { id: 366, titulo: "Tales of Berseria", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Tales of Berseria." },
  { id: 367, titulo: "Tales of Vesperia", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Tales of Vesperia." },
  { id: 368, titulo: "Tales of Zestiria", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Tales of Zestiria." },
  { id: 369, titulo: "The Banner Saga", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em The Banner Saga." },
  { id: 370, titulo: "The Banner Saga 2", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em The Banner Saga 2." },
  { id: 371, titulo: "The Banner Saga 3", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em The Banner Saga 3." },
  { id: 372, titulo: "The Crew 2", categoria: "Corrida", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Dispute provas em pistas e ambientes variados, buscando melhorar seu desempenho e dominar cada curva em The Crew 2." },
  { id: 373, titulo: "The Elder Scrolls III: Morrowind", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Elder Scrolls III: Morrowind." },
  { id: 374, titulo: "The Elder Scrolls IV: Oblivion", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Elder Scrolls IV: Oblivion." },
  { id: 375, titulo: "The Elder Scrolls V: Skyrim", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Elder Scrolls V: Skyrim." },
  { id: 376, titulo: "The Evil Within", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em The Evil Within." },
  { id: 377, titulo: "The Evil Within 2", categoria: "Terror", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma experiência de suspense e tensão, com perigos, exploração e momentos de grande impacto. Descubra os segredos e tente sobreviver em The Evil Within 2." },
  { id: 378, titulo: "The Forgotten City", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Forgotten City." },
  { id: 379, titulo: "The Long Dark", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Long Dark." },
  { id: 380, titulo: "The Outer Worlds", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Outer Worlds." },
  { id: 381, titulo: "The Stanley Parable: Ultra Deluxe", categoria: "Puzzle", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Quebra-cabeças e desafios de lógica exigem observação e criatividade. Experimente soluções diferentes e desvende os mistérios de The Stanley Parable: Ultra Deluxe." },
  { id: 382, titulo: "The Surge 2", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Surge 2." },
  { id: 383, titulo: "The Swapper", categoria: "Puzzle", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Quebra-cabeças e desafios de lógica exigem observação e criatividade. Experimente soluções diferentes e desvende os mistérios de The Swapper." },
  { id: 384, titulo: "The Walking Dead: The Telltale Definitive Series", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Walking Dead: The Telltale Definitive Series." },
  { id: 385, titulo: "The Wolf Among Us", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de The Wolf Among Us." },
  { id: 386, titulo: "Thumper", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Thumper." },
  { id: 387, titulo: "To the Moon", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de To the Moon." },
  { id: 388, titulo: "Torchlight II", categoria: "RPG", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Um RPG com evolução de personagens, habilidades e escolhas ao longo da jornada. Monte sua estratégia, conheça aliados e explore o universo de Torchlight II." },
  { id: 389, titulo: "Trackmania", categoria: "Corrida", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Dispute provas em pistas e ambientes variados, buscando melhorar seu desempenho e dominar cada curva em Trackmania." },
  { id: 390, titulo: "Transistor", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Transistor." },
  { id: 391, titulo: "Tunic", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b45309", "#1d4f5c"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Tunic." },
  { id: 392, titulo: "Two Point Hospital", categoria: "Simulação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#b388ff", "#7a0b1f"],
    descricao: "Uma experiência de simulação em que você administra atividades, experimenta possibilidades e desenvolve seu próprio ritmo em Two Point Hospital." },
  { id: 393, titulo: "Unpacking", categoria: "Puzzle", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#5c3a1d", "#1f2a60"],
    descricao: "Quebra-cabeças e desafios de lógica exigem observação e criatividade. Experimente soluções diferentes e desvende os mistérios de Unpacking." },
  { id: 394, titulo: "Valkyria Chronicles", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1d4f5c", "#7b2fe0"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Valkyria Chronicles." },
  { id: 395, titulo: "Valkyria Chronicles 4", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de Valkyria Chronicles 4." },
  { id: 396, titulo: "Vanquish", categoria: "Ação", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#1f2a60", "#0f4c75"],
    descricao: "Combates intensos, desafios variados e ritmo acelerado são o destaque. Domine as mecânicas, enfrente adversários e avance em Vanquish." },
  { id: 397, titulo: "WarioWare: Get It Together!", categoria: "Plataforma", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#7b2fe0", "#2f6b3a"],
    descricao: "Atravesse fases criativas com saltos, obstáculos e desafios de habilidade. Explore caminhos alternativos e descubra segredos em WarioWare: Get It Together!." },
  { id: 398, titulo: "Wasteland 3", categoria: "Estratégia", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#e11d48", "#b45309"],
    descricao: "Planejamento e decisões fazem a diferença: administre recursos, pense alguns passos à frente e encontre a melhor tática em Wasteland 3." },
  { id: 399, titulo: "We Happy Few", categoria: "Aventura", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#0f4c75", "#b388ff"],
    descricao: "Uma jornada focada em exploração, descobertas e personagens marcantes. Avance por cenários variados, descubra segredos e acompanhe uma história própria de We Happy Few." },
  { id: 400, titulo: "Wii Sports", categoria: "Esporte", ano: null, plataforma: "Variadas (verificar por versão)", nota: null, cores: ["#2f6b3a", "#5c3a1d"],
    descricao: "Competições, técnica e timing dão o ritmo da experiência. Aprimore suas habilidades e encare desafios esportivos em Wii Sports." },
];
 
// 2) ESTADO --------------------------------------------------
const estado = {
  categoria: "Todos",
  busca: "",
  ordem: "nome",
  apenasFavoritos: document.body.dataset.pagina === "favoritos", // na index só aparecem favoritos
  favoritos: new Set(JSON.parse(localStorage.getItem("arcanum:favoritos") || "[]")),
  jogoAberto: null
};
 
// 3) REFERÊNCIAS AO DOM -------------------------------------
const $lista = document.getElementById("listaJogos");
const $filtros = document.getElementById("filtrosCategoria");
const $busca = document.getElementById("busca");
const $ordenar = document.getElementById("ordenar");
const $vazio = document.getElementById("estadoVazio");
const $info = document.getElementById("resultadoInfo");
const $contador = document.getElementById("contadorFavoritos");
const $btnFav = document.getElementById("btnVerFavoritos");
// O modal é criado só ao abrir, para os cards aparecerem mesmo se o JS do Bootstrap demorar/falhar
const $modalEl = document.getElementById("modalJogo");
function abrirModal() {
  if (typeof bootstrap === "undefined") {
    alert("Não foi possível carregar o Bootstrap. Verifique sua conexão com a internet.");
    return;
  }
  bootstrap.Modal.getOrCreateInstance($modalEl).show();
}
 
// 4) FUNÇÕES -------------------------------------------------
const gradiente = (cores) => `linear-gradient(135deg, ${cores[0]}, ${cores[1]})`;
 
function salvarFavoritos() {
  localStorage.setItem("arcanum:favoritos", JSON.stringify([...estado.favoritos]));
  $contador.textContent = estado.favoritos.size;
}
 
function jogosFiltrados() {
  const termo = estado.busca.trim().toLowerCase();
  return jogos
    .filter(j => estado.categoria === "Todos" || j.categoria === estado.categoria)
    .filter(j => j.titulo.toLowerCase().includes(termo))
    .filter(j => !estado.apenasFavoritos || estado.favoritos.has(j.id))
    .sort((a, b) => {
      if (estado.ordem === "nota") return b.nota - a.nota;
      if (estado.ordem === "ano") return b.ano - a.ano;
      return a.titulo.localeCompare(b.titulo, "pt-BR");
    });
}
 
function criarCard(jogo) {
  const favorito = estado.favoritos.has(jogo.id);
  const estrelas = "★".repeat(Math.round(jogo.nota / 2)) + "☆".repeat(5 - Math.round(jogo.nota / 2));
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4 col-xl-3";
  col.innerHTML = `
    <article class="flip-card" tabindex="0" aria-label="${jogo.titulo}. Pressione Enter para virar o card.">
      <div class="flip-inner">
 
        <!-- FRENTE -->
        <div class="game-card flip-face flip-front">
          <div class="game-capa" style="background:${gradiente(jogo.cores)}">
            <span class="game-nota">★ ${jogo.nota.toFixed(1)}</span>
            <button type="button" class="btn-coracao ${favorito ? "ativo" : ""}"
                    data-acao="favoritar" data-id="${jogo.id}"
                    aria-pressed="${favorito}" aria-label="Favoritar ${jogo.titulo}">♥</button>
            ${jogo.titulo}
          </div>
          <div class="game-body">
            <div class="d-flex gap-2 mb-2 flex-wrap">
              <span class="tag">${jogo.categoria}</span>
              <span class="tag tag-vermelha">${jogo.ano}</span>
            </div>
            <h3 class="game-titulo">${jogo.titulo}</h3>
            <p class="dica-virar mt-auto mb-0">↻ Clique no card para ver a descrição</p>
          </div>
        </div>
 
        <!-- VERSO -->
        <div class="game-card flip-face flip-back" style="--c1:${jogo.cores[0]}">
          <h3 class="game-titulo">${jogo.titulo}</h3>
          <p class="estrelas" aria-label="Nota ${jogo.nota.toFixed(1)} de 10">${estrelas}</p>
          <p class="verso-desc">${jogo.descricao}</p>
          <p class="verso-info mb-3"><strong>Plataformas:</strong> ${jogo.plataforma}</p>
          <div class="d-flex gap-2 mt-auto">
            <button type="button" class="btn btn-arcanum btn-sm flex-fill" data-acao="detalhes" data-id="${jogo.id}">Detalhes</button>
            <button type="button" class="btn btn-outline-arcanum btn-sm flex-fill ${favorito ? "ativo-fav" : ""}"
                    data-acao="favoritar" data-id="${jogo.id}">${favorito ? "♥ Favorito" : "♡ Favoritar"}</button>
          </div>
        </div>
 
      </div>
    </article>`;
  return col;
}
 
function renderizarCatalogo() {
  const lista = jogosFiltrados();
  $lista.replaceChildren(...lista.map(criarCard));
  $vazio.classList.toggle("d-none", lista.length > 0);
  const [um, varios] = estado.apenasFavoritos && !$btnFav ? ["favorito", "favoritos"] : ["jogo encontrado", "jogos encontrados"];
  if ($info) $info.textContent = `${lista.length} ${lista.length === 1 ? um : varios}`;
}
 
function renderizarFiltros() {
  if (!$filtros) return; // a página de favoritos não tem filtros
  const categorias = ["Todos", ...new Set(jogos.map(j => j.categoria))];
  $filtros.replaceChildren(...categorias.map(cat => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (cat === estado.categoria ? " ativo" : "");
    b.textContent = cat;
    b.dataset.categoria = cat;
    return b;
  }));
}
 
function renderizarEstatisticas() {
  const media = jogos.reduce((soma, j) => soma + j.nota, 0) / jogos.length;
  const valores = {
    statTotal: jogos.length,
    statCategorias: new Set(jogos.map(j => j.categoria)).size,
    statNota: media.toFixed(1)
  };
  // Só preenche os números se a página tiver esses elementos (a página do catálogo não tem)
  Object.entries(valores).forEach(([id, valor]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  });
}
 
function alternarFavorito(id) {
  estado.favoritos.has(id) ? estado.favoritos.delete(id) : estado.favoritos.add(id);
  salvarFavoritos();
  renderizarCatalogo();
  if (estado.jogoAberto === id) atualizarBotaoModal();
}
 
function atualizarBotaoModal() {
  const fav = estado.favoritos.has(estado.jogoAberto);
  document.getElementById("modalFavorito").textContent = fav ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos";
}
 
function abrirDetalhes(id) {
  const j = jogos.find(item => item.id === id);
  estado.jogoAberto = id;
  document.getElementById("modalCapa").style.background = gradiente(j.cores);
  document.getElementById("modalTitulo").textContent = j.titulo;
  document.getElementById("modalDescricao").textContent = j.descricao;
  document.getElementById("modalInfo").textContent = `Plataformas: ${j.plataforma} · Lançamento: ${j.ano} · Nota: ${j.nota.toFixed(1)}`;
  document.getElementById("modalTags").innerHTML =
    `<span class="tag">${j.categoria}</span><span class="tag tag-vermelha">${j.ano}</span>`;
  atualizarBotaoModal();
  abrirModal();
}
 
// 5) EVENTOS -------------------------------------------------
$filtros?.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  estado.categoria = chip.dataset.categoria;
  renderizarFiltros();
  renderizarCatalogo();
});
 
// Clique: botões internos têm prioridade; clicar no resto do card vira ele
$lista.addEventListener("click", (e) => {
  const alvo = e.target.closest("[data-acao]");
  if (alvo) {
    const id = Number(alvo.dataset.id);
    if (alvo.dataset.acao === "favoritar") alternarFavorito(id);
    if (alvo.dataset.acao === "detalhes") abrirDetalhes(id);
    return;
  }
  const card = e.target.closest(".flip-card");
  if (card) card.classList.toggle("virado");
});
 
// Teclado: Enter ou Espaço viram o card focado
$lista.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("flip-card")) {
    e.preventDefault();
    e.target.classList.toggle("virado");
  }
});
 
$busca?.addEventListener("input", () => { estado.busca = $busca.value; renderizarCatalogo(); });
$ordenar?.addEventListener("change", () => { estado.ordem = $ordenar.value; renderizarCatalogo(); });
 
$btnFav?.addEventListener("click", () => {
  estado.apenasFavoritos = !estado.apenasFavoritos;
  $btnFav.setAttribute("aria-pressed", estado.apenasFavoritos);
  renderizarCatalogo();
  document.getElementById("catalogo")?.scrollIntoView();
});
 
document.getElementById("modalFavorito").addEventListener("click", () => alternarFavorito(estado.jogoAberto));

window.addEventListener("storage", (e) => {
  if (e.key !== "arcanum:favoritos") return;
  estado.favoritos = new Set(JSON.parse(e.newValue || "[]"));
  $contador.textContent = estado.favoritos.size;
  renderizarCatalogo();
});
 
// 6) INICIALIZAÇÃO ------------------------------------------
renderizarEstatisticas();
renderizarFiltros();
salvarFavoritos();
renderizarCatalogo();