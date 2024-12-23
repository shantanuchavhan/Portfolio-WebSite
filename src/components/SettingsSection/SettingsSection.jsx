import React from "react";
import { useTranslation } from "react-i18next";
const SettingsSection = ({ setColor }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className={`bg-white text-black h-32 p-2  flex flex-col gap-1 z-30`}>
      <h2>{t("choose color")}</h2>
      <div className="flex gap-3">
        <div
          className="bg-green-300 h-4 w-4"
          onClick={() => setColor("green-300")}
        ></div>
        <div
          className="bg-yellow-300 h-4 w-4"
          onClick={() => setColor("yellow-300")}
        ></div>
        <div
          className="bg-red-300 h-4 w-4"
          onClick={() => setColor("red-300")}
        ></div>
        <div
          className="bg-blue-300 h-4 w-4"
          onClick={() => setColor("blue-300")}
        ></div>
      </div>
      <h4>{t("choose language")}</h4>
      <div>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="mr">Marathi</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsSection;
