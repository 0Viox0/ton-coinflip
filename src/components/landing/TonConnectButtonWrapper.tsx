import {
    Locales,
    TonConnectButton,
    useTonConnectUI,
} from "@tonconnect/ui-react";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../Application";

const TonConnectButtonWrapper = () => {
    const [_, setOptions] = useTonConnectUI();
    const { currentLanguageCode, isWalletConnected } =
        useContext(ApplicationContext)!;

    useEffect(() => {
        const languageCodeFormatted =
            currentLanguageCode[0].toLowerCase() + currentLanguageCode[1];

        setOptions({ language: languageCodeFormatted as Locales });
    }, [currentLanguageCode]);

    return (
        <div
            className={`fixed 
                        ${
                            isWalletConnected
                                ? `sm:bottom-[12%] sm:left-[7%] sm:top-auto bottom-auto top-[28px] left-[19%] 
                                   sm:scale-100 scale-[0.7]`
                                : "bottom-[15%] left-1/2 -translate-x-1/2"
                        }`}
        >
            <TonConnectButton />
        </div>
    );
};

export default TonConnectButtonWrapper;
