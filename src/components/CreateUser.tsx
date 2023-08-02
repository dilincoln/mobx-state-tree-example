import { faker } from '@faker-js/faker'
import { rootStore } from '../stores'

const CreateUser = () => {
	const handleAddUser = () => {
		rootStore.createUser(faker.internet.userName())
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				alignItems: 'center',
			}}
		>
			<button onClick={handleAddUser}>Add random User</button>
		</div>
	)
}

export { CreateUser }
