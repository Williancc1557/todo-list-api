import type { FindOnlyChecked } from "../../domain/usecase/find-only-checked";
import { ok } from "../helpers/http-helper";
import type { Controller } from "../protocols/controller";
import type { HttpRequest, HttpResponse } from "../protocols/http";

export class FindOnlyCheckedController implements Controller {
  public constructor(private readonly findOnlyChecked: FindOnlyChecked) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const data = await this.findOnlyChecked.find();

    return ok(data);
  }
}
