import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import statsData, { Range, Stat } from '../stats';

const initialState = Object.fromEntries(
  Object.keys(statsData)
    .map(s => [s, statsData[s as Stat].missingNoRange])
) as Record<Stat, Range>;

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setStat(state, { payload: { stat, range } }: PayloadAction<{ stat: Stat, range: Range }>) {
      state[stat] = range;
    }
  }
});

export const { setStat } = statsSlice.actions;

export default statsSlice.reducer;