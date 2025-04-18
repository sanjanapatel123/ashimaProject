import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../../../../config';

const getStudentById = createAsyncThunk('getStudentById', async (studentId, thunkAPI) => {
    console.log("studentId", studentId);
  try {
    const token = localStorage.getItem('token');
    console.log(studentId)
    const res = await fetch(`${BASE_URL}/student/getSingleStudent/${studentId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || 'Failed to fetch student');
    }

    return await res.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getStudentByIdSlice = createSlice({
  name: 'getStudentByIdSlice',
  initialState: {
    loading: false,
    student: null,
    error: null,
  },
  reducers: {
    clearGetStudentByIdState: (state) => {
      state.loading = false;
      state.student = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudentById.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload;
      })
      .addCase(getStudentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch student';
      });
  },
});

export const { clearGetStudentByIdState } = getStudentByIdSlice.actions;
export default getStudentByIdSlice.reducer;
export { getStudentById };
