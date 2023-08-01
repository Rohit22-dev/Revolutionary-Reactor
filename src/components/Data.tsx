"use client";

type AllProductProps = {
  category?: string | null;
  id?: string | null;
};

export const AllProduct = async ({ category }: AllProductProps) => {
  const url = `https://fakestoreapi.com/products${
    category ? `/category/${category.toLowerCase()}` : ""
  }`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const ProductDetail = async ({ id }: AllProductProps) => {
  const url = `https://fakestoreapi.com/products/`;
  const res = await fetch(url + id);
  const data = await res.json();
  return data;
};
