

const ExperienceCard = ({bgURL, logoURL, company, department, job, description, date, location}) => {
  return (
    <div className="card">
        <figure  className="card-background">
          <img src={bgURL} alt="background"/>
        </figure>
        <div className="card-header">
          <figure className="card-logo">
            <img src={logoURL} alt="logo"/>
          </figure>
        </div>
        <div className="card-body">
          <h3 className="card-company">{company}</h3>
          <p className="card-department">{department}</p>
          <p className="card-job">{job}</p>
          <p className="card-description">
            {description}      
          </p>
        </div>
        <div className="card-footer flex flex-row w-full justify-between ">
          <p className="card-date">{date}</p>
          <p className="card-location">{location}</p>
        </div>
      </div>
  )
}

export default ExperienceCard