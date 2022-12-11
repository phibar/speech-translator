import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Dictaphone from './components/dictaphone';
import { SpeechSelect } from './components/speech-select';
import { allLanguages } from './components/language/languages';
import { Language } from './types/language';
import { useTranslate } from './hooks/use-translate'
import { OppositeView } from './components/opposite-view/opposite-view';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {



  // var foo = allLanguages.find((language) => language.code.toString() === 'de-DE')
  // const [selectedLanguage, setSelectedLanguage] = useState<Language>(foo || allLanguages[0])

  // const { loading, error, translatedText } = useTranslate("Simple React Typescript Tailwind Sample", "en", selectedLanguage.code.toString().split("-")[0])



  // const utterThis = useMemo(() => {
  //   const utter = new SpeechSynthesisUtterance(translatedText)
  //   return utter;
  // }, [translatedText]);

  // utterThis.lang = selectedLanguage.code.toString();
  // utterThis.rate = 1;

  // useEffect(() => {
  //   // window.speechSynthesis.speak(utterThis);
  // }, [utterThis])

  return (
    <Provider store={store}>
      <OppositeView />)
    </Provider>

    // return (
    //   <>
    //     <h1 className="text-3xl font-bold underline text-red-600">
    //       {translatedText}
    //       {loading && <span>Loading...</span>}
    //     </h1>
    //     <img src={`https://countryflagsapi.com/svg/${selectedLanguage.code.toString().split("-")[1]}`} alt={selectedLanguage.code} />
    //     {error && <span>{error}</span>}

    //     {selectedLanguage.code}
    //     <SpeechSelect all={allLanguages} selected={selectedLanguage} selectLanguage={setSelectedLanguage} />
    //     <Dictaphone languageCode={selectedLanguage.code} />
    //   </>

  );
}

export default App;

