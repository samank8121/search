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

  protected constructor(group = '', timeout = 50000, baseURL = '/') {
   
    this.httpService = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}${baseURL}${group}`,
      timeout,
    });
  }
}

export default BaseAPI;
