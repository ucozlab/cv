import React from "react";
import {View, Text, Image, Link} from "@react-pdf/renderer";

import styles from "../styles/svStyles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>Artem Luzhanovskyi</Text>
      <Text style={styles.position}>Senior Frontend Developer</Text>
      <View style={styles.contacts}>
        <View style={[styles.flex, styles.contact]}>
          <Text style={[styles.contactIcon, styles.iconPhone]} />
          <Link src="tel:+380631208277" style={styles.contactText}>+380631208277</Link>
        </View>
      </View>
    </View>
  )
}

export default Header