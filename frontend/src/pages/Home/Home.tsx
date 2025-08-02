import { HomeSection, Link, Title } from "./Home.styled.js";

const Home = () => {
  return (
    <HomeSection>
      <Title>Create your quiz</Title>

      <Link to="/create">Create Quiz</Link>
    </HomeSection>
  );
};

export default Home;
