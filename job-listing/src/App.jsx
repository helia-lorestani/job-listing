import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFilter, removeFilter, clearFilters } from "./redux/filtersSlice";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";
import jobsData from "./data.json";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const filterKeyWords = (job) => {
    const keywords = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => keywords.includes(filter));
  };
  const filteredJobs =
    filters.length === 0 ? jobsData : jobsData.filter(filterKeyWords);

  return (
    <div>
      <header>
        <img
          src="/images/bg-header-desktop.svg"
          alt=""
          style={{
            width: "100vw",
            height: "130px",
            backgroundColor: " hsl(180, 29%, 50%)",
          }}
        />
      </header>
      <main style={{ margin: "30px", paddingBottom: "100px" }}>
        {filters.length > 0 && (
          <FilterBar
            filters={filters}
            onClear={() => dispatch(clearFilters())}
            onRemove={(filter) => dispatch(removeFilter(filter))}
          />
        )}

        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onAddFilter={(filter) => dispatch(addFilter(filter))}
          />
        ))}
      </main>
    </div>
  );
}
export default App;
