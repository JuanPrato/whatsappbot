"use client";

import { useState } from "react";
import { TextInput, TextAreaInput, ButtonInput } from "../shared/input";
import Modal from "../shared/modal";
import { MenuItem } from "@/common/types";

interface Props {
  item: MenuItem;
}

export function EditMenuItemModal({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonInput
        label="Editar"
        inputClassName="min-w-[200px] bg-yellow-500"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <form action="" className="min-w-[350px] rounded-lg bg-light p-5">
          <TextInput
            placeholder="Title"
            //boxClassName="border-b border-dark py-1"
            inputClassName="border-t-0 border-x-0 rounded-none outline-none border-b borde-dark"
            value={item.title}
          />
          <div className="border-dark h-[150px] border-b border-opacity-30"></div>
          <TextAreaInput
            label="Respuesta"
            inputClassName="min-h-[150px]"
            boxClassName="border-dark border-b border-opacity-30"
            value={item.reply}
          />
          <ButtonInput label="Guardar" inputClassName="w-full my-1" />
        </form>
      </Modal>
    </>
  );
}
