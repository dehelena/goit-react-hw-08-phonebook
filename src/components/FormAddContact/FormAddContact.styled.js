import styled from 'styled-components';

export const StyledFormAddContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  width: 550px;
  border: 1px solid #b9c4be77;

  & button {
    align-self: center;
    min-width: 120px;
    height: 40px;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #000;
    background-color: #ff634733;
    border-color: transparent;
    border-radius: 3px;
    transition: background-color 250ms linear;
  }

  & button:hover,
  & button:focus {
    background-color: #ff634760;
  }

  & .label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & input {
    margin-top: 5px;
    border: 1px solid #b9c4be;
    border-radius: 2px;
    height: 30px;
  }
`;
