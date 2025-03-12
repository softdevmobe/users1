import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LockResetIcon from "@mui/icons-material/LockReset";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export default function PaginatedTable({ rows, columns, onPageChange, onPageSizeChange, count, onAction }) {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    setPage(0);
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };

  const displayedRows = rows; // rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleAction = (action, row) => {
    if (onAction) {
      onAction(action, row);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.id === "action")
                  return (
                    <TableCell key={column.id} sx={{ padding: 0 }}>
                      {column.label}{" "}
                      <IconButton aria-label="add" onClick={() => handleAction("add")}>
                        <PersonAddAltIcon fontSize="large" />
                      </IconButton>
                    </TableCell>
                  );
                else
                  return (
                    <TableCell key={column.id} sx={{ padding: 0 }}>
                      {column.label}
                    </TableCell>
                  );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.code} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {columns.map((column) => {
                  if (column.id === "imagePath") {
                    return (
                      <TableCell
                        key={column.id}
                        sx={{ display: "flex", justifyContent: "left", alignContent: "center", m: 0, p: 1 }}
                      >
                        <Avatar alt="Remy Sharp" src={row[column.id]} />
                      </TableCell>
                    );
                  } else if (column.id === "action") {
                    return (
                      <TableCell key={column.id} sx={{ justifyContent: "left", alignContent: "center", m: 0, p: 1 }}>
                        {column.actions.includes("edit") && (
                          <IconButton aria-label="edit" onClick={() => handleAction("edit", row)}>
                            <EditIcon />
                          </IconButton>
                        )}
                        {column.actions.includes("delete") && (
                          <IconButton aria-label="delete" onClick={() => handleAction("delete", row)}>
                            <DeleteIcon />
                          </IconButton>
                        )}

                        {column.actions.includes("editPass") && (
                          <IconButton aria-label="editPass" onClick={() => handleAction("editPass", row)}>
                            <LockResetIcon />
                          </IconButton>
                        )}
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell key={column.id} sx={{ justifyContent: "left", alignContent: "center", m: 0, p: 1 }}>
                        {row[column.id]}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={count}
          rowsPerPage={pageSize}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handlePageSizeChange}
          labelDisplayedRows={({ from, to, count }) => {
            return `نمایش ${from} تا ${to} از ${count}`;
          }}
          labelRowsPerPage="تعداد سطر در هر صفحه"
        />
      </TableContainer>
    </Paper>
  );
}
