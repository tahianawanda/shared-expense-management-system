import styled from 'styled-components';
import { CloseIcon } from './Icons';
import { useContext, useEffect, useRef } from 'react';
import { UsersListContext } from '../context/UsersListContext';
import { NotificationContext } from '../context/NotificationContext ';
import { ShowModalContext } from '../context/ShowModalContext';

const UserForm = () => {
  const usersContext = useContext(UsersListContext);
  const showModalContext = useContext(ShowModalContext)
  const notificationContext = useContext(NotificationContext)
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputLastNameRef = useRef<HTMLInputElement>(null);
  let buttonText: string = ''
  let title: string = ''

  if (!usersContext || !showModalContext || !notificationContext) {
    throw new Error('Dont have context');
  }

  const { addUsers, editUsers } = usersContext;
  const { dispatch, state } = showModalContext
  const { mode, selectId, formData } = state
  const { showNotification } = notificationContext

  useEffect(() => {
    if(!selectId && mode === 'edit') {
      showNotification({ message: 'Dont have id', type: 'error' })
    }
  }, [selectId, mode])

  if(!selectId && mode === 'edit') return null

  if(mode === 'edit') {
    title = 'Edit User'
    buttonText = 'Save changes'
  } else {
    title = 'New User'
    buttonText = 'Add user'
  }

  return (
    <Div>
      <button onClick={() => dispatch({ type: 'CLOSE' })} className='btn-close'>
        <CloseIcon />
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(mode === 'edit') {
            editUsers(selectId!, state.formData!)
          } else {
            addUsers({
              name: inputNameRef.current?.value ?? '',
              lastName: inputLastNameRef.current?.value ?? '',
            });
          }
          dispatch({ type: 'CLOSE' })
        }}>
        <h2>{title}</h2>

        <div className='field'>
          <label htmlFor='name'>Name</label>
          <input required ref={inputNameRef} id='name' type='text' defaultValue={formData?.name} placeholder='Ej: Juan' />
        </div>

        <div className='field'>
          <label htmlFor='lastName'>Last Name</label>
          <input required ref={inputLastNameRef} id='lastName' type='text' defaultValue={formData?.lastName} placeholder='Ej: Perez' />
        </div>

        <div className='form-actions'>
          <button type='button' className='btn-cancel' onClick={() => dispatch({ type: 'CLOSE' })}>Cancel</button>
          <button type='submit' className='btn-submit'>{buttonText}</button>
        </div>
      </form>
    </Div>
  );
};

export default UserForm;

const Div = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid #3d3e40;
  border-radius: 15px;
  width: 460px;
  background: #1e1f20;
  padding: 2rem;

  .btn-close {
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    border: none;
    background: none;
    color: #6b6c6e;
    cursor: pointer;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    border-radius: 6px;
    transition: color 0.15s;
    &:hover { color: #ffffff; }
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  & form h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #e6e6e6;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .field label {
    font-size: 0.75rem;
    color: #8a8b8d;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .field input {
    background: #292a2b;
    border: 1px solid #3d3e40;
    border-radius: 8px;
    height: 38px;
    padding: 0 0.8rem;
    font-size: 0.9rem;
    color: #e6e6e6;
    transition: border-color 0.15s;
    &::placeholder { color: #5a5b5d; }
    &:focus {
      outline: none;
      border-color: #6b6c6e;
    }
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
    margin-top: 0.4rem;
  }

  .btn-cancel {
    background: none;
    border: 1px solid #3d3e40;
    border-radius: 8px;
    color: #8a8b8d;
    padding: 0.45rem 1rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
    &:hover {
      color: #e6e6e6;
      border-color: #6b6c6e;
    }
  }

  .btn-submit {
    background: #e6e6e6;
    border: none;
    border-radius: 8px;
    color: #1e1f20;
    padding: 0.45rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
    &:hover { background: #ffffff; }
  }
`;