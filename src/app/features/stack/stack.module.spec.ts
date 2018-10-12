import { StackModule } from './stack.module';

describe('StackModule', () => {
  let stackModule: StackModule;

  beforeEach(() => {
    stackModule = new StackModule();
  });

  it('should create an instance', () => {
    expect(stackModule).toBeTruthy();
  });
});
