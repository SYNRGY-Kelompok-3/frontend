import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import BG1 from "../../../assets/Invoices/BG1.png";
import BG2 from "../../../assets/Invoices/BG2.png";
import styles from "./styles/style";

interface PDFProps {
  orderNumber: number | string;
  orderDate: string;
  bankName: string;
  accountName: string;
  accountNumber: number | string;
  fullName: string;
  phoneNumber: number | string;
  emailAddress: string;
  orderName: string;
  orderPrice: number | string;
  serviceFee: number | string;
  totalPayment: number | string;
}

export const MyDocument = ({
  orderNumber,
  orderDate,
  bankName,
  accountName,
  accountNumber,
  fullName,
  phoneNumber,
  emailAddress,
  orderName,
  orderPrice,
  serviceFee,
  totalPayment,
}: PDFProps) => (
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
            <Text>{orderNumber}</Text>
            <Text>{orderDate}</Text>
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
            <Text>{bankName}</Text>
            <Text>{accountName}</Text>
            <Text>{accountNumber}</Text>
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
            <Text>{fullName}</Text>
            <Text>{phoneNumber}</Text>
            <Text>{emailAddress}</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.caption}>Detail Pemesanan</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaptionSpecial}>
            <Text>{fullName}</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.caption}>Detail Pembelian</Text>

        <View style={styles.innerContainer}>
          <View style={styles.innerCaption}>
            <Text>{orderName}</Text>
            <Text>Biaya Layanan</Text>
            <Text style={{ fontSize: "18px", fontFamily: "Helvetica-Bold", color: "#000000" }}>
              Harga Total
            </Text>
          </View>

          <View style={styles.innerCaptionSecondary}>
            <Text>Rp. {Number(orderPrice).toLocaleString()}</Text>
            <Text>Rp. {Number(serviceFee).toLocaleString()}</Text>
            <Text style={{ fontSize: "18px", fontFamily: "Helvetica-Bold", color: "#498cfc" }}>
              Rp. {Number(totalPayment).toLocaleString()}
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </Page>
  </Document>
);
