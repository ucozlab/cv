import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../styles/svStyles";
import Header from "./Header";

const Main = () => {
  return (
    <View style={styles.cv}>
      <Header/>
      <View style={styles.main}>
        <Text style={styles.title}>Profile Summary</Text>
        <Text style={styles.text}>
          Highly skilled frontend developer with over 10 years of experience in web development.
          Proficient in Javascript programming language
        </Text>
        <Text style={styles.title}>Experience</Text>
        <Text style={styles.subTitle} break></Text>
        <Text style={styles.text}>
          En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
          noches leyendo de claro en claro, y los días de turbio en turbio, y así,
          del poco dormir y del mucho leer, se le secó el cerebro, de manera que
          vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
        </Text>
        <Text style={styles.title}>Education</Text>
        <Text style={styles.text}>
          En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
          noches leyendo de claro en claro, y los días de turbio en turbio, y así,
          del poco dormir y del mucho leer, se le secó el cerebro, de manera que
          vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
        </Text>
        <Text style={styles.title}>Training / Courses</Text>
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