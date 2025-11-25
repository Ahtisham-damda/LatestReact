const courses = [
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Spring Boot",
  "Laravel",
  "ASP.NET",
];

function CourseList2() {
  return (
    <div>
      <h1>Course List 1</h1>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList2;
