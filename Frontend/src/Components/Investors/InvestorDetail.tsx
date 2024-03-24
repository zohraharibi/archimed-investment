import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Common/Card/Card';
import { Investor } from '../../types/InvestorInterface';
import { formatDate } from '../../utils/dateUtils';
import CardList from '../Common/CardList/CardList';
import { getInvestor } from '../../services/InvestorService';

const InvestorDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Retrieve the investor ID from URL params

    const [investor, setInvestor] = useState<Investor>();

    useEffect(() => {
        const fetchInvestor = async () => {
            try {
                if (id) {
                    const investorData = await getInvestor(parseInt(id, 10));
                    setInvestor(investorData);
                }
            } catch (error) {
                console.error('Error fetching investor:', error);
            }
        };

        fetchInvestor();
    }, [id]); // Fetch investor details whenever the ID changes

    return (
        <>
            {investor && (
            <>
                <Card>
                    <div><b>Name:</b> {investor.name}</div>
                    <div><b>Email:</b> {investor.email}</div>
                    <div><b>Iban:</b> {investor.iban}</div>
                    <div><b>First Investment Made:</b> {formatDate(investor.date_of_first_investment)}</div>
                </Card>
                <CardList>
                    {investor.bills?.map((bill) => (
                        <Card key={bill.id}>
                            <div><b>Amount to Pay:</b> {bill.amount} Euros</div>
                            <div><b>Fee Applied:</b> {bill.fee_percentage}%</div>
                            <div><b>Type:</b> {bill.bill_type}</div>
                        </Card>
                    ))}
                </CardList>
            </>
            )}
        </>
    );
};

export default InvestorDetail;
