import { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ApplicationContext } from "../Application";

const TopTextWithAnimation = () => {
    const { isDarkMode, t } = useContext(ApplicationContext)!;

    const [key, setKey] = useState<number>(0); // Key state for forcing component reload

    const forceReloadAnimation = () => {
        setKey((prevKey) => prevKey + 1);
    };

    useEffect(() => {
        forceReloadAnimation();
    }, [t("title2")]);

    return (
        <div
            className={`${isDarkMode ? "custom-white-text" : "text-black"} 
                        text-center select-none 
                        min-[1700px]:text-[4em] xl:text-[2.5em] md:text-[3em] text-[28px]
                        mt-[181px] xl:mt-[77px]`}
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
                repeat={Infinity}
                preRenderFirstString={true}
            />
        </div>
    );
};

export default TopTextWithAnimation;
