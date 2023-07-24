import './styles/index.css';

import { Button } from '~/components/Button';
import { CalenderInput } from '~/components/CalenderInput';
import { Checkbox } from '~/components/Checkbox';
import { Input } from '~/components/Input';
import { Markup } from '~/components/Markup';
import { Radio } from '~/components/Radio';
import { Scanner } from '~/components/Scanner';
import { Toggler } from '~/components/Toggler';

import imageMarkup1Src from '../shared/images/markup/markup_1.jpg';
import imageMarkup2Src from '../shared/images/markup/markup_2.jpg';
import imageMarkup3Src from '../shared/images/markup/markup_3.jpg';

export function App(): JSX.Element {
  return (
    <>
      <Button iconName="arrow">Продолжить</Button>

      <CalenderInput />

      <Scanner />

      <section>
        <Checkbox>Частями</Checkbox>
        <Checkbox>Счет на ИП / ООО</Checkbox>
      </section>

      <section>
        <Input
          icon="target"
          name="logotype"
          label="Селектор контейнера"
          placeholder=".new-container"
        />

        <Input
          accent
          icon="link"
          name="logotype"
          label="Ссылка на логотип"
          placeholder="из файлового хранилища"
        />

        <Input
          icon="edit"
          name="logotype"
          label="Текст с офертой под блоком"
          placeholder="до 225 символов"
        />
      </section>

      <Toggler />

      <section>
        <Radio name="payment method" value="card" wrapped checked>
          Картой
        </Radio>

        <Radio name="payment method" value="parts" wrapped>
          Частями
        </Radio>

        <Radio name="payment method" value="parts" wrapped disabled>
          Other
        </Radio>
      </section>

      <section>
        <Markup src={imageMarkup1Src} alt="Макет 1" selected>
          Макет #1
        </Markup>

        <Markup src={imageMarkup2Src} alt="Макет 2">
          Макет #2
        </Markup>

        <Markup src={imageMarkup3Src} alt="Макет 2" disabled>
          Макет #3
        </Markup>
      </section>
    </>
  );
}
