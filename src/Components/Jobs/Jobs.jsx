import React, { useState } from "react";
import Data from "../../Data/Data"
import { Link } from "react-router-dom";



const Jobs = () => {

const [jobsData, setjobsData] = useState(Data)

const [searchItem, setsearchItem] = useState('')

const [searchLocation, setsearchLocation] = useState('')



const searchItemValue=searchItem.toLowerCase()


const locationSearch =()=>{

    const filterLocation= Data.filter((jobs)=>
jobs.location.toLowerCase().includes(searchLocation.toLowerCase())
    ) ;
    setjobsData(filterLocation)

    
  

}


const filterData= e=>{

    const FilterValue=e.target.value

    if(FilterValue == 'full-time'){
        const filterJobs= Data.filter((job)=> job.contract== "Full Time")
        setjobsData(filterJobs)
    }

    else if (FilterValue == 'part-time'){
        const filterJobs= Data.filter((job)=> job.contract== "Part Time")
        setjobsData(filterJobs)
    }else if (FilterValue == 'freelancer'){
        const filterJobs= Data.filter((job)=> job.contract== "Freelance")
        setjobsData(filterJobs)
    }else if(FilterValue == 'contract'){
        const filterJobs= Data.filter((job)=> job.contract== "Contract")
        setjobsData(filterJobs)
    }else{
        setjobsData(Data)
    }
}








  return (
    <section className="jobsList">
      <div className="container">
        <div className="jobs_list">
          <div className="search0">
            <div className="search1">
              <span>
                <i class="ri-search-line"></i>
              </span>
              <input type="text" placeholder="Search by Countries, Title" onChange={(e)=> setsearchItem(e.target.value)} value={searchItem}/>
            </div>

            <div className="search2">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <input type="text" placeholder="Search by Location" value={searchLocation} onChange={(e)=> setsearchLocation(e.target.value)}/>
              <button className="btn" onClick={locationSearch}>Search</button>
            </div>

            <div className="search3">
              <select onChange={filterData}>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelancer">Freelancer</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>

<div className="jobs1">

{jobsData?.filter(job=>{

    if(searchItem =='')return job;
    if(job.position.toLowerCase().includes(searchItemValue || job.company.toLowerCase().includes(searchItemValue)))
    return job
}).map((item)=> (
<div className="jobsitem" key={item.id}>

<img src={item.logo} alt=''/>

<div className="jobscontent">

<h6>{item.postedAt} - {item.contract}</h6>
<h1><Link to={`/jobs/${item.position}`}>{item.position}</Link></h1>
<p>{item.company}</p>

<div className="location">

    <p> Location: <span>{item.location}</span></p>
</div>

</div>

</div>
))}


</div>



        </div>
      </div>
    </section>
  );
};

export default Jobs;
