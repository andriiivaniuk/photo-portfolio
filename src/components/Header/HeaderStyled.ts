import {styled} from "styled-components";
import {DESIGN_CONST} from "../../assets/designConstants.ts";

export const HeaderStyled = styled.nav`
  display: flex;
  width: 100%;
  background-color: ${DESIGN_CONST.panel.bgColor};
  padding: 1rem;
`

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`
export const HeaderListItem = styled.li`
  cursor: pointer;
  transition: 0.3s;
`