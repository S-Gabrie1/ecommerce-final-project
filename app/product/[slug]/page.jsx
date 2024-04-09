import AddToCart from "@/app/components/AddToCart";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import React from "react";

export const dynamic = "force-dynamic";

async function getData(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
          
      }`;

  const data = await client.fetch(query);

  return data;
}

async function ProductPage({ params }) {
  const data = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px8">
        <div className="md:grid gap-10 md:grid-cols-3 flex flex-wrap">
          <ImageGallery images={data.images}/>
          <div className="md:py-8 mx-12">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-900">
                {data.price},00 kr
              </span>
            </div>
            <div className="mb-6 mt-2 flex items-center gap-2 text-gray-600">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>
            <div className="flex gap-2.5 mb-5">
              <AddToCart
                currency="SEK"
                description={data.description}
                image={data.images[0]}
                price={data.price}
                name={data.name}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="SEK"
                description={data.description}
                image={data.images[0]}
                price={data.price}
                name={data.name}
                key={data._id}
                price_id={data.price_id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
