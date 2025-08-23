import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Card, 
  Button, 
  Heading1,
  Heading2, 
  Heading3, 
  BodyText,
  ThaiDivider,
  LanternIcon,
  ThaiPatternIcon,
  HeroVideoSection
} from '../components/ui';
import { MenuPreview } from '../components/menu';
export const HomePage = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate('/menu');
  };

  const handleMakeReservation = () => {
    navigate('/reservations');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="min-h-screen bg-thai-cream relative">
      {/* Hero Video Section */}
      <HeroVideoSection
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/hero-fallback.jpg"
        audioSrc="/videos/music.mp3"
        overlayText="Where Every Bite Tells a Thai Story"
        className="relative z-10 hero-banner"
      >
        <></>
      </HeroVideoSection>
      
      {/* Main Content Section */}
      <main className="relative bg-thai-cream">
        <Container>
          {/* Welcome Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-thai-gold/10 rounded-full mb-8">
                <span className="text-2xl">🌟</span>
                <span className="text-sm font-semibold text-thai-gold">Welcome to Bangkok Town</span>
              </div>
              
              <Heading1 className="mb-8 bg-gradient-to-r from-thai-gold via-thai-orange to-thai-gold bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
                A Glimpse into Thailand
              </Heading1>
              
              <BodyText className="max-w-3xl mx-auto mb-12 text-xl text-thai-warmGray leading-relaxed">
                Embark on a culinary journey that brings the vibrant streets of Bangkok to your plate. Experience the perfect harmony of traditional recipes, fresh ingredients, and warm Thai hospitality.
              </BodyText>
              
              <div className="flex flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  onClick={handleViewMenu}
                  className="px-8 py-4 bg-gradient-to-r from-thai-red to-red-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Menu
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleMakeReservation}
                  className="px-8 py-4 border-2 border-thai-gold text-thai-gold font-semibold rounded-xl hover:bg-thai-gold hover:text-white transition-all duration-300"
                >
                  Reserve Your Table
                </Button>
              </div>
            </div>
          </section>

          <ThaiDivider />

          {/* Featured Menu Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-thai-orange/10 rounded-full mb-6">
                <span className="text-2xl">🍜</span>
                <span className="text-sm font-semibold text-thai-orange">Featured Dishes</span>
              </div>
              <Heading2 className="text-3xl lg:text-4xl mb-4">
                Taste the Authentic Flavors
              </Heading2>
              <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto">
                Discover our most beloved dishes, crafted with traditional recipes and the finest ingredients imported directly from Thailand.
              </BodyText>
            </div>
            
            {/* Your existing MenuPreview carousel component */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-thai-gold/5 via-transparent to-thai-orange/5 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-thai-cream/50 backdrop-blur-sm border border-thai-gold/10 rounded-3xl p-8">
                <MenuPreview maxItems={6} showCategoryPreviews={false} />
              </div>
            </div>
          </section>

          <ThaiDivider />

          {/* Enhanced About Section */}
          <EnhancedAboutSection />

          <ThaiDivider />

          {/* Enhanced Why Choose Us Section */}
          <EnhancedWhyChooseUsSection />

          <ThaiDivider />

          {/* Enhanced Locations Section */}
          <EnhancedLocationsSection />

          <ThaiDivider />

          {/* Contact Section */}
          <section className="py-20">
           
          </section>
        </Container>
      </main>
    </div>
  );
};

// Enhanced About Section
const EnhancedAboutSection = () => (
  <section className="py-20">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-thai-green/10 rounded-full mb-6">
        <span className="text-2xl">📖</span>
        <span className="text-sm font-semibold text-thai-green">Our Journey</span>
      </div>
      <Heading2 className="text-3xl lg:text-4xl mb-4">
        From Bangkok Streets to Your Table
      </Heading2>
      <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto">
        A story of passion, tradition, and authentic Thai flavors brought to the UAE with love.
      </BodyText>
    </div>

    <div className="space-y-16">
      {/* Our Story Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-thai-orange/5 to-thai-gold/5 rounded-3xl transform -rotate-1"></div>
        <Card variant="transparent" className="relative p-8 md:p-16 bg-thai-cream/50 backdrop-blur-sm border border-thai-gold/20 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Heading3 className="text-2xl lg:text-3xl mb-6 text-thai-gold">Our Heritage Story</Heading3>
              <BodyText className="mb-6 text-lg leading-relaxed text-thai-warmGray">
                From Bangkok's bustling streets to the UAE, we carry forward a family legacy of authentic Thai cuisine. Our grandmother's secret recipes, passed down through generations, form the heart of every dish we serve.
              </BodyText>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-thai-gold/5 rounded-xl">
                  <div className="text-xl font-bold text-thai-gold mb-1">25+</div>
                  <div className="text-sm text-thai-warmGray">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-thai-orange/5 rounded-xl">
                  <div className="text-xl font-bold text-thai-orange mb-1">100+</div>
                  <div className="text-sm text-thai-warmGray">Traditional Recipes</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-thai-gold/20 to-thai-orange/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="/images/thai-temple.jpg" 
                alt="Thai heritage and tradition" 
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Our Philosophy Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-thai-green/5 to-thai-gold/5 rounded-3xl transform rotate-1"></div>
        <Card variant="transparent" className="relative p-8 md:p-16 bg-thai-cream/50 backdrop-blur-sm border border-thai-green/20 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-thai-green/20 to-thai-gold/20 rounded-2xl transform -rotate-3"></div>
              <img 
                src="/images/thai-bowl.png" 
                alt="Traditional Thai cuisine philosophy" 
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <Heading3 className="text-2xl lg:text-3xl mb-6 text-thai-green">Our Philosophy</Heading3>
              <BodyText className="mb-8 text-lg leading-relaxed text-thai-warmGray">
                We believe food is a universal language that connects hearts and cultures. Every dish we create is a bridge between Thailand's rich culinary heritage and the vibrant multicultural spirit of the UAE.
              </BodyText>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-thai-gold/10 rounded-full">
                  <span className="text-lg">🥘</span>
                  <span className="text-sm font-medium text-thai-gold">Authentic Flavors</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-thai-orange/10 rounded-full">
                  <span className="text-lg">🌿</span>
                  <span className="text-sm font-medium text-thai-orange">Fresh Ingredients</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-thai-green/10 rounded-full">
                  <span className="text-lg">❤️</span>
                  <span className="text-sm font-medium text-thai-green">Thai Hospitality</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

// Enhanced Why Choose Us Section
const EnhancedWhyChooseUsSection = () => (
  <section className="py-20">
    <div className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0">
        <img 
          src="/images/gradient-hero-prerender.webp" 
          alt="Thai cuisine background" 
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
      </div>
      <div className="absolute inset-0 shadow-inner-thai rounded-3xl"></div>
      
      <div className="relative p-8 md:p-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-semibold text-white">Why Choose Bangkok Town</span>
          </div>
          <Heading2 className="text-3xl lg:text-5xl text-white mb-6 leading-tight">
            Experience the Difference
          </Heading2>
          <BodyText className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the UAE's most beloved destination for authentic Thai cuisine and exceptional dining experiences.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌶️</div>
                <Heading3 className="text-2xl font-bold text-white mb-4">100% Authentic</Heading3>
                <BodyText className="text-white/90 text-lg leading-relaxed">
                  Traditional recipes passed down through generations, using imported spices and authentic cooking techniques straight from Thailand's kitchens.
                </BodyText>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⭐</div>
                <Heading3 className="text-2xl font-bold text-white mb-4">Premium Quality</Heading3>
                <BodyText className="text-white/90 text-lg leading-relaxed">
                  Only the freshest ingredients, carefully sourced and prepared daily. Our commitment to quality means no compromises, ever.
                </BodyText>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">❤️</div>
                <Heading3 className="text-2xl font-bold text-white mb-4">Thai Hospitality</Heading3>
                <BodyText className="text-white/90 text-lg leading-relaxed">
                  Experience the genuine warmth of Thai culture with our friendly service and welcoming family atmosphere that feels like home.
                </BodyText>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <Heading3 className="text-2xl lg:text-3xl text-white mb-8">Awards & Recognition</Heading3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <Heading3 className="text-lg font-bold mb-2 text-white">Best Thai Restaurant</Heading3>
              <BodyText className="text-sm text-white/80">UAE Food Awards 2024</BodyText>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <Heading3 className="text-lg font-bold mb-2 text-white">4.8/5 Rating</Heading3>
              <BodyText className="text-sm text-white/80">Google Reviews</BodyText>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">👥</div>
              <Heading3 className="text-lg font-bold mb-2 text-white">50,000+</Heading3>
              <BodyText className="text-sm text-white/80">Happy Customers</BodyText>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <Heading3 className="text-lg font-bold mb-2 text-white">TripAdvisor</Heading3>
              <BodyText className="text-sm text-white/80">Certificate of Excellence</BodyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Enhanced Locations Section
const EnhancedLocationsSection = () => {
  const navigate = useNavigate();
  return (
  <section className="py-20">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-thai-orange/10 rounded-full mb-6">
        <span className="text-2xl">📍</span>
        <span className="text-sm font-semibold text-thai-orange">Our Locations</span>
      </div>
      <Heading2 className="text-3xl lg:text-4xl mb-4">
        Visit Us Across the UAE
      </Heading2>
      <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto">
        Experience authentic Thai cuisine at any of our beautifully designed locations, each offering a unique ambiance and the same exceptional quality you love.
      </BodyText>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="group">
        <div className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-thai-gold/5 to-thai-orange/5 p-1">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <img 
              src="/images/dubai.jpg" 
              alt="Our Dubai location - Modern Thai dining in the heart of the city" 
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <span className="text-sm font-semibold text-thai-gold">Dubai</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Heading3 className="text-xl font-bold mb-3 text-thai-gold">Dubai Branch</Heading3>
          <BodyText className="text-thai-warmGray leading-relaxed mb-4">
            Experience the magic of Bangkok in the heart of Dubai's bustling cityscape, where modern luxury meets traditional Thai charm in perfect harmony.
          </BodyText>
          <div className="flex items-center gap-2 text-sm text-thai-orange">
            <span>📞</span>
            <span>Call for Reservations</span>
          </div>
        </div>
      </div>

      <div className="group">
        <div className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-thai-orange/5 to-thai-green/5 p-1">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <img 
              src="/images/al majaz waterfron.jpg" 
              alt="Our Al Majaz Waterfront location with stunning views" 
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <span className="text-sm font-semibold text-thai-orange">Majaz Qasba</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Heading3 className="text-xl font-bold mb-3 text-thai-orange">Majaz Qasba</Heading3>
          <BodyText className="text-thai-warmGray leading-relaxed mb-4">
            Dine with stunning waterfront views at our Majaz Qasba location, where delicious Thai cuisine meets scenic beauty for an unforgettable dining experience.
          </BodyText>
          <div className="flex items-center gap-2 text-sm text-thai-orange">
            <span>🌅</span>
            <span>Waterfront Dining</span>
          </div>
        </div>
      </div>

      <div className="group">
        <div className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-thai-green/5 to-thai-gold/5 p-1">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <img 
              src="/images/burjkhalifa.jpg" 
              alt="Our Zawaya Walk location - Perfect for family dining" 
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <span className="text-sm font-semibold text-thai-green">Zawaya Walk</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Heading3 className="text-xl font-bold mb-3 text-thai-green">Zawaya Walk</Heading3>
          <BodyText className="text-thai-warmGray leading-relaxed mb-4">
            Perfect for memorable dining experiences with family and friends, our Zawaya Walk location offers an intimate setting with exceptional Thai hospitality.
          </BodyText>
          <div className="flex items-center gap-2 text-sm text-thai-orange">
            <span>👨‍👩‍👧‍👦</span>
            <span>Family Friendly</span>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action for Locations */}
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-thai-gold/10 via-thai-orange/5 to-thai-gold/10 p-12 rounded-3xl border border-thai-gold/20">
        <Heading3 className="text-2xl lg:text-3xl mb-4">
          Ready to Taste Authentic Thailand?
        </Heading3>
        <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto mb-8">
          Choose your preferred location and join thousands of satisfied customers who have made us their favorite Thai destination.
        </BodyText>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary"
            onClick={() => navigate('/reservations')}
            className="px-8 py-4 bg-gradient-to-r from-thai-red to-red-700 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Table
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/contact')}
            className="px-8 py-4 border-2 border-thai-gold text-thai-gold font-semibold rounded-xl hover:bg-thai-gold hover:text-white transition-all duration-300"
          >
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};