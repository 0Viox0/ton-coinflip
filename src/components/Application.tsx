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

interface ApplicationContextProps {
    changeLanguage: (newLanguageCode: string) => void;
    t: TFunction<"translation", undefined>;
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ApplicationContext = createContext<ApplicationContextProps | null>(
    null,
);

const Application = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (newLanguageCode: string): void => {
        i18n.changeLanguage(newLanguageCode);
    };

    useEffect(() => {
        changeLanguage("es");
    }, []);

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
            value={{ changeLanguage, t, isDarkMode, setIsDarkMode }}
        >
            <div>
                <TopTextWithAnimation />
                <DarkModeSwitchButton />
            </div>
        </ApplicationContext.Provider>
    );
};

export default Application;
