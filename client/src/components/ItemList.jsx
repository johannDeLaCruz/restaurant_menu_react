import PropTypes from 'prop-types';

const MenuList = ({ meals }) => {
  return (
    <div>
      {meals.map((item, index) => (
        <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </div>
  );
};

MenuList.propTypes = {
  meals: PropTypes.array.isRequired,
};

export default MenuList;
