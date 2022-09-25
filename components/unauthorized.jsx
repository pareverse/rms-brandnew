import { useRouter } from 'next/router'
import { Button, Flex, Stack, Text } from '@chakra-ui/react'

const Unauthorized = () => {
	const router = useRouter()

	return (
		<Flex justify="center" align="center" h="100vh" w="full">
			<Stack spacing="6">
				<Text fontSize="2xl" fontWeight="medium">
					Unauthorized.
				</Text>

				<Button onClick={() => router.back()}>Go back</Button>
			</Stack>
		</Flex>
	)
}

export default Unauthorized
