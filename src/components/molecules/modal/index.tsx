"use client";

import { FC, ReactNode } from "react";
import Button from "@/components/atoms/button";
import Container from "@/components/atoms/container";
import { useModalStore } from "@/store/useModalStore";

interface IModal {
  title: string;
  children: ReactNode;
  isSubmit?: boolean;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const Modal: FC<IModal> = ({
  title,
  children,
  isSubmit,
  onSubmit,
  onCancel,
}) => {
  const { openModal, setOpenModal } = useModalStore();

  const handleClose = () => {
    onCancel?.();
    setOpenModal(false);
  };

  if (!openModal) return;

  return (
    <Container
      className="fixed top-0 left-0 w-screen h-screen z-[3] flex items-center justify-center bg-black/50 overflow-hidden font-pokemon"
      onClick={() => handleClose()}
      role="button"
    >
      <div
        className="lg:max-w-[60%] max-h-full overflow-y-auto bg-white p-2 border-x-[10px] border-skyblue outline outline-4 outline-slate rounded-sm mx-1 flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="text-black text-shadow-gray">
          <h1 className="text-2xl">{title}</h1>
          {children}
        </section>
        <section className="w-full flex flex-row gap-2 items-center justify-end">
          <Button title={isSubmit ? "Cancel" : "Close"} onClick={handleClose} />
          {isSubmit ? <Button title="Submit" onClick={onSubmit} /> : null}
        </section>
      </div>
    </Container>
  );
};

export default Modal;
