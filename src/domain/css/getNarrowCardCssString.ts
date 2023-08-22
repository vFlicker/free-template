import { FormData } from '~/shared/types';

import { getStyles } from './utils';

export const getNarrowCardCssString = (formData: FormData): string => {
  const { cardBg, descriptionColor, titleColor } = getStyles(formData);

  return `
#narrow-cards {
  --font-family: sans-serif;
  --color-list-bg: transparent;
  --card-bg: ${cardBg};
  --color-title: ${titleColor};
  --color-description: ${descriptionColor};
  --color-button-bg: rgba(131, 136, 255, 1);
  --color-button-text: #ffffff;
  --color-button-hover-bg: rgba(97, 102, 237, 1);
  --color-button-disable-bg: #2f2f2f;
  --color-button-disable-text: #ffffff;

  --card-radius: 16px;
  --button-radius: 8px;
  --image-radius: 8px;

  --shadow-card: 0px 0px 10px rgba(0,0,0, 0.3);
  --shadow-card-hover: 0px 0px 15px rgba(0,0,0, 0.2);

  --small-button-icon: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --small-button-icon-disable: url();

  --url-button-icon-left: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-left-disable: url();
  --url-button-icon-right: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-right-disable: url();

  --url-all-trainings-image: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png);
}
#narrow-cards * {
  font-family: var(--font-family);
}
#narrow-cards .stream-table {
  width: 100%;
  margin-bottom: 0px;
  margin-left: 0px;
  background: var(--color-list-bg);
}
#narrow-cards .stream-table tbody {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
#narrow-cards .stream-table tr {
  width: 100%;
  display: block;
}
#narrow-cards .stream-table tr td {
  padding: 0px;
  width: 100%;
  display: block;
  height: 100%;
  min-height: 148px;
  opacity: 1;
}
#narrow-cards .stream-table tr td:hover {
  background: transparent;
}
#narrow-cards .stream-table tr td a {
  height: 100%;
  min-height: 148px;
  border-radius: var(--card-radius);
  background: var(--card-bg);
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  box-shadow: var(--shadow-card);
}
#narrow-cards .stream-table tr td a:hover {
  box-shadow: var(--shadow-card-hover);
}
#narrow-cards .stream-title {
  color: var(--color-title);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 32px;
}
#narrow-cards .stream-table tr td a > div {
  color: var(--color-description);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 24px;
}

@media (max-width: 1260px) {
  #narrow-cards .stream-table tr td a {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  #narrow-cards .stream-table tbody {
    grid-template-columns: repeat(2, 1fr);
  }
  #narrow-cards .stream-table tr td {
    height: 100%;
  }
  #narrow-cards button {
    margin-top: auto;
  }
}
@media (max-width: 660px) {
  #narrow-cards .stream-table tbody {
    grid-template-columns: 1fr;
  }
}

/* hide description */
.no-description td a > div {
  display: none;
}

/* add image */
.add-image a::before {
  content: '';
  width: 100px;
  height: 100px;
  border-radius: var(--image-radius);
  background: no-repeat center / cover;
  flex-shrink: 0;
  margin-right: 24px;
}
/* one image for all trainings */
.add-image a::before {
  background-image: var(--url-all-trainings-image);
}

/* different images, need to change training's id */
.add-image[data-training-id='777477771'] a::before {
  background-image: url(https://images.unsplash.com/photo-1646343588889-07753bb55abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);
}

/* hide button */
.no-button button {
  display: none;
}

/* buttons */
/* button large */
.button-large button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button large with left icon */
.button-large-left-icon button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disabled-text);
}
.noaccess-mode-show.button-large-right-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button large with right icon */
.button-large-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-large-both-icon */
.button-large-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-large-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button standart */
/* button-standart */
.button-standart button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button-standart-left-icon */
.button-standart-left-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-left-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button-standart-right-icon */
.button-standart-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-standart-both-icon */
.button-standart-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-standart-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button small */
.button-small button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg) var(--small-button-icon) no-repeat center;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin-left: auto;
  font-size: 0px;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-small button:hover {
  background-color: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-small button {
  background: var(--color-button-disable-bg) var(--small-button-icon-disable)
    no-repeat center;
}`;
};