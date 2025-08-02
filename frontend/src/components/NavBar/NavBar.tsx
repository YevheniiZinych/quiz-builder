import { Link, Header } from "./NavBar.styled.js";

export const NavBar = () => {
  return (
    <Header>
      <h1>Quiz Creator</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create quiz</Link>
        <Link to="/quizzes">Quiz list</Link>
      </nav>
    </Header>
  );
};
