import styled from 'styled-components';
import Button from '../../components/Button';
import { useContext } from 'react';
import { UsersListContext } from '../../context/UsersListContext';
import UserInfo from './UserInfo/UserInfo';
import UserForm from '../../components/UserForm';
import { ShowModalContext } from '../../context/ShowModalContext';
import { AddUserIcon } from '../../components/Icons';

const UserOverview = () => {
  const usersContext = useContext(UsersListContext)
  const showModalContext = useContext(ShowModalContext)

  if(!usersContext || !showModalContext) {
    throw new Error('Dont have context')
  }

  const { listUsers } = usersContext
  const { state, dispatch } = showModalContext
  const { showModal } = state

  return (
    <Div>
      {showModal && <UserForm />}
      
      <header className="page-header">
        <div className="header-title">
          <h2>Users</h2>
          <p>Manage expense participants</p>
        </div>
        <button className='btn-add' onClick={() => { dispatch({ type: 'OPEN_ADD' })}}><AddUserIcon /></button>
      </header>

      <div className="content-area">
        {listUsers.length > 0 ? (
          <div className="users-grid">
            {listUsers.map(u => (
              <UserInfo key={u.id} id={u.id} name={u.name} lastName={u.lastName} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-state-title">No user registered</p>
            <p className="empty-state-subtitle">Add user to start registering expenses</p>
          </div>
        )}
      </div>
    </Div>
  );
};

export default UserOverview;

const Div = styled.div`
  padding: 6rem 0 0 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* Header */
  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .page-header h2 { 
    margin: 0; 
  }

  .page-header p { 
    margin: 5px 0 0 0; 
    color: #cecece;
  }

  /* Content area */
  .content-area {
    outline: 2px solid #3d3e40;
    min-height: 100px;
    border-radius: 15px;
    padding: 2rem;
  }

  /* Users grid */
  .users-grid {
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
    gap: 1rem;
    width: 100%;
  }

  /* Empty state */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 150px;
  }

  .empty-state-title {
    color: #bababa;
    font-weight: 300;
    font-size: 0.8rem;
    font-size: clamp(0.8rem, 0.78rem + 0.09999999999999998vw, 0.9rem);
    margin: 0 0 0.5rem 0;
  }

  .empty-state-subtitle {
    color: #939393;
    font-weight: 300;
    font-size: 0.7rem;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem);
    margin: 0;
  }

  .btn-add {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0.3rem;
    color: #bababa;
    border-radius: 8px;
    display: flex;
    align-items: center;
    transition: color 0.15s;
    &:hover {
      color: #ffffff;
    }
  }
`;