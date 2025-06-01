import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const techs = [
  {title: "Languages & Frameworks", text: "JavaScript (ES6+), TypeScript, React, React-Redux, HTML5, CSS3"},
  {title: "Web Technologies", text: "REST, Service Workers, Web Workers, Canvas, SVG, Progressive Web Apps"},
  {title: "Styling & UI", text: "SCSS, Tailwind CSS, Responsive Design, Cross-browser Compatibility"},
  {title: "Libraries & Tools", text: "Figma, Zeplin, Adobe XD, Webpack, Gulp, Babel, NPM/Yarn,"},
  {title: "Basic Backend Exposure", text: "Node.js (basic REST API development), C# & PHP (syntax & small fixes)"},
  {title: "Testing & QA", text: "Jest, Mocha, React Testing Library"},
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