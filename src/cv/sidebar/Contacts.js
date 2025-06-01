import React from "react";
import {View, Text, Link} from "@react-pdf/renderer";

import styles from "../../styles/main";
import Icons from "../Icons";

const contacts = [
  {
    icon: Icons.LinkedInIcon,
    link: "https://linkedin.com/in/artemluzhanovskyi",
    linkText: "linkedin.com/in/artemluzhanovskyi",
    text: "LinkedIn",
  },
  {
    icon: Icons.StackOverflowIcon,
    link: "https://stackoverflow.com/users/8945962/artem-luzhanovskyi",
    linkText: "stackoverflow.com/users/8945962",
    text: "Stack Overflow",
  },
  {
    icon: Icons.GitHubIcon,
    link: "https://github.com/ucozlab",
    linkText: "github.com/ucozlab",
    text: "GitHub",
  },
  {
    icon: Icons.FacebookIcon,
    link: "https://facebook.com/artem.luzhanovskyi",
    linkText: "facebook.com/artem.luzhanovskyi",
    text: "Facebook",
  },
  {
    icon: Icons.MessengerIcon,
    link: "+380631208277",
    linkText: "+380631208277",
    text: "Viber/Telegram/WhatsApp",
  },
];


const Contacts = () => {
  return (
    <View style={[styles.aside__block]}>
      <Text style={[styles.title, styles.h2, styles.border_white]}>Find Me Online</Text>
      {contacts.map((contact) => (
        <View style={[styles.flex, styles.flexRow, {marginBottom: 10}]} key={contact.link}>
          <View style={{marginRight: 4, marginTop: 2}}>
            {contact.icon}
          </View>
          <View>
            <Text>{contact.text}</Text>
            <Link src={contact.link} style={[styles.contactText, styles.color_light]}>{contact.linkText}</Link>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Contacts