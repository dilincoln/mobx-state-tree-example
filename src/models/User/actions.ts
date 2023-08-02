import { faker } from '@faker-js/faker'
import { Instance } from 'mobx-state-tree'
import { User } from '.'
import { Root } from '../Root'

const userActions = (self: Instance<typeof Root>) => ({
	createUser(name: string) {
		const id = faker.string.uuid()

		const newUser = User.create({
			id,
			name,
		})

		self.users.push(newUser)
	},
})

export { userActions }
