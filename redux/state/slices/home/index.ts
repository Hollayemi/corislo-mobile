import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import martApi from "../api/baseApi";
import { jsonHeader } from "../api/setAuthHeaders";
// import { addNewView } from './view/view';

export const fetchProduct = (payload: any) =>
  createAsyncThunk("post/product-query", async (payload1) => {
    const { data } = await martApi
      .patch("/fetch-product", payload, {})
      .then((res: any) => {
        return res;
      })
      .catch((e) => {
        return e.response;
      });
    return data;
  });

export const productQueryFetch = (dispatch: any, query: any, setState: any) => {
  dispatch(fetchProduct(query))
    .then(unwrapResult)
    .then((res: any) => {
      console.log(res.message);
      setState(res.message);
    })
    .catch();
};
/*





*/
const newView = (payload: any) =>
  createAsyncThunk("post/newView", async (payload1) => {
    const { data } = await martApi
      .post("/user/view", payload, await jsonHeader(""))
      .then((e) => e)
      .catch((e) => e.response);
    return data;
  });

export const addNewViewProduct = (payload: any, dispatch: any) => {
  dispatch(newView(payload)).then(unwrapResult);
};

const getOneProduct = (payload: any) =>
  createAsyncThunk("post/fetchProduct", async (payload1) => {
    const { data } = await martApi
      .post("/getOneProduct", payload.body, {})
      .then((res: any) => {
        return res;
      })
      .catch((e) => {
        return e.response;
      });
    return data;
  });

export const getOneProductHandler = (
  dispatch: any,
  query: any,
  setInfo: any,
  viewProduct: any,
  userData: any
) => {
  const payload = {
    body: {
      ...query,
    },
  };
  dispatch(getOneProduct(payload))
    .then(unwrapResult)
    .then((res: any) => {
      if (res.type === "success") {
        setInfo(res.message);
        const viewPayload = {
          productId: res.message._id,
          store: res.message.store,
          branch: res.message.branch.shortId,
        };
        viewProduct &&
          userData?._id &&
          addNewViewProduct(viewPayload, dispatch);
      }
    })
    .catch((err: any) => {});
};

export const getOnebyId = async (
  dispatch: any,
  id: any,
  setInfo: any = null
) => {
  const payload = {
    body: {
      query: { _id: id },
    },
  };

  const response = await dispatch(getOneProduct(payload))
    .then(unwrapResult)
    .then((res: any) => {
      setInfo && setInfo(res.message);
      return res.message;
    })
    .catch();
  return response;
};

/*

homeSliderLink
this is for shortcut links

*/

const homeSliderLink = createAsyncThunk("post/homeSliderLink", async () => {
  const { data } = await martApi
    .post("/homeSliderLink", {})
    .then((res: any) => {
      return res;
    })
    .catch((e) => {
      return e.response;
    });
  return data;
});

export const sliderLinkHandler = (dispatch: any, setInfo: any) => {
  dispatch(homeSliderLink())
    .then(unwrapResult)
    .then((res: any) => {
      setInfo(res.message);
    });
};
