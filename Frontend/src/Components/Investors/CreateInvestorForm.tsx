import React, { useState } from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';
import { Investor } from '../../types/InvestorInterface';
import { createInvestor } from '../../services/InvestorService';
import Card from '../Common/Card/Card';

export const CreateInvestorForm: React.FC = () => {
    const [formData, setFormData] = useState<Partial<Investor>>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setErrors({});
            setSuccessMessage('');
            
            const validationErrors: { [key: string]: string } = {};
            if (!formData.name) {
                validationErrors.name = 'Name is required';
            }
            if (!formData.iban) {
                validationErrors.iban = 'IBAN is required';
            } else if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/.test(formData.iban)) {
                validationErrors.iban = 'IBAN is not valid';
            }
            if (!formData.email) {
                validationErrors.email = 'Email is required';
            } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
                validationErrors.email = 'Email is not valid';
            }
            if (!formData.date_of_first_investment) {
                validationErrors.date_of_first_investment = 'Date of first investment is required';
            }

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            await createInvestor(formData as Investor);
            setSuccessMessage('Investor added successfully!');

        } catch (error: any) {
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                const serverErrors: { [key: string]: string } = {};

                Object.keys(errorData).forEach((field) => {
                    serverErrors[field] = errorData[field][0];
                });

                setErrors(serverErrors);
            }
        }
    };

    return (
        <div className='mx-5 grid grid-cols-1'>
            <Card>
                {successMessage && (
                    <div className='alert alert-success'>{successMessage}</div>
                )}
                <form className='form-group' onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            invalid={!!errors.name}
                        />
                        <FormFeedback><div className='text-danger'>{errors.name}</div></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="iban">IBAN</label>
                        <Input
                            type="text"
                            name="iban"
                            id="iban"
                            value={formData.iban || ''}
                            onChange={handleChange}
                            invalid={!!errors.iban}
                        />
                        <FormFeedback><div className='text-danger'>{errors.iban}</div></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email || ''}
                            onChange={handleChange}
                            invalid={!!errors.email}
                        />
                        <FormFeedback><div className='text-danger'>{errors.email}</div></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="date_of_first_investment">Date of first investment</label>
                        <Input
                            type="date"
                            name="date_of_first_investment"
                            id="date_of_first_investment"
                            onChange={handleChange}
                            invalid={!!errors.date_of_first_investment}
                        />
                        <FormFeedback><div className='text-danger'>{errors.date_of_first_investment}</div></FormFeedback>
                    </FormGroup>
                    <button type="submit" className='validate-button'>Submit</button>
                </form>
            </Card>
        </div>
    );
};
