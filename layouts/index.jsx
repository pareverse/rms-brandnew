import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { chakra, Container } from '@chakra-ui/react'
import Loading from 'components/loading'
import Unauthorized from 'components/unauthorized'
import Header from './header'
import Sidebar from './sidebar'

const AppLayout = ({ children, authentication }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	const router = useRouter()
	const { data: session, status } = useSession()

	if (!mounted || status === 'loading') {
		return <Loading />
	} else {
		if (!session && authentication) {
			router.push('/')
			return <Loading />
		}

		if (session && session.user.role === 'Admin' && router.pathname === '/') {
			router.push('/dashboard')
			return <Loading />
		}

		if (session && authentication && authentication.authorized) {
			if (session.user.role !== authentication.authorized) {
				return <Unauthorized />
			}
		}

		if (session && session.user.role === 'Admin') {
			return (
				<>
					<Sidebar />

					<chakra.div ml={256} w="calc(100% - 256px)">
						<Header />

						<chakra.main>
							<Container>{children}</Container>
						</chakra.main>
					</chakra.div>
				</>
			)
		}

		return (
			<>
				<Header />

				<chakra.main>
					<Container>{children}</Container>
				</chakra.main>
			</>
		)
	}
}

export default AppLayout
