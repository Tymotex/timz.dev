import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import Breadcrumbs from "src/components/Breadcrumbs";
import CentralContainer from "src/components/Container/CentralContainer";
import ContentContainer from "src/components/Container/ContentContainer";
import { HStack, VStack } from "src/components/Stack";

const Home: NextPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CentralContainer>
                <ContentContainer>
                    <aside>Hi there, I'm</aside>
                    <h1>Tim Zhang.</h1>

                    <p style={{ textAlign: "justify" }}>
                        Do et irure sint velit consequat officia. Irure cillum
                        ex in culpa ullamco proident deserunt enim eiusmod. Ut
                        id laborum occaecat cupidatat ad dolore mollit occaecat
                        sunt cillum. Labore id enim laborum minim consectetur
                        nisi minim incididunt nisi deserunt magna. Sint aliqua
                        Lorem pariatur consequat pariatur magna irure. Labore
                    </p>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/projects">Projects</Link>
                </ContentContainer>
            </CentralContainer>
        </motion.div>
    );
};

export default Home;
