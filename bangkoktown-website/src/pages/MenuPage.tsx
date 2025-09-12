import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  BodyText,
  Card,
} from "../components/ui";
import { MenuContainer } from "../components/menu";

const menuPageCss = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Netflix-inspired font system */
:root {
  --netflix-font: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --netflix-display: 'Poppins', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Netflix-style typography classes */
.netflix-heading {
    font-family: var(--netflix-display);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.1;
}

.netflix-subheading {
    font-family: var(--netflix-display);
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
}

.netflix-body {
    font-family: var(--netflix-font);
    font-weight: 400;
    line-height: 1.5;
}

.netflix-body-medium {
    font-family: var(--netflix-font);
    font-weight: 500;
    line-height: 1.4;
}

.netflix-caption {
    font-family: var(--netflix-font);
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 0.875rem;
}
`;

export const MenuPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <style>{menuPageCss}</style>
      {/* Subtle animated background patterns matching homepage */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-600 to-amber-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-amber-600 to-red-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      {/* Netflix-style gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none -z-20"></div>

      {/* Hero Section - Netflix Cinematic Style */}
      <section className="relative min-h-screen flex items-center justify-center z-20">
        <div className="absolute inset-0">
          <img
            src="/images/gradient-hero-prerender.webp"
            alt="Thai cuisine heritage background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>
        </div>

        <Container className="relative z-10 text-center">
          {/* Premium floating badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600/20 to-amber-600/20 rounded-full border border-red-500/30 mb-12 hover:scale-105 transition-all duration-500">
            <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-amber-500 rounded-full animate-pulse"></div>
            <span className="netflix-caption text-red-400">
              Our Culinary Journey
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h1 className="netflix-heading text-6xl md:text-8xl lg:text-9xl mb-12 text-white">
              Our <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent">Menu</span>
            </h1>
            <p className="netflix-body text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              From Bangkok streets to UAE hearts. Three generations of authentic
              Thai flavors that honor tradition while creating new memories.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <main className="relative bg-black z-30">
        <Container>
          <MenuContainer isPreview={false} />
          <div className="text-center mt-8"></div>
        </Container>
      </main>
    </div>
  );
};