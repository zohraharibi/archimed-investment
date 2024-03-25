import React, { useState, useEffect } from 'react';
import { createCapitalCall } from '../../services/CapitalCallService';
import Card from '../Common/Card/Card';
import { CapitalCallStatus, CapitalCall } from '../../types/CapitalCallInterface';
import { getInvestors } from '../../services/InvestorService';
import { Investor } from '../../types/InvestorInterface';
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap';

const CreateCapitalCallForm: React.FC = () => {
    const [formData, setFormData] = useState<Partial<CapitalCall>>({
        total_amount: 0, 
    });
    const [investors, setInvestors] = useState<Investor[]>([]);
    const [selectedInvestorId, setSelectedInvestorId] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [successMessage, setSuccessMessage] = useState<string>('');



    useEffect(() => {
        const fetchInvestors = async () => {
            try {
                setErrors({});
                setSuccessMessage('');

                const investorsData = await getInvestors();
                setInvestors(investorsData);

            } catch (error) {
                console.error('Error fetching investors:', error);
            }
        };

        fetchInvestors();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'investor') {
            setSelectedInvestorId(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
                setErrors({});
                const validationErrors: { [key: string]: string } = {};
                if (!formData.due_date) {
                    validationErrors.due_date = 'Due date is required';
                }
                else {
                    const dueDate = new Date(formData.due_date);
                    const today = new Date();
                    if (dueDate <= today) {
                        validationErrors.due_date = 'Due date must be greater than today';
                    }
                }

                if (!formData.investor) {
                    validationErrors.investor = 'Investor is required';
                }
                if (!formData.status) {
                    validationErrors.status = 'Status is required';
                }
    
                if (Object.keys(validationErrors).length > 0) {
                    setErrors(validationErrors);
                    return;
                }
                const capitalCall = ({
                    ...formData,
                    total_amount: 0,
                }) as CapitalCall;

                await createCapitalCall(capitalCall);
                setSuccessMessage('Capital Call added successfully!');

        } catch (error) {
            console.error('Error creating capital call:', error);
        }
    };
    

    return (
        <div className='mx-5 grid grid-cols-1'>
            <Card>
                {successMessage && (
                    <div className='alert alert-success'>{successMessage}</div>
                )}
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <div className='mt-3'>
                        <label htmlFor="due_date">Due Date:</label>
                        <Input
                             type="date" 
                             id="due_date" 
                             name="due_date" 
                             onChange={handleChange}
                             invalid={!!errors.due_date}
                             />
                    </div>                       
                    <FormFeedback><div className='text-danger'>{errors.due_date}</div></FormFeedback>
                </FormGroup>

                {/* <FormGroup>
                    <div className='mt-3'>
                        <label htmlFor="total_amount">Total Amount:</label>
                        <Input 
                            type="number"
                            id="total_amount"
                            name="total_amount"
                            value={formData.total_amount}
                            onChange={handleChange} 
                            invalid={!!errors.total_amount}/>
                    </div>
                    <FormFeedback>
                        <div className='text-danger'>
                            {errors.total_amount}
                        </div>
                    </FormFeedback> */}
                {/* </FormGroup>   */}
                <FormGroup invalid={!!errors.status}>  
                    <div className='mt-3'>
                        <label htmlFor="status">Status:</label>
                        <select className='form-control' id="status" name="status" value={formData.status} onChange={handleChange}>
                            <option value="">Select status</option>
                            {Object.values(CapitalCallStatus).map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                    <FormFeedback><div className='text-danger'>{errors.status}</div></FormFeedback>

                </FormGroup>
                <FormGroup invalid={!!errors.investor}>    
                    <div className='mt-3'>
                        <label htmlFor="investor">Investor:</label>
                        <select className='form-control' id="investor" name="investor" value={selectedInvestorId} onChange={handleChange}>
                            <option value="">Select investor</option>
                            {investors.map(investor => (
                                <option key={investor.id} value={investor.id}>
                                    {investor.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <FormFeedback><div className='text-danger'>{errors.investor}</div></FormFeedback>

                </FormGroup>    
                <button type="submit" className='validate-button'>Submit</button>
                </Form>
            </Card>
        </div>
    );
};

export default CreateCapitalCallForm;
