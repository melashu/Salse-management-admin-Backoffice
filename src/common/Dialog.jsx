import { deleteProduct, deleteUser } from "../redux/rootreducer";
import { confirmAlert } from "react-confirm-alert";

const deleteHandler = (event, id,type, dispatch, message) => {
  event.preventDefault();
  confirmAlert({
    title: message.title,
    message: message.body,
    closeOnEscape: true,
    closeOnClickOutside: true,
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          if (type === "user") {
            dispatch(deleteUser(id));
          } else if (type === "product") {
            dispatch(deleteProduct(id));
          }
        },
      },
      {
        label: "No",
      },
    ],
  });
};
export { deleteHandler };
