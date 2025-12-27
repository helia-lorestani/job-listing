function JobCard({ job, onAddFilter }) {
  const keyWords = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className={`card ${job.featured ? "card--featured" : ""}`}>
      <img className="card-logo" src={job.logo} alt={job.company} />
      <div className="card-info">
        <div className="card-top">
          <span className="card-company">{job.company}</span>
          {job.new && <span className="card-new">NEW!</span>}
          {job.featured && <span className="card-featured">FEATURED</span>}
        </div>
        <h2 className="card-position">{job.position}</h2>
        <p className="card-details">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="line"></div>
      <div className="card-tags">
        {keyWords.map((key) => (
          <span key={key} className="filter" onClick={() => onAddFilter(key)}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
