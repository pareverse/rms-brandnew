import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Avatar, Box, chakra, Flex, Stack, Text } from '@chakra-ui/react'
import { Archive, ChevronRight, CreditCard, Edit2, Grid, HelpCircle, MessageSquare, PieChart, Settings, Star, Users } from 'react-feather'

const Sidebar = () => {
	const router = useRouter()
	const { data: session } = useSession()

	return (
		<chakra.aside bg="gray.900" position="fixed" left={0} h="100vh" w={256}>
			<Flex align="center" px={6} h={16}>
				<Text fontWeight="semibold" color="white">
					TSVJ CENTER.
				</Text>
			</Flex>

			<Box overflowY="auto" p={3} h="calc(100vh - 160px)">
				<NextLink href="/dashboard" passHref>
					<Flex as="a" bg={router.pathname.includes('dashboard') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('dashboard') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<PieChart size={16} />
							<Text fontSize="sm">Dashboard</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/messages" passHref>
					<Flex as="a" bg={router.pathname.includes('messages') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('messages') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<MessageSquare size={16} />
							<Text fontSize="sm">Messages</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/blogs" passHref>
					<Flex as="a" bg={router.pathname.includes('blogs') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('blogs') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<Edit2 size={16} />
							<Text fontSize="sm">Blogs</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/units" passHref>
					<Flex as="a" bg={router.pathname.includes('units') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('units') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<Grid size={16} />
							<Text fontSize="sm">Units</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/tenants" passHref>
					<Flex as="a" bg={router.pathname.includes('tenants') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('tenants') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<Users size={16} />
							<Text fontSize="sm">Tenants</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/payments" passHref>
					<Flex as="a" bg={router.pathname.includes('payments') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('payments') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<CreditCard size={16} />
							<Text fontSize="sm">Payments</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/accounts" passHref>
					<Flex as="a" bg={router.pathname.includes('accounts') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('accounts') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<Star size={16} />
							<Text fontSize="sm">Accounts</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/archive" passHref>
					<Flex as="a" bg={router.pathname.includes('archive') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('archive') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<Archive size={16} />
							<Text fontSize="sm">Archive</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/settings" passHref>
					<Flex as="a" bg={router.pathname.includes('settings') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('settings') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<Settings size={16} />
							<Text fontSize="sm">Settings</Text>
						</Stack>
					</Flex>
				</NextLink>

				<NextLink href="/support" passHref>
					<Flex as="a" bg={router.pathname.includes('support') ? 'gray.800' : 'transparent'} justify="space-between" align="center" borderRadius="md" px={3} h="45px" color={router.pathname.includes('support') ? 'white' : '#A0AEC0'} transition=".4s" _hover={{ color: 'white' }}>
						<Stack align="center" direction="row">
							<HelpCircle size={16} />
							<Text fontSize="sm">Support</Text>
						</Stack>
					</Flex>
				</NextLink>
			</Box>

			<Box p={6}>
				<NextLink href="/profile" passHref>
					<Flex as="a" bg="#2d374850" justify="space-between" align="center" borderRadius="md" p={3} color="white" transition=".4s" _hover={{ bg: '#2d374875' }}>
						<Stack direction="row" align="center" spacing={3}>
							<Avatar size="xs" name={session.user.name} src={session.user.image} />
							<Text fontSize="xs" fontWeight="medium" noOfLines={1}>
								{session.user.name}
							</Text>
						</Stack>
						<ChevronRight size={16} />
					</Flex>
				</NextLink>
			</Box>
		</chakra.aside>
	)
}

export default Sidebar
