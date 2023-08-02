import { useState } from 'react'
import { rootStore } from '../stores'

const CreateUser = () => {
	const [userName, setUserName] = useState<string>('')

	const handleAddUser = () => {
		if (!userName) {
			return
		}

		rootStore.addUser(userName)
	}

	return (
		<div>
			<span>Add User</span>
			<input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
			<button onClick={handleAddUser}>Add</button>
		</div>
	)
}

export { CreateUser }
