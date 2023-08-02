import { types } from 'mobx-state-tree'
import { todo, user } from './todos'

const RootStore = types
	.model({
		users: types.array(user),
		todos: types.optional(types.array(todo), []),
	})
	.actions((self) => ({
		addUser(userName: string) {
			const id = Math.random().toString() + Date.now().toString()

			self.users.push({
				id,
				name: userName,
			})
		},
	}))

const rootStore = RootStore.create({})

export { rootStore }
