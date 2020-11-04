import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface AuthPayload {
    isAuth: false,
    user?: {
        id: string,
        username: string
    }   
}

const setStorageAsync = createAsyncThunk("authSliceRegister",async (payload : AuthPayload) => {
    return await AsyncStorage.setItem("auth",JSON.stringify(payload)).then(e=>true).catch(e=>false) ;
});

const getStorageAsync = createAsyncThunk("authSliceRegister",async () : Promise<AuthPayload> => {
    const data = await AsyncStorage.getItem("auth");
    return data != null ? JSON.parse(data) as AuthPayload : {isAuth:false};
});

const authSlice = createSlice({
    name : "authSlice",
    initialState : {
        isAuth : false,
        user : {
            id : "",
            username : ""
        }
    },
    reducers : {
    },
    extraReducers : builder => {
        builder.addCase(setStorageAsync.fulfilled,(state,{payload}) => {
            state.isAuth = payload.isAuth;
            state.user = payload.user;
        });
        builder.addCase(getStorageAsync.fulfilled,(state,{payload})=>{
            if(state.isAuth) {
                state.isAuth = payload.isAuth;
                state.user = payload.user || {id:"",username:""};
            }
            else state.isAuth = false;
        })
    }
})

const { actions, reducer } = authSlice;

export const authReducer = reducer;
export const authActions = actions;
