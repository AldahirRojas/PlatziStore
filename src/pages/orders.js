import React from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  const product = {
    title: 'Example product',
    price: 10.99,
    images: ['/path/to/image.jpg'], // Array con al menos una imagen
  };

  return (
    <div className={styles.Orders}>
      <div className={styles['Orders-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['Orders-content']}>
          <OrderItem product={product} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
