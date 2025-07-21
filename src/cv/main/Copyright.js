import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const Copyright = () => {
  return (
    <View style={{paddingLeft: 12}}>
      <Text style={styles.copyright}>(last edited: July 2025)</Text>
    </View>
  )
}

export default Copyright