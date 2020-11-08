import { useNavigation } from "@react-navigation/native";
import names from "../../../routes/names";

const useNavigate = () => {
    const navigation = useNavigation();
    type Routes = keyof typeof names; 
    const navigate = (name : Routes) => {
        navigation.navigate(names[name])
    }
    return {
        navigate
    };
}

export default useNavigate
