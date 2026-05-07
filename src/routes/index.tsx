import { createFileRoute } from "@tanstack/react-router";
import PresentationSlides from "@/components/PresentationSlides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pengembangan Paragraf — Presentasi Karya Tulis Ilmiah" },
      { name: "description", content: "Presentasi interaktif tentang pengembangan paragraf dalam karya tulis ilmiah: pengertian, fungsi, syarat, pola, dan strategi." },
      { property: "og:title", content: "Pengembangan Paragraf — Presentasi" },
      { property: "og:description", content: "Slideshow modern tentang paragraf dalam karya tulis ilmiah." },
    ],
  }),
  component: Index,
});

function Index() {
  return <PresentationSlides />;
}
