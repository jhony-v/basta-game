import { useDispatch } from "react-redux"
import { modalsControllerActions, ModalsControllerKey } from "../../../features/modalsController";

const useModalsController = () => {
    const dispatch = useDispatch();
    const open = (key : ModalsControllerKey) => {
        dispatch(modalsControllerActions.setOpen(key));
    }
    const close = (key : ModalsControllerKey) => {
        dispatch(modalsControllerActions.setClose(key));
    }
    return {
        open,
        close,
    }
}

export default useModalsController
