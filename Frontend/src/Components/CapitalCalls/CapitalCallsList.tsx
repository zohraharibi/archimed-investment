import React, { useEffect, useState } from 'react';
import { getCapitalCalls, getInvestorByCapitalCall } from '../../services/CapitalCallService';
import Card from '../Common/Card/Card';
import { CapitalCall } from '../../types/CapitalCallInterface';
import { formatDate } from '../../utils/dateUtils';
import CardList from '../Common/CardList/CardList';
import { NavLink } from 'react-router-dom';
import { Investor } from '../../types/InvestorInterface';

const CapitalCallsList: React.FC = () => {
    const [capitalCalls, setCapitalCalls] = useState<CapitalCall[]>([]);
    const [investors, setInvestors] = useState<Investor[]>([]);

    useEffect(() => {
        const fetchCapitalCalls = async () => {
            try {
                const capitalCallsData = await getCapitalCalls();
                setCapitalCalls(capitalCallsData);
                
                const investorPromises = capitalCallsData.map(async (call) => {
                    const investorData = await getInvestorByCapitalCall(call.id);
                    return investorData;
                });
                
                const investorsData = await Promise.all(investorPromises);
                setInvestors(investorsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCapitalCalls();
    }, []);

    return (
        <>
            <button className='mx-5 mt-5 validate-button'>
                <NavLink to="/create-capital-call" className='mx-5 mt-5 validate-button'>
                    Create A New Capital Call
                </NavLink>
            </button>
            <CardList>
                {capitalCalls.map((item, index) => (
                    <Card key={item.id}>
                        <img src='../../../public/ARCHIMED_LOGO-.png' alt='logo' width="125" height="125" />
                        <div className='mx-3'>
                            <div><b>IBAN: </b> {investors[index]?.iban}</div>
                            <div><b>Due Date: </b>{formatDate(item.due_date)}</div>

                            <div className='mt-3'><b>From: </b> Archimed SAS</div>
                            <div><b>To:</b> {investors[index]?.name}</div>
                            <div><b>Email:</b> {investors[index]?.email}</div>

                            <div className='mt-3'><b>Total Amount:</b> {item.total_amount} Euros</div>
                            <div><b>Date:</b> {formatDate(item.created_at)}</div>
                        </div>
                    </Card>
                ))}
            </CardList>
        </>
    );
};

export default CapitalCallsList;
