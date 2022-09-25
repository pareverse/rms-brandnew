import { cssVar } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')

const Tooltip = {
	baseStyle: {
		[$arrowBg.variable]: '#1A202C',
		bg: 'surface-inverted',
		shadow: 'none',
		py: 1,
		color: 'default-inverted',
		_dark: {
			[$arrowBg.variable]: 'white'
		}
	}
}

export default Tooltip
