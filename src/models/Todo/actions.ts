import { faker } from '@faker-js/faker'
import { Instance } from 'mobx-state-tree'
import { Todo } from '.'
import { Root } from '../Root'

const todoActions = (self: Instance<typeof Root>) => ({
	createTodo(title: string, ownerId: string) {
		const id = faker.string.uuid()

		const newTodo = Todo.create({
			id,
			title,
			owner: ownerId,
		})

		self.todos.push(newTodo)
	},
	addRandomTodo(ownerId: string) {
		const id = faker.string.uuid()
		const randomTitle = faker.lorem.words(3)

		const newTodo = Todo.create({
			id,
			title: randomTitle,
			owner: ownerId,
		})

		self.todos.push(newTodo)
	},
})

export { todoActions }
