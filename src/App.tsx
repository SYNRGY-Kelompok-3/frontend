import Router from "./routes/routes";
import dayjs from "dayjs";
import "dayjs/locale/id";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
function App() {
  dayjs.locale("id-ID");
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
