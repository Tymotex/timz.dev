import PropTypes from "prop-types"
import React from "react"

import { 
    AboutWindow,
    ProjectsWindow,
    BlogsWindow,
    ResumeWindow
} from "../windows";

class Main extends React.Component {    
    render() {
        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={this.props.timeout ? { display: "flex" } : { display: "none" }}
            >
                {/* Bottom navigation buttons */}
                <AboutWindow {...this.props} nameID="about" text="About" />
                <ProjectsWindow {...this.props} nameID="projects" text="Projects" />
                <BlogsWindow {...this.props} nameID="blogs" text="Blogs" />
                <ResumeWindow {...this.props} nameID="resume" text="Resume" />
            </div>
        );
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
