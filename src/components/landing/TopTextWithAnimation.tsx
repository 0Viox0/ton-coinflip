import { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ApplicationContext } from "../Application";

const TopTextWithAnimation = () => {
    const { t, isDarkMode, currentLanguageCode } =
        useContext(ApplicationContext)!;

    const [key, setKey] = useState<number>(0); // Key state for forcing component reload

    const forceReloadAnimation = () => {
        setKey((prevKey) => prevKey + 1);
    };

    useEffect(() => {
        forceReloadAnimation();
    }, [currentLanguageCode]);

    return (
        <div
            className={`${isDarkMode ? "custom-white-text" : "text-black"} 
                        mt-[77px] text-center select-none`}
        >
            <TypeAnimation
                key={key}
                sequence={[
                    t("title1"),
                    3000,
                    t("title2"),
                    3000,
                    t("title3"),
                    3000,
                ]}
                speed={5}
                style={{ fontSize: "4em" }}
                repeat={Infinity}
                preRenderFirstString={true}
            />
        </div>
    );
};

export default TopTextWithAnimation;
