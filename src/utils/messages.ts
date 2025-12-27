// Messages for each day from December 24, 2025 to February 3, 2026
export function getMessagesForDate(date: Date): string {
  const month = date.getMonth();
  const day = date.getDate();
  const key = `${month}-${day}`;

  const messages: Record<string, string> = {
    // December 2025
    '11-24': '🎁 Huaaa, ga kerasa uda mau natal aja besookk. Tapi yang lebi serunya hari ini kita jayan-jayaannn, photobooth, buat vlog, video, dll, apapun yang dilakuin sama maku giku senaaangggg. Daaaannn nanti malem juga mau ibadah natal bareng di gereja maku YEYEYEYYY. Maku gimanaaa, senang ga hari iniii, suka ga sama kado-kado dari Giku. Hayus suka yaawww. Hihiii okaii papai maku, ci u besoookk<3',
    '11-25': '🎄 Merry Christmas sayaangg, yeyyy. Ini baru pertama kali Giku seseneng dan seexcited ini ngerayain natal karena bareng makuuuu. Semogaaa, untuk natal kedepannya kita bisa bareng terus yaaa dan sama-sama menjadi lebih baik untuk diri sendiri dan satu sama lainnnn, muachhh papaaiii<3',
    '11-26': '🥹 Cedbrut la giku, maku suda mau berangkat besokk. Huhuu tapi takpapa la, maku pasti suda sangat excited karena gundam suda menunggu HAHAHAHA. Giku juga excited bisa spend time bareng keluarga nanti, dan semoga beneran bisa dan jadi refreshing terbaik gikuu. Walau LDR juga kita aman-aman aja tuu, ya kaaaannn (potret ucapan  manusia yang suka membuat masalah karena kangen pas ga ketemu). Mwehehehe semangat ya nanti selama LDR akwowwkw, semoga berjalan lancar sampe nanti ketemu yagi<3',
    '11-27': '✈️ Heyooww sayaaangg, cie suda mau berangkat. Safe flight ya sayaaangg, giku sayang brut brut sama makuuu. Sorry kalo semalem buat maku sedii dihari terakhir maku sebelum ke Jambi. Selamat liburan sayangg, giku jugaa. Janji yaa harus happiii, kalo ada yang buat sedii tetap ceritain ya ke giku mau call atau chat giku bisaaa. Kita coba challenge baru nii, komunikasi pas ga ketemu samsek, ez la yaa. Semangat sayaang, enjoyy yaa. Sayang maku brut brut brut brut brut brut brut brut<3',
    '11-28': '🔔 Hellow sayaangg, gimanaaa suda mulai ta sedi-sedi lagi kaaaannn. Suda mulai terbiasa lagi sama disanaaa, seneng sama seru brut brut taaaa. Hari ini gantian giku yang terbaaanggg, semoga bisa sampai dengan amaaann, yeyeyeyyy. Semoga bisa happi happi juga sama kaya makuuu. Kangen makuuuu, kapan maku ke Bangka jadinyaa. Mau peyuuk brut brut brut brut brut brut, heheee. Semoga walau jauuu, rasa kita juga ga makin jauu yaaa. Sayaang maku brut brut brut brut brut brut brut brut brut<3',
    '11-29': '❄️ Meskipun tahun ini hampir berakhir, masih banyak momen indah yang bisa kamu ciptakan. Tetap semangat dan nikmati setiap detiknya!',
    '11-30': '🌟 Hari kedua terakhir tahun 2025! Waktunya untuk menuliskan resolusi dan impian untuk tahun depan. Kamu pasti bisa mencapainya!',
    '11-31': '🎊 Selamat Tahun Baru Eve! Malam ini adalah malam untuk merayakan semua pencapaianmu di tahun 2025. Bersiaplah untuk tahun 2026 yang lebih menakjubkan!',

    // January 2026
    '0-1': '🎆 SELAMAT TAHUN BARU 2026! Ini adalah awal yang baru dan penuh kemungkinan. Semoga tahun ini membawa kebahagiaan, kesuksesan, dan mimpi yang terwujud!',
    '0-2': '✨ Hari kedua tahun baru! Resolusimu sudah dimulai? Ingat, setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu!',
    '0-3': '💫 Tiga hari sudah berlalu di 2026! Tetap konsisten dengan tujuanmu. Kamu lebih kuat dari yang kamu kira!',
    '0-4': '🌨️ Musim dingin mengajarkan kita untuk tetap hangat di dalam hati meski dunia terasa dingin. Tetaplah berbagi kehangatan dengan orang lain!',
    '0-5': '⛄ Seperti manusia salju yang dibangun satu bola salju pada satu waktu, impianmu juga dibangun satu langkah pada satu waktu. Terus melangkah!',
    '0-6': '❄️ Kepingan salju itu unik, begitu juga denganmu! Jangan pernah membandingkan perjalananmu dengan orang lain. Kamu istimewa!',
    '0-7': '☃️ Di tengah dinginnya musim dingin, ingatlah bahwa kehangatan berasal dari dalam diri. Bagikan senyumanmu hari ini!',
    '0-8': '💎 Seperti berlian yang terbentuk di bawah tekanan, tantangan hari ini akan membuatmu lebih kuat. Kamu sedang berproses menjadi berlian!',
    '0-9': '🌬️ Biarkan angin musim dingin membawa pergi kekhawatiranmu. Fokus pada hal-hal yang bisa kamu kendalikan dan nikmati prosesnya!',
    '0-10': '🧊 Bahkan es yang paling tebal akan mencair dengan kehangatan. Jangan menyerah, kebaikan dan kerja kerasmu akan membuahkan hasil!',
    '0-11': '🌟 Sudah 11 hari! Kamu melakukannya dengan hebat! Terus pertahankan momentum positifmu dan jangan berhenti bermimpi!',
    '0-12': '✨ Setiap hari adalah halaman baru dalam cerita hidupmu. Pastikan kamu menuliskannya dengan tinta kebahagiaan dan semangat!',
    '0-13': '💫 Hari ke-13 tidak selalu membawa sial! Hari ini bisa menjadi hari keberuntunganmu jika kamu percaya dan berusaha!',
    '0-14': '🌨️ Hujan salju membawa ketenangan. Luangkan waktu hari ini untuk menenangkan pikiran dan merawat dirimu sendiri!',
    '0-15': '⛄ Setengah bulan sudah berlalu! Bagaimana progresmu? Jika belum sesuai harapan, tidak apa-apa. Masih banyak waktu untuk bangkit!',
    '0-16': '❄️ Keindahan musim dingin mengingatkan kita bahwa bahkan di saat-saat sulit, selalu ada keindahan yang bisa kita temukan!',
    '0-17': '☃️ Setiap hari adalah hadiah. Itulah mengapa disebut "present" (hadiah/sekarang). Nikmati hadiahmu hari ini!',
    '0-18': '💎 Kamu sudah sejauh ini! Jangan meremehkan pencapaian kecilmu. Setiap langkah kecil adalah kemajuan!',
    '0-19': '🌬️ Biarkan nafas musim dingin menyegarkan semangatmu. Kamu memiliki kekuatan untuk menghadapi apapun yang datang!',
    '0-20': '🧊 20 hari sudah! Kamu luar biasa! Konsistensi adalah kunci kesuksesan, dan kamu membuktikannya!',
    '0-21': '🌟 Tiga minggu penuh semangat! Impianmu semakin dekat. Jangan berhenti sekarang, terus kejar!',
    '0-22': '✨ Percayalah pada proses. Apa yang kamu tanam hari ini akan kamu tuai nanti. Tetap sabar dan konsisten!',
    '0-23': '💫 Hampir sebulan! Kamu telah membuktikan bahwa kamu bisa melakukannya. Terus tunjukkan kemampuan terbaikmu!',
    '0-24': '🌨️ Seperti salju yang menumpuk perlahan, kesuksesanmu juga dibangun dari usaha-usaha kecil setiap hari!',
    '0-25': '⛄ 25 hari penuh berkah! Kamu adalah inspirasi. Terus bersinar dan menerangi dunia dengan keunikanmu!',
    '0-26': '❄️ Kekuatan sejati bukan tentang tidak pernah jatuh, tapi tentang selalu bangkit. Kamu kuat!',
    '0-27': '☃️ Senyumanmu bisa mencairkan es yang paling tebal. Jangan lupa untuk tersenyum hari ini!',
    '0-28': '💎 Hanya beberapa hari lagi! Kamu hampir menyelesaikan bulan pertama dengan sempurna. Luar biasa!',
    '0-29': '🌬️ Nafas terakhir bulan Januari! Refleksikan pencapaianmu dan bersiaplah untuk Februari yang lebih indah!',
    '0-30': '🧊 30 hari konsistensi! Kamu telah membangun fondasi yang kuat untuk masa depan yang cerah!',
    '0-31': '🌟 Hari terakhir Januari! Rayakan semua pencapaianmu bulan ini. Kamu layak mendapatkan apresiasi!',

    // February 2026
    '1-1': '🌸 Selamat datang di Februari! Bulan dimana musim semi mulai menghampiri. Seperti bunga yang mulai mekar, mari kita tumbuh dan berkembang bersama!',
    '1-2': '🌷 Hari kedua musim semi! Seperti tunas yang mulai muncul, setiap usaha kecilmu adalah awal dari sesuatu yang indah. Terus bertumbuh!',
    '1-3': '🦋 Seperti kupu-kupu yang keluar dari kepompong, kamu sedang bermetamorfosis menjadi versi terbaik dari dirimu. Terus berproses dengan indah dan penuh harapan! 💕',
  };

  return messages[key] || '🎉 Hari yang spesial! Semoga hari ini membawa kebahagiaan dan kejutan indah untukmu!';
}