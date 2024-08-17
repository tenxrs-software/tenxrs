import styled from "styled-components";
import Hamburger from "./Hamburger";
import useWindowResize from "../Hooks/WindowResize";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:sticky;
  top:0;
  color: white;
  margin-bottom : 100px;
  padding : 0 64px;
  z-index:2;    
  backdrop-filter: blur(10px);
  height:66px;

  @media only screen and (min-width : 375px) and (max-width: 500px) {
    margin-bottom : 35px;
    padding: 10px 15px;
    height:33px;
  }
`;
const Logo = styled.a`
  font-weight: regular;
  text-decoration-line: none;
  color:white;
`;
const Ul = styled.ul`
  display: flex;
  align-items: start;
  list-style: none;
  padding : 0;
  gap:32px;

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    display: none;
}
`;
const Links = styled.a`
text-decoration-line: none;
  font-size: 14px;
  color: white;
//   padding-left: 32px;
    // margin-right:32px;
`;
const Span = styled.span`
  font-style: italic;
  font-weight: light;
`;

const Nav = () => {
  const width = useWindowResize()

  return (
    
      <Header>
        <Logo href="#Tenxrs" className="logo">
          TEN<Span>X</Span>RS
        </Logo>
        {width <= 500 && <Hamburger/> }
        <Ul>
        <li>
          <Links href="#services">Services</Links>
        </li>
        <li>
          <Links href="#industries">Industries</Links>
        </li>
        <li>
          <Links href="#process">Our Process</Links>
        </li>
        <li>
          <Links href="#contact">Contacts</Links>
        </li>
        </Ul>
          
      </Header>
    
  );
};
export default Nav;
