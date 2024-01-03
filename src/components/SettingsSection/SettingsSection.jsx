import React from 'react'
import { useTranslation } from 'react-i18next';
const SettingsSection = ({setColor}) => {
    const { i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
  return (
    <div className={`bg-white text-black h-32 p-2  flex flex-col gap-1 z-30`}>
                <h2>choose color</h2>
                <div className="flex gap-3">
                  <div className="bg-green-300 h-4 w-4" onClick={()=>setColor("bg-green-300")}></div>
                  <div className="bg-yellow-300 h-4 w-4" onClick={()=>setColor("bg-yellow-300")}></div>
                  <div className="bg-red-300 h-4 w-4" onClick={()=>setColor("bg-red-300")}></div>
                  <div className="bg-blue-300 h-4 w-4" onClick={()=>setColor("bg-blue-300")}></div>
                </div>
                <div>
                  <h4>choose language</h4>
                  <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                        <option value="en">English</option>
                        <option value="no">Norwegian</option>
                        <option value="sv">Swedish</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
    </div>
  )
}

export default SettingsSection