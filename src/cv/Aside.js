import React from "react";
import {View, Text, Image, Link} from "@react-pdf/renderer";

import styles from "../styles/svStyles";

const Aside = () => {
  return (
    <View style={styles.aside}>
      <View style={[styles.flex, styles.flexCenter]}>
        <Image
          style={styles.avatar}
          src="../images/ava_card.jpg"
        />
      </View>
    </View>
  )
}

export default Aside