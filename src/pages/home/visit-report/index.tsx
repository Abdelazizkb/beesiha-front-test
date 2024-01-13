import { IPopup, Modal } from "components";
import styles from "../styles.module.scss";
import clinicAvatar from "assets/clinic-avatar.png";
import { ReactComponent as NextIcon } from "assets/icons/arrow-right.svg";
import { ReactComponent as BackIcon } from "assets/icons/arrow-left.svg";
import { Button } from "@atoms";
import VisitReportForm from "./form";

const VisitReportModal: React.FC<Omit<IPopup, "title">> = ({ ...props }) => {
  return (
    <Modal title="Rapport de la visite" {...props}>
      <div className={styles.report}>
        <div className={styles.clinicInformation}>
          <div>
            <div className={styles.clinicAvatar}>
              <img src={clinicAvatar} alt="clinic-avatar" />
            </div>
            <p>Clinique Salam</p>
          </div>
          <Button color="primary" variant="outlined">
            Historique
          </Button>
        </div>
        <div className={styles.reportContent}>
          <div className={styles.reportStatus}>
            <span>Signé</span>
            <span>Visitée le 22 Août 2022 | 14:30</span>
          </div>
          <VisitReportForm />
          <div className={styles.buttonsContainer}>
            <Button color="primary" size="medium">
              Enregistrer
            </Button>
            <div>
              <Button color="primary" variant="link" startIcon={<BackIcon />}>
                Visite précédente
              </Button>
              <Button
                color="primary"
                variant="link"
                endIcon={<NextIcon />}
                disabled
              >
                Visite suivante
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VisitReportModal;
