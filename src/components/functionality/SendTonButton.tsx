import { useContext, useState } from "react";
import { ApplicationContext } from "../Application";

const SendTonButton = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <button
            className={`${isDarkMode ? "custom-white-text border-[#becbe4]" : "text-black border-black"} 
                       w-[213px] h-[67px] bg-transparent relative
                       text-[25px] overflow-hidden button-shadow
                       border-[2px]  rounded-[24px]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`${isHovered ? "left-[-2px]" : "left-[-110%]"} 
                            ${isDarkMode ? "border-[#becbe4]" : "border-black"}
                            absolute top-[-2px] w-[213px] h-[67px]
                            bg-[#6093f5] opacity-[0.56] border-[2px] rounded-[24px]
                            transition-all duration-[0.5s] ease-out z-[0]`}
            />
            <span className="relative z-10">{text}</span>
        </button>
    );
};

export default SendTonButton;
