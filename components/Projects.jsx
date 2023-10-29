import React from "react";
import Calc from "../public/assets/projects/Calc.png";
import GPT3 from "../public/assets/projects/GPT3.png";
import Mem from "../public/assets/projects/Mem.png";
import News from "../public/assets/projects/News.png";
import Recipe from "../public/assets/projects/Recipe.png";
import Text from "../public/assets/projects/Text.png";
import Rest from "../public/assets/projects/Rest.png";
import ProjectItem from "./ProjectItem";
import film from "../public/assets/projects/film.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="FILMFLICKS"
            backgroundImg={film}
            projectUrl="https://film-flicks.vercel.app/"
            tech="FILMFLICKS is a React-based web application built using the powerful Tailwind CSS framework. that allows users to sign up, sign in, and enjoy a wide range of movies and TV shows. With the integration of Firebase for authentication and storage, and the TMDB API for fetching movie and TV show data, users can explore various categories of content, save their favorite titles, and access their personalized watchlist associated with their account.
            "
          />
          <ProjectItem
            title="Gericht Restaurant"
            backgroundImg={Rest}
            projectUrl="https://restaurant-orcin-ten.vercel.app//"
            tech="Gericht modern fine dining restaurant landing page is a visually stunning and user-friendly website built with React, JavaScript, HTML, and CSS. With its captivating visuals, comprehensive menu information, Gericht successfully showcases its commitment to providing an extraordinary dining experience. The website is fully responsive, ensuring an optimal browsing experience across various devices, including desktops, tablets, and mobile phones."
          />
          <ProjectItem
            title="GPT3"
            backgroundImg={GPT3}
            projectUrl="https://gpt-3-lyart-gamma.vercel.app/"
            tech="GPT3 is a modern UI/UX landing page that offers a responsive, visually pleasing, and user-friendly experience. By incorporating the latest technologies, such as React, JavaScript, HTML, and CSS. The beautiful gradient touches and modern design elements contribute to an aesthetically pleasing interface, while responsive design ensures optimal functionality across all devices."
          />
          <ProjectItem
            title="News App"
            backgroundImg={News}
            projectUrl="https://github.com/NikhilBagri/News-app"
            tech="ACTIVE NEWS is a web application built using React, JavaScript, HTML, and CSS. It is a web application that fetches daily news from a news API and allows users to view news based on different categories. The application provides users with a range of categories such as business, technology, entertainment, health, general news, sports, and more. Users can select a category, and the application fetches articles from the news API and dynamically displays them on the interface. Users can click on articles to read the full content. Overall, ACTIVE NEWS offers a personalized and intuitive news browsing experience, ensuring users can easily access and explore news articles based on their interests."
          />
          <ProjectItem
            title="Recipe App"
            backgroundImg={Recipe}
            projectUrl="https://recipe-mauve.vercel.app/"
            tech="Recipedia is a React based web application built using HTML, CSS, and JavaScript. It allows users to search for recipes and displays results from the Edamam Recipe API. Users can select an article to view the detailed recipe information, including ingredients and step-by-step instructions. Recipedia provides an intuitive and enjoyable recipe browsing experience by leveraging modern web technologies.
            "
          />
          <ProjectItem
            title="Memory Game"
            backgroundImg={Mem}
            projectUrl="https://memory-game-one-gamma.vercel.app/"
            tech="The Memory Card Game is a ReactJS-based web game designed to challenge players to improve their memory, concentration, and cognitive skills. It features a grid of face-down cards with animal emojis, and players must flip over pairs of cards to find matches. The game provides visual feedback, displays the players score, and continues until all pairs are matched. With its visually appealing design and entertaining gameplay, the Memory Card Game is suitable for players of all ages. Its objective is to match all the pairs while stimulating cognitive abilities.
            "
          />
          <ProjectItem
            title="Text Utils"
            backgroundImg={Text}
            projectUrl="https://textutils-lilac.vercel.app/"
            tech="Text Utils is a React-based web tool created using HTML, CSS, and JavaScript. that helps developers and users manipulate text data efficiently. It offers features like converting text to uppercase or lowercase, copying text without extra spaces, and providing a preview of the entered text. It also counts characters and words in the input and estimates the time required to read the text. Overall, Text Utils simplifies text-related tasks and enhances productivity."
          />
          <ProjectItem
            title="Calculator"
            backgroundImg={Calc}
            projectUrl="https://calculator-dun-eight.vercel.app/"
            tech="This calculator is built using React, HTML, CSS, and JavaScript resembles the iPhone's calculator app in terms of design and interface. It offers a comprehensive set of mathematical functionalities, including basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator incorporates keyboard inputs, has a memory feature, and provides real-time feedback. It is fully responsive and compatible with various devices. Overall, this calculator is a visually appealing, user-friendly, and feature-rich web application suitable for both basic and advanced calculations."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
