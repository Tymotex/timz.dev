import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <h1>Home</h1>
            <Link href="/blogs">Blogs</Link>
        </motion.div>
    );
};

export default Home;
