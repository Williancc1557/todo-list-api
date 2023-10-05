import type { Save } from "../../domain/usecase/save";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class SaveController implements Controller {
  public constructor(private readonly save: Save) {}

  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { description, name, accountId } = httpRequest.body;

    const task = await this.save.save({
      name,
      description,
      userId: accountId,
    });

    return ok(task);
  }
}
