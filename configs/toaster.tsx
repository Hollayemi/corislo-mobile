import toast from "react-hot-toast";

interface ToasterProps {
  message: string;
  type: "error" | "success" | "promise";
  promise?: Promise<any>;
  error?: string;
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const toaster = ({
  message,
  type,
  promise,
  error,
  duration = 5000,
  position = "top-right",
}: ToasterProps): void => {
  console.log(message, type);
  if (type === "error") {
    toast.error(message, { duration });
  } else if (type === "success") {
    toast.success(message, { duration });
  } else if (type === "promise") {
    toast.promise(promise!, {
      loading: "Loading",
      success: message,
      error: error!,
    });
  }
};

export default toaster;
