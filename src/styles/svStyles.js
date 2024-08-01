import {Font, StyleSheet} from '@react-pdf/renderer';
import helpers from "./helpers";

Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2'
});

Font.register({
  family: 'RubikBold',
  src: 'https://fonts.gstatic.com/s/rubik/v3/D4HihERG27s-BJrQ4dvkbw.ttf'
});

Font.register({
  family: 'Rubik',
  src: 'https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFUkU1Z4Y.woff2'
});

const Colors = {
  main: "#384347",
  blue: "#008cff",
  darkBlue: "#22405C",
  darkBlue2: "#182D40",
  light: "#bdbdbd",
}

const Typography = {
  h1: {
    fontSize: 18,
    fontFamily: 'RubikBold',
  },
  position: {
    fontSize: 11,
    color: Colors.blue,
  },
  contacts: {
    fontFamily: 'Rubik',
    fontSize: 8,
    color: Colors.main,
  }
}


export default StyleSheet.create({
  /**** General ****/
  ...helpers,
  body: {
    fontFamily: 'Inter',
    color: Colors.main,
    fontWeight: 400,
  },
  page: {
    width: "100%",
    display: "flex",
    alignItems: "flex-top",
    flexDirection: "row",
    height: "100%",
  },
  cv: {
    padding: "23 28",
    width: "65%",
    flex: "0 0 65%",
    backgroundColor: "white",
  },
  /**** Header ****/
  header: {
    marginBottom: 24,
  },
  name: {
    ...Typography.h1,
    textAlign: 'left',
    marginBottom: 2,
  },
  position: {
    ...Typography.position,
    textAlign: 'left',
    marginBottom: 5,
  },
  contacts: {
  },
  contact: {
    marginRight: 10,
  },
  contactLast: {
    marginRight: 0,
  },
  contactIcon: {
    width: 14,
    height: 14,
    display: "flex",
    marginRight: 2,
  },
  contactText: {
    ...Typography.contacts,
    textDecoration: "none",
  },
  /**** Aside ****/
  aside: {
    backgroundColor: Colors.darkBlue,
    width: "35%",
    flex: "0 0 35%",
    borderTop: "10px solid " + Colors.darkBlue2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 15,
    marginHorizontal: 100,
  },
  /**** Main ****/
  main: {},
  main__block: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    fontSize: 14,
    fontFamily: 'RubikBold',
    fontWeight: 400,
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: 12,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    fontFamily: 'RubikBold',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});