import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import DateInput from "./components/DateInput";
import MissionsCard from "./components/MissionCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const getHistory = async () => {
    console.log("getting History");
    const history = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(history);
  };
  useEffect(() => {
    getHistory();
  }, [startDate, endDate]);
  console.log(data);
  return (
    <div>
      <h1 className="title">Historial de SpaceX</h1>
      <div className="filters">
        <DateInput
          label="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <DateInput
          label="End Date"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="mission-list">
        {data.map((item, idx) => {
          return <MissionsCard key={idx} mission={item} />;
        })}
      </div>
    </div>
  );
}
