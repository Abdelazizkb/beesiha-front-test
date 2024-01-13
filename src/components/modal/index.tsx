import React, { PropsWithChildren, useRef } from "react";
import useOutSideClick from "utils/use-click-outside";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import styles from "./styles.module.scss";

export interface IPopup {
  title?: string;
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

// difference between components and atoms components can have external imports from atoms
// model can have IconButton component in close button
// I was going to add IconButton @atom that s why I put it as component

const Modal: React.FC<PropsWithChildren<IPopup>> = ({
  title,
  children,
  close,
  isOpen,
}) => {
  const popover = useRef();
  useOutSideClick(popover, () => close());
  return isOpen ? (
    <div className={styles.overlay}>
      <div ref={popover as any} className={styles.modal}>
        <div className={styles.header}>
          <span>{title}</span>
          <CloseIcon onClick={() => close()} />
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
// eslint-disable-next-line react-refresh/only-export-components
export { usePopup } from "./use-popup";
