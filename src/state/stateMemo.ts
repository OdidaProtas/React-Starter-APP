const stateMemo = (dispatch: any, state: any) => ({
  signIn: async (data: any) => {
    localStorage.setItem("userToken", JSON.stringify(`Bearer ${data}`));
    dispatch({ type: "SIGN_IN", payload: data });
  },
  signOut: async () => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
  },
});

export default stateMemo;
