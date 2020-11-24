import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { CartProvider } from "use-shopping-cart";
const { loadStripe } = require("@stripe/stripe-js");

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider
        stripe={stripePromise}
        successUrl={`${process.env.URL_success || "http://localhost:8888"}/success`}
        cancelUrl={`${process.env.URL_cancel || "http://localhost:8888"}/cancel`}
        currency="USD"
        allowedCountries={["US", "GB", "CA"]}
        billingAddressCollection={true}
        mode="checkout-session"
      >
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
