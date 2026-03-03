import styled from 'styled-components';
import { UsersListContext, type User } from '../../../context/UsersListContext';
import { useContext } from 'react';
import { ShowModalContext } from '../../../context/ShowModalContext';
import { DeleteIcon, EditIcon } from '../../../components/Icons';

const UserInfo = ({ id, name, lastName }: User) => {
  const usersListContext = useContext(UsersListContext);
  const showModalContext = useContext(ShowModalContext);
  if (!usersListContext || !showModalContext) {
    throw new Error('Dont have context');
  }
  const { dispatch } = showModalContext;
  const { deleteUsers } = usersListContext

  return (
    <Div>
      <div className='info-user'>
        <span className='avatar'>{name[0]}{lastName[0]}</span>
        <div className='name-group'>
          <span className='name'>{name}</span>
          <span className='last-name'>{lastName}</span>
        </div>
      </div>
      <div className='config-user'>
        <button onClick={() => dispatch({ type: 'OPEN_EDIT', payload: { id, formData: { name, lastName } } })} className='btn btn-edit'>
          <EditIcon dimension={15} />
        </button>
        <button className='btn btn-delete' onClick={() => deleteUsers(id)}>
          <DeleteIcon dimension={15} />
        </button>
      </div>
    </Div>
  );
};

export default UserInfo;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #3d3e40;
  margin-bottom: 6px;
  background: #1e1f20;
  transition: border-color 0.15s;

  &:hover {
    border-color: #6b6c6e;
  }

  .info-user {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #2e2f30;
    border: 1px solid #3d3e40;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 600;
    color: #8a8b8d;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .name-group {
    display: flex;
    gap: 0.3rem;
  }

  .name, .last-name {
    font-size: 0.9rem;
    color: #e6e6e6;
  }

  .config-user {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .btn {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0.3rem;
    color: #5a5b5d;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transition: color 0.15s;
  }

  .btn-edit:hover { color: #e6e6e6; }
  .btn-delete:hover { color: #f70000; }
`;