import type { FindOne } from "../../domain/usecase/find-one";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class FindOneController implements Controller {
  public constructor(private readonly findOne: FindOne) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const data = await this.findOne.find({
      id: httpRequest.params.id,
      userId: httpRequest.body.accountId,
    });

    return ok(data);
  }
}
