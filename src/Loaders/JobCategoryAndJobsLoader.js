export const JobCategoryAndJobsLoader = async () => {

    const res1 = await fetch('jobsCategories.json')
    const categories = await res1.json()

    const res2 = await fetch('jobs.json')
    const jobs = await res2.json()

    return {categories, jobs}
}