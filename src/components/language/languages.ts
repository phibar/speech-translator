import { Language } from "../../types/language";
import { LanguageGroup } from "../../types/language-group";
import { Languages } from "../../types/languages";



const langs = [
    ['Azərbaycanca', ['az-AZ']],
    ['Català', ['ca-ES']],
    ['Čeština', ['cs-CZ']],
    ['Dansk', ['da-DK']],
    ['Deutsch', ['de-DE']],
    ['English', ['en-AU', 'Australia'],
        ['en-CA', 'Canada'],
        ['en-IN', 'India'],
        ['en-KE', 'Kenya'],
        ['en-TZ', 'Tanzania'],
        ['en-GH', 'Ghana'],
        ['en-NZ', 'New Zealand'],
        ['en-NG', 'Nigeria'],
        ['en-ZA', 'South Africa'],
        ['en-PH', 'Philippines'],
        ['en-GB', 'United Kingdom'],
        ['en-US', 'United States']],
    ['Español', ['es-AR', 'Argentina'],
        ['es-BO', 'Bolivia'],
        ['es-CL', 'Chile'],
        ['es-CO', 'Colombia'],
        ['es-CR', 'Costa Rica'],
        ['es-EC', 'Ecuador'],
        ['es-SV', 'El Salvador'],
        ['es-ES', 'España'],
        ['es-US', 'Estados Unidos'],
        ['es-GT', 'Guatemala'],
        ['es-HN', 'Honduras'],
        ['es-MX', 'México'],
        ['es-NI', 'Nicaragua'],
        ['es-PA', 'Panamá'],
        ['es-PY', 'Paraguay'],
        ['es-PE', 'Perú'],
        ['es-PR', 'Puerto Rico'],
        ['es-DO', 'República Dominicana'],
        ['es-UY', 'Uruguay'],
        ['es-VE', 'Venezuela']],
    ['Français', ['fr-FR']],
    ['Italiano', ['it-IT', 'Italia'],
        ['it-CH', 'Svizzera']],
    ['Magyar', ['hu-HU']],
    ['Nederlands', ['nl-NL']],
    ['Polski', ['pl-PL']],
    ['Português', ['pt-BR', 'Brasil'],
        ['pt-PT', 'Portugal']],
    ['Slovenčina', ['sk-SK']],
    ['Suomi', ['fi-FI']],
    ['Svenska', ['sv-SE']],
    ['Türkçe', ['tr-TR']],
    ['Pусский', ['ru-RU']],
    ['Українська', ['uk-UA']],
    ['한국어', ['ko-KR']],
    ['हिन्दी', ['hi-IN']],
];

export const languages: Languages = langs.map((item) => {
    if (item.length === 2) return { name: item[0], code: item[1].toString() } as Language
    if (item.length > 2) return { name: item[0], languages: item.slice(1).map((subitem) => { return { name: subitem[1], code: subitem[0].toString() } as Language }) } as LanguageGroup
    console.error({ item });
    throw new Error("Invalid language item")
})

export const allLanguages: Language[] = languages.map(item => {
    if (item.hasOwnProperty("languages")) {
        return (item as LanguageGroup).languages.map(subitem => ({ name: `${item.name} ${subitem.name}`, code: subitem.code } as Language))
    }
    if (item.hasOwnProperty("code")) {
        return item as Language
    }
    throw new Error("Invalid language item")
}).flat()

