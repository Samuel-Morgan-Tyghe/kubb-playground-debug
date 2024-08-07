export const operations = {
  createAdminForAsset: {
    method: "post",
    path: "/assets/:assetId/fund-admins",
  },
  createAsset: {
    method: "post",
    path: "/assets",
  },
  createAssetValuation: {
    method: "post",
    path: "/assets/:assetId/valuations",
  },
  createBankAccount: {
    method: "post",
    path: "/bank-accounts",
  },
  createCapitalCall: {
    method: "post",
    path: "/capital-calls",
  },
  createCounterparty: {
    method: "post",
    path: "/counterparties",
  },
  createGeneralPartner: {
    method: "post",
    path: "/general-partners",
  },
  createLimitedPartner: {
    method: "post",
    path: "/limited-partners",
  },
  createSubscription: {
    method: "post",
    path: "/subscriptions",
  },
  createTransaction: {
    method: "post",
    path: "/transactions",
  },
  createUser: {
    method: "post",
    path: "/users",
  },
  getAllSubscriptions: {
    method: "get",
    path: "/subscriptions",
  },
  getAssetById: {
    method: "get",
    path: "/assets/:assetId",
  },
  getAssetValuations: {
    method: "get",
    path: "/assets/:assetId/valuations",
  },
  getBankAccountById: {
    method: "get",
    path: "/bank-accounts/:bankAccountId",
  },
  getCapitalCallById: {
    method: "get",
    path: "/capital-calls/:capitalCallId",
  },
  getCapitalCallInvoiceById: {
    method: "get",
    path: "/capital-call-invoices/:capitalCallInvoiceId",
  },
  getCapitalCallInvoices: {
    method: "get",
    path: "/capital-call-invoices",
  },
  getCapitalCallsForAsset: {
    method: "get",
    path: "/capital-calls",
  },
  getCounterpartyById: {
    method: "get",
    path: "/counterparties/:counterpartyId",
  },
  getFundAdminByAssetId: {
    method: "get",
    path: "/assets/:assetId/fund-admins",
  },
  getGeneralPartnerById: {
    method: "get",
    path: "/general-partners/:generalPartnerId",
  },
  getLimitedPartnerById: {
    method: "get",
    path: "/limited-partners/:limitedPartnerId",
  },
  getLimitedPartners: {
    method: "get",
    path: "/limited-partners",
  },
  getSubscriptionById: {
    method: "get",
    path: "/subscriptions/:subscriptionId",
  },
  getTransactionById: {
    method: "get",
    path: "/transactions/:transactionId",
  },
  getTransactions: {
    method: "get",
    path: "/transactions",
  },
  getUserById: {
    method: "get",
    path: "/users/:userId",
  },
  getUsersForLimitedPartner: {
    method: "get",
    path: "/users",
  },
  updateAdminForAsset: {
    method: "patch",
    path: "/assets/:assetId/fund-admins",
  },
  updateAsset: {
    method: "patch",
    path: "/assets/:assetId",
  },
  updateBankAccount: {
    method: "patch",
    path: "/bank-accounts/:bankAccountId",
  },
  updateCapitalCall: {
    method: "patch",
    path: "/capital-calls/:capitalCallId",
  },
  updateCapitalCallInvoice: {
    method: "patch",
    path: "/capital-call-invoices/:capitalCallInvoiceId",
  },
  updateCounterparty: {
    method: "patch",
    path: "/counterparties/:counterpartyId",
  },
  updateGeneralPartner: {
    method: "patch",
    path: "/general-partners/:generalPartnerId",
  },
  updateLimitedPartner: {
    method: "patch",
    path: "/limited-partners/:limitedPartnerId",
  },
  updateSubscription: {
    method: "patch",
    path: "/subscriptions/:subscriptionId",
  },
  updateTransaction: {
    method: "patch",
    path: "/transactions/:transactionId",
  },
  updateUser: {
    method: "patch",
    path: "/users/:userId",
  },
} as const;
