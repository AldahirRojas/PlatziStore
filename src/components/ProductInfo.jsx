import React from 'react';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
    <>
      <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      <div className={styles.ProductInfo}>
        <p className={styles.productPrice}>$35,00</p>
        <p className={styles.productTitle}>Bike</p>
        <p className={styles.productDescription}>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className={`${styles.primaryButton} ${styles.addToCartButton}`}>
          <Image src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
