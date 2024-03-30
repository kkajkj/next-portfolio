"use client";

export default function SortDropdown({ sortProjects }) {
  return (
    <div className="flex justify-end text-xl text-white  mt-2 mb-4 mr-6">
      <button
        className=" bg-black rounded-xl"
        onClick={() => sortProjects("sequence")}
      >
        Sort by Sequence
      </button>
    </div>
  );
}
