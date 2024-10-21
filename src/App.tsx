import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.scss'
import { MainView } from './components/MainView/MainView'
import { ActiveTabProvider } from './context/ActiveTabContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, 
      },
    },
  }
)

function App() {

  return (
    <>
    <QueryClientProvider
      client={queryClient}
    >
      <ActiveTabProvider>
        <MainView />
      </ActiveTabProvider>
    </QueryClientProvider>
    <Analytics/>
    <SpeedInsights />
    </>
  )
}

export default App
