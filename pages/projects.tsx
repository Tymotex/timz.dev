import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback } from "react";
import ChipGroup from "src/components/ChipGroup";
import { Window } from "src/components/Window";

const Projects: NextPage = () => {
    const router = useRouter();

    const redirectToHome = useCallback(() => {
        router.push(
            {
                pathname: "/",
            },
            undefined,
            // By default, Next.js will force scroll to the top. This can be
            // disabled. See: https://stackoverflow.com/questions/65902664/next-js-router-push-without-scrolling-to-the-top.
            { scroll: false },
        );
    }, [router]);

    return (
        <>
            <motion.div>
                <div style={{ position: "relative" }}>
                    <Window onClickOutside={() => redirectToHome()}>
                        <h1>Projects</h1>
                        <Link href="/">Home</Link>
                        <ChipGroup
                            technologies={["python", "javascript", "ruby"]}
                        />
                        {[...Array(10)].map((_, i) => (
                            <Fragment key={i}>
                                <p>
                                    Cupidatat nulla ex deserunt velit do velit
                                    incididunt amet qui. Tempor officia culpa
                                    sit amet consectetur. Sunt veniam anim eu
                                    nisi sint ipsum. Amet laboris pariatur nulla
                                    mollit sint officia. Officia magna commodo
                                    reprehenderit aute excepteur.
                                </p>
                                <p>
                                    Lorem veniam nulla eiusmod et quis voluptate
                                    anim nisi. Nisi tempor esse ex culpa sint
                                    esse adipisicing consequat tempor mollit
                                    cupidatat occaecat esse ipsum. Deserunt
                                    nulla sunt labore ipsum commodo anim
                                    proident nostrud non velit officia aute
                                    incididunt mollit.
                                </p>
                                <p>
                                    Eu deserunt ea tempor sunt excepteur cillum
                                    eiusmod non nulla aliquip eu qui irure. Ex
                                    aliqua enim est id consequat pariatur ut do
                                    laboris. Id sit est cupidatat labore
                                    proident. Fugiat aliqua aute excepteur non
                                    Lorem mollit aute esse dolore ipsum eu est
                                    dolore. Nulla culpa ipsum nulla labore
                                    nostrud adipisicing et ad. Occaecat proident
                                    magna qui in. Aliqua ut cillum ea pariatur
                                    voluptate magna laborum laborum.
                                </p>
                            </Fragment>
                        ))}
                    </Window>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;
