const projectInfo = [
    {
        projectTitle: "Trippin'",
        imageUrl: "./assets/Trippin.png",
        githubUrl: "https://github.com/sarakgryka/project3",
        deployedUrl: "https://p3tstraighttrippin.herokuapp.com/",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        summary: `Do you want road Trippin' to be easier? Are you doing multiple searches for road trip info? One for 
        directions, one for restaurants, one for tourist attractions? It's time to let Trippin' simplify things by 
        giving you relevant info with only one search!`
    },
    {
        projectTitle: "Penny Pincher",
        imageUrl: "./assets/penny_pincher.png",
        githubUrl: "https://github.com/mawil583/Project-2",
        deployedUrl: "https://shielded-tor-95793.herokuapp.com/",
        technologies: ["Sequelize"],
        summary: `Penny Pincher lets you create a monthly budget which is divided into categories (utilities, savings, 
            transportation, etc.). After entering an expense, you are redirected to a chart that displays a graph with 
            expenses next to budget so you can easily stay on track.`
    },
    {
        projectTitle: "EventWeather",
        imageUrl: "./assets/eventweather.png",
        githubUrl: "https://github.com/mawil583/Project-1",
        deployedUrl: "https://mawil583.github.io/Project-1/",
        technologies: ["jQuery", "Node.js"],
        summary: `What makes EventWeather unique is that it allows you to get event information in a city of your choosing 
        and it gives you the weather at the exact start time of the event! If you love going out but want to make sure the 
        weather will be nice, EventWeather is the app for you!`
    },
    {
        projectTitle: "Train Scheduler",
        imageUrl: "./assets/train_scheduler.png",
        githubUrl: "https://github.com/mawil583/Train-Scheduler",
        deployedUrl: "https://mawil583.github.io/Train-Scheduler/",
        technologies: ["jQuery", "Firebase Database"],
        summary: `Train Scheduler allows users to view train information such as Destination, Frequency, Next Arrival Time, 
        and Minutes Away so that they can plan accordingly. Additionally, if someone wants to add a new train to the schedule, 
        he/she can do so easily.`
    },
    {
        projectTitle: "Memory Game",
        imageUrl: "./assets/memoryGame.png",
        githubUrl: "https://github.com/mawil583/memory-game",
        deployedUrl: "http://memory-game-uofa.herokuapp.com/",
        technologies: ["React"],
        summary: `This game will test your memory. The objective is to click every character only once. There are 12 characters, 
        so this will be difficult. Your score goes up after every click. Once you've clicked all of them without any 
        repeats, you win. But if you click one more than once, you lose!`
    }
];

// prepends an "All" tab for all projects by prepending 
// it to the technologies array
projectInfo.map(project => (
    project.technologies.unshift("All")
));

let tabNames = ["All", "React", "jQuery", "MongoDB"];

export { projectInfo, tabNames };