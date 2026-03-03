import styled from 'styled-components';

const BalancesSheet = () => {
  return (
    <Div>
      <header className='header-balances'>
        <h2>Balances</h2>
        <p>Track who owes whom</p>
      </header>
      <div className='content-area'>
        <div className='empty-state'>
          <span className='first-content'>No user registered</span>
          <span className='second-content'>Add user and expenses first</span>
        </div>
      </div>
    </Div>
  );
};

export default BalancesSheet;

const Div = styled.div`
  padding: 6rem 0 0 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .header-balances h2 {
    margin: 0;
  }
  .header-balances p {
    margin: 5px 0 0 0;
  }

  .content-area {
    outline: 2px solid #3d3e40;
    min-height: 100px;
    border-radius: 15px;
    padding: 2rem;
  }

  .first-content {
    color: #bababa;
    font-weight: 300;
    font-size: 0.8rem;
    font-size: clamp(0.8rem, 0.78rem + 0.09999999999999998vw, 0.9rem);
  }

  .second-content {
    color: #939393;
    font-weight: 300;
    font-size: 0.7rem;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem);
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 150px;
  }
`;
