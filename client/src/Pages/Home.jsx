import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="my-5">Home</h1>

      <div className="relative w-full overflow-x-scroll shadow-md sm:rounded-lg">
        <Link
          to="/create"
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Create +
        </Link>
        <table className="w-full mt-5 text-sm text-left text-gray-500 border rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Employee ID
              </th>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Marital Status
              </th>
              <th scope="col" className="px-6 py-3">
                Nationality
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3">
                Employment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Hire
              </th>
              <th scope="col" className="px-6 py-3">
                Base Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Emergency Contact Name
              </th>
              <th scope="col" className="px-6 py-3">
                Emergency Contact Relationship
              </th>
              <th scope="col" className="px-6 py-3">
                Emergency Contact Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Emergency Contact Address
              </th>
              <th scope="col" className="px-6 py-3">
                Highest Education Attained
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.EmployeeID}
                className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{employee.EmployeeID}</td>
                <td className="px-6 py-4">{employee.FullName}</td>
                <td className="px-6 py-4">
                  {new Date(employee.DateOfBirth).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{employee.Gender}</td>
                <td className="px-6 py-4">{employee.MaritalStatus}</td>
                <td className="px-6 py-4">{employee.Nationality}</td>
                <td className="px-6 py-4">{employee.Address}</td>
                <td className="px-6 py-4">{employee.PhoneNumber}</td>
                <td className="px-6 py-4">{employee.Email}</td>
                <td className="px-6 py-4">{employee.Department}</td>
                <td className="px-6 py-4">{employee.JobTitle}</td>
                <td className="px-6 py-4">{employee.EmploymentStatus}</td>
                <td className="px-6 py-4">
                  {new Date(employee.DateOfHire).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{employee.BaseSalary}</td>
                <td className="px-6 py-4">{employee.EmergencyContactName}</td>
                <td className="px-6 py-4">
                  {employee.EmergencyContactRelationship}
                </td>
                <td className="px-6 py-4">
                  {employee.EmergencyContactPhoneNumber}
                </td>
                <td className="px-6 py-4">
                  {employee.EmergencyContactAddress}
                </td>
                <td className="px-6 py-4">
                  {employee.HighestEducationAttained}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
