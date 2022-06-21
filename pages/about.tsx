import { motion } from "framer-motion";
import type { NextPage } from "next";
import ContentContainer from "src/components/Container/ContentContainer";
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
                        onClickOutside={() => redirectToHome()}
                        crumbs={[
                            { title: "Home", url: "/" },
                            { title: "About", url: "/about" },
                        ]}
                    >
                        <SectionDivider text="Who am I?" />
                        <ContentContainer maxWidth={1200}>
                            <p>Hello world</p>
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default About;
