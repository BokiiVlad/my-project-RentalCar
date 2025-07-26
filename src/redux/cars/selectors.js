
export const selectCar = (state) => state.cars.cars || [];
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectHasMore = (state) => state.cars.hasMore;
export const selectPage = (state) => state.cars.page;