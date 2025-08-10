import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import React from "react";

describe("add two numbers",()=>{
    it("adds up 1 and 2",()=>{
        render(<Calculator arr={[1,2]}/>);
        expect(screen.getByText("3")).toBeInTheDocument();
    })
})