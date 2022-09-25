import connect from 'database/connect'
import Units from 'database/schemas/units'

export default async (req, res) => {
	const { method } = req
	await connect()

	switch (method) {
		case 'GET':
			const units = await Units.find({}).sort({ created: -1 })
			res.status(200).send(units)
			break

		case 'POST':
			const { unit, monthly } = req.body
			const check = await Units.findOne({ unit })

			if (check) return res.status(417).send('Unit number is already exists.')

			await Units.create({
				unit,
				monthly,
				created: new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }),
				updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
			})
			res.status(200).send('request success.')
			break

		default:
			res.status(400).send('request failed.')
			break
	}
}
