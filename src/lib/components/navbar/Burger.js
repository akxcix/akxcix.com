import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const StyledIcon = styled.i`
    color: ${props => props.theme.onSurfaceHigh};
    font-size: 25px;
    border-radius: 25px;
    padding: 10px;

    /* Fade */
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;

    &:hover {
        background-color: ${props => props.theme.onSurfaceHigh};
        color: ${props => props.theme.surface};
    }
`;

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.surface} opacity(0.5);
  backdrop-filter: blur(35px);

`;

const StyledNavLink = styled(Link)`
  color: ${props => props.theme.onSurfaceHigh};
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  border-width: 2px;
  border-color: ${props => props.theme.onSurfaceHigh};
  margin: 5px;

  /* Fade */
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;

  &:hover,
  &:focus,
  &:active {
      background-color: ${props => props.theme.onSurfaceHigh};
      color: ${props => props.theme.surface};
  }
`;

export const Burger = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRoutes = props.routes
  const node = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div ref={node} className={props.className}>
      <StyledIcon className="fas fa-bars" onClick={toggleMenu} />
      {
        menuOpen
          ? (
            <div>
              <StyledMenu className="menu">
                {
                  navRoutes.map(route =>
                    <StyledNavLink key={route.href} to={route.href} onClick={toggleMenu} >{route.name}</StyledNavLink>
                  )
                }
              </StyledMenu>
            </div>
          )
          : null
      }
    </div>
  )
}