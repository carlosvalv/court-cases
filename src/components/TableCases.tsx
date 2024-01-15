import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";

function TableCases() {
  const stateCases = useSelector((store: AppStore) => store.cases);

  const pageSize = 5;

  const columns = [
    {
      field: "customerName",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "startDate",
      headerName: "Date",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "isFinished",
      headerName: "Finished",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.value.toString()}</>
      ),
    },
  ];
  return (
    <DataGrid
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={[pageSize]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      rows={stateCases}
      columns={columns}
      style={{ width: "90vw" }}
    />
  );
}

export default TableCases;
