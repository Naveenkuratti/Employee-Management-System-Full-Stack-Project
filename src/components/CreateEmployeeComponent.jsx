import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService ';
import './CreateEmployeeComponent.css'
const CreateEmployeeComponent = () => {
    const { id } = useParams(); // Access route parameters
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', emailId: '' });

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id).then(res => {
                setEmployee(res.data);
            });
        }
    }, [id]);

    const saveEmployee = (e) => {
        e.preventDefault();
        if (id) {
            EmployeeService.updateEmployee(id, employee).then(() => {
                navigate('/employees');
            });
        } else {
            EmployeeService.createEmployee(employee).then(() => {
                navigate('/employees');
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    return (
        <div>
            <h2 className="text-center">{id ? 'Update Employee' : 'Add Employee'}</h2>
            <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email Id:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="emailId"
                        value={employee.emailId}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-primary" onClick={saveEmployee}>
                    Save
                </button>
                <button className="btn btn-primary" onClick={saveEmployee}>
                    cancel
                </button>
                
            </form>
        </div>
    );
};

export default CreateEmployeeComponent;
