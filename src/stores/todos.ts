import { types } from 'mobx-state-tree'

const user = types.model({
	id: types.identifier,
	name: types.string,
})

const todo = types.model({
	id: types.identifier,
	title: types.string,
	owner: types.reference(user),
})

export { todo, user }
