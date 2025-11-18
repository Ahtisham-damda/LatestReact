type ProfileCardProps = {
  name: string;
  Designation: string;
  skills: string[];
};

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="container">
      <h2 className="text-primary">{props.name}</h2>
      <h3 className="text-warning">{props.Designation}</h3>
      <h3 className="text-danger">Skills:</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProfileCard;
