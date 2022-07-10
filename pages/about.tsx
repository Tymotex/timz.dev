import portfolio from "content/portfolio/portfolio";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import SectionDivider from "src/components/Divider/SectionDivider";
import { Window } from "src/components/Window";
import { useRedirectHome } from "src/hooks/routerHooks";

const About: NextPage = () => {
    const redirectToHome = useRedirectHome();

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window
                        crumbs={[
                            { title: "Home", url: "/" },
                            { title: "About", url: "/about" },
                        ]}
                    >
                        <SectionDivider text="Who am I?" />
                        <portfolio.profile.AboutMe />
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default About;
