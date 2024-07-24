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
                                ? "bottom-[12%] left-[7%]"
                                : "bottom-[15%] left-1/2 -translate-x-1/2"
                        }`}
        >
            <TonConnectButton />
        </div>
    );
};

export default TonConnectButtonWrapper;
