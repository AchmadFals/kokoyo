import BaseService from "./baseService.js";
import cloneDeep from 'lodash/cloneDeep'
class CompanyService extends BaseService {
  getCompanies(opts = {}) {
    this.endPoint = `/companies`;
    return this.get(opts);
  }

  getCompany(payload, opts = {}) {
    this.endPoint = `/companies/${payload.company_id}`;
    return this.get(opts);
  }

  storeCompany(payload) {
    this.endPoint = "/companies";
    return this.post(payload);
  }

  updateCompany(payload, opts = {}) {
    this.endPoint = '/companies/' + payload.get('id')
    const newOpts = cloneDeep(opts, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return this.post(payload, newOpts)
  }

  getUserCompany(opts = {}) {
    this.endPoint = "/get-user-company";
    return this.get(opts);
  }

  toggleStatusCompany(id, payload) {
    this.endPoint = "/toggle-status-company";
    return this.putOne(id, payload);
  }
}

export default new CompanyService();