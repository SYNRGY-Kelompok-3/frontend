import { StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "10px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  leftParticle: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100px",
  },
  rightParticle: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100px",
  },
  headerContainer: {
    borderRadius: "10px",
    backgroundColor: "#3E7BFA",
    padding: "20px",
  },
  caption: {
    fontFamily: "Helvetica-Bold",
    fontSize: "12px",
    color: "#000000",
    marginBottom: "10px",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerCaption: {
    fontSize: "11px",
    color: "#718096",
    gap: "10px",
  },
  innerCaptionSpecial: {
    fontSize: "11px",
    color: "#5b8bf9",
    gap: "10px",
    backgroundColor: "#e1effe",
    width: "100%",
    padding: "5px",
  },
  innerCaptionSecondary: {
    fontSize: "11px",
    fontFamily: "Helvetica-Bold",
    gap: "10px",
    alignItems: "flex-end",
  },
  divider: {
    borderBottom: "1px solid #ededed",
    marginVertical: 10,
  },
});

export default styles;
