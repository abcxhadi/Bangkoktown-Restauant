import { loadStripe } from '@stripe/stripe-js';

// Add your Stripe public key here
export const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');
