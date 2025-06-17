import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";
import ExperienceView from "./ExperienceView";

const jobs = [
  {
    position: "Senior Frontend Developer",
    company: "EvoSonic Ltd.",
    period: "Oct 2019 - present",
    location: "All over the world"
  },
  {
    position: "Frontend Developer (part-time)",
    company: "Noosphere Ventures",
    period: "Apr 2017 – Oct 2018",
    location: "Kyiv, Ukraine"
  },
  {
    position: "Frontend Developer",
    company: "Accellabs",
    period: "Jan 2017 – Oct 2019",
    location: "Kyiv, Ukraine"
  },
  {
    position: "Frontend Developer",
    company: "Mozidev",
    period: "Oct 2016 – Jan 2017",
    location: "Cherkasy, Ukraine"
  },
  {
    position: "Frontend Developer",
    company: "uCoz",
    period: "Mar 2016 – Oct 2016",
    location: "Cherkasy, Ukraine"
  },
  {
    position: "HTML Developer",
    company: "Ucozlab Design Studio",
    period: "Apr 2014 – Mar 2016",
    location: "Cherkasy, Ukraine"
  },
];

const lastJobIndex = jobs.length - 1;

const Experience = () => {
  return (
    <View>
      <View style={styles.main__block}>
        <Text style={[styles.title, styles.h2]}>Experience</Text>
        <View style={styles.main__content}>
          {jobs.map((job, jobIndex) => {
            return <ExperienceView job={job}
                                   jobIndex={jobIndex}
                                   key={job.company}
                                   lastJobIndex={lastJobIndex} />
          })}
        </View>
      </View>
    </View>
  )
}

export default Experience