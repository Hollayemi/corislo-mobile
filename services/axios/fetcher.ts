// Import Axios if you are using a module system like ES6 modules
import axios from "axios";
// import useSWR from "swr";

// URL of the API you want to fetch data from
// const apiUrl = "https://api.example.com/data";

// Create a fetcher function for SWR
export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    throw error; // Throw the error so SWR can handle it
  }
};

// Use SWR to fetch and cache data
// const { data, error } = useSWR(apiUrl, fetcher);

// if (error) {
//   // Handle the error, e.g., display an error message
//   console.error("Error fetching data:", error);
// }

// if (!data) {
//   // Handle the loading state, e.g., show a loading spinner
//   return <div>Loading...</div>;
// }

// // Render the fetched data
// console.log("Data fetched successfully:", data);
