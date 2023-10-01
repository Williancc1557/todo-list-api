import type { Update } from "../../domain/usecase/update";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class UpdateController implements Controller {
  public constructor(private readonly update: Update) {}

  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accountId, ...body } = httpRequest.body;

    const taskUpdated = this.update.update({
      id: httpRequest.params.id,
      ...body,
    });

    return ok(taskUpdated);
  }
}
