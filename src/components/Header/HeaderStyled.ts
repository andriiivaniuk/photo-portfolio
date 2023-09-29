import {styled} from "styled-components";
import {DESIGN_CONST} from "../../assets/designConstants.ts";

export const HeaderStyled = styled.nav`
  display: flex;
  width: 100%;
  background-color: ${DESIGN_CONST.panel.bgColor};
  padding: 1rem;
  position: relative;
`

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media only screen and (max-width: 500px) {
    display: none;
  }
`
export const HeaderListItem = styled.li`
  cursor: pointer;
  transition: 0.2s all;
  
  &:hover {
    transition: 0.2s ease-out;
    transform-style: flat;
    color: ${DESIGN_CONST.panel.borderColor};
  }
`

export const HeaderMobileOverlay = styled.aside`
  position: fixed;
  height: 100%;
  width: 80%;

  top:0;
  left:0;
  bottom:0;
  right:0;

  background-color: cadetblue;
  opacity: 0.9;
  //transition: 0.2s;

  @keyframes roll-in {
    0% {
      margin-left: 30px;
      opacity: 0.1;
    }
    50% {
      margin-left: 15px;
      opacity: 0.5;
    }
    100% {
      margin-left: 0;
      opacity: 0.9;
    }
  }

  animation: roll-in 0.1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`

export const HeaderBurgerBtn = styled.div`
  display: none;
  max-width: 2rem;

  @media only screen and (max-width: 500px) {
    display: block;
    cursor: pointer;
  }
`

export const CloseCross = styled.div`
  display: block;
  height: 15px;
  width: 15px;
  
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
`