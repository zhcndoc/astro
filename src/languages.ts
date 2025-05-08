const allLanguages = {
	en: 'English',
	de: 'Deutsch',
	'pt-br': 'Português do Brasil',
	es: 'Español',
	'zh-cn': '简体中文',
	'zh-tw': '正體中文',
	fr: 'Français',
	hi: 'हिन्दी',
	ar: 'العربية',
	ja: '日本語',
	ko: '한국어',
	pl: 'Polski',
	ru: 'Русский',
	it: 'Italiano',
} as const;

// Build for two languages only to speed up Astro's smoke tests
const twoLanguages = {
	en: 'English',
	'zh-cn': '简体中文',
} as const;

/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
// eslint-disable-next-line no-constant-condition
export default true ? twoLanguages : allLanguages;

export const rtlLanguages = new Set(['ar']);
