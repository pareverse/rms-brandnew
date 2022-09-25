import { Flex } from '@chakra-ui/react'
import Card from 'components/card'

const Unit = () => {
	return (
		<Flex gap={6}>
			<Flex direction="column" gap={6} outline="1px solid red">
				<Card p={6} w={256}>
					1
				</Card>

				<Card p={6} w={256}>
					1
				</Card>
			</Flex>

			<Flex flex={1} outline="1px solid red">
				2
			</Flex>
		</Flex>
	)
}

Unit.authentication = {
	authorized: 'Admin'
}

export default Unit
