import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";
import ExperienceView from "./ExperienceView";

const education = [
  {
    position: "BA in Information Technologies and Systems",
    company: "Cherkasy State Technological University",
    period: "Sep 2003 – May 2008",
    location: "Cherkasy, Ukraine"
  },
  {
    position: "Student",
    company: "Geek Hub",
    period: "Sep 2015 – May 2016",
    location: "Cherkasy, Ukraine"
  },
  {
    position: "Student",
    company: "Masters Academy",
    period: "Sep 2016 – May 2017",
    location: "online"
  },
];

const lastJobIndex = education.length - 1;

const Education = () => {
  return (
    <View>
      <View style={styles.main__block}>
        <Text style={[styles.title, styles.h2]}>Education & Courses</Text>
        <View style={styles.main__content}>
          {education.map((edu, eduIndex) => {
            return <ExperienceView job={edu}
                                   jobIndex={eduIndex}
                                   key={edu.company}
                                   lastJobIndex={lastJobIndex} />
          })}
        </View>
      </View>
    </View>
  )
}

export default Education