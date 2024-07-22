import { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ApplicationContext } from "../Application";

const DarkModeSwitchButton = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ApplicationContext)!;

    return (
        <DarkModeToggle
            className="fixed top-[77px] left-[56px]"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            speed={2.3}
            size={75}
        />
    );
};

export default DarkModeSwitchButton;
