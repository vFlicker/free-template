export const inputs = [
  {
    id: 1,
    accent: true,
    icon: 'link',
    name: 'logotype',
    label: 'Ссылка на логотип',
    placeholder: 'из файлового хранилища',
  },
  {
    id: 2,
    accent: false,
    icon: 'target',
    name: 'container',
    label: 'Селектор контейнера',
    placeholder: '.new-container',
  },
  {
    id: 3,
    accent: true,
    icon: 'link',
    name: 'offer-link',
    label: 'Ссылка на оферту',
    placeholder: 'вставьте сюда',
  },
  {
    id: 4,
    accent: false,
    icon: 'edit',
    name: 'offer-text',
    label: 'Текст с офертой под блоком',
    placeholder: 'до 225 символов',
  },
] as const;

export const checkboxes = [
  { id: 1, title: 'Показывать информацию о плательщике' },
  { id: 2, title: 'Показывать предложения' },
  { id: 3, title: 'Показывать промокод' },
  { id: 4, title: 'Показывать таймер' },
] as const;
