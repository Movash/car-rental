import React, { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { Container } from 'styles/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getTotalAdverts} from '../../redux/adverts/thunks';
import Loader from 'components/Loader/Loader';
import { advertsSlice } from '../../redux/adverts/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app);
  const page = useSelector(state => state.adverts.page);
  const make = useSelector(state => state.adverts.make);

  useEffect(() => {
    dispatch(getTotalAdverts({make: make}));
  }, [dispatch, make]);

  useEffect(() => {
    const startPage = 1;
    dispatch(getFilter({ page: startPage }));
    return () => {
      dispatch(advertsSlice.actions.setPage(startPage));
      dispatch(advertsSlice.actions.clearAdverts());
      dispatch(advertsSlice.actions.clearMake());
    };
  }, [dispatch]);

  const handleClick = () => {
    const nextPage = page + 1;
    dispatch(advertsSlice.actions.setPage(nextPage));
    if (make) {
      dispatch(getFilter({ make: make, page: nextPage }));
    } else {
      dispatch(getFilter({ page: nextPage }));
    }
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <Filter />
      <AdvertsList onClick={handleClick} />
    </Container>
  );
};

export default CatalogPage;
