import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/main.scss'
import { ParticleWallpaper } from '../particles';

/**
 * Renders site metadata in the HTML head. Wraps around the rest of the
 * page's contents.
 * 
 * Also renders the particles wallpaper beneath all the main content
 */
const Layout = ({ children, location }) => {
    let content = (location && location.pathname === '/') ? (
		<div>
			{children}
		</div>
	) : (
		<div id="wrapper" className="page">
			<div>
				{children}
			</div>
		</div>
	);

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <div>
                    <Helmet>
                        <title>{data.site.siteMetadata.title}</title>
                        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/Tymotex/timz.dev/master/src/images/icon.png" sizes="32x32" />
                        <html lang="en" />
                    </Helmet>
					{content}
					<div id="particles-js">
						<ParticleWallpaper />
					</div>
                </div>
            )}
        />
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Layout;
