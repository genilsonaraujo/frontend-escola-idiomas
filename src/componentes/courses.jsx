import React from "react";
import "./Home.css"; // Importando o CSS
import "./courses.css"; // Importando o CSS

const coursesData = [
  {
    title: "Curso de Inglês",
    image: "/src/assets/cursos/ingles.jpg",
    info: "📜 Certificado • 📖 Material Impresso",
  },
  {
    title: "Curso de Espanhol",
    image: "/src/assets/cursos/espanhol.jpg",
    info: "📜 Certificado • 📖 Material Impresso",
  },
  {
    title: "Curso de Informática",
    image: "/src/assets/cursos/informatica.jpg",
    info: "📜 Certificado • 📖 Material Impresso",
  },
  {
    title: "Curso de Arduino",
    image: "/src/assets/cursos/arduino.jpg",
    info: "📜 Certificado • 📖 Material Impresso",
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      {coursesData.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-content">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-info">{course.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
