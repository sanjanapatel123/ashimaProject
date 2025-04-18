import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../../../../config';

const getStudents = createAsyncThunk('getStudents', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${BASE_URL}/student/getAllStudents`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || 'Failed to fetch students');
    }

    return await res.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getStudentsSlice = createSlice({
  name: 'getStudentsSlice',
  initialState: {
    loading: false,
    students: [],
    error: null,
  },
  reducers: {
    clearGetStudentsState: (state) => {
      state.loading = false;
      state.students = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch students';
      });
  },
});

export const { clearGetStudentsState } = getStudentsSlice.actions;
export default getStudentsSlice.reducer;
export { getStudents };
