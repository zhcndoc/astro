import { getCollection } from 'astro:content';
import { isEnglishEntry, isKoreanEntry, isRecipeEntry, isTutorialEntry } from './content/config';

export const allPages = await getCollection('docs', (entry) => {
	if (true) {
		// Build for two languages only to speed up Astro's smoke tests
		return isEnglishEntry(entry) || isKoreanEntry(entry);
	} else {
		return true;
	}
});
export const tutorialPages = allPages.filter(isTutorialEntry);
export const recipePages = allPages.filter(isRecipeEntry);
export const englishPages = allPages.filter(isEnglishEntry);
