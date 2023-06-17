import { useAppSelector } from '../../app/hooks';
import MuiCard from '../../components/Card/Card';
import { Order } from '../../types/order';
import classes from './Home.module.scss';

const Home = () => {
  const orders = useAppSelector((state) => state.orders.ordersList);

  return (
    <div className={classes.home_container}>
      {orders.map(({ id, title, description, price }: Order) => {
        return (
          <div key={id}>
            <MuiCard
              id={id}
              title={title}
              description={description}
              price={price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
