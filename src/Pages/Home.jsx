import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estates from "./Estates";
import Faq from "./Faq";
import Fetaured from "./Fetaured";


const Home = () => {
    
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Home || EliteEstate</title>
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
            <Fetaured></Fetaured>
            <Faq></Faq>
        </div>
    );
};

export default Home;