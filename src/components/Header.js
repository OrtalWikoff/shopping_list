import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom"
import Button from './Button'

const Header = ({ title , onAdd, showAdd}) => {
    const location = useLocation()
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname=== "/" && (
        <Button 
        color = {showAdd ? "blue" : "purple"}
        text={showAdd ? "close" : "Add"}
        onClick= {onAdd}
        />
        )}
    </header>
  )
}

Header.defaultProps = {
    title: "Shopping List",
}

export default Header
