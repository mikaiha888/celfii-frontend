import React, { useCallback } from "react";
import DownloadIcon from "@mui/icons-material/GetApp";
import { useNotify } from "react-admin";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";

const ExportButton = ({
  maxResults = 1000,
  onClick,
  label = "ra.action.export",
  icon = <DownloadIcon />,
  resource,
  filterValues,
  sort,
  total,
  dataProvider,
  ...rest
}) => {
  const notify = useNotify();

  const exportToExcel = async (data) => {
    const productHeaders = {
      id: "idArticulos",
      name: "Nombre del producto",
      category: "Categoría",
      description: "Descripción producto",
      priceArs: "Precio en Pesos",
      priceUsd: "Precio en Dólares",
      priceWholesale: "Precio Mayorista",
      costArs: "Costo en Pesos",
      costUsd: "Costo en Dólares",
      stock: "Stock",
      code: "Código",
      imei: "IMEI",
      view: "Vistas",
    };

    const productData = data.map((item) => ({
      [productHeaders.id]: item.id,
      [productHeaders.name]: item.name,
      [productHeaders.category]: item.category?.name || "N/A",
      [productHeaders.description]: item.description,
      [productHeaders.priceArs]: item.priceArs,
      [productHeaders.priceUsd]: item.priceUsd,
      [productHeaders.priceWholesale]: item.priceWholesale,
      [productHeaders.costArs]: item.costArs,
      [productHeaders.costUsd]: item.costUsd,
      [productHeaders.stock]: item.stock,
      [productHeaders.code]: item.code,
      [productHeaders.imei]: item.imei,
      [productHeaders.view]: item.view?.counter || 0,
    }));

    const categoryData = await dataProvider
      .getList("categories", {
        pagination: { page: 1, perPage: 1000 },
      })
      .then((res) => res.data.map((cat) => ({ Nombre: cat.name })));

    const roleData = await dataProvider
      .getList("roles", {
        pagination: { page: 1, perPage: 1000 },
      })
      .then((res) => res.data.map((role) => ({ Nombre: role.name })));

    const userData = await dataProvider
      .getList("users", {
        pagination: { page: 1, perPage: 1000 },
      })
      .then((res) => res.data.map((user) => ({ Nombre: user.username, Email: user.email })));

    const dollarData = await dataProvider
      .getList("dollar", {
        pagination: { page: 1, perPage: 1000 },
      })
      .then((res) =>
        res.data.map((dollar) => ({
          Nombre: dollar.rate,
          "Última actualización": new Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(dollar.updatedAt)),
        }))
      );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(productData), "Productos");
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(categoryData), "Categorías");
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(userData), "Usuarios");
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(roleData), "Roles");
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(dollarData), "Dólar");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "DatosExportados.xlsx");
  };

  const handleClick = useCallback(
    (event) => {
      dataProvider
        .getList(resource, {
          sort,
          filter: filterValues,
          pagination: { page: 1, perPage: maxResults },
        })
        .then(({ data }) => {
          exportToExcel(data);
        })
        .catch((error) => {
          console.error(error);
          notify("ra.notification.http_error", { type: "error" });
        });

      if (typeof onClick === "function") {
        onClick(event);
      }
    },
    [dataProvider, filterValues, maxResults, notify, onClick, resource, sort]
  );

  return (
    <Button onClick={handleClick} disabled={total === 0} {...rest}>
      {icon}
    </Button>
  );
};

export default ExportButton;
