const fetcher = async (
  url: string,
  fetchData: any,
  method: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setData: any
) => {
  try {
    const response: any = await fetch(url, {
      method: method,
      body: fetchData ? JSON.stringify(fetchData) : null,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log("Response Data:", data);
    if (!data) {
      setMessage("No data available, An error occured, Try again");
    }
    if (data?.type == "error" || data?.success == "error") {
      setMessage(data.message);
    }
    if (data && data?.type !== "error") {
      setData(data);
    }
  } catch (error) {
    setMessage("An error occured, Try again");
    console.log("Error in fetching");
    console.log("Error : ", error);
  }
  return;
};
export default fetcher;
