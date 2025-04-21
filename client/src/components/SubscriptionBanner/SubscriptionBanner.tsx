import React from "react";
import { createPortal } from 'react-dom';
import SiteLogo from "../SiteLogo/SiteLogo.tsx";
import Button from "../Button/Button.tsx";
import "./SubscriptionBanner.scss"

const bannerRoot = document.getElementById("subscribe-banner-root");

interface SubscribeBannerProps {
    onClose: () => void;
}

const SubscriptionBanner:React.FC<SubscribeBannerProps>= ({ onClose }) => {
    if (!bannerRoot) return null;
    return createPortal(
        <>
            <div className="subscribe_banner-overlay"></div>
            <div className="subscribe_banner">
                <SiteLogo/>
                <h2 className="subscribe_banner-title">
                    Get unlimited access to exclusive articles
                </h2>
                <p className="subscribe_banner-text">
                    Get rid of limits and read everything you wish
                </p>
                <Button className={"subscribe_banner-button"} onClick={onClose}>Try For Free</Button>
                <Button className={"subscribe_banner-button-close"} onClick={onClose}>X</Button>
            </div>
        </>,
        bannerRoot
    )
}
export default SubscriptionBanner;
