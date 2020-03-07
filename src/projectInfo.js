const projectInfo = [
    {
        projectTitle: "Trippin'",
        imageUrl: "./assets/Trippin.png",
        githubUrl: "https://github.com/sarakgryka/project3",
        deployedUrl: "https://p3tstraighttrippin.herokuapp.com/",
        technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
        projectTitle: "Penny Pincher",
        imageUrl: "./assets/penny_pincher.png",
        githubUrl: "https://github.com/mawil583/Project-2",
        deployedUrl: "https://shielded-tor-95793.herokuapp.com/",
        technologies: ["Sequelize"]
    },
    {
        projectTitle: "EventWeather",
        imageUrl: "./assets/eventweather.png",
        githubUrl: "",
        deployedUrl: "",
        technologies: ["jQuery", "Node.js"]
    },
    {
        projectTitle: "Train Scheduler",
        imageUrl: "./assets/train_scheduler.png",
        githubUrl: "",
        deployedUrl: "",
        technologies: ["jQuery"]
    }
];

// makes an "All" tab for all projects by adding 
// it to the beginning of technologies array
projectInfo.map(project => (
    project.technologies.unshift("All")
));

let tabNames = ["All", "React", "jQuery", "MongoDB"];

export { projectInfo, tabNames };