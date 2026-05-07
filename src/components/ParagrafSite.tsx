import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

/* ---------------- Hero ---------------- */

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Aurora background */}
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
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 270) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 270) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
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
          yang Bertenaga.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg md:text-2xl text-white/70 max-w-2xl leading-relaxed"
        >
          Panduan modern untuk merancang paragraf yang runtut, koheren, dan
          meyakinkan dalam karya tulis ilmiah.
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
            ["6", "Strategi Praktis"],
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
          tulis ilmiah, paragraf menyampaikan gagasan secara runtut, logis, dan mudah
          dipahami oleh pembaca.
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

const fungsiData = [
  { icon: Target, title: "Menyampaikan Gagasan", text: "Mengantarkan satu gagasan utama secara jelas dan terfokus." },
  { icon: ListChecks, title: "Sistematika Tulisan", text: "Menyusun tulisan secara teratur, runtut, dan sistematis." },
  { icon: Lightbulb, title: "Memudahkan Pembaca", text: "Membantu pembaca memahami isi tulisan dengan cepat." },
];

const Fungsi = () => (
  <Section id="fungsi">
    <Reveal>
      <SectionEyebrow>02 · Fungsi</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Mengapa paragraf <span className="text-brand">penting?</span>
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {fungsiData.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            className="group h-full p-8 rounded-3xl border border-border bg-card/60 backdrop-blur hover:border-brand/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white" style={{ background: "var(--gradient-violet)" }}>
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.text}</p>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const macamData = [
  { num: "01", title: "Paragraf Pembuka", desc: "Pengantar untuk menarik minat dan mempersiapkan pikiran pembaca terhadap masalah yang akan dibahas." },
  { num: "02", title: "Paragraf Penghubung", desc: "Berisi inti persoalan yang menguraikan masalah secara mendalam dan terperinci." },
  { num: "03", title: "Paragraf Penutup", desc: "Bertujuan mengakhiri sebuah karangan atau tulisan secara efektif dan berkesan." },
];

const Macam = () => (
  <Section id="macam" className="overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
    <Reveal>
      <SectionEyebrow>03 · Jenis</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Tiga macam paragraf<br /> dalam sebuah karangan.
      </h2>
    </Reveal>
    <div className="mt-16 space-y-4">
      {macamData.map((m, i) => (
        <Reveal key={m.num} delay={i * 0.08}>
          <motion.div
            whileHover={{ x: 8 }}
            className="group flex flex-col md:flex-row gap-6 md:items-center p-8 rounded-3xl border border-border bg-background/40 backdrop-blur"
          >
            <div className="text-5xl font-extrabold text-transparent bg-clip-text shrink-0 md:w-40" style={{ backgroundImage: "var(--gradient-violet)" }}>
              {m.num}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{m.title}</h3>
              <p className="text-muted-foreground text-lg">{m.desc}</p>
            </div>
            <ArrowRight className="w-6 h-6 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const syaratData = [
  { n: "1", title: "Kesatuan", desc: "Hanya mengandung satu gagasan pokok dalam tiap paragraf." },
  { n: "2", title: "Kepaduan", desc: "Hubungan timbal balik antar kalimat yang menyatu secara logis." },
  { n: "3", title: "Kelengkapan", desc: "Berisi kalimat penjelas yang cukup untuk menunjang gagasan utama." },
];

const Syarat = () => (
  <Section id="syarat">
    <Reveal>
      <SectionEyebrow>04 · Prinsip</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Tiga syarat pembentukan<br /> paragraf yang utuh.
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {syaratData.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.1}>
          <div className="relative h-full p-10 rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" style={{ background: "var(--gradient-violet)" }} />
            <div className="relative">
              <div className="text-7xl font-extrabold text-transparent bg-clip-text mb-4" style={{ backgroundImage: "var(--gradient-violet)" }}>
                {s.n}
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Konsep = () => (
  <Section id="konsep">
    <Reveal>
      <div className="relative rounded-[2rem] p-12 md:p-20 border border-border overflow-hidden text-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.6 0.25 290 / 0.6), transparent 50%), radial-gradient(circle at 70% 70%, oklch(0.6 0.25 320 / 0.6), transparent 50%)",
        }} />
        <div className="relative max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <p className="text-2xl md:text-4xl font-semibold text-white leading-relaxed">
            "Pemilihan pola yang tepat menentukan kejelasan, koherensi, dan
            efektivitas pesan dalam tulisan."
          </p>
          <div className="mt-8 text-sm text-white/60 uppercase tracking-[0.2em]">— Inti Materi</div>
        </div>
      </div>
    </Reveal>
  </Section>
);

const ciriData = [
  "Memiliki satu ide pokok",
  "Kalimat saling mendukung",
  "Bahasa jelas dan efektif",
  "Logis dan runtut",
  "Tetap pada topik utama",
  "Hubungan antar kalimat padu",
];

const Ciri = () => (
  <Section id="ciri">
    <Reveal>
      <SectionEyebrow>05 · Karakteristik</SectionEyebrow>
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

const polaData = [
  { name: "Deduktif", desc: "Umum ke khusus." },
  { name: "Induktif", desc: "Khusus ke umum." },
  { name: "Campuran", desc: "Gabungan deduktif & induktif." },
  { name: "Perbandingan", desc: "Membandingkan dua hal." },
  { name: "Sebab-Akibat", desc: "Hubungan kausalitas." },
  { name: "Contoh", desc: "Memperjelas dengan contoh." },
  { name: "Definisi", desc: "Menjelaskan pengertian." },
];

const Pola = () => (
  <Section id="pola">
    <Reveal>
      <SectionEyebrow>06 · Klasifikasi</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Tujuh pola untuk membentuk<br /> paragraf yang kuat.
      </h2>
    </Reveal>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
      {polaData.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.05}>
          <motion.div
            whileHover={{ y: -4 }}
            className="group p-7 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-brand/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              <ArrowRight className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-muted-foreground">{p.desc}</p>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const strategiData = [
  { icon: BookOpen, title: "Narasi", desc: "Menceritakan kejadian berdasarkan perkembangan waktu." },
  { icon: BarChart3, title: "Data Statistik", desc: "Menyajikan angka, tabel, atau grafik untuk gambaran nyata." },
  { icon: Lightbulb, title: "Pemberian Contoh", desc: "Gambaran nyata peristiwa relevan untuk memperjelas ide." },
  { icon: Bookmark, title: "Penggunaan Kutipan", desc: "Menggunakan teori orang lain sebagai pengendali topik." },
  { icon: Pencil, title: "Pemberian Definisi", desc: "Menjelaskan pengertian, tujuan, dan manfaat suatu objek." },
  { icon: Group, title: "Klasifikasi", desc: "Mengelompokkan unsur berdasarkan kesamaan karakteristik." },
];

const Strategi = () => (
  <Section id="strategi" className="overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
    <Reveal>
      <SectionEyebrow>07 · Teknik</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Strategi pengembangan<br /> paragraf ilmiah.
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
      {strategiData.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.06}>
          <motion.article
            whileHover={{ y: -6 }}
            className="group h-full p-8 rounded-3xl border border-border bg-background/50 backdrop-blur hover:border-brand/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white" style={{ background: "var(--gradient-violet)" }}>
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.article>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Tujuan = () => (
  <Section id="tujuan">
    <Reveal>
      <SectionEyebrow>08 · Tujuan Akhir</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
        Apa yang ingin <span className="text-brand">dicapai?</span>
      </h2>
    </Reveal>
    <div className="grid md:grid-cols-2 gap-6 mt-16">
      {[
        { icon: Award, title: "Mempengaruhi & Meyakinkan", desc: "Meyakinkan pembaca atas fakta atau kejadian yang diamati melalui kalimat yang utuh dan padu." },
        { icon: Target, title: "Efektivitas Pesan", desc: "Memastikan pesan diterima dengan mudah tanpa menimbulkan salah tafsir di benak pembaca." },
      ].map((t, i) => (
        <Reveal key={t.title} delay={i * 0.1}>
          <div className="relative h-full p-10 rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-violet)" }} />
            <t.icon className="w-10 h-10 text-brand mb-6 relative" />
            <h3 className="text-2xl font-bold mb-3 relative">{t.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed relative">{t.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Referensi = () => (
  <Section id="referensi">
    <Reveal>
      <div className="rounded-[2rem] p-12 md:p-16 border border-border bg-card/60 backdrop-blur">
        <SectionEyebrow>09 · Penutup</SectionEyebrow>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Terima kasih.</h2>
        <p className="text-lg text-muted-foreground mb-10">Referensi materi yang digunakan:</p>
        <ul className="space-y-4">
          {[
            "Syahputra, E., et al. (2022). Penerapan dan pengembangan paragraf Bahasa Indonesia. Jurnal Multidisiplin Dehasen.",
            "Maharani, R. Y., et al. (2024). Pola Pengembangan Paragraf Pada Sebuah Tulisan. Esensi Pendidikan Inspiratif.",
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
