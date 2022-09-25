import { cssVar } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')
const $arrowShadowColor = cssVar('popper-arrow-shadow-color')

const Popover = {
	baseStyle: {
		content: {
			[$arrowBg.variable]: 'white',
			[$arrowShadowColor.variable]: '#E2E8F0',
			bg: 'surface',
			borderColor: 'border',
			shadow: 'xl',
			_dark: {
				[$arrowBg.variable]: '#1A202C',
				[$arrowShadowColor.variable]: '#2D3748',
				shadow: 'dark-xl'
			}
		},
		header: {
			borderBottom: 'none',
			py: 3,
			fontWeight: 'medium'
		},
		body: {
			py: 3
		},
		footer: {
			borderTop: 'none',
			py: 3
		}
	}
}

export default Popover
