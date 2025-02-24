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

export default function PaginatedTable({ rows, columns, onPageChange, onPageSizeChange, count, onDelete, onEdit }) {
  const [page, setPage] = React.useState(1);
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
    setPage(1);
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };

  const displayedRows = rows; // rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              <TableCell>عملیات</TableCell> {/* Add a column for actions */}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.code} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {columns.map((column) =>
                  column.id === "imagePath" ? (
                    <TableCell key={column.id}>
                      <Avatar alt="Remy Sharp" src={row[column.id]} sx={{ width: 56, height: 56, m: 1.5 }} />
                    </TableCell>
                  ) : (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  )
                )}
                <TableCell> {/* Actions column */}
                  <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
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
          onPageSizeChange={handlePageSizeChange}
          labelDisplayedRows={({ from, to, count }) => {
            return `نمایش ${from} تا ${to} از ${count}`;
          }}
          labelRowsPerPage="تعداد سطر در هر صفحه"
        />
      </TableContainer>
    </Paper>
  );
}