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
        // Doing `router.push(router.pathname)` causes an href invalidation
        // error. The workaround for this is do `router.push(router.asPath)`,
        // however this causes infinite redirection on single-level non-existent
        // paths like `/hello-world`. The workaround of the workaround is to
        // conditionally use `pathname` or `asPath` based on URL nest level.
        //
        // See: https://github.com/vercel/next.js/discussions/33243
        const path = Router.router?.pathname || "";
        const nestLevel = path.split("/").length - 1;

        // For some reason, invoking router.push does not propagate the original
        // query parameters, so we need to extract them and explicitly attach
        // them on the `push` invocation below.
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        Router.router?.push({
            pathname:
                nestLevel === 1
                    ? Router.router?.pathname
                    : Router.router?.asPath,
            query: params,
        });
    }, [Router.router]);
};
