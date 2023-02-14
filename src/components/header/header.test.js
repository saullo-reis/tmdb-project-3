import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./header"
import '@testing-library/jest-dom'

describe('Header', () => {
    it('testando logo e input', () => {
        render(<BrowserRouter><Header /></BrowserRouter>)

        expect(screen.getByTestId('logo')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Título do filme')).togit BeInTheDocument()
    })
})