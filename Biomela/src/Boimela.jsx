import BookList from "./BookList";
import Header from "./Header";
import SearchBar from "./SearchBar";
function Biomela() {
    return (
        <div className="container mx-auto p-5">
            <Header />
            <SearchBar />
            <BookList />
        </div>
    );
}

export default Biomela;
