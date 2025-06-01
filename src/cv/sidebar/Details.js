import React from "react";
import {View, Text} from "@react-pdf/renderer";

import styles from "../../styles/main";

const Details = () => {
  return (
    <View style={[styles.aside__block]}>
      <Text style={[styles.title, styles.h2, styles.border_white]}>Strengths</Text>
      <View>
        <Text>Accuracy, Punctuality, Attention to Detail, Team Communication</Text>
      </View>
    </View>
  )
}

export default Details