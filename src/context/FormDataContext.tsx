import { createContext, useState, type ReactNode } from "react";
import type { User } from "./UsersListContext";

interface FormDataProviderProp {
  children: ReactNode
}

interface FormDataProvider {
  formData: Omit<User, 'id'>,
  setFormData: React.Dispatch<React.SetStateAction<Omit<User, 'id'>>>;
}

const FormDataContext = createContext<FormDataProvider | undefined>(undefined)

export const FormDataProvider = ({ children }: FormDataProviderProp) => {
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    name: '',
    lastName: ''
  })

  return <FormDataContext.Provider value={{ formData, setFormData }}>
    { children }
  </FormDataContext.Provider>
}

export { FormDataContext }