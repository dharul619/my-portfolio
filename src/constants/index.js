import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import cisco from "../assets/Certificates/cisco.svg";
import dqlab from "../assets/Certificates/dqlab.png";
import myskill from "../assets/Certificates/Myskill.png";
import oracle from "../assets/Certificates/oracle.svg";
import google from "../assets/Certificates/google.svg";

export const HERO_CONTENT = `My name is Dharul Yuswansyah, an enthusiastic IT professional with a strong background in Informatics Engineering and a passion for data analytics, web development and software development. Currently pursuing my studies while actively working on projects like App Landing Page or web applications, I am proficient in programming languages such as Python, C++, and Java, along with frameworks like React and databases like MySQL. I am driven to innovate and deliver impactful solutions that combine technology with creativity to solve real-world challenges.`;

export const ABOUT_TEXT = `I have experience in data processing and analysis, as well as inventory management, particularly through the use of Microsoft Excel with advanced data analysis skills such as VLOOKUP, HLOOKUP, Pivot Tables, IF, and SUMIF functions. Additionally, I possess strong expertise in database management using MySQL, along with programming skills in Python and C++.
Throughout my career, I have held various roles that enhanced my ability to manage data and administration effectively. Notably, as an Expedition Administrator at PT. Matahari Department Store Tbk., I was responsible for processing goods data, conducting inventory analysis, and overseeing the administration of goods movement, both inbound and outbound.
These experiences have sharpened my analytical and organizational skills, enabling me to deliver accurate insights and streamline operational processes. I am committed to leveraging my expertise to contribute to efficient decision-making and organizational success.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Logistics Administrator",
    company: "Matahari Department Store",
    description: `Responsible for processing and analyzing data related to goods, ensuring that manual store inventory aligns with the inventory recorded in the database. Conducts data analysis and reports any discrepancies between manual and database inventories. Handles data processing to produce outputs as requested by supervisors. Oversees the administration of incoming and outgoing goods, ensuring accurate records to prevent potential losses for the company. Takes full accountability for inventory administration and the proper management of all goods transactions.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2019 - 2023",
    role: "Construction Assistant Site Coordinator",
    company: "PT.Bangun Cahya Gemilang",
    description: `Supporting and assisting all tasks of the supervisor when the supervisor is at another location to ensure work is completed effectively and efficiently. Responsible for overseeing the quality of work in the supervisor's absence, while also honing logical thinking skills through problem-solving and decision-making on-site.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2019 - 2019",
    role: "Warehouse Staff",
    company: "PT. Limpah Mas Indonesia",
    description: `Responsible for retrieving items requested by the sales team and ensuring the accuracy and consistency between inventory data and the physical stock in the warehouse.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2018 - 2018",
    role: "Sales Promotion Boy",
    company: "Matahari Departmen Store",
    description: `Facilitate customer needs to ensure a seamless shopping experience. Responsible for maintaining the cleanliness and organization of the counter. Additionally, duties include assisting customers in selecting products, providing detailed product information, achieving sales targets, managing inventory at the counter, and handling customer inquiries or complaints with professionalism.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const CERTIFICATES = [
  {
    title: "Google Data Analytics Certificate",
    provider: "Google",
    date: "October 2024",
    description: "Comprehensive training in data analytics techniques.",
    icon: google,
    count: 1,
    url: "https://drive.google.com/file/d/1J4fPmlgcKSNNje_fdMdM7Mv_2bWVIoKL/view?usp=sharing",
  },
  {
    title: "Oracle Database Administration & Java Fundamentals",
    provider: "Oracle",
    date: "April 2023/December 2024",
    description: "Specialized in database administration and SQL tuning.",
    icon: oracle,
    count: 3,
    url: "https://drive.google.com/drive/folders/1CPlYsmCJTjMx9plaEMFgzsb6e7sPXN87?usp=sharing",
  },
  {
    title: "Cisco Phyton Essentials Certificate",
    provider: "Cisco",
    date: "September 2024",
    description: "Focus on network infrastructure and security.",
    icon: cisco,
    count: 1,
    url: "https://drive.google.com/file/d/1yS9DNsBCvoZu_JMt928t0ueVyCMZEqWQ/view?usp=sharing",
  },
  {
    title: "Data Science & Data Analys",
    provider: "DQLab",
    date: "September 2023/Oktober 2023",
    description: "Practical data science applications using Python.",
    icon: dqlab,
    count: 22,
    url: "https://drive.google.com/drive/folders/12-xoirxdTRX-Ij2loW5ZGtjAe5qAr88p?usp=sharing",
  },
  {
    title: "Microsoft Excel",
    provider: "MySkill",
    date: "November 2023/Februari 2024",
    description: "Introduction to front-end and back-end web development.",
    icon: myskill,
    count: 11,
    url: "https://drive.google.com/drive/folders/13Kxu2OYw8nGUKl1iCLXl1ZfY7kIqRSwV?usp=sharing",
  },
];

export const PROJECTS = [
  {
    title: "Educational Course Landing Page",
    image: project1,
    description:
      "A dynamic landing page designed for educational courses, featuring an interactive layout and clear course information to engage potential students.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://dharul619.github.io/course-edu/",
  },
  {
    title: "Company Profile Website",
    image: project2,
    description:
      "A professional company profile landing page showcasing the company's mission, values, services, and contact details with an intuitive, visually appealing design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://dharul619.github.io/Sany-Multimedia/index.html",
  },
  {
    title: "Bootcamp Profile",
    image: project3,
    description:
      "A simple, static website that showcases an overview of the bootcamp, including sections like profile, about, services, and contact details.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://dharul619.github.io/Coder/",
  },
  {
    title: "App Landing Page",
    image: project4,
    description:
      "A sleek and modern app landing page designed to highlight features, services, and pricing with engaging visuals and interactive elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://dharul619.github.io/app-landing-v1/",
  },
];

export const CONTACT = {
  address: "Cengkareng West Jakarta ",
  phoneNo: "+62 821 1224 9833 ",
  email: "dharulyuswansyah619@gmail.com",
};
