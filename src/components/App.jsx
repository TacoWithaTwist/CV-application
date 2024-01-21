import '../styles/App.css';
import { useState } from 'react';
function App() {
  const [fullname, setFullname] = useState('');
  function handleFullnameChange(e) {
    setFullname(e.target.value);
  }

  return (
    <>
      <h1 className="bigHeader">Build Your CV TODAY!</h1>
      <div className="content">
        <fieldset>
          <form action="submit">
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
                *Email: <input type="mail" name="email" id="email" />
              </label>
            </div>
            <div>
              <label htmlFor="Enter your Phone Number">
                *Telephone:{' '}
                <input type="number" name="fullname" id="fullname" />
              </label>
            </div>
            <div>
              <label htmlFor="Enter your Github Profile Link">
                *Github: <input type="text" name="fullname" id="fullname" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </fieldset>
        <div className="preview">
          <h3>{fullname}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
