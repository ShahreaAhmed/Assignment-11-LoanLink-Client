import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import HowItWorks from '../HowItWorks/HowItWorks';
import AvailableLoans from '../AvailableLoans/AvailableLoans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableLoans></AvailableLoans>
            <HowItWorks></HowItWorks>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;