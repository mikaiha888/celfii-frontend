import axios from 'axios';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
  };
};

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
      category: filters.category || undefined,
      sort,
    };

    const { data, headers } = await axios.get(`http://localhost:3001/${resource}`, {
      params: query,
      headers: getAuthHeaders(),
    });

    return {
      data,
      total: parseInt(headers['x-total-count'], 10),
    };
  },

  getOne: async (resource, params) => {
    const { data } = await axios.get(`http://localhost:3001/${resource}/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data };
  },

  create: async (resource, params) => {
    const { data } = await axios.post(`http://localhost:3001/${resource}`, params.data, {
      headers: getAuthHeaders(),
    });
    return { data };
  },

  update: async (resource, params) => {
    const { data } = await axios.put(
      `http://localhost:3001/${resource}/${params.id}`,
      params.data,
      {
        headers: getAuthHeaders(),
      }
    );
    return { data };
  },

  delete: async (resource, params) => {
    await axios.delete(`http://localhost:3001/${resource}/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: params.previousData };
  },

  deleteMany: async (resource, params) => {
    const deleteRequests = params.ids.map((id) =>
      axios.delete(`http://localhost:3001/${resource}/${id}`, {
        headers: getAuthHeaders(),
      })
    );

    await Promise.all(deleteRequests);
    return { data: params.ids };
  },
};

export default dataProvider;
