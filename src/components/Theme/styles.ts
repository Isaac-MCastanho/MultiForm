import styled from "styled-components";

export const Container = styled.div`
  background-color: #02044a;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;
  @media (max-width: 500px) {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    border-bottom: 1px solid #16195c;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;
