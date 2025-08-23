import { Container, Heading1, Heading2, Heading3, BodyText, Card } from '../components/ui';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-thai-cream">
      <main className="section-padding">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-20">
            <Heading1 className="mb-6 bg-gradient-to-r from-thai-gold via-thai-orange to-thai-gold bg-clip-text text-transparent">
              About Our Journey
            </Heading1>
            <BodyText className="text-xl max-w-3xl mx-auto text-thai-warmGray leading-relaxed">
              Bringing the authentic taste of Thailand to the UAE through generations of family recipes and unwavering dedication to quality.
            </BodyText>
          </div>

          <div className="space-y-24">
            {/* Our Story Section */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-thai-orange/5 to-thai-gold/5 rounded-3xl transform -rotate-1"></div>
              <Card variant="transparent" className="relative p-8 md:p-16 bg-thai-cream/50 backdrop-blur-sm border border-thai-gold/20 rounded-3xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-thai-gold/10 rounded-full mb-6">
                      <span className="text-2xl">📖</span>
                      <span className="text-sm font-semibold text-thai-gold">Our Story</span>
                    </div>
                    <Heading2 className="mb-6 text-3xl lg:text-4xl leading-tight">
                      From Bangkok Streets to UAE Hearts
                    </Heading2>
                    <BodyText className="mb-6 text-lg leading-relaxed text-thai-warmGray">
                      Our culinary journey began in the vibrant streets of Bangkok, where our grandmother's secret recipes were passed down through generations. Today, we bring that same authentic Thai experience to the UAE, celebrating fresh ingredients, traditional cooking methods, and the warm hospitality that makes Thai culture so special.
                    </BodyText>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center p-4 bg-thai-gold/5 rounded-xl">
                        <div className="text-2xl font-bold text-thai-gold mb-1">25+</div>
                        <div className="text-sm text-thai-warmGray">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-thai-orange/5 rounded-xl">
                        <div className="text-2xl font-bold text-thai-orange mb-1">100%</div>
                        <div className="text-sm text-thai-warmGray">Authentic Recipes</div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-thai-gold/20 to-thai-orange/20 rounded-2xl transform rotate-3"></div>
                    <img 
                      src="/images/thai-temple.jpg" 
                      alt="Thai Temple representing our heritage" 
                      className="relative rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Card>
            </section>

            {/* Our Philosophy Section */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-thai-green/5 to-thai-gold/5 rounded-3xl transform rotate-1"></div>
              <Card variant="transparent" className="relative p-8 md:p-16 bg-thai-cream/50 backdrop-blur-sm border border-thai-green/20 rounded-3xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-thai-green/20 to-thai-gold/20 rounded-2xl transform -rotate-3"></div>
                    <img 
                      src="/images/thai-bowl.png" 
                      alt="Traditional Thai bowl showcasing our philosophy" 
                      className="relative rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-thai-green/10 rounded-full mb-6">
                      <span className="text-2xl">🌱</span>
                      <span className="text-sm font-semibold text-thai-green">Our Philosophy</span>
                    </div>
                    <Heading2 className="mb-6 text-3xl lg:text-4xl leading-tight">
                      Connecting Cultures Through Food
                    </Heading2>
                    <BodyText className="mb-8 text-lg leading-relaxed text-thai-warmGray">
                      We believe food is more than nourishment—it's a bridge between cultures, a way to share stories, and create lasting memories. Our philosophy centers on authentic flavors, premium ingredients, and the genuine warmth of Thai hospitality that makes every meal a celebration.
                    </BodyText>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-3 px-4 py-2 bg-thai-gold/10 rounded-full">
                        <span className="text-lg">🥘</span>
                        <span className="text-sm font-medium text-thai-gold">Authentic Flavors</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-2 bg-thai-orange/10 rounded-full">
                        <span className="text-lg">🌿</span>
                        <span className="text-sm font-medium text-thai-orange">Fresh Ingredients</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-2 bg-thai-green/10 rounded-full">
                        <span className="text-lg">❤️</span>
                        <span className="text-sm font-medium text-thai-green">Thai Hospitality</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 rounded-3xl">
                <img 
                  src="/images/gradient-hero-prerender.webp" 
                  alt="Thai cuisine background" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
              </div>
              <div className="relative p-8 md:p-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <span className="text-2xl">✨</span>
                    <span className="text-sm font-semibold text-white">Why Choose Us</span>
                  </div>
                  <Heading2 className="text-3xl lg:text-4xl text-white mb-4">
                    What Sets Us Apart
                  </Heading2>
                  <BodyText className="text-white/90 text-lg max-w-2xl mx-auto">
                    Discover the unique qualities that make our Thai restaurant the preferred choice for authentic cuisine lovers.
                  </BodyText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="text-center">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌶️</div>
                        <Heading3 className="text-xl font-bold text-white mb-4">100% Authentic</Heading3>
                        <BodyText className="text-white/90 leading-relaxed">
                          Traditional recipes passed down through generations, using imported spices and authentic cooking techniques from Thailand.
                        </BodyText>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="text-center">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⭐</div>
                        <Heading3 className="text-xl font-bold text-white mb-4">Premium Quality</Heading3>
                        <BodyText className="text-white/90 leading-relaxed">
                          Only the freshest ingredients, carefully sourced and prepared daily. No compromises on quality, ever.
                        </BodyText>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="text-center">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">❤️</div>
                        <Heading3 className="text-xl font-bold text-white mb-4">Thai Hospitality</Heading3>
                        <BodyText className="text-white/90 leading-relaxed">
                          Experience the genuine warmth of Thai culture with our friendly service and welcoming family atmosphere.
                        </BodyText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Awards Section */}
            <section className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-thai-gold/10 rounded-full mb-6">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm font-semibold text-thai-gold">Recognition</span>
                </div>
                <Heading2 className="text-3xl lg:text-4xl mb-4">
                  Awards & Achievements
                </Heading2>
                <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto">
                  Our commitment to excellence has been recognized by food critics and customers alike.
                </BodyText>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-gradient-to-br from-thai-gold/5 to-thai-orange/5 p-6 rounded-2xl text-center border border-thai-gold/10 hover:border-thai-gold/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏆</div>
                  <Heading3 className="text-lg font-bold mb-2 text-thai-gold">Best Thai Restaurant</Heading3>
                  <BodyText className="text-sm text-thai-warmGray">UAE Food Awards 2024</BodyText>
                </div>

                <div className="group bg-gradient-to-br from-thai-orange/5 to-thai-gold/5 p-6 rounded-2xl text-center border border-thai-orange/10 hover:border-thai-orange/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⭐</div>
                  <Heading3 className="text-lg font-bold mb-2 text-thai-orange">4.8/5 Rating</Heading3>
                  <BodyText className="text-sm text-thai-warmGray">Google Reviews</BodyText>
                </div>

                <div className="group bg-gradient-to-br from-thai-green/5 to-thai-gold/5 p-6 rounded-2xl text-center border border-thai-green/10 hover:border-thai-green/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">👥</div>
                  <Heading3 className="text-lg font-bold mb-2 text-thai-green">50,000+</Heading3>
                  <BodyText className="text-sm text-thai-warmGray">Happy Customers</BodyText>
                </div>

                <div className="group bg-gradient-to-br from-thai-gold/5 to-thai-green/5 p-6 rounded-2xl text-center border border-thai-gold/10 hover:border-thai-gold/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🌟</div>
                  <Heading3 className="text-lg font-bold mb-2 text-thai-gold">TripAdvisor</Heading3>
                  <BodyText className="text-sm text-thai-warmGray">Certificate of Excellence</BodyText>
                </div>
              </div>
            </section>

            {/* Locations Section */}
            <section className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-thai-orange/10 rounded-full mb-6">
                  <span className="text-2xl">📍</span>
                  <span className="text-sm font-semibold text-thai-orange">Our Locations</span>
                </div>
                <Heading2 className="text-3xl lg:text-4xl mb-4">
                  Visit Us Across the UAE
                </Heading2>
                <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto">
                  Experience authentic Thai cuisine at any of our beautifully designed locations, each offering a unique ambiance and the same exceptional quality.
                </BodyText>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src="/images/dubai.jpg" 
                      alt="Our Dubai location" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-thai-green">Dubai</span>
                      </div>
                    </div>
                  </div>
                  <Heading3 className="text-xl font-bold mb-3 text-thai-gold">Dubai Branch</Heading3>
                  <BodyText className="text-thai-warmGray leading-relaxed">
                    Experience the magic of Bangkok in the heart of Dubai's bustling cityscape, where modern luxury meets traditional Thai charm.
                  </BodyText>
                </div>

                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src="/images/al majaz waterfron.jpg" 
                      alt="Our Al Majaz Waterfront location" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-thai-orange">Majaz Qasba</span>
                      </div>
                    </div>
                  </div>
                  <Heading3 className="text-xl font-bold mb-3 text-thai-orange">Majaz Qasba</Heading3>
                  <BodyText className="text-thai-warmGray leading-relaxed">
                    Dine with stunning waterfront views at our Majaz Qasba location, where delicious Thai cuisine meets scenic beauty for an unforgettable experience.
                  </BodyText>
                </div>

                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src="/images/burjkhalifa.jpg" 
                      alt="Our Zawaya Walk location" 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-thai-green">Zawaya Walk</span>
                      </div>
                    </div>
                  </div>
                  <Heading3 className="text-xl font-bold mb-3 text-thai-green">Zawaya Walk</Heading3>
                  <BodyText className="text-thai-warmGray leading-relaxed">
                    Perfect for memorable dining experiences with family and friends, our Zawaya Walk location offers an intimate setting with exceptional Thai hospitality.
                  </BodyText>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-thai-gold/10 via-thai-orange/5 to-thai-gold/10 p-12 rounded-3xl border border-thai-gold/20">
              <Heading2 className="text-3xl lg:text-4xl mb-4">
                Ready to Experience Authentic Thai Cuisine?
              </Heading2>
              <BodyText className="text-thai-warmGray text-lg max-w-2xl mx-auto mb-8">
                Join thousands of satisfied customers who have made us their favorite Thai restaurant in the UAE.
              </BodyText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-thai-red to-red-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Our Menu
                </button>
                <button className="px-8 py-4 border-2 border-thai-gold text-thai-gold font-semibold rounded-xl hover:bg-thai-gold hover:text-white transition-all duration-300">
                  Book a Table
                </button>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
};
