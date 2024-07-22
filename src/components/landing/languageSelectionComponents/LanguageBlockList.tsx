import LanguageBlock from "./LanguageBlock";

const LanguageBlockList = () => {
    return (
        <>
            <LanguageBlock lang="English" emojiPath="flags/GB.png" code="en" />
            <LanguageBlock lang="Russian" emojiPath="flags/RU.png" code="ru" />
            <LanguageBlock lang="German" emojiPath="flags/DE.png" code="de" />
            <LanguageBlock lang="Spanish" emojiPath="flags/ES.png" code="es" />
            <LanguageBlock lang="French" emojiPath="flags/FR.png" code="fr" />
            <LanguageBlock lang="Korean" emojiPath="flags/KR.png" code="kr" />
            <LanguageBlock lang="Japanese" emojiPath="flags/JP.png" code="jp" />
            <LanguageBlock lang="Italian" emojiPath="flags/IT.png" code="it" />
        </>
    );
};

export default LanguageBlockList;
