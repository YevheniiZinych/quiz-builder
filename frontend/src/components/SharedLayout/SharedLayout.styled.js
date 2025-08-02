import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 16px;
  }

  @media (max-width: 425px) {
    max-width: 100%;
    padding: 0 8px;
  }
`;
