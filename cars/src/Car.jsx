import CarCategory from "./CarCategory";
import Header from "./Header";
import SearchBar from "./SearchBar";
function Car() {
    return (
        <div className="container mx-auto p-5">
            <Header />
            <SearchBar />
            <CarCategory />
        </div>
    );
}

export default Car;
