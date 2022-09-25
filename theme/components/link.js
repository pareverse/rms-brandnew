const Link = {
	baseStyle: (props) => ({
		fontSize: 'sm',
		fontWeight: 'medium',
		transition: '.4s',
		_hover: {
			color: `${props.colorScheme}.500`,
			textDecoration: 'none'
		},
		_dark: {
			_hover: {
				color: `${props.colorScheme}.300`
			}
		}
	}),
	defaultProps: {
		colorScheme: 'brand'
	}
}

export default Link
