import React, { useEffect, useState } from "react";
import axios from "axios";
import CompareCard from "../components/CompareCard";
import { useParams } from "react-router-dom";
import CompareForm from "../components/CompareForm";

const CompareDataPage = () => {
  const { firstCountry, secondCountry } = useParams();
  const [compareData, setCompareData] = useState([]);

  useEffect(() => {
    async function fetchComparsionData() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/compare/${firstCountry}/${secondCountry}`
      );
      setCompareData(response.data);
    }
    fetchComparsionData();
  }, []);

  return (
    <div>
      <CompareForm />
      {Object.keys(compareData).length > 0 && (
        <div className="compare_data_page">
          <CompareCard compareData={compareData} />
        </div>
      )}
    </div>
  );
};

export default CompareDataPage;
