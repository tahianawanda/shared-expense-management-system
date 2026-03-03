import { Route, Routes } from 'react-router';
import LayoutMain from './layout/LayoutMain';
import Home from './pages/Home/Home';
import Expenses from './pages/Expenses/Expenses';
import Users from './pages/UserOverview/UserOverview';
import BalancesSheet from './pages/BalancesSheet/BalancesSheet';

export const ROUTE = {
    HOME: '/',
    EXPENSES: '/expenses',
    USERS: '/users',
    BALANCE_SHEET: '/balance-sheet'
}

export const CARD_VARIANT = {
  USER: 'user',
  EXPENSE: 'expense'
} as const;

export type CardVariant = typeof CARD_VARIANT[keyof typeof CARD_VARIANT];

function App() {
  return (
    <LayoutMain>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />}/>
        <Route path={ROUTE.EXPENSES} element={<Expenses />}/>
        <Route path={ROUTE.USERS} element={<Users />}/>
        <Route path={ROUTE.BALANCE_SHEET} element={<BalancesSheet />}/>
      </Routes>
    </LayoutMain>
  );
}

export default App;
