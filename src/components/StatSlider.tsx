import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Mark } from '@mui/base';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import Typeography from '@mui/material/Typography';
import _ from 'lodash';
import { missingNo } from '../icons';
import { Range, StatData, StatName } from '../stats';

const Icon = styled.img`
  width: 32px;
  margin-top: auto;
  margin-bottom: auto;
`

const IconItem = styled(Grid)`
  display: flex;
`

export interface StatSliderProps<T extends StatName> extends StatData<T> {
  onChange(value: Range): void;
  value: Range;
}

const StatSlider = memo(<T extends StatName>({ icon, isPercentage, max, min, missingNoRange, name, onChange, step = 1, value }: StatSliderProps<T>) => {
  const handleChange = (value: Range) => {
    value = value.sort((a, b) => a -b) as Range;

    if (isPercentage) {
      value = value.map(v => v / 100) as Range;
    }

    onChange(value);
  }

  if (isPercentage) {
    min *= 100;
    max *= 100;
    missingNoRange = missingNoRange.map(x => x * 100) as Range;
  }

  const adjustedValue = isPercentage ? value.map(x => x * 100) as Range: value;

  const getValueText = (x: number) => `${x > 0 ? '+' : ''}${x}${isPercentage ? '%' : ''}`;

  const marks: Mark[] = _([min, 0, max, ...missingNoRange])
    .uniq()
    .sort()
    .map(v => ({ value: v, label: getValueText(v) }))
    .value();

  return <Grid container spacing={2}>
    <IconItem item><Icon src={icon} alt={name} /></IconItem>
    <Grid item xs>
      <Typeography id={name + '-slider'} gutterBottom align="left">{name}</Typeography>
      <Grid container spacing={2}>
        <Grid item>
          <Input
            inputProps={{ max, min, step, type: 'number' }}
            onChange={e => {
              const val = Number(e.currentTarget.value);
              handleChange([val, Math.max(val, adjustedValue[1])])
            }}
            size="small"
            value={adjustedValue[0]}
          />
        </Grid>
        <Grid item xs>
          <Slider
            getAriaLabel={() => name}
            getAriaValueText={getValueText}
            min={min}
            max={max}
            step={step}
            marks={marks}
            onChange={(_, value) => handleChange(value as Range)}
            value={adjustedValue}
          />
        </Grid>
        <Grid item>
          <Input
            inputProps={{ max, min, step, type: 'number' }}
            onChange={e => {
              const val = Number(e.currentTarget.value);
              handleChange([Math.min(val, adjustedValue[0]), val])
            }}
            size="small"
            value={adjustedValue[1]}
          />
        </Grid>
      </Grid>
    </Grid>
    <IconItem item>
      <Button
        title="Reset to missingN▯'s range"
        onClick={() => handleChange(missingNoRange)}
      >
        <Icon alt="Reset to missingN▯'s range" src={missingNo} />
      </Button>
    </IconItem>
  </Grid>;
});

export default StatSlider;