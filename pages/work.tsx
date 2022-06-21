import { motion } from "framer-motion";
import type { NextPage } from "next";
import ContentContainer from "src/components/Container/ContentContainer";
import { Window } from "src/components/Window";
import { useRedirectHome } from "src/hooks/routerHooks";

const Work: NextPage = () => {
    const redirectToHome = useRedirectHome();

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window
                        onClickOutside={() => redirectToHome()}
                        crumbs={[
                            { title: "Home", url: "/" },
                            { title: "Work", url: "/work" },
                        ]}
                    >
                        <ContentContainer maxWidth={1200}>
                            <p>Work experience</p>
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Work;
