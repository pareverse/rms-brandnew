const Select = {
	variants: {
		filled: {
			field: {
				bg: 'gray.50',
				_dark: {
					bg: '#2D374850'
				}
			}
		},
		outline: {
			field: {
				borderColor: 'border',
				_hover: {
					borderColor: 'border'
				},
				_dark: {
					borderColor: 'border'
				}
			}
		}
	},
	sizes: {
		sm: {
			field: {
				fontSize: 'xs',
				borderRadius: 'md'
			}
		},
		md: {
			field: {
				fontSize: 'sm'
			}
		}
	},
	defaultProps: {
		variant: 'filled'
	}
}

export default Select
