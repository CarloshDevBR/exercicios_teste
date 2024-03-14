export const checkIfTheFirstLetterIsUppercase = (word: string): boolean => {
    const firstLetter: string = word.slice(0, 1)
    
    const validateCase:  boolean = word.startsWith(firstLetter.toUpperCase())

    return validateCase
}

console.table({
    output_01: checkIfTheFirstLetterIsUppercase("Brasil"), // Saída: true
    output_02: checkIfTheFirstLetterIsUppercase("mobiauto"), // Saída: false
    output_03: checkIfTheFirstLetterIsUppercase("xXx xXx"), // Saída: false
    output_04: checkIfTheFirstLetterIsUppercase("xDD"), // Saída: false
    output_05: checkIfTheFirstLetterIsUppercase("Deu Certo!"), // Saída: true
})