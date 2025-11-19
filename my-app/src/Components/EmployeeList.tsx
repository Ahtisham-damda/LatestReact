import { useState } from "react";

type Employee ={
    id: number | string;
    employee_name: string;
    employee_salary: string;
    employee_age:string;
};



function EmployeeList(){

    const [employees,setEmployee] = useState<Employee[]>([]);

    const fetchEmployees = async () =>{
        const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const data = await response.json();
        setEmployee(data.data);
    }

return(

    <div className="container mb-4">
        <h2 className="text-danger my-2">Employees List</h2>

    <button className="btn btn-success mb-2" onClick={fetchEmployees}>Employee List</button>

    <ul className="list-group mt-3">
        {employees.map((emp) => (
            <li key={emp.id} className="list-group-item">
                <h5 className="text-primary mb-1">{emp.employee_name}</h5>
                <p className="mb-0">Age : {emp.employee_age}</p>
                <p className="mb-0">Salary : {emp.employee_salary}</p>

            </li>
        ))}
    </ul>


    </div>
)


}
export default EmployeeList;