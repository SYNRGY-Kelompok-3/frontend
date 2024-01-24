import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import BG1 from "../../../assets/Invoices/BG1.png";
import BG2 from "../../../assets/Invoices/BG2.png";
import styles from "./styles/style";

export const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Pembelian Tiket Berhasil</Text>
        <Image style={styles.leftParticle} src={BG1} />
        <Image style={styles.rightParticle} src={BG2} />
      </View>

      <View style={{ padding: "10px" }}>
        <Text style={styles.caption}>Detail Pemesanan</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaption}>
            <Text>No Pesanan</Text>
            <Text>Tanggal Pesanan</Text>
          </View>

          <View style={styles.innerCaptionSecondary}>
            <Text>1023123412</Text>
            <Text>01 Januari 2024</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.caption}>Detail Pembayaran</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaption}>
            <Text>Bank Pembayaran</Text>
            <Text>Nama Rekening</Text>
            <Text>Nomor Rekening</Text>
          </View>

          <View style={styles.innerCaptionSecondary}>
            <Text>Bank Mandiri</Text>
            <Text>Charles Wilson</Text>
            <Text>654234876321</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.caption}>Detail Pemesan</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaption}>
            <Text>Nama Lengkap</Text>
            <Text>No. Handphone</Text>
            <Text>Email</Text>
          </View>

          <View style={styles.innerCaptionSecondary}>
            <Text>Tn. Charles Wilson</Text>
            <Text>085310234121</Text>
            <Text>travel@gmail.com</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.caption}>Detail Pemesanan</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaptionSpecial}>
            <Text>Tn. Charles Wilson</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.caption}>Detail Pembelian</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaption}>
            <Text>Citilink (Dewasa) x1</Text>
            <Text>Biaya Layanan</Text>
            <Text style={{ fontSize: "18px", fontFamily: "Helvetica-Bold", color: "#000000" }}>
              Harga Total
            </Text>
          </View>

          <View style={styles.innerCaptionSecondary}>
            <Text>Rp1.500.000</Text>
            <Text>Rp25.000</Text>
            <Text style={{ fontSize: "18px", fontFamily: "Helvetica-Bold", color: "#498cfc" }}>
              Rp1.525.000
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </Page>
  </Document>
);
