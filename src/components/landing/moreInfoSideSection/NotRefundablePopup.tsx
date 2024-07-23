import { useContext } from "react";
import { ApplicationContext } from "../../Application";

const NotRefundablePopup = () => {
    const { t } = useContext(ApplicationContext)!;

    return (
        <div className="absolute bottom-[-90px] left-[50%] translate-x-[-51%] w-[350px] h-[128px] ">
            <div
                className="custom-shadow h-[100px] w-[100%]
                        bg-[#d9d9d9] rounded-[24px]
                        shadow shadow-black blur-[21.2] custom-shadow
                        flex justify-center items-center"
            >
                <div className="text-center w-[80%]">
                    {t("notRefundablePopup")}
                </div>
            </div>
            <div
                className="bg-[#d9d9d9] w-[24px] h-[24px] rotate-[-45deg] 
                            triangle-custom-shadow absolute bottom-[16px] right-[40px]"
            />
        </div>
    );
};

export default NotRefundablePopup;
