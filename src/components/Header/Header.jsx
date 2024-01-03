import React from "react";
import { useTranslation } from 'react-i18next';


const Header = ({ Icon, sectonName }) => {
  const { t,i18n } = useTranslation();
  console.log('Current Language:', i18n.language);
  console.log('sectonName:', sectonName);
  console.log('Translated:', t(sectonName));
  return (
    <div className="flex justify-between items-end  h-1/6 border-b border-dotted border-[#f8fee9] pt-10 lg:pt-6 py-2">
      <h1 className="text-[28px] lg:text-[34px] my-2 font-dancing-script ">
        {t(`${sectonName}`)}
      </h1>
      <div>
        <img
          className=" h-6 w-6 lg:h-8 lg:w-8 my-3 lg:my-4  "
          src={Icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
