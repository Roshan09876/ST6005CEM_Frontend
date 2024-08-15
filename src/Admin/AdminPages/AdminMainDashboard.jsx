import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { getActivityLogsApi } from '../../api/Api';
import { useTable, useGlobalFilter, usePagination } from 'react-table';

const AdminMainDashboard = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [globalFilter, setGlobalFilter] = useState("");
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await getActivityLogsApi();
                const data = response.data;
                if (data.success) {
                    setActivities(data.activities);
                } else {
                    throw new Error('Failed to fetch activities');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    // Define columns for the table
    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: '_id' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Role', accessor: 'role' },
            { Header: 'Success', accessor: 'success', Cell: ({ value }) => (value ? 'Yes' : 'No') },
            { Header: 'Message', accessor: 'message' },
            { Header: 'Endpoint', accessor: 'endpoint' },
            { Header: 'Request Details', accessor: 'requestDetails' },
            { Header: 'Timestamp', accessor: 'timestamp', Cell: ({ value }) => new Date(value).toLocaleString() }
        ],
        []
    );

    // Create table instance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter: setTableGlobalFilter,
        state: { globalFilter: tableGlobalFilter },
        gotoPage,
        pageOptions,
        canPreviousPage,
        canNextPage,
        pageCount
    } = useTable(
        {
            columns,
            data: activities,
            initialState: {
                pageIndex,
                pageSize
            },
            manualPagination: true,
            pageCount: Math.ceil(activities.length / pageSize)
        },
        useGlobalFilter,
        usePagination
    );

    // Update global filter
    const handleGlobalFilterChange = (e) => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
        setTableGlobalFilter(value);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className='px-10 py-10'>
                <h1 className='text-2xl font-semibold mb-4'>Activity Logs</h1>

                {/* Search Input */}
                <input
                    type='text'
                    value={globalFilter || ""}
                    onChange={handleGlobalFilterChange}
                    placeholder='Search...'
                    className='mb-4 p-2 border border-gray-300 rounded'
                />

                {/* Table */}
                <table {...getTableProps()} className='min-w-full bg-white border border-gray-200'>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className='py-2 px-4 border-b bg-gray-100'>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className='hover:bg-gray-100'>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className='py-2 px-4 border-b'>
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className='mt-4 flex justify-between items-center'>
                    <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        className='px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        First
                    </button>
                    <button
                        onClick={() => gotoPage(pageIndex - 1)}
                        disabled={!canPreviousPage}
                        className='px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        Previous
                    </button>
                    <span>
                        Page <strong>{pageIndex + 1} of {pageCount}</strong>
                    </span>
                    <button
                        onClick={() => gotoPage(pageIndex + 1)}
                        disabled={!canNextPage}
                        className='px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        Next
                    </button>
                    <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        className='px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        Last
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminMainDashboard;
