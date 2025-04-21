import React, {useEffect} from "react";
import Search from "../../assets/icons/search.svg?react"
import SearchBarLogo from "../../assets/icons/searchbar.svg?react"
import useIsMobile from "../../hooks/useIsMobile.tsx"
import {ChangeEventHandler} from "react";
import "./SearchBanner.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchWeatherRequest} from "../../store/weather/weatherSlice.ts";
type SearchBannerProps = {
    value: string,
    onChange: ChangeEventHandler,
}
const SearchBanner:React.FC<SearchBannerProps> = ({value, onChange}) => {
    const isMobile = useIsMobile()
    const dispatch = useDispatch<AppDispatch>();
    const { temperature, loading, error } = useSelector((state: RootState) => state.weather);
    console.log(temperature)
    useEffect(() => {
        dispatch(fetchWeatherRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="search_banner">
            <div className="search_banner-wrapper">
                <h2 className="search_banner-title">
                    Stay always tuned with planting trends
                </h2>
                <p className="search_banner-text">
                    {isMobile ? (
                        <>
                            <strong>Tips & Tricks</strong> selected specially for <strong>you</strong>!
                        </>
                    ) : (
                        <>Current temperature is: {temperature}°C</>
                    )}
                </p>
                    <div className="search_banner-input-wrapper">
                        <input id="search" className="search_banner-input" type="text" placeholder="Search" value={value} onChange={onChange}/>
                        <Search className="search_banner-icon"/>
                    </div>
            </div>
            {!isMobile && <SearchBarLogo className="search_banner-logo"/>}
        </div>
    )
}
export default SearchBanner;
