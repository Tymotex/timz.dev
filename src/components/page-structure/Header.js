import PropTypes from 'prop-types'
import React from 'react'
import BottomNav from './BottomNav';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Tim Zhang</h1>
                <p>
                    Here is a description of who I am. Should think about adding that type/delete css animation here. 
                    <br />
                    Here is a description of who I am. Should think about adding that type/delete css animation here
                </p>
            </div>
        </div>
        <BottomNav {...props} />
    </header>
)


Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
}


export default Header
