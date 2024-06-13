
import Chat from './components/chat';
import NavBar from './components/navBar';
import SideBar from './components/sidebar';


function App() {

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', marginTop: '5rem' }}>
        <SideBar />
        <Chat />
      </div>
    </div>
  )
}

export default App
