import { UiNotifyModule } from './ui-notify.module';

describe('UiNotifyModule', () => {
  let uiNotifyModule: UiNotifyModule;

  beforeEach(() => {
    uiNotifyModule = new UiNotifyModule();
  });

  it('should create an instance', () => {
    expect(uiNotifyModule).toBeTruthy();
  });
});
