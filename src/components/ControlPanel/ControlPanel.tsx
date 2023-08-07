import classes from './ControlPanel.module.css';
import { ButtonSettingsSection, CardSettingsSection, CopySection } from './ui';

export function ControlPanel(): JSX.Element {
  return (
    <div className={classes.controlPanel}>
      <CardSettingsSection />
      <ButtonSettingsSection />
      <CopySection />
    </div>
  );
}
