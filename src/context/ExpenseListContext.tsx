import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { NotificationContext } from "./NotificationContext ";

interface Expense {
  id: number
  description: string
  amount: number
  paidBy: number 
}

interface ExpenseListContextType {
  listExpense: Expense[]
  addExpense: (expense: Omit<Expense, 'id'>) => void
  editExpense: (id: number, expense: Omit<Expense, 'id'>) => void
  deleteExpense: (id: number) => void
}

interface ExpenseListProps {
  children: ReactNode
}

const ExpenseListContext = createContext<ExpenseListContextType | undefined>(undefined)

export const ExpenseListProvider = ({ children }: ExpenseListProps) => {
  const [listExpense, setListExpense] = useState<Expense[] | []>([])
  const [idIncremental, setIdIncremental] = useState<number>(0)
  const notificationContext = useContext(NotificationContext)
  const showNotification = notificationContext?.showNotification

  const addExpense = useCallback((expense: Omit<Expense, 'id'>): void => {
    const newExpense: Expense = {
      id: idIncremental,
      amount: expense.amount,
      description: expense.description,
      paidBy: expense.paidBy
    }
    setIdIncremental(prev => prev + 1)
    setListExpense(prev => [...prev, newExpense])
  }, [idIncremental])

  const editExpense = useCallback((id: number, expense: Omit<Expense, 'id'>) => {
    const searchedExpensed = listExpense.find(expense => expense.id === id)

    if(!searchedExpensed) {
      showNotification?.({ message: 'Expense not found', type: 'error' }); 
      return;
    } 

    const updatedListExpensed = listExpense.map((e) => 
      e.id === id ? { ...e, amount: expense.amount ?? e.amount, description: expense.description ?? e.description, paidBy: expense.paidBy ?? e.paidBy } : e
    )

    setListExpense(updatedListExpensed)
  }, [listExpense])

  const deleteExpense = useCallback((id: number): void => {
    const searchedExpensed = listExpense.find(e => e.id === id)

    if(!searchedExpensed) {
      showNotification?.({ message: 'Expense not found', type: 'error' }); 
      return;
    } 

    const newListExpensed = listExpense.filter(e => e.id !== id)

    setListExpense(newListExpensed)
  }, [])

  return <ExpenseListContext.Provider value={{listExpense, addExpense, editExpense, deleteExpense}}>
    {children}
  </ExpenseListContext.Provider>
}

export { ExpenseListContext }