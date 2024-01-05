import React from "react";
import { useTranslation } from 'react-i18next';  // Import useTranslation hook
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import Icon from "../../images/profile.png";

const AbouteMe = () => {
  const { t } = useTranslation();  // Use useTranslation hook to get the t function for translations

  return (
    <AnimatedSection Icon={Icon} sectionName={t('aboutMe.title')}>
      <div className=" lg:flex  justify-between lg:gap-10 pt-6   h-5/6 ">
        <div className=" lg:w-3/5  text-start ">
          <h1 className="text-lg ">{t('aboutMe.fullStackDeveloper')}</h1>
          {/* ... rest of the component */}
          <p className="text-gray-500 text-[18px]">
            <span className="text-gray-300">{t('aboutMe.greetings')}</span> {t('aboutMe.specializingIn')}{' '}
            <span className="text-gray-300">{t('aboutMe.technologies')}</span>. {t('aboutMe.passionForCrafting')}{' '}
            {t('aboutMe.focusOnCreating')}{' '}
            <span className="text-gray-300">{t('aboutMe.embracingApproach')}</span>{' '}
            {t('aboutMe.letsCollaborate')} {t('aboutMe.dynamicReality')}
          </p>
        </div>
        {/* ... rest of the component */}
      </div>
    </AnimatedSection>
  );
};

export default AbouteMe;
