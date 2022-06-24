import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { LinkButton } from "src/components/Button";
import CentralContainer from "src/components/Container/CentralContainer";
import ContentContainer from "src/components/Container/ContentContainer";
import { ErrorPage } from "src/components/Error";
import styles from "./404.module.scss";

const NotFoundPage: NextPage = () => {
    const router = useRouter();
    const notFoundPath = router ? router.asPath : "";

    return (
        <ErrorPage
            errorMessage={"Couldn't find anything at that URL."}
            homeUrl="/"
            errorCode="404"
        />
    );
};

export default NotFoundPage;
