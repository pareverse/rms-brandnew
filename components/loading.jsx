import { Flex, Spinner } from '@chakra-ui/react'

const Loading = () => {
	return (
		<Flex bg="surface" justify="center" align="center" h="100vh" w="full">
			<Spinner thickness={2} speed="0.8s" emptyColor="border" color="brand.500" size="xl" />
		</Flex>
	)
}

export default Loading
