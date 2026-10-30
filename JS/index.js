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