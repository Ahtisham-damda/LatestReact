import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";
const ThemedTable = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <table className={`table ${theme === "light" ? "table-light" : "table-dark"}`}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ahtisham</td>
          <td>Developer</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ali</td>
          <td>Designer</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ThemedTable;