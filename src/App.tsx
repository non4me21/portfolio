import './App.scss'
import { ActiveTabProvider } from './context/ActiveTabContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider
      client={queryClient}
    >
      <ActiveTabProvider>
        blbalb
      </ActiveTabProvider>
    </QueryClientProvider>
  )
}

export default App
