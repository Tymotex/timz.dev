import React from 'react'
import PropTypes from 'prop-types'


const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
            
        </p>

        <ul className="icons">
            <li>
                <a
                    href="https://github.com/Tymotex"
                    className="icon fa-github"
                >
                    <span className="label">GitHub</span>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCIuefX9zQPux3lGCkDOdlIQ" className="icon fa-youtube">
                    <span className="label">YouTube</span>
                </a>
            </li>
            <li>
                <a href="https://play.google.com/store/apps/developer?id=Tymoteus" className="icon fa-play">
                    <span className="label">Google Play</span>
                </a>
            </li>
        </ul>
    </footer>
)


Footer.propTypes = {
        timeout: PropTypes.bool
}


export default Footer
