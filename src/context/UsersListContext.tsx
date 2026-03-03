import { createContext, useCallback, useState } from "react";
import type { ReactNode } from "react";

export interface User {
  id: number,
  name: string,
  lastName: string,
}

interface UsersListContextType {
  listUsers: User[],
  setListUsers: React.Dispatch<React.SetStateAction<User[]>>;
  addUsers: (Users: Omit<User, 'id'>) => void
  editUsers: (id: number, updateUsers: Omit<User, 'id'>) => void
  deleteUsers: (id: number) => void
  getUser: (id: number) => User | undefined
}

interface UsersListProviderProp {
  children: ReactNode,
}

const UsersListContext = createContext<UsersListContextType | undefined>(undefined)

export const UsersListProvider = ({ children }: UsersListProviderProp) => {
  const [listUsers, setListUsers] = useState<Array<{ id: number, name: string, lastName: string }>>([])
  const [idIncremental, setIdIncremental] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)

  const getUser = useCallback((id: number): User | undefined => {
    return listUsers.find(p => p.id === id)
  }, [listUsers])

  const addUsers = useCallback((users: Omit<User, 'id'>) => {
    setListUsers(list => [...list, { id: Date.now(), ...users }])
  }, [])

  const editUsers = useCallback((id: number, users: Omit<User, 'id'>) => {
    console.log('editUsers llamado con id:', id, 'Users:', users)
    console.log('listUsers actual:', listUsers)
    const foundUsers = getUser(id)
    console.log('foundUsers:', foundUsers)

    if(!foundUsers) return setError('No se ha podido registrar')

    const updatedList = listUsers.map(p =>
      p.id === id ? { ...p, name: users.name ?? p.name, lastName: users.lastName ?? p.lastName } : p
    )
    setListUsers(updatedList)
  }, [listUsers, getUser])

  const deleteUsers = useCallback((id: number) => {
    const Users = getUser(id)

    if (!Users) return setError('No se ha encontrado a la Usersa')

    const updateList = listUsers.filter(p => p.id !== id)

    setListUsers(updateList)
  }, [listUsers])

  return <UsersListContext.Provider value={{ listUsers, setListUsers, getUser, addUsers, editUsers, deleteUsers }}>
    { children }
  </UsersListContext.Provider>
}

export { UsersListContext }