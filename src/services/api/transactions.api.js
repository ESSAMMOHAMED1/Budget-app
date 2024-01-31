import axiosApi from "./axiosApi";

export const getTransactions = async () => {
  const { data } = await axiosApi.get('/transactions')
  return data
}