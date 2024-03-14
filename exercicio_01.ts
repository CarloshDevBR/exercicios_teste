export const maskify = (value: string): string => {
    if (value.length <= 4) return value

    const lastFour = value.slice(-4)

    const cutString: string = value.slice(0, -4)

    const handledString: string = cutString.replace(/./g, '#');

    return `${handledString}${lastFour}`
}

console.table({
    output_01: maskify('4556364607935616'), // Saída: ############5616
    output_02: maskify('64607935616'), // Saída: ######5616"
    output_03: maskify('1'), // Saída: 1
    output_04: maskify('Skippy'), // Saída: ##ippy
    output_05: maskify('Nanananananananananana Batman!'), // Saída: ##########################man!
})