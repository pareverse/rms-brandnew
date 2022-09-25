import mongoose from 'mongoose'

const UnitSchema = mongoose.Schema({
	unit: {
		type: Number,
		default: 0
	},
	company: {
		type: String,
		default: ''
	},
	tenant: {
		type: String,
		default: ''
	},
	monthly: {
		type: Number,
		default: 0
	},
	balance: {
		type: Number,
		default: 0
	},
	status: {
		type: Boolean,
		default: false
	},
	created: {
		type: String,
		default: ''
	},
	updated: {
		type: String,
		default: ''
	}
})

const Units = mongoose.models.Units || mongoose.model('Units', UnitSchema)

export default Units
