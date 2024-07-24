import { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ApplicationContext } from "../Application";

const DarkModeSwitchButton = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ApplicationContext)!;

    return (
        <DarkModeToggle
            className="fixed sm:top-[77px] top-[28px] sm:left-[56px] left-[22px] md:scale-100 scale-[0.8]"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            speed={2.3}
            size={75}
        />
    );
};

export default DarkModeSwitchButton;
