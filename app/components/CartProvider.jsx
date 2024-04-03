"use client"
import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

function CartProvider({ children }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://ecommerce-final-project.vercel.app/stripe/success"
      cancelUrl="https://ecommerce-final-project.vercel.app/stripe/error"
      currency="sek"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

export default CartProvider;
