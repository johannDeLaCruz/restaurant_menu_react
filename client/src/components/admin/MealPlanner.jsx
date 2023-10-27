import { PropTypes } from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import MealCard from './MealCard';

const MealPlanner = ({ meals, setMeals }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedMeals = Array.from(meals);
    const [movedMeal] = updatedMeals.splice(result.source.index, 1);
    updatedMeals.splice(result.destination.index, 0, movedMeal);
    setMeals(updatedMeals);
  };

  return (
    <Droppable droppableId="meals" onDragEnd={handleDragEnd}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {meals.map((meal, index) => (
            <MealCard key={meal.id} meal={meal} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

MealPlanner.propTypes = {
  meals: PropTypes.array.isRequired,
  setMeals: PropTypes.func.isRequired,
}

export default MealPlanner;
