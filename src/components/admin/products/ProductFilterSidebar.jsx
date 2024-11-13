import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../../redux/actions";
import { FilterListItem, useListContext } from "react-admin";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/LocalOffer";
import SortIcon from "@mui/icons-material/Sort";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductFilterSidebar = () => {
  const dispatch = useDispatch();
  const { setFilters, filterValues } = useListContext();
  const { categories } = useSelector((state) => state.categories);

  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handlePriceChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const applyFilters = () => {
    setFilters({
      ...filterValues,
      price: { min: minPrice || undefined, max: maxPrice || undefined },
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setFilters({
      name: undefined,
      price: { min: undefined, max: undefined },
      category: undefined,
      sort: undefined,
      onlyDeleted: undefined,
    });
  };

  const handleSearch = () => {
    setFilters({
      name: searchTerm,
      price: { min: undefined, max: undefined },
      category: undefined,
      sort: undefined,
      onlyDeleted: undefined,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const isPriceFilterActive = filterValues.price?.min || filterValues.price?.max;
  const isSortFilterActive = filterValues.sort;
  const isCategoryFilterActive = filterValues.category;
  const isStatusFilterActive = filterValues.onlyDeleted;

  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 250 }}>
      <CardContent>
        <TextField
          label="Buscar"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} fullWidth sx={{ mt: 1 }}>
          Buscar
        </Button>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="price-content"
            id="price-header"
          >
            <Badge
              color="error"
              variant="dot"
              invisible={!isPriceFilterActive}
              sx={{ marginRight: 1 }}
            >
              <span>Filtros de Precio</span>
            </Badge>
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
            <Badge
              color="error"
              variant="dot"
              invisible={!isSortFilterActive}
              sx={{ marginRight: 1 }}
            >
              <SortIcon />
              <span style={{ marginLeft: 8 }}>Ordenar por</span>
            </Badge>
          </AccordionSummary>
          <AccordionDetails>
            <FilterListItem label="Más Popular" value={{ sort: "most popular" }} />
            <FilterListItem label="Precio más Alto" value={{ sort: "highest price" }} />
            <FilterListItem label="Precio más Bajo" value={{ sort: "lowest price" }} />
            <FilterListItem label="Más Nuevo" value={{ sort: "newest" }} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="categories-content"
            id="categories-header"
          >
            <Badge
              color="error"
              variant="dot"
              invisible={!isCategoryFilterActive}
              sx={{ marginRight: 1 }}
            >
              <CategoryIcon />
              <span style={{ marginLeft: 8 }}>Categoría</span>
            </Badge>
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
            <Badge
              color="error"
              variant="dot"
              invisible={!isStatusFilterActive}
              sx={{ marginRight: 1 }}
            >
              <DeleteIcon />
              <span style={{ marginLeft: 8 }}>Estado</span>
            </Badge>
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
