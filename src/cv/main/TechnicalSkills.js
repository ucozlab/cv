import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const techs = [
  {title: "Languages & Frameworks", text: "JavaScript (ES2015+), TypeScript, React Ecosystem, HTML5, CSS3"},
  {title: "Basic Backend Exposure", text: "Node.js, Express, MongoDB, C# & PHP (syntax & small fixes)"},
  {title: "Web Technologies", text: "Docker, CI/CD, REST, Service Workers, Web Workers, Canvas, SVG, PWA"},
  {title: "Styling & UI", text: "SCSS, Tailwind CSS, BEM, Responsive, Flex/Grid Layouts, CSS Animations, CSS Preprocessors"},
  {title: "Libraries & Tools", text: "Figma, Zeplin, Adobe XD, Webpack, Gulp, Babel, NPM/Yarn/Bun"},
  {title: "Testing & QA", text: "Jest, Mocha, React Testing Library, Browserstack"},
  {title: "Version Control & Workflow", text: "Git, Jira, Redmine, Trello, Agile Methodology"},
]

const TechnicalSkills = () => {
  return (
    <View style={[styles.main__block]}>
      <Text style={[styles.title, styles.h2]}>Technical Skills</Text>
      <View>
        {techs.map(tech => {
          return (
            <View style={{ flexDirection: "row", marginBottom: 1 }} key={tech.title}>
              <Text style={{ marginHorizontal: 4 }}>•</Text>
              <View>
                <Text style={{ fontFamily: 'RubikSemiBold' }}>{tech.title}: </Text>
                <Text>{tech.text}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default TechnicalSkills