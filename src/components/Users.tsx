import { rootStore } from '../stores'

const Users = (): React.ReactElement => {
	const users = rootStore.users

	return (
		<>
			{users.map((user) => (
				<ul>
					<li>
						<div>
							<h2>{user.name}</h2>

							<div>
								<span>Todos:</span>

								<ul>
									<li>
										<span>Todo 1</span>
										<button>Remove</button>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			))}
		</>
	)
}

export { Users }
