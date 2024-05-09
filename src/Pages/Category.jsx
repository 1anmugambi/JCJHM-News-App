import PropTypes from 'prop-types';

const Category = ({category}) => {
    return (
        <div style={{minHeight: "100vh"}}>{category}</div>
    )
}

Category.propTypes = {
    category: PropTypes.string.isRequired
};

export default Category