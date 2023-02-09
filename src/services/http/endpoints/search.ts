import { AxiosResponse } from 'axios';
import BaseAPI from '../base';

class SearchProvider extends BaseAPI {
  public constructor() {
    super();
  }

  public getCategories(
    slug: string,
    query?: string
  ): Promise<AxiosResponse<any[]>> {
    return this.httpService.post(`${slug}`, {
      params: {
        q: query,
      },
      headers: {
        Accept: 'application/json;',
      },
    });
  }
}

const SearchService = new SearchProvider();

export default SearchService;
