
import ChartComponent from "./Chart";
import TrailingReturnsTable from "./Table";

export default function PortfolioDashboard() {
  return (
    <section className="px-6 py-6 max-w-6xl mx-auto bg-white">
      <TrailingReturnsTable />
      <ChartComponent />
    </section>
  );
}
