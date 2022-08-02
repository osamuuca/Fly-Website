import { render, screen } from "@testing-library/react";
import NavBar from "./Navbar";

describe("Verificaç~ao do conteúdo da navbar", () => {
    test("Verificar se o navlink está exibindo o nome corretamente", () => {
        render(<NavBar />);

        const Navlink = screen.getByText("ABOUT US");
        expect(Navlink).toBeInTheDocument();
    });

    test("Verificar se o navlink está exibindo o nome corretamente", () => {
        render(<NavBar />);

        const Navlink = screen.getByText("PROJECTS");
        expect(Navlink).toBeInTheDocument();
    });
    
    test("Verificar se o navlink está exibindo o nome corretamente", () => {
        render(<NavBar />);

        const Navlink = screen.getByText("OUR TEAM");
        expect(Navlink).toBeInTheDocument();
    });

    
});
