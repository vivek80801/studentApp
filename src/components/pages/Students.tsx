import React from "react";
import { Class, Section } from "../../data/students";
import { StudentContext, studentsContext } from "../../context/StudentsContext";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

export interface message {
	msg: string;
	err: boolean;
}

const Students: React.FC = (): JSX.Element => {
	const student = React.useContext<studentsContext>(StudentContext);
	const [messages, setMessages] = React.useState<message[]>([]);
	const [name, setName] = React.useState("");
	const [rollNo, setRollNo] = React.useState(0);
	const [Cls, setCls] = React.useState<Class | null>(null);
	const [section, setSection] = React.useState<Section | null>(null);
	const [showAlert, setShowAlert] = React.useState(true);
	const [showTable, setShowTable] = React.useState(true);
	const [show, setShow] = React.useState(false);
	const [editName, setEditName] = React.useState("");
	const [editRollNo, setEditRollNo] = React.useState(0);
	const [editClass, setEditClass] = React.useState<Class | null>(null);
	const [editSection, setEditSection] = React.useState<Section | null>(null);
	const [editMessages, setEditMessages] = React.useState<message[]>([]);
	const [editId, setEditId] = React.useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	React.useEffect(() => {
		if (student.student.length <= 0) {
			setShowTable(false);
		} else {
			setShowTable(true);
		}
		const timer = setTimeout(() => {
			setMessages([]);
			setEditMessages([]);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [student]);

	return (
		<>
			<form
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					if (name.length > 15) {
						setMessages([
							{
								msg: "Name can not be greater then 15 charecters including spaces",
								err: true,
							},
						]);
					} else if (rollNo > 30) {
						setMessages([{ msg: "Roll number must be less then 30", err: true }]);
					} else if (Cls == null) {
						setMessages([{ msg: "Class can only be from 1 to 12", err: true }]);
					} else if (section === null) {
						setMessages([{ msg: "Section can only be from A to F", err: true }]);
					} else {
						setMessages([{ msg: "Student Added", err: false }]);
						return student.dispatch({
							type: "ADD_STUDENT",
							Name: name,
							Class: Cls,
							Roll_No: rollNo,
							Section: section,
						});
					}
				}}
			>
				{showAlert ? (
					<>
						{messages.map((message, idx) => (
							<Alert
								onClose={() => setShowAlert(false)}
								variant={`${message.err ? "warning" : "success"}`}
								key={idx}
								dismissible={true}
							>
								{message.msg}
							</Alert>
						))}
					</>
				) : null}
				<h1>Add Student</h1>
				<label htmlFor="name" className="control-label">
					Name:
				</label>
				<input
					id="name"
					type="text"
					placeholder="Enter Name"
					required
					aria-required
					className="form-control"
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="roll-no">Roll No:</label>
				<input
					id="roll-no"
					type="number"
					placeholder="Enter Roll number"
					min={1}
					required
					aria-required
					className="form-control"
					onChange={(e) => setRollNo(+e.target.value)}
				/>
				<label htmlFor="class">Class:</label>
				<input
					id="class"
					type="number"
					placeholder="Enter Class"
					min={1}
					required
					aria-required
					className="form-control"
					onChange={(e) => {
						let num = parseInt(e.target.value) as Class;
						if (num > 0 && num < 13) {
							setCls(num);
						} else {
							setCls(null);
						}
					}}
				/>
				<label htmlFor="section">Section:</label>
				<input
					id="section"
					type="text"
					placeholder="Enter Section"
					required
					aria-required
					className="form-control"
					onChange={(e) => {
						let section = e.target.value as Section;
						if (section >= "A" && section <= "F") {
							setSection(section);
						} else {
							setSection(null);
						}
					}}
				/>
				<Button type="submit">Add +</Button>
			</form>
			<br />
			{showTable ? (
				<table className="table">
					<tbody>
						<tr>
							<td>Name</td>
							<td>Roll No</td>
							<td>Class</td>
							<td>Section</td>
							<td>Edit</td>
							<td>Delete</td>
						</tr>
						{student.student.map((stu) => (
							<tr key={stu.id}>
								<td style={{ textTransform: "capitalize" }}>{stu.Name}</td>
								<td>{stu.RollNo}</td>
								<td>{stu.Class}</td>
								<td>{stu.Section}</td>
								<td>
									<Button
										onClick={() => {
											handleShow();
											setEditId(stu.id);
										}}
									>
										Edit{" "}
										<span role="img" aria-label="emoji">
											{" "}
											✍{" "}
										</span>
									</Button>
								</td>
								<td>
									<Button
										onClick={() => {
											setShowAlert(true);
											setMessages([...messages, { msg: "Student deleted", err: false }]);
											return student.dispatch({
												type: "REMOVE_STUDENT",
												id: stu.id,
											});
										}}
										variant="danger"
									>
										&times;
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<>There is no student</>
			)}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Student</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{showAlert ? (
						<>
							{editMessages.map((message, idx) => (
								<Alert
									onClose={() => setShowAlert(false)}
									variant={`${message.err ? "warning" : "success"}`}
									key={idx}
									dismissible={true}
								>
									{message.msg}
								</Alert>
							))}
						</>
					) : null}
					<label htmlFor="edit-name">Name:</label>
					<input
						id="edit-name"
						type="text"
						className="form-control"
						onChange={(e) => setEditName(e.target.value)}
					/>
					<label htmlFor="edit-roll-no">Roll No:</label>
					<input
						id="roll-no"
						type="number"
						className="form-control"
						onChange={(e) => setEditRollNo(+e.target.value)}
					/>
					<label htmlFor="edit-class">Class:</label>
					<input
						id="edit-class"
						type="number"
						className="form-control"
						onChange={(e) => {
							let classNum = parseInt(e.target.value) as Class;

							if (classNum > 0 && classNum < 13) {
								setEditClass(classNum);
							} else {
								setEditClass(null);
							}
						}}
					/>
					<label htmlFor="section">Section:</label>
					<input
						id="edit-section"
						type="text"
						className="form-control"
						onChange={(e) => {
							let section = e.target.value as Section;
							if (section >= "A" && section <= "F") {
								setEditSection(section);
							} else {
								setEditSection(null);
							}
						}}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							if (editName.length > 15) {
								setEditMessages([
									{
										msg: "Name can not be greater then 15 charecters including spaces",
										err: true,
									},
								]);
							} else if (editRollNo > 30) {
								setEditMessages([
									{ msg: "Roll number must be less then 30", err: true },
								]);
							} else if (editClass == null) {
								setEditMessages([{ msg: "Class can only be from 1 to 12", err: true }]);
							} else if (editSection === null) {
								setEditMessages([
									{ msg: "Section can only be from A to F", err: true },
								]);
							} else {
								setEditMessages([{ msg: "Student Added", err: false }]);
								handleClose();
								return student.dispatch({
									type: "EDIT_STUDENT",
									id: editId,
									Name: editName,
									Class: editClass,
									Roll_No: editRollNo,
									Section: editSection,
								});
							}
						}}
					>
						Edit Student
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Students;
