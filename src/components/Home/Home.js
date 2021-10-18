import React from 'react';
import Navbar from '../Navbar/Navbar';
import BestSellingProduct from './BestSellingProduct/BestSellingProduct';
import BottomTwoDeal from './BottomTwoDeal/BottomTwoDeal';
import BuyBestYourChoice from './BuyBestYourChoice/BuyBestYourChoice';
import DealOfTheDay from './DealOfTheDay/DealOfTheDay';
import HomeFutter from './HomeFutter/HomeFutter';
import LatestPopular from './LatestPopular/LatestPopular';
import MayYouNeed from './MayYouNeed/MayYouNeed';
import SearchProduct from './SearchProduct/SearchProduct';
import SliderTop from './SliderTop/SliderTop';
import TopThreeSection from './TopThreeSection/TopThreeSection';

const Home = () => {
    return (
        <div>
            <SliderTop/>
            <TopThreeSection/>
            <BestSellingProduct/>
            <LatestPopular/>
            <DealOfTheDay/>
            <BuyBestYourChoice/>
            <MayYouNeed/>
            <BottomTwoDeal/>
            <HomeFutter/>
        </div>
    );
};

export default Home;