const FilterBar = ({ filters, onRemove, onClear }) => {
  return (
    <div className="filter-bar">
      <div className="filter-items">
        {filters.map((filter) => (
          <div
            key={filter}
            style={{
              backgroundColor: " hsl(180, 31%, 95%)",
              color: " hsl(180, 29%, 50%)",
              padding: " 5px 12px",
              borderRadius: "5px",
              fontWeight: "700",
              fontSize: "14px",
              position: "relative",
              marginLeft: "20px",
            }}
          >
            <span>{filter}</span>
            <button className="cross" onClick={() => onRemove(filter)}>
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="clear" onClick={onClear}>
        Clear
      </div>
    </div>
  );
};
export default FilterBar;
