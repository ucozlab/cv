import React from "react";
import {PDFViewer, Document, Page, View, Text, Image} from "@react-pdf/renderer";

import styles from "../styles/svStyles";
import Header from "./Header";
import Aside from "./Aside";

const Main = () => {
  return (
    <PDFViewer>
      <Document>
        <Page style={styles.body}>
          <View style={styles.page}>
            <View style={styles.main}>
              <Header/>
              <Text style={styles.subtitle}>
                Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
                Quijote de la Mancha
              </Text>
              <Text style={styles.text}>
                En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
                noches leyendo de claro en claro, y los días de turbio en turbio, y así,
                del poco dormir y del mucho leer, se le secó el cerebro, de manera que
                vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
                en los libros, así de encantamientos, como de pendencias, batallas,
                desafíos, heridas, requiebros, amores, tormentas y disparates
                imposibles, y asentósele de tal modo en la imaginación que era verdad
                toda aquella máquina de aquellas soñadas invenciones que leía, que para
                él no había otra historia más cierta en el mundo.
              </Text>
              <Text style={styles.subtitle} break>
                Capítulo II: Que trata de la primera salida que de su tierra hizo el
                ingenioso Don Quijote
              </Text>
            </View>
            <Aside/>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default Main