function CourseList(){
    return(
        <table>
            <tr>
                <th>Cousrse ID</th>
                <th>Cousrse Name</th>
                <th>Instructor</th>
            </tr>

            <tr>
                <td>CS101</td>
                <td className="coursetitle">Introduction To Computer Science</td>
                <td>Dr.Smith</td>
            </tr>
            <tr>
                <td>MATH201</td>
                <td className="coursetitle"> Calculus I</td>
                <td>Prof.Johnson</td>
            </tr>
            <tr>
                <td>English301</td>
                <td className="course-title"> Advanced English literature</td>
                <td>Dr.Brown</td></tr>
        </table>
    )
}
export default CourseList;