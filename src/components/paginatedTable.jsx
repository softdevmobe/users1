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
import { Box, Button } from "@mui/material";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
export default function PaginatedTable({
  rows,
  columns,
  onPageChange,
  onPageSizeChange,
  count,
  onDelete,
  onEdit,
  onEditPass,
  onAddUser,
}) {
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
  const handleAddUser = () => {
    if (onAddUser) {
      onAddUser();
    }
  };

  const handleDelete = (row) => {
    if (onDelete) {
      onDelete(row);
    }
  };

  const handleEdit = (row) => {
    if (onEdit) {
      onEdit(row);
    }
  };
  const handleEditPass = (row) => {
    if (onEditPass) {
      onEditPass(row);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", pr: 3 }}>
        <IconButton aria-label="add" onClick={handleAddUser}>
          {" "}
          <PersonAddAltIcon fontSize="large" />
        </IconButton>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
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
                        sx={{ display: "flex", justifyContent: "left", alignContent: "center", m: 0 }}
                      >
                        <Avatar alt="Remy Sharp" src={row[column.id]} />
                      </TableCell>
                    );
                  } else if (column.id === "action") {
                    return (
                      <TableCell key={column.id}>
                        {column.actions.includes("edit") && (
                          <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                            <EditIcon />
                          </IconButton>
                        )}
                        {column.actions.includes("delete") && (
                          <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
                            <DeleteIcon />
                          </IconButton>
                        )}

                        {column.actions.includes("editPass") && (
                          <IconButton aria-label="editPass" onClick={() => handleEditPass(row)}>
                            <LockResetIcon />
                          </IconButton>
                        )}
                      </TableCell>
                    );
                  } else {
                    return <TableCell key={column.id}>{row[column.id]}</TableCell>;
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
