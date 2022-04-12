import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../context/user/currentUserActions'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const { firstName, lastName, email, password } = formData

  const navigate = useNavigate()
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const callSignUp = async () => {
      const response = await signUp(e, formData)
      // TODO onSignin banner
    }
    callSignUp()
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Sign In</p>
        </header>

        <form onSubmit={onSubmit}>
        <input 
            type='text' 
            className='nameInput' 
            placeholder='First Name' 
            id='firstName' 
            value={firstName} 
            onChange={onChange}
          /><br/>
        
        <input 
            type='text' 
            className='nameInput' 
            placeholder='Last Name' 
            id='lastName' 
            value={lastName} 
            onChange={onChange}
          /><br/>

          <input
            type='email' 
            className='emailInput' 
            placeholder='Email' 
            id='email' 
            value={email} 
            onChange={onChange} 
          />

        <div className='passwordInputDiv'>
          <input 
            type={showPassword ? 'text' : 'password'} 
            className='passwordInput' 
            placeholder='Password' 
            id='password' 
            value={password} 
            onChange={onChange} 
          />
          <img 
            src={visibilityIcon} 
            alt='show password' 
            className='showPassword' 
            onClick={() => setShowPassword((prevState) => !prevState)} 
          />
        </div>
        
        <div className='signInBar'>
            <p className='signInText'>
              Sign Up
            </p>
            <button className='signInButton' type='submit' value='submit'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <Link to='/sign-in' className='registerLink'>
          Sign In Instead
        </Link>

      </div>
    </>
  )
}

export default SignUp