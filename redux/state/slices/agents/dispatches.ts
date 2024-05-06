import { unwrapResult } from "@reduxjs/toolkit";
import { withdrawApi } from "./agentInfo";

//
//
export const withdraw = (
  dispatch: any,
  id: any,
  setState: any,
  navigate: any
) => {
  const payload = {
    body: {
      id,
    },
  };

  dispatch(withdrawApi(payload))
    .then(unwrapResult)
    .then((res: any) => {
      setState(res.message);
      navigate("/agent");
    })
    .catch((err: any) => console.log(err));
};
