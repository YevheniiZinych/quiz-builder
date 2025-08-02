import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  padding: 10px 5px;
  border: 1px solid black;

  height: auto;
`;

export const Title = styled.p`
  width: 300px;

  text-align: start;
  word-break: break-all;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
