import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	isLoading: <boolean>false,
	issues: <any>[],
};

export const IssuesList = createAsyncThunk("issues/list", async () => {
	try {
        const issues = sessionStorage.getItem('issues')
		const resp = issues ? JSON.parse(issues) : [];
		return resp;
	} catch (error: any) {
		throw error.response.data;
	}
});

export const saveIssue = createAsyncThunk(
	"save/issue",
	async (data: any, thunkAPI) => {
		try {
            const issues = sessionStorage.getItem('issues')
			const resp = issues ? [...JSON.parse(issues), data] : [data];
            sessionStorage.setItem('issues', JSON.stringify(resp))
			return resp;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

const issuesSlice = createSlice({
	name: "cars",
	initialState,
	reducers: {},
    extraReducers: (builder) => {
		builder
			.addCase(saveIssue.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(saveIssue.fulfilled, (state, action) => {
				state.isLoading = false;
				state.issues = action.payload;
			})
			.addCase(saveIssue.rejected, (state, action: any) => {
				const message: string = action.error.message;
				state.isLoading = false;
			})
            .addCase(IssuesList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(IssuesList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.issues = action.payload;
			})
			.addCase(IssuesList.rejected, (state, action: any) => {
				const message: string = action.error.message;
				state.isLoading = false;
			})
	},
});

export default issuesSlice.reducer;
