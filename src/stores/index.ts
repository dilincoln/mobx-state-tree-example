import { Root } from '../models/Root'
import { todoActions, todoViews } from '../models/Todo'
import { userActions } from '../models/User/actions'

const RootStore = Root.actions((self) => ({
	...todoActions(self),
	...userActions(self),
})).views((self) => ({
	...todoViews(self),
}))

const rootStore = RootStore.create({})

export { rootStore }
