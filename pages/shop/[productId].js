import axios from 'axios';
import React from 'react';

const ProductDetails = () => {
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;

export const getStaticProps = async (context) => {

    const data = await axios.get("")

    return {
        props: {
            data
        }
    }
}