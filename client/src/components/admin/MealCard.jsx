import { PropTypes } from 'prop-types';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const MealCard = ({ meal, index }) => {
  return (
    <Draggable draggableId={meal.id.toString()} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardHeader title={meal.name} />
          <CardContent>
            <Typography variant="body2">{meal.description}</Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

MealCard.propTypes = {
  meal: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default MealCard;
