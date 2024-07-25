import { useContext, useEffect, useState } from "react";
import image0 from "/loadingAnimation/loading0.png";
import image1 from "/loadingAnimation/loading1.png";
import image2 from "/loadingAnimation/loading2.png";
import image3 from "/loadingAnimation/loading3.png";
import image4 from "/loadingAnimation/loading4.png";
import { ApplicationContext } from "../../Application";

const images = [image0, image1, image2, image3, image4];

const LoadingTransaction = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { t, isDarkMode } = useContext(ApplicationContext)!;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 800);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className={`${isDarkMode ? "custom-white-text" : "text-black"} 
                        absolute top-[-90%] left-[50%] translate-x-[-50%]
                        flex-col text-center w-full`}
        >
            <div className="mb-[8px]">{t("proceeding")}</div>
            <div className="w-full flex justify-center mb-[14px]">
                <img src={images[currentIndex]} alt="loading animation" />
            </div>
        </div>
    );
};

export default LoadingTransaction;
