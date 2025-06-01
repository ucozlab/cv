import React from "react";
import {View, Text, Link} from "@react-pdf/renderer";

import styles from "../../styles/main";
import Icons from "../Icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={[styles.name, styles.h1]}>Artem Luzhanovskyi</Text>
      <Text style={[styles.position, styles.color_blue, styles.fontRubik]}>Senior Frontend Developer</Text>
      <View style={[styles.flex, styles.flexRow, styles.contacts]}>
        <View style={[styles.flex, styles.flexCenter, styles.flexRow, styles.contact]}>
          {Icons.PhoneIcon}
          <Link src="tel:+380631208277" style={[styles.contactText, styles.color_main, styles.fontRubik]}>+380631208277</Link>
        </View>
        <View style={[styles.flex, styles.flexCenter, styles.flexRow, styles.contact]}>
          {Icons.EmailIcon}
          <Link src="email:submerged311@gmail.com" style={[styles.contactText, styles.color_main, styles.fontRubik]}>submerged311@gmail.com</Link>
        </View>
        <View style={[styles.flex, styles.flexCenter, styles.flexRow, styles.contactLast]}>
          {Icons.AddressIcon}
          <Text style={[styles.contactText, styles.color_main, styles.fontRubik]}>Vietnam, Phu Quoc (temp)</Text>
        </View>
      </View>
    </View>
  )
}

export default Header