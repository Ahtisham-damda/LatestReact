import { Link } from "react-router-dom";

const Users = [
  {
    id: "1",
    name: "Kaif Khateeb",
  },
  {
    id: "2",
    name: "Ahtisham Damda",
  },
  {
    id: "3",
    name: "Fayaz Ruknuddin",
  },
  {
    id: "4",
    name: "Rabay Barmawar",
  },
  {
    id: "5",
    name: "Kaab Jabali",
  },
  {
    id: "6",
    name: "Ehab Akrami",
  },
];

function UserList2() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {Users.map((user) => (
          <li key={user.id}>
            <Link to={`/Users/${user.id}`}> {user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList2;
