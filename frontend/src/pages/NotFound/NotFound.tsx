import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <h2>Page not found</h2>
      <Link
        to="/"
        style={{
          color: "blue",
          fontSize: 20,
        }}
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
