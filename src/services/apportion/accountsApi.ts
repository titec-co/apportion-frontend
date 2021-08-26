// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Edit user PUT /Accounts */
export async function accountsPutUsingPUT(
  body: API.UserInformationViewModel,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/Accounts', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Change password POST /Accounts/ChangePassword */
export async function accountsChangePasswordPostUsingPOST(
  body: API.ChangePasswordViewModel,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/Accounts/ChangePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Generate Captcha POST /Accounts/GenerateCaptcha */
export async function accountsGenerateCaptchaPostUsingPOST(options?: { [key: string]: any }) {
  return request<API.CaptchaResponseViewModelResult>('/Accounts/GenerateCaptcha', {
    method: 'POST',
    ...(options || {}),
  });
}

/** Login user POST /Accounts/Login */
export async function accountsLoginPostUsingPOST(
  body: API.LoginViewModel,
  options?: { [key: string]: any },
) {
  return request<API.LoginResponseViewModelResult>('/Accounts/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Login user with sms POST /Accounts/LoginSms */
export async function accountsLoginSmsPostUsingPOST(
  body: API.LoginWithSmsViewModel,
  options?: { [key: string]: any },
) {
  return request<API.LoginResponseViewModelResult>('/Accounts/LoginSms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Register new user POST /Accounts/Register */
export async function accountsRegisterPostUsingPOST(
  body: API.RegisterViewModel,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/Accounts/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
