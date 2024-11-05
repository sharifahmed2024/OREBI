import React from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import special1 from "/SpecialOffer/special1.png";
import special2 from "/SpecialOffer/special2.png";
import special3 from "/SpecialOffer/special3.png";
import special4 from "/SpecialOffer/special4.png";

const SpecialOffer = () => {
  return (
    <div className="py-28">
      <Container className="mb-12">
        <Headertext Headertext="Special Offers" />
      </Container>
      <Container className="flex justify-between">
        <ProductItem
          src={special1}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
        <ProductItem
          src={special2}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
        <ProductItem
          src={special3}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
        <ProductItem
          src={special4}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
      </Container>
    </div>
  );
};

export default SpecialOffer;
