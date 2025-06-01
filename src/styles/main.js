import {StyleSheet} from '@react-pdf/renderer';
import "./fonts";
import helpers from "./helpers";
import colors, {colorStyles} from "./colors";
import typography from "./typography";


export default StyleSheet.create({
  /**** General ****/
  ...colorStyles,
  ...helpers,
  ...typography,
  page: {
    width: "100%",
    display: "flex",
    alignItems: "flex-top",
    flexDirection: "row",
    height: "100%",
  },
  cv: {
    padding: "23 27",
    width: "65%",
    flex: "0 0 65%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  /**** Header ****/
  header: {
    marginBottom: 24,
  },
  name: {
    textAlign: 'left',
    marginBottom: 2.5,
  },
  position: {
    fontSize: 12,
    textAlign: 'left',
    marginBottom: 6,
  },
  contacts: {
    fontSize: 9,
  },
  contact: {
    marginRight: 10,
  },
  contactLast: {
    marginRight: 0,
  },
  contactIcon: {
    width: 12,
    height: 12,
    display: "flex",
    marginRight: 2,
  },
  contactText: {
    fontSize: 9,
    textDecoration: "none",
  },
  /**** Aside ****/
  aside: {
    color: colors.white,
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 27,
    width: "35%",
    flex: "0 0 35%",
    // borderTopWidth: "10px",
    // borderTopStyle: "solid",
    // borderTopColor: colors.darkBlue2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 12.5,
    marginHorizontal: 100,
  },
  /**** Main ****/
  main: {},
  main__block: {
    marginBottom: 10,
  },
  main__content: {
    paddingLeft: 12,
  },
  title: {
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
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
  period: {
    fontSize: 9,
  },
  job: {
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomStyle: "dashed",
    borderBottomColor: colors.light,
  },
  aside__block: {
    marginBottom: 24,
  },
  copyright: {
   color: colors.light,
   fontSize: 8,
  }
});