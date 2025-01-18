import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

function CarItem({ car }) {
    return (
        <div className="p-5 border rounded-lg shadow w-[400px]">
            <CarDetails
                title={car.title}
                brand={car.brand}
                year={car.year}
                price={car.price}
                premium={car.isPremium}
            />
        </div>
    );
}

CarItem.propTypes = {
    car: PropTypes.shape({
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
    }).isRequired,
};
export default CarItem;
