import React from "react";
import StyledLink from "./cors/StyledLink";
import StyledNav from "./cors/StyledNav";

const NavGen = ({ menu, width }) => {
  return (
    <StyledNav width={width}>
      {menu.map(category => {
        let cat = category
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(" ", "-");
        return (
          <StyledLink to={`/${cat}`} key={cat}>
            {category}
          </StyledLink>
        );
      })}
    </StyledNav>
  );
};

export default NavGen;
