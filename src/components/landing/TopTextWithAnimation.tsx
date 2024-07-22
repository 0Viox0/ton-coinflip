import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { ApplicationContext } from "../Application";

const TopTextWithAnimation = () => {
    const { t, isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`${isDarkMode ? "custom-white-text" : "text-black"} mt-[77px] text-center`}
        >
            <TypeAnimation
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
