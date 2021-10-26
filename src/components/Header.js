import PropTypes from 'prop-types'



const Header = ({ title }) => {
    return (
        <header>
            <h1 >{title}</h1>
            <button></button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tasck'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red'
}
export default Header
