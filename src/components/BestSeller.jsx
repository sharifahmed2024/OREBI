import React from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import b1 from "../../public/Bestseller/b1.png"
import b2 from "../../public/Bestseller/b2.png"
import b3 from "../../public/Bestseller/b3.png"
import b4 from "../../public/Bestseller/b4.png"

const BestSeller = () => {
  return (
    <div className="py-32">
      <Container className='mb-12'>
        <Headertext Headertext="Best Seller" />
      </Container>

      <Container className="flex justify-between">
         <ProductItem src={b1} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black"/>
         <ProductItem src={b2} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black"/>
         <ProductItem src={b3} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black"/>
         <ProductItem src={b4} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black"/>
      </Container>
    </div>
  );
};

export default BestSeller;
