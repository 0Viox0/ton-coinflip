import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../Application";
import LoadingTransaction from "./button/LoadingTransaction";
import PlayerToPlayWith from "./button/PlayerToPlayWith";
import {
    SendTransactionRequest,
    useTonConnectUI,
    useTonWallet,
} from "@tonconnect/ui-react";
import { Address, beginCell, toNano } from "ton-core";
import { TonClient } from "ton";

async function fireGetterMethod() {
    // Create Client
    const client = new TonClient({
        endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
        apiKey: "***REMOVED***a",
    });

    // Call get method
    const result = await client.runMethod(
        Address.parse("EQDPipEQwturrTb9Ij8trcxdvFqUd0RhrIdBGFfphqK3f8mn"),
        "getStateOfGame",
    );

    return result.stack.readNumber();
}

const SendTonButton = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { isDarkMode } = useContext(ApplicationContext)!;
    const [isTransactionInProgress, setIsTransactionInProgress] =
        useState<boolean>(false);
    const [isAnimationGoing, setIsAnimationGoing] = useState<boolean>(false);
    const [isButtonGreen, setIsButtonGreen] = useState<boolean>(false);

    const [isUserAwaiting, setIsUserAwaiting] = useState<boolean>(false);

    const [tonConnectUI, _] = useTonConnectUI();

    const wallet = useTonWallet();

    console.log(wallet);

    const onClickHandler = () => {
        if (isAnimationGoing) return;

        setIsTransactionInProgress(true);
        setIsAnimationGoing(true);
        setIsButtonGreen(true);
        setIsHovered(false);

        const amoundToSend = 0.5;
        const tonSmartContractAddress =
            "EQDPipEQwturrTb9Ij8trcxdvFqUd0RhrIdBGFfphqK3f8mn";

        const body = beginCell()
            .storeUint(2, 32)
            .storeCoins(toNano(amoundToSend))
            .endCell();

        const transaction: SendTransactionRequest = {
            validUntil: Math.floor(Date.now() / 1000) + 360,
            messages: [
                {
                    address: Address.parse(tonSmartContractAddress).toString(),
                    amount: toNano(amoundToSend).toString(),
                    payload: body.toBoc().toString("base64"),
                },
            ],
        };

        tonConnectUI.sendTransaction(transaction).then(() => {
            setTimeout(() => {
                setIsTransactionInProgress(false);
                setIsAnimationGoing(false);
                setIsButtonGreen(false);

                fireGetterMethod().then((result) => {
                    if (result === 0) {
                        setIsUserAwaiting(false);
                    } else if (result === 1) {
                        setIsUserAwaiting(true);
                    }
                });
            }, 1000);
        });
    };

    useEffect(() => {
        fireGetterMethod().then((result) => {
            if (result === 0) {
                setIsUserAwaiting(false);
            } else if (result === 1) {
                setIsUserAwaiting(true);
            }
        });
    }, []);

    return (
        <div className="relative text-center">
            {isTransactionInProgress ? (
                <LoadingTransaction />
            ) : (
                isUserAwaiting && <PlayerToPlayWith />
            )}
            <button
                className={`${isDarkMode ? "custom-white-text border-[#becbe4]" : "text-black border-black"} 
                       w-[213px] h-[67px] bg-transparent relative
                       text-[25px] overflow-hidden button-shadow
                       border-[2px] rounded-[24px]`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClickHandler}
            >
                <div
                    className={`${isHovered ? "left-[-2px]" : "left-[-110%]"} 
                                ${isDarkMode ? "border-[#becbe4]" : "border-black"}
                                ${isButtonGreen ? "bg-green-400" : "bg-[#6093f5]"}
                                absolute top-[-2px] w-[213px] h-[67px]
                                opacity-[0.56] border-[2px] rounded-[24px]
                                transition-all duration-[0.5s] ease-out z-[0]`}
                />
                <span className="relative z-10">{text}</span>
            </button>
        </div>
    );
};

export default SendTonButton;
