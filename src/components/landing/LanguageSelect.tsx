import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import LanguageSelectButtonIcons from "./languageSelectionComponents/LanguageSelectButtonIcons";
import LanguageBlockList from "./languageSelectionComponents/LanguageBlockList";
import { ApplicationContext } from "../Application";

interface LanguageSelectionProps {
    isExpanded: boolean;
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export const IsLanguageSelectionExpandedContext =
    createContext<LanguageSelectionProps | null>(null);

const LanguageSelect = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { currentLanguageCode } = useContext(ApplicationContext)!;

    const handleOnClick = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <div className="fixed top-[90px] right-[76px]">
            <IsLanguageSelectionExpandedContext.Provider
                value={{ isExpanded, setIsExpanded }}
            >
                <div
                    className="custom-blue-bg w-[170px] h-[35px] rounded-[10px]
                            custom-white-text flex justify-between items-center pl-[16px] pr-[8px]"
                    onClick={handleOnClick}
                >
                    <span className="text-[20px] select-none">
                        {currentLanguageCode}
                    </span>
                    <LanguageSelectButtonIcons isExpanded={isExpanded} />
                </div>
                <div
                    className={`${isExpanded ? "h-[350px]" : "h-[0px]"} 
                            custom-blue-bg w-[170px] rounded-[10px] mt-[3px]
                            transition-all duration-[0.5s] ease-out overflow-hidden`}
                >
                    <LanguageBlockList />
                </div>
            </IsLanguageSelectionExpandedContext.Provider>
        </div>
    );
};

export default LanguageSelect;
