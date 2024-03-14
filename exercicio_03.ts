type ResponseRickAndMortyApi = {
    info: { 
        count: number;
        pages: number;
        next: string | null; 
        prev: string | null;
    },
    results: ResultsRickAndMortyApi[];
}

type ResultsRickAndMortyApi = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginAndLocation[];
    location: OriginAndLocation[];
    image: string;
    episode: string[];
    url: string;
    created: string;
}

type OriginAndLocation = {
    name: string;
    url: string;
}

type Characters = {
    name: string;
    gender: string;
    image: string;
    species: string;
}

const BASE_URL = 'https://rickandmortyapi.com/api/character/'

const getCharacter = async (person: string): Promise<Characters | undefined> => {
    try {
        const data = await fetch(`${BASE_URL}?name=${person}&status=alive`)

        const dataJSON = await data.json() as ResponseRickAndMortyApi

        const { name, gender, image, species } = dataJSON.results[0]

        return { 
            name,
            gender,
            image,
            species
        }
    } catch (error) {
        console.log(error)
    }
}

export const getRickAndMortyCharacters = async (names: string[]): Promise<Characters[]> => {
    const characters: Characters[] = []

    for (const value of names) {
        const data = await getCharacter(value)

        if (data) characters.push(data)
    }

    return characters
}

getRickAndMortyCharacters(['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith']).then((characters) => {
    console.table(characters)
})