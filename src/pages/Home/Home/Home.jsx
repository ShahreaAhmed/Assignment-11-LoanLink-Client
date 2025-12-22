import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import HowItWorks from '../HowItWorks/HowItWorks';
import AvailableLoans from '../AvailableLoans/AvailableLoans';
import AddLoanForm from '../../../components/Form/AddLoanForm';
import ApprovedApplication from '../../Dashboard/Manager/ApprovedApplication';
import MyLoans from '../../Dashboard/Borrower/MyLoans';
import PendingApplications from '../../Dashboard/Manager/PendingApplications';
import ManageLoans from '../../Dashboard/Manager/ManageLoans';

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