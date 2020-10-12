import React from "react"
import {render} from "@testing-library/react"
import Home from "./Home"

it('should be render', () => {
    const {getByText} = render(<Home/>)
    const textElement = getByText("Welcome to Student App")
    expect(textElement).toBeInTheDocument()
})
