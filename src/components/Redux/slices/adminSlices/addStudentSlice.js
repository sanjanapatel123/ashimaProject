import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../../../../config';

const createStudent = createAsyncThunk('createStudent', async (studentData, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    // console.log("token", token);
    console.log("studentData", studentData);
    const res = await fetch(`${BASE_URL}/student/createStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(studentData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || 'Failed to create student');
    }

    return await res.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const createStudentSlice = createSlice({
  name: 'createStudentSlice',
  initialState: {
    loading: false,
    success: false,
    createdStudent: null,
    error: null,
  },
  reducers: {
    clearCreateStudentStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.createdStudent = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.createdStudent = action.payload;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || 'Failed to create student';
      });
  },
});

export const { clearCreateStudentStatus } = createStudentSlice.actions;
export default createStudentSlice.reducer;
export { createStudent };
