
export const selectCar = (state) => state.car.cars || [];
export const selectLoading = (state) => state.car.loading;
export const selectError = (state) => state.car.error;
export const selectHasMore = (state) => state.car.hasMore;