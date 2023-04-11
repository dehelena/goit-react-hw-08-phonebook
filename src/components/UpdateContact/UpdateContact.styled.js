import { Typography } from '@mui/material';
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
    min-width: 100px;
    height: 40px;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #000;
    background-color: transparent;
    border: 1px solid #ff634780;
    border-radius: 3px;
    transition: background-color 250ms linear;
  }

  & button:hover,
  & button:focus {
    color: #fff;
    background-color: #ff634760;
  }

  & button:not(:last-child) {
    margin-right: 10px;
  }

  & input {
    margin-top: 5px;
    border: 2px solid #b9c4be;
    border-radius: 2px;
    height: 30px;
  }
`;

export const TypographyStyled = styled(Typography)`
  text-align: center;
  font-weight: 800px;
`;
