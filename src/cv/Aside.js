import React from "react";
import {View, Text, Image, Link} from "@react-pdf/renderer";

import styles from "../styles/main";

const Aside = () => {
  return (
    <View style={styles.aside}>
      <View style={[styles.flex, styles.flexCenter]}>
        <Image
          style={styles.avatar}
          src="https://ucozlab.github.io/cv/images/ava_card.jpg"
        />
      </View>
    </View>
  )
}

export default Aside