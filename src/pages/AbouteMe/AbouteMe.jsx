import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import Icon from "../../images/profile.png";

const AbouteMe = () => {
  const { t } = useTranslation(); // Use useTranslation hook to get the t function for translations

  return (
    <AnimatedSection Icon={Icon} sectionName={t("aboutMe.title")}>
      <div className="lg:flex justify-between lg:gap-10 pt-6 h-5/6">
        <div className="lg:w-3/5 text-start">
          <h1 className="text-lg">{t("aboutMe.fullStackDeveloper")}</h1>
          <div className="pt-2">
            <p className="text-gray-500 text-[18px]">
              <span className="text-gray-300">{t("aboutMe.greetings")}</span>{" "}
              {t("aboutMe.specializingIn")}{" "}
              <span className="text-gray-300">{t("aboutMe.technologies")}</span>
              . {t("aboutMe.passionForCrafting")}{" "}
              {t("aboutMe.replicatingDesigns")}. {t("aboutMe.focusOnCreating")}{" "}
              {t("aboutMe.embracingApproach")},
              <span className="text-gray-300">
                {" "}
                {t("aboutMe.letsCollaborate")}
              </span>{" "}
              {t("aboutMe.dynamicReality")}
            </p>
          </div>
        </div>
        <div className="pt-6 lg:pt-0 lg:w-2/5 text-start">
          <h1 className="text-lg">{t("personalInfo.title")}</h1>
          <div className="pt-2">
            <div className="flex gap-2">
              <h1>{t("personalInfo.name")}:</h1>
              <h3 className="text-gray-400">{t("personalInfo.nameValue")}</h3>
            </div>
            <div className="flex gap-2">
              <h1>{t("personalInfo.age")}:</h1>
              <h3 className="text-gray-400">{t("personalInfo.ageValue")}</h3>
            </div>
            <div className="flex gap-2">
              <h1>{t("personalInfo.residence")}:</h1>
              <h3 className="text-gray-400">
                {t("personalInfo.residenceValue")}
              </h3>
            </div>
          
            <div className="flex gap-2">
              <h1>{t("personalInfo.email")}:</h1>
              <h3 className="text-gray-400">{t("personalInfo.emailValue")}</h3>
            </div>
            <div className="flex gap-2">
              <h1>{t("personalInfo.phone")}:</h1>
              <h3 className="text-gray-400">{t("personalInfo.phoneValue")}</h3>
            </div>
            <div className="flex gap-2">
              <h1>{t("personalInfo.freelance")}:</h1>
              <h3 className="text-gray-400">
                {t("personalInfo.freelanceValue")}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AbouteMe;
