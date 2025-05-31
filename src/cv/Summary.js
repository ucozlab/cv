import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../styles/main";

const Summary = () => {
  return (
    <View style={[styles.main__block]}>
      <Text style={[styles.title, styles.h2]}>Profile Summary</Text>
      <Text>
        Highly skilled Frontend Engineer with 10+ years of experience building user-centric web
        applications. Expert in JavaScript frameworks (React), modern CSS (SCSS, Tailwind CSS), and advanced browser
        technologies (Web/Service Workers, Canvas/SVG). Passionate about collaborating with design teams (Figma,
        Adobe XD) to deliver intuitive, pixel-perfect interfaces. Proficient in TypeScript and testing tools, with
        solid knowledge of Node.js build processes and tooling. Adaptable professional eager to contribute to global
        teams, open to relocation, and focused on driving performance, accessibility, and scalability in all
        projects.
      </Text>
    </View>
  )
}

export default Summary