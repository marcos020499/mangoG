import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

import Product from './Product/Product';
import useStyles from './styles';
import Slider from '../Slider/Sliter';



const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Slider/>
      <Grid>
        {products.map((product) => (
          <ProductC key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </ProductC>
        ))}
      </Grid>
    </main>
  );
};
const ProductC = styled(Grid)`
margin-top: 2%;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 32%;

`;
export default Products;

