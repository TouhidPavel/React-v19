import Filter from "./Filter";
import Search from "./Search";
function SearchBar() {
    return (
        <div className="flex items-center gap-5 mb-5">
            <Search />
            <Filter />
        </div>
    );
}

export default SearchBar;
