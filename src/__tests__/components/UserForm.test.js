import React from "react"
import { render } from "@testing-library/react"
import UserForm from "../../components/UserForm"

test("must display the correct title", () => {
  const { getByTestId } = render(<UserForm/>)
  expect(getByTestId("title")).toHaveTextContent("Cadastrar Novo Usuário")
})