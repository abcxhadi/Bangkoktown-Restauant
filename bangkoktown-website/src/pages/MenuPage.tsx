
import { Container, Button } from '../components/ui';
import { MenuContainer } from '../components/menu';
import { stripePromise } from '../data/credentials';

export const MenuPage = () => {

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) {
      console.error("Stripe.js has not loaded yet.");
      return;
    }

    // This is a sample checkout session. You will need to create a checkout session on your server.
    const checkoutSession = {
      lineItems: [
        { price: 'price_12345', quantity: 1 },
      ],
      mode: 'payment' as 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    }

    const { error } = await stripe.redirectToCheckout(checkoutSession);

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-thai-cream">
      <main className="section-padding">
        <Container>
          <MenuContainer isPreview={false} />
          <div className="text-center mt-8">
            <Button onClick={handleCheckout} variant="primary" size="lg">
              Checkout
            </Button>
          </div>
        </Container>
      </main>
    </div>
  );
};