import '../styles/App.css';
import { useState } from 'react';
function App() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');
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
  function previewImage() {
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('imageInput');
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      preview.src = '#';
    }
  }
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
            <div>
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
            </div>
            <button type="submit">Submit</button>
          </form>
        </fieldset>
        <div className="preview">
          <div className="cvContainer">
            <h3>{fullname}</h3>
            <div className="horLine"></div>
            <span>{email}</span>
            <span>{phone}</span>
            <span>{github}</span>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
