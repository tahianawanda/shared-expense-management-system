import styled from "styled-components";
import { BalanceSheetIcon, ExpensesIcon, HomeIcon, UsersIcon } from './Icons'
import { Link } from "react-router";
import { ROUTE } from "../App";

const NavBar = () => {
return <Nav>
  <h1>Shared Expenses</h1>
  <ul>
    <li><Link to={ROUTE.HOME}><HomeIcon dimension={18}/>Home</Link></li>
    <li><Link to={ROUTE.USERS}><UsersIcon dimension={18}/>Users</Link></li>
    <li><Link to={ROUTE.EXPENSES}><ExpensesIcon dimension={18}/>Expenses</Link></li>
    <li><Link to={ROUTE.BALANCE_SHEET}><BalanceSheetIcon dimension={18}/>Balance Sheet</Link></li>
  </ul>
</Nav>
}

export default NavBar;

const Nav = styled.nav`
  background: #292A2B;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #E6E6E6;
  padding: 0.5rem 3rem;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 2px solid #3d3e40;

  & h1,
  & ul {
    font-size: 0.9rem;
    font-size: clamp(0.9rem, 0.88rem + 0.09999999999999998vw, 1rem);
  }

  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    gap: 1rem;
  }

  & ul li a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: .3rem;

    &:hover { color: #ffffff; }
  }
`