import React from "react";

export const Record = ({ posts }) => {
  return (
    <>
      {posts.map((record) => (
        <tr key={record.id} className="border-b">
          <td className="px-4 py-3">{record.id}</td>
          <td className="px-4 py-3">{record.name}</td>
          <td className="px-4 py-3">{record.date}</td>
          <td className="px-4 py-3">{record.license}</td>
          <td className="px-4 py-3">{record.parklot}</td>
        </tr>
      ))}
    </>
  );
};
