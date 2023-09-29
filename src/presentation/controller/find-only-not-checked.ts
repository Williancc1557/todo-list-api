import type { FindOnlyNotChecked } from "../../domain/usecase/find-only-not-checked";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class FindOnlyNotCheckedController implements Controller {
  public constructor(private readonly findOnlyNotChecked: FindOnlyNotChecked) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const data = await this.findOnlyNotChecked.find();

    return ok(data);
  }
}
