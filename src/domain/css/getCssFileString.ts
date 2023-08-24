import { FormData } from '~/shared/types';

import { getStyles } from './utils';

export const getCssFileString = (formData: FormData): string => {
  const { cardBg, descriptionColor, titleColor } = getStyles(formData);

  return `
:root {
  --font-family: sans-serif;
  --color-list-bg: transparent;

  --card-bg: ${cardBg};
  --color-title: ${titleColor};
  --color-description: ${descriptionColor};
  --color-button-bg: rgb(131 136 255 / 100%);
  --color-button-text: #fff;
  --color-button-hover-bg: rgb(97 102 237 / 100%);
  --color-button-disable-bg: #2f2f2f;
  --color-button-disable-text: #fff;
  --card-radius: 16px;
  --button-radius: 8px;
  --image-radius: 8px;
  --shadow-card: 0px 0px 10px rgb(0 0 0 / 30%);
  --shadow-card-hover: 0px 0px 15px rgb(0 0 0 / 20%);
  --font-title: normal 700 24px / normal var(--font-family);
  --font-description: normal 400 16px / normal var(--font-family);
  --font-button: normal 400 16px / normal var(--font-family);
  --vertical-padding: 20px;
  --small-button-icon: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg');
  --small-button-icon-disable: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg');
  --url-button-icon-left: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg');
  --url-button-icon-left-disable: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg');
  --url-button-icon-right: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg');
  --url-button-icon-right-disable: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg');
  --url-all-trainings-image: url('https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png');
}

a:is(:hover, :active, :focus, :visited, :link) {
  text-decoration: none;
}

#vertical-cards,
#square-cards,
#narrow-cards,
#heavy-cards {
  padding: var(--vertical-padding) 0;
}

#vertical-cards .stream-table,
#square-cards .stream-table,
#narrow-cards .stream-table,
#heavy-cards .stream-table {
  width: 100%;
  margin-bottom: 0;
  margin-left: 0;
  background: var(--color-list-bg);
}

#vertical-cards .stream-table tbody,
#square-cards .stream-table tbody {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

#narrow-cards .stream-table tbody,
#heavy-cards .stream-table tbody {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

#vertical-cards .stream-table tr,
#square-cards .stream-table tr,
#narrow-cards .stream-table tr,
#heavy-cards .stream-table tr {
  display: block;
  width: 100%;
}

#vertical-cards .stream-table tr td {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 310px;
  padding: 0;
  opacity: 1;
}

#square-cards .stream-table tr td {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 268px;
  padding: 0;
  opacity: 1;
}

#narrow-cards .stream-table tr td {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 148px;
  padding: 0;
  opacity: 1;
}

#heavy-cards .stream-table tr td {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 280px;
  padding: 0;
  opacity: 1;
}

#vertical-cards .stream-table tr td:hover,
#square-cards .stream-table tr td:hover,
#narrow-cards .stream-table tr td:hover,
#heavy-cards .stream-table tr td:hover {
  background: transparent;
}

#vertical-cards .stream-table tr td a {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  min-height: 310px;
  padding: 24px;
  background: var(--card-bg) no-repeat center / cover;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-card);
}

#square-cards .stream-table tr td a {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  min-height: 268px;
  padding: 24px;
  background: var(--card-bg) no-repeat center / cover;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-card);
}

#narrow-cards .stream-table tr td a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-height: 148px;
  padding: 24px;
  background: var(--card-bg);
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-card);
}

#heavy-cards .stream-table tr td a {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  min-height: 280px;
  padding: 24px;
  background: var(--card-bg) no-repeat center / cover;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-card);
}

#heavy-cards .stream-table tr.add-image td a {
  padding-right: 304px;
}

#vertical-cards .stream-table tr td a:hover,
#square-cards .stream-table tr td a:hover,
#narrow-cards .stream-table tr td a:hover,
#heavy-cards .stream-table tr td a:hover {
  box-shadow: var(--shadow-card-hover);
}

/* different bg, need to change training's id */

/*
#vertical-cards .stream-table tr[data-training-id='{ID}'] td a {
  background-image: url({LINK});
}
#square-cards .stream-table tr[data-training-id='{ID}'] td a {
  background-image: url({LINK});
}
#heavy-cards .stream-table tr[data-training-id={ID}] td a {
  background-image: url({LINK});
}
*/
#vertical-cards .stream-title,
#square-cards .stream-title,
#heavy-cards .stream-title {
  margin-bottom: 16px;
  font: var(--font-title);
  color: var(--color-title);
}

#narrow-cards .stream-title {
  flex: 0 0 30%;
  margin-right: 32px;
  font: var(--font-title);
  color: var(--color-title);
}

#vertical-cards .stream-table tr td a > div,
#square-cards .stream-table tr td a > div,
#heavy-cards .stream-table tr td a > div {
  margin-bottom: 24px;
  font: var(--font-description);
  color: var(--color-description);
}

#narrow-cards .stream-table tr td a > div {
  margin-right: 24px;
  font: var(--font-description);
  color: var(--color-description);
}

#narrow-cards button {
  margin-top: 0;
  margin-left: auto;
}

#heavy-cards .stream-table tr.background-image td a {
  padding-right: 24px;
}

@media (width <= 1260px) {
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

  #narrow-cards .stream-title {
    flex: 0 0 auto;
  }

  #vertical-cards .stream-table tbody,
  #square-cards .stream-table tbody {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width <= 660px) {
  #narrow-cards .stream-table tbody {
    grid-template-columns: 1fr;
  }
}

@media (width <= 600px) {
  #heavy-cards .add-image a::before {
    width: 140px;
  }

  #heavy-cards .stream-table tr.add-image td a {
    padding-right: 164px;
  }

  #vertical-cards .stream-table tbody,
  #square-cards .stream-table tbody {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (width <= 480px) {
  #heavy-cards .add-image a::before {
    width: 100%;
    height: 280px;
  }

  #heavy-cards .stream-table tr.add-image td a {
    padding-top: 304px;
    padding-right: 24px;
  }
}

/* hide description */
.no-description td a > div {
  display: none;
}

/* hide button */
.no-button button {
  display: none;
}

/* add image */
#vertical-cards .add-image a::before {
  flex-shrink: 0;
  width: 100%;
  height: 140px;
  margin-bottom: 16px;
  content: '';
  background: no-repeat center / cover;
  background-image: var(--url-all-trainings-image);
  border-radius: var(--image-radius);
}

#narrow-cards .add-image a::before {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  margin-right: 24px;
  content: '';
  background: no-repeat center / cover;
  background-image: var(--url-all-trainings-image);
  border-radius: var(--image-radius);
}

#heavy-cards .add-image a::before {
  position: absolute;
  top: 0;
  right: 0;
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  content: '';
  background: no-repeat center / cover;
  background-image: var(--url-all-trainings-image);
  border-radius: var(--image-radius);
}

/* different images, need to change training's id */
#vertical-cards .add-image[data-training-id='777477771'] a::before {
  background-image: url('https://images.unsplash.com/photo-1687253363472-cfd93fdb2580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80');
}

/* different images, need to change training's id */
#narrow-cards .add-image[data-training-id='777477771'] a::before {
  background-image: url('https://images.unsplash.com/photo-1646343588889-07753bb55abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
}

/* different images, need to change training's id */
#heavy-cards .add-image[data-training-id='777477771'] a::before {
  background-image: url('https://images.unsplash.com/photo-1687253363472-cfd93fdb2580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80');
}

/* buttons */

/* button top */
#square-cards .button-top button {
  order: -1;
  margin-top: 0;
  margin-bottom: auto;
}

/* button right */
#square-cards .button-right button {
  align-self: flex-end;
}

#heavy-cards .button-right button {
  align-self: flex-end;
}

/* button large */
.button-large button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 24px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius);
  transition: background 0.5s;
}

.button-large button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
}

/* button large with left icon */
.button-large-left-icon button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 24px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius);
  transition: background 0.5s;
}

.button-large-left-icon button::before {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-large-left-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large-left-icon button {
  color: var(--color-button-disabled-text);
  background: var(--color-button-disable-bg);
}

.noaccess-mode-show.button-large-right-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button large with right icon */
.button-large-right-icon button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 24px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius, 8px);
  transition: background 0.5s;
}

.button-large-right-icon button::after {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-large-right-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large-right-icon button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
}

.noaccess-mode-show.button-large-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-large-both-icon */
.button-large-both-icon button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 24px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius, 8px);
  transition: background 0.5s;
}

.button-large-both-icon button::before {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-large-both-icon button::after {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-large-both-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large-both-icon button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
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
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 14px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius, 8px);
  transition: background 0.5s;
}

.button-standart button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
}

/* button-standart-left-icon */
.button-standart-left-icon button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 14px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius, 8px);
  transition: background 0.5s;
}

.button-standart-left-icon button::before {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-standart-left-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart-left-icon button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
}

.noaccess-mode-show.button-standart-left-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button-standart-right-icon */
.button-standart-right-icon button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 14px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius, 8px);
  transition: background 0.5s;
}

.button-standart-right-icon button::after {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-standart-right-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart-right-icon button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
}

.noaccess-mode-show.button-standart-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-standart-both-icon */
.button-standart-both-icon button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  padding: 14px;
  margin-top: auto;
  font: var(--font-button);
  color: var(--color-button-text);
  cursor: pointer;
  background: var(--color-button-bg);
  border: none;
  border-radius: var(--button-radius, 8px);
  transition: background 0.5s;
}

.button-standart-both-icon button::before {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-standart-both-icon button::after {
  width: 16px;
  height: 16px;
  content: '';
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-standart-both-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart-both-icon button {
  color: var(--color-button-disable-text);
  background: var(--color-button-disable-bg);
}

.noaccess-mode-show.button-standart-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

.noaccess-mode-show.button-standart-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button small */
.button-small button {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 14px;
  margin-top: auto;
  font-size: 0;
  cursor: pointer;
  background: var(--color-button-bg) var(--small-button-icon) no-repeat center;
  border: none;
  border-radius: var(--button-radius, 8px);
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
