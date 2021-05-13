const movieItem=[
    {
        id: 1,
        title: "Terminator",
        genre: "Action",
        stock: 5,
        rate: 2.5
    },
    {
        id: 2,
        title: "Dumb and Dumber",
        genre: "Comedy",
        stock: 7,
        rate: 5.5
    },
    {
        id: 3,
        title: "Raman Raghav",
        genre: "Thriller",
        stock: 4,
        rate: 5.5
    },
    {
        id: 4,
        title: "Harry Potter",
        genre: "Adventure",
        stock: 8,
        rate: 6.5
    },
    {
        id: 5,
        title: "Lord of the Rings",
        genre: "Action",
        stock: 5,
        rate: 7.5
    }
];

export function getMovies() {
    return movieItem;
}