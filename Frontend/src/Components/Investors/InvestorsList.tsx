import React, { useEffect, useState } from 'react';
import { getInvestors } from '../../services/InvestorService';
import Card from '../Common/Card/Card';
import { Investor } from '../../types/InvestorInterface';
import CardList from '../Common/CardList/CardList';
import { formatDate } from '../../utils/dateUtils';
import { NavLink } from 'react-router-dom';

const InvestorsList: React.FC = () => {

    const [Investors, setInvestors] = useState<Investor[]>([]);


    useEffect(() => {
      const fetchInvestors = async () => {
        const data = await getInvestors();
        setInvestors(data);
      };
  
      fetchInvestors();
    }, []);
    return (
    <>
        <button className='mx-5 mt-5 validate-button'>            
          <NavLink to="/investors/create-investor" className='mx-5 mt-5 validate-button'>
            Add A New Investor
          </NavLink>
        </button>
        <CardList>
                {Investors.map((item) => (
                  <Card key={item.id}  link={`${item.id}`}>
                    <div> <b>Name: </b> {item.name} </div>
                    <div> <b>Email: </b> {item.email}</div>
                    <div> <b>Iban: </b>{item.iban} </div>
                    <div> <b>First Investment Made: </b>{formatDate(item.date_of_first_investment)} </div>
                </Card>
                ))}
        </CardList>
        <p className='mx-10 mt-5 text-sm'>Click on investor to get the list of all his bills</p>

      </>
  

  );
};

export default InvestorsList;