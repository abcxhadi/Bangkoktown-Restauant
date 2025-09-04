import { useState, useEffect } from "react";
import { Container, Heading1, BodyText, Card, Button } from "../components/ui";

declare const emailjs: any;

const getTimeSlots = () => {
  const now = new Date();
  const uaeTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
  );
  const minTime = new Date(uaeTime.getTime() + 30 * 60 * 1000);
  const slots = [];

  for (let i = 12 * 60; i <= 24 * 60; i += 15) {
    const hours = Math.floor(i / 60) % 24;
    const minutes = i % 60;
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    if (date >= minTime) {
      slots.push(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    }
  }
  return slots;
};

export const ReservationsPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [location, setLocation] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeSlots(getTimeSlots());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";
      const userID = "YOUR_USER_ID";

      const templateParams = {
        fullName,
        email,
        phone,
        date,
        time,
        guests,
        location,
        specialRequests,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log("Reservation email sent successfully!");
      alert(
        "Your reservation has been submitted successfully! We will confirm your booking within 2 hours.",
      );

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setGuests(1);
      setLocation("");
      setSpecialRequests("");
    } catch (error) {
      console.error("Failed to send reservation email:", error);
      alert(
        "Failed to submit reservation. Please try again or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle animated background patterns matching about page */}
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
            alt="Thai restaurant reservation background"
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
              Reserve Your Experience
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Heading1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
                Reservations
              </span>
            </Heading1>
            <BodyText className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Secure your spot at the UAE's most authentic Thai dining
              experience. Every reservation is a promise of exceptional flavors
              and memories.
            </BodyText>
          </div>
        </Container>
      </section>

      <main className="relative bg-black z-30">
        <Container>
          {/* Reservation Form Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-full border border-emerald-500/30 mb-12">
                <div className="text-3xl">📅</div>
                <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Reservation Details
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
                Secure Your{" "}
                <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <BodyText className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                Fill out the form below and we'll confirm your booking within 2
                hours. For immediate assistance, please call us directly.
              </BodyText>
            </div>

            {/* Enhanced Form Card - Netflix Style */}
            <div className="max-w-4xl mx-auto">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-amber-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card
                  variant="transparent"
                  className="relative p-12 md:p-16 bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl"
                >
                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Personal Information */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="text-3xl animate-pulse">👤</div>
                        <h3 className="text-3xl text-white font-bold tracking-tight">
                          Personal Information
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-gray-300 font-semibold mb-4 text-lg"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-lg backdrop-blur-sm"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-gray-300 font-semibold mb-4 text-lg"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-lg backdrop-blur-sm"
                            placeholder="+971 XX XXX XXXX"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label
                            htmlFor="email"
                            className="block text-gray-300 font-semibold mb-4 text-lg"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-lg backdrop-blur-sm"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Netflix-style content divider */}
                    <div className="relative py-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px top-1"></div>
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-r from-red-500 to-amber-500 w-2 h-2 rounded-full"></div>
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="text-3xl animate-bounce">📍</div>
                        <h3 className="text-3xl text-white font-bold tracking-tight">
                          Reservation Details
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                          <label
                            htmlFor="location"
                            className="block text-gray-300 font-semibold mb-4 text-lg"
                          >
                            Location *
                          </label>
                          <select
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-lg backdrop-blur-sm"
                            required
                          >
                            <option value="" disabled>
                              Select location
                            </option>
                            <option value="dubai">Dubai Branch</option>
                            <option value="majaz">Majaz Qasba</option>
                            <option value="zawaya">Zawaya Walk</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-gray-300 font-semibold mb-4 text-lg"
                          >
                            Date *
                          </label>
                          <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-lg backdrop-blur-sm"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-gray-300 font-semibold mb-4 text-lg"
                          >
                            Time *
                          </label>
                          <select
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-lg backdrop-blur-sm"
                            required
                          >
                            <option value="" disabled>
                              Select time
                            </option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-8">
                        <label
                          htmlFor="guests"
                          className="block text-gray-300 font-semibold mb-4 text-lg"
                        >
                          Number of Guests *
                        </label>
                        <div className="flex items-center gap-6">
                          <button
                            type="button"
                            onClick={() => setGuests(Math.max(1, guests - 1))}
                            className="w-14 h-14 bg-gradient-to-r from-red-600/20 to-amber-600/20 hover:from-red-600/30 hover:to-amber-600/30 text-red-400 font-bold rounded-xl transition-all duration-300 border border-red-500/30 backdrop-blur-sm"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            id="guests"
                            value={guests}
                            onChange={(e) =>
                              setGuests(
                                Math.max(1, parseInt(e.target.value, 10) || 1),
                              )
                            }
                            min="1"
                            max="20"
                            className="w-32 px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white text-center font-bold text-lg backdrop-blur-sm"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setGuests(Math.min(20, guests + 1))}
                            className="w-14 h-14 bg-gradient-to-r from-red-600/20 to-amber-600/20 hover:from-red-600/30 hover:to-amber-600/30 text-red-400 font-bold rounded-xl transition-all duration-300 border border-red-500/30 backdrop-blur-sm"
                          >
                            +
                          </button>
                          <BodyText className="text-gray-300 ml-6 text-lg font-medium">
                            {guests === 1 ? "1 guest" : `${guests} guests`}
                          </BodyText>
                        </div>
                      </div>
                    </div>

                    {/* Netflix-style content divider */}
                    <div className="relative py-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent h-px"></div>
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-2 h-2 rounded-full"></div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="text-3xl">💭</div>
                        <h3 className="text-3xl text-white font-bold tracking-tight">
                          Special Requests
                        </h3>
                      </div>
                      <div>
                        <label
                          htmlFor="specialRequests"
                          className="block text-gray-300 font-semibold mb-4 text-lg"
                        >
                          Any special requests or dietary requirements?
                        </label>
                        <textarea
                          id="specialRequests"
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          rows={5}
                          className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white resize-none text-lg backdrop-blur-sm"
                          placeholder="Let us know about any special occasions, dietary restrictions, seating preferences, or other requests..."
                        />
                      </div>
                    </div>

                    {/* Submit Button - Netflix Style */}
                    <div className="text-center pt-12">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group relative px-16 py-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl text-xl transition-all duration-300 shadow-2xl ${
                          isSubmitting
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:scale-105 hover:from-red-500 hover:to-red-600 hover:shadow-red-500/25"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-amber-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative flex items-center justify-center gap-4">
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Submitting Reservation...
                            </>
                          ) : (
                            <>
                              <span>Confirm Reservation</span>
                              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                🍽️
                              </div>
                            </>
                          )}
                        </div>
                      </button>
                      <BodyText className="text-gray-400 mt-6 text-lg font-medium">
                        We'll confirm your booking within 2 hours via email or
                        phone
                      </BodyText>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Information Section - Netflix Style */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-full border border-blue-500/30 mb-12">
                <div className="text-3xl">📞</div>
                <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                  Need Immediate Assistance?
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
                Contact Us{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Directly
                </span>
              </h2>
              <BodyText className="text-gray-300 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                For immediate reservations or special requests, feel free to
                call us directly. Our friendly staff is ready to assist you.
              </BodyText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dubai Branch",
                  description:
                    "Modern luxury meets traditional Thai charm in Dubai's heart",
                  phone: "+971 4 XXX XXXX",
                  hours: "12:00 PM - 12:00 AM",
                  gradient: "from-red-600/20 to-amber-600/20",
                  border: "border-red-500/30 hover:border-red-500/60",
                },
                {
                  title: "Majaz Qasba",
                  description: "Stunning waterfront dining with scenic beauty",
                  phone: "+971 6 XXX XXXX",
                  hours: "12:00 PM - 12:00 AM",
                  gradient: "from-blue-600/20 to-cyan-600/20",
                  border: "border-blue-500/30 hover:border-blue-500/60",
                },
                {
                  title: "Zawaya Walk",
                  description:
                    "Perfect for memorable family dining experiences",
                  phone: "+971 X XXX XXXX",
                  hours: "12:00 PM - 12:00 AM",
                  gradient: "from-purple-600/20 to-pink-600/20",
                  border: "border-purple-500/30 hover:border-purple-500/60",
                },
              ].map((location, index) => (
                <div key={index} className="group text-center">
                  <div
                    className={`bg-gray-900/60 backdrop-blur-xl p-10 rounded-3xl border ${location.border} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {location.title}
                    </h3>
                    <BodyText className="text-gray-400 mb-6 text-lg leading-relaxed">
                      {location.description}
                    </BodyText>
                    <div className="space-y-3 text-lg">
                      <div className="text-white font-semibold">
                        📞 {location.phone}
                      </div>
                      <div className="text-gray-300">⏰ {location.hours}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Reservation Policy Section - Netflix Style */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-full border border-emerald-500/30 mb-12">
                <div className="text-3xl">📋</div>
                <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Reservation Policy
                </span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
                Important{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Information
                </span>
              </h2>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-gray-700/50 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="text-4xl">⏰</div>
                      <h3 className="text-2xl font-bold text-emerald-400">
                        Timing & Cancellation
                      </h3>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        Reservations confirmed within 2 hours
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        15-minute grace period for late arrivals
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        Free cancellation up to 2 hours before
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        Large groups (8+) may require deposit
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="text-4xl">🎉</div>
                      <h3 className="text-2xl font-bold text-amber-400">
                        Special Occasions
                      </h3>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1">•</span>
                        Birthday celebrations with complimentary dessert
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1">•</span>
                        Anniversary specials available
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1">•</span>
                        Private dining for special events
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1">•</span>
                        Custom menu options for dietary needs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};
