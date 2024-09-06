import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import toaster from "../../../../configs/toaster";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Routes } from "../../../../navigations/routes";

const UserLoginApi = createAsyncThunk(
  "post/UserLogin",
  async (payload: any) => {
    const { data } = await martApi
      .post("/auth/login", {
        ...payload,
      })
      .then(async (res) => {
        const { accessToken } = res.data.user;
        await AsyncStorage.setItem("user_token", accessToken);
        return res;
      })
      .catch((err) => err.response);

    return data;
  }
);

export const getAccount = createAsyncThunk("post/loginSlice", async () => {
  const data = await martApi
    .get(`/user/get-account`, await jsonHeader(""))
    .then(async (res) => {
      return res;
    })
    .catch((e) => {});
  return data;
});
export type InitialState = {
  userData: {
    accessToken: string;
    _id: string;
  };
  loading: boolean;
  status: string;
  wasGoing: string;
  error: any;
};

const initialState = {
  userData: { accessToken: "", _id: "" },
  loading: false,
  status: "idle",
  wasGoing: "no-where",
  error: {},
};
const UserSlice = createSlice({
  name: "Corisio Login",
  initialState,
  reducers: {
    userLogout: (state) => {
      // Perform async actions without returning a promise directly
      const logoutAsync = async () => {
        try {
          await AsyncStorage.removeItem("user_token");
          await AsyncStorage.removeItem("store_token");
          window.location.replace("/");
          return initialState;
        } catch (error) {
          console.error("Error logging out:", error);
          return initialState;
        }
      };

      logoutAsync(); // Call the async function inside the reducer

      // Reducers should not return directly, so return void or undefined
      return;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccount.fulfilled, (state, action: any) => {
        state.loading = false;
        state.userData = action.payload.user;
      })
      .addCase(getAccount.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { userLogout } = UserSlice.actions;

// export states
export default UserSlice.reducer;

/*

*/

export const loginHandler = (
  payload: any,
  router: any,
  dispatch: any,
  returnUrl: any,
  setLoading: any
) => {
  
  
  setLoading(true);
  dispatch(UserLoginApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      if (res.type === "success") {
        dispatch(getAccount())
          .then(unwrapResult)
          .then(() => {
            if (returnUrl) {
              router.navigate(returnUrl);
            } else {
              router.navigate(Routes.homeScreen);
            }
          });
        setLoading(false);
      }

      setLoading(false);
    })
    .catch((err: any) => {
      console.log(err);
      toaster({ message: "No Connection", type: "error" });
      setLoading(false);
    });
};

// providerApi
// google

const oAuth = (payload: any) =>
  createAsyncThunk("post/oAuth", async (payload1) => {
    const data = await martApi
      .get(`/auth/refresh-token?token=${payload.token}`)
      .then(async (res) => {
        const { accessToken } = res.data.user;
        await AsyncStorage.setItem("user_token", accessToken);
        return res;
      })
      .catch((e) => console.log(e.response));
    return data;
  });
export const oAuthHandler = (payload: any, router: any, dispatch: any) => {
  dispatch(oAuth(payload))
    .then(unwrapResult)
    .then((res: any) => {
      toaster({ ...res });
      if (res.type === "success") {
        dispatch(getAccount())
          .then(unwrapResult)
          .then(() => {});
        router.navigate(Routes.homeScreen);
        console.log("here afer redir");
      }
    })
    .catch((err: any) => {
      console.log(err);
      toaster({ message: "No Connection", type: "error" });
    });
};
