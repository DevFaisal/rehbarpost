import React from "react";

function BackgroundGrid() {
  return (
    <main className="-z-40 absolute h-[80vh] overflow-hidden">
      <div className="flex flex-col justify-center gap-8 items-center h-screen w-screen relative">
        {Array.from({ length: 100 }, (v, idx) => (
          <span
            key={idx}
            className="p-[0.1px] bg-zinc-800 dark:bg-zinc-200 w-full"
          />
        ))}
        <div className="flex gap-8 justify-evenly absolute items-between h-screen">
          {Array.from({ length: 200 }, (v, idx) => (
            <span
              key={idx}
              className="p-[0.1px] bg-zinc-800 dark:bg-zinc-200 h-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default BackgroundGrid;
