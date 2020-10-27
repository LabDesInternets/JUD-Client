import React from "react";
import { bool } from "prop-types";
import StyledLink from "../cors/StyledLink";
import StyledMenu from "../cors/StyledMenu";

const Menu = ({ open, setOpen }) => {
  return (
    <div>
      <StyledMenu open={open}>
        <StyledLink exact to="/" onClick={() => setOpen(!open)}>
          Accueil
        </StyledLink>
        <StyledLink to="/abonnement" onClick={() => setOpen(!open)}>
          Abonnement
        </StyledLink>
        <StyledLink to="/boutique" onClick={() => setOpen(!open)}>
          Boutique
        </StyledLink>
        <StyledLink to="/cadeau" onClick={() => setOpen(!open)}>
          Cadeau
        </StyledLink>
        <StyledLink to="/degustations" onClick={() => setOpen(!open)}>
          Dégustations
        </StyledLink>
        <StyledLink to="/histoire" onClick={() => setOpen(!open)}>
          Histoire
        </StyledLink>
      </StyledMenu>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
