import { useState, useEffect } from "react";
import { Container, Heading1, BodyText, Card, Button } from "../components/ui";

declare const emailjs: any;

const reservationsPageCss = `
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
  const [currentStep, setCurrentStep] = useState(1);

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
      setCurrentStep(1);
    } catch (error) {
      console.error("Failed to send reservation email:", error);
      alert(
        "Failed to submit reservation. Please try again or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      value: "dubai",
      label: "Dubai Branch",
      emoji: "🏙️",
      desc: "Heart of Dubai",
    },
    {
      value: "majaz",
      label: "Majaz Qasba",
      emoji: "🌊",
      desc: "Waterfront dining",
    },
    {
      value: "zawaya",
      label: "Zawaya Walk",
      emoji: "👨‍👩‍👧‍👦",
      desc: "Family friendly",
    },
  ];

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <style>{reservationsPageCss}</style>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-orange-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10">
        <Container>
          <section className="py-16 lg:py-24">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="netflix-heading text-4xl lg:text-6xl text-white mb-6">
                Reserve Your
                <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
                  {" "}
                  Experience
                </span>
              </h1>
              <p className="netflix-body text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Book your table in just a few simple steps. We'll confirm within
                2 hours.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-between">
                {[
                  { number: 1, title: "Details", icon: "👤" },
                  { number: 2, title: "When & Where", icon: "📅" },
                  { number: 3, title: "Confirm", icon: "✨" },
                ].map((step) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-r from-red-500 to-amber-500 text-white shadow-lg"
                          : "bg-gray-800 text-gray-400 border-2 border-gray-700"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <span className="text-lg">✓</span>
                      ) : (
                        <span className="text-lg">{step.icon}</span>
                      )}
                    </div>
                    <div className="ml-3 hidden sm:block">
                      <p
                        className={`netflix-body-medium text-sm ${
                          currentStep >= step.number
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        Step {step.number}
                      </p>
                      <p
                        className={`netflix-caption text-xs ${
                          currentStep >= step.number
                            ? "text-gray-200"
                            : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                    {step.number < 3 && (
                      <div
                        className={`hidden sm:block w-16 h-0.5 ml-6 transition-all duration-300 ${
                          currentStep > step.number
                            ? "bg-gradient-to-r from-red-500 to-amber-500"
                            : "bg-gray-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Personal Details */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="text-center mb-8">
                        <div className="text-4xl mb-4">👤</div>
                        <h2 className="netflix-subheading text-2xl text-white mb-2">
                          Let's get to know you
                        </h2>
                        <p className="netflix-body text-gray-400">
                          We'll need your contact information
                        </p>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="netflix-body-medium block text-white mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 netflix-body"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div>
                          <label className="netflix-body-medium block text-white mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 netflix-body"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>

                        <div>
                          <label className="netflix-body-medium block text-white mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 netflix-body"
                            placeholder="+971 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        disabled={!fullName || !email || !phone}
                        className="w-full py-4 bg-gradient-to-r from-red-500 to-amber-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 netflix-body-medium"
                      >
                        Continue to Date & Time
                      </button>
                    </div>
                  )}

                  {/* Step 2: Reservation Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="text-center mb-8">
                        <div className="text-4xl mb-4">📅</div>
                        <h2 className="netflix-subheading text-2xl text-white mb-2">
                          When & Where?
                        </h2>
                        <p className="netflix-body text-gray-400">
                          Choose your preferred time and location
                        </p>
                      </div>

                      <div className="space-y-6">
                        {/* Location Selection */}
                        <div>
                          <label className="netflix-body-medium block text-white mb-3">
                            Choose Location
                          </label>
                          <div className="grid grid-cols-1 gap-3">
                            {locations.map((loc) => (
                              <button
                                key={loc.value}
                                type="button"
                                onClick={() => setLocation(loc.value)}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                  location === loc.value
                                    ? "border-red-500 bg-red-500/10 text-white"
                                    : "border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{loc.emoji}</span>
                                  <div>
                                    <p className="netflix-body-medium">{loc.label}</p>
                                    <p className="netflix-caption text-sm text-gray-400">
                                      {loc.desc}
                                    </p>
                                  </div>
                                  {location === loc.value && (
                                    <div className="ml-auto text-red-500">
                                      ✓
                                    </div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="netflix-body-medium block text-white mb-2">
                              Date
                            </label>
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-white netflix-body"
                              required
                            />
                          </div>

                          <div>
                            <label className="netflix-body-medium block text-white mb-2">
                              Time
                            </label>
                            <select
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-white netflix-body"
                              required
                            >
                              <option value="">Select time</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Guests */}
                        <div>
                          <label className="netflix-body-medium block text-white mb-3">
                            Number of Guests
                          </label>
                          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                            {guestOptions.map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => setGuests(num)}
                                className={`py-3 rounded-lg font-semibold transition-all duration-300 netflix-body-medium ${
                                  guests === num
                                    ? "bg-gradient-to-r from-red-500 to-amber-500 text-white shadow-lg"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-2xl">👥</span>
                            <p className="netflix-body text-gray-300">
                              {guests === 1 ? "1 guest" : `${guests} guests`}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-4 bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-600 netflix-body-medium"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          disabled={!location || !date || !time}
                          className="flex-1 py-4 bg-gradient-to-r from-red-500 to-amber-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 netflix-body-medium"
                        >
                          Review Booking
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="text-center mb-8">
                        <div className="text-4xl mb-4">✨</div>
                        <h2 className="netflix-subheading text-2xl text-white mb-2">
                          Almost there!
                        </h2>
                        <p className="netflix-body text-gray-400">
                          Review your booking details
                        </p>
                      </div>

                      {/* Booking Summary */}
                      <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="netflix-body text-gray-300">Name</span>
                            <span className="netflix-body-medium text-white">
                              {fullName}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="netflix-body text-gray-300">Email</span>
                            <span className="netflix-body-medium text-white">
                              {email}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="netflix-body text-gray-300">Phone</span>
                            <span className="netflix-body-medium text-white">
                              {phone}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="netflix-body text-gray-300">Location</span>
                            <span className="netflix-body-medium text-white">
                              {
                                locations.find((l) => l.value === location)
                                  ?.label
                              }
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="netflix-body text-gray-300">Date & Time</span>
                            <span className="netflix-body-medium text-white">
                              {date} at {time}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="netflix-body text-gray-300">Guests</span>
                            <span className="netflix-body-medium text-white">
                              {guests} {guests === 1 ? "person" : "people"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="netflix-body-medium block text-white mb-2">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 netflix-body resize-none"
                          placeholder="Any dietary restrictions, special occasions, or preferences..."
                        />
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="flex-1 py-4 bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-600 netflix-body-medium"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 netflix-body-medium"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Confirming...
                            </div>
                          ) : (
                            "Confirm Reservation 🍽️"
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>

          {/* Quick Contact Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="netflix-subheading text-3xl lg:text-4xl text-white mb-4">
                Need Immediate Help?
              </h2>
              <p className="netflix-body text-gray-300 text-lg mb-8">
                Call us directly for instant reservations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Dubai Branch",
                  phone: "+971 4 XXX XXXX",
                  emoji: "🏙️",
                  gradient: "from-red-500/20 to-amber-500/20",
                },
                {
                  title: "Majaz Qasba",
                  phone: "+971 6 XXX XXXX",
                  emoji: "🌊",
                  gradient: "from-blue-500/20 to-cyan-500/20",
                },
                {
                  title: "Zawaya Walk",
                  phone: "+971 X XXX XXXX",
                  emoji: "👨‍👩‍👧‍👦",
                  gradient: "from-purple-500/20 to-pink-500/20",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${contact.gradient} backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{contact.emoji}</div>
                    <h3 className="netflix-subheading text-lg text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="netflix-body-medium text-gray-300">
                      {contact.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};