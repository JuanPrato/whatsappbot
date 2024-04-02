"use client";

import { useEffect, useState } from "react";
import {
  TextInput,
  TextAreaInput,
  ButtonInput,
  HiddenInput,
} from "../shared/input";
import Modal from "../shared/modal";
import { Command } from "@/common/types";
import { useFormState, useFormStatus } from "react-dom";
import { updateMenuItem } from "@/app/dashboard/actions";

interface Props {
  item: Command;
}

export function EditMenuItemModal({ item }: Props) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(updateMenuItem, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
    }
  }, [state]);

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
        <form
          action={formAction}
          className="min-w-[350px] rounded-lg bg-light p-5"
        >
          <TextInput
            placeholder="Title"
            //boxClassName="border-b border-dark py-1"
            inputClassName="border-t-0 border-x-0 rounded-none outline-none border-b borde-dark"
            value={item.title}
            error={state?.errors?.title}
            name="title"
            errorClassName="text-dark"
          />
          <div className="h-[150px] border-b border-dark border-opacity-30"></div>
          <TextAreaInput
            label="Respuesta"
            inputClassName="min-h-[150px]"
            boxClassName="border-dark border-b border-opacity-30"
            value={item.reply}
            error={state?.errors?.reply}
            name="reply"
            errorClassName="text-dark"
          />
          <HiddenInput value={item.id} name="id" />
          <ButtonInput
            label="Guardar"
            type="submit"
            inputClassName="w-full my-1"
          />
        </form>
      </Modal>
    </>
  );
}
