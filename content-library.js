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

  const supplementalVocabulary = {
    1: [
      ["saya", "yo", "Saya belajar bahasa Indonesia."], ["anda", "usted", "Anda tinggal di mana?"],
      ["ini", "esto", "Ini buku saya."], ["itu", "eso", "Itu rumah teman saya."],
      ["apa", "que", "Apa nama makanan ini?"], ["siapa", "quien", "Siapa nama guru itu?"],
      ["di mana", "donde", "Di mana kamar mandi?"], ["kapan", "cuando", "Kapan pasar buka?"],
      ["baik", "bien / bueno", "Saya baik-baik saja."], ["baru", "nuevo", "Saya punya tas baru."],
      ["lama", "viejo / mucho tiempo", "Saya menunggu lama."], ["depan", "delante", "Toko ada di depan pasar."],
      ["belakang", "detras", "Kamar saya di belakang."], ["atas", "arriba", "Buku ada di atas meja."],
      ["bawah", "abajo", "Tas ada di bawah kursi."], ["teman", "amigo", "Teman saya datang pagi ini."],
      ["guru", "profesor", "Guru berbicara pelan."], ["buku", "libro", "Saya membaca buku kecil."],
      ["meja", "mesa", "Air ada di meja."], ["kursi", "silla", "Kursi ini besar."],
      ["pintu", "puerta", "Tolong buka pintu."], ["uang", "dinero", "Saya membawa uang kecil."],
      ["buah", "fruta", "Saya membeli buah di pasar."], ["teh", "te", "Saya minum teh panas."],
      ["kopi", "cafe", "Dia pesan kopi."], ["panas", "caliente", "Air ini panas."],
      ["dingin", "frio", "Minuman itu dingin."], ["cepat", "rapido", "Bus datang cepat."],
      ["pelan", "lento / despacio", "Tolong bicara pelan."], ["maaf", "perdon", "Maaf, saya terlambat."]
    ],
    2: [
      ["sarapan", "desayunar", "Saya sarapan sebelum bekerja."], ["makan siang", "almorzar", "Kami makan siang di kantor."],
      ["makan malam", "cenar", "Keluarga makan malam bersama."], ["membersihkan", "limpiar", "Dia membersihkan kamar."],
      ["menyapu", "barrer", "Saya menyapu lantai."], ["menjemur", "tender al sol", "Ibu menjemur pakaian."],
      ["berbelanja", "hacer compras", "Kami berbelanja pada akhir pekan."], ["membayar", "pagar", "Saya membayar tagihan."],
      ["tagihan", "factura", "Tagihan listrik sudah dibayar."], ["listrik", "electricidad", "Listrik di rumah stabil."],
      ["air minum", "agua potable", "Air minum tersedia di dapur."], ["dokter", "medico", "Saya mengunjungi dokter."],
      ["obat", "medicina", "Obat itu diminum setelah makan."], ["demam", "fiebre", "Anak itu demam ringan."],
      ["batuk", "tos", "Saya batuk sejak kemarin."], ["pusing", "mareado", "Dia merasa pusing."],
      ["istirahat", "descansar", "Saya perlu istirahat."], ["olahraga", "deporte", "Olahraga ringan baik untuk kesehatan."],
      ["sepeda", "bicicleta", "Ia naik sepeda ke sekolah."], ["motor", "moto", "Motor berhenti di halte."],
      ["kereta", "tren", "Kereta tiba pukul tujuh."], ["tiket", "billete", "Saya membeli tiket bus."],
      ["peta", "mapa", "Kami melihat peta kota."], ["alamat", "direccion", "Alamat kantor mudah dicari."],
      ["lantai", "piso / suelo", "Kamar saya di lantai dua."], ["tetap", "seguir / permanecer", "Saya tetap belajar setiap hari."],
      ["sebelum", "antes", "Saya mandi sebelum sarapan."], ["sesudah", "despues", "Dia istirahat sesudah bekerja."],
      ["ketika", "cuando", "Saya membaca ketika hujan."], ["kalau", "si", "Kalau sehat, saya pergi."]
    ],
    3: [
      ["pernah", "alguna vez", "Saya pernah tinggal di Bali."], ["belum", "todavia no", "Saya belum membeli tiket."],
      ["sudah", "ya", "Kami sudah tiba."], ["akan", "ir a / futuro", "Saya akan berangkat besok."],
      ["sedang", "estar haciendo", "Dia sedang membaca pesan."], ["mulai", "empezar", "Kelas mulai pukul sembilan."],
      ["selesai", "terminar", "Tugas selesai malam ini."], ["mungkin", "quizas", "Mungkin kami pergi besok."],
      ["sebaiknya", "seria mejor", "Sebaiknya kita berangkat pagi."], ["lebih baik", "mejor", "Lebih baik naik kereta."],
      ["kurang", "menos / falta", "Waktunya kurang panjang."], ["cukup", "suficiente", "Uang saya cukup."],
      ["tergantung", "depende", "Keputusan tergantung cuaca."], ["membantu", "ayudar", "Teman saya membantu."],
      ["menawarkan", "ofrecer", "Dia menawarkan bantuan."], ["menghubungi", "contactar", "Saya menghubungi teman lama."],
      ["menerima", "recibir", "Kami menerima kabar baru."], ["mengirim", "enviar", "Saya mengirim pesan singkat."],
      ["pesan", "mensaje", "Pesan itu jelas."], ["kabar", "noticia", "Kabar dari keluarga baik."],
      ["cerita", "historia", "Cerita liburan itu lucu."], ["lucu", "gracioso", "Pengalaman itu lucu."],
      ["menarik", "interesante", "Museum itu menarik."], ["daerah", "region", "Makanan daerah ini pedas."],
      ["cadangan", "reserva / alternativo", "Kami membuat rencana cadangan."], ["janji", "cita / promesa", "Saya punya janji sore ini."],
      ["pertemuan", "encuentro", "Pertemuan dimulai tepat waktu."], ["alasan utama", "razon principal", "Alasan utama adalah biaya."],
      ["meski", "aunque", "Meski sibuk, ia tetap datang."], ["agar", "para que", "Kami datang awal agar siap."]
    ],
    4: [
      ["data", "datos", "Data terbaru belum lengkap."], ["jumlah", "cantidad", "Jumlah penumpang meningkat."],
      ["warga", "vecinos / ciudadanos", "Warga memberi masukan."], ["pemerintah", "gobierno", "Pemerintah mengumumkan kebijakan."],
      ["transportasi", "transporte", "Transportasi umum perlu membaik."], ["kemacetan", "atasco", "Kemacetan terjadi pada pagi hari."],
      ["akses", "acceso", "Akses layanan meningkat."], ["biaya", "coste", "Biaya transportasi menurun."],
      ["hasil", "resultado", "Hasil pengamatan berbeda."], ["temuan", "hallazgo", "Temuan itu dilaporkan."],
      ["sumber", "fuente", "Sumber data harus jelas."], ["metode", "metodo", "Metode pengamatan sederhana."],
      ["mencatat", "registrar", "Petugas mencatat jumlah penumpang."], ["mengukur", "medir", "Tim mengukur dampak program."],
      ["menilai", "evaluar", "Warga menilai layanan baru."], ["mengumpulkan", "recoger", "Peneliti mengumpulkan masukan."],
      ["memperbaiki", "mejorar / reparar", "Tim memperbaiki layanan."], ["mengurangi", "reducir", "Program mengurangi biaya."],
      ["menyebabkan", "causar", "Hujan menyebabkan kemacetan."], ["berdampak", "impactar", "Perubahan berdampak pada warga."],
      ["sementara", "temporal / mientras", "Sementara itu, data dikumpulkan."], ["secara umum", "en general", "Secara umum, layanan membaik."],
      ["terutama", "sobre todo", "Masalah terjadi terutama pagi hari."], ["dibandingkan", "comparado", "Biaya lebih rendah dibandingkan bulan lalu."],
      ["sebelumnya", "anteriormente", "Sebelumnya layanan lebih lambat."], ["selanjutnya", "a continuacion", "Selanjutnya, laporan ditulis."],
      ["usulan", "propuesta", "Usulan baru dibahas."], ["solusi", "solucion", "Solusi itu cukup efektif."],
      ["program", "programa", "Program kota dimulai hari ini."], ["publik", "publico", "Layanan publik harus jelas."]
    ],
    5: [
      ["informasi", "informacion", "Informasi berlimpah setiap hari."], ["kualitas", "calidad", "Kualitas diskusi menurun."],
      ["kuantitas", "cantidad", "Kuantitas data tidak selalu cukup."], ["identitas", "identidad", "Identitas digital makin penting."],
      ["komunitas", "comunidad", "Komunitas belajar tumbuh cepat."], ["partisipasi", "participacion", "Partisipasi publik meningkat."],
      ["perilaku", "comportamiento", "Perilaku pengguna berubah."], ["pola", "patron", "Pola perhatian mudah berubah."],
      ["konteks", "contexto", "Konteks sosial perlu dijelaskan."], ["aspek", "aspecto", "Aspek ekonomi juga penting."],
      ["menggambarkan", "describir", "Artikel menggambarkan perubahan sosial."], ["menjelaskan", "explicar", "Penulis menjelaskan dampaknya."],
      ["menganalisis", "analizar", "Pengamat menganalisis kebiasaan digital."], ["menunjukkan", "mostrar", "Data menunjukkan kecenderungan baru."],
      ["mendorong", "impulsar", "Teknologi mendorong partisipasi."], ["menghambat", "obstaculizar", "Kesenjangan menghambat akses."],
      ["memperluas", "ampliar", "Platform memperluas peluang belajar."], ["memperkuat", "reforzar", "Dialog memperkuat kepercayaan."],
      ["melemahkan", "debilitar", "Informasi palsu melemahkan kepercayaan."], ["menimbulkan", "generar", "Perubahan menimbulkan tantangan."],
      ["bukan hanya", "no solo", "Masalahnya bukan hanya teknologi."], ["melalui", "mediante", "Belajar terjadi melalui praktik."],
      ["tanpa", "sin", "Tanpa contoh, gagasan sulit dipahami."], ["dari sudut pandang", "desde el punto de vista", "Dari sudut pandang pengguna, ini penting."],
      ["jangka panjang", "largo plazo", "Dampak jangka panjang belum jelas."], ["jangka pendek", "corto plazo", "Solusi jangka pendek diperlukan."],
      ["konkret", "concreto", "Contoh konkret membantu pembaca."], ["abstrak", "abstracto", "Gagasan itu masih abstrak."],
      ["relevansi", "relevancia", "Relevansi topik ini tinggi."], ["keseimbangan", "equilibrio", "Keseimbangan informasi diperlukan."]
    ],
    6: [
      ["implementasi", "implementacion", "Implementasi kebijakan dimulai bulan ini."], ["evaluasi", "evaluacion", "Evaluasi dilakukan setiap kuartal."],
      ["indikator", "indicador", "Indikator keberhasilan harus jelas."], ["prosedur", "procedimiento", "Prosedur baru disosialisasikan."],
      ["standar", "estandar", "Standar kualitas ditetapkan."], ["tata kelola", "gobernanza", "Tata kelola proyek diperbaiki."],
      ["mitigasi", "mitigacion", "Mitigasi risiko disiapkan."], ["kendala", "obstaculo", "Tim mengantisipasi kendala."],
      ["cakupan", "alcance", "Cakupan proyek diperluas."], ["linimasa", "cronograma", "Linimasa pelaksanaan berubah."],
      ["pemantauan", "monitoreo", "Pemantauan dilakukan secara berkala."], ["pelaporan", "reporte", "Pelaporan harus akuntabel."],
      ["menetapkan", "establecer", "Direktur menetapkan prioritas."], ["meninjau", "revisar", "Komite meninjau kepatuhan."],
      ["menyusun", "elaborar", "Tim menyusun rencana kerja."], ["menyampaikan", "comunicar", "Manajer menyampaikan keputusan."],
      ["menindaklanjuti", "dar seguimiento", "Tim menindaklanjuti temuan."], ["mendokumentasikan", "documentar", "Sekretaris mendokumentasikan rapat."],
      ["memastikan", "asegurar", "Manajer memastikan kesiapan."], ["mengoptimalkan", "optimizar", "Tim mengoptimalkan sumber daya."],
      ["lintas tim", "entre equipos", "Rapat lintas tim dijadwalkan."], ["berkala", "periodico", "Evaluasi berkala diperlukan."],
      ["sesuai dengan", "de acuerdo con", "Kegiatan sesuai dengan prosedur."], ["terkait dengan", "relacionado con", "Risiko terkait dengan jadwal."],
      ["apabila", "si / en caso de", "Apabila risiko naik, rencana diubah."], ["sepanjang", "siempre que", "Proyek berjalan sepanjang anggaran cukup."],
      ["keberlanjutan", "sostenibilidad", "Keberlanjutan program dinilai."], ["transparansi", "transparencia", "Transparansi keputusan penting."],
      ["efisiensi", "eficiencia", "Efisiensi biaya meningkat."], ["akuntabilitas", "rendicion de cuentas", "Akuntabilitas proses dijaga."]
    ],
    7: [
      ["epistemologis", "epistemologico", "Pertanyaan epistemologis muncul dalam debat itu."], ["ontologis", "ontologico", "Asumsi ontologis perlu dipaparkan."],
      ["normatif", "normativo", "Isu itu bersifat normatif."], ["empiris", "empirico", "Bukti empiris masih terbatas."],
      ["argumentasi", "argumentacion", "Argumentasi penulis cukup berimbang."], ["premis", "premisa", "Premis utama perlu diuji."],
      ["inferensi", "inferencia", "Inferensi tersebut terlalu cepat."], ["koherensi", "coherencia", "Koherensi analisis perlu diperkuat."],
      ["ambiguitas", "ambiguedad", "Ambiguitas istilah harus dihindari."], ["reduksionisme", "reduccionismo", "Reduksionisme membuat analisis dangkal."],
      ["dialektika", "dialectica", "Dialektika gagasan tampak jelas."], ["subjektivitas", "subjetividad", "Subjektivitas peneliti diakui."],
      ["objektivitas", "objetividad", "Objektivitas data diperdebatkan."], ["kausalitas", "causalidad", "Kausalitas tidak otomatis terbukti."],
      ["korelasi", "correlacion", "Korelasi tidak serta-merta berarti sebab."], ["variabel", "variable", "Variabel utama dianalisis."],
      ["konseptualisasi", "conceptualizacion", "Konseptualisasi istilah harus konsisten."], ["operasionalisasi", "operacionalizacion", "Operasionalisasi variabel dijelaskan."],
      ["memvalidasi", "validar", "Peneliti memvalidasi temuan."], ["mengkritisi", "criticar", "Pembaca mengkritisi premis dasar."],
      ["merevisi", "revisar", "Penulis merevisi kerangka konseptual."], ["menafsirkan", "interpretar", "Pakar menafsirkan bukti."],
      ["memetakan", "cartografiar / mapear", "Kajian memetakan wacana publik."], ["mengontekstualisasikan", "contextualizar", "Esai mengontekstualisasikan data."],
      ["secara konseptual", "conceptualmente", "Secara konseptual, argumen itu kuat."], ["secara metodologis", "metodologicamente", "Secara metodologis, desainnya lemah."],
      ["dengan kata lain", "en otras palabras", "Dengan kata lain, premisnya berubah."], ["di satu sisi", "por un lado", "Di satu sisi, datanya kuat."],
      ["di sisi lain", "por otro lado", "Di sisi lain, konteksnya terbatas."], ["sebaliknya", "por el contrario", "Sebaliknya, bukti baru memperkuat klaim."]
    ]
  };

  Object.keys(supplementalVocabulary).forEach((levelKey) => {
    vocabulary[Number(levelKey)].push(...supplementalVocabulary[levelKey]);
  });

  const supplementalScenes = {
    1: {
      actions: [["membaca buku kecil", "lee un libro pequeno"], ["mencari pintu keluar", "busca la salida"], ["membeli kopi dingin", "compra cafe frio"], ["bertanya alamat", "pregunta una direccion"]],
      contexts: [["di depan toko", "delante de la tienda"], ["dengan teman baru", "con un amigo nuevo"]]
    },
    2: {
      actions: [["membayar tagihan listrik", "paga la factura de electricidad"], ["membeli tiket kereta", "compra un billete de tren"], ["beristirahat di rumah", "descansa en casa"], ["mencari alamat dokter", "busca la direccion del medico"]],
      contexts: [["sesudah makan siang", "despues de almorzar"], ["kalau badan sehat", "si el cuerpo esta sano"]]
    },
    3: {
      actions: [["mengirim pesan kepada teman", "envia un mensaje a un amigo"], ["membuat rencana cadangan", "hace un plan alternativo"], ["menceritakan pengalaman liburan", "cuenta una experiencia de vacaciones"], ["menawarkan bantuan kecil", "ofrece una ayuda pequena"]],
      contexts: [["sebelum pertemuan dimulai", "antes de que empiece la reunion"], ["agar semua orang siap", "para que todos esten preparados"]]
    },
    4: {
      actions: [["mengumpulkan data warga", "recoge datos de ciudadanos"], ["mengukur akses layanan", "mide el acceso al servicio"], ["melaporkan temuan utama", "reporta el hallazgo principal"], ["mengusulkan solusi publik", "propone una solucion publica"]],
      contexts: [["dibandingkan bulan sebelumnya", "comparado con el mes anterior"], ["secara umum di kota itu", "en general en esa ciudad"]]
    },
    5: {
      actions: [["menganalisis pola perhatian", "analiza el patron de atencion"], ["memperkuat kepercayaan publik", "refuerza la confianza publica"], ["menghambat partisipasi komunitas", "obstaculiza la participacion comunitaria"], ["menggambarkan dampak jangka panjang", "describe el impacto a largo plazo"]],
      contexts: [["dari sudut pandang pengguna", "desde el punto de vista del usuario"], ["tanpa mengabaikan konteks", "sin ignorar el contexto"]]
    },
    6: {
      actions: [["menyusun prosedur mitigasi", "elabora un procedimiento de mitigacion"], ["memastikan akuntabilitas proses", "asegura la rendicion de cuentas del proceso"], ["mengoptimalkan alokasi sumber daya", "optimiza la asignacion de recursos"], ["mendokumentasikan indikator keberhasilan", "documenta los indicadores de exito"]],
      contexts: [["sesuai dengan standar organisasi", "de acuerdo con el estandar organizativo"], ["apabila linimasa berubah", "si cambia el cronograma"]]
    },
    7: {
      actions: [["mengkritisi premis metodologis", "critica la premisa metodologica"], ["mengontekstualisasikan bukti empiris", "contextualiza la evidencia empirica"], ["memvalidasi inferensi utama", "valida la inferencia principal"], ["memetakan ambiguitas konseptual", "mapea la ambiguedad conceptual"]],
      contexts: [["secara konseptual dan metodologis", "conceptual y metodologicamente"], ["di satu sisi dan di sisi lain", "por un lado y por otro lado"]]
    }
  };

  Object.keys(supplementalScenes).forEach((levelKey) => {
    const level = Number(levelKey);
    scenes[level].actions.push(...supplementalScenes[level].actions);
    scenes[level].contexts.push(...supplementalScenes[level].contexts);
  });

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

  const supplementalBuilderParts = {
    subjects: {
      1: [["Guru saya", "mi profesor", "Guru saya"], ["Teman baru", "un amigo nuevo", "Teman baru"]],
      2: [["Adik saya", "mi hermano menor", "Adik saya"], ["Dokter itu", "ese medico", "Dokter tersebut"]],
      3: [["Kelompok kecil", "el grupo pequeno", "Kelompok kecil"], ["Teman lama", "un viejo amigo", "Rekan lama"]],
      4: [["Petugas kota", "el funcionario municipal", "Petugas kota tersebut"], ["Warga setempat", "los residentes locales", "Warga setempat"]],
      5: [["Pengguna digital", "el usuario digital", "Pengguna digital"], ["Komunitas belajar", "la comunidad de aprendizaje", "Komunitas belajar"]],
      6: [["Koordinator program", "el coordinador del programa", "Koordinator program"], ["Unit kepatuhan", "la unidad de cumplimiento", "Unit kepatuhan"]],
      7: [["Analis wacana", "el analista del discurso", "Analis wacana tersebut"], ["Pengkaji metodologi", "el evaluador metodologico", "Pengkaji metodologi tersebut"]]
    },
    verbs: {
      1: [["membuka", "abre", "dibuka", "membuka"], ["membawa", "lleva", "dibawa", "membawa"]],
      2: [["membersihkan", "limpia", "dibersihkan", "membersihkan"], ["membayar", "paga", "dibayar", "membayar"]],
      3: [["menghubungi", "contacta", "dihubungi", "menghubungi"], ["menawarkan", "ofrece", "ditawarkan", "menawarkan"]],
      4: [["mengumpulkan", "recoge", "dikumpulkan", "mengumpulkan"], ["melaporkan", "reporta", "dilaporkan", "melaporkan"]],
      5: [["menggambarkan", "describe", "digambarkan", "memaparkan"], ["memperkuat", "refuerza", "diperkuat", "memperkuat"]],
      6: [["memastikan", "asegura", "dipastikan", "memastikan"], ["mendokumentasikan", "documenta", "didokumentasikan", "mendokumentasikan"]],
      7: [["mengkritisi", "critica", "dikritisi", "mengkritisi"], ["mengontekstualisasikan", "contextualiza", "dikontekstualisasikan", "mengontekstualisasikan"]]
    },
    objects: {
      1: [["buku kecil", "un libro pequeno"], ["alamat rumah", "la direccion de casa"]],
      2: [["tagihan listrik", "la factura de electricidad"], ["tiket kereta", "el billete de tren"]],
      3: [["pesan kepada teman", "un mensaje a un amigo"], ["rencana cadangan", "un plan alternativo"]],
      4: [["data warga", "los datos de ciudadanos"], ["temuan utama", "el hallazgo principal"]],
      5: [["pola perhatian", "el patron de atencion"], ["konteks sosial", "el contexto social"]],
      6: [["prosedur mitigasi", "el procedimiento de mitigacion"], ["indikator keberhasilan", "los indicadores de exito"]],
      7: [["premis metodologis", "la premisa metodologica"], ["bukti empiris", "la evidencia empirica"]]
    },
    times: {
      1: [["di depan toko", "delante de la tienda"], ["dengan teman baru", "con un amigo nuevo"]],
      2: [["sesudah makan siang", "despues de almorzar"], ["kalau badan sehat", "si el cuerpo esta sano"]],
      3: [["sebelum pertemuan dimulai", "antes de que empiece la reunion"], ["agar semua orang siap", "para que todos esten preparados"]],
      4: [["dibandingkan bulan sebelumnya", "comparado con el mes anterior"], ["secara umum di kota itu", "en general en esa ciudad"]],
      5: [["dari sudut pandang pengguna", "desde el punto de vista del usuario"], ["tanpa mengabaikan konteks", "sin ignorar el contexto"]],
      6: [["sesuai dengan standar organisasi", "de acuerdo con el estandar organizativo"], ["apabila linimasa berubah", "si cambia el cronograma"]],
      7: [["secara konseptual dan metodologis", "conceptual y metodologicamente"], ["di satu sisi dan di sisi lain", "por un lado y por otro lado"]]
    }
  };

  Object.keys(supplementalBuilderParts).forEach((group) => {
    Object.keys(supplementalBuilderParts[group]).forEach((levelKey) => {
      const additions = supplementalBuilderParts[group][levelKey];
      builderParts[group].push(...additions);
      builderPartLevels[group].push(...additions.map(() => Number(levelKey)));
    });
  });

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
      const shadowLimit = 1600;
      const phraseQuizLimit = 600;

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
        if (index < shadowLimit) shadowLines.push(phrase);
        if (index >= phraseQuizLimit) return;
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
      for (let index = 0; index < Math.min(phrases.length, shadowLimit); index += 4) {
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
      words.forEach((word, wordIndex) => {
        scene.contexts.slice(0, 4).forEach((context, contextIndex) => {
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
    const builderCombinations = Object.keys(vocabulary).reduce((total, levelKey) => {
      const level = Number(levelKey);
      return total
        + parts.subjects.filter((part) => part.level === level).length
        * parts.verbs.filter((part) => part.level === level).length
        * parts.objects.filter((part) => part.level === level).length
        * parts.times.filter((part) => part.level === level).length
        * 5;
    }, 0);

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
        vocabularyActivities: Object.values(vocabulary).reduce((total, group) => total + group.length * vocabularyPracticeFrames.length * 4, 0),
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
