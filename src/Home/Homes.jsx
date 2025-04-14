import React from "react";
import PriceOption from "../Component/PriceOption";
import Resultchart from "../resultChart/Resultchart";
import Markschart from "../MarkChart/Markschart";
import axios from "axios";
import { Suspense, useState } from "react";

const marksPromise = axios.get("marksdata.json");

const Homes = () => {
  const [fetchData, setFetchData] = useState([]);
  fetch("pricingData.json")
    .then((res) => res.json())
    .then((data) => setFetchData(data));

  fetch("pricingData.json")
    .then((res) => res.json())
    .then((data) => setFetchData(data));
  return (
    <div>
      <PriceOption fetchData={fetchData}></PriceOption>
      <Resultchart></Resultchart>

      <Suspense fallback={<li>loading.............</li>}>
        <Markschart marksPromise={marksPromise}></Markschart>
      </Suspense>
    </div>
  );
};

export default Homes;
