// @ts-ignore
/* eslint-disable */

declare namespace API {
  type Bill = {
    amount?: number;
    billId?: string;
    city?: string;
    date?: string;
    deliveryType?: string;
    location?: string;
    payId?: string;
    serialNumber?: string;
    type?: string;
  };

  type BillInquiryRequestViewModel = {
    companyId?: string;
    parameter?: string;
    type?: BillType;
    userId?: string;
  };

  type BillInquiryResponseViewModel = {
    amount?: number;
    billId?: string;
    bills?: Bill[];
    date?: string;
    payId?: string;
    plateNumber?: string;
    referenceNumber?: string;
    totalAmount?: string;
  };

  type BillInquiryResponseViewModelResult = {
    errors?: Error[];
    isFailed?: boolean;
    isSuccess?: boolean;
    reasons?: Reason[];
    successes?: Success[];
    value?: BillInquiryResponseViewModel;
    valueOrDefault?: BillInquiryResponseViewModel;
  };

  type BillPaymentRequestViewModel = {
    billId?: string;
    paymentId?: string;
  };

  type BillType = true;

  type CaptchaResponseViewModel = {
    image?: string;
    token?: string;
  };

  type CaptchaResponseViewModelResult = {
    errors?: Error[];
    isFailed?: boolean;
    isSuccess?: boolean;
    reasons?: Reason[];
    successes?: Success[];
    value?: CaptchaResponseViewModel;
    valueOrDefault?: CaptchaResponseViewModel;
  };

  type ChangePasswordViewModel = {
    confirmPassword?: string;
    id?: string;
    newPassword: string;
    password: string;
    username?: string;
  };

  type Employee = {
    description?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    manager?: Manager;
  };

  type Error = {
    cause?: Throwable;
    localizedMessage?: string;
    message?: string;
    stackTrace?: StackTraceElement[];
    suppressed?: Throwable[];
  };

  type LoginResponseViewModel = {
    companyId?: string;
    companyName?: string;
    expireDateTime?: string;
    fullName?: string;
    id?: string;
    message?: string;
    pages?: string[];
    token?: string;
    type?: number;
    username?: string;
  };

  type LoginResponseViewModelResult = {
    errors?: Error[];
    isFailed?: boolean;
    isSuccess?: boolean;
    reasons?: Reason[];
    successes?: Success[];
    value?: LoginResponseViewModel;
    valueOrDefault?: LoginResponseViewModel;
  };

  type LoginViewModel = {
    captchaCode: string;
    password: string;
    username: string;
  };

  type LoginWithSmsViewModel = {
    captchaCode: string;
    cellPhoneNumber: string;
    verificationCode: number;
  };

  type Manager = {
    id?: number;
    name?: string;
    roles?: string[];
  };

  type OperatorsInternetInquiryDataViewModel = {
    categoryId?: number;
    categoryName?: string;
    categoryParentId?: number;
    categoryParentName?: string;
    name?: string;
    price?: number;
    profileId?: number;
  };

  type OperatorsInternetInquiryResponseViewModel = {
    data?: OperatorsInternetInquiryDataViewModel[];
    referenceNumber?: string;
  };

  type OperatorsInternetInquiryResponseViewModelResult = {
    errors?: Error[];
    isFailed?: boolean;
    isSuccess?: boolean;
    reasons?: Reason[];
    successes?: Success[];
    value?: OperatorsInternetInquiryResponseViewModel;
    valueOrDefault?: OperatorsInternetInquiryResponseViewModel;
  };

  type Reason = {
    message?: string;
    metadata?: Record<string, any>;
  };

  type RegisterViewModel = {
    cellPhoneNumber: string;
    confirmPassword?: string;
    fullName: string;
    nationalCode?: string;
    password: string;
    username: string;
  };

  type Result = {
    errors?: Error[];
    isFailed?: boolean;
    isSuccess?: boolean;
    reasons?: Reason[];
    successes?: Success[];
    value?: Record<string, any>;
    valueOrDefault?: Record<string, any>;
  };

  type StackTraceElement = {
    classLoaderName?: string;
    className?: string;
    fileName?: string;
    lineNumber?: number;
    methodName?: string;
    moduleName?: string;
    moduleVersion?: string;
    nativeMethod?: boolean;
  };

  type Success = {
    message?: string;
    metadata?: Record<string, any>;
  };

  type Throwable = {
    cause?: Throwable;
    localizedMessage?: string;
    message?: string;
    stackTrace?: StackTraceElement[];
    suppressed?: Throwable[];
  };

  type UserInformationViewModel = {
    cardNumber?: string;
    cellPhoneNumber: string;
    depositNumber?: string;
    fullName: string;
    id?: string;
    nationalCode?: string;
    shebaNumber?: string;
    username?: string;
  };

  type CallableResponseEntityResult_ = true;

  type CallableResponseEntityVoid_ = true;

  type IterableEmployee_ = true;
}
