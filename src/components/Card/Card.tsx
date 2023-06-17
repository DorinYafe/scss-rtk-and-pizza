import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setOrder } from '../../features/order/order-slice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NumericFormat } from 'react-number-format';
import { Order } from '../../types/order';

const MuiCard = ({ id, title, description, price }: Order) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setOrder({ id, title, description, price }));
    navigate(`/order/${id}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: '1rem', cursor: 'pointer' }}
      onClick={handleClick}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <NumericFormat value={price} displayType='text' suffix='ILS' />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MuiCard;
