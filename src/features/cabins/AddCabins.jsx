import Button from "../../ui/Button";
import CreateEditCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// export default function AddCabins() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsModalOpen((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
//           <CreateEditCabinForm onCloseModal={() => setIsModalOpen(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

// Compound Component React Pattern
export default function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateEditCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
