// 
export const getAllStocksApi = () => {
    return $.ajax({
      method: "GET",
      url: "/api/stocks",
    });
};

export const getStockApi = (id) => {
    return $.ajax({
      method: "GET",
      url: `/api/stocks/:${id}`,
    });
};

