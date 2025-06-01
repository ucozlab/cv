import React from "react";
import {PDFViewer, Document, Page, View} from "@react-pdf/renderer";

import styles from "../styles/main";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

console.log("styles", styles);

const CV = () => {
  return (
    <PDFViewer>
      <Document>
        <Page style={[styles.body, styles.color_main]}>
          <View style={styles.page}>
            <Main/>
            <Sidebar/>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default CV