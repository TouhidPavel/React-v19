import BookRow from "./BookRow";

// Mock Book Data for Books
const BOOKS = [
    {
        id: 1,
        title: "Lal Shalu",
        author: "Shawkat Osman",
        featured: false
    },
    {
        id: 2,
        title: "Khelna Khela",
        author: "Zahir Raihan",
        featured: false
    },
    {
        id: 3,
        title: "The Inheritance of Loss",
        author: "Kiran Desai",
        featured: false
    },
    {
        id: 4,
        title: "Nirbachito Rachana",
        author: "Humayun Ahmed",
        featured: false
    },
    {
        id: 5,
        title: "Pather Dabi",
        author: "Bankim Chandra Chattopadhyay",
        featured: false
    }
];

function BookList() {
    return (
        <ul className="space-y-5">
            {BOOKS.map((book) => (
                <li key={book.id}>
                    <BookRow book={book} />
                </li>
            ))}
        </ul>
    );
}

export default BookList;
