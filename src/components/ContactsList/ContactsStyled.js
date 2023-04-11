import styled from 'styled-components';
import { Box, IconButton } from '@mui/material';

export const ContactStyled = styled.ul`
  margin-top: 30px;
  text-align: center;
  color: #454545;

  & .contactItem {
    margin-top: 10px;
  }

  & button {
    margin-left: 20px;
    min-width: 50px;
    height: 50px;
    font-size: 15px;
    letter-spacing: 0.02em;
    color: #000;
    background-color: transparent;
    border: 1px solid #ff634780;
    transition: background-color 250ms linear;
  }

  & button:hover {
    color: #fff;
    background-color: #ff634780;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export const DeleteBtnStyled = styled(IconButton)`
  margin-left: 20px;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
