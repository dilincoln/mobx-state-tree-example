import { types as t } from 'mobx-state-tree'

const User = t.model({
	id: t.identifier,
	name: t.string,
	// todos: t.reference(t.late(() => Todo)),
})

export { User }
