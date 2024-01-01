import React from "react";
import "./teamm.css";
const teamMembers = [
  {
    name: "Hammad Mehmood",
    role: "Co.Founder",
    experience: "10 years",
    socialIcons: [
      { iconClass: "fab fa-facebook-f", link: "#" },
      { iconClass: "fab fa-twitter", link: "#" },
      { iconClass: "fab fa-linkedin-in", link: "#" },
    ],
    imgSrc: "/assets/about1.jpg",
  },
  {
    name: "Daniyal Tariq",
    role: "Co. Founder",
    experience: "9 years",
    socialIcons: [
      { iconClass: "fab fa-facebook-f", link: "#" },
      { iconClass: "fab fa-twitter", link: "#" },
      { iconClass: "fab fa-linkedin-in", link: "#" },
    ],
    imgSrc: "/assets/about1.jpg",
  },
  {
    name: "Ahmad Ali",
    role: "Co. Founder",
    experience: "8 years",
    socialIcons: [
      { iconClass: "fab fa-facebook-f", link: "#" },
      { iconClass: "fab fa-twitter", link: "#" },
      { iconClass: "fab fa-linkedin-in", link: "#" },
    ],
    imgSrc: "/assets/about1.jpg",
  },
  {
    name: "Aghmaz asad Sani",
    role: "Software Engineer",
    experience: "5 years",
    socialIcons: [
      { iconClass: "fab fa-facebook-f", link: "#" },
      { iconClass: "fab fa-twitter", link: "#" },
      { iconClass: "fab fa-linkedin-in", link: "#" },
    ],
    imgSrc: "/assets/about1.jpg",
  },
  // Add more team members here
];

const Team = () => {
  return (
    <div className="container">
      <div className="row p-2">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-lg-3">
            <div className="our-team">
              <div className="team-image">
                <img src={member.imgSrc} alt={`Team Member ${index + 1}`} />
                <ul className="social">
                  {member.socialIcons.map((socialItem, i) => (
                    <li key={i}>
                      <a href={socialItem.link}>
                        <i className={socialItem.iconClass}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="team-info">
                <h3 className="team-title">{member.name}</h3>
                <span className="team-post">{member.role}</span>
                {/* <p className="team-description">{member.experience}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
