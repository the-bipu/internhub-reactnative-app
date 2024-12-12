// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoint, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     headers: {
//       "X-RapidAPI-Key": '18fa531152msh04542f721ca921dp1016fajsn9ae3919cfd01',
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//     params: { ...query },
//   };

//   const fetchData = async () => {
//     setIsLoading(true);
  
//     try {
//       const response = await axios.request(options);
  
//       setData(response.data.data);
//     } catch (error) {
//       setError(error);
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };  

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;





// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoint, query) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     // Set the URL to the endpoint you want to fetch data from
//     url: `https://ip-backend-eight.vercel.app/${endpoint}`,
//     params: { ...query },
//   };

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);

//       setData(response.data.data);
//     } catch (error) {
//       setError(error);
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;


import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Construct the URL with the provided endpoint
  const url = `https://ip-backend-eight.vercel.app/${endpoint}`;

  const options = {
    method: "GET",
    url: url,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;