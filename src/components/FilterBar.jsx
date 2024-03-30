"use client";

export default function FilterBar({ handleFilter, techStacks }) {
  console.log(techStacks);
  return (
    <div className="flex space-x-2 justify-center gap-4 font-semibold text-2xl">
      <button onClick={() => handleFilter(null)}>All</button>
      {techStacks?.map((stack, index) => (
        <button key={`${stack}-${index}`} onClick={() => handleFilter(stack)}>
          {stack}
        </button>
      ))}
    </div>
  );
}
