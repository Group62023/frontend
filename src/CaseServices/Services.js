import axios from "axios";

const CASELIST_API_BASE_URL = "http://localhost:3000/api/v1/caseList";

class FraudReportService {
  getFraudCases() {
    return axios.get(CASELIST_API_BASE_URL);
  }

  createReportCase(caseList) {
    return axios.post(CASELIST_API_BASE_URL, caseList);
  }

  getViewOutputById(caseListId) {
    return axios.get(CASELIST_API_BASE_URL + "/" + caseListId);
  }

  UpdateProgress(CaseList, caseListId) {
    return axios.put(CASELIST_API_BASE_URL + "/" + caseListId, CaseList);
  }
}
export default new FraudReportService();
