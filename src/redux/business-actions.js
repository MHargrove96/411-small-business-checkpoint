import { businessActions } from "./business-slice";

export const fetchbusinessesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(process.env.PUBLIC_URL + "/businesses.json");
      if (!response.ok) {
        throw new Error("could not fetch Data");
      }
      const data = response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(businessActions.fetchBusinesses(data));
    } catch (error) {
      console.log(error);
    }
  };
};
