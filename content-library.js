(function () {
  const vocabulary = {
    1: [
      ["nama", "nombre", "Nama saya Dita."], ["asal", "origen", "Saya berasal dari Spanyol."],
      ["rumah", "casa", "Rumah saya dekat pasar."], ["kamar", "habitacion", "Kamar ini bersih."],
      ["jalan", "calle / camino", "Jalan itu ramai."], ["pasar", "mercado", "Saya pergi ke pasar."],
      ["makan", "comer", "Saya makan nasi."], ["minum", "beber", "Dia minum air."],
      ["nasi", "arroz cocido", "Saya pesan nasi goreng."], ["air", "agua", "Tolong beri saya air."],
      ["beli", "comprar", "Saya membeli buah."], ["harga", "precio", "Harganya murah."],
      ["besar", "grande", "Tas ini besar."], ["kecil", "pequeno", "Saya mau porsi kecil."],
      ["pagi", "manana", "Saya belajar pagi ini."], ["malam", "noche", "Selamat malam."],
      ["kanan", "derecha", "Belok kanan."], ["kiri", "izquierda", "Bank ada di kiri."],
      ["tolong", "por favor / ayudar", "Tolong bicara pelan."], ["terima kasih", "gracias", "Terima kasih banyak."]
    ],
    2: [
      ["bangun", "despertarse", "Saya bangun pukul enam."], ["mandi", "banarse", "Ia mandi sebelum bekerja."],
      ["memasak", "cocinar", "Kami memasak di dapur."], ["mencuci", "lavar", "Saya mencuci pakaian."],
      ["kantor", "oficina", "Kantor saya dekat halte."], ["sekolah", "escuela", "Anak itu pergi ke sekolah."],
      ["keluarga", "familia", "Keluarga saya tinggal di Surabaya."], ["tetangga", "vecino", "Tetangga saya ramah."],
      ["sehat", "sano", "Saya merasa sehat."], ["sakit", "enfermo / dolor", "Kepala saya sakit."],
      ["apotek", "farmacia", "Apotek buka sampai malam."], ["halte", "parada", "Bus berhenti di halte."],
      ["jadwal", "horario", "Saya memeriksa jadwal."], ["terlambat", "llegar tarde", "Kereta tidak terlambat."],
      ["ramai", "concurrido", "Pasar sangat ramai."], ["tenang", "tranquilo", "Tempat ini tenang."],
      ["mudah", "facil", "Aplikasi ini mudah digunakan."], ["sulit", "dificil", "Soal itu cukup sulit."],
      ["biasanya", "normalmente", "Biasanya saya naik bus."], ["kadang-kadang", "a veces", "Kadang-kadang saya berjalan kaki."]
    ],
    3: [
      ["pengalaman", "experiencia", "Pengalaman itu sangat menarik."], ["liburan", "vacaciones", "Kami berlibur ke Bali."],
      ["mengunjungi", "visitar", "Saya mengunjungi museum."], ["mencoba", "probar / intentar", "Dia mencoba makanan baru."],
      ["bertemu", "encontrarse", "Saya bertemu teman lama."], ["berangkat", "salir / partir", "Kami berangkat pagi."],
      ["tiba", "llegar", "Kereta tiba tepat waktu."], ["rencana", "plan", "Rencana saya berubah."],
      ["tujuan", "objetivo / destino", "Tujuan perjalanan ini jelas."], ["alasan", "razon", "Ada dua alasan penting."],
      ["karena", "porque", "Saya tinggal di rumah karena hujan."], ["supaya", "para que", "Belajar supaya lebih lancar."],
      ["walaupun", "aunque", "Walaupun sibuk, ia tetap datang."], ["sehingga", "por lo que", "Hujan deras sehingga jalan macet."],
      ["berhasil", "tener exito", "Saya berhasil menyelesaikan tugas."], ["gagal", "fracasar", "Rencana itu gagal."],
      ["berubah", "cambiar", "Jadwal berubah hari ini."], ["memutuskan", "decidir", "Kami memutuskan untuk pergi."],
      ["pendapat", "opinion", "Menurut pendapat saya, ini baik."], ["harap", "esperar / desear", "Saya berharap cuaca cerah."]
    ],
    4: [
      ["laporan", "informe", "Saya menulis laporan singkat."], ["pengamatan", "observacion", "Pengamatan dilakukan selama seminggu."],
      ["penyebab", "causa", "Penyebab masalah belum jelas."], ["akibat", "consecuencia", "Akibatnya, jalan menjadi macet."],
      ["meningkat", "aumentar", "Jumlah penumpang meningkat."], ["menurun", "disminuir", "Biaya operasional menurun."],
      ["perbandingan", "comparacion", "Perbandingan ini cukup adil."], ["kecenderungan", "tendencia", "Kecenderungan itu terlihat jelas."],
      ["lingkungan", "entorno / medio ambiente", "Lingkungan perlu dijaga."], ["kebijakan", "politica / norma", "Kebijakan baru diumumkan."],
      ["layanan", "servicio", "Layanan publik harus membaik."], ["masyarakat", "sociedad", "Masyarakat memberikan masukan."],
      ["meskipun", "aunque / pese a", "Meskipun mahal, layanan itu cepat."], ["namun", "sin embargo", "Namun, hasilnya berbeda."],
      ["selain itu", "ademas", "Selain itu, biayanya rendah."], ["akibatnya", "como resultado", "Akibatnya, warga menunggu lama."],
      ["diusulkan", "propuesto", "Solusi baru diusulkan."], ["dilaporkan", "reportado", "Perubahan dilaporkan kemarin."],
      ["relevan", "relevante", "Data ini relevan."], ["efektif", "eficaz", "Program itu cukup efektif."]
    ],
    5: [
      ["perhatian", "atencion", "Perhatian mudah terpecah."], ["kebiasaan", "habito", "Kebiasaan membaca perlu dibangun."],
      ["pandangan", "perspectiva", "Pandangan mereka berbeda."], ["pertimbangan", "consideracion", "Ada beberapa pertimbangan."],
      ["tantangan", "reto", "Tantangan utama adalah waktu."], ["peluang", "oportunidad", "Teknologi membuka peluang."],
      ["perubahan", "cambio", "Perubahan sosial berlangsung cepat."], ["dampak", "impacto", "Dampaknya perlu diteliti."],
      ["kesenjangan", "brecha", "Kesenjangan digital masih besar."], ["kepercayaan", "confianza", "Kepercayaan publik menurun."],
      ["menyoroti", "destacar", "Artikel itu menyoroti masalah."], ["membandingkan", "comparar", "Penulis membandingkan dua pendekatan."],
      ["mempertanyakan", "cuestionar", "Warga mempertanyakan keputusan."], ["mengakui", "reconocer", "Ia mengakui adanya risiko."],
      ["sebaliknya", "por el contrario", "Sebaliknya, kelompok lain setuju."], ["sementara itu", "mientras tanto", "Sementara itu, diskusi berlanjut."],
      ["dengan demikian", "por tanto", "Dengan demikian, evaluasi diperlukan."], ["meskipun demikian", "aun asi", "Meskipun demikian, usul diterima."],
      ["berkelanjutan", "sostenible", "Solusi berkelanjutan dibutuhkan."], ["menyeluruh", "integral", "Evaluasi menyeluruh perlu dilakukan."]
    ],
    6: [
      ["pemangku kepentingan", "parte interesada", "Pemangku kepentingan diundang."], ["pelaksanaan", "implementacion", "Pelaksanaan proyek tertunda."],
      ["kelayakan", "viabilidad", "Kelayakan usulan dinilai."], ["kepatuhan", "cumplimiento", "Kepatuhan hukum wajib dijaga."],
      ["anggaran", "presupuesto", "Anggaran telah disetujui."], ["sumber daya", "recursos", "Sumber daya masih terbatas."],
      ["risiko", "riesgo", "Risiko harus dikelola."], ["prioritas", "prioridad", "Prioritas tim sudah jelas."],
      ["perundingan", "negociacion", "Perundingan berjalan konstruktif."], ["kesepakatan", "acuerdo", "Kesepakatan dicapai bersama."],
      ["mengevaluasi", "evaluar", "Komite mengevaluasi proposal."], ["mengalokasikan", "asignar", "Direktur mengalokasikan anggaran."],
      ["mengantisipasi", "anticipar", "Tim mengantisipasi kendala."], ["mengkoordinasikan", "coordinar", "Ia mengkoordinasikan pelaksanaan."],
      ["sehubungan dengan", "en relacion con", "Sehubungan dengan perubahan, rapat dijadwalkan."], ["dalam rangka", "con el fin de", "Dalam rangka evaluasi, data dikumpulkan."],
      ["perlu dicatat", "conviene senalar", "Perlu dicatat bahwa risiko meningkat."], ["ditindaklanjuti", "seguido / gestionado", "Temuan itu harus ditindaklanjuti."],
      ["akuntabel", "responsable / auditable", "Proses harus akuntabel."], ["strategis", "estrategico", "Keputusan itu bersifat strategis."]
    ],
    7: [
      ["kerangka konseptual", "marco conceptual", "Kerangka konseptual perlu dijelaskan."], ["metodologi", "metodologia", "Metodologi penelitian diperdebatkan."],
      ["validitas", "validez", "Validitas data harus diuji."], ["implikasi", "implicacion", "Implikasi kebijakan cukup luas."],
      ["paradigma", "paradigma", "Paradigma lama mulai bergeser."], ["wacana", "discurso", "Wacana publik terus berkembang."],
      ["nuansa", "matiz", "Nuansa makna mudah hilang."], ["keterkaitan", "interrelacion", "Keterkaitan variabel dianalisis."],
      ["kontradiksi", "contradiccion", "Kontradiksi itu belum terjawab."], ["generalisasi", "generalizacion", "Generalisasi berlebihan harus dihindari."],
      ["mengartikulasikan", "articular", "Penulis mengartikulasikan kritiknya."], ["mempermasalahkan", "problematizar", "Esai itu mempermasalahkan asumsi."],
      ["menyanggah", "refutar", "Peneliti menyanggah klaim tersebut."], ["mensintesis", "sintetizar", "Mahasiswa mensintesis tiga sumber."],
      ["kendati demikian", "no obstante", "Kendati demikian, kesimpulannya kuat."], ["sejauh mana", "hasta que punto", "Sejauh mana temuan ini berlaku?"], 
      ["pada hakikatnya", "en esencia", "Pada hakikatnya, isu itu normatif."], ["tidak serta-merta", "no automaticamente", "Korelasi tidak serta-merta berarti sebab."],
      ["multidimensional", "multidimensional", "Masalah ini bersifat multidimensional."], ["berimbang", "equilibrado", "Analisis berimbang lebih meyakinkan."]
    ]
  };

  const scenes = {
    1: {
      subjects: [["Saya", "Yo"], ["Dia", "El/Ella"], ["Ibu itu", "Esa senora"], ["Teman saya", "Mi amigo"], ["Kami", "Nosotros"]],
      actions: [["membeli nasi", "compra arroz"], ["memesan teh", "pide te"], ["mencari rumah", "busca una casa"], ["minum air", "bebe agua"], ["bertanya harga", "pregunta el precio"], ["berjalan ke pasar", "camina al mercado"], ["belajar kata baru", "aprende una palabra nueva"], ["membawa tas kecil", "lleva una bolsa pequena"], ["tinggal dekat stasiun", "vive cerca de la estacion"], ["membuka pintu", "abre la puerta"], ["menunggu bus", "espera el autobus"], ["mengucapkan terima kasih", "da las gracias"]],
      contexts: [["pagi ini", "esta manana"], ["di warung", "en la cafeteria"], ["di rumah", "en casa"], ["sekarang", "ahora"], ["bersama keluarga", "con la familia"], ["dengan pelan", "despacio"], ["sebelum malam", "antes de la noche"], ["di dekat pasar", "cerca del mercado"], ["setelah makan", "despues de comer"], ["pada hari Minggu", "el domingo"]]
    },
    2: {
      subjects: [["Saya", "Yo"], ["Rina", "Rina"], ["Tetangga saya", "Mi vecino"], ["Kami", "Nosotros"], ["Keluarga itu", "Esa familia"]],
      actions: [["memeriksa jadwal bus", "consulta el horario del autobus"], ["memasak makan malam", "cocina la cena"], ["mencari apotek", "busca una farmacia"], ["membersihkan kamar", "limpia la habitacion"], ["memilih kos baru", "elige un alojamiento nuevo"], ["mengunjungi dokter", "visita al medico"], ["menjelaskan rutinitas", "explica la rutina"], ["membayar tagihan", "paga la factura"], ["menunggu di halte", "espera en la parada"], ["berolahraga ringan", "hace ejercicio suave"], ["mencuci pakaian", "lava la ropa"], ["membandingkan dua tempat", "compara dos lugares"]],
      contexts: [["setiap pagi", "cada manana"], ["karena lebih praktis", "porque es mas practico"], ["setelah bekerja", "despues de trabajar"], ["ketika hujan", "cuando llueve"], ["bersama adiknya", "con su hermano menor"], ["sebelum berangkat", "antes de salir"], ["pada akhir pekan", "el fin de semana"], ["dengan hati-hati", "con cuidado"], ["di pusat kota", "en el centro"], ["karena sedang sakit", "porque esta enfermo"]]
    },
    3: {
      subjects: [["Saya", "Yo"], ["Dimas", "Dimas"], ["Kelompok kami", "Nuestro grupo"], ["Teman lama saya", "Mi viejo amigo"], ["Mereka", "Ellos"]],
      actions: [["merencanakan perjalanan singkat", "planea un viaje corto"], ["menceritakan pengalaman lucu", "cuenta una experiencia divertida"], ["memilih kereta pagi", "elige el tren de la manana"], ["mencoba makanan daerah", "prueba comida regional"], ["menjelaskan alasan keputusan", "explica el motivo de la decision"], ["mengubah jadwal pertemuan", "cambia el horario de la reunion"], ["berharap cuaca cerah", "espera buen tiempo"], ["menyelesaikan tugas sulit", "termina una tarea dificil"], ["menawarkan bantuan", "ofrece ayuda"], ["membuat rencana cadangan", "hace un plan alternativo"], ["membagikan pendapat", "comparte su opinion"], ["menghubungi teman", "contacta a un amigo"]],
      contexts: [["akhir pekan ini", "este fin de semana"], ["supaya tiba tepat waktu", "para llegar a tiempo"], ["walaupun sangat sibuk", "aunque esta muy ocupado"], ["karena ada perubahan", "porque hay un cambio"], ["setelah menerima kabar", "despues de recibir noticias"], ["sebelum membeli tiket", "antes de comprar el billete"], ["dengan penuh semangat", "con entusiasmo"], ["ketika berada di Bandung", "cuando esta en Bandung"], ["sehingga semua siap", "por lo que todos estan preparados"], ["menurut pendapatnya", "en su opinion"]]
    },
    4: {
      subjects: [["Peneliti", "El investigador"], ["Petugas", "El funcionario"], ["Tim kota", "El equipo municipal"], ["Warga", "Los ciudadanos"], ["Laporan itu", "Ese informe"]],
      actions: [["mencatat jumlah penumpang", "registra el numero de pasajeros"], ["menjelaskan penyebab kemacetan", "explica la causa del atasco"], ["mengusulkan layanan baru", "propone un servicio nuevo"], ["membandingkan biaya transportasi", "compara el coste del transporte"], ["melaporkan perubahan lingkungan", "informa de cambios ambientales"], ["menilai kebijakan publik", "evalua una politica publica"], ["mengamati kecenderungan harian", "observa una tendencia diaria"], ["mengukur dampak program", "mide el impacto del programa"], ["memperbaiki layanan", "mejora el servicio"], ["mengumpulkan masukan masyarakat", "recoge aportes de la sociedad"], ["mengurangi biaya", "reduce el coste"], ["meningkatkan akses", "aumenta el acceso"]],
      contexts: [["berdasarkan data terbaru", "segun los datos recientes"], ["selama satu minggu", "durante una semana"], ["namun hasilnya belum stabil", "sin embargo el resultado no es estable"], ["agar lebih efektif", "para ser mas eficaz"], ["di wilayah pusat kota", "en la zona central"], ["akibatnya lalu lintas berubah", "como resultado cambia el trafico"], ["meskipun anggaran terbatas", "aunque el presupuesto es limitado"], ["dalam laporan resmi", "en un informe oficial"], ["pada jam sibuk", "en hora punta"], ["selain itu biaya menurun", "ademas el coste disminuye"]]
    },
    5: {
      subjects: [["Penulis", "El autor"], ["Masyarakat", "La sociedad"], ["Artikel tersebut", "Ese articulo"], ["Pengamat", "El analista"], ["Generasi muda", "La generacion joven"]],
      actions: [["menyoroti dampak teknologi", "destaca el impacto de la tecnologia"], ["membandingkan dua pandangan", "compara dos perspectivas"], ["mempertanyakan kebiasaan digital", "cuestiona el habito digital"], ["mengakui tantangan sosial", "reconoce un reto social"], ["membangun kepercayaan publik", "construye confianza publica"], ["mengurangi kesenjangan akses", "reduce la brecha de acceso"], ["menilai solusi berkelanjutan", "evalua una solucion sostenible"], ["mengubah pola perhatian", "cambia el patron de atencion"], ["mendorong refleksi", "fomenta la reflexion"], ["menyajikan perspektif lain", "presenta otra perspectiva"], ["menjelaskan perubahan sosial", "explica el cambio social"], ["memperluas peluang belajar", "amplia oportunidades de aprendizaje"]],
      contexts: [["dalam jangka panjang", "a largo plazo"], ["sementara itu diskusi berlanjut", "mientras tanto continua el debate"], ["dengan demikian evaluasi dibutuhkan", "por tanto se necesita evaluacion"], ["meskipun demikian usulnya relevan", "aun asi su propuesta es relevante"], ["melalui contoh konkret", "mediante ejemplos concretos"], ["di ruang publik", "en el espacio publico"], ["tanpa menyederhanakan masalah", "sin simplificar el problema"], ["dari sudut pandang berbeda", "desde otra perspectiva"], ["ketika informasi berlimpah", "cuando abunda la informacion"], ["sebelum mengambil kesimpulan", "antes de sacar conclusiones"]]
    },
    6: {
      subjects: [["Manajer", "La gerente"], ["Komite", "El comite"], ["Tim proyek", "El equipo de proyecto"], ["Direktur", "El director"], ["Pemangku kepentingan", "Las partes interesadas"]],
      actions: [["mengevaluasi kelayakan usulan", "evalua la viabilidad de la propuesta"], ["mengalokasikan sumber daya", "asigna recursos"], ["mengantisipasi risiko operasional", "anticipa riesgos operativos"], ["mengkoordinasikan pelaksanaan proyek", "coordina la implementacion del proyecto"], ["meninjau kepatuhan hukum", "revisa el cumplimiento legal"], ["menetapkan prioritas strategis", "establece prioridades estrategicas"], ["merumuskan kesepakatan", "formula un acuerdo"], ["menyampaikan hasil perundingan", "comunica el resultado de la negociacion"], ["memeriksa anggaran", "revisa el presupuesto"], ["menindaklanjuti temuan", "da seguimiento a los hallazgos"], ["mendokumentasikan keputusan", "documenta la decision"], ["menyiapkan peluncuran", "prepara el lanzamiento"]],
      contexts: [["sehubungan dengan perubahan jadwal", "en relacion con el cambio de calendario"], ["dalam rangka evaluasi tahunan", "con el fin de realizar la evaluacion anual"], ["sebelum keputusan disetujui", "antes de aprobar la decision"], ["agar proses tetap akuntabel", "para mantener el proceso responsable"], ["berdasarkan prioritas organisasi", "segun las prioridades de la organizacion"], ["meskipun sumber daya terbatas", "aunque los recursos son limitados"], ["secara sistematis", "de forma sistematica"], ["dalam rapat lintas tim", "en una reunion entre equipos"], ["dengan memperhatikan dampak pelanggan", "considerando el impacto en clientes"], ["sebelum fase berikutnya", "antes de la siguiente fase"]]
    },
    7: {
      subjects: [["Peneliti", "El investigador"], ["Tulisan akademik itu", "Ese texto academico"], ["Pembaca kritis", "El lector critico"], ["Kajian tersebut", "Ese estudio"], ["Pakar", "El experto"]],
      actions: [["mengartikulasikan kerangka konseptual", "articula un marco conceptual"], ["mempermasalahkan asumsi dasar", "problematiza un supuesto basico"], ["menyanggah generalisasi berlebihan", "refuta una generalizacion excesiva"], ["mensintesis tiga sumber", "sintetiza tres fuentes"], ["menilai validitas metodologi", "evalua la validez metodologica"], ["mengungkap kontradiksi wacana", "revela una contradiccion discursiva"], ["menjelaskan implikasi kebijakan", "explica una implicacion politica"], ["menelusuri keterkaitan variabel", "rastrea la relacion entre variables"], ["menguraikan nuansa makna", "expone el matiz de significado"], ["membandingkan paradigma", "compara paradigmas"], ["menyusun analisis berimbang", "elabora un analisis equilibrado"], ["menafsirkan bukti", "interpreta la evidencia"]],
      contexts: [["kendati demikian secara hati-hati", "no obstante con cautela"], ["sejauh mana data mendukungnya", "hasta donde lo respaldan los datos"], ["pada hakikatnya dalam konteks ini", "en esencia en este contexto"], ["tanpa menyimpulkan secara tergesa-gesa", "sin concluir precipitadamente"], ["melalui pendekatan multidimensional", "mediante un enfoque multidimensional"], ["dalam perdebatan kontemporer", "en el debate contemporaneo"], ["dengan mempertahankan nuansa", "manteniendo el matiz"], ["sebelum menerima klaim utama", "antes de aceptar la tesis principal"], ["dari perspektif metodologis", "desde una perspectiva metodologica"], ["secara berimbang dan tepat", "de forma equilibrada y precisa"]]
    }
  };

  const builderParts = {
    subjects: [
      ["Saya", "yo", "Saya"], ["Kami", "nosotros", "Kami"], ["Dia", "el/ella", "Ia"], ["Teman saya", "mi amigo", "Rekan saya"],
      ["Keluarga saya", "mi familia", "Keluarga saya"], ["Petugas itu", "ese funcionario", "Petugas tersebut"], ["Peneliti", "el investigador", "Peneliti tersebut"],
      ["Tim proyek", "el equipo de proyecto", "Tim proyek"], ["Manajer", "la gerente", "Manajer tersebut"], ["Komite", "el comite", "Komite tersebut"],
      ["Masyarakat", "la sociedad", "Masyarakat"], ["Penulis", "el autor", "Penulis tersebut"], ["Pakar", "el experto", "Pakar tersebut"], ["Pembaca", "el lector", "Pembaca tersebut"]
    ],
    verbs: [
      ["membaca", "lee", "dibaca", "menelaah"], ["menulis", "escribe", "ditulis", "merumuskan"], ["memilih", "elige", "dipilih", "menentukan"],
      ["membeli", "compra", "dibeli", "memperoleh"], ["menjelaskan", "explica", "dijelaskan", "memaparkan"], ["membandingkan", "compara", "dibandingkan", "membandingkan"],
      ["mengamati", "observa", "diamati", "meninjau"], ["mengukur", "mide", "diukur", "mengevaluasi"], ["mengusulkan", "propone", "diusulkan", "mengajukan"],
      ["menilai", "evalua", "dinilai", "mengevaluasi"], ["mendiskusikan", "debate", "didiskusikan", "membahas"], ["menyoroti", "destaca", "disoroti", "menekankan"],
      ["mempertimbangkan", "considera", "dipertimbangkan", "mempertimbangkan"], ["mengurangi", "reduce", "dikurangi", "meminimalkan"], ["meningkatkan", "mejora", "ditingkatkan", "mengoptimalkan"],
      ["mengalokasikan", "asigna", "dialokasikan", "mengalokasikan"], ["mengantisipasi", "anticipa", "diantisipasi", "memitigasi"], ["mengkoordinasikan", "coordina", "dikoordinasikan", "mengkoordinasikan"],
      ["menganalisis", "analiza", "dianalisis", "menganalisis"], ["mensintesis", "sintetiza", "disintesis", "mensintesis"], ["menyanggah", "refuta", "disanggah", "menyanggah"]
    ],
    objects: [
      ["artikel pendek", "un articulo corto"], ["menu makan siang", "un menu de almuerzo"], ["jadwal perjalanan", "un horario de viaje"], ["pesan singkat", "un mensaje corto"],
      ["rencana akhir pekan", "un plan de fin de semana"], ["pengalaman baru", "una experiencia nueva"], ["laporan pengamatan", "un informe de observacion"], ["biaya transportasi", "el coste de transporte"],
      ["kebijakan publik", "una politica publica"], ["layanan masyarakat", "un servicio publico"], ["dampak teknologi", "el impacto tecnologico"], ["kesenjangan digital", "la brecha digital"],
      ["solusi berkelanjutan", "una solucion sostenible"], ["pandangan berbeda", "una perspectiva distinta"], ["risiko komunikasi", "el riesgo de comunicacion"], ["kesiapan operasional", "la preparacion operativa"],
      ["kelayakan usulan", "la viabilidad de la propuesta"], ["sumber daya proyek", "los recursos del proyecto"], ["kerangka konseptual", "el marco conceptual"], ["validitas data", "la validez de los datos"],
      ["implikasi kebijakan", "la implicacion politica"], ["kontradiksi argumen", "la contradiccion del argumento"], ["tiga sumber akademik", "tres fuentes academicas"], ["nuansa makna", "el matiz de significado"]
    ],
    times: [
      ["pagi ini", "esta manana"], ["setiap hari", "cada dia"], ["setelah rapat", "despues de la reunion"], ["sebelum berangkat", "antes de salir"],
      ["karena lebih praktis", "porque es mas practico"], ["supaya lebih jelas", "para que sea mas claro"], ["walaupun waktunya terbatas", "aunque el tiempo es limitado"], ["berdasarkan data", "segun los datos"],
      ["selama satu minggu", "durante una semana"], ["dalam laporan resmi", "en un informe oficial"], ["dengan contoh konkret", "con ejemplos concretos"], ["dari sudut pandang lain", "desde otra perspectiva"],
      ["dalam jangka panjang", "a largo plazo"], ["secara sistematis", "de forma sistematica"], ["sebelum disetujui", "antes de aprobarlo"], ["agar tetap akuntabel", "para que siga siendo responsable"],
      ["melalui analisis kritis", "mediante analisis critico"], ["tanpa kehilangan nuansa", "sin perder el matiz"], ["sejauh data mendukung", "hasta donde lo apoyan los datos"], ["dalam konteks yang lebih luas", "en un contexto mas amplio"]
    ]
  };
  const builderPartLevels = {
    subjects: [1, 1, 1, 3, 2, 4, 4, 6, 6, 6, 5, 5, 7, 7],
    verbs: [1, 1, 2, 1, 3, 3, 4, 4, 4, 5, 5, 5, 5, 4, 4, 6, 6, 6, 7, 7, 7],
    objects: [1, 1, 2, 1, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7],
    times: [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7]
  };

  function makeLibrary() {
    const flashcards = [];
    const quizzes = [];
    const shadowLines = [];
    const journalPrompts = [];
    const readings = {};
    const missions = [];

    function variedChoices(answer, alternativeA, alternativeB, index) {
      const choices = [answer, alternativeA, alternativeB];
      const shift = index % choices.length;
      return choices.slice(shift).concat(choices.slice(0, shift));
    }

    function lowerFirst(value) {
      return value.charAt(0).toLowerCase() + value.slice(1);
    }

    const vocabularyPracticeFrames = [
      "Recuerda el significado",
      "Lee y reconoce",
      "Prepara una respuesta",
      "Repite en voz alta",
      "Usa en un mensaje",
      "Usa en una pregunta",
      "Relaciona con tu vida",
      "Cambia el contexto",
      "Explica a otra persona",
      "Escribe una variacion"
    ];

    Object.keys(vocabulary).forEach((levelKey) => {
      const level = Number(levelKey);
      const words = vocabulary[level];
      const scene = scenes[level];
      const phrases = [];

      words.forEach((word, index) => {
        flashcards.push({
          id: `lib-word-${level}-${index}`,
          level,
          front: word[0],
          back: word[1],
          example: word[2]
        });
        quizzes.push({
          level,
          prompt: `Que significa '${word[0]}'?`,
          choices: variedChoices(word[1], words[(index + 3) % words.length][1], words[(index + 9) % words.length][1], index),
          answer: word[1],
          note: `Ejemplo: ${word[2]}`
        });
        scene.contexts.forEach((context, contextIndex) => {
          vocabularyPracticeFrames.forEach((instruction, instructionIndex) => {
            flashcards.push({
              id: `lib-word-practice-${level}-${index}-${contextIndex}-${instructionIndex}`,
              level,
              front: `${word[0]} - ${instruction}`,
              back: `${word[1]} | Contexto: ${context[1]}`,
              example: `${word[2]} Latihan: ${context[0]}.`
            });
          });
        });
      });

      scene.subjects.forEach((subject, subjectIndex) => {
        scene.actions.forEach((action, actionIndex) => {
          scene.contexts.forEach((context, contextIndex) => {
            [
              { id: `${subject[0]} ${action[0]} ${context[0]}.`, es: `${subject[1]} ${action[1]} ${context[1]}.` },
              { id: `${subject[0]} tidak ${action[0]} ${context[0]}.`, es: `${subject[1]} no ${action[1]} ${context[1]}.` },
              { id: `Apakah ${lowerFirst(subject[0])} ${action[0]} ${context[0]}?`, es: `¿${subject[1]} ${action[1]} ${context[1]}?` },
              { id: `${subject[0]} akan ${action[0]} ${context[0]}.`, es: `Plan previsto: ${subject[1]} ${action[1]} ${context[1]}.` }
            ].forEach((variant) => {
              phrases.push({ level, ...variant, subject, action, context, subjectIndex, actionIndex, contextIndex });
            });
          });
        });
      });

      phrases.forEach((phrase, index) => {
        shadowLines.push(phrase);
        flashcards.push({
          id: `lib-phrase-${level}-${index}`,
          level,
          front: phrase.id,
          back: phrase.es,
          example: "Frase contextual para comprension y produccion."
        });
        const alternateA = phrases[(index + 7) % phrases.length];
        const alternateB = phrases[(index + 23) % phrases.length];
        const otherSubjectA = scene.subjects[(phrase.subjectIndex + 1) % scene.subjects.length][0];
        const otherSubjectB = scene.subjects[(phrase.subjectIndex + 3) % scene.subjects.length][0];
        const otherContextA = scene.contexts[(phrase.contextIndex + 2) % scene.contexts.length][0];
        const otherContextB = scene.contexts[(phrase.contextIndex + 6) % scene.contexts.length][0];

        quizzes.push({
          level,
          prompt: `Comprende: ${phrase.id}`,
          choices: variedChoices(phrase.es, alternateA.es, alternateB.es, index),
          answer: phrase.es,
          note: "Identifica sujeto, accion y contexto antes de traducir."
        });
        quizzes.push({
          level,
          prompt: `Elige la frase indonesia que significa: ${phrase.es}`,
          choices: variedChoices(phrase.id, alternateA.id, alternateB.id, index + 1),
          answer: phrase.id,
          note: "Compara el significado completo antes de responder."
        });
        quizzes.push({
          level,
          prompt: `Completa el sujeto: ___ ${phrase.action[0]} ${phrase.context[0]}.`,
          choices: variedChoices(phrase.subject[0], otherSubjectA, otherSubjectB, index + 2),
          answer: phrase.subject[0],
          note: "El sujeto determina quien realiza la accion."
        });
        quizzes.push({
          level,
          prompt: `Completa el contexto: ${phrase.subject[0]} ${phrase.action[0]} ___.`,
          choices: variedChoices(phrase.context[0], otherContextA, otherContextB, index),
          answer: phrase.context[0],
          note: "El contexto situa la accion en tiempo, lugar o circunstancia."
        });
      });

      readings[level] = [];
      for (let index = 0; index < phrases.length; index += 4) {
        const group = phrases.slice(index, index + 4);
        readings[level].push({
          topic: `Biblioteca BIPA ${level} - Escena ${readings[level].length + 1}`,
          title: `Latihan bacaan ${readings[level].length + 1}`,
          text: group.map((item) => item.id).join(" "),
          translation: group.map((item) => item.es).join(" "),
          glossary: words.slice((index / 4) % 15, ((index / 4) % 15) + 4).map((word) => ({ term: word[0], meaning: word[1] }))
        });
      }

      const promptFrames = [
        "Tulislah enam kalimat tentang {term} dan berikan contoh pribadi.",
        "Bandingkan dua pengalaman yang berkaitan dengan {term}.",
        "Jelaskan mengapa {term} penting dalam kehidupan sehari-hari.",
        "Buat dialog pendek yang menggunakan kata {term}.",
        "Ceritakan masalah dan solusi yang berkaitan dengan {term}.",
        "Berikan pendapatmu tentang {term} dengan dua alasan.",
        "Ringkas satu situasi yang melibatkan {term}.",
        "Ubah gagasan tentang {term} menjadi pertanyaan dan jawaban."
      ];
      words.forEach((word) => {
        scene.contexts.forEach((context) => {
          promptFrames.forEach((frame) => journalPrompts.push({
            level,
            prompt: `${frame.replace("{term}", word[0])} Konteks: ${context[0]}.`
          }));
        });
      });

      words.slice(0, 10).forEach((word, index) => {
        missions.push({
          level,
          title: `Misi ${word[0]}`,
          detail: `Gunakan ${word[0]} dalam tiga konteks berbeda dan baca keras.`,
          action: `Mision BIPA ${level}: 3 frases con ${word[0]} (${word[1]}).`
        });
      });
    });

    const parts = {
      subjects: builderParts.subjects.map((part, index) => ({ id: part[0], es: part[1], formal: part[2], level: builderPartLevels.subjects[index] })),
      verbs: builderParts.verbs.map((part, index) => ({ id: part[0], es: part[1], passive: part[2], formal: part[3], level: builderPartLevels.verbs[index] })),
      objects: builderParts.objects.map((part, index) => ({ id: part[0], es: part[1], level: builderPartLevels.objects[index] })),
      times: builderParts.times.map((part, index) => ({ id: part[0], es: part[1], level: builderPartLevels.times[index] }))
    };
    const builderCombinations = parts.subjects.length * parts.verbs.length * parts.objects.length * parts.times.length * 5;

    return {
      flashcards,
      quizzes,
      shadowLines,
      journalPrompts,
      missions,
      readings,
      sentenceParts: parts,
      stats: {
        vocabulary: Object.values(vocabulary).reduce((total, group) => total + group.length, 0),
        vocabularyActivities: flashcards.filter((card) => card.id.indexOf("lib-word-") === 0).length,
        flashcards: flashcards.length,
        quizzes: quizzes.length,
        phrases: shadowLines.length,
        readings: Object.values(readings).reduce((total, group) => total + group.length, 0),
        writing: journalPrompts.length,
        builderCombinations
      }
    };
  }

  window.INDONESIAN_LIBRARY = makeLibrary();
})();
