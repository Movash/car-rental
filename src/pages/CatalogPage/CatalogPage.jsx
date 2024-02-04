import React, { useState, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { Container } from 'styles/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/thunks';
import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.app)
  const [filters, setFilters] = useState({page: 1});

  useEffect(() => {
    dispatch(getAllAdverts({ page: filters.page}));
  }, [dispatch, filters.page]);

  const handleClick = () => {
    const nextPage = filters.page + 1
    setFilters({ page: nextPage });
  }

  return (
    <Container>
      {isLoading && <Loader />}
      <Filter />
      <AdvertsList filters={filters} onClick={handleClick} />
    </Container>
  );
};

export default CatalogPage;
