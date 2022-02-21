import PropTypes from 'prop-types';
import React from 'react';

import { AboutWindow, WorkWindow, ProjectsWindow, BlogsWindow, ContactWindow } from '../windows';

const Main = props => {
    return (
        <div
            ref={props.setWrapperRef}
            id="main"
            style={props.timeout ? { display: 'flex' } : { display: 'none' }}
        >
            {/* Bottom navigation buttons */}
            <AboutWindow {...props} nameID="about" text="About Me" />
            <WorkWindow {...props} nameID="work" text="Work Experience" />
            <ProjectsWindow {...props} nameID="projects" text="Projects" />
            <BlogsWindow {...props} nameID="blogs" text="Blogs" />
            <ContactWindow {...props} nameID="contact" text="Contact" />
        </div>
    );
};

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
