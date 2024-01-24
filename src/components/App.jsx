import '../styles/App.css';
import { useState } from 'react';
import Preview from './Preview.jsx';
function App() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');
  const [job, setJob] = useState('');
  const [university, setUniversity] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [degree, setDegree] = useState('');
  const [gradDate, setGradDate] = useState('14/04/2004');
  function handleFullnameChange(e) {
    setFullname(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleGithubChange(e) {
    setGithub(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleJobChange(e) {
    setJob(e.target.value);
  }
  function handleUniversityChange(e) {
    setUniversity(e.target.value);
  }
  function handleLinkedInChange(e) {
    setLinkedIn(e.target.value);
  }
  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }
  function handleGradDateChange(e) {
    setGradDate(e.target.value);
  }
  // function previewImage() {
  //   var preview = document.getElementById('preview');
  //   var fileInput = document.getElementById('imageInput');
  //   var file = fileInput.files[0];

  //   if (file) {
  //     var reader = new FileReader();

  //     reader.onload = function (e) {
  //       preview.src = e.target.result;
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     preview.src = '#';
  //   }
  // }
  return (
    <>
      <h1 className="bigHeader">Build Your CV TODAY!</h1>
      <div className="content">
        <fieldset>
          <form
            method="post"
            action="submit"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <label htmlFor="Fields with * are required" className="red">
              Fields with * are required
            </label>
            <div>
              <label htmlFor="Enter your Fullname">
                *Fullname:{' '}
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={fullname}
                  onChange={handleFullnameChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="Enter your Email">
                *Email:{' '}
                <input
                  type="mail"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="Enter your Phone Number">
                *Telephone:{' '}
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="LinkedIn">
                linkedIn:
                <input
                  type="text"
                  name="LinkedIn"
                  id="LinkedIn"
                  value={linkedIn}
                  onChange={handleLinkedInChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="Enter your Github Profile Link">
                *Github:{' '}
                <input
                  type="text"
                  name="github"
                  id="github"
                  value={github}
                  onChange={handleGithubChange}
                />
              </label>
            </div>
            {/* <div>
              <label htmlFor="imageInput">Choose your picture:</label>
              <input
                type="file"
                id="imageInput"
                name="image"
                accept="image/*"
              ></input>
              <input
                type="submit"
                value="Upload"
                onChange={previewImage}
              ></input>
            </div> */}
            <div>
              <label htmlFor="job Title">
                Job Title:
                <input
                  type="text"
                  name="job"
                  id="job"
                  value={job}
                  onChange={handleJobChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="University">
                University:
                <input
                  type="text"
                  name="university"
                  id="university"
                  value={university}
                  onChange={handleUniversityChange}
                />
              </label>
              <label htmlFor="degree">
                Degree:
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  value={degree}
                  onChange={handleDegreeChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="graduation date">
                <input
                  type="date"
                  name="gradDate"
                  id="gradDate"
                  value={gradDate}
                  onChange={handleGradDateChange}
                />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </fieldset>
        <div className="previewContainer">
          <Preview
            fullname={fullname}
            email={email}
            phone={phone}
            github={github}
            job={job}
            linkedIn={linkedIn}
            university={university}
            degree={degree}
            gradDate={gradDate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
