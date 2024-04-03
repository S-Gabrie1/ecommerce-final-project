"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'


function AddToCart({currency, description, image, name, price, price_id}) {
    const {addItem, handleCartClick} = useShoppingCart()

    const product = {
        name: name,
        description: description,
        price: price,
        image: urlFor(image).url(),
        currency: currency,
        price_id: price_id
    }
  return (
    <Button onClick={() => {
        addItem(product), handleCartClick();
    }}>
        Add To Cart
    </Button>
  )
}

export default AddToCart