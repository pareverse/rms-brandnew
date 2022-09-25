import { chakra } from '@chakra-ui/react'

const Card = (props) => {
	return <chakra.div bg="surface" border="1px" borderColor="border" borderRadius="md" {...props} />
}

export default Card
