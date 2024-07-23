import { useContext, useState } from "react";
import { ApplicationContext } from "../../Application";
import LiSmartContract from "./LiSmartContract";
import NotRefundablePopup from "./NotRefundablePopup";

const AdditionalInfo = () => {
    const { t } = useContext(ApplicationContext)!;

    const [isDisplayNotRefundPopup, setIsDisplayNotRefundPopup] =
        useState<boolean>(false);

    return (
        <div className="mt-[28px]">
            <h1 className="text-[29px] text-center font-semibold">
                {t("additionalInfo")}
            </h1>
            <p className="mt-[30px]">{t("paragraph1")}</p>
            <p className="mt-[35px]">{t("view5LinksHeader")}</p>
            <ul className="mt-[35px] space-y-[14px]">
                <LiSmartContract
                    lable={t("link1Label")}
                    link={t("link1Actual")}
                />
                <LiSmartContract
                    lable={t("link2Label")}
                    link={t("link2Actual")}
                />
                <LiSmartContract
                    lable={t("link3Label")}
                    link={t("link3Actual")}
                />
                <LiSmartContract
                    lable={t("link4Label")}
                    link={t("link4Actual")}
                />
                <LiSmartContract
                    lable={t("link5Label")}
                    link={t("link5Actual")}
                />
            </ul>
            <p className="mt-[24px]">{t("paragraph2")}</p>
            <p className="mt-[24px]">{t("paragraph3")}</p>
            <div
                className="my-[35px] flex justify-center items-center hover:cursor-pointer select-none"
                onClick={() =>
                    setIsDisplayNotRefundPopup((prevState) => !prevState)
                }
            >
                {t("Ton you send is not refundable")}
                <div
                    className="bg-[url(whiteBg/infoWhiteMode.png)] bg-contain 
                               w-[20px] h-[20px] ml-[7px]"
                />
            </div>
            {isDisplayNotRefundPopup && <NotRefundablePopup />}
        </div>
    );
};

export default AdditionalInfo;
