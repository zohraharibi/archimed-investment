import React, { useEffect, useState } from 'react';
import {FormGroup, Input, FormFeedback, Form } from 'reactstrap';
import { Bill, BillType } from '../../types/BillInterface';
import { createBill } from '../../services/BillService';
import { Investor } from '../../types/InvestorInterface';
import { getInvestors } from '../../services/InvestorService';
import { CapitalCall } from '../../types/CapitalCallInterface';
import { getCapitalCalls } from '../../services/CapitalCallService';
import Card from '../Common/Card/Card';




export const CreateBillForm: React.FC = () => {
    const [formData, setFormData] = useState<Partial<Bill>>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [investors, setInvestors] = useState<Investor[]>([]);
    const [selectedInvestorId, setSelectedInvestorId] = useState<string>('');
    const [capitalCalls, setCapitalCalls] = useState<CapitalCall[]>([]);
    const [selectedCapitalCallId, setSelectedCapitalCallId] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    
    useEffect(() => {
        const fetchInvestors = async () => {
            try {
                const investorsData = await getInvestors();
                setInvestors(investorsData);
                const capitalCallsData = await getCapitalCalls();
                setCapitalCalls(capitalCallsData);
            } catch (error) {
                console.error('Error fetching investors or capital calls:', error);
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
        if (name === 'capital_call') {
            setSelectedCapitalCallId(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setErrors({});
            setSuccessMessage('');
            
            const validationErrors: { [key: string]: string } = {};
            if (!formData.amount) {
                validationErrors.amount = 'Amount is required';
            }
            if (!formData.bill_type) {
                validationErrors.bill_type = 'Bill type is required';
            }
            if (!formData.fee_percentage) {
                validationErrors.fee_percentage = 'Fee percentage is required';
            }
            if (!formData.investor) {
                validationErrors.investor = 'Investor is required';
            }

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            await createBill(formData as Bill);
            setSuccessMessage('Bill added successfully!');

        } catch (error) {
            console.error('Error creating bill:', error);
        }
    };

    return (
        <div className='mx-5 grid grid-cols-1'>
            <Card>
            {successMessage && (
                    <div className='alert alert-success mb-4'>{successMessage}</div>
                )}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor="Amount">Amount before calculation</label>
                        <Input
                            type="text"
                            name="amount"
                            id="amount"
                            onChange={handleChange}
                            invalid={!!errors.amount}
                        />
                        <FormFeedback><div className='text-danger'>{errors.amount}</div></FormFeedback>
                    </FormGroup>
                    <FormGroup invalid={!!errors.investor}>
                        <label htmlFor="investor">Investor:</label>
                        <select className='form-control' id="investor" name="investor" value={selectedInvestorId} onChange={handleChange}>
                            <option value="">Select investor</option>
                            {investors.map(investor => (
                                <option key={investor.id} value={investor.id}>
                                    {investor.name}
                                </option>
                            ))}
                        </select>
                        <FormFeedback><div className='text-danger'>{errors.investor}</div></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="capital_call">Capital Call:</label>
                        <select className='form-control' id="capital_call" name="capital_call" value={selectedCapitalCallId} onChange={handleChange}>
                            <option value="">Select Capital Call</option>
                            {capitalCalls.map(capitalCall => (
                                <option key={capitalCall.id} value={capitalCall.id}>
                                    Capital Call N° {capitalCall.id}
                                </option>
                            ))}
                        </select>

                    </FormGroup>

                    <FormGroup invalid={!!errors.bill_type}>
                        <label htmlFor="status">Bill Type:</label>
                        <select className='form-control' id="bill_type" name="bill_type" value={formData.bill_type} onChange={handleChange}>
                            <option value="">Select Type</option>
                            {Object.values(BillType).map(billType => (
                                <option key={billType} value={billType}>{billType}</option>
                            ))}
                        </select>
                        <FormFeedback><div className='text-danger'>{errors.bill_type}</div></FormFeedback>
                    </FormGroup>

                    <FormGroup>
                    <label htmlFor="fee_percentage">Fee Percentage</label>
                        <Input
                            type="number"
                            name="fee_percentage"
                            id="fee_percentage"
                            onChange={handleChange}
                            invalid={!!errors.fee_percentage}
                        />
                        <FormFeedback><div className='text-danger'>{errors.fee_percentage}</div></FormFeedback>

                    </FormGroup>
                    <button type="submit" className='validate-button'>Submit</button>
                </Form>
                
            </Card>   
        </div> 
    )};