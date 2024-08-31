import { Express } from "express";
import { FrameworkConfig } from "@/infra/config/framework";

describe('FrameworkConfig', () => {
  let app: Express;
  let frameworkConfig: FrameworkConfig;

  it('should initialize the server and setup routes', async () => {
    await frameworkConfig.init();
    expect(app.listen).toHaveBeenCalledWith(expect.any(Number), expect.any(Function));
  });

});
