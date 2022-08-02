import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Conteúdo presente no componente Hero", () => {
    test("o parágrafo deve conter o texto correto.", () => {
        render(<Hero />);

        const paragraphContent = screen.getByText("A TEC COMPANY");
        expect(paragraphContent).toBeInTheDocument();
    });

    test("a imagem da logo deve estar presente no componente.", () => {
        render(<Hero />);

        let logo = document.getElementsByClassName("logo");
        expect(logo[0]).toBeInTheDocument;
    });

    test("a imagem do kanji deve estar presente no componente.", () => {
        render(<Hero />);

        let kanji = document.getElementsByClassName("kanji");
        expect(kanji[0]).toBeInTheDocument;
    });
});
