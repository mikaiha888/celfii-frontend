import axios from 'axios';

const dataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const filters = params.filter;
    const sort = filters.sort || '';
    const query = {
      page,
      perPage,
      name: filters.name || undefined,
      minPrice: filters.minPrice || undefined,
      maxPrice: filters.maxPrice || undefined,
      sort,
    };

    const { data, headers } = await axios.get(`http://localhost:3001/${resource}`, {
      params: query,
    });

    return {
      data,
      total: parseInt(headers['x-total-count'], 10),
    };
  },

  getOne: async (resource, params) => {
    const { data } = await axios.get(`http://localhost:3001/${resource}/${params.id}`);
    return { data };
  },

  create: async (resource, params) => {
    const { data } = await axios.post(`http://localhost:3001/${resource}`, params.data);
    return { data };
  },

  update: async (resource, params) => {
    const { data } = await axios.put(`http://localhost:3001/${resource}/${params.id}`, params.data);
    return { data };
  },

  delete: async (resource, params) => {
    await axios.delete(`http://localhost:3001/${resource}/${params.id}`);
    return { data: params.previousData };
  },
};

export default dataProvider;
