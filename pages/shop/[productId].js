import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const ProductDetails = ({ productData }) => {
  const router = useRouter();
  return (
    <>
      {router.isFallback ? (
        <div>Loading ...</div>
      ) : (
        <>
          <h2>{productData?.title}</h2>
          <h2>{productData?.description}</h2>
          <h2>{productData?.price}</h2>
        </>
      )}
    </>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  const paths = data.map((item) => ({ params: { productId: `${item?.id}` } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // Dynamic SSG
  const { params } = context;
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${params.productId}`
  );

  return {
    props: {
      productData: data,
    },
    revalidate: 400,
  };
};
