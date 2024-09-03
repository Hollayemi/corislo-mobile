import { Toast } from "toastify-react-native";

interface ToasterProps {
  message: string;
  type: "error" | "success";
}

const toaster = ({ message, type }: ToasterProps): void => {
  console.log(message, type);
  if (type === "error") {
    Toast.error(message, "");
  } else if (type === "success") {
    Toast.success(message);
  }
};

export default toaster;
