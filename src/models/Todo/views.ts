import { computed } from 'mobx'
import { Instance } from 'mobx-state-tree'
import { Root } from '../Root'

const todoViews = (self: Instance<typeof Root>) => ({
	todosByOwner(ownerId: string) {
		return computed(() => self.todos.filter((todo) => todo.owner.id === ownerId), {
			equals: (oldValue, newValue) => {
				let areEquals = true

				const previousTodoIds = oldValue.map((todo) => todo.id)
				const nextTodoIds = newValue.map((todo) => todo.id)
				const hasSameIds = previousTodoIds.every((id) => nextTodoIds.includes(id))
				const hasSameLength = previousTodoIds.length === nextTodoIds.length
				const hasSameTitles = newValue.every((todo, index) => todo.title === oldValue[index].title)

				if (!hasSameIds || !hasSameLength || !hasSameTitles) {
					areEquals = false
				}

				return areEquals
			},
		}).get()
	},
})

export { todoViews }
