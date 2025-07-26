import { createSelector } from '@reduxjs/toolkit';

export const selectBrands = (state) => state.filters.brands || [];

export const selectFilterState = (state) => state.filters;

export const selectFilterParams = createSelector(
    [selectFilterState],
    ({ brand, rentalPrice, minMileage, maxMileage }) => ({
        brand,
        rentalPrice,
        minMileage,
        maxMileage
    })
);
