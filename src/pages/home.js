import React from "react";
import Layout from "../components/page-structure/Layout";
import Header from "../components/page-structure/Header";
import Main from "../components/page-structure/Main";
import Footer from "../components/page-structure/Footer";
import PropTypes from "prop-types";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",
        };
        this.handleOpenArticle = this.handleOpenArticle.bind(this);
        this.handleCloseArticle = this.handleCloseArticle.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" });
        }, 100);
        if (this.props.targetWindow) {
            const targetWindow = this.props.targetWindow.toLowerCase();
            if (
                targetWindow === "projects" ||
                targetWindow === "about" ||
                targetWindow === "contact"
            ) {
                this.handleOpenArticle(this.props.targetWindow);
            }
        }
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article,
        });

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout,
            });
        }, 325);

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout,
            });
        }, 350);
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout,
        });

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout,
            });
        }, 325);

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: "",
            });
        }, 350);
    }

    render() {
        return (
            <Layout location={this.props.location}>
                <div
                    className={`body ${this.state.loading} ${
                        this.state.isArticleVisible ? "is-article-visible" : ""
                    }`}
                >
                    <div id="wrapper">
                        <Header
                            onOpenArticle={this.handleOpenArticle}
                            timeout={this.state.timeout}
                        />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                            setWrapperRef={this.setWrapperRef}
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>
                    <div id="bg"></div>
                </div>
            </Layout>
        );
    }
}

HomePage.propTypes = {
    targetWindow: PropTypes.string,
};

export default HomePage;
