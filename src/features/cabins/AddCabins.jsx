import { useState } from "react";
import Button from "../../ui/Button";
import CreateEditCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabins() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen((show) => !show)}>
        Add New Cabin
      </Button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateEditCabinForm onCloseModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
