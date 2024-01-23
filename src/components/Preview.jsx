import Proptypes from 'prop-types';
import '../styles/Preview.css';
function Preview(props) {
  return (
    <>
      <header>
        <h1>{props.fullname}</h1>
        <p>{props.job}</p>
      </header>

      <section className="section">
        <h2>Contact Information</h2>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <p>LinkedIn: {props.linkedIn}</p>
        <p>GitHub: {props.github}</p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <p>
          {/* <strong>{props.university}</strong> - {props.degree}({props.gradDate}) */}
        </p>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <p>
          {/* <strong>{props.company}</strong> - {props.positionCompany} (
          {props.workStart} -{props.workEnd}) */}
        </p>
        <ul>
          {/* <li>{props.achievement1}</li>
          <li>{props.achievement2}</li> */}
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          {/* <li>{props.skill1}</li> */}
          {/* <li>{props.skill2}</li> */}
          {/* <li>{props.skill3}</li>
          <li>{props.skill4}</li>
          <li>{props.skill5}</li> */}
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <p>
          {/* <strong>{props.project}</strong>
          {props.project.description} */}
        </p>
        <p>
          {/* <strong>{props.project}</strong> - {props.project.description} */}
        </p>
      </section>
    </>
  );
}
Preview.propTypes = {
  fullname: Proptypes.string,
  email: Proptypes.string,
  phone: Proptypes.string,
  github: Proptypes.string,
  job: Proptypes.string,
  linkedIn: Proptypes.string,
};
export default Preview;
