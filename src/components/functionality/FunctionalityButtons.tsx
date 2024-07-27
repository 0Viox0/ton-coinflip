import { useContext } from "react";
import { ApplicationContext } from "../Application";
import SendTonButton from "./SendTonButton";
import {
    contract_0dot5_TON_address,
    contract_10_TON_address,
    contract_1_TON_address,
    contract_2dot5_TON_address,
    contract_5_TON_address,
} from "../../constants";

const FunctionalityButtons = () => {
    const { isWalletConnected, t } = useContext(ApplicationContext)!;

    return (
        <div className={`${!isWalletConnected && "hidden"}`}>
            <div className="fixed left-[7%] bottom-[40%]">
                <SendTonButton
                    text={t("send0.5Ton")}
                    address={contract_0dot5_TON_address}
                    amountToSend={0.5}
                />
            </div>
            <div className="fixed left-[16.25%] bottom-[24%]">
                <SendTonButton
                    text={t("send2.5Ton")}
                    address={contract_2dot5_TON_address}
                    amountToSend={2.5}
                />
            </div>
            <div className="fixed left-[50%] translate-x-[-50%] bottom-[12.8%]">
                <SendTonButton
                    text={t("send10Ton")}
                    address={contract_10_TON_address}
                    amountToSend={10}
                />
            </div>
            <div className="fixed right-[16.25%] bottom-[24%]">
                <SendTonButton
                    text={t("send5Ton")}
                    address={contract_5_TON_address}
                    amountToSend={5}
                />
            </div>
            <div className="fixed right-[7%] bottom-[40%]">
                <SendTonButton
                    text={t("send1Ton")}
                    address={contract_1_TON_address}
                    amountToSend={1}
                />
            </div>
        </div>
    );
};

export default FunctionalityButtons;
