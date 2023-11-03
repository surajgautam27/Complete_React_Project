import { useDispatch, useSelector } from "react-redux"
import Wrapper from "../assets/wrappers/JobsContainer"
import Job from "./Job"
import { useEffect } from "react"
import { getAllJobs } from "../features/allJobs/allJobsSlice"
const JobsContainer = () => {
    const {jobs , isLoading} = useSelector((store)=>store.allJobs)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllJobs())
     console.log('wee')
    },[getAllJobs])
    if(isLoading)
    {
        return(
            <Wrapper>
                <h2> Loading ....</h2>
            </Wrapper>
        )
    }

 if(jobs.length === 0)
 {
    return(
        <Wrapper>
            <h2> No Jobs to Display..</h2>
        </Wrapper>
    )
 }

 return(
    <Wrapper>
        <h5> Jobs info</h5>
        <div className="jobs">
            {jobs.map((job)=>{
                return <Job key ={job._id} {...job}/>
            })}
        </div>
    </Wrapper>
 )
  
}

export default JobsContainer
