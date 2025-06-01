import React from "react";
import {View} from "@react-pdf/renderer";

import styles from "../../styles/main";
import Header from "./Header";
import Experience from "./Experience";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";
import Education from "./Education";
import Copyright from "./Copyright";

const Main = () => {
  return (
    <View style={styles.cv}>
      <View>
        <Header/>
        <View style={styles.main}>
          <Summary/>
          <TechnicalSkills/>
          <Experience/>
          <Education/>
        </View>
      </View>
      <Copyright/>
    </View>
  )
}

export default Main