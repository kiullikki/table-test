import React, { useRef, useCallback, useEffect } from "react";
import { Button } from "../Button";
import "./style.scss";

type IProps = {
  id: string;
  close?: () => void;
};

const DICTIONARY = {
  SHOW: "Show",
  CLOSE: "Close",
};

export const KeywordsModal = (props: IProps) => {
  const { id = "", close = () => {} } = props;
  const modal = useRef<HTMLDivElement>(null);

  const outsideEvtListener = useCallback(
    (e: any) => {
      if (e.target === modal.current || modal?.current?.contains(e!.target)) {
        return;
      }
      close();
    },
    [modal, close]
  );

  const unsubscribeEvent = useCallback(() => {
    document.removeEventListener("click", outsideEvtListener);
  }, [outsideEvtListener]);

  useEffect(() => {
    document.addEventListener("click", outsideEvtListener);
    return unsubscribeEvent;
  }, [outsideEvtListener, unsubscribeEvent]);

  return (
    <div className="veil" onClick={outsideEvtListener}>
      <section className="modal" ref={modal}>
        <h2>
          <span>{`${DICTIONARY.SHOW}: `}</span>
          <span>{id}</span>
        </h2>
        <Button text={DICTIONARY.CLOSE} clickHandler={close} />
      </section>
    </div>
  );
};
