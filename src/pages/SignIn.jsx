import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import CurrentUserContext from '../context/user/currentUserContext'
import { signIn } from '../context/user/currentUserActions'
import { getCurrentUser } from '../context/user/currentUserActions'
 
function SignIn() {
  const { currentUser, dispatch } = useContext(CurrentUserContext)

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const navigate = useNavigate()
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const postSignIn = async () => {
      const response = await signIn(e, formData)
      if (response.status === 200) {
        dispatch({type: 'SIGNED_IN'})
        getCurrentUserInfo() 
      } 
    }
    const getCurrentUserInfo = async () => {
      const response = await getCurrentUser()
      dispatch({type: 'CURRENT_USER', payload: response.data})
      navigate('/')
    }
    postSignIn()
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Sign In</p>
        </header>

        <form onSubmit={onSubmit}>
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
              Sign In
            </p>
            <button className='signInButton' type='submit' value='submit'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        
        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>

      </div>
    </>
  )
}

export default SignIn