import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ContactForm } from "src/components/ContactForm";
import ContentContainer from "src/components/Container/ContentContainer";
import { SectionDivider } from "src/components/Divider";
import { Window } from "src/components/Window";
import { useRedirectHome } from "src/hooks/routerHooks";

const Contact: NextPage = () => {
    const redirectToHome = useRedirectHome();

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window
                        crumbs={[
                            { title: "Home", url: "/" },
                            { title: "Contact", url: "/contact" },
                        ]}
                    >
                        <ContentContainer maxWidth={1200}>
                            <SectionDivider text="Contact Me" />
                            <ContactForm />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Contact;
