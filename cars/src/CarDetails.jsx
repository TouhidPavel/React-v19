import PropTypes from "prop-types";
function CarDetails({ title, brand, year, price, premium }) {
    return (
        <div>
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <p>
                <span className="font-semibold">Brand: </span>
                {brand}
            </p>
            <p>
                <span className="font-semibold">Year: </span>
                {year}
            </p>
            <p>
                <span className="font-semibold">Price: </span>${price}
            </p>
            <p>
                <span className="font-semibold">Premium: </span>
                {premium ? "Yes" : "No"}
            </p>
        </div>
    );
}

CarDetails.propTypes = {
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
};
export default CarDetails;
