import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { ApplicationContext } from "../../Application";
import { ButtonState } from "../SendTonButton";

const PlayerNotFound = ({
    setButtonState,
}: {
    setButtonState: Dispatch<SetStateAction<ButtonState>>;
}) => {
    const { t, isDarkMode } = useContext(ApplicationContext)!;

    useEffect(() => {
        setTimeout(
            () => setButtonState(ButtonState.CheckForAvailablePlayer),
            3000,
        );
    }, []);

    return (
        <div
            className={`${isDarkMode ? "custom-white-text" : "text-black"} 
                        absolute top-[-90%] text-[17px]`}
        >
            <div>{t("playerNotFound")}</div>
        </div>
    );
};

export default PlayerNotFound;
