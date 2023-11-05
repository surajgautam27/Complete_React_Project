import { useDispatch, useSelector } from "react-redux"
import Wrapper from "../assets/wrappers/JobsContainer"
import Job from "./Job"
import { useEffect } from "react"
import { getAllJobs } from "../features/allJobs/allJobsSlice"
import PageBtnContainer from "./PageBtnContainer"
const JobsContainer = () => {
    const {jobs , isLoading,page,totalJobs,numOfPages,search,searchStatus,searchType,sort} = useSelector((store)=>store.allJobs)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllJobs())
  
    },[dispatch, page, search, searchStatus, searchType, sort])
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
        <h5>{totalJobs} Job{jobs.length >1 && 's '}found</h5>
        <div className="jobs">
            {jobs.map((job)=>{
                return <Job key ={job._id} {...job}/>
            })}
        </div>
        {numOfPages>1&& <PageBtnContainer/>}
    </Wrapper>
 )
  
}

export default JobsContainer
