import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../styles/main";

const Experience = () => {
  return (
    <View>
      <View style={styles.main__block}>
        <Text style={[styles.title, styles.h2]}>Experience</Text>
        <View style={styles.mb4}>
          <View style={[styles.flex, styles.flexBetween, styles.mb2]}>
            <View style={[styles.flex1]}>
              <Text style={styles.subTitle}>Senior Frontend Developer</Text>
            </View>
            <View style={[styles.flex1, styles.textRight]}>
              <Text style={styles.period}>10/2019 - present</Text>
            </View>
          </View>
          <View style={[styles.flex, styles.flexBetween, styles.mb2]}>
            <View style={[styles.flex1]}>
              <Text style={styles.color_blue}>EvoSonic Ltd.</Text>
            </View>
            <View style={[styles.flex1, styles.textRight]}>
              <Text style={styles.period}>All over the world</Text>
            </View>
          </View>
          <View style={[]}>
            <Text style={styles.period}>Full ecommerce app Visualization Software suggesting customers the flexibility of Instant Quoting and Visualization, Square Foot Calculation and Slab Layout,
              Lead Capture, Contracts and Payments (full ecommerce app)</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Experience