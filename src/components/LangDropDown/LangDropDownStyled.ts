import styled from "styled-components";

export const LangDropDownStyled = styled.div`
  //border: 2px solid
  border-radius: 4px;
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`
export const SelectedLang = styled.span`
  position: relative;
  text-transform: uppercase;
  z-index: 0;
`

export const OptionsList = styled.ul`
  position: absolute;
  top: 2.5rem;
  left: -0.7rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 1, 1, 0.8);
  //border: 3px solid
`

export const LanguageOption = styled.li`
  text-transform: uppercase;
  font-weight: 500;
  color: wheat;
  padding: 0.5rem;
`