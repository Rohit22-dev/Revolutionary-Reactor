"use client";
import { ProductDetail } from "@/components/Data";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Navbar from "../../components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Loader from "@/components/Loader";

interface ProductData {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  // Add other properties of the product here
}

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState<ProductData | null>(null);
  const temp = Math.ceil(product?.rating.rate || 3);

  useEffect(() => {
    ProductDetail({ id: id }).then((product) => setProduct(product));
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      {product ? (
        <div className="flex p-6 bg-muted m-4 rounded-lg gap-6 h-2/3 mt-10">
          <div className=" w-1/2 h-full relative">
            <Image
              alt="image"
              src={product?.image}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col w-1/2">
            <h1 className="text-xl font-bold">{product?.title}</h1>
            <p className="text-sm leading-4 text-gray-300 mt-2">
              {product?.description}
            </p>
            <span className="w-full h-[1px] mt-4 bg-gray-500" />
            <section className="mt-4 text-2xl">
              <span className=" text-green-700 font-bold">$&nbsp;</span>
              {product?.price}
            </section>
            <ReactStars
              count={5}
              size={24}
              activeColor="#06aa08"
              value={temp}
              edit={false}
            />
            <p className="text-sm">({product?.rating.count})</p>
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                className="w-fit border rounded-full border-foreground bg-muted hover:bg-primary hover:text-primary-foreground"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="w-fit border rounded-full border-foreground bg-primary text-primary-foreground"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default Page;
