import { useNavigation } from "@react-navigation/native";
import routes from "../../../routes";

const useNavigate = () => {
    const navigation = useNavigation();
    type Routes = keyof typeof routes; 
    const navigate = (name : Routes) => {
        navigation.navigate(routes[name].name)
    }
    return {
        navigate
    };
}

export default useNavigate
