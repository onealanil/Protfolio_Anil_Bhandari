import React from "react";

function Suggestion() {
  const suggestion = [
    {
      id: 1,
      name: "Developer",
    },
    {
      id: 2,
      name: "Designer",
    },
    {
      id: 3,
      name: "Coder",
    },
  ];

  return (
    <>
      <div className="flex gap-x-3 my-4">
        {suggestion?.map((s) => (
          <span key={s.id} className="py-2 px-4 border-gray-300 text-gray-600 text-sm rounded-full border-[0.25px]">
            {s.name}
          </span>
        ))}
      </div>
    </>
  );
}

export default Suggestion;
