import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { To } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

interface IBackLinkProps {
  to: To;
  children: ReactNode;
}

export const BackLink = ({ to, children }: IBackLinkProps) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
