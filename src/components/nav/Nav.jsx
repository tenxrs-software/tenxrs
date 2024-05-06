import styled from "styled-components";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media screen and (max-width: 425px) {
    margin-top: 24px;
  }
`;
const Logo = styled.div`
  font-weight: regular;
`;
const Ul = styled.ul`
  display: flex;
  align-items: start;
  list-style: none;

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    display: none;
  }
`;
const Links = styled.a`
  text-decoration-line: none;
  font-size: 14px;
  color: white;
  padding-left: 32px;
`;
const Span = styled.span`
  font-style: italic;
  font-weight: light;
`;

const Nav = () => {
  return (
    <>
      <Header>
        <Logo className="logo">
          TEN<Span>X</Span>RS
        </Logo>
        <Ul>
          <li>
            <Links href="">Services</Links>
          </li>
          <li>
            <Links href="">Industries</Links>
          </li>
          <li>
            <Links href="">Our Process</Links>
          </li>
          <li>
            <Links href="">Contacts</Links>
          </li>
        </Ul>
      </Header>
    </>
  );
};
export default Nav;
