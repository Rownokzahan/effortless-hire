export const AppliedJobsLoader = async() => {

    const res = await fetch(`/jobs.json`)
    const jobs = await res.json()

    const appliedJobs = []

    const savedAppliedJobs = JSON.parse(localStorage.getItem('applied-jobs'))

    if (savedAppliedJobs) {
        for (const id of savedAppliedJobs) {
            const exists = jobs.find(job => job.id === id)
            if (exists) {
                appliedJobs.push(exists)
            }
        }
    }

    return appliedJobs
}