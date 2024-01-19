import Router from "./routes/routes";
import dayjs from "dayjs";
import "dayjs/locale/id";

function App() {
  dayjs.locale("id-ID");
  return (
    <>
      <Router />
    </>
  );
}

export default App;
