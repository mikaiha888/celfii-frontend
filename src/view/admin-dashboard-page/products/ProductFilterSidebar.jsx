import { useEffect, useState } from 'react';
import {
  FilterLiveSearch,
  FilterList,
  FilterListItem,
  useDataProvider,
  useListContext,
} from 'react-admin';
import { Card, CardContent, TextField } from '@mui/material';
import CategoryIcon from '@mui/icons-material/LocalOffer';
import SortIcon from '@mui/icons-material/Sort';

export const ProductFilterSidebar = () => {
  const [categories, setCategories] = useState([]);
  const { setFilters, filterValues } = useListContext();
  const dataProvider = useDataProvider();

  const { minPrice = '', maxPrice = '' } = filterValues;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await dataProvider.getList('categories', {
          pagination: { page: 1, perPage: 100 },
          sort: { field: 'name', order: 'ASC' },
          filter: {},
        });
        setCategories(data.map(({ id, name }) => ({ id, name })));
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    };

    fetchCategories();
  }, [dataProvider]);

  const handlePriceChange = (setter) => (e) => {
    setFilters({
      ...filterValues,
      [setter]: e.target.value || undefined,
    });
  };

  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 250 }}>
      <CardContent>
        <FilterLiveSearch source="name" />
        <TextField
          label="Precio Mínimo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={minPrice}
          onChange={handlePriceChange('minPrice')}
        />
        <TextField
          label="Precio Máximo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={maxPrice}
          onChange={handlePriceChange('maxPrice')}
        />
        <FilterList label="Categoría" icon={<CategoryIcon />}>
          {categories.map(({ id, name }) => (
            <FilterListItem key={id} label={name} value={{ category: name }} />
          ))}
        </FilterList>
        <FilterList label="Ordenar por" icon={<SortIcon />}>
          <FilterListItem label="Más Popular" value={{ sort: 'most popular' }} />
          <FilterListItem label="Precio más Alto" value={{ sort: 'highest price' }} />
          <FilterListItem label="Precio más Bajo" value={{ sort: 'lowest price' }} />
          <FilterListItem label="Más Nuevo" value={{ sort: 'newest' }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};
