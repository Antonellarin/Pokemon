import styled from "styled-components";

export const Bar = styled.div`
  position: relative;
  min-height: 160px;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: small;
  border-radius: 10px;
`;

export const DivNavBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 600px;
  height: 50px;
  font-family: "Press Start 2P";
  background-color: yellow;
  text-shadow: 8px 8px 10px #252525;
  box-shadow: 8px 8px 1px #252525;
  opacity: 90%;
  left: 50px;
`;

export const HomeAbout = styled.div`
  z-index: 1000;
  color: red;
  margin-right: 100px;
  margin-left: 100px;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.35);
  }
`;

export const LogoPoke = styled.img`
  position: absolute;
  z-index: 100;
  height: 150px;
  width: 500px;
  border-radius: 50px;
  right: -1200px;
`;

export const Gif = styled.img`
  display: inline-block;
  position: absolute;
  height: auto;
  right: 500px;
  top: 10px;
  height: 150px;
`;
