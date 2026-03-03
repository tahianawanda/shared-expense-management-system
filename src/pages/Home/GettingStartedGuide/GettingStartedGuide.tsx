import styled from "styled-components";
import { OneIcon, SecondIcon, ThirdIcon } from "../../../components/Icons";

const GettingStartedGuide = () => {
return <Div>
  <h3>How to get started</h3>
  <div className="item-guide">
    <OneIcon />
    <div className="description-item-guide">
      <h4>Add users</h4>
      <p>Go to the "Users" section and add all participants</p>
    </div>
  </div>
  <div className="item-guide">
    <SecondIcon />
    <div className="description-item-guide">
      <h4>Register expenses</h4>
      <p>Add each expense, indicating who paid and between whom it is divided</p>
    </div>
  </div>
  <div className="item-guide">
    <ThirdIcon />
    <div className="description-item-guide">
      <h4>Check balances</h4>
      <p>See who owes whom and how much in the "Balances" section</p>
    </div>
  </div>
</Div>
}

export default GettingStartedGuide;

const Div = styled.div`
  outline: 2px solid #3d3e40;
  margin-top: 2.5rem;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 1rem;

  & h3 { 
    margin: 0;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem);  
    font-weight: 500;
  }
  .item-guide {
    display: flex;
    align-items: start;
    margin-top: 15px;
  }

  .description-item-guide h4,
  .description-item-guide p {
    margin: 0;
    font-size: 0.7rem;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem); 
  }

  .description-item-guide p {
    color: #bababa;
  }

  .description-item-guide {
    display: flex;
    flex-direction: column;
    gap: .2rem;
  }
`