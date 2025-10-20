import './App.css'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { MessagePage } from './pages/MessagePage'
import { Routes,Route } from 'react-router'
import { ConnectionPage } from './pages/ConnectionPage'
import { JobsPage} from './pages/JobsPage'

function App() {
  return (
    <>
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='profile' element={ <ProfilePage /> } />
        <Route path='message' element={ <MessagePage /> } />
        <Route path='connections' element={ <ConnectionPage /> } />
        <Route path='jobs' element={ <JobsPage /> } />
      </Routes>
    </>
  )
}

export default App
