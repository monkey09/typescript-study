type toUpper<T extends string> = `${Uppercase<T>}-hello`

type toLower<T extends string> = `${Lowercase<T>}-hello`

type capitalize<T extends string> = `${Capitalize<T>}-hi`

type unCapitalize<T extends string> = `${Uncapitalize<T>}-hi`

type test = "hAsHim"

type upperTest = toUpper<test>
type lowerTest = toLower<test>
type capTest = capitalize<test>
type unCapTest = unCapitalize<test>
