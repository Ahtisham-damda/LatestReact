type Course = {
  id: number;
  name: string;
  duration: string;
  price: number;
};

const courses: Course[] = [
  { id: 1, name: "React", duration: "6 weeks", price: 300 },
  { id: 2, name: "Angular", duration: "8 weeks", price: 350 },
  { id: 3, name: "Vue", duration: "5 weeks", price: 250 },
  { id: 4, name: "Node.js", duration: "7 weeks", price: 400 },
  { id: 5, name: "Django", duration: "6 weeks", price: 300 },
  { id: 6, name: "Flask", duration: "4 weeks", price: 200 },
  { id: 7, name: "Ruby on Rails", duration: "8 weeks", price: 450 },
  { id: 8, name: "Spring Boot", duration: "9 weeks", price: 500 },
  { id: 9, name: "Laravel", duration: "7 weeks", price: 350 },
  { id: 10, name: "ASP.NET", duration: "8 weeks", price: 400 },
];

function CourseList3() {
  return (
    <div className="container">
      <h2>Course List 1</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">
            <h2>{course.name}</h2>
            <p>Duration : {course.duration}</p>
            <p>Price : INR {course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList3;
