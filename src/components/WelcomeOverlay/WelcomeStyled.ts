import {styled} from "styled-components";
import {DESIGN_CONST} from "../../assets/designConstants.ts";

export const WelcomeStyled = styled.div< {opacity: number}>`
  opacity: ${props => props.opacity};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${DESIGN_CONST.overlay.bgColor};
  transition: 0.5s ease opacity;
  z-index: 5;
`
export const WelcomePhrase = styled.div< {opacity: number}>`
  padding: 1rem;
  opacity: ${props => props.opacity};
  transition: 0.6s ease-in opacity;
`
export const ProceedButton = styled.div<{ opacity: number }>`
  opacity: ${props => props.opacity};
  position: relative;
  padding: 1rem;
  background-color: ${DESIGN_CONST.button.bgColor};
  border: 3px solid ${DESIGN_CONST.button.borderColor};
  cursor: pointer;
  border-radius: 10px;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out opacity;
`