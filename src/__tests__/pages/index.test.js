import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "../../pages/index"

test("must display the correct title", () => {
  const { getByTestId } = render(<IndexPage/>)
  expect(getByTestId("title")).toHaveTextContent("Congratulations")
})