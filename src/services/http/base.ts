// Libraries
import axios from 'axios';
// Types
import type { AxiosInstance } from 'axios';

/**
 * A HTTP service which created by Axios instance creator
 *
 * @abstract
 */
abstract class BaseAPI {
  protected httpService: AxiosInstance;

  protected constructor(timeout = 50000) {
    this.httpService = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
      timeout,
    });
  }
}

export default BaseAPI;
