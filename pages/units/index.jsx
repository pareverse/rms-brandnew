import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { useQuery, useMutation, useQueryClient, QueryClient, dehydrate } from '@tanstack/react-query'
import api from 'instance'
import { Badge, Box, Button, Divider, Flex, FormControl, FormLabel, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Skeleton, Stack, Table as ChakraTable, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight, MoreHorizontal, Search, User } from 'react-feather'
import { useForm } from 'react-hook-form'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }]

const Units = () => {
	const queryClient = useQueryClient()
	const { data } = useQuery(['units'], () => api.getAll('/units'), { enable: data !== undefined })
	console.log(data)
	const [settings, dispatch] = useState({ min: 0, max: 0, limit: 10 })
	const { min, max, limit } = settings
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { register, watch } = useForm()

	const results = (data) => {
		return data && data.filter((data) => ['unit'].some((key) => data[key].toString().toLowerCase().includes(watch('search'))))
	}

	useEffect(() => {
		dispatch({ min: 0, max: Number(watch('show')), limit: Number(watch('show')) })
	}, [watch('search'), watch('show')])

	return (
		<>
			<Box>
				<Flex bg="surface" position="sticky" top={0} justify="space-between" direction={{ base: 'column-reverse', md: 'row' }} gap={6} py={6} zIndex={1}>
					<Box>
						<InputGroup w={{ base: 'full', md: 256 }}>
							<InputLeftElement pointerEvents="none" children={<Search size={18} />} />
							<Input placeholder="Search..." {...register('search')} />
						</InputGroup>
					</Box>

					<Stack justify="end" direction="row" spacing={3}>
						<Box>
							<Select placeholder="Status">
								<option>True</option>
								<option>False</option>
							</Select>
						</Box>

						<Button colorScheme="brand" onClick={onOpen}>
							Add new
						</Button>
					</Stack>
				</Flex>

				<TableContainer>
					<ChakraTable variant="simple">
						<Thead>
							<Tr>
								<Th>Unit</Th>
								<Th>Company</Th>
								<Th>Tenant</Th>
								<Th textAlign="center">Monthly</Th>
								<Th textAlign="center">Balance</Th>
								<Th textAlign="center">Status</Th>
								<Th textAlign="center">Created</Th>
								<Th textAlign="right"></Th>
							</Tr>
						</Thead>

						<Tbody>
							{data &&
								results(data)
									.slice(min, max)
									.map((data) => (
										<Tr key={data._id}>
											<Td>{data.unit}</Td>
											<Td>
												<Skeleton h={2} />
											</Td>
											<Td>
												<Skeleton h={2} />
											</Td>
											<Td textAlign="center">₱{data.monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Td>
											<Td textAlign="center">₱{data.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Td>
											<Td textAlign="center">
												<Badge colorScheme={data.status ? 'brand' : 'red'}>{data.status ? 'Occupied' : 'Vacant'}</Badge>
											</Td>
											<Td textAlign="center">{data.created.split(',')[0]}</Td>
											<Td textAlign="end">
												<NextLink href="/units/1" passHref>
													<IconButton as="a" size="sm" icon={<MoreHorizontal size={14} />} />
												</NextLink>
											</Td>
										</Tr>
									))}
						</Tbody>
					</ChakraTable>
				</TableContainer>

				<Divider />

				<Flex bg="surface" position="sticky" bottom={0} justify="space-between" py={6}>
					<Box>
						<Select defaultValue={10} {...register('show')}>
							<option value={10}>10</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
						</Select>
					</Box>

					<Stack direction="row" spacing={3}>
						<IconButton icon={<ChevronLeft size={18} />} onClick={() => dispatch({ ...settings, min: min - limit, max: max - limit })} disabled={min === 0} />
						<IconButton icon={<ChevronRight size={18} />} onClick={() => dispatch({ ...settings, min: min + limit, max: max + limit })} disabled={data && results(data).length <= max} />
					</Stack>
				</Flex>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent>
					<form>
						<ModalHeader>Add new</ModalHeader>

						<ModalBody>
							<Stack spacing={3}>
								<FormControl>
									<FormLabel>Input 1</FormLabel>

									<InputGroup>
										<InputLeftElement pointerEvents="none" children={<User size={18} />} />
										<Input placeholder="Input 1" id="input1" />
									</InputGroup>
								</FormControl>

								<FormControl>
									<FormLabel>Input 2</FormLabel>

									<InputGroup>
										<InputLeftElement pointerEvents="none" children={<User size={18} />} />
										<Input placeholder="Input 2" />
									</InputGroup>
								</FormControl>

								<FormControl>
									<FormLabel>Input 3</FormLabel>

									<InputGroup>
										<InputLeftElement pointerEvents="none" children={<User size={18} />} />
										<Input placeholder="Input 3" />
									</InputGroup>
								</FormControl>
							</Stack>
						</ModalBody>

						<ModalFooter>
							<Stack direction="row" spacing={3}>
								<Button type="submit" colorScheme="brand">
									Submit
								</Button>

								<Button onClick={onClose}>Cancel</Button>
							</Stack>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	)
}

Units.authentication = {
	authorized: 'Admin'
}

export default Units

// import NextLink from 'next/link'
// import { useState } from 'react'
// import { useQuery, useMutation, useQueryClient, QueryClient, dehydrate } from '@tanstack/react-query'
// import api from 'instance'
// import { Badge, Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Skeleton, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
// import { ChevronLeft, ChevronRight, MoreHorizontal, Search } from 'react-feather'
// import { useForm } from 'react-hook-form'

// const Units = () => {
// 	const queryClient = useQueryClient()
// 	const { data, isLoading } = useQuery(['units'], () => api.getAll('/units'))
// 	console.log(data)
// 	const { isOpen, onOpen, onClose } = useDisclosure()
// 	const [searchQuery, setSearchQuery] = useState('')
// 	const [isLoadingButton, setIsLoadingButton] = useState(false)

// 	const {
// 		register,
// 		handleSubmit,
// 		setError,
// 		formState: { errors }
// 	} = useForm()

// 	const addUnitMutation = useMutation((data) => api.post('/units', data), {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries('units')
// 			setIsLoadingButton(false)
// 			onClose()
// 		},
// 		onError: (error) => {
// 			setError('unit', { type: 'server', message: error.response.data })
// 			setIsLoadingButton(false)
// 		}
// 	})

// 	const onSubmit = (data) => {
// 		setIsLoadingButton(true)
// 		addUnitMutation.mutate(data)
// 	}

// 	return (
// 		<>
// 			<Text as="h1" mt={6} fontSize="2xl" fontWeight="semibold" color="solid">
// 				Units
// 			</Text>

// 			<Box>
// 				<Flex bg="surface" position="sticky" top={16} justify="space-between" direction={{ base: 'column-reverse', md: 'row' }} gap={6} py={6} zIndex={1}>
// 					<Box>
// 						<InputGroup w={{ base: 'full', md: 256 }}>
// 							<InputLeftElement pointerEvents="none" children={<Search size={18} />} />
// 							<Input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
// 						</InputGroup>
// 					</Box>

// 					<Stack justify="end" direction="row" spacing={3}>
// 						<Box>
// 							<Select placeholder="Status">
// 								<option>Occupied</option>
// 								<option>Vacant</option>
// 							</Select>
// 						</Box>

// 						<Button colorScheme="brand" onClick={onOpen}>
// 							Add new
// 						</Button>
// 					</Stack>
// 				</Flex>

// 				<TableContainer>
// 					<Table variant="simple">
// 						<Thead>
// 							<Tr>
// 								<Th>Unit</Th>
// 								<Th>Company</Th>
// 								<Th>Tenant</Th>
// 								<Th textAlign="center">Monthly</Th>
// 								<Th textAlign="center">Balance</Th>
// 								<Th textAlign="center">Status</Th>
// 								<Th textAlign="center">Created</Th>
// 								<Th textAlign="right"></Th>
// 							</Tr>
// 						</Thead>

// 						<Tbody>
// 							{data &&
// 								data.map((data) => (
// 									<Tr key={data._id}>
// 										<Td>{data.unit}</Td>
// 										<Td>
// 											<Skeleton h={2} />
// 										</Td>
// 										<Td>
// 											<Skeleton h={2} />
// 										</Td>
// 										<Td textAlign="center">₱{data.monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Td>
// 										<Td textAlign="center">₱{data.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Td>
// 										<Td textAlign="center">
// 											<Badge colorScheme={data.status ? 'brand' : 'red'}>{data.status ? 'Occupied' : 'Vacant'}</Badge>
// 										</Td>
// 										<Td textAlign="center">{data.created.split(',')[0]}</Td>
// 										<Td textAlign="end">
// 											<NextLink href="/units/1" passHref>
// 												<IconButton as="a" size="sm" icon={<MoreHorizontal size={14} />} />
// 											</NextLink>
// 										</Td>
// 									</Tr>
// 								))}
// 						</Tbody>
// 					</Table>
// 				</TableContainer>

// 				<Divider />

// 				<Flex bg="surface" position="sticky" bottom={0} justify="space-between" py={6}>
// 					<Box>
// 						<Select>
// 							<option>10</option>
// 							<option>25</option>
// 							<option>50</option>
// 						</Select>
// 					</Box>

// 					<Stack direction="row" spacing={3}>
// 						<IconButton icon={<ChevronLeft size={18} />} />
// 						<IconButton icon={<ChevronRight size={18} />} />
// 					</Stack>
// 				</Flex>
// 			</Box>

// 			<Modal isOpen={isOpen} onClose={onClose}>
// 				<ModalOverlay />

// 				<ModalContent>
// 					<form onSubmit={handleSubmit(onSubmit)}>
// 						<ModalHeader>Add new unit</ModalHeader>

// 						<ModalBody>
// 							<Stack spacing={3}>
// 								<FormControl isInvalid={errors.unit}>
// 									<FormLabel>Unit</FormLabel>

// 									<InputGroup>
// 										<InputLeftElement pointerEvents="none" children="#" />
// 										<Input type="number" placeholder="000" {...register('unit', { required: 'Unit number is required.' })} />
// 									</InputGroup>

// 									<FormErrorMessage>{errors.unit?.message}</FormErrorMessage>
// 								</FormControl>

// 								<FormControl isInvalid={errors.monthly}>
// 									<FormLabel>Monthly</FormLabel>

// 									<InputGroup>
// 										<InputLeftElement pointerEvents="none" children="₱" />
// 										<Input type="number" placeholder="0.00" {...register('monthly', { required: 'Monthly is required.' })} />
// 									</InputGroup>

// 									<FormErrorMessage>{errors.monthly?.message}</FormErrorMessage>
// 								</FormControl>
// 							</Stack>
// 						</ModalBody>

// 						<ModalFooter>
// 							<Stack direction="row" spacing={3}>
// 								<Button type="submit" colorScheme="brand" isLoading={isLoadingButton}>
// 									Submit
// 								</Button>

// 								<Button onClick={onClose}>Cancel</Button>
// 							</Stack>
// 						</ModalFooter>
// 					</form>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	)
// }

// Units.authentication = {
// 	authorized: 'Admin'
// }

// export async function getStaticProps() {
// 	const queryClient = new QueryClient()

// 	await queryClient.prefetchQuery(['units'], () => api.getAll('/units'))

// 	return {
// 		props: {
// 			dehydratedState: dehydrate(queryClient)
// 		}
// 	}
// }

// export default Units
