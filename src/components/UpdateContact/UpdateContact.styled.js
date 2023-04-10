import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const BtnWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  & button {
    min-width: 200px;
    height: 40px;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #000;
    background-color: transparent;
    border: 2px solid #47946a;
    border-radius: 3px;
    transition: background-color 250ms linear;
  }

  & button:not(:last-child) {
    margin-right: 10px;
  }
`;
