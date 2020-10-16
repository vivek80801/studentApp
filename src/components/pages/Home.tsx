import React from "react";
import { StudentContext, studentsContext } from "../../context/StudentsContext";
import { TeacherContext, teachersContext } from "../../context/TeacherContext";

const Home: React.FC = (): JSX.Element => {
  const students = React.useContext<studentsContext>(StudentContext);
  const teachers = React.useContext<teachersContext>(TeacherContext);
  return (
    <>
      <h1>
        Welcome to Student App{" "}
        <span role="img" aria-label="emoji">
          {" "}
          🤓{" "}
        </span>{" "}
      </h1>
      <hr />
      <h2>Our Students</h2>
      {students.student.length > 0 ? (
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Roll No</td>
              <td>Class</td>
              <td>Section</td>
            </tr>
            {students.student.map((stu) => (
              <tr key={stu.id}>
                <td style={{ textTransform: "capitalize" }}>{stu.Name}</td>
                <td>{stu.RollNo}</td>
                <td>{stu.Class}</td>
                <td>{stu.Section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>There is no student</>
      )}
      <h2>Our Teachers</h2>
      {teachers.teacher.length > 0 ? (
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Classes</td>
              <td>Sections</td>
            </tr>
            {teachers.teacher.map((teach, idx) => (
              <tr key={teach.id}>
                <td key={idx}>{teach.Name}</td>
                <td>
                  {teach.Class.map((te, i) => (
                    <span key={i}> {te.Class}</span>
                  ))}
                </td>
                <td>
                  {teach.Class.map((te, j) => (
                    <span key={j}> {te.Section}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>No Teachers</>
      )}
    </>
  );
};

export default Home;
