import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { stableSort, getComparator } from '../Components/Generic-Components/Table/helper-functions';
import { Order, Data, HeadCell } from '../Components/Generic-Components/Table/interface';
import { IssuesList, deleteIssue } from '../redux/slices/issue-slice';

/**
 * Hook for managing the state of a table component.
 * @returns An object containing the state values and functions for manipulating the state.
 */
export function useTableState() {
    // State variables
    const [order, setOrder] = useState<Order>('asc'); // Order state
    const [orderBy, setOrderBy] = useState<keyof Data>('id'); // OrderBy state
    const [selected, setSelected] = useState<readonly number[]>([]); // Selected state
    const [page, setPage] = useState(0); // Page state
    const [dense, setDense] = useState(false); // Dense state
    const [rowsPerPage, setRowsPerPage] = useState(10); // RowsPerPage state
    const rows = useSelector((state: any) => state.issues.issues)
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(IssuesList())
    }, [])

    const removeIssue = (id: string) => {
        dispatch(deleteIssue({id}))
    }

    // Head labels for the table
    const headLabels: readonly HeadCell[] = [
        // HeadCell objects
        {
            id: 'id',
            numeric: false,
            disablePadding: true,
            label: 'Id',
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Name',
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: true,
            label: 'Email',
        },
        {
            id: 'phone',
            numeric: false,
            disablePadding: true,
            label: 'Phone',
        },
        {
            id: 'role',
            numeric: false,
            disablePadding: true,
            label: 'Role',
        },
        {
            id: 'actions',
            numeric: false,
            disablePadding: true,
            label: 'Actions',
        },
    ];

    // Function to handle request sort
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        setOrder(prevOrder => {
            const newOrder = order === 'asc' ? 'desc' : 'asc';

            setOrderBy(property); // Update orderBy
            return newOrder; // Return the new order
        });
    };

    // Function to handle selecting all rows
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected: any = rows?.map((n: any) => n.id);
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    };

    // Function to handle click on a row
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    // Function to handle changing the page
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    // Function to handle changing the rows per page
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Function to check if a row is selected
    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Calculate the number of empty rows
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

    // Get visible rows based on sorting and pagination
    const visibleRows = useMemo(
        () => stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
        ),
        [order, orderBy, page, rowsPerPage, rows]
    );


    return {
        order,
        orderBy,
        selected,
        page,
        dense,
        rowsPerPage,
        rows,
        visibleRows,
        emptyRows,
        headLabels,
        handleRequestSort,
        handleSelectAllClick,
        handleClick,
        handleChangePage,
        handleChangeRowsPerPage,
        handleChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => setDense(event.target.checked),
        isSelected,
        removeIssue
    };
}
