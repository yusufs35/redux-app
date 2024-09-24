import { store } from "../store";
import { setLang } from "../store/slices/locale-slice";

let langFile = (await import("./langs/en.json")).default;

export const langs = [
	{ code: "en", title: "English", countryCode: "gb" },
	{ code: "es", title: "Español", countryCode: "es" },
	{ code: "fr", title: "Français", countryCode: "fr" },
	{ code: "de", title: "Deutsch", countryCode: "de" },
	{ code: "it", title: "Italiano", countryCode: "it" },
	{ code: "pt", title: "Português", countryCode: "pt" },
	{ code: "tr", title: "Türkçe", countryCode: "tr" },
];

export const setCurrentLang = async (lang) => {
	langFile = (await import(`./langs/${lang.code}.json`)).default;

	store.dispatch(setLang(lang));
};


export const $t = (key) => {
    return langFile[key];
}