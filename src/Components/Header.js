import React from "react";
import { Link, withRouter } from "react-router-dom";
// Link 해당페이지가 내 어플리케이션에 있으면 그곳으로 브라우저한 방식으로 가지 않고 JavaScript의 방식으로 가게해줌
// withRouter : 다른 컴포넌트를 감싸는 컴포넌트
import styled from "styled-components";

const Header = styled.header`
  color: white;
  padding: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20,20,20,0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);

`;

const List = styled.ul`
  display:flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? "#3498db" : "transparent")};
  transition : border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items:center;
  justify-content : center;
`; // Link 에 스타일을 주면서 a태그대신 사용하는방법 Link에는 href대신 to
 
export default withRouter( ({location : { pathname}}) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movices</SLink>  
      </Item>
      <Item  current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));