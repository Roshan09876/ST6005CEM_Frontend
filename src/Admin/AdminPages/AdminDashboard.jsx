import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import AuthContext from '../../context/AuthContext';
import Footer from "../../components/Footer"


// GlobalFilter component for search functionality
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="my-4">
      <input
        value={globalFilter ?? ''}
        onChange={e => setGlobalFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Search..."
      />
    </div>
  );
};

const AdminDashboard = () => {
  const { allusers, getallUsers } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        await getallUsers();
      } catch (error) {
        console.log(`Error Fetching Users: ${error}`);
      }
    };
    fetchAllUsers();
  }, [getallUsers]);

  useEffect(() => {
    setData(allusers);
  }, [allusers]);

  const columns = useMemo(
    () => [
      {
        accessorKey: '_id',
        header: 'ID',
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'image',
        header: 'Image',
        cell: ({ getValue }) => (
          <img src={getValue()} alt="User" className="w-10 h-10 rounded-full object-cover" />
        ),
      },
      {
        accessorKey: 'isAdmin',
        header: 'Role',
        cell: ({ getValue }) => (getValue() ? 'Admin' : 'User'),
      },
    ],
    []
  );

  const [globalFilter, setGlobalFilter] = useState('');
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <div className="px-10 py-10">
        <div className="px-10 py-5 bg-white shadow-lg rounded-lg">
          <h1 className="font-bold text-4xl text-primary mb-5">Admin Dashboard</h1>
          <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-primary text-white">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="py-3 px-6 border-b cursor-pointer text-left"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === 'desc' ? (
                            <span> 🔽</span>
                          ) : (
                            <span> 🔼</span>
                          )
                        ) : (
                          ''
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} className="hover:bg-gray-100 transition duration-150">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="py-3 px-6 border-b text-left">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
