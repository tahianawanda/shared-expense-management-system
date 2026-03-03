import { createContext, useReducer, type ReactNode } from "react";

interface ShowModalProp {
  children: ReactNode
}

interface FormData {
  name: string
  lastName: string
}

interface ShowModalState {
  showModal: boolean
  mode: 'add' | 'edit'
  selectId: number | null
  formData: FormData | null
}

type ShowModalAction =
  | { type: 'OPEN_ADD' }
  | { type: 'OPEN_EDIT'; payload: { id: number, formData: FormData } }
  | { type: 'CLOSE' }

interface ShowModalContextType {
  state: ShowModalState
  dispatch: React.Dispatch<ShowModalAction>
}

const reducer = (state: ShowModalState, action: ShowModalAction): ShowModalState => {
  switch(action.type) {
    case 'OPEN_ADD':
      return { showModal: true, mode: 'add', selectId: null, formData: null }
    case 'OPEN_EDIT':
      return { showModal: true, mode: 'edit', selectId: action.payload.id, formData: action.payload.formData }
    case 'CLOSE':
      return { showModal: false, mode: 'add', selectId: null, formData: null }
    default:
      return state
  }
}

const initialState: ShowModalState = {
  showModal: false,
  mode: 'add',
  selectId: null,
  formData: null
}

const ShowModalContext = createContext<ShowModalContextType | undefined>(undefined)

export const ShowModalProvider = ({ children }: ShowModalProp) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ShowModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ShowModalContext.Provider>
  )
}

export { ShowModalContext }