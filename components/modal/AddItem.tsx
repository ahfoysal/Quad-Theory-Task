import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import Form from "../forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "../forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";

import FormTextArea from "../forms/FormTextArea";
import FormCheckBox from "../forms/FormCheckBox";
import { ItemSchema } from "@/schemas/Item";
type FormValues = {
  email: string;
  password: string;
};
export default function AddItem() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Button
        variant="flat"
        className="bg-transparent text-orange"
        onPress={onOpen}
        color="primary"
      >
        Add More
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <Form
                submitHandler={onSubmit as SubmitHandler<any>}
                resolver={yupResolver(ItemSchema)}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Add Item
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-4">
                    <FormInput label="Name" type="text" name="name" />
                    <FormInput label="Price" type="number" name="price" />
                    <FormTextArea label="Description" name="description" />
                    <FormCheckBox label="Is Popular?" name="isPopular" />
                    <FormCheckBox
                      label="Is Recommended?"
                      name="isRecommended"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="solid"
                    className="bg-orange text-white"
                    type="submit"
                  >
                    Add
                  </Button>
                </ModalFooter>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
