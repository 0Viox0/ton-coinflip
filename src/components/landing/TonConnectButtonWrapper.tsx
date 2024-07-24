import {
    Locales,
    TonConnectButton,
    useTonConnectUI,
} from "@tonconnect/ui-react";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../Application";

const TonConnectButtonWrapper = () => {
    const [_, setOptions] = useTonConnectUI();
    const { currentLanguageCode } = useContext(ApplicationContext)!;

    useEffect(() => {
        const languageCodeFormatted =
            currentLanguageCode[0].toLowerCase() + currentLanguageCode[1];

        setOptions({ language: languageCodeFormatted as Locales });
    }, [currentLanguageCode]);

    return (
        <div className="fixed bottom-[15%] left-1/2 -translate-x-1/2">
            <TonConnectButton />
        </div>
    );
};

export default TonConnectButtonWrapper;
