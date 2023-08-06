import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
