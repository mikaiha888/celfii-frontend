import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  patchRequest,
} from "../../helpers/apiHelper";

const dataProvider = {
  getList: async (resource, params) => {
    if (resource === "dollar") {
      const { data } = await getRequest(`/${resource}`);
      return { data: [data], total: 1 };
    }
    const defaultFilters = {
      name: undefined,
      price: { min: undefined, max: undefined },
      category: undefined,
      sort: "",
      onlyDeleted: undefined,
    };

    const filters = { ...defaultFilters, ...params.filter };

    const query = {
      page: params.pagination.page,
      perPage: params.pagination.perPage,
      ...filters,
    };

    const { data, headers } = await getRequest(`/${resource}`, query);
    return {
      data: data.products ? data.products : data,
      total: parseInt(headers["x-total-count"], 10),
    };
  },

  getOne: async (resource, params) => {
    if (resource === "dollar") {
      const response = await getRequest(`/${resource}/${params.id}`);
      return { data: response.data };
    }

    const response = await getRequest(`/${resource}/${params.id}`);
    return response;
  },

  create: async (resource, params) => {
    const formData = new FormData();
    if (params.data.images) {
      params.data.images.forEach((image) => {
        if (image.rawFile && image.rawFile instanceof File)
          formData.append("images", image.rawFile);
      });
    }
    if (params.data.image) {
      if (params.data.image.rawFile && params.data.image.rawFile instanceof File)
        formData.append("image", params.data.image.rawFile);
    }
    if (params.data.category && typeof params.data.category === "object") {
      formData.append("category", params.data.category.name);
    } else if (typeof params.data.category === "string") {
      formData.append("category", params.data.category);
    }
    for (const key in params.data) {
      if (key !== "images" && key !== "category" && key !== "image") {
        formData.append(key, params.data[key]);
      }
    }
    const response = await postRequest(`/${resource}`, formData);
    return response;
  },

  update: async (resource, params) => {
    if (resource === "users") {
      if (!params.data.password) {
        delete params.data.password;
      }
      return await putRequest(`/users/${params.id}`, params.data);
    }
    if (resource === "dollar") {
      const response = await patchRequest(`/${resource}`, params.data);
      return response;
    }
    if (resource === "products" || resource === "categories") {
      const formData = new FormData();
      if (params.data.imagesToDelete && Array.isArray(params.data.imagesToDelete))
        params.data.imagesToDelete.forEach((image, index) =>
          formData.append(`imagesToDelete[${index}]`, JSON.stringify(image))
        );
      if (params.data.images)
        params.data.images.forEach(
          (image) =>
            image.rawFile &&
            image.rawFile instanceof File &&
            formData.append("images", image.rawFile)
        );
      if (params.data.image) formData.append("image", params.data.image.rawFile);
      if (params.data.category && typeof params.data.category === "object")
        params.data.category = params.data.category.name;
      for (const key in params.data)
        if (key !== "images" && key !== "imagesToDelete" && key !== "image")
          formData.append(key, params.data[key]);
      return await putRequest(`/${resource}/${params.id}`, formData);
    } else {
      return await putRequest(`/${resource}`, params.data);
    }
  },

  delete: async (resource, params) => {
    await deleteRequest(`/${resource}/${params.id}`);
    return { data: params.previousData };
  },

  deleteMany: async (resource, params) => {
    const deleteRequests = params.ids.map((id) => deleteRequest(`/${resource}/${id}`));
    await Promise.all(deleteRequests);
    return { data: params.ids };
  },

  restore: async (resource, params) => {
    const response = await postRequest(`/${resource}/${params.id}`, {});
    return response;
  },
};

export default dataProvider;
