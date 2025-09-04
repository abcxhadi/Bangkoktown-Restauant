import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Heading1,
  Heading2,
  Heading3,
  BodyText,
  ThaiDivider,
  LanternIcon,
  ThaiPatternIcon,
  HeroVideoSection,
} from "../components/ui";
import { MenuPreview } from "../components/menu";

import { NetflixButton } from '../components/ui/NetflixButton';
import { PremiumLocationsSection } from '../components/ui/PremiumLocationsSection';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate("/menu");
  };

  const handleMakeReservation = () => {
    navigate("/reservations");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle animated background patterns */}
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
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10"></div>

      {/* Hero Video Section */}
      <HeroVideoSection
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/hero-fallback.jpg"
        audioSrc="/videos/music.mp3"
        overlayText="Where Every Bite Tells a Thai Story"
        className="relative z-20 hero-banner"
      >
        {/* Enhanced hero overlay with Netflix-style gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>
      </HeroVideoSection>

      {/* Main Content Section */}
      <main className="relative bg-black z-30">
        <Container>
          {/* Welcome Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              {/* Premium floating badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600/20 to-amber-600/20 backdrop-blur-xl rounded-full border border-red-500/30 mb-12 hover:scale-105 transition-all duration-500">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-amber-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-red-400 tracking-wider uppercase">
                  Welcome to Bangkok Town
                </span>
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full animate-pulse"></div>
              </div>

              <Heading1 className="mb-12 bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent max-w-5xl mx-auto leading-tight text-6xl lg:text-7xl font-black tracking-tight">
                A Glimpse into Thailand
              </Heading1>

              <BodyText className="max-w-4xl mx-auto mb-16 text-2xl text-gray-300 leading-relaxed font-light">
                Embark on a culinary journey that brings the vibrant streets of
                Bangkok to your plate. Experience the perfect harmony of
                traditional recipes, fresh ingredients, and warm Thai
                hospitality.
              </BodyText>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <NetflixButton
                  variant="primary"
                  onClick={handleViewMenu}
                  icon="📖"
                >
                  Explore Menu
                </NetflixButton>
                <NetflixButton
                  variant="outline"
                  onClick={handleMakeReservation}
                  icon="🍽️"
                >
                  Reserve Experience
                </NetflixButton>
              </div>
            </div>
          </section>

          {/* Netflix-style content divider */}
          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px top-1"></div>
          </div>

          {/* Featured Menu Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600/20 to-red-600/20 backdrop-blur-xl rounded-full border border-amber-500/30 mb-12">
                <div className="text-3xl animate-bounce">🍜</div>
                <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
                  Featured Culinary Experience
                </span>
              </div>

              <Heading2 className="text-5xl lg:text-6xl mb-8 text-white font-black tracking-tight">
                Taste the Authentic Flavors
              </Heading2>

              <BodyText className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                Discover our most beloved dishes, crafted with traditional
                recipes and the finest ingredients imported directly from
                Thailand.
              </BodyText>
            </div>

            {/* Enhanced MenuPreview with Netflix-style container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-amber-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 shadow-2xl">
                <MenuPreview maxItems={6} showCategoryPreviews={false} />
              </div>
            </div>
          </section>

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px"></div>
          </div>

          {/* Enhanced About Section */}
          <PremiumAboutSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
          </div>

          {/* Enhanced Why Choose Us Section */}
          <PremiumWhyChooseUsSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px"></div>
          </div>

          {/* Enhanced Locations Section */}
          <PremiumLocationsSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
          </div>
        </Container>
      </main>
    </div>
  );
};

// Premium About Section with Netflix aesthetics
const PremiumAboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-full border border-emerald-500/30 mb-12">
          <div className="text-3xl animate-pulse">📖</div>
          <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
            Our Heritage Journey
          </span>
        </div>

        <Heading2 className="text-5xl lg:text-6xl mb-8 text-white font-black tracking-tight">
          From Bangkok Streets to Your Table
        </Heading2>

        <BodyText className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
          A story of passion, tradition, and authentic Thai flavors brought to
          the UAE with love.
        </BodyText>
      </div>

      <div className="space-y-24">
        {/* Heritage Story Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 to-red-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Card
            variant="transparent"
            className="relative p-16 bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Heading3 className="text-3xl lg:text-4xl mb-8 bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent font-bold">
                  Our Heritage Story
                </Heading3>

                <BodyText className="mb-8 text-xl leading-relaxed text-gray-300 font-light">
                  From Bangkok's bustling streets to the UAE, we carry forward a
                  family legacy of authentic Thai cuisine. Our grandmother's
                  secret recipes, passed down through generations, form the
                  heart of every dish we serve.
                </BodyText>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="group/stat text-center p-6 bg-gradient-to-br from-amber-600/10 to-red-600/10 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                    <div className="text-3xl font-black text-amber-400 mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      25+
                    </div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                      Years Experience
                    </div>
                  </div>
                  <div className="group/stat text-center p-6 bg-gradient-to-br from-red-600/10 to-amber-600/10 backdrop-blur-sm rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                    <div className="text-3xl font-black text-red-400 mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      100+
                    </div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                      Traditional Recipes
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative group/image">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-red-600/20 rounded-3xl blur-2xl opacity-60 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/thai-temple.jpg"
                    alt="Thai heritage and tradition"
                    className="w-full h-96 object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Philosophy Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Card
            variant="transparent"
            className="relative p-16 bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group/image">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl blur-2xl opacity-60 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/thai-bowl.png"
                    alt="Traditional Thai cuisine philosophy"
                    className="w-full h-96 object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              <div>
                <Heading3 className="text-3xl lg:text-4xl mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">
                  Our Philosophy
                </Heading3>

                <BodyText className="mb-10 text-xl leading-relaxed text-gray-300 font-light">
                  We believe food is a universal language that connects hearts
                  and cultures. Every dish we create is a bridge between
                  Thailand's rich culinary heritage and the vibrant
                  multicultural spirit of the UAE.
                </BodyText>

                <div className="flex flex-wrap gap-4">
                  <div className="group/tag flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600/20 to-red-600/20 backdrop-blur-sm rounded-full border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300">
                    <span className="text-xl group-hover/tag:scale-110 transition-transform duration-300">
                      🥘
                    </span>
                    <span className="text-sm font-semibold text-amber-400 tracking-wide">
                      Authentic Flavors
                    </span>
                  </div>
                  <div className="group/tag flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-full border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300">
                    <span className="text-xl group-hover/tag:scale-110 transition-transform duration-300">
                      🌿
                    </span>
                    <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                      Fresh Ingredients
                    </span>
                  </div>
                  <div className="group/tag flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-600/20 to-pink-600/20 backdrop-blur-sm rounded-full border border-rose-500/30 hover:border-rose-500/60 transition-all duration-300">
                    <span className="text-xl group-hover/tag:scale-110 transition-transform duration-300">
                      ❤️
                    </span>
                    <span className="text-sm font-semibold text-rose-400 tracking-wide">
                      Thai Hospitality
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Premium Why Choose Us Section
const PremiumWhyChooseUsSection = () => (
  <section className="py-24">
    <div className="relative overflow-hidden rounded-3xl group">
      <div className="absolute inset-0">
        <img
          src="/images/gradient-hero-prerender.webp"
          alt="Thai cuisine background"
          className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/80 rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-amber-600/30 rounded-3xl"></div>
      </div>

      <div className="relative p-16 md:p-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-12">
            <div className="w-3 h-3 bg-gradient-to-r from-white to-amber-300 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white tracking-wider uppercase">
              Why Choose Bangkok Town
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-white rounded-full animate-pulse"></div>
          </div>

          <Heading2 className="text-5xl lg:text-7xl text-white mb-8 font-black tracking-tight leading-tight">
            Experience the Difference
          </Heading2>

          <BodyText className="text-white/80 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            Discover what makes us the UAE's most beloved destination for
            authentic Thai cuisine and exceptional dining experiences.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "🌶️",
              title: "100% Authentic",
              desc: "Traditional recipes passed down through generations, using imported spices and authentic cooking techniques straight from Thailand's kitchens.",
            },
            {
              icon: "⭐",
              title: "Premium Quality",
              desc: "Only the freshest ingredients, carefully sourced and prepared daily. Our commitment to quality means no compromises, ever.",
            },
            {
              icon: "❤️",
              title: "Thai Hospitality",
              desc: "Experience the genuine warmth of Thai culture with our friendly service and welcoming family atmosphere that feels like home.",
            },
          ].map((item, index) => (
            <div key={index} className="group/card">
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl h-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                <div className="text-center">
                  <div className="text-7xl mb-8 group-hover/card:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <Heading3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                    {item.title}
                  </Heading3>
                  <BodyText className="text-white/80 text-lg leading-relaxed font-light">
                    {item.desc}
                  </BodyText>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <Heading3 className="text-3xl lg:text-4xl text-white mb-12 font-bold">
            Awards & Recognition
          </Heading3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏆",
                title: "Best Thai Restaurant",
                subtitle: "UAE Food Awards 2024",
              },
              { icon: "⭐", title: "4.8/5 Rating", subtitle: "Google Reviews" },
              { icon: "👥", title: "50,000+", subtitle: "Happy Customers" },
              {
                icon: "🌟",
                title: "TripAdvisor",
                subtitle: "Certificate of Excellence",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="group/award bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl mb-4 group-hover/award:scale-110 transition-transform duration-500">
                  {award.icon}
                </div>
                <Heading3 className="text-xl font-bold mb-3 text-white">
                  {award.title}
                </Heading3>
                <BodyText className="text-sm text-white/70 font-medium">
                  {award.subtitle}
                </BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


