import connect from 'database/connect'
import Users from 'database/schemas/users'

export default async (req, res) => {
	const { method } = req
	await connect()

	switch (method) {
		case 'GET':
			const users = await Users.find({}).sort({ role: 'Tenant', created: -1 })
			res.status(200).send(users)
			break

		case 'POST':
			break

		default:
			res.status(400).send('request failed.')
			break
	}
}
