import { useEffect } from "react";

export const TempDisplay = ({ temp }) => {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <p>{temp}°</p>
      <p
        className={
          temp < 20
            ? "text-blue-500"
            : temp > 35
              ? "text-red-500"
              : "text-orange-500"
        }
      >
        {" "}
        {temp < 20 ? "Cold" : temp > 35 ? "Hot" : "Warm"}
      </p>
    </div>
  );
};
