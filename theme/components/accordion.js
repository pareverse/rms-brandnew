const Accordion = {
	baseStyle: {
		container: {
			borderColor: 'border'
		},
		button: {
			px: 6,
			py: 0,
			h: 12,
			fontSize: 'sm',
			fontWeight: 'medium',
			_hover: {
				bg: 'gray.50'
			},
			_dark: {
				_hover: {
					bg: '#2D374850'
				}
			}
		},
		panel: {
			px: 6,
			py: 6
		}
	}
}

export default Accordion
