import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb,
  ListChecks,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Bookmark,
  Group,
  Pencil,
  Quote,
  FileText,
  Award,
  GraduationCap,
  Plus,
  Minus,
} from "lucide-react";

/* ---------------- Shared UI ---------------- */

const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
      <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-violet)" }}>
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span>Paragraf<span className="text-brand">.id</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {[
          ["Pengertian", "#pengertian"],
          ["Fungsi", "#fungsi"],
          ["Syarat", "#syarat"],
          ["Pola", "#pola"],
          ["Strategi", "#strategi"],
        ].map(([l, h]) => (
          <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
        ))}
      </nav>
      <a
        href="#referensi"
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
        style={{ background: "var(--gradient-violet)" }}
      >
        Pelajari <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </header>
);

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
    {children}
  </div>
);

/* ---------------- Expandable item ---------------- */

type ExpandableItem = {
  title: string;
  short?: string;
  detail: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
};

const Expandable = ({ item, index }: { item: ExpandableItem; index?: number }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`group rounded-3xl border bg-card/60 backdrop-blur transition-colors ${
        open ? "border-brand/60 shadow-[var(--shadow-card)]" : "border-border hover:border-brand/40"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-7 md:p-8 flex items-start gap-5"
        aria-expanded={open}
      >
        {Icon ? (
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: "var(--gradient-violet)" }}>
            <Icon className="w-6 h-6" />
          </div>
        ) : item.badge ? (
          <div className="text-3xl font-extrabold text-transparent bg-clip-text shrink-0 w-14" style={{ backgroundImage: "var(--gradient-violet)" }}>
            {item.badge}
          </div>
        ) : typeof index === "number" ? (
          <div className="text-xs font-mono text-muted-foreground mt-2 w-8 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </div>
        ) : null}

        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
          {item.short && (
            <p className="text-muted-foreground leading-relaxed">{item.short}</p>
          )}
        </div>

        <div className={`shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center transition-transform ${open ? "rotate-180 bg-brand/10 border-brand/40" : ""}`}>
          {open ? <Minus className="w-4 h-4 text-brand" /> : <Plus className="w-4 h-4 text-muted-foreground" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 md:px-8 pb-8 pl-7 md:pl-[5.25rem]">
              <div className="border-l-2 border-brand/40 pl-5 text-foreground/80 leading-relaxed text-base md:text-lg">
                {item.detail}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ---------------- Hero ---------------- */

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <motion.div
        className="absolute inset-0 -z-10 opacity-60"
        animate={{ background: [
          "radial-gradient(600px circle at 20% 30%, oklch(0.55 0.25 290 / 0.5), transparent 60%)",
          "radial-gradient(600px circle at 80% 70%, oklch(0.55 0.25 320 / 0.5), transparent 60%)",
          "radial-gradient(600px circle at 20% 30%, oklch(0.55 0.25 290 / 0.5), transparent 60%)",
        ]}}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 -z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 270) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPositionX: ["0px", "-60px"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-sm text-white/80 mb-8"
        >
          <GraduationCap className="w-4 h-4" /> Materi Bahasa Indonesia · Karya Tulis Ilmiah
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-white max-w-5xl"
        >
          Pengembangan{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #c084fc, #f0abfc, #93c5fd)" }}>
            Paragraf
          </span>{" "}
          dalam Karya Tulis.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg md:text-2xl text-white/70 max-w-2xl leading-relaxed"
        >
          Panduan modern untuk merancang paragraf yang runtut, koheren, dan
          meyakinkan dalam karya tulis ilmiah. Klik tiap poin untuk membaca
          penjelasan lengkap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#pengertian"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-violet)" }}
          >
            Mulai Belajar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#strategi"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white border border-white/20 hover:bg-white/10 backdrop-blur transition-colors"
          >
            Lihat Strategi
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          {[
            ["3", "Macam Paragraf"],
            ["3", "Syarat Inti"],
            ["7", "Pola Pengembangan"],
            ["7", "Strategi Praktis"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-4xl md:text-5xl font-bold text-white">{n}</div>
              <div className="text-sm text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ---------------- Section wrapper with reveal ---------------- */

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-28 md:py-36 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>
  </section>
);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ---------------- Sections ---------------- */

const Pengertian = () => (
  <Section id="pengertian">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <SectionEyebrow>01 · Definisi</SectionEyebrow>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Apa itu <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-violet)" }}>Paragraf?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Paragraf adalah kumpulan kalimat yang saling berkaitan dan membahas{" "}
          <span className="text-foreground font-semibold">satu ide pokok</span>. Dalam karya
          tulis ilmiah, paragraf berfungsi untuk menyampaikan gagasan secara runtut,
          logis, dan mudah dipahami oleh pembaca.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="relative p-8 md:p-10 rounded-3xl border border-border bg-card/60 backdrop-blur shadow-[var(--shadow-card)] overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-violet)" }} />
          <BookOpen className="w-12 h-12 text-brand mb-6 relative" />
          <p className="text-xl leading-relaxed text-foreground/90 relative">
            "Paragraf yang baik bukan sekadar kumpulan kalimat — ia adalah unit
            pemikiran yang utuh."
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground relative">
            <Quote className="w-4 h-4" /> Inti pengembangan paragraf ilmiah
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
);

const fungsiData: ExpandableItem[] = [
  {
    icon: Target,
    title: "Menyampaikan Satu Gagasan Utama",
    short: "Mengantarkan gagasan utama secara jelas dan terfokus.",
    detail:
      "Paragraf berfungsi menyampaikan satu gagasan utama secara jelas sehingga pembaca dapat menangkap inti pikiran penulis tanpa kebingungan. Dengan satu fokus gagasan per paragraf, tulisan menjadi tajam dan terarah.",
  },
  {
    icon: ListChecks,
    title: "Menyusun Tulisan Secara Sistematis",
    short: "Membantu penulis menyusun tulisan secara teratur dan sistematis.",
    detail:
      "Paragraf membantu penulis menata gagasan demi gagasan secara berurutan. Setiap paragraf menjadi unit berpikir yang teratur sehingga keseluruhan tulisan memiliki alur logis dan mudah diikuti.",
  },
  {
    icon: Lightbulb,
    title: "Memudahkan Pembaca",
    short: "Memudahkan pembaca memahami isi tulisan.",
    detail:
      "Pembagian tulisan ke dalam paragraf membantu pembaca mengenali pergantian ide, beristirahat sejenak antar gagasan, dan memahami isi tulisan secara bertahap dan menyeluruh.",
  },
];

const Fungsi = () => (
  <Section id="fungsi">
    <Reveal>
      <SectionEyebrow>02 · Fungsi</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Mengapa paragraf <span className="text-brand">penting?</span>
      </h2>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Paragraf memiliki beberapa fungsi penting dalam karya tulis. Klik setiap
        kartu untuk membaca penjelasan lengkap.
      </p>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {fungsiData.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.1}>
          <Expandable item={f} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const macamData: ExpandableItem[] = [
  {
    badge: "01",
    title: "Paragraf Pembuka",
    short: "Pengantar pembaca menuju masalah yang akan diuraikan.",
    detail:
      "Paragraf pembuka memiliki peran sebagai pengantar bagi pembaca untuk sampai pada masalah yang akan diuraikan oleh penulis. Untuk itu, paragraf pembuka harus dapat menarik minat dan perhatian pembaca, serta sanggup mempersiapkan pikiran pembaca kepada masalah yang diuraikan.",
  },
  {
    badge: "02",
    title: "Paragraf Penghubung",
    short: "Menguraikan inti persoalan yang dibahas penulis.",
    detail:
      "Paragraf penghubung berfungsi menguraikan masalah yang akan dibahas oleh seorang penulis. Paragraf penghubung berisi inti persoalan yang akan dibahas oleh penulis dan diuraikan secara mendalam dalam paragraf ini.",
  },
  {
    badge: "03",
    title: "Paragraf Penutup",
    short: "Mengakhiri sebuah karangan atau tulisan.",
    detail:
      "Paragraf penutup bertujuan mengakhiri sebuah karangan/tulisan. Paragraf ini biasanya berisi simpulan, penegasan, atau pernyataan akhir yang membuat tulisan terasa utuh dan berkesan bagi pembaca.",
  },
];

const Macam = () => (
  <Section id="macam" className="overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
    <Reveal>
      <SectionEyebrow>03 · Jenis</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Macam-macam paragraf<br /> dalam sebuah karangan.
      </h2>
    </Reveal>
    <div className="mt-16 space-y-4">
      {macamData.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.08}>
          <Expandable item={m} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const syaratData: ExpandableItem[] = [
  {
    badge: "1",
    title: "Kesatuan",
    short: "Tiap paragraf hanya mengandung satu gagasan pokok.",
    detail:
      "Syarat kesatuan menuntut bahwa tiap paragraf hanya mengandung satu gagasan pokok. Semua kalimat dalam paragraf harus mendukung gagasan tunggal tersebut sehingga tidak ada informasi yang menyimpang dari topik utama.",
  },
  {
    badge: "2",
    title: "Kepaduan",
    short: "Kalimat-kalimat memiliki hubungan timbal balik.",
    detail:
      "Sebuah paragraf bukanlah sekadar kumpulan atau tumpukan kalimat-kalimat yang masing-masing berdiri sendiri, tetapi dibangun oleh kalimat-kalimat yang memiliki hubungan timbal balik. Kepaduan dicapai melalui kata penghubung, kata ganti, dan urutan logis antar kalimat.",
  },
  {
    badge: "3",
    title: "Kelengkapan",
    short: "Berisi kalimat penjelas yang cukup untuk gagasan utama.",
    detail:
      "Suatu paragraf dikatakan lengkap jika berisi kalimat-kalimat penjelas yang cukup untuk menunjang kejelasan kalimat topik atau gagasan utama. Kalimat penjelas ini dapat berupa contoh, data, alasan, atau rincian yang memperkuat ide pokok.",
  },
];

const Syarat = () => (
  <Section id="syarat">
    <Reveal>
      <SectionEyebrow>04 · Prinsip</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Syarat-syarat pembentukan<br /> paragraf yang utuh.
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {syaratData.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.1}>
          <Expandable item={s} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const Konsep = () => (
  <Section id="konsep">
    <Reveal>
      <div className="relative rounded-[2rem] p-12 md:p-20 border border-border overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.6 0.25 290 / 0.6), transparent 50%), radial-gradient(circle at 70% 70%, oklch(0.6 0.25 320 / 0.6), transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto">
          <SectionEyebrow>05 · Pengembangan Paragraf</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Pola pengembangan paragraf menentukan kekuatan tulisan.
          </h2>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              Pola pengembangan paragraf merujuk pada cara penulis menyusun dan
              menghubungkan kalimat-kalimat dalam paragraf untuk mendukung ide
              utama yang ingin disampaikan. Pemilihan pola pengembangan yang
              tepat dapat secara signifikan mempengaruhi kejelasan, koherensi,
              dan efektivitas sebuah tulisan dalam menyampaikan pesan kepada
              pembaca.
            </p>
            <p>
              Penulis yang mampu menguasai berbagai pola pengembangan paragraf
              akan memiliki keunggulan dalam menyusun argumen yang kuat,
              menjelaskan konsep yang kompleks, dan meyakinkan pembaca.
              Sebaliknya, ketidakmampuan dalam mengembangkan paragraf dengan
              baik dapat mengakibatkan tulisan yang tidak terstruktur, sulit
              dipahami, dan kurang meyakinkan.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  </Section>
);

const ciriData = [
  "Memiliki satu ide pokok",
  "Kalimat-kalimat saling mendukung",
  "Menggunakan bahasa yang jelas dan efektif",
  "Disusun secara logis dan runtut",
  "Tidak keluar dari topik utama",
];

const Ciri = () => (
  <Section id="ciri">
    <Reveal>
      <SectionEyebrow>06 · Karakteristik</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Ciri paragraf yang <span className="text-brand">baik.</span>
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-2 gap-4 mt-16">
      {ciriData.map((c, i) => (
        <Reveal key={c} delay={i * 0.05}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-brand/40 transition-colors"
          >
            <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
            <span className="text-lg font-medium">{c}</span>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const polaData: ExpandableItem[] = [
  {
    title: "Deduktif",
    short: "Ide pokok di awal paragraf (umum ke khusus).",
    detail:
      "Pola deduktif menempatkan kalimat utama di awal paragraf, kemudian dijelaskan oleh kalimat-kalimat penjelas yang bersifat khusus. Pola ini cocok untuk menyampaikan kesimpulan terlebih dahulu sebelum diuraikan rinciannya.",
  },
  {
    title: "Induktif",
    short: "Ide pokok di akhir paragraf (khusus ke umum).",
    detail:
      "Pola induktif memulai paragraf dengan kalimat-kalimat khusus berupa fakta, contoh, atau rincian, kemudian diakhiri dengan kalimat utama sebagai simpulan umum. Pola ini efektif untuk membangun argumen secara bertahap.",
  },
  {
    title: "Campuran",
    short: "Gabungan pola deduktif dan induktif.",
    detail:
      "Pola campuran meletakkan kalimat utama di awal dan menegaskannya kembali di akhir paragraf. Penegasan ini biasanya menggunakan kalimat dengan makna serupa namun susunan kata yang berbeda.",
  },
  {
    title: "Perbandingan",
    short: "Membandingkan dua hal atau lebih.",
    detail:
      "Pola perbandingan mengembangkan paragraf dengan cara membandingkan persamaan dan perbedaan dua hal atau lebih. Pola ini membantu pembaca memahami suatu konsep melalui acuan konsep lain yang relevan.",
  },
  {
    title: "Sebab-Akibat",
    short: "Menguraikan hubungan kausalitas.",
    detail:
      "Pola sebab-akibat mengembangkan paragraf dengan menjelaskan sebab terlebih dahulu kemudian akibat, atau sebaliknya. Pola ini banyak digunakan dalam karya ilmiah untuk menjelaskan fenomena dan dampaknya.",
  },
  {
    title: "Contoh",
    short: "Memperjelas ide pokok melalui contoh nyata.",
    detail:
      "Pola contoh mengembangkan paragraf dengan menyajikan contoh-contoh konkret yang relevan untuk memperjelas ide pokok. Contoh berfungsi sebagai bukti pendukung sekaligus mempermudah pemahaman pembaca.",
  },
  {
    title: "Definisi",
    short: "Menjelaskan pengertian suatu istilah atau konsep.",
    detail:
      "Pola definisi mengembangkan paragraf dengan menjelaskan pengertian sebuah istilah, konsep, atau objek secara mendalam. Pola ini sering digunakan saat penulis perlu menyamakan persepsi pembaca terhadap konsep tertentu.",
  },
];

const Pola = () => (
  <Section id="pola">
    <Reveal>
      <SectionEyebrow>07 · Klasifikasi</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Jenis pola pengembangan<br /> paragraf.
      </h2>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Klik setiap pola untuk membaca penjelasannya secara lengkap.
      </p>
    </Reveal>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
      {polaData.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.05}>
          <Expandable item={p} index={i} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const strategiData: ExpandableItem[] = [
  {
    icon: BookOpen,
    title: "Narasi",
    short: "Menceritakan kejadian berdasarkan perkembangan waktu.",
    detail:
      "Strategi narasi menjelaskan topik atau pokok permasalahan melalui media tertulis untuk menceritakan suatu kejadian berdasarkan perkembangan waktu. Penulis menyusun peristiwa secara kronologis sehingga pembaca dapat mengikuti alur kejadian dengan jelas.",
  },
  {
    icon: BarChart3,
    title: "Data Statistik",
    short: "Menyajikan angka, tabel, atau grafik untuk gambaran nyata.",
    detail:
      "Strategi data statistik menyajikan data berupa angka, tabel, atau grafik—baik deskriptif maupun hubungan antarvariabel—untuk menjawab persoalan dan memberikan gambaran nyata suatu fakta. Strategi ini memperkuat argumen dengan bukti kuantitatif yang objektif.",
  },
  {
    icon: Lightbulb,
    title: "Pemberian Contoh",
    short: "Memberikan gambaran nyata peristiwa relevan.",
    detail:
      "Strategi pemberian contoh memberikan gambaran nyata tentang peristiwa yang relevan dengan topik untuk memperjelas ide pokok kepada pembaca. Contoh konkret membantu pembaca menghubungkan konsep abstrak dengan situasi yang dapat dibayangkan.",
  },
  {
    icon: Bookmark,
    title: "Penggunaan Kutipan",
    short: "Menggunakan teori orang lain sebagai pengendali topik.",
    detail:
      "Strategi penggunaan kutipan memanfaatkan pernyataan atau teori orang lain melalui teknik parafrase sebagai ide pengendali agar penulis tetap fokus pada topik dan menghindari plagiarisme. Kutipan memperkuat kredibilitas tulisan dengan dukungan referensi terpercaya.",
  },
  {
    icon: Pencil,
    title: "Pemberian Definisi",
    short: "Menjelaskan pengertian, tujuan, dan manfaat suatu objek.",
    detail:
      "Strategi pemberian definisi menjelaskan pengertian, tujuan, dan manfaat suatu objek atau topik untuk memberikan pemahaman mendalam mengenai isi tulisan. Definisi yang jelas mencegah salah tafsir dan menyamakan pemahaman antara penulis dan pembaca.",
  },
  {
    icon: ListChecks,
    title: "Deduktif dan Induktif",
    short: "Menyusun ide pokok di awal atau di akhir paragraf.",
    detail:
      "Strategi deduktif dan induktif menyusun paragraf dengan meletakkan ide pokok di awal (umum ke khusus) atau di akhir kalimat sebagai penutup (khusus ke umum). Penulis dapat memilih pola sesuai efek penekanan yang ingin dicapai.",
  },
  {
    icon: Group,
    title: "Klasifikasi",
    short: "Mengelompokkan unsur berdasarkan kesamaan karakteristik.",
    detail:
      "Strategi klasifikasi mengelompokkan berbagai unsur yang memiliki kesamaan karakteristik ke dalam subtopik atau dimensi tertentu. Strategi ini memudahkan pembaca memahami struktur informasi yang kompleks secara terorganisir.",
  },
];

const Strategi = () => (
  <Section id="strategi" className="overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
    <Reveal>
      <SectionEyebrow>08 · Teknik</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Strategi pengembangan<br /> paragraf ilmiah.
      </h2>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Ide pokok yang terdapat pada setiap paragraf karya tulis ilmiah perlu
        dikembangkan agar pembaca dapat memahaminya dengan baik. Klik tiap
        strategi untuk membaca penjelasan lengkapnya.
      </p>
    </Reveal>
    <div className="grid md:grid-cols-2 gap-5 mt-16">
      {strategiData.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.05}>
          <Expandable item={s} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const tujuanData: ExpandableItem[] = [
  {
    icon: Award,
    title: "Mempengaruhi dan Meyakinkan",
    short: "Meyakinkan pembaca atas fakta atau kejadian yang diamati.",
    detail:
      "Kumpulan kalimat yang utuh berfungsi untuk meyakinkan pembaca atas fakta atau kejadian yang diamati. Pengembangan paragraf yang baik mampu mempengaruhi cara pandang pembaca melalui penyajian argumen yang runtut dan berdasar.",
  },
  {
    icon: Target,
    title: "Efektivitas Pesan",
    short: "Pesan diterima dengan mudah tanpa salah tafsir.",
    detail:
      "Pengembangan yang baik memastikan pesan atau informasi dari penulis dapat diterima dengan mudah tanpa menimbulkan salah tafsir. Paragraf yang efektif menjembatani gagasan penulis dengan pemahaman pembaca secara akurat.",
  },
];

const Tujuan = () => (
  <Section id="tujuan">
    <Reveal>
      <SectionEyebrow>09 · Tujuan Akhir</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Tujuan akhir <span className="text-brand">pengembangan paragraf.</span>
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-2 gap-6 mt-16">
      {tujuanData.map((t, i) => (
        <Reveal key={t.title} delay={i * 0.1}>
          <Expandable item={t} />
        </Reveal>
      ))}
    </div>
  </Section>
);

const Referensi = () => (
  <Section id="referensi">
    <Reveal>
      <div className="rounded-[2rem] p-12 md:p-16 border border-border bg-card/60 backdrop-blur">
        <SectionEyebrow>10 · Penutup</SectionEyebrow>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Terima kasih.</h2>
        <p className="text-lg text-muted-foreground mb-10">Referensi materi yang digunakan:</p>
        <ul className="space-y-4">
          {[
            "Syahputra, E., Hamidiyah, M., & Nasution, N. F. (2022). Penerapan dan pengembangan paragraf Bahasa Indonesia dalam pendidikan pembelajaran mahasiswa. Jurnal Multidisiplin Dehasen (MUDE), 1(3), 265-268.",
            "Maharani, R. Y., Repelita, T., Nurcahyani, R., & Noviana, S. (2024). Pola Pengembangan Paragraf pada Sebuah Tulisan. Esensi Pendidikan Inspiratif, 6(3).",
          ].map((r) => (
            <li key={r} className="flex gap-4 p-5 rounded-2xl border border-border bg-background/40">
              <FileText className="w-5 h-5 text-brand shrink-0 mt-1" />
              <span className="italic text-foreground/80">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
    © {new Date().getFullYear()} Paragraf.id — Materi Pengembangan Paragraf KTI.
  </footer>
);

export default function ParagrafSite() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Pengertian />
        <Fungsi />
        <Macam />
        <Syarat />
        <Konsep />
        <Ciri />
        <Pola />
        <Strategi />
        <Tujuan />
        <Referensi />
      </main>
      <Footer />
    </div>
  );
}
