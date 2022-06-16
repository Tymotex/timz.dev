import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import CentralContainer from "src/components/Container/CentralContainer";

const Home: NextPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CentralContainer>
                <h1>Home</h1>
                <Link href="/blogs">Blogs</Link>
                <Link href="/projects">Projects</Link>
            </CentralContainer>
        </motion.div>
    );
};

export default Home;
