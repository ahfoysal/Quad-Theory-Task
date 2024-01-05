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
import FormTextArea from "../forms/FormTextArea";
type FormValues = {
  email: string;
  password: string;
};
export default function AddItem() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {};
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
              <ModalHeader className="flex flex-col gap-1">
                Add Item
              </ModalHeader>
              <ModalBody>
                <Form
                  submitHandler={onSubmit as SubmitHandler<any>}
                  //   resolver={yupResolver(LoginSchema)}
                >
                  <div className="flex flex-col gap-4">
                    <FormInput label="Name" type="text" name="name" />
                    <FormInput label="Price" type="number" name="price" />
                    <FormTextArea label="Description" name="description" />
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  className="bg-orange text-white"
                  onPress={onClose}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
