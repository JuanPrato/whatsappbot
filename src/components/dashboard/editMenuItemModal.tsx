"use client";

import { useEffect, useRef, useState } from "react";
import {
  TextInput,
  TextAreaInput,
  ButtonInput,
  HiddenInput,
} from "../shared/input";
import Modal from "../shared/modal";
import { Command, FileOption } from "@/common/types";
import { useFormState } from "react-dom";
import { updateMenuItem } from "@/app/dashboard/actions";
import { twMerge } from "tailwind-merge";
import { SelectInput } from "../shared/input.client";

interface Props {
  item?: Command;
  label?: string;
  openButtonColor?: string;
  phone: string;
  files: FileOption[];
}

export function EditMenuItemModal({
  item,
  label,
  openButtonColor,
  phone,
  files,
}: Props) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(updateMenuItem, null);

  useEffect(() => {
    if (state?.success) {
      setOpen(false);
    }
  }, [state]);

  return (
    <>
      <ButtonInput
        label={label || "Editar"}
        inputClassName={twMerge("min-w-[200px] bg-yellow-500", openButtonColor)}
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onCancel={() => {
          setOpen(false);
          formRef.current?.reset();
        }}
      >
        <form
          action={formAction}
          className="w-[400px] overflow-hidden rounded-lg bg-light p-5"
          ref={formRef}
        >
          <TextInput
            placeholder="Title"
            //boxClassName="border-b border-dark py-1"
            inputClassName="border-t-0 border-x-0 rounded-none outline-none border-b borde-dark"
            value={item?.title}
            error={state?.errors?.title}
            name="title"
            errorClassName="text-dark"
          />
          <div className="my-2 border-b border-dark border-opacity-30">
            <h3>Tus archivos</h3>
            <SelectInput
              options={files.map((f) => ({
                text: f.name || "",
                value: `${f.id}`,
              }))}
              selectedOptions={
                item?.files.map((file) => file.id.toString()) || []
              }
              name="files"
            />
          </div>
          <TextAreaInput
            label="Respuesta"
            inputClassName="min-h-[150px]"
            boxClassName="border-dark border-b border-opacity-30"
            value={item?.reply}
            error={state?.errors?.reply}
            name="reply"
            errorClassName="text-dark"
          />
          <HiddenInput value={item?.id} name="id" />
          <HiddenInput value={phone} name="phone" />
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
