import { useContext, useState } from "react";
import { ApplicationContext } from "../Application";
import MoreInfoSidebar from "./MoreInfoSidebar";

const MoreInfo = () => {
    const { t, isDarkMode } = useContext(ApplicationContext)!;
    const [isMoreInfoExpanded, setIsMoreInfoExpanded] = useState<boolean>(true);

    return (
        <>
            <div
                className={`${isDarkMode ? "custom-white-text" : "text-black"} 
                         fixed bottom-[63px] left-1/2 -translate-x-1/2
                         text-[25px] flex-col hover:cursor-pointer`}
                onClick={() => setIsMoreInfoExpanded((prevState) => !prevState)}
            >
                <div className="flex items-center">
                    <div className="select-none">{t("moreInfo")}</div>
                    <div
                        className={`
                           ${
                               isDarkMode
                                   ? "bg-[url(darkBg/infoDarkMode.png)]"
                                   : "bg-[url(whiteBg/infoWhiteMode.png)]"
                           }
                           w-[24px] h-[24px] ml-[7px]`}
                    />
                </div>
                <div
                    className={`${isDarkMode ? "custom-white-bg" : "bg-black"} h-[1.2px]`}
                />
            </div>
            <MoreInfoSidebar
                isMoreInfoExpanded={isMoreInfoExpanded}
                setIsMoreInfoExpanded={setIsMoreInfoExpanded}
            />
        </>
    );
};

export default MoreInfo;
