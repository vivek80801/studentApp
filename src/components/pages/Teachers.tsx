import React from "react";
import Button from "react-bootstrap/Button";
import { Class, Section } from "../../data/students";
import { clases } from "../../data/teachers";
import { message } from "./Students";
import { TeacherContext, teachersContext } from "../../context/TeacherContext";

const Teachers: React.FC = (): JSX.Element => {
  const [numberOfClass, setNumberOfClass] = React.useState([{ id: 1 }]);
  const [name, setName] = React.useState("");
  const [classes, setClasses] = React.useState<clases[]>([]);
  const [messages, setMessages] = React.useState<message[]>([]);
  const teachers = React.useContext<teachersContext>(TeacherContext);
  let cls: Class = 1;
  let sec: Section = "A";

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (name === "") {
            setMessages([
              ...messages,
              { err: true, msg: "Please fill name of teacher" },
            ]);
          } else {
            setClasses([...classes, { Class: cls, Section: sec }]);
            return teachers.dispatch({
              type: "ADD_TEACHER",
              Class: classes,
              Name: name,
            });
          }
        }}
      >
        <h1>Add Teachers</h1>
        <label htmlFor="name" className="control-label">
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required
          required
        />
        <h2>Add Class And Section</h2>
        {numberOfClass.map((classNumber) => (
          <div className="from-group" key={classNumber.id}>
            <label htmlFor="class">Class:</label>
            <input
              type="number"
              placeholder="Enter Class"
              className="form-control"
              onChange={(e) => {
                let num = parseInt(e.target.value) as Class;
                if (num > 0 && num < 13) {
                  cls = num;
                }
              }}
              aria-required
              required
            />
            <label htmlFor="section">Section:</label>
            <input
              type="text"
              placeholder="Enter Section"
              className="form-control"
              onChange={(e) => {
                let section = e.target.value as Section;
                if (section >= "A" && section <= "F") {
                  sec = section;
                }
              }}
              aria-required
              required
            />
            <Button
              variant="primary"
              onClick={() =>
                setNumberOfClass([
                  ...numberOfClass,
                  { id: numberOfClass.length + 1 },
                ])
              }
            >
              Add +
            </Button>
            {classNumber.id > 1 ? (
              <Button
                variant="danger"
                onClick={() => {
                  classNumber.id > 1
                    ? setNumberOfClass([
                        ...numberOfClass.filter(
                          (num) => num.id !== classNumber.id
                        ),
                      ])
                    : setNumberOfClass([{ id: 1 }]);
                }}
              >
                &times;
              </Button>
            ) : null}
          </div>
        ))}
        <br />
        <Button type="submit" variant="success">
          Add Teacher
        </Button>
        {teachers.teacher.length > 0 ? (
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Classes</td>
                <td>Sections</td>
                <td>Delete</td>
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
                  <td>
                    <Button
                      variant="danger"
                      onClick={() =>
                        teachers.dispatch({
                          type: "REMOVE_TEACHER",
                          id: teach.id,
                        })
                      }
                    >
                      &times;
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>No teacher</h3>
        )}
      </form>
    </>
  );
};

export default Teachers;
