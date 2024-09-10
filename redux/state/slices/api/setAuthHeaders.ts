import AsyncStorage from "@react-native-async-storage/async-storage";

export const jsonHeader = async (by?: string) => {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer " +
        (await AsyncStorage.getItem(
          by === "store" ? "store_token" : "user_token"
        )),
    },
  };
  return config;
};
