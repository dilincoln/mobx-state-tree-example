import { types as t } from 'mobx-state-tree'
import { User } from '../User'

const Todo = t.model({
	id: t.identifier,
	title: t.string,
	owner: t.reference(User),
})

export { Todo }
