import { types as t } from 'mobx-state-tree'
import { Todo } from '../Todo'
import { User } from '../User'

const Root = t.model({
	users: t.array(User),
	todos: t.array(Todo),
})

export { Root }
