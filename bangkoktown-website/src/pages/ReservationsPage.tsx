import { useState, useEffect } from 'react';
import { Container, Heading1, BodyText, Card, Button } from '../components/ui';

declare const emailjs: any;
declare const Stripe: any;

const getTimeSlots = () => {
  const now = new Date();
  const uaeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));

  const minTime = new Date(uaeTime.getTime() + 30 * 60 * 1000);

  const slots = [];
  for (let i = 12 * 60; i <= 24 * 60; i += 15) {
    const hours = Math.floor(i / 60) % 24;
    const minutes = i % 60;
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    if (date >= minTime) {
      slots.push(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }
  }
  return slots;
};

export const ReservationsPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    setTimeSlots(getTimeSlots());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const userID = 'YOUR_USER_ID';

      const templateParams = {
        fullName,
        email,
        phone,
        date,
        time,
        guests,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Reservation email sent successfully!');

      const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: 'YOUR_STRIPE_PRICE_ID',
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/reservations`,
        customerEmail: email,
      });

      if (error) {
        console.error('Error redirecting to Stripe Checkout:', error);
        alert('Failed to proceed to payment. Please try again.');
      }

    } catch (error) {
      console.error('Failed to send reservation email:', error);
      alert('Failed to submit reservation. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-thai-cream">
      <main className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <Heading1 className="mb-6">Make a Reservation</Heading1>
            <BodyText className="max-w-2xl mx-auto">
              A 20 DHS reservation fee is required to secure your table. This amount will be deducted from your final bill.
            </BodyText>
          </div>

          <Card variant="elevated" className="p-8 max-w-lg mx-auto">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="block text-thai-warmGray mb-2">Full Name</label>
                  <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2 bg-white border border-thai-red/20 rounded-lg focus:ring-thai-red focus:border-thai-red" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-thai-warmGray mb-2">Email Address</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-white border border-thai-red/20 rounded-lg focus:ring-thai-red focus:border-thai-red" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-thai-warmGray mb-2">Phone Number</label>
                  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 bg-white border border-thai-red/20 rounded-lg focus:ring-thai-red focus:border-thai-red" required />
                </div>
                <div>
                  <label htmlFor="date" className="block text-thai-warmGray mb-2">Date</label>
                  <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-2 bg-white border border-thai-red/20 rounded-lg focus:ring-thai-red focus:border-thai-red" required />
                </div>
                <div>
                  <label htmlFor="time" className="block text-thai-warmGray mb-2">Time</label>
                  <select id="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-2 bg-white border border-thai-red/20 rounded-lg focus:ring-thai-red focus:border-thai-red" required>
                    <option value="" disabled>Select a time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-thai-warmGray mb-2">Number of Guests</label>
                  <input type="number" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))} min="1" className="w-full px-4 py-2 bg-white border border-thai-red/20 rounded-lg focus:ring-thai-red focus:border-thai-red" required />
                </div>
              </div>
              <div className="text-center mb-6">
                <p className="text-lg font-semibold text-thai-red">Reservation Fee: 20 DHS</p>
                <p className="text-sm text-thai-warmGray">This will be deducted from your final bill.</p>
              </div>
              <Button variant="primary" size="lg" className="w-full" type="submit">
                Proceed to Payment
              </Button>
            </form>
          </Card>
        </Container>
      </main>
    </div>
  );
};