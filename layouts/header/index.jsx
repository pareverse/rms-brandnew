import { useSession, signIn, signOut } from 'next-auth/react'
import { Avatar, Button, chakra, Container, Flex, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Bell, Lock, LogOut, Menu as IconMenu, Moon, Settings, Sun, User } from 'react-feather'
import Google from 'components/google'

const Header = () => {
	const { data: session } = useSession()
	const { toggleColorMode } = useColorMode()
	const colorModeIcon = useColorModeValue(<Moon size={18} />, <Sun size={18} />)

	return (
		<chakra.header bg="surface" position="sticky" top={0} zIndex={99}>
			<Container>
				<Flex align="center" gap={6} h={16}>
					{(!session || (session && session.user.role === 'Tenant')) && (
						<>
							<Flex justify="start" flex={1}>
								<Text fontWeight="semibold" color="solid">
									TSVJ CENTER.
								</Text>
							</Flex>

							<Flex justify="center" flex={3}>
								<Stack direction="row" spacing={10}>
									<Link>Home</Link>
									<Link>Blogs</Link>
									<Link>Services</Link>
									<Link>About</Link>
									<Link>Contact</Link>
								</Stack>
							</Flex>
						</>
					)}

					{session && session.user.role === 'Admin' && (
						<Flex>
							<Stack direction="row" spacing={6}>
								<Link>Dashboard</Link>
								<Link>Accounts</Link>
								<Link>Settings</Link>
							</Stack>
						</Flex>
					)}

					<Flex justify="end" flex={1} gap={3}>
						<Stack direction="row" spacing={1}>
							{session && <IconButton variant="ghost" icon={<Bell size={18} />} />}
							<IconButton variant="ghost" icon={colorModeIcon} onClick={toggleColorMode} />
						</Stack>

						{session ? (
							<Menu closeOnSelect={false}>
								<MenuButton>
									<Avatar name={session.user.name} src={session.user.image} />
								</MenuButton>

								<MenuList>
									<MenuItem icon={<User size={16} />}>Profile</MenuItem>
									<MenuItem icon={<Settings size={16} />}>Settings</MenuItem>
									<MenuDivider />
									<MenuItem icon={<Lock size={16} />}>Lock</MenuItem>
									<MenuItem icon={<LogOut size={16} />} onClick={() => signOut()}>
										Sign out
									</MenuItem>
								</MenuList>
							</Menu>
						) : (
							<Button variant="outline" leftIcon={<Google />} onClick={() => signIn('google')}>
								Sign in
							</Button>
						)}
					</Flex>
				</Flex>
			</Container>
		</chakra.header>
	)
}

export default Header
