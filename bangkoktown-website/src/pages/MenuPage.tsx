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
          <Card variant="transparent" className="bg-company-neutral/50 border-none">
            <div className="text-center text-company-secondary/80 text-sm p-4">
              <div className="flex justify-center items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-company-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>Call us now to order or check if delivery is available at your location: <a href="tel:065568282" className="hover:text-company-primary">06 556 8282</a></p>
              </div>
              <p className="text-xs text-company-secondary/60 mb-2">Please note that we do not offer delivery through the website.</p>
            </div>
          </Card>
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