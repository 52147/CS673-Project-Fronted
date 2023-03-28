import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormThunk, clientrecordFormThunk } from "../../services/formThunk";

export const ReserveTable = () => {
  const dispatch = useDispatch();
  const { history, username } = useSelector((state) => state.updateForm);

  useEffect(() => {
    console.log("Fetching history...");
    dispatch(clientrecordFormThunk(username));
  }, [dispatch, username]);

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Reservation History
      </h1>
      <Table responsive className="w-full md:w-4/5 lg:w-3/4">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">License</th>
            <th className="px-4 py-3">Parklot</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {history.map((record) => (
            <tr key={record.id} className="border-b">
              <td className="px-4 py-3">{record.id}</td>
              <td className="px-4 py-3">{record.name}</td>
              <td className="px-4 py-3">{record.date}</td>
              <td className="px-4 py-3">{record.license}</td>
              <td className="px-4 py-3">{record.parklot}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
