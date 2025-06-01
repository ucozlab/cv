import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const languages = [
  {
    language: "English",
    level: "Upper Intermediate",
  },
  {
    language: "Ukrainian",
    level: "Native",
  },
];


const Languages = () => {
  return (
    <View style={[styles.aside__block]}>
      <Text style={[styles.title, styles.h2, styles.border_white]}>Languages</Text>
      {languages.map((lang) => (
        <View style={[styles.flex, styles.flexBetween, styles.mb2]} key={lang.language}>
          <View style={[styles.flex1]}>
            <Text style={styles.subTitle}>{lang.language}</Text>
          </View>
          <View style={styles.textRight}>
            <Text style={styles.period}>{lang.level}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Languages