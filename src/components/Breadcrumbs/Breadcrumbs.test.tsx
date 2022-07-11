import { render, screen } from "@testing-library/react";
import { expect } from "src/util/jestGlobals";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
    test("All crumbs are rendered", () => {
        render(
            <Breadcrumbs
                crumbs={[
                    { title: "Home", url: "/" },
                    { title: "Projects", url: "/projects" },
                    {
                        title: "My Sentient Robot",
                        url: "/projects/my-sentient-robot",
                    },
                ]}
            />,
        );
        const home = screen.getByText(/Home/i);
        const projects = screen.getByText(/Projects/i);
        const sentientRobot = screen.getByText(/My Sentient Robot/i);
        expect(home).toBeInTheDocument();
        expect(projects).toBeInTheDocument();
        expect(sentientRobot).toBeInTheDocument();
    });

    test("Last crumb should indicate current page location", () => {
        render(
            <Breadcrumbs
                crumbs={[
                    { title: "Home", url: "/" },
                    { title: "Projects", url: "/projects" },
                    {
                        title: "My Sentient Robot",
                        url: "/projects/my-sentient-robot",
                    },
                ]}
            />,
        );
        const home = screen.getByText(/Home/i);
        const projects = screen.getByText(/Projects/i);
        const lastCrumb = screen.getByText(/My Sentient Robot/i);

        expect(home).not.toHaveAttribute("aria-current", "location");
        expect(projects).not.toHaveAttribute("aria-current", "location");
        expect(lastCrumb).toHaveAttribute("aria-current", "location");
    });
});
