const Badge = {
	baseStyle: {
		borderRadius: '2xl',
		fontWeight: 'medium',
		textTransform: 'normal'
	},
	variants: {
		solid: (props) => ({
			bg: `${props.colorScheme}.500`,
			color: 'white',
			_dark: {
				bg: `${props.colorScheme}.300`,
				color: 'gray.800'
			}
		})
	},
	sizes: {
		xs: {
			px: 2
		},
		sm: {
			px: 2.5,
			py: 0.5
		},
		md: {
			px: 2.5,
			py: 1
		}
	},
	defaultProps: {
		size: 'xs',
		variant: 'solid'
	}
}

export default Badge
