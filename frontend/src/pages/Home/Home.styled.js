import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeSection = styled.section`
  text-align: center;
  height: calc(100dvh - 80px);
  overflow: hidden;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;

  color: white;
  background-color: orangered;
`;

export const Title = styled.h1`
  margin-bottom: 150px;
`;
