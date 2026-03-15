import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application",
    initialState: {
        applicants: null,
    },
    reducers: {
        // actions
        setAllApplicants: (state, action) => {
            state.applicants = action.payload;
        }
    }
});

export const { setAllApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;