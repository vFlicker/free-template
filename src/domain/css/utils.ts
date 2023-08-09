import { FormData } from '~/shared/types';

type ReturnType = {
  cardBg: string;
  titleColor: string;
  descriptionColor: string;
};

export const getStyles = (formData: FormData): ReturnType => {
  const { hasBackground, cardType } = formData;

  let cardBg = '#ffffff';
  let titleColor = '#323232';
  let descriptionColor = '#777777';

  if (hasBackground === true) {
    cardBg =
      cardType === 'wide'
        ? 'url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/246/h/4eb5388ec0affb1a8192f36e52547f4a.png)'
        : 'url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png)';
    titleColor = '#ffffff';
    descriptionColor = '#ffffff';
  }

  return {
    cardBg,
    titleColor,
    descriptionColor,
  };
};
