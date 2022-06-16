

const ExperienceCard = ({bgURL, logoURL, company, department, job, description, date, location}) => {
  return (
    <div class="card">
        <figure  class="card-background">
          <img src={bgURL} alt="background"/>
        </figure>
        <div class="card-header">
          <figure class="card-logo">
            <img src={logoURL} alt="logo"/>
          </figure>
        </div>
        <div class="card-body">
          <h3 class="card-company">{company}</h3>
          <p class="card-department">{department}</p>
          <p class="card-job">{job}</p>
          <p class="card-description">
            {description}      
          </p>
        </div>
        <div class="card-footer flex flex-row w-full justify-between ">
          <p class="card-date">{date}</p>
          <p class="card-location">{location}</p>
        </div>
      </div>
  )
}

export default ExperienceCard