import React, { useState, useEffect } from 'react';
import {
  Container, Card
} from "../components/ui";
import { MenuContainer, SearchBar } from "../components/menu";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-company-neutral relative overflow-hidden">
      <style>{menuPageCss}</style>
      {/* Subtle animated background patterns matching homepage */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-company-primary to-company-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-company-accent to-company-primary rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      {/* Netflix-style gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-company-neutral/60 via-transparent to-company-neutral/80 pointer-events-none -z-20"></div>

      

      {/* Hero Section - Netflix Cinematic Style */}
      <section className="relative min-h-[20vh] flex items-center justify-center z-20">
        <div className="absolute inset-0">
          <img
            src="/images/gradient-hero-prerender.webp"
            alt="Thai cuisine heritage background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-company-neutral via-company-neutral/80 to-company-neutral/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-company-neutral/80 via-transparent to-company-neutral/40"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-company-neutral z-30">
        <Container>
          <div className="text-center py-8">
            <a
              href="tel:065568282"
              className="inline-flex flex-col items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-company-primary to-company-accent text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Call to Order</span>

            </a>
            <p className="text-xs text-company-secondary/60 mt-4">Please note that we do not offer delivery through the website.</p>
          </div>
          <SearchBar 
            searchTerm={searchTerm} 
            isVegOnly={isVegOnly} 
            onSearchChange={setSearchTerm} 
            onVegToggle={setIsVegOnly} 
          />
          <MenuContainer 
            isPreview={false} 
            searchTerm={searchTerm} 
            isVegOnly={isVegOnly} 
            setSearchTerm={setSearchTerm}
            setIsVegOnly={setIsVegOnly}
          />
          <div className="text-center mt-8"></div>
        </Container>
      </main>
    </div>
  );
};