import styled from "styled-components";
export default function Header() {
  const Header = styled.header`
    background-color: black;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const H1 = styled.h1`
    font-size: 32px;
    color: white;
  `;

  const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const MenuItem = styled.li`
    font-size: 16px;
    font-weight: 400;
    list-style: none;
    color: white;
    list-style: none;
  `;
  return (
    <Header>
      <H1>OZ 코딩스쿨</H1>
      <MenuContainer>
        <MenuItem>로그인</MenuItem>
        <MenuItem>회원가입</MenuItem>
        <MenuItem>내클래스</MenuItem>
      </MenuContainer>
    </Header>
  );
}
