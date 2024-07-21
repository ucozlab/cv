import React from "react";
import {PDFViewer, Document, Page, View} from "@react-pdf/renderer";

import styles from "../styles/svStyles";
import Aside from "./Aside";
import Main from "./Main";

const CV = () => {
  return (
    <PDFViewer>
      <Document>
        <Page style={styles.body}>
          <View style={styles.page}>
            <Main/>
            <Aside/>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default CV