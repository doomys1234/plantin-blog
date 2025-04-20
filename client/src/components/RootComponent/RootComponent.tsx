
import { Outlet, useNavigate } from 'react-router';
import React, {useEffect} from 'react';
import Header from "../Header/Header.tsx";
import Breadcrumbs from "../BreadCrumbs/BreadCrumbs.tsx";
import "./RootComponent.scss"

const RouterRoot:React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/blog');
    }, []);
    return (
        <>
            <Header/>
            <main className="main">
                <Breadcrumbs/>
                <Outlet/>
            </main>
        </>
    );
};
export default RouterRoot;
