import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ShowModalProvider } from './context/ShowModalContext.tsx';
import { FormDataProvider } from './context/FormDataContext.tsx';
import { NotificationProvider } from './context/NotificationContext .tsx';
import { ExpenseListProvider } from './context/ExpenseListContext.tsx';
import { BrowserRouter } from 'react-router';
import { UsersListProvider } from './context/UsersListContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <ShowModalProvider>
          <UsersListProvider>
            <NotificationProvider>
              <ExpenseListProvider>
                <App />
              </ExpenseListProvider>
            </NotificationProvider>
          </UsersListProvider>
        </ShowModalProvider>
      </FormDataProvider>
    </BrowserRouter>
  </StrictMode>,
);
