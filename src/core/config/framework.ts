import { Express } from "express";
import * as cors from "cors";

export class FrameworkConfig {
  private app: Express;
  private port = Number(process.env.PORT) || 80;
  private serverListener?: any;

    constructor(express: Express) {
        this.app = express;
    }

    public async init(): Promise<void> {
        try {
            this.app.use(cors());
            this.serverListener = this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port}...`)      
            });
        } catch (error) {
            console.error(error);
        }
    }

    public close(): void {
        this.serverListener?.close();
    }
}