import { useEffect } from "react";
import CarList from "../../components/CarList/CarList.jsx";
import { selectCar } from "../../redux/cars/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/cars/operations.js";
import Filters from "../../components/Filters/Filters.jsx";
import ButMore from "../../components/ButMore/ButMore.jsx";
import { selectHasMore } from "../../redux/cars/selectors.js";
import LayoutForCatalog from "../../components/LayoutForCatalog/LayoutForCatalog.jsx";
import { selectPage } from "../../redux/cars/selectors.js";
import { selectFilterParams } from "../../redux/filters/selectors.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCar);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilterParams);

  useEffect(() => {
    dispatch(fetchCar({ page, filter }));
  }, [dispatch, page, filter]);

  return (
    <>
      <LayoutForCatalog>
        <Filters />
        {cars.length > 0 ? <CarList /> : <p>Car not found.</p>}
        {hasMore && <ButMore />}
      </LayoutForCatalog>
    </>
  );
};

export default CatalogPage;
