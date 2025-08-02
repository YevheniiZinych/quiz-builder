import axios from "axios";

export const errorHandler = (error: unknown, setMessage: React.Dispatch<React.SetStateAction<string>>) => {
  if (axios.isAxiosError(error) && error.response) {
    const errMsg = Array.isArray(error.response.data?.message)
      ? error.response.data.message.join("\n")
      : error.response.data?.message || "Server error";
    setMessage(`Server error: ${errMsg}`);
  } else {
    setMessage(`Something went wrong: ${error}`);
  }
};
