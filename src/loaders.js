// BASE URL OF OUR DEPLOYED API
// BASE URL OF OUR DEPLOYED API
const projects_URL = "https://express-react-lab-backend-maxb.onrender.com/projects"
const about_URL = "https://express-react-lab-backend-maxb.onrender.com/about"

export const projectsLoader = async () => {
    const response = await fetch(projects_URL)
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(about_URL)
    const about = await response.json()
    return about
}