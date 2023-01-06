import axios from "axios";
import Link from "next/link";
import React from "react";

const Shop = ({ products = [] }) => {
  return (
    <div>
      <div>This is shop page</div>
      <div className="flex flex-col">
        {products.map((product) => (
          <Link key={product?.id} href={`/shop/${product.id}`}>
            <div className="flex gap-3 border-b p-3">
              {product?.id} - {product?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

export const getStaticProps = async () => {
  // SSG
  const { data } = await axios.get("https://fakestoreapi.com/products");

  return {
    props: {
      products: data,
    },
  };
};
