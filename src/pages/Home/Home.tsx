import styled from "styled-components";
import FinancialSummary from "./FinancialSummary/FinancialSummary";
import EmptyStateCard from "./EmptyStateCard/EmptyStateCard";
import GettingStartedGuide from "./GettingStartedGuide/GettingStartedGuide";
import { ROUTE } from "../../App";

const Home = () => {
return <Div>
  <header className="header-home">
    <h2>Control Panel</h2>
    <p>Manage your shared expenses simply and efficiently</p>
  </header>

  <div className="main-section">
    <FinancialSummary />
  </div>
  <div className="second-section">
    <EmptyStateCard sectionTitle="Recent Expenses" message="No expenses registered" buttonText="Add Expense" to={ROUTE.EXPENSES}/>
    <EmptyStateCard sectionTitle="User Balance" message="No user registered" buttonText="Add User" to={ROUTE.USERS}/>
  </div>
  <div className="third-section">
    <GettingStartedGuide />
  </div>
</Div>
}

export default Home;

const Div = styled.div`
  padding: 6rem 0 0 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .header-home h2 { margin: 0 }
  .header-home p {
    margin: 5px 0 0 0;
  }

  .second-section {
    display: flex;
    width: 100%;
    gap: 1rem;
  }
`