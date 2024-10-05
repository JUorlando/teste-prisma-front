import styled from "styled-components";

export const StyledList = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  h1 {
      margin: 0% auto;
      padding-top: 50px;
      font-size: 50px;
      color: darkblue;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    margin: 0% auto;
    color: black;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: solid;
    border-radius: 10px;
    border-color: darkblue;
    gap: 12px;
    background-color: aliceblue;
  }
`;