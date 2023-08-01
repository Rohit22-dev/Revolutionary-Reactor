import React from "react";
import ReactStars from "react-rating-stars-component";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductData = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  // Add other properties of the product here
};

type ProductCardProps = {
  data: ProductData; // Use the defined ProductData type here
};

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const temp = Math.ceil(data.rating.rate);

  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-fu11 dark:bg-muted hover:shadow-lg rounded-md hover:cursor-pointer flex flex-col p-2 hover:-translate-y-1 transition-all duration-150 ease-in-out">
      <Link
        href={{ pathname: "/product", query: { id: data.id.toString() } }}
        className="w-full h-80 relative"
      >
        <Image alt="image" src={data.image} layout="fill" objectFit="contain" />
      </Link>
      <div className="flex text-sm font-semibold gap-2 mt-2">
        <h1 className="w-4/5 line-clamp-1">{data.title}</h1>
        <section>
          <span className="text-[11px] text-green-700 font-bold align-super">
            $
          </span>
          {data.price}
        </section>
      </div>
      <p className="text-xs">{data.category}</p>
      <div className="flex items-center">
        <ReactStars
          count={5}
          size={16}
          activeColor="#06aa08"
          value={temp}
          edit={false}
        />
        <p className="text-xs">({data.rating.count})</p>
      </div>
      <Button
        variant="outline"
        className="w-fit border rounded-full border-foreground hover:bg-primary hover:text-primary-foreground"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
