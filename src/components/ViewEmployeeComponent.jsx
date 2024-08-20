import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService ';
import './ViewEmployeeComponent.css'
const ViewEmployeeComponent = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setEmployee(res.data);
        });
    }, [id]);

    return (
        <div>
            {employee ? (
                <div>
                    <h2>Employee Details</h2>
                    <div>
                        <p><strong>First Name:</strong> {employee.firstName}</p>
                        <p><strong>Last Name:</strong> {employee.lastName}</p>
                        <p><strong>Email Id:</strong> {employee.emailId}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ViewEmployeeComponent;
