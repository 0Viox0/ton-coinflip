import { useContext } from "react";
import { ApplicationContext } from "../Application";

const TonLogo = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`
                fixed left-1/2  -translate-x-1/2 top-[306px]  
                ${
                    isDarkMode
                        ? "bg-[url(darkBg/tonLogoDarkBg.png)]"
                        : "bg-[url(whiteBg/tonLogoWhiteTheme.png)]"
                }
                w-[392px] h-[392px]`}
        />
    );
};

export default TonLogo;
