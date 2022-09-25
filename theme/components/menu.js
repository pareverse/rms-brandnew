const Menu = {
	baseStyle: {
		list: {
			bg: 'surface',
			borderColor: 'border',
			shadow: 'xl',
			_dark: {
				shadow: 'dark-xl'
			}
		},
		item: {
			fontSize: 'sm',
			_hover: {
				bg: 'gray.50'
			},
			_focus: {
				bg: 'transparent'
			},
			_active: {
				bg: 'transparent'
			},
			_dark: {
				_hover: {
					bg: '#2D374850'
				}
			}
		},
		divider: {
			opacity: 1,
			borderColor: 'border'
		}
	}
}

export default Menu
