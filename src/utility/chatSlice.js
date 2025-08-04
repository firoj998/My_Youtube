import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, acttion) => {
        state.messages.splice(LIVE_CHAT_COUNT,1)
      state.messages.push(acttion.payload);
    },
  },
});
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
