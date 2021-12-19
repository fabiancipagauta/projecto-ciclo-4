const URL_BASE = 'http://localhost:8080';

const enviroment = {
  __LOGIN: `${URL_BASE}/user/login_user`,
  __PROFILE: `${URL_BASE}/user/user_profile/`,
  __PROFILE_EDIT: `${URL_BASE}/user/profile_edit`,

  /********************CERTIFICADO PAGO************************** */
  __REQUEST_PAYMENT: `${URL_BASE}/payment/payment_certificate/`,
  __LIST_PAYMENT: `${URL_BASE}/payment/user_payments/`,
};

export default enviroment;
