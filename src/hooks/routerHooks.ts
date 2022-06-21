import Router, { NextRouter, useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const useRedirectHome = () => {
    const router = useRouter();
    return useCallback(() => {
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
};

/* --------------------- Production Page Transition Fix --------------------- */
// See: https://github.com/vercel/next.js/issues/17464.
// It's still unresolved as of 2022 June 20.

const routeChange = () => {
    const tempFix = () => {
        const elements = document.querySelectorAll('style[media="x"]');
        elements.forEach((elem) => elem.removeAttribute("media"));
    };
    tempFix();
};

export const useTransitionFix = () => {
    useEffect(() => {
        Router.events.on("routeChangeComplete", routeChange);
        Router.events.on("routeChangeStart", routeChange);
    }, []);

    useEffect(() => {
        Router.router?.push(Router.router?.pathname);
    }, []);
};
