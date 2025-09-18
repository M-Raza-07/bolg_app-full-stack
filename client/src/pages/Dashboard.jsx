import React from "react";
import { Button } from "flowbite-react";

const Dashboard = () => {
  return (
    <div>
      <Button className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400">
        Red to Yellow
      </Button>
    </div>
  );
};

export default Dashboard;
