import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState<string>("bottom-center");
  const [backdrop, setBackdrop] = useState<string>("blur");

  return (
    <div className="flex flex-col gap-2  ">
      <Button
        onPress={onOpen}
        className="max-w-fit bg-[#3c3c3c] text-white mt-4"
      >
        Filter
      </Button>
      <Modal
        isOpen={isOpen}
        placement={modalPlacement}
        onOpenChange={onOpenChange}
        backdrop={backdrop}
        className="bg-black text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody className="items-center" >
                <FilterMenu></FilterMenu>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
