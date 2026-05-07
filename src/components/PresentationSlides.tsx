import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Layers,
  CheckCircle2,
  Lightbulb,
  ListChecks,
  Sparkles,
  Quote,
  Award,
  GraduationCap,
  FileText,
  BarChart3,
  Bookmark,
  Group,
  Pencil,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const item = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

function SlideShell({ children, eyebrow, badge }: { children: React.ReactNode; eyebrow?: string; badge?: string }) {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="w-full max-w-6xl mx-auto px-6 md:px-12"
    >
      {(eyebrow || badge) && (
        <motion.div variants={item} className="mb-6 flex items-center gap-3 text-sm">
          {badge && (
            <span className="px-3 py-1 rounded-full bg-brand/10 text-brand font-semibold tracking-wide">
              {badge}
            </span>
          )}
          {eyebrow && <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">{eyebrow}</span>}
        </motion.div>
      )}
      {children}
    </motion.div>
  );
}

// Slides
const SlideHero = () => (
  <div className="w-full h-full flex items-center justify-center text-center px-6"
       style={{ background: "var(--gradient-hero)" }}>
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-4xl text-brand-foreground">
      <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm mb-8">
        <Sparkles className="w-4 h-4" /> Materi Bahasa Indonesia
      </motion.div>
      <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
        Pengembangan <br /> <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Paragraf</span>
      </motion.h1>
      <motion.p variants={item} className="text-xl md:text-2xl text-blue-100 italic mb-10">
        Dalam Karya Tulis Ilmiah
      </motion.p>
      <motion.div variants={item} className="flex items-center justify-center gap-2 text-blue-200 text-sm">
        <GraduationCap className="w-4 h-4" /> Tekan ➝ atau Spasi untuk memulai
      </motion.div>
    </motion.div>
  </div>
);

const SlidePengertian = () => (
  <SlideShell badge="01" eyebrow="Definisi">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
      Apa itu <span className="text-brand">Paragraf?</span>
    </motion.h2>
    <motion.div variants={item} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
      <BookOpen className="w-12 h-12 text-brand mb-6" />
      <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
        <strong className="text-brand">Paragraf</strong> adalah kumpulan kalimat yang saling berkaitan dan
        membahas <em>satu ide pokok</em>. Dalam karya tulis ilmiah, paragraf menyampaikan gagasan secara
        runtut, logis, dan mudah dipahami.
      </p>
    </motion.div>
  </SlideShell>
);

const fungsiData = [
  { icon: Target, text: "Menyampaikan satu gagasan utama secara jelas." },
  { icon: ListChecks, text: "Menyusun tulisan secara teratur dan sistematis." },
  { icon: Lightbulb, text: "Memudahkan pembaca memahami isi tulisan." },
];

const SlideFungsi = () => (
  <SlideShell badge="02" eyebrow="Fungsi">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">Fungsi Paragraf</motion.h2>
    <div className="grid md:grid-cols-3 gap-6">
      {fungsiData.map((f, i) => (
        <motion.div
          key={i}
          variants={item}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group p-8 bg-card rounded-2xl border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <f.icon className="w-7 h-7" />
          </div>
          <p className="text-lg font-semibold leading-snug">{f.text}</p>
        </motion.div>
      ))}
    </div>
  </SlideShell>
);

const macamData = [
  { title: "Paragraf Pembuka", desc: "Pengantar untuk menarik minat dan mempersiapkan pikiran pembaca terhadap masalah.", color: "from-blue-400 to-blue-600" },
  { title: "Paragraf Penghubung", desc: "Berisi inti persoalan yang menguraikan masalah secara mendalam.", color: "from-indigo-400 to-indigo-600" },
  { title: "Paragraf Penutup", desc: "Bertujuan mengakhiri sebuah karangan/tulisan secara efektif.", color: "from-purple-400 to-purple-600" },
];

const SlideMacam = () => (
  <div className="w-full h-full flex items-center justify-center px-6 py-20" style={{ background: "oklch(0.18 0.04 260)" }}>
    <SlideShell badge="03" eyebrow="Jenis">
      <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-white">
        Macam-Macam Paragraf
      </motion.h2>
      <div className="space-y-5">
        {macamData.map((m, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ x: 8 }}
            className="group flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <div className={`w-2 h-16 rounded-full bg-gradient-to-b ${m.color}`} />
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{m.title}</h3>
              <p className="text-blue-100/80 italic text-lg">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  </div>
);

const syaratData = [
  { n: 1, title: "Kesatuan", desc: "Hanya mengandung satu gagasan pokok dalam tiap paragraf." },
  { n: 2, title: "Kepaduan", desc: "Hubungan timbal balik antar kalimat yang menyatu." },
  { n: 3, title: "Kelengkapan", desc: "Berisi kalimat penjelas yang cukup untuk menunjang gagasan utama." },
];

const SlideSyarat = () => (
  <SlideShell badge="04" eyebrow="Prinsip">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-14 tracking-tight">
      Syarat Pembentukan Paragraf
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {syaratData.map((s) => (
        <motion.div key={s.n} variants={item} whileHover={{ y: -6 }} className="text-center p-8 rounded-3xl bg-card border border-border shadow-[var(--shadow-card)]">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl font-bold text-brand-foreground"
               style={{ background: "var(--gradient-hero)" }}>
            {s.n}
          </div>
          <h3 className="font-bold text-2xl mb-3">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </SlideShell>
);

const SlideKonsep = () => (
  <SlideShell badge="05" eyebrow="Inti Materi">
    <motion.div variants={item} className="rounded-3xl p-12 md:p-20 text-center shadow-[var(--shadow-elegant)]"
                style={{ background: "var(--gradient-soft)" }}>
      <Quote className="w-16 h-16 mx-auto mb-8 text-brand" />
      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
        Pentingnya Pola Pengembangan
      </h2>
      <p className="text-xl md:text-2xl leading-relaxed italic text-foreground/80 max-w-3xl mx-auto">
        "Pemilihan pola yang tepat mempengaruhi kejelasan, koherensi, dan efektivitas pesan.
        Ketidakmampuan mengembangkan paragraf berakibat pada tulisan yang tidak terstruktur."
      </p>
    </motion.div>
  </SlideShell>
);

const ciriData = [
  "Memiliki satu ide pokok",
  "Kalimat saling mendukung",
  "Bahasa jelas dan efektif",
  "Logis dan runtut",
  "Tetap pada topik utama",
];

const SlideCiri = () => (
  <SlideShell badge="06" eyebrow="Karakteristik">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
      Ciri Paragraf yang <span className="text-brand">Baik</span>
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-4">
      {ciriData.map((c, i) => (
        <motion.div
          key={i}
          variants={item}
          whileHover={{ scale: 1.02, x: 4 }}
          className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:border-brand/40 transition-colors"
        >
          <CheckCircle2 className="w-7 h-7 text-brand shrink-0" />
          <span className="text-lg font-medium">{c}</span>
        </motion.div>
      ))}
    </div>
  </SlideShell>
);

const polaData = ["Deduktif", "Induktif", "Campuran", "Perbandingan", "Sebab-Akibat", "Contoh", "Definisi"];

const SlidePola = () => (
  <SlideShell badge="07" eyebrow="Klasifikasi">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
      7 Jenis Pola Pengembangan
    </motion.h2>
    <motion.p variants={item} className="text-muted-foreground text-lg mb-12">
      Pilih pola yang paling sesuai dengan tujuan tulisanmu.
    </motion.p>
    <div className="flex flex-wrap gap-4">
      {polaData.map((p, i) => (
        <motion.span
          key={p}
          variants={item}
          whileHover={{ scale: 1.08, y: -4 }}
          className="px-7 py-3 rounded-full bg-card border-2 border-brand/30 text-brand text-lg font-semibold shadow-[var(--shadow-card)] cursor-default"
        >
          {i + 1}. {p}
        </motion.span>
      ))}
    </div>
  </SlideShell>
);

const strategiData = [
  { icon: BookOpen, title: "Narasi", desc: "Menceritakan kejadian berdasarkan perkembangan waktu." },
  { icon: BarChart3, title: "Data Statistik", desc: "Menyajikan angka, tabel, atau grafik untuk gambaran nyata fakta." },
  { icon: Lightbulb, title: "Pemberian Contoh", desc: "Gambaran nyata peristiwa relevan untuk memperjelas ide pokok." },
  { icon: Bookmark, title: "Penggunaan Kutipan", desc: "Menggunakan teori orang lain (parafrase) sebagai pengendali topik." },
  { icon: Pencil, title: "Pemberian Definisi", desc: "Menjelaskan pengertian, tujuan, dan manfaat suatu objek." },
  { icon: Group, title: "Klasifikasi", desc: "Mengelompokkan unsur berdasarkan kesamaan karakteristik." },
];

const SlideStrategi = () => (
  <SlideShell badge="08" eyebrow="Teknik">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
      Strategi Pengembangan
    </motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {strategiData.map((s, i) => (
        <motion.article
          key={i}
          variants={item}
          whileHover={{ y: -6, rotate: -0.5 }}
          className="group p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:border-brand/40 transition-all"
        >
          <s.icon className="w-9 h-9 text-brand mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-xl mb-2 text-foreground">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
        </motion.article>
      ))}
    </div>
  </SlideShell>
);

const SlideTujuan = () => (
  <div className="w-full h-full flex items-center justify-center px-6 py-20" style={{ background: "var(--gradient-hero)" }}>
    <SlideShell badge="09" eyebrow="Tujuan Akhir">
      <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-white">
        Tujuan Akhir
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={item} whileHover={{ y: -6 }} className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur">
          <Award className="w-12 h-12 text-white mb-5" />
          <h3 className="text-2xl font-bold text-white mb-3">Mempengaruhi & Meyakinkan</h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            Meyakinkan pembaca atas fakta atau kejadian yang diamati melalui kalimat yang utuh.
          </p>
        </motion.div>
        <motion.div variants={item} whileHover={{ y: -6 }} className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur">
          <Target className="w-12 h-12 text-white mb-5" />
          <h3 className="text-2xl font-bold text-white mb-3">Efektivitas Pesan</h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            Memastikan pesan diterima dengan mudah tanpa menimbulkan salah tafsir.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  </div>
);

const SlideReferensi = () => (
  <SlideShell badge="10" eyebrow="Penutup">
    <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
      Terima Kasih
    </motion.h2>
    <motion.p variants={item} className="text-xl text-muted-foreground mb-12">Referensi materi:</motion.p>
    <motion.ul variants={item} className="space-y-4">
      {[
        "Syahputra, E., et al. (2022). Penerapan dan pengembangan paragraf Bahasa Indonesia. Jurnal Multidisiplin Dehasen.",
        "Maharani, R. Y., et al. (2024). Pola Pengembangan Paragraf Pada Sebuah Tulisan. Esensi Pendidikan Inspiratif.",
      ].map((r, i) => (
        <li key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
          <FileText className="w-6 h-6 text-brand shrink-0 mt-0.5" />
          <span className="italic text-foreground/80">{r}</span>
        </li>
      ))}
    </motion.ul>
  </SlideShell>
);

const slides = [
  { id: "hero", title: "Pembuka", node: <SlideHero /> },
  { id: "pengertian", title: "Pengertian", node: <SlidePengertian /> },
  { id: "fungsi", title: "Fungsi", node: <SlideFungsi /> },
  { id: "macam", title: "Macam", node: <SlideMacam /> },
  { id: "syarat", title: "Syarat", node: <SlideSyarat /> },
  { id: "konsep", title: "Konsep", node: <SlideKonsep /> },
  { id: "ciri", title: "Ciri", node: <SlideCiri /> },
  { id: "pola", title: "Pola", node: <SlidePola /> },
  { id: "strategi", title: "Strategi", node: <SlideStrategi /> },
  { id: "tujuan", title: "Tujuan", node: <SlideTujuan /> },
  { id: "referensi", title: "Referensi", node: <SlideReferensi /> },
];

export default function PresentationSlides() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total]);

  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Progress */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-border/40 z-50">
        <motion.div
          className="h-full bg-brand"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          {...fadeUp}
          className="absolute inset-0 flex items-center justify-center overflow-y-auto py-16"
        >
          {slides[index].node}
        </motion.div>
      </AnimatePresence>

      {/* Top right counter */}
      <div className="absolute top-6 right-6 z-50 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border text-sm font-mono shadow-sm">
        {String(index + 1).padStart(2, "0")} <span className="text-muted-foreground">/ {String(total).padStart(2, "0")}</span>
      </div>

      {/* Floating nav */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-border shadow-[var(--shadow-elegant)]">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand/10 text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5 px-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Ke slide ${s.title}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-brand" : "w-2 bg-border hover:bg-brand/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={index === total - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-brand text-brand-foreground hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Slide berikutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
