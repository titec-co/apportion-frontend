// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** podium bill inquiry POST /AddedValues/BillInquiry */
export async function addedValuesBillInquiryPostUsingPOST(
  body: API.BillInquiryRequestViewModel,
  options?: { [key: string]: any },
) {
  return request<API.BillInquiryResponseViewModelResult>('/AddedValues/BillInquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** bill payment POST /AddedValues/BillPayment */
export async function addedValuesBillPaymentPostUsingPOST(
  body: API.BillPaymentRequestViewModel,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/AddedValues/BillPayment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** charge payment podium POST /AddedValues/ChargePayment */
export async function addedValuesChargePaymentPostUsingPOST(options?: { [key: string]: any }) {
  return request<API.CallableResponseEntityVoid_>('/AddedValues/ChargePayment', {
    method: 'POST',
    ...(options || {}),
  });
}

/** Get All Bill Payments POST /AddedValues/GetAllBillPayments */
export async function addedValuesGetAllBillPaymentsPostUsingPOST(options?: { [key: string]: any }) {
  return request<API.CallableResponseEntityVoid_>('/AddedValues/GetAllBillPayments', {
    method: 'POST',
    ...(options || {}),
  });
}

/** Get All Charge Payments POST /AddedValues/GetAllChargePayments */
export async function addedValuesGetAllChargePaymentsPostUsingPOST(options?: {
  [key: string]: any;
}) {
  return request<API.CallableResponseEntityVoid_>('/AddedValues/GetAllChargePayments', {
    method: 'POST',
    ...(options || {}),
  });
}

/** Operators Internet Inquiry POST /AddedValues/OperatorsInternetInquiry/${param0} */
export async function addedValuesOperatorsInternetInquiryMobileOperatorsPostUsingPOST(
  params: {
    // path
    /** operator to get inquiry */
    mobileOperators: 2 | 4 | 5;
  },
  options?: { [key: string]: any },
) {
  const { mobileOperators: param0, ...queryParams } = params;
  return request<API.OperatorsInternetInquiryResponseViewModelResult>(
    `/AddedValues/OperatorsInternetInquiry/${param0}`,
    {
      method: 'POST',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}
