import { IEmployee } from "./Employee.Type";

import React from "react";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;


  return (
    <div className="py-4 px-28 ml-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((item) => (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.firstName}</h3>
              <p className="text-gray-600 mb-4">{item.lastName}</p>
            </div>
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => onEdit(item)}
                className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outlinebg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteClickHnd(item)}
                className="bg-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
              >
                Delete
              </button>
            </div>
            <div className="flex items-center mt-4">
              <h4 className="text-lg font-semibold text-blue-900">Status: </h4>
              <input
                type="radio"
                checked={item.isActive}
                className="form-radio text-blue-600 ml-4"
              />
              <span className="ml-2 text-sm font-medium text-green-900">
                {item.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default EmployeeList;
