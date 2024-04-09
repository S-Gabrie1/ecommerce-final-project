import Image from "next/image";
import React from "react";
import { urlFor, client } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 text-lg">
            We sell only the most exclusive and high quality products for you.
            Come and shop with us.
          </p>
        </div>
        <div className="mg-12 flex w-full md:mb-16 lg:w-2/3 mb-10">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 ">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Second Image"
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-8 mb:flex-row mb-4">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border ">
        <Link href={"/Men"} className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Men
        </Link>
        <Link href={"/Women"} className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Women
        </Link>
        <Link href={"/Kids"} className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Kids
        </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
