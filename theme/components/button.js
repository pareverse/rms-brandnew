const Button = {
	baseStyle: {
		overflow: 'hidden',
		fontWeight: 'medium',
		transition: '.4s'
	},
	variants: {
		solid: (props) => ({
			bg: props.colorScheme === 'gray' ? 'gray.50' : `${props.colorScheme}.500`,
			color: props.colorScheme === 'gray' ? 'gray.700' : 'white',
			_hover: {
				bg: props.colorScheme === 'gray' ? 'gray.100' : `${props.colorScheme}.600`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? 'gray.50' : `${props.colorScheme}.500`
			},
			_dark: {
				color: props.colorScheme === 'gray' ? 'gray.200' : 'gray.800',
				bg: props.colorScheme === 'gray' ? '#2D374850' : `${props.colorScheme}.300`,
				_hover: {
					bg: props.colorScheme === 'gray' ? '#2D374875' : `${props.colorScheme}.400`
				},
				_active: {
					bg: props.colorScheme === 'gray' ? '#2D374850' : `${props.colorScheme}.300`
				}
			}
		}),
		outline: (props) => ({
			borderColor: props.colorScheme === 'gray' ? 'border' : `${props.colorScheme}.500`,
			color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.500`,
			_hover: {
				bg: 'gray.50'
			},
			_active: {
				bg: 'transparent'
			},
			_dark: {
				borderColor: props.colorScheme === 'gray' ? 'border' : `${props.colorScheme}.300`,
				color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.300`,
				_hover: {
					bg: '#2D374850'
				},
				_active: {
					bg: 'transparent'
				}
			}
		}),
		ghost: (props) => ({
			color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.500`,
			_hover: {
				bg: 'gray.50'
			},
			_active: {
				bg: 'transparent'
			},
			_dark: {
				color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.300`,
				_hover: {
					bg: '#2D374850'
				},
				_active: {
					bg: 'transparent'
				}
			}
		})
	},
	sizes: {
		md: {
			fontSize: 'sm'
		},
		lg: {
			fontSize: 'md'
		},
		xl: {
			fontSize: 'lg'
		}
	},
	defaultProps: {
		colorScheme: 'gray'
	}
}

export default Button
