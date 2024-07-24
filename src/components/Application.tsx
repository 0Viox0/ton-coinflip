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
import { useTonWallet } from "@tonconnect/ui-react";
import FunctionalityButtons from "./functionality/FunctionalityButtons";

interface ApplicationContextProps {
    changeLanguage: (newLanguageCode: string) => void;
    t: TFunction<"translation", undefined>;
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    currentLanguageCode: string;
    isWalletConnected: boolean;
}

export const ApplicationContext = createContext<ApplicationContextProps | null>(
    null,
);

const Application = () => {
    const { i18n, t } = useTranslation();
    const [currentLanguageCode, setCurrentLanguageCode] =
        useState<string>("En");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const wallet = useTonWallet();
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(
        wallet !== null,
    );

    useEffect(() => {
        setIsWalletConnected(wallet !== null);
    }, [wallet]);

    const changeLanguage = (newLanguageCode: string): void => {
        setCurrentLanguageCode(
            newLanguageCode[0].toUpperCase() + newLanguageCode[1],
        );
        i18n.changeLanguage(newLanguageCode);
    };

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
                isWalletConnected,
            }}
        >
            <div>
                <TopTextWithAnimation />
                <DarkModeSwitchButton />
                <LanguageSelect />
                <TonLogo />
                <TonConnectButtonWrapper />
                <MoreInfo />
                <FunctionalityButtons />
            </div>
        </ApplicationContext.Provider>
    );
};

export default Application;
