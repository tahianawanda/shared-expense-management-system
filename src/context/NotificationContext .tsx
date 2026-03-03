import { createContext, useCallback, useState, type ReactNode } from "react";

interface Notification {
  message: string
  type: 'error' | 'success' | 'info'
}

interface NotificationContextType {
  notification: Notification | null
  showNotification: (notification: Notification) => void
  clearNotification: () => void
}

interface NotificationProviderProps {
  children: ReactNode
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notification, setNotification] = useState<Notification | null>(null)

  const showNotification = useCallback((notification: Notification) => {
    setNotification(notification)
  }, [])

  const clearNotification = useCallback(() => {
    setNotification(null)
  }, [])

  return (
    <NotificationContext.Provider value={{ notification, showNotification, clearNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export { NotificationContext }