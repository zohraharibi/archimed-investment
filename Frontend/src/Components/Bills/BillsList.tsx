import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import useHistory hook
import { getBills } from '../../services/BillService';
import Card from '../Common/Card/Card';
import { Bill } from '../../types/BillInterface';
import CardList from '../Common/CardList/CardList';

const BillsList: React.FC = () => {
    const [bills, setBills] = useState<Bill[]>([]);

    useEffect(() => {
        const fetchBills = async () => {
            const data = await getBills();
            setBills(data);
        };

        fetchBills();
    }, []);


    return (
        <>
            <button className='mx-5 mt-5 validate-button'>            
              <NavLink to="/bills/create-bill" className='mx-5 mt-5 validate-button'>
                Create A New Bill
              </NavLink>
            </button>
            <CardList>
                {bills.map((item) => (
                    <Card key={item.id} link={`${item.id}`}>
                        <div><b>Amount to Pay: </b> {item.amount} Euros </div>
                        <div><b>Fee Applied: </b> {item.fee_percentage} % </div>
                        <div><b>Type: </b>{item.bill_type} </div>
                    </Card>
                ))}
            </CardList>
        </>
    );
};

export default BillsList;
