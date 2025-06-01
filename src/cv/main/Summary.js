import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const Summary = () => {
  return (
    <View style={[styles.main__block]}>
      <Text style={[styles.title, styles.h2]}>Professional Summary</Text>
      <View style={styles.main__content}>
        <Text>
          Experienced Frontend Developer with over 10 years of hands-on experience in developing and optimizing
          interactive, user-friendly, and feature-rich web applications. Adept at working with modern JavaScript
          technologies including React, SCSS, Tailwind, Canvas/SVG, and various design tools (Figma, Adobe XD). Strong
          collaborator with a sharp eye for UI detail, capable of delivering high-quality solutions with clean,
          maintainable code. Open to relocation opportunities.
        </Text>
      </View>
    </View>
  )
}

export default Summary