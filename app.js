function indonesianApp() {
  const library = window.INDONESIAN_LIBRARY || {
    flashcards: [],
    quizzes: [],
    shadowLines: [],
    journalPrompts: [],
    missions: [],
    readings: {},
    sentenceParts: { subjects: [], verbs: [], objects: [], times: [] },
    stats: { vocabulary: 0, vocabularyActivities: 0, flashcards: 0, quizzes: 0, phrases: 0, readings: 0, writing: 0, builderCombinations: 0 }
  };

  return {
    selectedLevel: 1,
    dailyMinutes: 75,
    goal: "social",
    focusMode: false,
    showTranslation: false,
    showGlossary: false,
    speechRate: 0.82,
    completedToday: [],
    retellText: "",
    copiedCommand: "",
    chart: null,
    activeTool: "cards",
    flashcardIndex: 0,
    flashcardFlipped: false,
    flashcardReviews: {},
    customCards: [],
    quizIndex: 0,
    quizChoice: "",
    quizAnswered: false,
    quizScore: 0,
    builderSubject: "Saya",
    builderVerb: "membaca",
    builderObject: "artikel pendek",
    builderTime: "pagi ini",
    builderMode: "base",
    shadowIndex: 0,
    shadowRounds: 0,
    journalText: "",
    journalPromptIndex: 0,
    readingIndex: 0,
    progressDay: "",
    dailyResetTimer: null,
    voiceListenerReady: false,
    pendingSpeech: null,
    voicePollTimer: null,
    speechUtterance: null,
    tutorPrompt: "",
    activeTutorMode: "",
    tutorTurn: 0,
    tutorActivityTitle: "Elige una practica",
    tutorResponse: "Selecciona palabras, texto BIPA, pronunciacion o vocabulario del nivel. Solo una actividad permanece abierta para leer con comodidad.",
    libraryStats: library.stats,
    readingDecks: library.readings,
    levels: [
      {
        id: 1,
        short: "supervivencia concreta",
        cefr: "A1 orientativo",
        title: "BIPA 1 - Contacto y necesidades inmediatas",
        official:
          "Meta: comprender y usar expresiones de presentacion, identidad, compras simples, lugares y rutinas con interlocutores muy cooperativos.",
        canDo: [
          "Presentarte y preguntar datos personales",
          "Pedir comida, precio, direccion y horario",
          "Entender instrucciones cortas con apoyo visual",
          "Escribir mensajes y formularios muy simples"
        ],
        input: [
          "Dialogos de 30 a 90 segundos",
          "Historias con presente, rutinas y objetos visibles",
          "Video con gestos, imagen y subtitulos en indonesio",
          "Repeticion estrecha del mismo tema durante 3 dias"
        ],
        system: [
          "Orden SVO y particulas basicas",
          "Pronombres saya, Anda, kamu, dia, mereka",
          "Negacion tidak y bukan",
          "Preposiciones di, ke, dari"
        ]
      },
      {
        id: 2,
        short: "rutinas y entorno",
        cefr: "A2 orientativo",
        title: "BIPA 2 - Vida diaria con mas autonomia",
        official:
          "Meta: expresar sentimientos simples, describir el entorno y resolver necesidades rutinarias de forma clara.",
        canDo: [
          "Describir casa, ciudad, salud, familia y estudios",
          "Hacer tramites simples en banco, hospital o transporte",
          "Comparar opciones y explicar preferencias basicas",
          "Mantener conversaciones cortas sobre tareas rutinarias"
        ],
        input: [
          "Vlogs lentos sobre vida diaria",
          "Mensajes de WhatsApp, anuncios y menus reales",
          "Dialogos de servicios publicos con frases patron",
          "Lecturas de 150 a 250 palabras con glosario minimo"
        ],
        system: [
          "Afijos ber-, me-, di- en usos frecuentes",
          "Conectores lalu, kemudian, karena, tetapi",
          "Numeros, clasificadores y fechas",
          "Frases comparativas lebih, paling, sama"
        ]
      },
      {
        id: 3,
        short: "experiencias y planes",
        cefr: "B1 orientativo",
        title: "BIPA 3 - Narrar, justificar y planear",
        official:
          "Meta: contar experiencias, esperanzas, objetivos y planes de forma breve y coherente, dando razones en contextos cotidianos o laborales.",
        canDo: [
          "Narrar eventos pasados y planes futuros",
          "Dar razones, preferencias y pequenas opiniones",
          "Participar en conversaciones sobre trabajo, ocio y viajes",
          "Resumir textos narrativos y explicativos sencillos"
        ],
        input: [
          "Podcasts lentos con transcript",
          "Historias personales y entrevistas breves",
          "Noticias simplificadas sobre temas conocidos",
          "Series de un mismo tema durante una semana"
        ],
        system: [
          "MeN-, di-, ter-, peN- como familias de palabras",
          "Conectores sebab, supaya, sehingga, walaupun",
          "Discurso indirecto con mengatakan bahwa",
          "Parafraseo cuando falta vocabulario"
        ]
      },
      {
        id: 4,
        short: "ideas concretas y abstractas",
        cefr: "B2 orientativo",
        title: "BIPA 4 - Observacion, informe y opinion clara",
        official:
          "Meta: reportar observaciones e ideas sobre temas concretos o abstractos del propio campo con fluidez suficiente para no bloquear al interlocutor.",
        canDo: [
          "Explicar causas, consecuencias y tendencias",
          "Defender una opinion con ejemplos",
          "Entender entrevistas y reportajes no demasiado tecnicos",
          "Escribir informes breves y correos profesionales"
        ],
        input: [
          "Reportajes de 5 a 8 minutos con repeticion selectiva",
          "Articulos de opinion de dificultad media",
          "Debates con tema conocido y transcripcion parcial",
          "Lectura intensiva mas lectura extensiva diaria"
        ],
        system: [
          "Nominalizacion con peN-an y ke-an",
          "Voz pasiva formal e informal",
          "Marcadores argumentativos namun, selain itu, akibatnya",
          "Registro formal vs conversacional"
        ]
      },
      {
        id: 5,
        short: "textos complejos generales",
        cefr: "C1 inicial orientativo",
        title: "BIPA 5 - Perspectiva y fluidez en temas variados",
        official:
          "Meta: comprender textos largos y complejos, y expresar puntos de vista con fluidez en temas variados, salvo areas profesionales o academicas exigentes.",
        canDo: [
          "Leer ensayos, reportajes y entrevistas largas",
          "Expresar matices, reservas y contraargumentos",
          "Participar en conversaciones rapidas si el tema es conocido",
          "Escribir textos estructurados con posicion propia"
        ],
        input: [
          "Columnas de prensa, podcasts nativos y documentales",
          "Narrow input: 10 piezas sobre el mismo tema",
          "Transcripcion solo despues de escucha global",
          "Retell de 2 minutos y resumen escrito de 120 palabras"
        ],
        system: [
          "Colocaciones y expresiones idiomaticas",
          "Cohesion textual avanzada",
          "Matices de modalizadores mungkin, sebaiknya, rupanya",
          "Cambios de registro segun contexto"
        ]
      },
      {
        id: 6,
        short: "profesional avanzado",
        cefr: "C1 alto orientativo",
        title: "BIPA 6 - Lenguaje social y profesional preciso",
        official:
          "Meta: entender textos largos con significado implicito y expresar ideas claras, estructuradas y detalladas en situaciones sociales y profesionales.",
        canDo: [
          "Seguir reuniones, presentaciones y documentos profesionales",
          "Detectar implicitos, tono y presuposiciones",
          "Negociar, resumir acuerdos y presentar propuestas",
          "Escribir informes extensos con estructura limpia"
        ],
        input: [
          "Conferencias, paneles y entrevistas sin simplificar",
          "Lectura de documentos de trabajo y textos especializados",
          "Shadowing selectivo de frases de alta utilidad",
          "Comparar dos fuentes y reconstruir argumentos"
        ],
        system: [
          "Nominalizaciones densas y sintaxis formal",
          "Marcadores retoricos de presentacion",
          "Pragmatica de cortesia y desacuerdo",
          "Precision lexico-semantica por dominio"
        ]
      },
      {
        id: 7,
        short: "casi todo campo",
        cefr: "C2 orientativo",
        title: "BIPA 7 - Matiz, sintesis y argumentacion academica",
        official:
          "Meta: comprender informacion de casi todos los campos y expresarse con espontaneidad, precision, matices y reconstruccion coherente de argumentos y datos.",
        canDo: [
          "Leer textos academicos, literatura y analisis complejos",
          "Distinguir ironia, implicatura y matiz ideologico",
          "Presentar argumentos con datos y estructura persuasiva",
          "Sintetizar varias fuentes sin perder postura ni precision"
        ],
        input: [
          "Clases universitarias, ensayos, debates y prensa especializada",
          "Lectura critica con mapa de argumentos",
          "Retell largo, contraargumento y sintesis comparada",
          "Produccion final con feedback estricto de naturalidad"
        ],
        system: [
          "Estructuras academicas y retorica avanzada",
          "Matices pragmaticos y sociolinguisticos",
          "Reformulacion precisa de argumentos",
          "Estilo natural, denso y flexible"
        ]
      }
    ],
    decks: {
      1: {
        topic: "Warung y presentacion",
        title: "Di warung kopi",
        text:
          "Nama saya Leo. Saya tinggal di dekat kampus. Pagi ini saya pergi ke warung kopi. Saya pesan kopi panas dan roti kecil. Penjual bertanya, 'Mau gula?' Saya menjawab, 'Sedikit saja, terima kasih.'",
        translation:
          "Me llamo Leo. Vivo cerca del campus. Esta manana voy a una cafeteria pequena. Pido cafe caliente y un pan pequeno. La vendedora pregunta: 'Quieres azucar?' Respondo: 'Solo un poco, gracias.'",
        glossary: [
          { term: "tinggal", meaning: "vivir, quedarse" },
          { term: "dekat", meaning: "cerca" },
          { term: "pesan", meaning: "pedir" },
          { term: "sedikit", meaning: "un poco" }
        ]
      },
      2: {
        topic: "Vivienda y rutina",
        title: "Mencari kos",
        text:
          "Rina mencari kos baru karena tempat lama terlalu jauh dari kantor. Ia ingin kamar yang bersih, internet yang stabil, dan dapur bersama. Setelah melihat tiga tempat, ia memilih kos dekat halte karena lebih praktis.",
        translation:
          "Rina busca una nueva habitacion de alquiler porque el lugar anterior esta demasiado lejos de la oficina. Quiere una habitacion limpia, internet estable y cocina compartida. Despues de ver tres sitios, elige el alojamiento cerca de la parada porque es mas practico.",
        glossary: [
          { term: "kos", meaning: "habitacion de alquiler" },
          { term: "terlalu", meaning: "demasiado" },
          { term: "bersama", meaning: "compartido" },
          { term: "memilih", meaning: "elegir" }
        ]
      },
      3: {
        topic: "Planes y razones",
        title: "Rencana akhir pekan",
        text:
          "Akhir pekan ini Dimas berencana naik kereta ke Bandung. Ia ingin bertemu teman lama dan mencoba makanan Sunda. Ia memilih kereta pagi supaya tiba sebelum siang. Menurutnya, perjalanan singkat seperti ini membuat pikiran lebih segar.",
        translation:
          "Este fin de semana Dimas planea ir en tren a Bandung. Quiere ver a un viejo amigo y probar comida sundanesa. Elige el tren de la manana para llegar antes del mediodia. Segun el, un viaje corto asi refresca la mente.",
        glossary: [
          { term: "berencana", meaning: "planear" },
          { term: "supaya", meaning: "para que" },
          { term: "tiba", meaning: "llegar" },
          { term: "segar", meaning: "fresco, despejado" }
        ]
      },
      4: {
        topic: "Observacion urbana",
        title: "Transportasi pagi",
        text:
          "Berdasarkan pengamatan selama satu minggu, halte di depan pasar selalu paling ramai antara pukul tujuh dan delapan pagi. Banyak penumpang memilih bus karena biaya lebih murah, tetapi beberapa orang tetap memakai ojek daring agar tidak terlambat.",
        translation:
          "Segun una observacion durante una semana, la parada frente al mercado siempre esta mas llena entre las siete y las ocho de la manana. Muchos pasajeros eligen el autobus porque cuesta menos, pero algunas personas siguen usando mototaxi por aplicacion para no llegar tarde.",
        glossary: [
          { term: "pengamatan", meaning: "observacion" },
          { term: "penumpang", meaning: "pasajero" },
          { term: "biaya", meaning: "coste" },
          { term: "terlambat", meaning: "tarde" }
        ]
      },
      5: {
        topic: "Opinion social",
        title: "Media sosial dan perhatian",
        text:
          "Media sosial memudahkan orang memperoleh informasi, tetapi juga membuat perhatian mudah terpecah. Menurut sebagian peneliti, masalah utama bukan jumlah informasi, melainkan kebiasaan berpindah dari satu rangsangan ke rangsangan lain tanpa jeda refleksi.",
        translation:
          "Las redes sociales facilitan obtener informacion, pero tambien fragmentan la atencion. Segun algunos investigadores, el problema principal no es la cantidad de informacion, sino el habito de pasar de un estimulo a otro sin pausa de reflexion.",
        glossary: [
          { term: "memudahkan", meaning: "facilitar" },
          { term: "terpecah", meaning: "fragmentado" },
          { term: "rangsangan", meaning: "estimulo" },
          { term: "jeda", meaning: "pausa" }
        ]
      },
      6: {
        topic: "Contexto profesional",
        title: "Rapat lintas tim",
        text:
          "Dalam rapat lintas tim, manajer menekankan bahwa keputusan tidak boleh hanya didasarkan pada efisiensi biaya. Dampak terhadap pelanggan, kesiapan operasional, dan risiko komunikasi perlu dipertimbangkan secara sistematis sebelum jadwal peluncuran disetujui.",
        translation:
          "En una reunion entre equipos, la gerente subraya que la decision no debe basarse solo en eficiencia de costes. El impacto en clientes, la preparacion operativa y el riesgo de comunicacion deben considerarse de forma sistematica antes de aprobar el calendario de lanzamiento.",
        glossary: [
          { term: "menekankan", meaning: "subrayar, enfatizar" },
          { term: "didasarkan", meaning: "basado en" },
          { term: "kesiapan", meaning: "preparacion" },
          { term: "peluncuran", meaning: "lanzamiento" }
        ]
      },
      7: {
        topic: "Sintesis academica",
        title: "Argumen dan data",
        text:
          "Argumen yang kuat tidak sekadar menyajikan data, tetapi menjelaskan hubungan antara data, asumsi, dan implikasi. Ketika dua sumber tampak bertentangan, pembaca perlu menilai konteks metodologisnya sebelum menyimpulkan bahwa salah satunya keliru.",
        translation:
          "Un argumento fuerte no solo presenta datos, sino que explica la relacion entre datos, supuestos e implicaciones. Cuando dos fuentes parecen contradecirse, el lector debe evaluar su contexto metodologico antes de concluir que una de ellas esta equivocada.",
        glossary: [
          { term: "sekadar", meaning: "meramente, solo" },
          { term: "asumsi", meaning: "supuesto" },
          { term: "bertentangan", meaning: "contradictorio" },
          { term: "keliru", meaning: "erroneo" }
        ]
      }
    },
    toolTabs: [
      { id: "cards", label: "Tarjetas", icon: "layers" },
      { id: "quiz", label: "Test", icon: "badge-check" },
      { id: "builder", label: "Frases", icon: "blocks" },
      { id: "shadow", label: "Shadowing", icon: "audio-lines" },
      { id: "journal", label: "Diario", icon: "pen-line" },
      { id: "tutor", label: "Tutor IA", icon: "messages-square" }
    ],
    flashcards: [
      { id: "b1-tinggal", level: 1, front: "tinggal", back: "vivir / quedarse", example: "Saya tinggal di Jakarta." },
      { id: "b1-dekat", level: 1, front: "dekat", back: "cerca", example: "Rumah saya dekat kampus." },
      { id: "b1-pesan", level: 1, front: "pesan", back: "pedir / reservar", example: "Saya pesan kopi panas." },
      { id: "b1-sedikit", level: 1, front: "sedikit", back: "un poco", example: "Saya mau gula sedikit saja." },
      { id: "b1-berapa", level: 1, front: "Berapa harganya?", back: "Cuanto cuesta?", example: "Permisi, berapa harganya?" },
      { id: "b2-kos", level: 2, front: "kos", back: "habitacion de alquiler", example: "Rina mencari kos baru." },
      { id: "b2-terlalu", level: 2, front: "terlalu", back: "demasiado", example: "Tempat lama terlalu jauh." },
      { id: "b2-bersama", level: 2, front: "bersama", back: "junto / compartido", example: "Ada dapur bersama." },
      { id: "b2-memilih", level: 2, front: "memilih", back: "elegir", example: "Ia memilih kos dekat halte." },
      { id: "b2-lebih", level: 2, front: "lebih praktis", back: "mas practico", example: "Tempat ini lebih praktis." },
      { id: "b3-berencana", level: 3, front: "berencana", back: "planear", example: "Dimas berencana naik kereta." },
      { id: "b3-supaya", level: 3, front: "supaya", back: "para que", example: "Ia pergi pagi supaya tidak terlambat." },
      { id: "b3-menurut", level: 3, front: "menurut saya", back: "en mi opinion / segun yo", example: "Menurut saya, ini penting." },
      { id: "b3-perjalanan", level: 3, front: "perjalanan", back: "viaje / trayecto", example: "Perjalanan ini singkat." },
      { id: "b4-pengamatan", level: 4, front: "pengamatan", back: "observacion", example: "Berdasarkan pengamatan, halte itu ramai." },
      { id: "b4-biaya", level: 4, front: "biaya", back: "coste", example: "Biaya bus lebih murah." },
      { id: "b4-agar", level: 4, front: "agar", back: "para que / con el fin de", example: "Ia naik ojek agar tidak terlambat." },
      { id: "b4-berdasarkan", level: 4, front: "berdasarkan", back: "basado en / segun", example: "Berdasarkan data, jumlahnya naik." },
      { id: "b5-memudahkan", level: 5, front: "memudahkan", back: "facilitar", example: "Aplikasi ini memudahkan belajar." },
      { id: "b5-terpecah", level: 5, front: "perhatian terpecah", back: "atencion fragmentada", example: "Media sosial membuat perhatian terpecah." },
      { id: "b5-melainkan", level: 5, front: "melainkan", back: "sino que", example: "Masalahnya bukan jumlah, melainkan kebiasaan." },
      { id: "b5-jeda", level: 5, front: "jeda refleksi", back: "pausa de reflexion", example: "Kita perlu jeda refleksi." },
      { id: "b6-didasarkan", level: 6, front: "didasarkan pada", back: "basado en", example: "Keputusan didasarkan pada data." },
      { id: "b6-kesiapan", level: 6, front: "kesiapan operasional", back: "preparacion operativa", example: "Kesiapan operasional perlu diperiksa." },
      { id: "b6-dipertimbangkan", level: 6, front: "dipertimbangkan", back: "considerado", example: "Risiko perlu dipertimbangkan." },
      { id: "b6-peluncuran", level: 6, front: "peluncuran", back: "lanzamiento", example: "Jadwal peluncuran disetujui." },
      { id: "b7-sekadar", level: 7, front: "sekadar", back: "meramente / solo", example: "Argumen tidak sekadar menyajikan data." },
      { id: "b7-asumsi", level: 7, front: "asumsi", back: "supuesto", example: "Asumsi perlu dijelaskan." },
      { id: "b7-bertentangan", level: 7, front: "bertentangan", back: "contradictorio", example: "Dua sumber tampak bertentangan." },
      { id: "b7-menyimpulkan", level: 7, front: "menyimpulkan", back: "concluir", example: "Jangan cepat menyimpulkan." },
      ...library.flashcards
    ],
    quizBank: [
      { level: 1, prompt: "Que significa 'Saya tinggal di dekat kampus'?", choices: ["Vivo cerca del campus", "Trabajo en el campus", "Voy al mercado"], answer: "Vivo cerca del campus", note: "tinggal = vivir/quedarse; dekat = cerca." },
      { level: 1, prompt: "Elige la frase natural para pedir un cafe.", choices: ["Saya pesan kopi panas", "Saya makan kopi panas", "Saya tidur kopi panas"], answer: "Saya pesan kopi panas", note: "pesan se usa para pedir o reservar." },
      { level: 2, prompt: "Que conector expresa causa?", choices: ["karena", "tetapi", "lalu"], answer: "karena", note: "karena = porque." },
      { level: 2, prompt: "Como dirias 'demasiado lejos'?", choices: ["terlalu jauh", "lebih jauh", "sama jauh"], answer: "terlalu jauh", note: "terlalu marca exceso." },
      { level: 3, prompt: "Supaya introduce...", choices: ["finalidad", "contraste", "precio"], answer: "finalidad", note: "supaya = para que." },
      { level: 3, prompt: "Que frase da opinion?", choices: ["Menurut saya...", "Pukul tujuh...", "Di depan pasar..."], answer: "Menurut saya...", note: "menurut saya = en mi opinion." },
      { level: 4, prompt: "Berdasarkan data significa...", choices: ["basado en datos", "sin datos", "contra los datos"], answer: "basado en datos", note: "berdasarkan = basado en." },
      { level: 4, prompt: "La forma pasiva de mempertimbangkan suele verse como...", choices: ["dipertimbangkan", "berpertimbangan", "kepertimbangan"], answer: "dipertimbangkan", note: "di- marca voz pasiva formal." },
      { level: 5, prompt: "Bukan X, melainkan Y significa...", choices: ["no X, sino Y", "X y tambien Y", "X antes que Y"], answer: "no X, sino Y", note: "melainkan contrasta y corrige." },
      { level: 5, prompt: "Que expresion suena mas abstracta?", choices: ["jeda refleksi", "kopi panas", "halte dekat pasar"], answer: "jeda refleksi", note: "Nivel BIPA 5: nominalizaciones y abstraccion." },
      { level: 6, prompt: "Keputusan didasarkan pada data: la decision...", choices: ["se basa en datos", "evita los datos", "rompe los datos"], answer: "se basa en datos", note: "didasarkan pada = estar basado en." },
      { level: 6, prompt: "Que palabra corresponde a 'lanzamiento'?", choices: ["peluncuran", "pengamatan", "perhatian"], answer: "peluncuran", note: "peluncuran se usa en producto, proyecto o lanzamiento." },
      { level: 7, prompt: "Sekadar aporta el matiz de...", choices: ["meramente", "por tanto", "aunque"], answer: "meramente", note: "No sekadar X = no meramente X." },
      { level: 7, prompt: "Cuando dos fuentes tampak bertentangan...", choices: ["parecen contradecirse", "parecen repetirse", "parecen simplificarse"], answer: "parecen contradecirse", note: "bertentangan = estar en conflicto/contradiccion." },
      ...library.quizzes
    ],
    sentenceParts: {
      subjects: [
        { id: "Saya", es: "yo", formal: "Saya", level: 1 },
        { id: "Teman saya", es: "mi amigo", formal: "Rekan saya", level: 2 },
        { id: "Manajer itu", es: "esa gerente", formal: "Manajer tersebut", level: 6 },
        { id: "Peneliti", es: "la investigadora", formal: "Peneliti tersebut", level: 7 },
        ...library.sentenceParts.subjects
      ],
      verbs: [
        { id: "membaca", es: "lee", passive: "dibaca", formal: "meninjau", level: 1 },
        { id: "memilih", es: "elige", passive: "dipilih", formal: "menentukan", level: 2 },
        { id: "menjelaskan", es: "explica", passive: "dijelaskan", formal: "memaparkan", level: 4 },
        { id: "mempertimbangkan", es: "considera", passive: "dipertimbangkan", formal: "mempertimbangkan", level: 6 },
        ...library.sentenceParts.verbs
      ],
      objects: [
        { id: "artikel pendek", es: "un articulo corto", level: 1 },
        { id: "rencana perjalanan", es: "un plan de viaje", level: 3 },
        { id: "risiko komunikasi", es: "el riesgo de comunicacion", level: 6 },
        { id: "hubungan antara data dan asumsi", es: "la relacion entre datos y supuestos", level: 7 },
        ...library.sentenceParts.objects
      ],
      times: [
        { id: "pagi ini", es: "esta manana", level: 1 },
        { id: "setelah rapat", es: "despues de la reunion", level: 3 },
        { id: "agar lebih jelas", es: "para que sea mas claro", level: 4 },
        { id: "berdasarkan pengamatan", es: "segun la observacion", level: 5 },
        ...library.sentenceParts.times
      ]
    },
    sentenceModes: [
      { id: "base", label: "Base" },
      { id: "negative", label: "Negativa" },
      { id: "question", label: "Pregunta" },
      { id: "passive", label: "Pasiva" },
      { id: "formal", label: "Formal" }
    ],
    shadowLines: [
      { level: 1, id: "Permisi, saya mau pesan kopi panas.", es: "Disculpe, quiero pedir cafe caliente." },
      { level: 1, id: "Rumah saya dekat stasiun, tetapi kantor saya jauh.", es: "Mi casa esta cerca de la estacion, pero mi oficina esta lejos." },
      { level: 2, id: "Saya memilih tempat ini karena lebih praktis.", es: "Elijo este lugar porque es mas practico." },
      { level: 2, id: "Kalau internet stabil, saya bisa bekerja dari kos.", es: "Si internet es estable, puedo trabajar desde el alojamiento." },
      { level: 3, id: "Akhir pekan ini saya berencana bertemu teman lama.", es: "Este fin de semana planeo ver a un viejo amigo." },
      { level: 3, id: "Menurut saya, perjalanan singkat membuat pikiran lebih segar.", es: "En mi opinion, un viaje corto refresca la mente." },
      { level: 4, id: "Berdasarkan pengamatan, penumpang lebih banyak pada pagi hari.", es: "Segun la observacion, hay mas pasajeros por la manana." },
      { level: 4, id: "Beberapa orang tetap memakai ojek agar tidak terlambat.", es: "Algunas personas siguen usando mototaxi para no llegar tarde." },
      { level: 5, id: "Masalah utama bukan jumlah informasi, melainkan kebiasaan berpindah perhatian.", es: "El problema principal no es la cantidad de informacion, sino el habito de cambiar la atencion." },
      { level: 5, id: "Kita perlu jeda refleksi sebelum mengambil kesimpulan.", es: "Necesitamos una pausa de reflexion antes de sacar conclusiones." },
      { level: 6, id: "Keputusan tidak boleh hanya didasarkan pada efisiensi biaya.", es: "La decision no debe basarse solo en eficiencia de costes." },
      { level: 6, id: "Risiko komunikasi perlu dipertimbangkan secara sistematis.", es: "El riesgo de comunicacion debe considerarse de forma sistematica." },
      { level: 7, id: "Argumen yang kuat menjelaskan hubungan antara data, asumsi, dan implikasi.", es: "Un argumento fuerte explica la relacion entre datos, supuestos e implicaciones." },
      { level: 7, id: "Pembaca perlu menilai konteks metodologis sebelum menyimpulkan.", es: "El lector debe evaluar el contexto metodologico antes de concluir." },
      ...library.shadowLines
    ],
    journalPrompts: [
      { level: 1, prompt: "Tulislah 5 kalimat tentang pagi ini: tempat, makanan, minuman, dan rencana." },
      { level: 2, prompt: "Bandingkan dua tempat tinggal: mana yang lebih praktis dan mengapa?" },
      { level: 3, prompt: "Ceritakan rencana akhir pekanmu dan beri dua alasan." },
      { level: 4, prompt: "Laporkan satu pengamatan di kotamu: apa penyebab dan akibatnya?" },
      { level: 5, prompt: "Tulis pendapat tentang media sosial dan perhatian dengan contoh konkret." },
      { level: 6, prompt: "Ringkas satu keputusan kerja dan jelaskan risiko yang perlu dipertimbangkan." },
      { level: 7, prompt: "Bandingkan dua argumen yang tampak bertentangan dan nilai asumsi keduanya." },
      ...library.journalPrompts
    ],
    missions: [
      { level: 1, title: "Foto mental", detail: "Mira 5 objetos y nombra color, lugar y funcion.", action: "Mision: 5 objetos -> warna, tempat, fungsi." },
      { level: 2, title: "Rutina hablada", detail: "Describe tu dia con 6 verbos frecuentes.", action: "Mision: ceritakan rutinitas dengan 6 verba." },
      { level: 3, title: "Retell 3-2-1", detail: "Cuenta el mismo texto en 3, 2 y 1 frase.", action: "Mision: retell 3-2-1 sin mirar texto." },
      { level: 4, title: "Causa y efecto", detail: "Explica un problema con karena, sehingga y agar.", action: "Mision: karena -> sehingga -> agar." },
      { level: 5, title: "Narrow input", detail: "Consume 3 piezas sobre el mismo tema y resume patron.", action: "Mision: 3 fuentes, 1 patron, 5 palabras." },
      { level: 6, title: "Minuta profesional", detail: "Escribe decision, riesgo, responsable y proximo paso.", action: "Mision: keputusan, risiko, PIC, langkah berikutnya." },
      { level: 7, title: "Contraargumento", detail: "Formula la postura opuesta sin caricaturizarla.", action: "Mision: contraargumento con matiz y evidencia." },
      ...library.missions
    ],
    inputCycle: [
      { title: "Predice", detail: "Mira el titulo y di 3 palabras que esperas oir." },
      { title: "Escucha sin texto", detail: "Captura la idea general, no detalles." },
      { title: "Lee y subraya", detail: "Marca palabras repetidas y conectores." },
      { title: "Escucha otra vez", detail: "Une sonido con significado." },
      { title: "Retell", detail: "Cuenta el texto con tus palabras." },
      { title: "Transfiere", detail: "Cambia persona, lugar o problema y repite." }
    ],
    ukbiBands: [
      { name: "Istimewa", score: "725-800", meaning: "dominio casi sin friccion en todos los contextos" },
      { name: "Sangat Unggul", score: "641-724", meaning: "muy alto, con retos en lo academico complejo" },
      { name: "Unggul", score: "578-640", meaning: "muy adecuado para ambitos sociales y profesionales" },
      { name: "Madya", score: "482-577", meaning: "adecuado para comunicacion general" },
      { name: "Semenjana", score: "405-481", meaning: "suficiente, con limitaciones frecuentes" },
      { name: "Marginal", score: "326-404", meaning: "limitado para tareas basicas" },
      { name: "Terbatas", score: "251-325", meaning: "muy limitado, requiere base intensiva" }
    ],
    sources: [
      {
        title: "BIPA Daring - Permendikbud No. 27/2017",
        note: "Ficha oficial del material normativo de competencias BIPA.",
        url: "https://bipa.kemendikdasmen.go.id/belajar_info.php?id=OTY%3D"
      },
      {
        title: "APPBIPA - Standar Kompetensi Lulusan",
        note: "Explica que BIPA se adapta de CEFR y se alinea con UKBI.",
        url: "https://appbipa.or.id/skl-standar-kompetensi-lulusan/"
      },
      {
        title: "Repositorio Kemendikdasmen - Sahabatku Indonesia BIPA 1",
        note: "Material oficial de referencia para el primer nivel.",
        url: "https://repositori.kemendikdasmen.go.id/19081/"
      },
      {
        title: "Repositorio Kemendikdasmen - Sahabatku Indonesia BIPA 6",
        note: "Ejemplo oficial de nivel avanzado profesional.",
        url: "https://repositori.kemendikdasmen.go.id/19073/"
      },
      {
        title: "UKBI - Predikat",
        note: "Rangos oficiales de puntuacion y predicados.",
        url: "https://ukbi.kemendikdasmen.go.id/front-new/page/predikat"
      },
      {
        title: "Badan Bahasa - UKBI Adaptif Merdeka",
        note: "Secciones evaluadas: escuchar, reglas, leer, escribir y hablar.",
        url: "https://badanbahasa.kemendikdasmen.go.id/artikel-detail/3457/satu-tahun-ukbi-adaptif-merdeka"
      }
    ],
    init() {
      this.load();
      this.normalizeBuilderSelection();
      this.prepareVoiceLoading();
      this.rolloverDailyTasks();
      this.dailyResetTimer = setInterval(() => this.rolloverDailyTasks(), 60000);
      if (typeof this.$watch === "function") {
        this.$watch("retellText", () => this.persist());
        this.$watch("journalText", () => this.persist());
        this.$watch("selectedLevel", () => {
          this.showTranslation = false;
          this.showGlossary = false;
          this.retellText = "";
          this.readingIndex = 0;
          this.flashcardIndex = 0;
          this.quizIndex = 0;
          this.shadowIndex = 0;
          this.normalizeBuilderSelection();
          this.persist();
          this.refreshIcons();
        });
      }
      const nextTick = typeof this.$nextTick === "function" ? this.$nextTick.bind(this) : (fn) => setTimeout(fn, 0);
      nextTick(() => {
        this.renderChart();
        this.refreshIcons();
      });
    },
    get currentLevel() {
      return this.levels.find((level) => level.id === Number(this.selectedLevel)) || this.levels[0];
    },
    get currentDeck() {
      return this.readingPool[this.readingIndex % this.readingPool.length] || this.decks[1];
    },
    get readingPool() {
      return [this.decks[this.selectedLevel] || this.decks[1], ...(this.readingDecks[this.selectedLevel] || [])];
    },
    get allFlashcards() {
      return [...this.flashcards, ...this.customCards];
    },
    get libraryWords() {
      return this.flashcards.filter((card) => card.id.indexOf("lib-word-") === 0);
    },
    get tutorWordPool() {
      return this.libraryWords.filter((card) => Number(card.level) === Number(this.selectedLevel));
    },
    get tutorCoreWords() {
      return this.libraryWords.filter((card) =>
        /^lib-word-\d+-\d+$/.test(card.id) && Number(card.level) === Number(this.selectedLevel)
      );
    },
    get levelFlashcards() {
      return this.flashcards.filter((card) => Number(card.level) === Number(this.selectedLevel));
    },
    get levelCardCapacity() {
      return this.levelFlashcards.length;
    },
    get levelVocabularyCapacity() {
      return this.tutorWordPool.length;
    },
    get flashcardPool() {
      return this.allFlashcards.filter((card) => Number(card.level) === Number(this.selectedLevel));
    },
    get currentFlashcard() {
      return this.flashcardPool[this.flashcardIndex % this.flashcardPool.length] || this.flashcards[0];
    },
    get dueCards() {
      const today = this.todayKey();
      return this.flashcardPool.filter((card) => {
        const review = this.flashcardReviews[card.id];
        return !review || review.due <= today;
      });
    },
    get dueLevelCards() {
      const today = this.todayKey();
      return this.levelFlashcards.filter((card) => {
        const review = this.flashcardReviews[card.id];
        return !review || review.due <= today;
      });
    },
    get knownCards() {
      return this.flashcardPool.filter((card) => (this.flashcardReviews[card.id]?.streak || 0) >= 3).length;
    },
    get knownLevelCards() {
      return this.levelFlashcards.filter((card) => (this.flashcardReviews[card.id]?.streak || 0) >= 3).length;
    },
    get quizPool() {
      return this.quizBank.filter((item) => Number(item.level) === Number(this.selectedLevel));
    },
    get levelQuizCapacity() {
      return this.quizBank.filter((item) => Number(item.level) === Number(this.selectedLevel)).length;
    },
    get currentQuiz() {
      return this.quizPool[this.quizIndex % this.quizPool.length] || this.quizBank[0];
    },
    get quizFeedback() {
      if (!this.quizAnswered) return "";
      if (this.quizChoice === this.currentQuiz.answer) return `Correcto. ${this.currentQuiz.note}`;
      return `Casi. Respuesta natural: ${this.currentQuiz.answer}. ${this.currentQuiz.note}`;
    },
    get activeSentenceParts() {
      return {
        subjects: this.sentenceParts.subjects.filter((part) => Number(part.level || 1) === Number(this.selectedLevel)),
        verbs: this.sentenceParts.verbs.filter((part) => Number(part.level || 1) === Number(this.selectedLevel)),
        objects: this.sentenceParts.objects.filter((part) => Number(part.level || 1) === Number(this.selectedLevel)),
        times: this.sentenceParts.times.filter((part) => Number(part.level || 1) === Number(this.selectedLevel))
      };
    },
    get builtSentence() {
      const subject = this.findPart("subjects", this.builderSubject);
      const verb = this.findPart("verbs", this.builderVerb);
      const object = this.findPart("objects", this.builderObject);
      const time = this.findPart("times", this.builderTime);
      const subjectText = subject.id;
      const lowerSubject = subjectText.charAt(0).toLowerCase() + subjectText.slice(1);

      if (this.builderMode === "negative") {
        return {
          id: `${subjectText} tidak ${verb.id} ${object.id} ${time.id}.`,
          es: `${subject.es} no ${verb.es} ${object.es} ${time.es}.`
        };
      }

      if (this.builderMode === "question") {
        return {
          id: `Apakah ${lowerSubject} ${verb.id} ${object.id} ${time.id}?`,
          es: `Pregunta: ${subject.es} ${verb.es} ${object.es} ${time.es}?`
        };
      }

      if (this.builderMode === "passive") {
        return {
          id: `${object.id} ${verb.passive || verb.id} oleh ${lowerSubject} ${time.id}.`,
          es: `${object.es} es/queda ${verb.es} por ${subject.es} ${time.es}.`
        };
      }

      if (this.builderMode === "formal") {
        return {
          id: `${subject.formal || subject.id} ${verb.formal || verb.id} ${object.id} ${time.id}.`,
          es: `Registro formal: ${subject.es} ${verb.es} ${object.es} ${time.es}.`
        };
      }

      return {
        id: `${subjectText} ${verb.id} ${object.id} ${time.id}.`,
        es: `${subject.es} ${verb.es} ${object.es} ${time.es}.`
      };
    },
    get builderCapacity() {
      return this.activeSentenceParts.subjects.length * this.activeSentenceParts.verbs.length * this.activeSentenceParts.objects.length * this.activeSentenceParts.times.length * this.sentenceModes.length;
    },
    get shadowPool() {
      return this.shadowLines.filter((item) => Number(item.level) === Number(this.selectedLevel));
    },
    get levelPhraseCapacity() {
      return this.shadowLines.filter((item) => Number(item.level) === Number(this.selectedLevel)).length;
    },
    get currentShadow() {
      return this.shadowPool[this.shadowIndex % this.shadowPool.length] || this.shadowLines[0];
    },
    get journalPromptPool() {
      return this.journalPrompts.filter((item) => Number(item.level) === Number(this.selectedLevel));
    },
    get levelWritingCapacity() {
      return this.journalPrompts.filter((item) => Number(item.level) === Number(this.selectedLevel)).length;
    },
    get levelReadingCapacity() {
      return this.readingPool.length;
    },
    get currentJournalPrompt() {
      return this.journalPromptPool[this.journalPromptIndex % this.journalPromptPool.length].prompt;
    },
    get journalWords() {
      return this.journalText.trim().split(/\s+/).filter(Boolean).length;
    },
    get journalFeedback() {
      if (this.journalWords === 0) return "Empieza con frases cortas y claras.";
      if (this.journalWords < 25) return "Bien: anade un conector como karena, tetapi o sehingga.";
      if (this.journalWords < 70) return "Muy bien: ahora reescribe una frase en registro mas natural.";
      return "Excelente volumen: reduce repeticion y mejora cohesion.";
    },
    get activeMissions() {
      return this.missions.filter((mission) => Number(mission.level) === Number(this.selectedLevel)).slice(0, 4);
    },
    get retellWords() {
      return this.retellText.trim().split(/\s+/).filter(Boolean).length;
    },
    get retellFeedback() {
      if (this.retellWords === 0) return "Escribe sin mirar la traduccion.";
      if (this.retellWords < 18) return "Bien: ahora anade causa o detalle.";
      if (this.retellWords < 45) return "Buen rango para retelling corto.";
      return "Excelente: reduce y hazlo mas natural.";
    },
    get computedPlan() {
      const m = Number(this.dailyMinutes);
      const input = Math.round(m * 0.46);
      const recall = Math.round(m * 0.18);
      const output = Math.round(m * 0.2);
      const feedback = Math.max(8, m - input - recall - output);
      const goalDetail = {
        travel: "escenas de viaje, comida, direcciones y soluciones rapidas",
        social: "charlas naturales, gustos, experiencias y reaccion emocional",
        work: "reuniones, correos, decisiones y presentaciones",
        academic: "lectura critica, sintesis, UKBI y argumentos"
      }[this.goal];

      return [
        {
          id: "input",
          minutes: input,
          title: "Input comprensible",
          detail: `Escucha y lee ${goalDetail}. Repite el mismo tema con variaciones.`,
          icon: "headphones"
        },
        {
          id: "recall",
          minutes: recall,
          title: "Recuperacion activa",
          detail: "Cierra el texto y reconstruye palabras, frases y conectores clave.",
          icon: "brain"
        },
        {
          id: "output",
          minutes: output,
          title: "Produccion guiada",
          detail: "Retell, shadowing y mini-dialogo con estructuras del input.",
          icon: "mic"
        },
        {
          id: "feedback",
          minutes: feedback,
          title: "Feedback y SRS",
          detail: "Corrige 3 fallos de alto impacto y crea tarjetas reutilizables.",
          icon: "repeat"
        }
      ];
    },
    get overallProgress() {
      const taskScore = this.completedToday.length * 8;
      const retellScore = Math.min(28, this.retellWords);
      const levelScore = (Number(this.selectedLevel) - 1) * 5;
      const cardScore = Math.min(18, this.knownCards * 2);
      const activeScore = Math.min(18, this.quizScore + this.shadowRounds + Math.floor(this.journalWords / 10));
      return Math.min(100, Math.round(taskScore + retellScore + levelScore + cardScore + activeScore));
    },
    selectLevel(level) {
      this.selectedLevel = Number(level);
      this.readingIndex = 0;
      this.normalizeBuilderSelection();
      this.persist();
      this.updateChart();
    },
    nextReading() {
      this.readingIndex = (this.readingIndex + 1) % this.readingPool.length;
      this.showTranslation = false;
      this.showGlossary = false;
      this.retellText = "";
      this.persist();
    },
    toggleToday(id) {
      if (this.completedToday.includes(id)) {
        this.completedToday = this.completedToday.filter((item) => item !== id);
      } else {
        this.completedToday.push(id);
        if (window.confetti) {
          window.confetti({ particleCount: 70, spread: 55, origin: { y: 0.82 } });
        }
      }
      this.persist();
      this.updateChart();
      this.refreshIcons();
    },
    todayKey(offsetDays = 0) {
      const date = new Date();
      date.setDate(date.getDate() + offsetDays);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    rolloverDailyTasks() {
      if (window.resetDailyTasksIfNeeded && window.resetDailyTasksIfNeeded(this, this.todayKey())) {
        this.persist();
        this.copiedCommand = "Nuevo dia: las tareas diarias se han reiniciado.";
      }
    },
    findPart(group, id) {
      return this.activeSentenceParts[group].find((item) => item.id === id) || this.activeSentenceParts[group][0];
    },
    normalizeBuilderSelection() {
      const selections = {
        subjects: "builderSubject",
        verbs: "builderVerb",
        objects: "builderObject",
        times: "builderTime"
      };
      Object.entries(selections).forEach(([group, property]) => {
        const options = this.activeSentenceParts[group];
        if (!options.some((item) => item.id === this[property])) {
          this[property] = options[0].id;
        }
      });
    },
    findIndonesianVoice() {
      if (!("speechSynthesis" in window)) return null;
      return window.speechSynthesis.getVoices().find((voice) =>
        /^(id|in)(-|_)/i.test(voice.lang) || /indones|bahasa|gadis|andika/i.test(voice.name)
      ) || null;
    },
    prepareVoiceLoading() {
      if (!("speechSynthesis" in window) || this.voiceListenerReady) return;
      this.voiceListenerReady = true;
      const onVoicesChanged = () => {
        const voice = this.findIndonesianVoice();
        if (!voice || !this.pendingSpeech) return;
        const pending = this.pendingSpeech;
        this.pendingSpeech = null;
        clearTimeout(this.voicePollTimer);
        this.playIndonesianSpeech(pending.text, pending.rate, voice);
      };
      if (typeof window.speechSynthesis.addEventListener === "function") {
        window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
      } else {
        window.speechSynthesis.onvoiceschanged = onVoicesChanged;
      }
      window.speechSynthesis.getVoices();
    },
    playIndonesianSpeech(text, rate, voice = null) {
      window.speechSynthesis.cancel();
      if (typeof window.speechSynthesis.resume === "function") window.speechSynthesis.resume();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "id-ID";
      utterance.rate = Number(rate);
      utterance.pitch = 1;
      if (voice) utterance.voice = voice;
      utterance.onerror = (event) => {
        if (!["canceled", "interrupted"].includes(event.error)) {
          this.copiedCommand = "No se ha podido iniciar la pronunciacion indonesia en este navegador.";
        }
      };
      this.speechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
      this.copiedCommand = voice
        ? "Reproduciendo con voz indonesia instalada."
        : "Reproduciendo en indonesio con la voz configurada en Windows.";
    },
    speakText(text, rate = 0.82) {
      if (!("speechSynthesis" in window)) {
        this.copiedCommand = "Tu navegador no expone lectura en voz alta.";
        return false;
      }
      this.prepareVoiceLoading();
      const indonesianVoice = this.findIndonesianVoice();
      clearTimeout(this.voicePollTimer);
      this.pendingSpeech = null;
      // Reproducir durante el clic conserva la autorizacion de audio en navegadores externos.
      this.playIndonesianSpeech(text, rate, indonesianVoice);
      return true;
    },
    speakCurrent() {
      this.speakText(this.currentDeck.text, Number(this.speechRate));
    },
    toggleFlashcard() {
      this.flashcardFlipped = !this.flashcardFlipped;
      this.persist();
    },
    nextFlashcard() {
      const pool = this.flashcardPool;
      if (!pool.length) return;
      const currentPosition = pool.findIndex((card) => card.id === this.currentFlashcard.id);
      this.flashcardIndex = (currentPosition + 1 + pool.length) % pool.length;
      this.flashcardFlipped = false;
      this.persist();
    },
    gradeFlashcard(quality) {
      const card = this.currentFlashcard;
      const previous = this.flashcardReviews[card.id] || { interval: 0, streak: 0, ease: 2.3 };
      const next = { ...previous };
      next.lastGrade = quality;
      next.reviewed = this.todayKey();

      if (quality === 0) {
        next.interval = 0;
        next.streak = 0;
        next.ease = Math.max(1.4, previous.ease - 0.2);
        next.due = this.todayKey();
      } else {
        const bonus = quality === 3 ? 1.45 : quality === 2 ? 1 : 0.55;
        next.streak = (previous.streak || 0) + 1;
        next.ease = Math.min(3, Math.max(1.4, previous.ease + (quality - 1) * 0.08));
        next.interval = Math.max(1, Math.round((previous.interval || 1) * next.ease * bonus));
        next.due = this.todayKey(next.interval);
      }

      this.flashcardReviews[card.id] = next;
      this.flashcardFlipped = false;
      this.nextFlashcard();
      this.copiedCommand = `Tarjeta programada para ${next.due}.`;
      this.persist();
      this.refreshIcons();
    },
    answerQuiz(choice) {
      if (this.quizAnswered) return;
      this.quizChoice = choice;
      this.quizAnswered = true;
      if (choice === this.currentQuiz.answer) {
        this.quizScore += 1;
        if (window.confetti) window.confetti({ particleCount: 35, spread: 42, origin: { y: 0.75 } });
      }
      this.persist();
    },
    nextQuiz() {
      this.quizIndex = (this.quizIndex + 1) % this.quizPool.length;
      this.quizChoice = "";
      this.quizAnswered = false;
      this.persist();
      this.refreshIcons();
    },
    saveBuiltSentence() {
      const id = `custom-${Date.now()}`;
      this.customCards.push({
        id,
        level: Number(this.selectedLevel),
        front: this.builtSentence.id,
        back: this.builtSentence.es,
        example: "Frase generada por el constructor."
      });
      this.flashcardIndex = this.flashcardPool.length - 1;
      this.activeTool = "cards";
      this.flashcardFlipped = false;
      this.copiedCommand = "Frase guardada como tarjeta SRS.";
      this.persist();
      this.refreshIcons();
    },
    nextShadow() {
      this.shadowIndex = (this.shadowIndex + 1) % this.shadowPool.length;
      this.persist();
    },
    markShadowRound() {
      this.shadowRounds += 1;
      if (!this.completedToday.includes("output")) this.completedToday.push("output");
      this.copiedCommand = "Ronda registrada. Repite otra vez mas natural y con menos pausa.";
      this.persist();
      if (window.confetti && this.shadowRounds % 5 === 0) {
        window.confetti({ particleCount: 60, spread: 50, origin: { y: 0.78 } });
      }
    },
    newJournalPrompt() {
      this.journalPromptIndex += 1;
      this.journalText = "";
      this.persist();
    },
    startDictation() {
      this.showTranslation = false;
      this.showGlossary = false;
      this.retellText = "";
      this.speakCurrent();
      this.copiedCommand = "Dictado: escucha, pausa mentalmente y escribe lo que recuerdes abajo.";
      this.refreshIcons();
    },
    generateTutorText(includeAllWords = false) {
      const words = includeAllWords ? this.tutorWordPool : this.tutorWordPool.slice(0, 120);
      return words.map((card) => card.example).join(" ");
    },
    activateTutorMode(mode) {
      const prompts = {
        words: "Dame palabras para practicar",
        text: "Genera un texto de mi nivel",
        pronunciation: "Pronunciacion de una frase",
        corpus: "Texto con el vocabulario de mi nivel"
      };
      this.sendTutorPrompt(prompts[mode], mode);
    },
    sendTutorPrompt(preset = "", requestedMode = "") {
      const prompt = String(preset || this.tutorPrompt).trim();
      if (!prompt) return;
      const query = prompt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const level = Number(this.selectedLevel);
      let reply = "";
      let mode = requestedMode || "prompt";
      let title = "Respuesta del tutor";
      this.tutorTurn += 1;
      this.pendingSpeech = null;
      clearTimeout(this.voicePollTimer);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();

      if (/pronuncia|pronunciacion|ucap|sonido/.test(query)) {
        mode = "pronunciation";
        title = "Pronunciacion guiada";
        const phrase = this.currentShadow.id;
        if (this.speakText(phrase, 0.68)) {
          reply = `Escucha y repite tres veces: ${phrase} Primero lento, despues natural. Separa los grupos de sentido antes de acelerar.`;
        } else {
          reply = `Frase para repetir: ${phrase} Este navegador no permite reproducir audio.`;
        }
      } else if (/todas|completa|todo el vocabulario|biblioteca entera|vocabulario de mi nivel/.test(query)) {
        mode = "corpus";
        title = `Biblioteca BIPA ${level}`;
        reply = `Texto acumulativo BIPA ${level} con ${this.levelVocabularyCapacity.toLocaleString("es-ES")} practicas de vocabulario del nivel: ${this.generateTutorText(true)}`;
      } else if (/texto|lectura|historia|parrafo/.test(query)) {
        mode = "text";
        title = `Lectura BIPA ${level}`;
        const pool = this.shadowLines.filter((line) => Number(line.level) === level);
        const start = (this.tutorTurn * 7) % Math.max(1, pool.length - 8);
        const fragment = pool.slice(start, start + 8);
        reply = `Lectura BIPA ${level}: ${fragment.map((line) => line.id).join(" ")} Traduccion de apoyo: ${fragment.map((line) => line.es).join(" ")}`;
      } else if (/corrige|corregir|correccion/.test(query)) {
        mode = "correction";
        title = "Correccion guiada";
        const match = this.tutorWordPool.find((card) => query.indexOf(card.front.toLowerCase()) >= 0);
        reply = match
          ? `Modelo natural con '${match.front}': ${match.example} Reformula tu frase manteniendo ese patron y vuelve a enviarla.`
          : `Escribe la frase indonesa despues de 'corrige:' e incluye una palabra de BIPA ${level}; te dare un patron natural para contrastarla.`;
      } else if (/palabra|vocabulario|kata/.test(query)) {
        mode = "words";
        title = `Palabras BIPA ${level}`;
        const start = ((this.tutorTurn - 1) * 3) % this.tutorCoreWords.length;
        const cards = Array.from({ length: 6 }, (_, index) =>
          this.tutorCoreWords[(start + index) % this.tutorCoreWords.length]
        );
        reply = `Vocabulario BIPA ${level}: ${cards.map((card) => `${card.front} = ${card.back}; ${card.example}`).join(" | ")}`;
      } else {
        const phrase = this.currentShadow;
        reply = `Practica ahora: ${phrase.id} Significado: ${phrase.es} Pideme 'pronunciacion', 'texto', 'palabras' o 'vocabulario de mi nivel'.`;
      }

      this.activeTutorMode = mode;
      this.tutorActivityTitle = title;
      this.tutorResponse = reply;
      this.tutorPrompt = "";
      this.persist();
    },
    downloadTutorCorpus() {
      const lines = [
        "INDONESIO TOTAL - CORPUS DEL NIVEL",
        `BIPA ${this.selectedLevel} | Vocabulario: ${this.levelVocabularyCapacity} | Frases: ${this.levelPhraseCapacity} | Lecturas: ${this.levelReadingCapacity} | Preguntas: ${this.levelQuizCapacity}`,
        "",
        "VOCABULARIO Y EJEMPLOS",
        ...this.tutorWordPool.map((card) => `[BIPA ${card.level}] ${card.front} = ${card.back} | ${card.example}`),
        "",
        "FRASES CONTEXTUALIZADAS",
        ...this.shadowPool.map((line) => `[BIPA ${line.level}] ${line.id} | ${line.es}`)
      ];
      const blob = new Blob([lines.join("\r\n")], { type: "text/plain;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `indonesio-total-bipa-${this.selectedLevel}-corpus.txt`;
      link.click();
      URL.revokeObjectURL(link.href);
      this.copiedCommand = `Corpus BIPA ${this.selectedLevel} generado.`;
    },
    copyCommand(command) {
      const text = command;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
          .then(() => {
            this.copiedCommand = `Copiado: ${text}`;
          })
          .catch(() => {
            this.copiedCommand = `Ejecuta: ${text}`;
          });
      } else {
        this.copiedCommand = `Ejecuta: ${text}`;
      }
    },
    skillValues() {
      const base = 18 + Number(this.selectedLevel) * 7;
      return [
        Math.min(100, base + (this.completedToday.includes("input") ? 18 : 0) + Math.min(10, this.shadowRounds)),
        Math.min(100, base + (this.retellWords > 12 ? 14 : 0) + Math.min(12, this.quizScore)),
        Math.min(100, base + (this.completedToday.includes("output") ? 18 : 0) + Math.min(12, this.shadowRounds)),
        Math.min(100, base + (this.retellWords > 25 ? 20 : 0) + Math.min(16, Math.floor(this.journalWords / 5))),
        Math.min(100, base + (this.completedToday.includes("feedback") ? 16 : 0) + Math.min(18, this.knownCards * 2))
      ];
    },
    renderChart() {
      const canvas = document.getElementById("skillChart");
      if (!canvas) return;
      if (!window.Chart) {
        this.drawFallbackChart(canvas);
        return;
      }
      const existingChart = typeof Chart.getChart === "function" ? Chart.getChart(canvas) : null;
      if (existingChart && existingChart !== this.chart) existingChart.destroy();
      if (this.chart) this.chart.destroy();
      this.chart = new Chart(canvas, {
        type: "radar",
        data: {
          labels: ["Escucha", "Lectura", "Habla", "Escritura", "Kaidah"],
          datasets: [
            {
              label: "Entrenamiento actual",
              data: this.skillValues(),
              borderColor: "#0d7d7b",
              backgroundColor: "rgba(13, 125, 123, 0.18)",
              pointBackgroundColor: "#e8644f",
              pointBorderColor: "#ffffff",
              pointRadius: 4,
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: { display: false },
              grid: { color: "rgba(96, 113, 122, 0.22)" },
              angleLines: { color: "rgba(96, 113, 122, 0.22)" },
              pointLabels: {
                color: "#15212a",
                font: { size: 13, weight: 700 }
              }
            }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    },
    updateChart() {
      if (!this.chart) {
        const canvas = document.getElementById("skillChart");
        if (canvas && !window.Chart) this.drawFallbackChart(canvas);
        return;
      }
      this.chart.data.datasets[0].data = this.skillValues();
      this.chart.update();
    },
    drawFallbackChart(canvas) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const values = this.skillValues();
      const labels = ["Escucha", "Lectura", "Habla", "Escritura", "Kaidah"];
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.34;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(96,113,122,0.25)";
      ctx.fillStyle = "#15212a";
      ctx.font = "700 14px Inter, sans-serif";
      for (let ring = 1; ring <= 4; ring += 1) {
        ctx.beginPath();
        for (let index = 0; index < labels.length; index += 1) {
          const angle = -Math.PI / 2 + (index * Math.PI * 2) / labels.length;
          const r = (radius * ring) / 4;
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;
          if (index === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }
      labels.forEach((label, index) => {
        const angle = -Math.PI / 2 + (index * Math.PI * 2) / labels.length;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
        ctx.stroke();
        const lx = centerX + Math.cos(angle) * (radius + 34);
        const ly = centerY + Math.sin(angle) * (radius + 34);
        ctx.textAlign = lx < centerX - 10 ? "right" : lx > centerX + 10 ? "left" : "center";
        ctx.fillText(label, lx, ly);
      });
      ctx.beginPath();
      values.forEach((value, index) => {
        const angle = -Math.PI / 2 + (index * Math.PI * 2) / values.length;
        const r = (radius * value) / 100;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = "rgba(13,125,123,0.18)";
      ctx.strokeStyle = "#0d7d7b";
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();
    },
    refreshIcons() {
      setTimeout(() => {
        if (window.lucide) window.lucide.createIcons();
      }, 0);
    },
    persist() {
      const state = {
        selectedLevel: this.selectedLevel,
        dailyMinutes: this.dailyMinutes,
        goal: this.goal,
        completedToday: this.completedToday,
        retellText: this.retellText,
        activeTool: this.activeTool,
        flashcardIndex: this.flashcardIndex,
        flashcardFlipped: this.flashcardFlipped,
        flashcardReviews: this.flashcardReviews,
        customCards: this.customCards,
        quizIndex: this.quizIndex,
        quizChoice: this.quizChoice,
        quizAnswered: this.quizAnswered,
        quizScore: this.quizScore,
        builderSubject: this.builderSubject,
        builderVerb: this.builderVerb,
        builderObject: this.builderObject,
        builderTime: this.builderTime,
        builderMode: this.builderMode,
        shadowIndex: this.shadowIndex,
        shadowRounds: this.shadowRounds,
        journalText: this.journalText,
        journalPromptIndex: this.journalPromptIndex,
        readingIndex: this.readingIndex,
        progressDay: this.progressDay
      };
      localStorage.setItem("indonesianTotalState", JSON.stringify(state));
      this.updateChart();
    },
    load() {
      try {
        const state = JSON.parse(localStorage.getItem("indonesianTotalState") || "{}");
        this.selectedLevel = Number(state.selectedLevel || this.selectedLevel);
        this.dailyMinutes = Number(state.dailyMinutes || this.dailyMinutes);
        this.goal = state.goal || this.goal;
        this.completedToday = Array.isArray(state.completedToday) ? state.completedToday : [];
        this.retellText = state.retellText || "";
        this.activeTool = state.activeTool || this.activeTool;
        this.flashcardIndex = Number(state.flashcardIndex || 0);
        this.flashcardFlipped = Boolean(state.flashcardFlipped);
        this.flashcardReviews = state.flashcardReviews && typeof state.flashcardReviews === "object" ? state.flashcardReviews : {};
        this.customCards = Array.isArray(state.customCards) ? state.customCards : [];
        this.quizIndex = Number(state.quizIndex || 0);
        this.quizChoice = state.quizChoice || "";
        this.quizAnswered = Boolean(state.quizAnswered);
        this.quizScore = Number(state.quizScore || 0);
        this.builderSubject = state.builderSubject || this.builderSubject;
        this.builderVerb = state.builderVerb || this.builderVerb;
        this.builderObject = state.builderObject || this.builderObject;
        this.builderTime = state.builderTime || this.builderTime;
        this.builderMode = state.builderMode || this.builderMode;
        this.shadowIndex = Number(state.shadowIndex || 0);
        this.shadowRounds = Number(state.shadowRounds || 0);
        this.journalText = state.journalText || "";
        this.journalPromptIndex = Number(state.journalPromptIndex || 0);
        this.readingIndex = Number(state.readingIndex || 0);
        this.progressDay = state.progressDay || "";
      } catch {
        localStorage.removeItem("indonesianTotalState");
      }
    }
  };
}

let localFallbackStarted = false;

function startLocalFallback() {
  if (localFallbackStarted || window.Alpine) return;
  localFallbackStarted = true;
  const state = indonesianApp();
  window.indonesianTotal = state;

  function evaluate(expression, scope = {}) {
    return Function("state", "scope", `with (state) { with (scope) { return (${expression}); } }`)(state, scope);
  }

  function execute(statement, scope = {}) {
    return Function("state", "scope", `with (state) { with (scope) { ${statement}; } }`)(state, scope);
  }

  function setDeep(path, value) {
    const cleanPath = path.replace(/\s/g, "");
    if (!/^[A-Za-z_$][\w$]*$/.test(cleanPath)) return;
    state[cleanPath] = value;
  }

  function processBindings(root, scope = {}) {
    const nodes = [];
    if (root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      nodes.push(...root.querySelectorAll("[x-text], [x-show], [x-model], [\\@click], [\\@change], [\\@input], [\\:class], [\\:style], [\\:aria-pressed], [\\:value], [\\:data-lucide]"));
      if (root.nodeType === Node.ELEMENT_NODE) nodes.unshift(root);
    }

    nodes.forEach((node) => {
      if (node.tagName === "TEMPLATE") return;

      const textExpression = node.getAttribute("x-text");
      if (textExpression) {
        try {
          node.textContent = evaluate(textExpression, scope);
        } catch {
          node.textContent = "";
        }
      }

      const showExpression = node.getAttribute("x-show");
      if (showExpression) {
        try {
          node.style.display = evaluate(showExpression, scope) ? "" : "none";
        } catch {
          node.style.display = "none";
        }
      }

      const modelExpression = node.getAttribute("x-model") || node.getAttribute("x-model.number");
      if (modelExpression) {
        const isNumber = node.hasAttribute("x-model.number") || node.type === "range";
        const value = evaluate(modelExpression, scope);
        if (node.value !== String(value)) node.value = value;
        if (!node.dataset.fallbackModelBound) {
          node.dataset.fallbackModelBound = "true";
          const eventName = node.tagName === "SELECT" || node.type === "range" ? "change" : "input";
          node.addEventListener(eventName, () => {
            setDeep(modelExpression, isNumber ? Number(node.value) : node.value);
            state.persist();
            render();
          });
        }
      }

      const classExpression = node.getAttribute(":class");
      if (classExpression) {
        try {
          const value = evaluate(classExpression, scope);
          if (value && typeof value === "object") {
            Object.entries(value).forEach(([className, enabled]) => node.classList.toggle(className, Boolean(enabled)));
          }
        } catch {
          // Static classes remain usable.
        }
      }

      [":style", ":aria-pressed", ":value", ":data-lucide"].forEach((attribute) => {
        const expression = node.getAttribute(attribute);
        if (!expression) return;
        try {
          const value = evaluate(expression, scope);
          const realAttribute = attribute.slice(1);
          if (realAttribute === "value") node.value = value;
          node.setAttribute(realAttribute, value);
        } catch {
          // Ignore dynamic attributes that cannot be evaluated yet.
        }
      });

      ["@click", "@change", "@input"].forEach((eventAttribute) => {
        const statement = node.getAttribute(eventAttribute);
        if (!statement) return;
        const key = `fallback${eventAttribute.slice(1)}Bound`;
        if (node.dataset[key]) return;
        node.dataset[key] = "true";
        node.addEventListener(eventAttribute.slice(1), () => {
          execute(statement, scope);
          state.persist();
          render();
        });
      });
    });
  }

  function renderTemplates() {
    document.querySelectorAll("[data-fallback-rendered]").forEach((node) => node.remove());
    document.querySelectorAll("template[x-for]").forEach((template) => {
      const expression = template.getAttribute("x-for");
      const match = expression && expression.match(/^\s*(\w+)\s+in\s+(.+?)\s*$/);
      if (!match) return;
      const [, itemName, listExpression] = match;
      let list = [];
      try {
        list = evaluate(listExpression);
      } catch {
        list = [];
      }
      let cursor = template;
      list.forEach((item, index) => {
        const fragment = template.content.cloneNode(true);
        const localScope = { [itemName]: item, index };
        processBindings(fragment, localScope);
        const children = Array.from(fragment.children);
        children.forEach((child) => {
          child.dataset.fallbackRendered = "true";
          child.dataset.fallbackTemplate = expression;
          cursor.after(child);
          cursor = child;
        });
      });
    });
  }

  function render() {
    processBindings(document.body);
    renderTemplates();
    state.updateChart();
    state.refreshIcons();
  }

  state.init();
  render();
}

window.addEventListener("load", () => {
  setTimeout(() => {
    if (!window.Alpine) startLocalFallback();
  }, 300);
});
