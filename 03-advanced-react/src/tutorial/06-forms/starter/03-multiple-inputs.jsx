import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    emaill: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name="name" value={user.name} onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name="email" value={user.email} onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" value={user.password} onChange={handleChange} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
