import * as React from "react";
import { useCallback } from "react";
import DownloadIcon from "@mui/icons-material/GetApp";
import { fetchRelatedRecords, useDataProvider, useNotify, useListContext } from "ra-core";
import {
  Button,
  ButtonProps,
} from "../../../../node_modules/react-admin/node_modules/ra-ui-materialui/src/button/Button";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const ExportButton = (props: ExportButtonProps) => {
  const {
    maxResults = 1000,
    onClick,
    label = "ra.action.export",
    icon = defaultIcon,
    meta,
    ...rest
  } = props;
  const { filter, filterValues, resource, sort, total } = useListContext();
  const dataProvider = useDataProvider();
  const notify = useNotify();

  const exportToExcel = async (
    data: any[],
    fetchRelatedRecords: any,
    dataProvider: any,
    resource: string
  ) => {
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

    const productData = data.map((item) => {
      return {
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
      };
    });

    const categoriesResponse = await dataProvider.getList("categories", {
      pagination: { page: 1, perPage: 1000 },
    });
    const categoryData = categoriesResponse.data.map((cat) => ({
      Nombre: cat.name,
    }));

    const roleResponse = await dataProvider.getList("roles", {
      pagination: { page: 1, perPage: 1000 },
    });
    const roleData = await roleResponse.data.map((role) => ({
      Nombre: role.name,
    }));

    const userResponse = await dataProvider.getList("users", {
      pagination: { page: 1, perPage: 1000 },
    });
    const userData = await userResponse.data.map((user) => ({
      Nombre: user.username,
      Email: user.email,
    }));
    const dollarResponse = await dataProvider.getList("dollar", {
      pagination: { page: 1, perPage: 1000 },
    });

    const dollarData = await dollarResponse.data.map((dollar) => {
      const formattedDate = new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(dollar.updatedAt));

      return {
        Nombre: dollar.rate,
        "Última actualización": formattedDate,
      };
    });

    const workbook = XLSX.utils.book_new();
    const productSheet = XLSX.utils.json_to_sheet(productData);
    XLSX.utils.book_append_sheet(workbook, productSheet, "Productos");

    const categorySheet = XLSX.utils.json_to_sheet(categoryData);
    XLSX.utils.book_append_sheet(workbook, categorySheet, "Categorías");

    const userSheet = XLSX.utils.json_to_sheet(userData);
    XLSX.utils.book_append_sheet(workbook, userSheet, "Usuarios");

    const roleSheet = XLSX.utils.json_to_sheet(roleData);
    XLSX.utils.book_append_sheet(workbook, roleSheet, "Roles");

    const dollarSheet = XLSX.utils.json_to_sheet(dollarData);
    XLSX.utils.book_append_sheet(workbook, dollarSheet, "Dólar");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "DatosExportados.xlsx");
  };

  const handleClick = useCallback(
    (event) => {
      dataProvider
        .getList(resource, {
          sort,
          filter: filter ? { ...filterValues, ...filter } : filterValues,
          pagination: { page: 1, perPage: maxResults },
          meta,
        })
        .then(({ data }) => {
          if (exportToExcel) {
            exportToExcel(data, fetchRelatedRecords(dataProvider), dataProvider, resource);
          }
        })
        .catch((error) => {
          console.error(error);
          notify("ra.notification.http_error", { type: "error" });
        });

      if (typeof onClick === "function") {
        onClick(event);
      }
    },
    [dataProvider, filter, filterValues, maxResults, notify, onClick, resource, sort, meta]
  );

  return (
    <Button onClick={handleClick} label={label} disabled={total === 0} {...sanitizeRestProps(rest)}>
      {icon}
    </Button>
  );
};

const defaultIcon = <DownloadIcon />;

const sanitizeRestProps = ({
  resource,
  ...rest
}: Omit<ExportButtonProps, "maxResults" | "label" | "meta">) => rest;

interface Props {
  icon?: JSX.Element;
  label?: string;
  maxResults?: number;
  onClick?: (e: React.MouseEvent) => void;
  resource?: string;
  meta?: any;
}

export type ExportButtonProps = Props & ButtonProps;
