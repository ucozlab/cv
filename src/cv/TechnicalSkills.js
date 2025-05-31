import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../styles/main";

const TechnicalSkills = () => {
  return (
    <View style={[styles.main__block]}>
      <Text style={[styles.title, styles.h2]}>Technical Skills</Text>
      <View>
        <Text>
          Languages & Frameworks: JavaScript (ES6+), TypeScript, React, HTML5, CSS3
          Styling & UI: SCSS, Tailwind CSS, Responsive Design, Cross-browser Compatibility
          Libraries & Tools: Figma, Adobe XD, Webpack, Babel, npm/Yarn, Git
          Web Technologies: Service Workers, Web Workers, Canvas, SVG, Progressive Web Apps
          Testing & QA: Jest, Mocha, Cypress, React Testing Library, Selenium
          Backend Exposure: Node.js (Express, basic REST API development)
        </Text>
      </View>
    </View>
  )
}

export default TechnicalSkills