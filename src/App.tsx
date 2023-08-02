import './App.css'
import { CreateUser } from './components/CreateUser'
import { Users } from './components/Users'

function App() {
	return (
		<div>
			<h1>Users</h1>

			<CreateUser />

			<hr />

			<Users />
		</div>
	)
}

export default App
