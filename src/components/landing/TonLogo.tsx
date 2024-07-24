import { useContext } from "react";
import { ApplicationContext } from "../Application";

const TonLogo = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`
                fixed left-1/2 -translate-x-1/2 bg-no-repeat bg-contain bg-center
                min-[1700px]:top-[306px] top-[240px]
                ${
                    isDarkMode
                        ? "bg-[url(darkBg/tonLogoDarkBg.png)]"
                        : "bg-[url(whiteBg/tonLogoWhiteTheme.png)]"
                }
                min-[1700px]:w-[25%] md:w-[25%] w-[188px] h-[392px] animate-floating`}
        />
    );
};

export default TonLogo;
