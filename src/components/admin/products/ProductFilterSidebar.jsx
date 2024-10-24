import { useEffect } from 'react';
import { Card, CardContent, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../../redux/actions';
import { FilterLiveSearch, FilterList, FilterListItem, useListContext } from 'react-admin';

import CategoryIcon from '@mui/icons-material/LocalOffer';
import SortIcon from '@mui/icons-material/Sort';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductFilterSidebar = () => {
  const dispatch = useDispatch();
  const { setFilters, filterValues } = useListContext();
  const { categories } = useSelector((state) => state.categories);
  const { minPrice = '', maxPrice = '' } = filterValues;

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handlePriceChange = (setter) => (e) => {
    setFilters({
      ...filterValues,
      [setter]: e.target.value || undefined,
    });
  };

  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 250 }}>
      <CardContent>
        <FilterLiveSearch label="Buscar" source="name" />
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
          {(Array.isArray(categories) ? categories : []).map(({ id, name }) => (
            <FilterListItem key={id} label={name} value={{ category: name }} />
          ))}
        </FilterList>
        <FilterList label="Ordenar por" icon={<SortIcon />}>
          <FilterListItem label="Más Popular" value={{ sort: 'most popular' }} />
          <FilterListItem label="Precio más Alto" value={{ sort: 'highest price' }} />
          <FilterListItem label="Precio más Bajo" value={{ sort: 'lowest price' }} />
          <FilterListItem label="Más Nuevo" value={{ sort: 'newest' }} />
        </FilterList>
        <FilterList label="Estado" icon={<DeleteIcon />}>
          <FilterListItem label="Mostrar Eliminados" value={{ onlyDeleted: true }} />
          <FilterListItem label="Mostrar Activos" value={{ onlyDeleted: false }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default ProductFilterSidebar;
