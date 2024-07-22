import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import TopTextWithAnimation from "./landing/TopTextWithAnimation";
import { TFunction } from "i18next";
import DarkModeSwitchButton from "./landing/DarkModeSwitchButton";
import LanguageSelect from "./landing/LanguageSelect";
import TonLogo from "./landing/TonLogo";
import TonConnectButtonWrapper from "./landing/TonConnectButtonWrapper";
import MoreInfo from "./landing/MoreInfo";

interface ApplicationContextProps {
    changeLanguage: (newLanguageCode: string) => void;
    t: TFunction<"translation", undefined>;
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    currentLanguageCode: string;
}

export const ApplicationContext = createContext<ApplicationContextProps | null>(
    null,
);

const Application = () => {
    const { i18n, t } = useTranslation();
    const [currentLanguageCode, setCurrentLanguageCode] =
        useState<string>("En");

    const changeLanguage = (newLanguageCode: string): void => {
        setCurrentLanguageCode(
            newLanguageCode[0].toUpperCase() + newLanguageCode[1],
        );
        i18n.changeLanguage(newLanguageCode);
    };

    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    useEffect(() => {
        const bodyElement = document.getElementsByTagName("body")[0];

        if (isDarkMode) {
            bodyElement.classList.add("dark");
            bodyElement.classList.remove("light");
        } else {
            bodyElement.classList.add("light");
            bodyElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <ApplicationContext.Provider
            value={{
                changeLanguage,
                t,
                isDarkMode,
                setIsDarkMode,
                currentLanguageCode,
            }}
        >
            <div>
                <TopTextWithAnimation />
                <DarkModeSwitchButton />
                <LanguageSelect />
                <TonLogo />
                <TonConnectButtonWrapper />
                <MoreInfo />
            </div>
        </ApplicationContext.Provider>
    );
};

export default Application;
