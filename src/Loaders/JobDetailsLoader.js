export const JobDetailsLoader = async(id) => {
    const res = await fetch(`/jobs.json`)
    const jobs = await res.json()

    const jobDetails = jobs.find(job => job.id === parseInt(id))
    return jobDetails
}