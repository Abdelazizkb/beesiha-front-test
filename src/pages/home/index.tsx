import { usePopup } from "components";
import VisitReportModal from "./visit-report";
import styles from "./styles.module.scss";
import { Button } from "@atoms";

const Home: React.FC = () => {
  const reportModal = usePopup();

  return (
    <main className={styles.home}>
      <h1>hi!</h1>
      <Button color="primary" size="medium" onClick={reportModal.open}>
        Open popup
      </Button>
      <VisitReportModal {...reportModal} />
    </main>
  );
};

export default Home;
