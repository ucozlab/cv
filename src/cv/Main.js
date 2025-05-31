import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../styles/main";
import Header from "./Header";
import Experience from "./Experience";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";

const Main = () => {
  return (
    <View style={styles.cv}>
      <Header/>
      <View style={styles.main}>
        <Summary/>
        <TechnicalSkills/>
        <Experience/>
        <Text style={[styles.title, styles.h2]}>Education</Text>
        <Text style={styles.text}>BA in Information Technologies and Systems</Text>
        <Text style={[styles.title, styles.h2]}>Training / Courses</Text>
        <Text style={styles.text}>
          En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
          noches leyendo de claro en claro, y los días de turbio en turbio, y así,
          del poco dormir y del mucho leer, se le secó el cerebro, de manera que
          vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
        </Text>
      </View>
    </View>
  )
}

export default Main