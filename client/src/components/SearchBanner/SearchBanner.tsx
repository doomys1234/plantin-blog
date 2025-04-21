import React from "react";
import Search from "../../assets/icons/search.svg?react"
import SearchBarLogo from "../../assets/icons/searchbar.svg?react"
import useIsMobile from "../../hooks/useIsMobile.tsx"
import "./SearchBanner.scss"

const SearchBanner:React.FC = () => {
    const isMobile = useIsMobile()
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
                        <>Current temperature is: 24°C</>
                    )}
                </p>
                    <div className="search_banner-input-wrapper">
                        <input id="search" className="search_banner-input" type="text" placeholder="Search"/>
                        <Search className="search_banner-icon"/>
                    </div>
            </div>
            {!isMobile && <SearchBarLogo className="search_banner-logo"/>}
        </div>
    )
}
export default SearchBanner;
