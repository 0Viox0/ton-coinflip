import { Dispatch, SetStateAction } from "react";
import HowToPlay from "./moreInfoSideSection/HowToPlay";
import AdditionalInfo from "./moreInfoSideSection/AdditionalInfo";

const MoreInfoSidebar = ({
    isMoreInfoExpanded,
    setIsMoreInfoExpanded,
}: {
    isMoreInfoExpanded: boolean;
    setIsMoreInfoExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div
            className={`${isMoreInfoExpanded ? "w-[467px]" : "w-[0px]"} 
                        fixed top-0 right-0 h-full bg-[#d9d9d9]
                        transition-all duration-[0.5s] ease-in-out
                        rounded-l-[52px] overflow-x-hidden`}
        >
            <div
                className={`${!isMoreInfoExpanded && "hidden"} 
                             bg-[url(close.png)] w-[28px] h-[28px]
                             fixed top-[36px] right-[36px]
                             hover:cursor-pointer`}
                onClick={() => setIsMoreInfoExpanded(false)}
            />
            <div className="pt-[93px] px-[31px] text-[17px]">
                <HowToPlay />
                <AdditionalInfo />
            </div>
        </div>
    );
};

export default MoreInfoSidebar;
