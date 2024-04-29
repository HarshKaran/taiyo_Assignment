import { useState } from "react";
import { IEmployee } from "./Employee.Type";

import React from "react";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isActive, setIsActive] = useState<boolean>(false);
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      alert("Fill in the input fields");
      return;
    }

    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      isActive: isActive,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container flex justify-center">
        <form className="bg-gray-50 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
                <h3 className="text-purple-600 font-semibold text-xl text-center">
                    Add Employee Details
                </h3>
            </div>
            <div className="mb-4">
                <label className="block text-purple-700 font-semibold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    id="first-name"
                    className="shadow appearance-none border border-purple-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                    type="text"
                    value={firstName}
                    onChange={onFirstNameChangeHnd}
                />
            </div>
            <div className="mb-4">
                <label className="block text-purple-700 font-semibold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    id="last-name"
                    className="shadow appearance-none border border-purple-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                    type="text"
                    value={lastName}
                    onChange={onLastNameChangeHnd}
                />
            </div>
            <fieldset className="mb-6">
                <legend className="text-lg font-medium text-gray-900">Status</legend>
                <div className="flex space-x-6">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            className="form-radio text-purple-600 h-5 w-5"
                            checked={isActive}
                            onChange={toggleActive}
                        />
                        <span className="ml-2 text-green-600 font-semibold">
                            Active
                        </span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            className="form-radio text-gray-500 h-5 w-5"
                            checked={!isActive}
                            onChange={toggleActive}
                        />
                        <span className="ml-2 text-red-600 font-semibold">
                            Inactive
                        </span>
                    </label>
                </div>
            </fieldset>
            <div className="flex items-center justify-between">
                <button
                    className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onSubmitBtnClickHnd}
                >
                    Add
                </button>
                <button
                    className="bg-gray-400 hover:bg-gray-500 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onBackBtnClickHnd}
                >
                    Back
                </button>
            </div>
        </form>
    </div>
);



};

export default AddEmployee;
