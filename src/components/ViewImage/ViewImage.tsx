import { Modal } from "../Modal/Modal";

type TViewImage = {
  image: string;
  onClose: () => void;
};

export const ViewImage = ({ image, onClose }: TViewImage) => {
  return (
    <Modal
      isOpen
      centered
      onClose={onClose}
      className="!overflow-hidden rounded-2xl w-[30rem] lg:w-[50%] h-[32rem] !p-0"
      bodyClassName="!p-0"
    >
      <img
        src={image}
        className="w-full h-full object-cover rounded-2xl"
        alt=""
      />
    </Modal>
  );
};
