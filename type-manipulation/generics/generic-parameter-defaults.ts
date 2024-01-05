declare function create <T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): [T, U[]]

const div = create()

const p = create(new HTMLParagraphElement(), [new HTMLSpanElement()])