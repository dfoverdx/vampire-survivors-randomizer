import React from 'react';
import statsData, { Range, Stat } from '../stats';
import { useAppDispatch, useAppSelector } from '../store';
import { setStat } from '../store/stats-slice';
import StatSlider from './StatSlider';

const Stats = () =>
  <div>
    {Object.keys(statsData).map(k => <StatItem key={k} stat={k as Stat} />)}
  </div>;

export default Stats;

const StatItem = ({ stat }: { stat: Stat }) => {
  const stats = useAppSelector(s => s.statsSlice[stat]);
  const dispatch = useAppDispatch();
  const handleChange = (v: Range) => dispatch(setStat({ stat, range: v }));

  return <StatSlider
    key={stat}
    {...statsData[stat]}
    value={stats}
    onChange={handleChange}
  />
}