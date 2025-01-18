function Filter() {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id="checkbox"
                className="text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="checkbox" className="text-gray-700">
                Show Premium Only
            </label>
        </div>
    );
}

export default Filter;
