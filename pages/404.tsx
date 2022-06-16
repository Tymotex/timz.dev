import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import Breadcrumbs from "src/components/Breadcrumbs";
import { Button, LinkButton } from "src/components/Button";
import CentralContainer from "src/components/Container/CentralContainer";
import ContentContainer from "src/components/Container/ContentContainer";
import { HStack, VStack } from "src/components/Stack";

const NotFoundPage: NextPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CentralContainer>
                <ContentContainer centerContents>
                    <h1>404</h1>
                    <LinkButton href="/" text="Go Home" />
                </ContentContainer>
            </CentralContainer>
        </motion.div>
    );
};

export default NotFoundPage;
