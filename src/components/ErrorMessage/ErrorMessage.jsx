import { useEffect } from "react";
import toast from "react-hot-toast";

const ErrorMessage = () => {
  useEffect(() => {
    toast.error("Oops, something went wrong! Reload this page!");
  }, []);

  return null;
};

export default ErrorMessage;
