import { getRequest, postRequest, putRequest, deleteRequest } from '../../helpers/apiHelper';

const dataProvider = {
  getList: async (resource, params) => {
    try {
      const query = {
        page: params.pagination.page,
        perPage: params.pagination.perPage,
        name: params.filter.name || undefined,
        minPrice: params.filter.minPrice || undefined,
        maxPrice: params.filter.maxPrice || undefined,
        category: params.filter.category || undefined,
        sort: params.filter.sort || '',
      };
      const { data, headers } = await getRequest(`/${resource}`, query);
      return {
        data: data.products ? data.products : data,
        total: parseInt(headers['x-total-count'], 10),
      };
    } catch (error) {
      console.error('Error fetching list:', error);
      throw new Error('Error fetching list');
    }
  },

  getOne: async (resource, params) => {
    try {
      const response = await getRequest(`/${resource}/${params.id}`);
      return response;
    } catch (error) {
      console.error('Error fetching resource:', error);
      throw new Error('Error fetching resource');
    }
  },

  create: async (resource, params) => {
    try {
      const response = await postRequest(`/${resource}`, params.data);
      return response;
    } catch (error) {
      console.error('Error creating resource:', error);
      throw new Error('Error creating resource');
    }
  },

  update: async (resource, params) => {
    try {
      const formData = new FormData();
      console.log(params.data);
      console.log(params.data.images);
      console.log(params.data.imagesToDelete);

      if (params.data.imagesToDelete && Array.isArray(params.data.imagesToDelete)) {
        console.log('Imágenes originales en dataProvider:', params.data.imagesToDelete);
        params.data.imagesToDelete.forEach((image, index) => {
          formData.append(`imagesToDelete[${index}]`, JSON.stringify(image));
        });
      }

      if (params.data.images) {
        params.data.images.forEach((image) => {
          if (image.rawFile && image.rawFile instanceof File) {
            formData.append('images', image.rawFile);
          }
        });
      }

      if (params.data.category && typeof params.data.category === 'object') {
        params.data.category = params.data.category.name;
      }

      for (const key in params.data) {
        if (key !== 'images' && key !== 'imagesToDelete') formData.append(key, params.data[key]);
      }
      const response = await putRequest(`/${resource}/${params.id}`, formData);
      return response;
    } catch (error) {
      console.error('Error updating resource:', error);
      throw new Error('Error updating resource');
    }
  },

  delete: async (resource, params) => {
    try {
      await deleteRequest(`/${resource}/${params.id}`);
      return { data: params.previousData };
    } catch (error) {
      console.error('Error deleting resource:', error);
      throw new Error('Error deleting resource');
    }
  },

  deleteMany: async (resource, params) => {
    try {
      const deleteRequests = params.ids.map((id) => deleteRequest(`/${resource}/${id}`));
      await Promise.all(deleteRequests);
      return { data: params.ids };
    } catch (error) {
      console.error('Error deleting multiple resources:', error);
      throw new Error('Error deleting multiple resources');
    }
  },
};

export default dataProvider;
