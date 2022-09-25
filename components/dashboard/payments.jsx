import { Badge, Box, Divider, Flex, GridItem, IconButton, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Card from 'components/card'
import { ChevronLeft, ChevronRight, Eye } from 'react-feather'

const Payments = () => {
	return (
		<GridItem colSpan={12}>
			<Card>
				<Flex p={6}>
					<Text as="h3" fontSize="lg" fontWeight="semibold">
						Payments
					</Text>
				</Flex>

				<TableContainer>
					<Table>
						<Thead>
							<Tr>
								<Th>Company</Th>
								<Th>Tenant</Th>
								<Th textAlign="center">Unit</Th>
								<Th textAlign="center">Amount</Th>
								<Th textAlign="center">Date</Th>
								<Th textAlign="center">Status</Th>
								<Th textAlign="center">Pay</Th>
								<Th></Th>
							</Tr>
						</Thead>

						<Tbody>
							{[...Array(10)].map((data, index) => (
								<Tr key={index}>
									<Td fontWeight="medium">Company Name {index + 1}</Td>
									<Td fontWeight="medium">Tenant {index + 1}</Td>
									<Td textAlign="center">110</Td>
									<Td textAlign="center">₱{(25000).toLocaleString(undefined, { maximumFractionDigits: 2 })}</Td>
									<Td textAlign="center">09/24/2022</Td>
									<Td textAlign="center">
										<Badge colorScheme="yellow">Pending</Badge>
									</Td>
									<Td textAlign="center">
										<Badge colorScheme="brand">Gcash</Badge>
									</Td>
									<Td textAlign="end">
										<IconButton size="sm" icon={<Eye size={14} />} />
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>

				<Divider />

				<Flex justify="space-between" p={6}>
					<Box>
						<Select>
							<option>5</option>
						</Select>
					</Box>

					<Stack direction="row" spacing={3}>
						<IconButton icon={<ChevronLeft size={18} />} />
						<IconButton icon={<ChevronRight size={18} />} />
					</Stack>
				</Flex>
			</Card>
		</GridItem>
	)
}

export default Payments
