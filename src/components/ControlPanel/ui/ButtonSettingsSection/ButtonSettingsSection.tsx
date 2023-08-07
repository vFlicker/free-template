import { ChangeEvent } from 'react';

import { Checkbox } from '~/components/Checkbox';
import { PositionToggler } from '~/components/PositionToggler';
import { Toggler } from '~/components/Toggler';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { CheckboxProperty, RadioProperty } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './ButtonSettingsSection.module.css';

export function ButtonSettingsSection(): JSX.Element {
  const dispatch = useAppDispatch();

  const formData = useAppSelector((state) => state.FORM_DATA);

  const {
    cardType,
    hasIcon,
    hasButtonText,
    buttonSize,
    iconPosition,
    buttonPosition,
  } = formData;

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const cardProperty = evt.target.value as CheckboxProperty;
    dispatch(formDataSlice.changeCheckboxProperty(cardProperty));
  };

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    dispatch(
      formDataSlice.changeRadioProperty({ [name]: value } as RadioProperty),
    );
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <h3 className={classes.title}>Вид кнопки</h3>
        <Toggler
          onChange={handleRadioChange}
          name="buttonSize"
          value={buttonSize}
          leftValue="big"
          rightValue="small"
          leftText="Большая"
          rightText="Маленькая"
        />
      </div>

      <div className={classes.row}>
        <Checkbox
          value="hasIcon"
          checked={hasIcon}
          onChange={handleCheckboxChange}
        >
          Иконка
        </Checkbox>

        {hasIcon && hasButtonText && (
          <Toggler
            onChange={handleRadioChange}
            name="iconPosition"
            value={iconPosition}
            leftValue="left"
            rightValue="right"
            leftText="Слева"
            rightText="Справа"
          />
        )}
      </div>

      <div className={classes.row}>
        <Checkbox
          value="hasButtonText"
          checked={hasButtonText}
          onChange={handleCheckboxChange}
        >
          Текст
        </Checkbox>
      </div>

      {cardType === 'wide' && (
        <PositionToggler
          name="buttonPosition"
          value={buttonPosition}
          leftValue="left"
          rightValue="right"
          leftText="Слева"
          rightText="Справа"
          onChange={handleRadioChange}
        />
      )}
    </div>
  );
}
