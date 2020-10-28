import PropTypes from "prop-types"
import React from "react"
import pic02 from "../../images/pic02.jpg"
import pic03 from "../../images/pic03.jpg"

import { 
    AboutWindow,
    ProjectsWindow,
    BlogsWindow,
    ResumeWindow
} from "../windows";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            ></div>
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={this.props.timeout ? { display: "flex" } : { display: "none" }}
            >
                <AboutWindow {...this.props} nameID="about" text="About" />
                <ProjectsWindow {...this.props} nameID="projects" text="Projects" />
                <BlogsWindow {...this.props} nameID="blogs" text="Blogs" />
                <ResumeWindow {...this.props} nameID="resume" text="Resume" />
                


                <article
                    id="contact"
                    className={`${this.props.article === "contact" ? "active" : ""} ${
                        this.props.articleTimeout ? "timeout" : ""
                    }`}
                    style={{ display: "none" }}
                >
                    <h2 className="major">Contact</h2>
                    <form method="post" action="#">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                        <ul className="actions">
                            <li>
                                <input type="submit" value="Send Message" className="special" />
                            </li>
                            <li>
                                <input type="reset" value="Reset" />
                            </li>
                        </ul>
                    </form>
                    <ul className="icons">
                        <li>
                            <a
                                href="https://twitter.com/HuntaroSan"
                                className="icon fa-twitter"
                            >
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://codebushi.com" className="icon fa-facebook">
                                <span className="label">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://codebushi.com" className="icon fa-instagram">
                                <span className="label">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/codebushi/gatsby-starter-dimension"
                                className="icon fa-github"
                            >
                                <span className="label">GitHub</span>
                            </a>
                        </li>
                    </ul>
                    {close}
                </article>
            </div>
        )
    }
}


Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}


export default Main
