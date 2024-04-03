"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

function CheckoutNow({ currency, description, image, name, price, price_id }) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    image: urlFor(image).url(),
    currency: currency,
    price_id: price_id,
  };
  return (
    <Button variant={"secondary"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}

export default CheckoutNow;
