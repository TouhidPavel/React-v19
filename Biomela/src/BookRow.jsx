import PropTypes from "prop-types";
import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
function BookRow({ book }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <BookDetails title={book.title} author={book.author} />
            <FeatureBook />
        </div>
    );
}

BookRow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }).isRequired
};

export default BookRow;
