import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    getSortedRowModel,
} from "@tanstack/react-table";
import React from "react";

// 1️⃣ Sample Data Type
type Person = {
    name: string;
    age: number;
    job: string;
    action: boolean;
};

// 2️⃣ Sample Data
const defaultData: Person[] = [
    { name: "Alice", age: 28, job: "Developer", action: true },
    { name: "Bob", age: 34, job: "Designer", action: false },
    { name: "Charlie", age: 42, job: "Manager", action: true },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
        cell: (info) => info.getValue(),
        enableSorting: true,
    }),
    columnHelper.accessor("job", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("action", {
        cell: (info) => (info.getValue() ? "Available" : "Unavailable"),
    }),
];

const Table = () => {
    const [data] = React.useState(() => [...defaultData]);
    const [sorting, setSorting] = React.useState([]);
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="p-4">
            <h1>TanStack Table</h1>
            <table className="table-auto border-collapse border border-gray-400">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    className="border px-4 py-2"
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {{
                                        asc: " 🔼",
                                        desc: " 🔽",
                                    }[header.column.getIsSorted() as string] ??
                                        null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td className="border px-4 py-2" key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
