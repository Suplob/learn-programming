import React, { useEffect, useState } from "react";
import axios from "axios";
import Teacher from "../Components/Navbar/Teacher/Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeachers, setNewTeachers] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Suplob/fake-teacer-json/main/teachers.json"
      )
      .then((res) => {
        setTeachers(res.data);
        setNewTeachers(res.data);
      });
  }, []);

  function filterTeacher(e) {
    const matchedProduct = teachers.filter((products) =>
      products.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setNewTeachers(matchedProduct);
  }

  const inputStyle = {
    backgroundColor: "rgb(245, 243, 242)",
    padding: "10px",
  };

  return (
    <>
      <div className="mt-20">
        <input
          style={inputStyle}
          type="text"
          className="w-2/3"
          placeholder="Search Your Teacher By Name"
          onChange={filterTeacher}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-4 mt-20">
        {newTeachers.map((data) => (
          <Teacher data={data} key={data.name}></Teacher>
        ))}
      </div>
    </>
  );
};

export default Teachers;
