import styled from "styled-components";
import {DESIGN_CONST} from "../../assets/designConstants.ts";

export const LangDropDownStyled = styled.div`
  //border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`
export const LangMenu = styled.div`
  position: relative;
  text-transform: uppercase;
  z-index: 0;
`

export const SelectedLang = styled.span`
  padding: 0.3rem;
  border: ${DESIGN_CONST.dropDown.borderColor} 2px solid;
  border-radius: 5px;
  background-color: ${DESIGN_CONST.dropDown.iconBgColor};
`

export const OptionsList = styled.ul`
  position: absolute;
  top: 1.8rem;
  left: -0.3rem;
  display: flex;
  flex-direction: column;
  background-color: ${DESIGN_CONST.dropDown.bgColor};
  border: ${DESIGN_CONST.dropDown.borderColor} 3px solid;
  border-radius: 7px;
`

export const LanguageOption = styled.li`
  text-transform: uppercase;
  font-weight: 500;
  color: wheat;
  padding: 0.5rem;
`