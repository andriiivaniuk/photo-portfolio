import {ProceedButton, WelcomePhrase, WelcomeStyled} from "./WelcomeStyled.ts";
import {useSelector} from "react-redux";
import {IMainStore} from "../../store.ts";
import {WelcomeOverlayTexts} from "./WelcomeOverlayTexts.ts";
import {useEffect, useState} from "react";


export const WelcomeOverlay = () => {
    const lang = useSelector((state: IMainStore ) => state.appInfo.userLanguage);
    const [overlayOpacity, setOverlayOpacity] = useState(1);
    const [isOverlayShown, setOverlayShown] = useState(true);
    const [phraseShown, setPhraseShown] = useState(false);
    const [phraseOpacity, setPhraseOpacity] = useState(0);
    const [btnOpacity, setBtnOpacity] = useState(0);
    const [btnShown, setBtnShown] = useState(false);

    useEffect(() => {
            fadeInElement(setPhraseOpacity, () => setPhraseShown(true));
    }, []);
    useEffect(() => {
        if (phraseShown) {
            fadeInElement(setBtnOpacity, () => setBtnShown(true));
        }
    }, [phraseShown]);

    return (
        <WelcomeStyled opacity = {overlayOpacity}>
            <WelcomePhrase opacity = {phraseOpacity}>
                { WelcomeOverlayTexts.welcome[lang]}
            </WelcomePhrase>
            <ProceedButton opacity = {btnOpacity} onClick = {() => onOpenClick(setOverlayOpacity, () => setOverlayShown(true),)}>
                { WelcomeOverlayTexts.btnText[lang]}
            </ProceedButton>
        </WelcomeStyled>
    )
}

function fadeInElement(opacityStateUpdater: Function, onComplete: Function) {
    const callback = (opacity: any) => {
        if (opacity.value < 1) {
            opacity.value += 0.1;
            opacityStateUpdater(opacity.value);
            console.log("opacity increase");
        } else {
            clearInterval(interval);
            onComplete();
        }
    }

    let opacity = {value: 0}
    const interval = setInterval(() => callback(opacity), 100);
}

function onOpenClick(setOverlayOpacity: Function, setOverlayShown: Function) {
    fadeOutElement(setOverlayOpacity, setOverlayShown)
}

function fadeOutElement(opacityStateUpdater: Function, onComplete: Function) {
    const callback = (opacity: any) => {
        if (opacity.value > 0) {
            opacity.value -= 0.1;
            opacityStateUpdater(opacity.value);
            console.log("opacity increase");
        } else {
            clearInterval(interval);
            onComplete();
        }
    }

    let opacity = {value: 1}
    const interval = setInterval(() => callback(opacity), 50);
}

export default WelcomeOverlay;