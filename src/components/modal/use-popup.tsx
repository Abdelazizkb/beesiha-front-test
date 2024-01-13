import { useState } from "react";

export const usePopup = () => {
  const [isOpen, open] = useState(false);

  return {
    open: () => open(true),
    close: () => open(false),
    isOpen,
  };
};
