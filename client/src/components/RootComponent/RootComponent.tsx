
import { Outlet, useNavigate } from 'react-router';
import React, {useEffect, useState, useCallback} from 'react';
import Header from "../Header/Header.tsx";
import Breadcrumbs from "../BreadCrumbs/BreadCrumbs.tsx";
import SubscriptionBanner from "../SubscriptionBanner/SubscriptionBanner.tsx";
import Footer from "../Footer/Footer..tsx";
import "./RootComponent.scss"

const RouterRoot:React.FC = () => {
    const navigate = useNavigate();
    const [hasSubscription, setHasSubscription] = useState(false);
    const [bannerVisible, setBannerVisible] = useState(true);

    const closeBanner =useCallback(() => {
        setBannerVisible(!bannerVisible);
    },[bannerVisible]);
    useEffect(() => {
        navigate('/blog');
        setHasSubscription(false)
    }, []);
    return (
        <>
            <Header/>
            <main className="main">
                <Breadcrumbs/>
                <Outlet/>
                {!hasSubscription && bannerVisible && (
                    <SubscriptionBanner onClose={closeBanner} />
                )}
            </main>
            <Footer/>
        </>
    );
};
export default RouterRoot;
