import {Font, StyleSheet} from '@react-pdf/renderer';
import helpers from "./helpers";

Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2'
});

Font.register({
  family: 'Rubik',
  src: 'https://fonts.gstatic.com/s/rubik/v3/D4HihERG27s-BJrQ4dvkbw.ttf'
});

Font.register({
  family: 'Material Symbols Outlined',
  src: 'https://fonts.gstatic.com/s/materialsymbolsoutlined/v195/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2'
});

const Colors = {
  main: "#384347",
  blue: "#008cff",
  darkBlue: "#22405C",
  darkBlue2: "#182D40",
}


export default StyleSheet.create({
  ...helpers,
  body: {
    fontFamily: 'Inter',
    color: Colors.main,
  },
  page: {
    width: "100%",
    display: "flex",
    alignItems: "flex-top",
    flexDirection: "row",
    height: "100%",
  },
  main: {
    padding: "30px",
    width: "65%",
    flex: "0 0 65%",
    backgroundColor: "white",
  },
  name: {
    fontSize: 24,
    fontFamily: 'Rubik',
    textAlign: 'left',
  },
  position: {
    fontSize: 12,
    textAlign: 'left',
    color: Colors.blue,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Rubik'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
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
  iconPhone: {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
    color: "red",
    fontSize: 14,
  },
  contacts: {},
  contact: {},
  contactIcon: {
    width: 24,
    height: 24,
  },
  contactText: {},
  /**** Aside ****/
  aside: {
    backgroundColor: Colors.darkBlue,
    width: "35%",
    flex: "0 0 35%",
    borderTop: "10px solid " + Colors.darkBlue2,
  },
  avatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    marginVertical: 15,
    marginHorizontal: 100,
  },
});