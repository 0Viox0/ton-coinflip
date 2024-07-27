import { useContext } from "react";
import { ApplicationContext } from "../Application";
import SendTonButton from "./SendTonButton";

const FunctionalityButtons = () => {
    const { isWalletConnected, t } = useContext(ApplicationContext)!;

    const tonSmartContractAddress =
        "EQDPipEQwturrTb9Ij8trcxdvFqUd0RhrIdBGFfphqK3f8mn";

    return (
        <div className={`${!isWalletConnected && "hidden"}`}>
            <div className="fixed left-[15%] top-[50%]">
                <SendTonButton
                    text={t("send0.5Ton")}
                    address={tonSmartContractAddress}
                    amountToSend={0.5}
                />
            </div>
        </div>
    );
};

export default FunctionalityButtons;
