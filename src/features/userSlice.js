import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editing: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    editUser: (state, action) => {
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === action.payload.email
            ? {
                ...user,
              }
            : user
        ),
      };
    },
  },
});

export const { editUser, addUser } = userSlice.actions;

export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
