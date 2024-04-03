import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/sanity";

async function getData(category) {
  const query = `*[_type == "product" && category->name == "${category}"]{
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

async function CategoryPage({ params }) {
  const data = await getData(params.category);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our products for {params.category}
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-sqaure w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 cursor-pointer">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
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
    </div>
  );
}

export default CategoryPage;
