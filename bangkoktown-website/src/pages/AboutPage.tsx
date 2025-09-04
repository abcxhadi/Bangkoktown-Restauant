import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  BodyText,
  Card,
} from "../components/ui";
import { useNavigate } from "react-router-dom";
import { NetflixButton } from "../components/ui/NetflixButton";
import { PremiumLocationsSection } from "../components/ui/PremiumLocationsSection";

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600/20 to-amber-600/20 backdrop-blur-xl rounded-full border border-red-500/30 mb-12 hover:scale-105 transition-all duration-500">
            <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-amber-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-400 tracking-wider uppercase">
              Our Heritage Journey
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Heading1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tight leading-none">
              Our{" "}
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
                Story
              </span>
            </Heading1>
            <BodyText className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              From Bangkok streets to UAE hearts. Three generations of authentic
              Thai flavors that honor tradition while creating new memories.
            </BodyText>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <main className="relative bg-black z-30">
        <Container>
          {/* Heritage Story Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600/20 to-red-600/20 backdrop-blur-xl rounded-full border border-amber-500/30 mb-12">
                <div className="text-3xl animate-pulse">📖</div>
                <span className="text-sm font-semibold text-amber-400 tracking-wider uppercase">
                  Heritage Journey
                </span>
              </div>

              <Heading2 className="text-5xl lg:text-7xl mb-8 text-white font-black tracking-tight">
                Bangkok to Your Table
              </Heading2>

              <BodyText className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                A legacy that began in Thailand's bustling capital and continues
                to flourish in the heart of the UAE.
              </BodyText>
            </div>

            {/* Story Card */}
            <div className="group relative mb-24">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 to-red-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Card
                variant="transparent"
                className="relative p-16 bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <Heading3 className="text-4xl lg:text-5xl mb-8 bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent font-bold">
                      Our Heritage
                    </Heading3>

                    <BodyText className="mb-8 text-xl leading-relaxed text-gray-300 font-light">
                      What started in Bangkok's vibrant street markets has
                      evolved into the UAE's most beloved Thai dining
                      destination. Our grandmother's secret recipes, perfected
                      over three generations, form the heart of every dish we
                      serve with pride and passion.
                    </BodyText>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="group/stat text-center p-8 bg-gradient-to-br from-amber-600/10 to-red-600/10 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                        <div className="text-4xl font-black text-amber-400 mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                          25+
                        </div>
                        <div className="text-lg text-gray-400 font-medium">
                          Years of Excellence
                        </div>
                      </div>
                      <div className="group/stat text-center p-8 bg-gradient-to-br from-red-600/10 to-amber-600/10 backdrop-blur-sm rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                        <div className="text-4xl font-black text-red-400 mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                          100%
                        </div>
                        <div className="text-lg text-gray-400 font-medium">
                          Authentic Recipes
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
          </section>

          {/* Netflix-style content divider */}
          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px top-1"></div>
          </div>

          {/* Philosophy Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-full border border-emerald-500/30 mb-12">
                <div className="text-3xl animate-bounce">🌱</div>
                <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Our Philosophy
                </span>
              </div>

              <Heading2 className="text-5xl lg:text-7xl mb-8 text-white font-black tracking-tight">
                More Than Food
              </Heading2>

              <BodyText className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                Every dish tells a story. Every meal creates connections. Every
                experience builds bridges between cultures.
              </BodyText>
            </div>

            {/* Philosophy Card */}
            <div className="group relative mb-16">
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
                    <Heading3 className="text-4xl lg:text-5xl mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">
                      Cultural Connection
                    </Heading3>

                    <BodyText className="mb-10 text-xl leading-relaxed text-gray-300 font-light">
                      We believe food is the universal language that transcends
                      borders and unites hearts. Every dish we craft serves as a
                      bridge between Thailand's rich culinary heritage and the
                      vibrant multicultural tapestry of the UAE.
                    </BodyText>

                    <div className="flex flex-wrap gap-4">
                      <div className="group/tag flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600/20 to-red-600/20 backdrop-blur-sm rounded-full border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300">
                        <span className="text-xl group-hover/tag:scale-110 transition-transform duration-300">
                          🌶️
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
                          Premium Ingredients
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
          </section>

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent h-px"></div>
          </div>

          {/* Recognition Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-xl rounded-full border border-yellow-500/30 mb-12">
                <div className="text-3xl animate-pulse">🏆</div>
                <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">
                  Recognition & Awards
                </span>
              </div>

              <Heading2 className="text-5xl lg:text-7xl mb-8 text-white font-black tracking-tight">
                Proven Excellence
              </Heading2>

              <BodyText className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                Our commitment to authentic Thai cuisine and exceptional service
                has earned recognition from critics and customers across the
                UAE.
              </BodyText>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "Best Thai Restaurant",
                  subtitle: "UAE Food Awards 2024",
                  gradient: "from-yellow-500/20 to-amber-500/20",
                  border: "border-yellow-500/30 hover:border-yellow-500/60",
                },
                {
                  icon: "⭐",
                  title: "4.8/5 Rating",
                  subtitle: "Google Reviews",
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  border: "border-blue-500/30 hover:border-blue-500/60",
                },
                {
                  icon: "👥",
                  title: "50,000+",
                  subtitle: "Happy Customers",
                  gradient: "from-green-500/20 to-emerald-500/20",
                  border: "border-green-500/30 hover:border-green-500/60",
                },
                {
                  icon: "🌟",
                  title: "TripAdvisor Excellence",
                  subtitle: "Certificate Winner",
                  gradient: "from-purple-500/20 to-pink-500/20",
                  border: "border-purple-500/30 hover:border-purple-500/60",
                },
              ].map((award, index) => (
                <div
                  key={index}
                  className={`group/award bg-gray-900/60 backdrop-blur-sm p-10 rounded-2xl text-center border ${award.border} transition-all duration-500 hover:scale-105 hover:bg-gray-800/60`}
                >
                  <div className="text-6xl mb-6 group-hover/award:scale-110 transition-transform duration-500">
                    {award.icon}
                  </div>
                  <Heading3 className="text-2xl font-bold mb-4 text-white">
                    {award.title}
                  </Heading3>
                  <BodyText className="text-gray-400 font-medium">
                    {award.subtitle}
                  </BodyText>
                </div>
              ))}
            </div>
          </section>

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent h-px"></div>
          </div>

          {/* Locations Section */}
          <PremiumLocationsSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
          </div>

          {/* CTA Section - Netflix Style */}
          <section className="py-32">
            <div className="relative overflow-hidden rounded-3xl group">
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-red-600/30 via-transparent to-amber-600/30 rounded-3xl"></div>
                <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
              </div>

              <div className="relative p-16 md:p-24 text-center">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-12">
                  <div className="w-3 h-3 bg-gradient-to-r from-white to-red-300 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white tracking-wider uppercase">
                    Ready to Experience
                  </span>
                  <div className="w-3 h-3 bg-gradient-to-r from-red-300 to-white rounded-full animate-pulse"></div>
                </div>

                <Heading2 className="text-5xl lg:text-7xl text-white mb-12 font-black tracking-tight leading-tight">
                  Authentic Thai <br />
                  <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
                    Cuisine
                  </span>
                </Heading2>

                <BodyText className="text-white/80 text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-light">
                  Join thousands who've made us their favorite Thai restaurant
                  in the UAE. Taste the difference that three generations of
                  tradition makes.
                </BodyText>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <NetflixButton
                    variant="primary"
                    onClick={() => navigate("/menu")}
                    icon="📖"
                  >
                    Explore Menu
                  </NetflixButton>
                  <NetflixButton
                    variant="outline"
                    onClick={() => navigate("/reservations")}
                    icon="🍽️"
                  >
                    Reserve Table
                  </NetflixButton>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};
