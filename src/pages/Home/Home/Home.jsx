import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import HowItWorks from '../HowItWorks/HowItWorks';
import AvailableLoans from '../AvailableLoans/AvailableLoans';
import AddLoanForm from '../../../components/Form/AddLoanForm';
import ApprovedApplication from '../../Dashboard/Manager/ApprovedApplication';
import MyLoans from '../../Dashboard/Borrower/MyLoans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableLoans></AvailableLoans>
            <HowItWorks></HowItWorks>
            <AddLoanForm></AddLoanForm>
            
            <ApprovedApplication></ApprovedApplication>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;