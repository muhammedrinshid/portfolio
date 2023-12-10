import { FaCss3, FaGithub, FaHackerrank, FaHtml5, FaJs, FaPython, FaReact, FaVuejs } from "react-icons/fa"
import {BiLogoTailwindCss,BiLogoDjango, BiLogoTypescript, BiLogoCPlusPlus, BiLogoNodejs, BiLogoAmazon, BiDice2, BiLogoWordpress, BiLogoPostgresql, BiLogoCodepen} from 'react-icons/bi'
import {DiMongodb, DiMysql} from 'react-icons/di'
import { CodeIcon, DesignIcon, ProjectsIcon, github, linkedin } from "../icons"
import { Nikewebiste, Python, admin__dashboard, gpt_3website, javascript, minaAssistwebsite, mina__dashboard, minatravelsWebsite, problesolving, shadientwebsite, studybudWebsite, universitywebsite } from "../images"

const menuLinks=[
    {
        name:"Home",
        id:"#hero"
    },
    {
        name:"About Me",
        id:"#about"
    },
    {
        name:"Projects",
        id:"#projects"
    },
    {
        name:"Skills",
        id:"#skills"
    },
    {
        name:"Academics",
        id:"#academics"
    },
    {
        name:"Contact",
        id:"#connext"
    },
]


const socialIcons=[
{    icon:github,
    link:"jf"
}  ,
{    icon:linkedin,
    link:"jf"
}  ,
]

const experienceCard=[
    {
        field:"Programmer",
        description:"2+ Years as",
        logo:CodeIcon
    },
    {
        field:"React+Django",
        description:"Proficient in",
        logo:ProjectsIcon
    },
    {
        field:"DSA",
        description:"Expert in",
        logo:DesignIcon
    },
]
const skillSet=[
    {
        field:"Developer",
        description:"Python Full-Stack"
    },
    {
        field:"Experiences",
        description:"Dozens of projects and"
    },
    {
        field:"Management",
        description:"Database Desinging and"
    },
]

const projects=[
    {
        name:"minaAssist.in",
        discription:"Mina Assist is a dynamic travel agency management app developed with React and Django. This seamless integration of front-end reactivity and back-end reliability ensures a user-friendly experience. With features like efficient travel planning, client management, booking systems, and real-time expense tracking, Mina Assist optimizes operations and enhances customer satisfaction. Elevate your travel agency with this powerful and intuitive solution.",
        projecLink:"http://16.170.229.47:8000/",
        tags:["django","react","REST"],
        img:minaAssistwebsite,
        static:"dyn"
    },
    {
        name:"GPT-3",
        discription:"GPT-3 is an aesthetically pleasing and functionally robust frontend website built with React. Emphasizing a beautiful user interface, this project leverages the power of React to create a seamless and engaging experience. From stunning visual elements to smooth navigation, Next GPT-3 showcases the art of design combined with the efficiency of React, offering users a delightful and immersive journey through cutting-edge technology. Explore the future of web development with Next GPT-3.",
        projecLink:"https://muhammedrinshid.github.io/GPT-3/",
        tags:["React","Css"],
        img:gpt_3website,
        static:'st'
    },
    {
        name:"Admin Dashboard",
        discription:"Admin Dashboard is a sleek and responsive admin dashboard crafted with HTML, CSS, and JavaScript. This project combines elegant design with powerful functionality, providing administrators with an intuitive interface to manage and monitor their systems. With dynamic charts, interactive elements, and a user-friendly layout, Admin DashPro offers a seamless experience for efficient data visualization and control. Elevate your admin capabilities with this modern, customizable, and easy-to-use dashboard solution.",
        projecLink:"https://muhammedrinshid.github.io/AdminDashboard/",
        tags:["HTML","Js","Css"],
        img:admin__dashboard,
        static:"st"
    },
    {
        name:"Nike",
        discription:"Explore Nike's latest footwear collections on our sleek React and Tailwind CSS website. Immerse yourself in stylish designs, seamless navigation, and a user-friendly interface, blending fashion and technology seamlessly.",
        projecLink:"#",
        tags:["React","Tailwind"],
        img:Nikewebiste,
        static:"st"
    },
    {
        name:"Assist dashboard",
        discription:"Assist Dashboard is an innovative agency project tracking system, built on Django and React with JWT authentication for robust security. This dynamic platform seamlessly integrates REST API, providing real-time insights into project progress. With a focus on growth calculation, Assist Dashboard empowers agencies with data-driven decision-making. Elevate your project management capabilities with this advanced, Django-React synergy.",
        projecLink:"http://16.170.229.47:8000/",
        tags:["Django","React"],
        img:mina__dashboard,
        static:"dyn",
    },
    {
        name:"Shadient",
        discription:"Shadient brings elegance to newsletters with its captivating design, developed using React and Tailwind CSS. Immerse your audience in a visually stunning experience, blending beautiful gradients seamlessly. This newsletter-type website combines functionality with aesthetics, offering a delightful journey through curated content. Elevate your communication strategy with Shadient's exquisite design and user-friendly interface.",
        projecLink:"https://muhammedrinshid.github.io/shaient",
        tags:["React","Tailwind"],
        img:shadientwebsite,
        static:"st"
    },
    {
        name:"StudyBud",
        discription:"Study Bud, powered by Django, is your go-to platform for topic discussions and collaborative learning. Dive into focused discussions by creating dedicated rooms, fostering an interactive and engaging study environment. With its streamlined design and Django's reliability, Study Bud simplifies knowledge sharing and enhances the collaborative learning experience. Join the community and elevate your study sessions with Study Bud.",
        projecLink:"#",
        tags:["Djanog","Css"],
        img:studybudWebsite,
        static:"dyn"
    },
    {
        name:"Mina travels",
        discription:"Mina Travels, a captivating HTML, CSS, and JS website, is your gateway to exploring the wonders of Valluvambram through a travel agency lens. Immerse yourself in a visually rich experience, carefully crafted to showcase the beauty and adventures that Valluvambram has to offer. With seamless navigation and vibrant design elements, Mina Travels invites you to embark on a journey of discovery and exploration.",
        projecLink:"https://minatravels.github.io/minatravels/",
        tags:["HTML","React","Css"],
        img:minatravelsWebsite,
        static:"st"
    },
    {
        name:"University Website",
        discription:"Discover the world of academia through our sample University Website, elegantly designed with HTML, CSS, and JavaScript. Seamlessly blending form and function, this website offers an intuitive user experience for exploring academic programs, campus life, and essential information. Navigate through dynamic pages, engage with interactive features, and immerse yourself in the educational journey. Experience the essence of the university online with our thoughtfully crafted and responsive website.",
        projecLink:"https://github.com/muhammedrinshid/universityWebsite",
        tags:["HTML","Js","Css"],
        img:universitywebsite,
        static:"st"
    },
]

const certificates=[
    {
        topic:"JavaScript",
        issuer:"Hackerrank",
        certificateLink:"https://www.hackerrank.com/certificates/f702cb4ce1b3",
        credId:"f702cb4ce1b3",
        img:javascript

    },
    {
        topic:"Problem Solving",
        issuer:"Hackerrank",
        certificateLink:"https://www.hackerrank.com/certificates/iframe/396753d352af",
        credId:"396753d352af",
        img:problesolving

    },
    {
        topic:"Python",
        issuer:"Hackerrank",
        certificateLink:"https://www.hackerrank.com/certificates/5c757f85dd59",
        credId:"5c757f85dd59",
        img:Python

    },
]

const dailyTechs=[
    FaReact,
    BiLogoDjango,
    FaHtml5,
    FaCss3,
    FaPython,
    FaJs,
    FaGithub,
    BiLogoTailwindCss,
    DiMysql,
    
    
    
    
]
const usedTechs=[
    BiLogoTypescript,
    BiLogoCPlusPlus,
    BiLogoNodejs,
    BiLogoAmazon,
    BiLogoWordpress,
    BiLogoPostgresql,
    BiLogoCodepen,
    FaHackerrank,
    DiMongodb
    
    
]

const academics=[
    {
        heading:"Bachelor's degree in Computer Science",
        description:"Recently graduated from the 'University of Calicut' with a bachelor's degree in 'Computer Science,' complemented by a strong foundation in mathematics and statistics.",
        duration:"3 Year",
        date:"July/2020 March/2023"
    },
    {
        heading:"Higher Secondary Education in Computer Science",
        description:"I successfully completed my higher secondary education in the Computer Science stream under the Kerala Higher Secondary Education department in 2020, gaining comprehensive knowledge in computer science and related disciplines.'",
        duration:"2 Year",
        date:"June/2018 March/2020"
    },
    {
        heading:"High School Graduate with Distinction ",
        description:"Successfully completed with distinction from Technical High School Manjeri in 2018, specializing in Motor Mechanic Mechanics and Electrical Engineering with full marks",
        duration:"3 Year",
        date:"June/2015 March/2018"
    },
]
const career=[
    {
        heading:"Full Stack Developer Intern @ Arion Infotech",
        description:"Key contributor to dynamic web applications in Python and Java, specializing in front-end solutions with React.js. Proficient in database management, troubleshooting, and code optimization. Recognized for high-quality code in regular reviews.",
        duration:"5 Month",
        date:"Sep/2022 - January/2023",





        
    },{
        heading:"Self-Employed Project Developer",
        description:"Computer Science graduate skilled in Python, Django, and React. Proven track record in independently conceptualizing, developing, and implementing projects. Eager to contribute expertise to dynamic professional projects in a collaborative setting.        ",
        duration:"",
        date:"Ongoing"

    }
]


export {
    menuLinks,
    socialIcons,
    experienceCard,
    skillSet,
    projects,
    certificates,
    usedTechs,
    dailyTechs,
    career,
    academics
}