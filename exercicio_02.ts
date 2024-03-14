export const updateData = (currentObject: any, newDataObject: any) => {
    const objectToUpdate = currentObject

    for (const key in currentObject) {
        if(key in newDataObject) {
            objectToUpdate[key] = newDataObject[key]
        }
    }

    return {
        objectToUpdate, 
    }
}

console.table(updateData({ 
        name: "Marcos", 
        country: "Brasil", 
        age: 22 
    }, 
    { 
        country: "Japão", 
        age: 33
    }
)) // Saida: { name: 'Marcos', country: 'Japão', age: 33 }
 
console.table(updateData({ 
        name: "Marcos", 
        country: "Brasil", 
        age: 22 
    }, 
    { 
        price: 89.9, 
        amount: 15, 
        description: "camiseta 100% algodão" 
    }
)) // Saida: { name: "Marcos", country: "Brasil", age: 22 }

console.table(updateData({ 
        name: "Rafael", 
        country: "Chile", 
        age: 42 
    }, 
    { 
        name: "Camiseta Polo", 
        price: 59.9, 
        amount: 30 
    }
)) // Saida: { name: "Rafael", country: "Chile", age: 42 }