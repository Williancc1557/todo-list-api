import type { FindAll } from "../../domain/usecase/find-all";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class FindAllController implements Controller {
  public constructor(private readonly findAll: FindAll) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const data = await this.findAll.find({
      userId: httpRequest.body.accountId,
    });

    return ok(data);
  }
}
