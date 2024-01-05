export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in useswr fetch");
    console.log("Error : ", error);
  }
};
