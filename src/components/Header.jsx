import PropTypes from 'prop-types'

function Header({ text, bgColor, textcolor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textcolor,
  }
  
  return (
    <header style={headerStyles}>
       <div className='container'>
         <h2>{text}</h2>
       </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Ramaan',
  bgColor: 'rgba(0,0,0,0.4)',
  textcolor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textcolor: PropTypes.string,
}

export default Header
