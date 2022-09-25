import { Flex, Grid, GridItem, Progress, Text } from '@chakra-ui/react'
import Card from 'components/card'
import { CheckSquare, DollarSign, Grid as IconGrid, Users } from 'react-feather'

const Statistics = () => {
	const data = [
		{ id: 1, title: 'Vacant Units', value: 15, progress: 25, icon: <CheckSquare /> },
		{ id: 2, title: 'Total Units', value: 30, progress: 50, icon: <IconGrid /> },
		{ id: 3, title: 'Total Tenants', value: 25, progress: 75, icon: <Users /> },
		{ id: 4, title: 'Total Collected', value: '₱' + (25000).toLocaleString(undefined, { maximumFractionDigits: 2 }), progress: 90, icon: <DollarSign /> }
	]

	return (
		<>
			{data.map((data) => (
				<GridItem colSpan={{ base: 12, lg: 6, xl: 3 }} key={data.id}>
					<Card p={6}>
						<Grid templateColumns="1fr 64px" gap={3}>
							<GridItem noOfLines={1}>
								<Text as="h1" fontSize="2xl" fontWeight="semibold" color="solid">
									{data.value}
								</Text>
							</GridItem>

							<GridItem rowSpan={2}>
								<Flex bg="hsl(220, 100%, 50%, 3%)" justify="center" align="center" borderRadius="full" h={16} w={16}>
									<Flex bg="hsl(220, 100%, 50%, 5%)" justify="center" align="center" borderRadius="full" h={12} w={12} color="blue.500" _dark={{ color: 'blue.200' }}>
										{data.icon}
									</Flex>
								</Flex>
							</GridItem>

							<GridItem>
								<Text fontSize="xs" fontWeight="medium" color="muted">
									{data.title}
								</Text>
							</GridItem>

							<GridItem colSpan={2}>
								<Progress colorScheme="brand" size="xs" borderRadius="md" value={data.progress} />
							</GridItem>
						</Grid>
					</Card>
				</GridItem>
			))}
		</>
	)
}

export default Statistics
