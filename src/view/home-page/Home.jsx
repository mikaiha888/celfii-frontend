// src/pages/Home.jsx
import React from "react";
import Cards from "../../components/cards/Cards";

const Home = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Accesorios para Celulares</h1>
      <Cards />
    </div>
  );
};

export default Home;
