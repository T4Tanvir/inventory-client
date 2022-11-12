import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import "./tableList.scss";
import { Link } from "react-router-dom";
import FormDialog from "../Model/FormDialog";

const TableList = ({ data, btnData, columnsData, isPurchaseTable = false }) => {
  const [open, setOpen] = useState(false);
  const [rowsData, setRowsData] = useState(data);
  const [individualData, setIndividualData] = useState({});

  const handleGetData = async (id) => {
    const val = await rowsData.filter((item) => item.id === id);
    setIndividualData(val[0]);
    handleOpenModal();
  };
  const handleDelete = (id) => {
    setRowsData(rowsData.filter((item) => item.id !== id));
  };
  const handleOpenModal = async () => {
    setOpen((prev) => !prev);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {isPurchaseTable ? (
              <Link style={{ textDecoration: "none" }}>
                <div className="viewButton">Update</div>
              </Link>
            ) : (
              <div
                className="viewButton"
                onClick={() => handleGetData(params.row.id)}
              >
                Update
              </div>
            )}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table">
      <div className="datatableTitle">
        {btnData.title}
        <Link to={btnData.link} className="link">
          Add New
        </Link>
      </div>
      {rowsData.length > 0 && (
        <DataGrid
          className="datagrid"
          rows={rowsData}
          sx={{ background: data.stock <= 5 ? "red" : "" }}
          columns={columnsData.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      )}

      {open && (
        <FormDialog
          handleOpenModal={handleOpenModal}
          open={open}
          individualData={individualData}
        ></FormDialog>
      )}
    </div>
  );
};

export default TableList;
