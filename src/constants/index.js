import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.jpg';


export const PROJECTS = [
    {
        title: 'NovaCare',
        image: project1,
        description: 
        "A Laravel Filament based application with Stripe integration, which allows users to upload their ECG interpretation to be reviewed by a Doctor.",
        technologies: ["Laravel", "Filament", "Tailwind", "Stripe"]
    },
    {
        title: 'isharay.pk',
        image: project2,
        description: 
        "A Laravel application using Livewire for the front-end, to allow users to upload sign-videos.",
        technologies: ["Laravel", "Livewire", "JavaScript"]
    },
    {
        title: 'Flappy Bird',
        image: project3,
        description: 
        "A flappy bird inspired game with multiple levels.",
        technologies: ["C#"]
    },
]