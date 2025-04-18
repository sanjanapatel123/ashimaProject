import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../../../../config';

const updateStudent = createAsyncThunk(
  'updateStudent',
  async ({ studentId, studentData }, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${BASE_URL}/student/updateStudent/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(studentData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData?.message || 'Failed to update student');
      }

      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateStudentSlice = createSlice({
  name: 'updateStudentSlice',
  initialState: {
    loading: false,
    success: false,
    updatedStudent: null,
    error: null,
  },
  reducers: {
    clearUpdateStudentStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.updatedStudent = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.updatedStudent = action.payload;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || 'Failed to update student';
      });
  },
});

export const { clearUpdateStudentStatus } = updateStudentSlice.actions;
export default updateStudentSlice.reducer;
export { updateStudent };
