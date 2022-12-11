import { Combobox } from "@headlessui/react";
import { FunctionComponent, useState } from "react";
import { Language } from "../types/language";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames"
import { allLanguages } from "./language/languages";
import { useTranslate } from "../hooks/use-translate";

export interface SpeechSelectProps {
    selected: Language
    all: Language[]
    selectLanguage: (language: Language) => void
}

export const SpeechSelect: FunctionComponent<SpeechSelectProps> = ({ selected, all = allLanguages, selectLanguage }) => {
    const { translatedText, loading } = useTranslate('Select a language', 'en', selected.code.split("-")[0])
    const [query, setQuery] = useState('')

    const filteredLanguages =
        query === ''
            ? all
            : all.filter((language) => {
                return language.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div>
            <Combobox value={selected} onChange={selectLanguage}>
                <Combobox.Label>   {translatedText} {loading && <span>Loading...</span>}</Combobox.Label>
                <div className="relative inline">
                    <Combobox.Input className="p-1 mt-1" onChange={(event) => setQuery(event.target.value)} displayValue={(item: Language) => item?.name} />
                    <Combobox.Button>
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Combobox.Button>
                    </Combobox.Button>
                </div>

                <Combobox.Options className="absolute z-10 mt-1 ml-3 max-h-36 p-1 w-1/2 overflow-scroll rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredLanguages.map((language) => (
                        <Combobox.Option key={language.code} value={language}>
                            {({ active, selected }) => (
                                <li className={classNames("flex max-w-xs items-center ", { "bg-slate-300": active })}>
                                    <img className="h-5 w-5 mr-2" src={`https://countryflagsapi.com/svg/${language.code.toString().split("-")[1]}`} alt={language.code} />
                                    <span className="flex-1">{language.name}</span>
                                    {selected && <CheckIcon className="h-4 w-4" />}
                                </li>)}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div >
    )
}