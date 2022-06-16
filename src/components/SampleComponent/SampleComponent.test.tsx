import { render, screen } from "@testing-library/react";
import SampleComponent from "./SampleComponent";

describe("a", () => {
    test("that it works", () => {
        render(<SampleComponent text="Testing..." />);
        const sampleComponent = screen.getByTestId("sample-component");
        expect(sampleComponent).toBeInTheDocument;
    });
});
