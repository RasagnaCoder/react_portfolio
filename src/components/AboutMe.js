// import Header from './Header';
// import './AboutMe.css';
// function AboutMe(){
//     return(
//         <div>
           
//             <div className='bio' >
//             <div >
//                 <h3>Who I Am</h3>
//                 <p>Hello! I'm Uyyala Rasagna, currently pursuing my third year of BE in Computer Science and Engineering at CBIT, Hyderabad. With a strong academic record and a CGPA of 9.95 till the 3rd semester, I am dedicated to excelling in my field and continuously expanding my knowledge and skills.</p>

//             </div>
//             <div>
//                 <h3>What I Do</h3>
//                 I specialize in web development and have a solid foundation in both front-end and back-end technologies. My skills include:
//                 <br/>
//                 <b>Programming Languages:</b> Python, Java
//                 <br/>
//                 <b>Concepts:</b> Object-Oriented Programming (OOP), Data Structures
//                 <br/>
//                 <b>Web Technologies:</b> HTML, CSS, JavaScript, React.js
//                 <br/>
//                 <b>Databases:</b> SQL, MongoDB (basics)
              
//                 I recently completed my first virtual internship in web development at Bharat Intern, where I successfully delivered two projects. This experience allowed me to apply my theoretical knowledge in a practical setting and gain valuable insights into the industry.
//             </div>
//             <div>
//                 <h3>My Philosophy</h3>
//                 <p>I believe in the importance of continuous learning and staying updated with the latest technological advancements. My approach to any project is driven by a commitment to excellence, a passion for problem-solving, and a desire to create user-centric solutions.</p>

//             </div>
//             <div>
//                 <h3></h3>
//                 <p>When I'm not immersed in coding or studying, I am an active member of the Chaitanya Spandhana Club at CBIT, a service club dedicated to community service and social responsibility.</p>
//             </div>
//             </div>
//         </div>


//     )

// }
// export default AboutMe;
import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me-container">
            <header className="about-me-header">
                <h1>About Me</h1>
            </header>
            <div className="about-me-content">
                <section className="bio-section">
                    <h2 className="fade-in">Who I Am</h2>
                    <p>
                        Hello! I'm Uyyala Rasagna, currently pursuing my third year of BE in Computer Science and Engineering at CBIT, Hyderabad. With a strong academic record and a CGPA of 9.95 till the 3rd semester, I am dedicated to excelling in my field and continuously expanding my knowledge and skills.
                    </p>
                </section>
                <section className="skills-section">
                    <h2 className="slide-in">What I Do</h2>
                    <p>
                        I specialize in web development and have a solid foundation in both front-end and back-end technologies. My skills include:
                    </p>
                    <ul>
                        <li><b>Programming Languages:</b> Python, Java(basics)</li>
                        <li><b>Concepts:</b> Object-Oriented Programming (OOP), Data Structures,Database Management Systems</li>
                        <li><b>Web Technologies:</b> HTML, CSS, JavaScript, React.js</li>
                        <li><b>Databases:</b> SQL, MongoDB (basics)</li>
                    </ul>
                    <p>
                        I recently completed my first virtual internship in web development at Bharat Intern, where I successfully delivered two projects. This experience allowed me to apply my theoretical knowledge in a practical setting and gain valuable insights into the industry.
                    </p>
                </section>
                <section className="philosophy-section">
                    <h2 className="fade-in">My Philosophy</h2>
                    <p>
                        I believe in the importance of continuous learning and staying updated with the latest technological advancements. My approach to any project is driven by a commitment to excellence, a passion for problem-solving, and a desire to create user-centric solutions.
                    </p>
                </section>
                <section className="extra-section">
                    <h2 className="slide-in">Outside of Work</h2>
                    <p>
                        When I'm not immersed in coding or studying, I am an active member of the Chaitanya Spandhana Club at CBIT, a service club dedicated to community service and social responsibility.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;
