import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortDirection = "asc" | "desc";

export type TokensState = {
    sortBy: keyof any | null;
    sortDir: SortDirection;
};

const initialState: TokensState = {
    sortBy: null,
    sortDir: "asc",
};

const tokensSlice = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<{ by: string }>) {
            if (state.sortBy === action.payload.by) {
                state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
            } else {
                state.sortBy = action.payload.by;
                state.sortDir = "asc";
            }
        },
    },
});

export const { setSort } = tokensSlice.actions;
export default tokensSlice.reducer;
