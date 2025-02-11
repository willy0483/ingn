import styled from "styled-components";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
  height: 75px;

  .burger-menu {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }

  ul {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme.color.white};
    margin-top: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 75px; /* Adjust based on your header height */
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: ${(props) => props.theme.grid.breakpoints.s}) {
      padding: 0.5rem 1rem;
      li {
        background-color: rgb(50, 50, 50);
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 10px;
        transition: background-color 0.3s ease;
        border: none;

        a {
          color: ${(props) => props.theme.color.white};
        }

        &:hover {
          background-color: rgb(70, 70, 70);
        }
      }
    }

    li {
      display: flex;
      transition: transform 0.3s ease-in-out;
      border-left: 1px solid ${(props) => props.theme.color.black};
      border-right: 1px solid ${(props) => props.theme.color.black};
    }
    li:first-of-type {
      border-left: 2px solid ${(props) => props.theme.color.black};
    }
    li:last-of-type {
      border-right: 2px solid ${(props) => props.theme.color.black};
    }

    a {
      color: ${(props) => props.theme.color.black};
      text-decoration: none;
      font-size: 1rem;
      width: 100%;
      transition: color 0.3s ease;
      padding: 0.5rem 1rem;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    flex-direction: row;
    align-items: center;

    .burger-menu {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      width: auto;
      background-color: transparent;
      margin-top: 0;
      position: static;

      li {
        text-align: left;
      }
    }
  }
`;
