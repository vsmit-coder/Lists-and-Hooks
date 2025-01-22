import './App.css'
import CounterApp from './components/CounterApp'
import LoginLogout from './components/LoginLogout'
import GroceryList from './components/GroceryList'
import List from './components/ListView'
import ModalForm from './components/ModelForm'
import Mouse from './components/Mouse'

function App() {

  return (
    <>
      <CounterApp />
      <LoginLogout ptype="Login" />
      <LoginLogout ptype="Logout" />
      <GroceryList />
      <List />
      <ModalForm modaltype="Login Page"/>
      <ModalForm modaltype="Registration Page"/>
      <Mouse />
    </>
  )
}

export default App
