import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ContactForm } from "src/components/ContactForm";
import ContentContainer from "src/components/Container/ContentContainer";
import { SectionDivider } from "src/components/Divider";
import { Window } from "src/components/Window";
import { useRedirectHome } from "src/hooks/routerHooks";
import styles from "./Contact.module.scss";

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
                        <SectionDivider text="Contact Me" />
                        <ContentContainer
                            maxWidth="35rem"
                            padding="0"
                            textAlign="center"
                        >
                            <p className={styles.description}>
                                Feel free to reach out to me if you have a
                                question or just want to connect!
                            </p>
                        </ContentContainer>
                        <ContentContainer maxWidth={1200} padding={"24px 48px"}>
                            <ContactForm />
                        </ContentContainer>
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Contact;
