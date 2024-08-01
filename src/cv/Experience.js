import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../styles/svStyles";

const Experience = () => {
  return (
    <View style={styles.main__block}>
      <Text style={styles.title}>Experience</Text>
      <View style={[styles.flex, styles.flexBetween]}>
        <Text style={styles.subTitle} break>Senior Frontend Developer</Text>
        <Text style={styles.period} break>10/2019 - present</Text>
      </View>
    </View>
  )
}

export default Experience