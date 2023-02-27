import { Bar, HomeAbout, DivNavBar, Gif } from "./styled-navbar";
import { Link } from "react-router-dom";
import { LogoPoke } from "./styled-navbar";
import image from "../../Assets/logoconbg-01.png";
import { Disclamer, LogoGba } from "../Seachbar/StyledSearchBar";

export default function NavBar() {
  return (
    <Bar>
      <DivNavBar>
        <LogoPoke src={image} />
        <Link to="/home" style={{ textDecoration: "none" }}>
          <HomeAbout>HOME</HomeAbout>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <HomeAbout>ABOUT US</HomeAbout>
        </Link>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <HomeAbout>CREATE YOUR POKEMON</HomeAbout>
        </Link>
      </DivNavBar>
    </Bar>
  );
}
