import { Grid, Text } from '@chakra-ui/react'
import Statistics from 'components/dashboard/statistics'
import Payments from 'components/dashboard/payments'

const Dashboard = () => {
	return (
		<>
			<Text as="h1" py={6} fontSize="2xl" fontWeight="semibold" color="solid">
				Dashboard
			</Text>

			<Grid templateColumns="repeat(12, 1fr)" gap={6} mb={6}>
				<Statistics />
				<Payments />
			</Grid>
		</>
	)
}

Dashboard.authentication = {
	authorized: 'Admin'
}

export default Dashboard
