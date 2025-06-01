import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const ExperienceView = (props) => {
  const {job, jobIndex, lastJobIndex} = props;
  const mainClasses = jobIndex
    ? jobIndex === lastJobIndex ? [styles.job, {border: 0, paddingBottom: 0}] : styles.job
    : [styles.job, {paddingTop: 0}]
  return (
    <View style={mainClasses}>
      <View style={[styles.flex, styles.flexBetween]}>
        <View style={[styles.flex1]}>
          <Text style={styles.subTitle}>{job.position}</Text>
        </View>
        <View style={styles.textRight}>
          <Text style={styles.period}>{job.period}</Text>
        </View>
      </View>
      <View style={[styles.flex, styles.flexBetween]}>
        <View style={[styles.flex1]}>
          <Text style={styles.color_blue}>{job.company}</Text>
        </View>
        <View style={styles.textRight}>
          <Text style={styles.period}>{job.location}</Text>
        </View>
      </View>
    </View>
  )
}

export default ExperienceView