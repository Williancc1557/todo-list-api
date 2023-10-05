import type { Delete } from "../../domain/usecase/delete";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class DeleteController implements Controller {
  public constructor(private readonly del: Delete) {}

  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok(
      this.del.delete({
        _id: httpRequest.params.id,
        userId: httpRequest.body.accountId,
      })
    );
  }
}
