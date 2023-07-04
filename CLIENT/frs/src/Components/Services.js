import axios from 'axios';
 
 class DeleteService {
 
 deleteReportCase(id) {
 axios.get('http://localhost:4000/ReportCase/DeleteReportCase/' + id)
 .then(() => {
 console.log('Reported Case Deleted !!!')
 })
 .catch((error) => {
 console.log(error)
 })
 }
 }
 
 export default DeleteService;