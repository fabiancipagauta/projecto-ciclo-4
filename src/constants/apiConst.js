const URL_BASE = 'http://localhost:8080';

const enviroment = {
  __LOGIN: `${URL_BASE}/user/login_user`,
  __PROFILE: `${URL_BASE}/user/user_profile/`,
  __PROFILE_EDIT: `${URL_BASE}/user/profile_edit`,

  /********************CERTIFICADO PAGO************************** */
  __REQUEST_PAYMENT: `${URL_BASE}/payment/payment_certificate/`,
  __LIST_PAYMENT: `${URL_BASE}/payment/user_payments/`,

  /***********************GESTION USUARIOS************************ */
  __USER_CREATE: `${URL_BASE}/user/user_create`,
  __USER_LIST: `${URL_BASE}/user/user_list`,
  __USER_EDIT: `${URL_BASE}/user/edit_user`,
  __USER_DELETE: `${URL_BASE}/user/user_delete`,
};

export default enviroment;
