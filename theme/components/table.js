const Table = {
	baseStyle: {
		table: {
			whiteSpace: 'nowrap'
		},
		th: {
			fontWeight: 'medium',
			textTransform: 'normal',
			whiteSpace: 'nowrap'
		}
	},
	variants: {
		simple: {
			th: {
				bg: 'gray.50',
				borderBottom: 'none',
				py: 0,
				h: 12,
				color: 'default',
				_dark: {
					bg: '#2D374850'
				}
			},
			td: {
				borderBottom: 'none',
				py: 0,
				h: 12
			}
		},
		striped: {
			th: {
				bg: 'gray.50',
				borderBottom: 'none',
				py: 0,
				h: 12,
				color: 'default',
				_dark: {
					bg: '#2D374850'
				}
			},
			td: {
				borderBottom: 'none',
				py: 0,
				h: 12
			},
			tbody: {
				tr: {
					'&:nth-of-type(odd)': {
						td: {
							bg: 'surface'
						}
					},
					'&:nth-of-type(even)': {
						td: {
							bg: 'gray.50',
							_dark: {
								bg: '#2D374850'
							}
						}
					}
				}
			}
		}
	},
	sizes: {
		md: {
			th: {
				fontSize: 'sm',
				lineHeight: 'inherit'
			},
			td: {
				fontSize: 'sm',
				lineHeight: 'inherit'
			}
		}
	},
	defaultProps: {
		variant: 'striped'
	}
}

export default Table
