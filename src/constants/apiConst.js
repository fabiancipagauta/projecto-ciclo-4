const URL_BASE = 'http://localhost:8080';

const enviroment = {
  __LOGIN: `${URL_BASE}/user/login_user`,
  __PROFILE: `${URL_BASE}/user/user_profile/`,
  __PROFILE_EDIT: `${URL_BASE}/user/profile_edit`,

  /********************CERTIFICADO PAGO************************** */
  __REQUEST_PAYMENT: `${URL_BASE}/payment/payment_certificate/`,
  __LIST_PAYMENT: `${URL_BASE}/payment/user_payments/`,
  __USERS_ID: `${URL_BASE}/user/users_id`,
  __CREATE_PAYMENT: `${URL_BASE}/payment/save`,

  /***********************GESTION USUARIOS************************ */
  __USER_CREATE: `${URL_BASE}/user/user_create`,
  __USER_LIST: `${URL_BASE}/user/user_list`,
  __USER_EDIT: `${URL_BASE}/user/edit_user`,
  __USER_DELETE: `${URL_BASE}/user/user_delete`,
  __USER_JOB_CERTIFICATE: `${URL_BASE}/user/jobs_certificates`,

  /***********************PERMISOS************************ */
  __LICENSE_REQUEST: `${URL_BASE}/license/license_request`,
  __LICENSE_LIST: `${URL_BASE}/license/license_list`,
  __LICENSE_EDIT: `${URL_BASE}/license/license_edit`,

  /***********************VACACIONES************************ */
  __VACATIONS_REQUEST: `${URL_BASE}/vacations/vacations_request`,
  __VACATIONS_LIST: `${URL_BASE}/vacations/vacations_list`,
  __VACATIONS_EDIT: `${URL_BASE}/vacations/vacations_edit`,
};

export default enviroment;
