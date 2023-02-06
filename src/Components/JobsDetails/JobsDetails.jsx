import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import Data from "../../Data/Data"

const JobsDetails = () => {
    const{position}=useParams()


    const jobs = Data.find(job => job.position==position)
  return (

    <section>

<div className="container">

<div className="details1">


<div className="details2">

<img src={jobs.logo} alt="" srcset="" />
<div>

<h1>{jobs.company}</h1>

</div>

<button> <Link to={jobs.companySite}> Company Site</Link></button>

</div>

<div className="jobdetails">

    <div className="about">


        <div>
            <h6>{jobs.postedAt} - {jobs.contract}</h6>
            <h1>{jobs.position}</h1>
            <span>{jobs.location}</span>
        </div>
<button className='btn'>Apply</button>

    </div>

    <p className='jobdesc'>{jobs.desc}</p>
    <div className="require">
        <h1>Requirements</h1>
        <p>{jobs.requirements.reqTitle}</p>

        <ul className="requirement__item">
                {jobs.requirements.reqItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="responsibility">
              <h1>What you will do?</h1>
              <p>{jobs.responsibility.resTitle}</p>

              <ol type="1" className="responsibility__item">
                {jobs.responsibility.resItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
    </div>
</div>

</div>

</div>

    </section>

  )
}

export default JobsDetails
