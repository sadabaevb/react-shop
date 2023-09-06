import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsListSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@mui/material";
import ProductCard from "components/ProductCard/ProductCard";
// import PropTypes from "prop-types";

const ProductsList = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.list);
  const hasMore = useSelector((state) => state.productsList.hasMore);
  const [skip, setSkip] = useState(0);

  const getData = useCallback(
    async (skip = 0) => {
      await dispatch(getProducts({ limit: 20, skip }));

      setSkip((skip) => skip + 20);
    },
    [dispatch]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={() => getData(skip)}
        hasMore={hasMore}
        height={600}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container>
          {products.map((item, index) => (
            <Grid item>
              <ProductCard product={item} />
              {index === 50} && (<h1>Reklama!!!</h1>)
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

ProductsList.propTypes = {};

export default ProductsList;
