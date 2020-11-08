import { useDispatch } from "react-redux";
import { gamingActions } from "../../../features/gaming";
import useModalsController from "../useModalsController";
import useNavigate from "../useNavigate";

const useGameAgain = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigate();
  const { close } = useModalsController()
  const again = () => {
    close("createGame");
    dispatch(gamingActions.reset());
    navigate("createNewGame");
  };
  return {
    again,
  };
};

export default useGameAgain;
