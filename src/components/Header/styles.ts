import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #16195c;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 14px;
    color: #b8b8d4;
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      color: #b8b8d4;
    }
  }
`;
