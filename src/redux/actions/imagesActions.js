import axios from "axios";

import { IMAGES_REQUEST, IMAGES_SUCCESS, IMAGES_FAILURE } from "../types";

export const uploadImages =
  ({ id, images }) =>
  async (dispatch) => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append("images", image));
      dispatch({ type: IMAGES_REQUEST });
      const { data } = await axios.post(`/images/upload/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch({ type: IMAGES_SUCCESS, payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: IMAGES_FAILURE,
        payload: error.message,
      });
    }
  };
