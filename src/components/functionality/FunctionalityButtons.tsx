import { useContext } from "react";
import { ApplicationContext } from "../Application";
import SendTonButton from "./SendTonButton";

const FunctionalityButtons = () => {
    const { isWalletConnected, t } = useContext(ApplicationContext)!;

    return (
        <div className={`${!isWalletConnected && "hidden"}`}>
            <div className="fixed left-[15%] top-[50%]">
                <SendTonButton text={t("send0.5Ton")} />
            </div>
        </div>
    );
};

export default FunctionalityButtons;
