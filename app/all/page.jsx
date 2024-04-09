import React from "react";
import { client } from "../lib/sanity";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "product"]{
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
          
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

async function AllCategories() {
  const data = await getData();
  return (
    <div>
      <h2 className="text-2xl px-4 mb-5 font-bold text-center tracking-tight text-gray-900">
        All our products
      </h2>

      <div className=" flex flex-wrap gap-5 justify-center mb-5">
        {data.map((product) => (
          <div key={product._id} className="group relative">
            <div className=" cursor-pointer">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className=" object-cover object-center rounded-lg"
                  width={400}
                  height={400}
                />
              </Link>
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm justify-between text-center text-gray-700">
                <Link href={`/product/${product.slug}`}>{product.name}</Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500 text-center">
                {product.categoryName}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {product.price},00 kr
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;
