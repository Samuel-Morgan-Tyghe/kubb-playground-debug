import { createBankAccountHandler } from "./bankAccounts/createBankAccountHandler";
import { getBankAccountByIdHandler } from "./bankAccounts/getBankAccountByIdHandler";
import { updateBankAccountHandler } from "./bankAccounts/updateBankAccountHandler";
import { getCapitalCallInvoiceByIdHandler } from "./capitalCallInvoices/getCapitalCallInvoiceByIdHandler";
import { getCapitalCallInvoicesHandler } from "./capitalCallInvoices/getCapitalCallInvoicesHandler";
import { updateCapitalCallInvoiceHandler } from "./capitalCallInvoices/updateCapitalCallInvoiceHandler";
import { createCapitalCallHandler } from "./capitalCalls/createCapitalCallHandler";
import { getCapitalCallByIdHandler } from "./capitalCalls/getCapitalCallByIdHandler";
import { getCapitalCallsForAssetHandler } from "./capitalCalls/getCapitalCallsForAssetHandler";
import { updateCapitalCallHandler } from "./capitalCalls/updateCapitalCallHandler";
import { createCounterpartyHandler } from "./counterparties/createCounterpartyHandler";
import { getCounterpartyByIdHandler } from "./counterparties/getCounterpartyByIdHandler";
import { updateCounterpartyHandler } from "./counterparties/updateCounterpartyHandler";
import { createAdminForAssetHandler } from "./fundManagement/createAdminForAssetHandler";
import { createAssetHandler } from "./fundManagement/createAssetHandler";
import { createAssetValuationHandler } from "./fundManagement/createAssetValuationHandler";
import { getAssetByIdHandler } from "./fundManagement/getAssetByIdHandler";
import { getAssetValuationsHandler } from "./fundManagement/getAssetValuationsHandler";
import { getFundAdminByAssetIdHandler } from "./fundManagement/getFundAdminByAssetIdHandler";
import { updateAdminForAssetHandler } from "./fundManagement/updateAdminForAssetHandler";
import { updateAssetHandler } from "./fundManagement/updateAssetHandler";
import { createGeneralPartnerHandler } from "./kyc/createGeneralPartnerHandler";
import { createLimitedPartnerHandler } from "./kyc/createLimitedPartnerHandler";
import { createUserHandler } from "./kyc/createUserHandler";
import { getGeneralPartnerByIdHandler } from "./kyc/getGeneralPartnerByIdHandler";
import { getLimitedPartnerByIdHandler } from "./kyc/getLimitedPartnerByIdHandler";
import { getLimitedPartnersHandler } from "./kyc/getLimitedPartnersHandler";
import { getUserByIdHandler } from "./kyc/getUserByIdHandler";
import { getUsersForLimitedPartnerHandler } from "./kyc/getUsersForLimitedPartnerHandler";
import { updateGeneralPartnerHandler } from "./kyc/updateGeneralPartnerHandler";
import { updateLimitedPartnerHandler } from "./kyc/updateLimitedPartnerHandler";
import { updateUserHandler } from "./kyc/updateUserHandler";
import { createSubscriptionHandler } from "./subscriptions/createSubscriptionHandler";
import { getAllSubscriptionsHandler } from "./subscriptions/getAllSubscriptionsHandler";
import { getSubscriptionByIdHandler } from "./subscriptions/getSubscriptionByIdHandler";
import { updateSubscriptionHandler } from "./subscriptions/updateSubscriptionHandler";
import { createTransactionHandler } from "./transactions/createTransactionHandler";
import { getTransactionByIdHandler } from "./transactions/getTransactionByIdHandler";
import { getTransactionsHandler } from "./transactions/getTransactionsHandler";
import { updateTransactionHandler } from "./transactions/updateTransactionHandler";

export const handlers = [
  getUsersForLimitedPartnerHandler,
  createUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  createGeneralPartnerHandler,
  getGeneralPartnerByIdHandler,
  updateGeneralPartnerHandler,
  getLimitedPartnersHandler,
  createLimitedPartnerHandler,
  getLimitedPartnerByIdHandler,
  updateLimitedPartnerHandler,
  createAssetHandler,
  getAssetByIdHandler,
  updateAssetHandler,
  getAssetValuationsHandler,
  createAssetValuationHandler,
  getFundAdminByAssetIdHandler,
  createAdminForAssetHandler,
  updateAdminForAssetHandler,
  getCapitalCallsForAssetHandler,
  createCapitalCallHandler,
  getCapitalCallByIdHandler,
  updateCapitalCallHandler,
  getCapitalCallInvoicesHandler,
  getCapitalCallInvoiceByIdHandler,
  updateCapitalCallInvoiceHandler,
  getAllSubscriptionsHandler,
  createSubscriptionHandler,
  getSubscriptionByIdHandler,
  updateSubscriptionHandler,
  getTransactionsHandler,
  createTransactionHandler,
  getTransactionByIdHandler,
  updateTransactionHandler,
  createCounterpartyHandler,
  getCounterpartyByIdHandler,
  updateCounterpartyHandler,
  createBankAccountHandler,
  getBankAccountByIdHandler,
  updateBankAccountHandler,
] as const;
