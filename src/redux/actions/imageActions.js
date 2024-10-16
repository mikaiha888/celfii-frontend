import axios from "axios";

import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE } from "../types";

export const uploadImages =
  ({ id, images }) =>
  async (dispatch) => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append("images", image));
      dispatch({ type: IMAGE_REQUEST });
      const { data } = await axios.post(`/images/upload/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch({ type: IMAGE_SUCCESS, payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: IMAGE_FAILURE,
        payload: error.message,
      });
    }
  };
