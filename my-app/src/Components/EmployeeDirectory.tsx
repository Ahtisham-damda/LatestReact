import EmployeeCard from "./EmployeeCard";

function EmployeeDirectory() {
  const employees = [
    {
      name: "Mohammed",
      position: "HR Manager",
      department: "HR",
      salary: 3000,
    },
    {
      name: "Asha Patel",
      position: "Software Engineer",
      department: "Engineering",
      salary: 5500,
    },
    {
      name: "Liam O'Connor",
      position: "Product Manager",
      department: "Product",
      salary: 6500,
    },
    {
      name: "Chen Wei",
      position: "UX Designer",
      department: "Design",
      salary: 4800,
    },
    {
      name: "Sofia Garcia",
      position: "Marketing Lead",
      department: "Marketing",
      salary: 5200,
    },
    {
      name: "Noah Smith",
      position: "Sales Executive",
      department: "Sales",
      salary: 4500,
    },
    {
      name: "Olivia Brown",
      position: "QA Engineer",
      department: "Engineering",
      salary: 4200,
    },
    {
      name: "Arjun Rao",
      position: "DevOps Engineer",
      department: "Operations",
      salary: 6000,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-success text-center mb-4">Employee Directory</h2>
      <div className="row">
        {employees.map((emp) => (
          <div className="col-md-3 mb-4">
            <EmployeeCard
              name={emp.name}
              position={emp.position}
              department={emp.department}
              salary={emp.salary}
            ></EmployeeCard>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EmployeeDirectory;
