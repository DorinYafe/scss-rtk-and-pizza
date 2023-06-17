import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import MuiCard from '../../components/Card/Card';
import MuiDialog from '../../components/Dialog/Dialog';
import Button from '@mui/material/Button';

const Order = () => {
  const navigate = useNavigate();
  const order = useAppSelector((state) => state.orders.order);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    !order && navigate('/');
  }, [order]);

  return (
    <div>
      {open && <MuiDialog open={open} />}
      {order && (
        <MuiCard
          id={order?.id}
          title={order?.title}
          description={order?.description}
          price={order?.price}
        />
      )}
      <Button
        variant='outlined'
        onClick={handleClick}
        style={{ color: '#be5f7b', borderColor: '#be5f7b', margin: '1.5rem' }}>
        Next step
      </Button>
    </div>
  );
};

export default Order;
