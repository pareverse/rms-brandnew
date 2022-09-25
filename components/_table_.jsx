import { useState, useEffect } from 'react'
import { Box, Button, Divider, Flex, FormControl, FormLabel, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Skeleton, Stack, Table as ChakraTable, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { ChevronLeft, ChevronRight, Search, User } from 'react-feather'
import { useForm } from 'react-hook-form'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }]

const Table = () => {
	const [settings, dispatch] = useState({ min: 0, max: 0, limit: 10 })
	const { min, max, limit } = settings
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { register, watch } = useForm()

	const results = (data) => {
		return data.filter((data) => ['id'].some((key) => data[key].toString().toLowerCase().includes(watch('search'))))
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
								<Th>Head 1</Th>
								<Th>Head 2</Th>
								<Th>Head 3</Th>
								<Th>Head 4</Th>
								<Th>Head 5</Th>
							</Tr>
						</Thead>

						<Tbody>
							{results(data)
								.slice(min, max)
								.map((data) => (
									<Tr key={data.id}>
										<Td>{data.id}</Td>
										<Td>Data 2</Td>
										<Td>Data 3</Td>
										<Td>Data 4</Td>
										<Td>Data 5</Td>
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
						<IconButton icon={<ChevronRight size={18} />} onClick={() => dispatch({ ...settings, min: min + limit, max: max + limit })} disabled={results(data).length <= max} />
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

export default Table
