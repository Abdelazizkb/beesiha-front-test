import styles from "../styles.module.scss";
import { ReactComponent as MotifIcon } from "assets/icons/motif.svg";
import { ReactComponent as ResponsibleIcon } from "assets/icons/responsible.svg";
import { ReactComponent as CommentIcon } from "assets/icons/comment.svg";
import { ReactComponent as MailIcon } from "assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";

import { Input, Row, TexArea } from "@atoms";

const VisitReportForm = () => {
  return (
    <div className={styles.mainContent}>
      <div>
        <div className={styles.sectionTitle}>
          <MotifIcon />
          <span>Motif</span>
        </div>
        <Row gap="16px">
          <Input defaultValue="Signature de contrat" state="success" />
          <Input placeholder="Type d’abonnement" />
          <Input placeholder="Montant payé" />
        </Row>
        <Row gap="16px">
          <Input placeholder="Nbr de mois payés" />
          <Input placeholder="Méthode de paiement" />
        </Row>
      </div>
      <div>
        <div className={styles.sectionTitle}>
          <ResponsibleIcon />
          <span>Responsable</span>
        </div>
        <Row gap="8px">
          <Input size="medium" placeholder="Nom" defaultValue={"DJOUADI"} />
          <Input size="medium" placeholder="Prenom" defaultValue={"NADIA"} />
        </Row>
        <Row gap="8px">
          <Input
            startIcon={<PhoneIcon />}
            size="medium"
            placeholder="phone number"
            defaultValue={"0798525663"}
          />
          <Input
            startIcon={<MailIcon />}
            size="medium"
            placeholder="email"
            defaultValue={"nomprénom@mail.com"}
          />
        </Row>
      </div>
      <Row gap="8px">
        <span className={styles.inputRadio}>
          <input type="radio" id="test1" name="radio-group" checked />
          <label htmlFor="test1">Homme</label>
        </span>
        <span className={styles.inputRadio}>
          <input type="radio" id="test2" name="radio-group" />
          <label htmlFor="test2">Femme</label>
        </span>
      </Row>
      <div>
        <div className={styles.sectionTitle}>
          <CommentIcon />
          <span>Commentaires</span>
        </div>
        <Row>
          <TexArea
            style={{ minHeight: 100 }}
            placeholder="Add some text here..."
          />
        </Row>
      </div>
    </div>
  );
};

export default VisitReportForm;
