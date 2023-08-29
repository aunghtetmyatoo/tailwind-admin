import React from "react";
import Card from "./Card";
import ChartOne from "./charts/ChartOne";
import ChartTwo from "./charts/ChartTwo";
import ChartThree from "./charts/ChartThree";
import ChartFour from "./charts/ChartFour";

const Dashboard = () => {
  return (
    <main>
      <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <Card title="$3.456K" subTitle="Total views" rate="0.43%" />
          <Card title="$3.456K" subTitle="Total views" rate="0.43%" />
          <Card title="$3.456K" subTitle="Total views" rate="0.43%" />
          <Card title="$3.456K" subTitle="Total views" rate="0.43%" />
        </div>

        <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          <ChartThree />
          <ChartFour />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
