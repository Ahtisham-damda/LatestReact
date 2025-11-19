import { useState } from "react";

type User = {
    id : number;
    username : string;
    email : string;
    password:string;
    address: {
        street: string;
        suite: string;
        city: string;
}
company: {
    name: string;
    catchPhrase: string;
    bs: string;
}
};


function UserList(){
    const [user,setUser] = useState<User[]>([])

    const fetchUser = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUser(data);
    }
    return(
        <div className="container mb-4 text-center mx-0">
            <h2 className="text-danger mb-2">User List</h2>
            <button className="btn btn-success my-2" onClick={fetchUser}>View Users</button>
            <ul className="text-center text-secondary list-group">
                {user.map((us) => (
                    <li key={us.id} className="my-1 list-group-item">
                        <h3 className="mb-1">Name : {us.username}</h3>
                        <h6 className="mb-1">Email : {us.email}</h6>
                        <h6>Password : {us.password}</h6>
                        <p>Address : {us.address.street} {us.address.suite} {us.address.city}</p>
                        <p>Company : {us.company.name} {us.company.catchPhrase} {us.company.bs}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;