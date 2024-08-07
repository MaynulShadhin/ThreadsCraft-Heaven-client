import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SingleFilteredItem = ({ item }) => {

    const { name, subcategory, description, price, rating, customization, time, stock, image } = item

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center card card-side bg-base-100 shadow-xl p-4 border-2">
                <div className='md:flex-1'><figure><img className='h-[200px] md:h-[270px] lg:h-[400px] object-cover rounded-lg' src={image} alt="Movie" /></figure></div>
                <div className="card-body md:flex-1">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-medium'>{subcategory}</p>
                    <p className='text-gray-600'>{description}</p>
                    <p><span className="font-semibold">Price:</span> {price}$</p>
                    <p><span className="font-semibold">Rating:</span> {rating}</p>
                    <p><span className="font-semibold">Customization:</span> {customization}</p>
                    <p><span className="font-semibold">Processing Time:</span> {time}</p>
                    <p><span className="font-semibold">Stock Status:</span> {stock}</p>
                    <div className='space-x-4 mt-4'>
                        <Link to={`/itemDetails/${item._id}`}>
                            <button className='btn bg-amber-300 hover:bg-amber-200'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleFilteredItem.propTypes = {
    item: PropTypes.object
}
export default SingleFilteredItem;