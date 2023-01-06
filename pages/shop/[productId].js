import axios from "axios";
import React from "react";

const ProductDetails = ({ productData }) => {
  const { title, description, price } = productData;
  return (
    <>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
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
  const { params } = context;
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${params.productId}`
  );

  return {
    props: {
      productData: data,
    },
  };
};
