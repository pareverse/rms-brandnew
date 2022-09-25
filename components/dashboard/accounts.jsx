import { Flex, GridItem, Text } from '@chakra-ui/react'
import Card from 'components/card'

const Accounts = () => {
	return (
		<GridItem colSpan={4}>
			<Card>
				<Flex p={6}>
					<Text as="h3" fontSize="lg" fontWeight="semibold">
						Accounts
					</Text>
				</Flex>
			</Card>
		</GridItem>
	)
}

export default Accounts
