"use client";

import styles from "./overlay.module.scss";
import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }: any) {
  return (
    <Fragment>
      {isOpen && (
        <div>
          <div className={styles.overlayBackground} onClick={onClose} />
          <div className={styles.overlayContainer}>
            <div className={styles.overlayControls}>
              <button
                className={styles.overlayClose}
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
