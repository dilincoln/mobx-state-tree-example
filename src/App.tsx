import './App.css'
import { CreateUser } from './components/CreateUser'
import { Users } from './components/Users'

function App() {
	return (
		<div>
			<h1>Todos</h1>

			<CreateUser />

			<Users />
		</div>
	)
}

export default App
