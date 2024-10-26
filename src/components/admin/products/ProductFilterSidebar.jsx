import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../../redux/actions';
import { FilterLiveSearch, FilterListItem, useListContext } from 'react-admin';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/LocalOffer';
import SortIcon from '@mui/icons-material/Sort';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductFilterSidebar = () => {
  const dispatch = useDispatch();
  const { setFilters, filterValues } = useListContext();
  const { categories } = useSelector((state) => state.categories);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handlePriceChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const applyFilters = () => {
    setFilters({
      ...filterValues,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
    });
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setFilters({
      ...filterValues,
      minPrice: undefined,
      maxPrice: undefined,
    });
  };

  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 250 }}>
      <CardContent>
        <FilterLiveSearch label="Buscar" source="name" />

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="price-content"
            id="price-header"
          >
            <span style={{ marginLeft: 8 }}>Filtros de Precio</span>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Precio Mínimo"
              variant="outlined"
              fullWidth
              margin="normal"
              value={minPrice}
              onChange={handlePriceChange(setMinPrice)}
            />
            <TextField
              label="Precio Máximo"
              variant="outlined"
              fullWidth
              margin="normal"
              value={maxPrice}
              onChange={handlePriceChange(setMaxPrice)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={applyFilters}
              fullWidth
              sx={{ mt: 2 }}
            >
              Aplicar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={clearFilters}
              fullWidth
              sx={{ mt: 1 }}
            >
              Limpiar
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="sort-content"
            id="sort-header"
          >
            <SortIcon /> <span style={{ marginLeft: 8 }}>Ordenar por</span>
          </AccordionSummary>
          <AccordionDetails>
            <FilterListItem label="Más Popular" value={{ sort: 'most popular' }} />
            <FilterListItem label="Precio más Alto" value={{ sort: 'highest price' }} />
            <FilterListItem label="Precio más Bajo" value={{ sort: 'lowest price' }} />
            <FilterListItem label="Más Nuevo" value={{ sort: 'newest' }} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="categories-content"
            id="categories-header"
          >
            <CategoryIcon /> <span style={{ marginLeft: 8 }}>Categoría</span>
          </AccordionSummary>
          <AccordionDetails>
            {(Array.isArray(categories) ? categories : []).map(({ id, name }) => (
              <FilterListItem key={id} label={name} value={{ category: name }} />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="status-content"
            id="status-header"
          >
            <DeleteIcon /> <span style={{ marginLeft: 8 }}>Estado</span>
          </AccordionSummary>
          <AccordionDetails>
            <FilterListItem label="Mostrar Eliminados" value={{ onlyDeleted: true }} />
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ProductFilterSidebar;
