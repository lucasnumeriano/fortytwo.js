import { print, error } from "../core/Utils.mjs";

export function selectElement(element) {
    return document.querySelector(element);
}

export function selectAllElements(element) {
    return document.querySelectorAll(element);
}

export function addClass(elementId, clasS) {
    let element = selectElement(elementId);
    if (element) {
        if (!element.classList.contains(clasS)) {
            element.classList.add(clasS);
            print("Classe '" + clasS + "' adicionada ao elemento com ID '" + elementId + "'.");
        } else {
            print("O elemento '" + elementId + "' já possui está classe!");
        }
    } else {
        error("Elemento com ID '" + elementId + "' não encontrado!");
    }
}

export function removeClass(elementId, clasS) {
    let element = selectElement(elementId);
    if (element) {
        if (element.classList.contains(clasS)) {
            element.classList.remove(clasS);
            print("Classe '" + clasS + "' removida do elemento com ID '" + elementId + "'.");
        } else {
            print("O elemento '" + elementId + "' já possui está sem a classe!");
        }
    } else {
        error("Elemento com ID '" + elementId + "' não encontrado!");
    }
}