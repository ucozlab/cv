import React from "react";
import {View, Image} from "@react-pdf/renderer";

import styles from "../../styles/main";
import Languages from "./Languages";
import Contacts from "./Contacts";
import Details from "./Details";

const Sidebar = () => {
  return (
    <View style={styles.aside}>
      <View style={[styles.flex, styles.flexCenter]}>
        <Image
          style={styles.avatar}
          src="https://ucozlab.github.io/cv/images/ava2.jpg"
        />
      </View>
      <Details/>
      <Languages/>
      <Contacts/>
    </View>
  )
}

export default Sidebar