/**
  *This is an object representing a Stripe account. You can retrieve it to see
  * properties on the account like its current e-mail address or if the account is
  * enabled yet to make live charges.
  * 
  * Some properties, marked below, are available only to platforms that want to
  * [create and manage Express or Custom accounts](https://stripe.com/docs/connect/accounts).
 */
export interface Account {
  business_profile?: any | null;
  business_type?: 'company' | 'government_entity' | 'individual' | 'non_profit' | null;
  account_capabilities?: AccountCapabilities;
  charges_enabled?: boolean;
  legal_entity_company?: LegalEntityCompany;
  country?: string;
  created?: number;
  default_currency?: string;
  details_submitted?: boolean;
  email?: string | null;
  external_accounts?: any;
  id: string;
  person?: Person;
  metadata?: any;
  object: 'account';
  payouts_enabled?: boolean;
  account_requirements?: AccountRequirements;
  settings?: any | null;
  account_tos_acceptance?: AccountTosAcceptance;
  type?: 'custom' | 'express' | 'standard';
}

export interface AccountBacsDebitPaymentsSettings {
  display_name?: string;
}

export interface AccountBrandingSettings {
  icon?: any | null;
  logo?: any | null;
  primary_color?: string | null;
  secondary_color?: string | null;
}

export interface AccountBusinessProfile {
  mcc?: string | null;
  name?: string | null;
  product_description?: string | null;
  support_address?: any | null;
  support_email?: string | null;
  support_phone?: string | null;
  support_url?: string | null;
  url?: string | null;
}

export interface AccountCapabilities {
  au_becs_debit_payments?: 'active' | 'inactive' | 'pending';
  bacs_debit_payments?: 'active' | 'inactive' | 'pending';
  card_issuing?: 'active' | 'inactive' | 'pending';
  card_payments?: 'active' | 'inactive' | 'pending';
  cartes_bancaires_payments?: 'active' | 'inactive' | 'pending';
  fpx_payments?: 'active' | 'inactive' | 'pending';
  jcb_payments?: 'active' | 'inactive' | 'pending';
  legacy_payments?: 'active' | 'inactive' | 'pending';
  tax_reporting_us_1099_k?: 'active' | 'inactive' | 'pending';
  tax_reporting_us_1099_misc?: 'active' | 'inactive' | 'pending';
  transfers?: 'active' | 'inactive' | 'pending';
}

export interface AccountCapabilityRequirements {
  current_deadline?: number | null;
  currently_due: Array<string>;
  disabled_reason?: string | null;
  errors: Array<AccountRequirementsError>;
  eventually_due: Array<string>;
  past_due: Array<string>;
  pending_verification: Array<string>;
}

export interface AccountCardPaymentsSettings {
  account_decline_charge_on?: AccountDeclineChargeOn;
  statement_descriptor_prefix?: string | null;
}

export interface AccountDashboardSettings {
  display_name?: string | null;
  timezone?: string | null;
}

export interface AccountDeclineChargeOn {
  avs_failure: boolean;
  cvc_failure: boolean;
}

/**
  *Account Links are the means by which a Connect platform grants a connected account permission to access
  * Stripe-hosted applications, such as Connect Onboarding.
  * 
  * Related guide: [Connect Onboarding](https://stripe.com/docs/connect/connect-onboarding).
 */
export interface AccountLink {
  created: number;
  expires_at: number;
  object: 'account_link';
  url: string;
}

export interface AccountPaymentsSettings {
  statement_descriptor?: string | null;
  statement_descriptor_kana?: string | null;
  statement_descriptor_kanji?: string | null;
}

export interface AccountPayoutSettings {
  debit_negative_balances: boolean;
  transfer_schedule?: TransferSchedule;
  statement_descriptor?: string | null;
}

export interface AccountRequirements {
  current_deadline?: number | null;
  currently_due?: Array<string> | null;
  disabled_reason?: string | null;
  errors?: Array<AccountRequirementsError> | null;
  eventually_due?: Array<string> | null;
  past_due?: Array<string> | null;
  pending_verification?: Array<string> | null;
}

export interface AccountRequirementsError {
  code: 'invalid_address_city_state_postal_code' | 'invalid_street_address' | 'invalid_value_other' | 'verification_document_address_mismatch' | 'verification_document_address_missing' | 'verification_document_corrupt' | 'verification_document_country_not_supported' | 'verification_document_dob_mismatch' | 'verification_document_duplicate_type' | 'verification_document_expired' | 'verification_document_failed_copy' | 'verification_document_failed_greyscale' | 'verification_document_failed_other' | 'verification_document_failed_test_mode' | 'verification_document_fraudulent' | 'verification_document_id_number_mismatch' | 'verification_document_id_number_missing' | 'verification_document_incomplete' | 'verification_document_invalid' | 'verification_document_manipulated' | 'verification_document_missing_back' | 'verification_document_missing_front' | 'verification_document_name_mismatch' | 'verification_document_name_missing' | 'verification_document_nationality_mismatch' | 'verification_document_not_readable' | 'verification_document_not_uploaded' | 'verification_document_photo_mismatch' | 'verification_document_too_large' | 'verification_document_type_not_supported' | 'verification_failed_address_match' | 'verification_failed_business_iec_number' | 'verification_failed_document_match' | 'verification_failed_id_number_match' | 'verification_failed_keyed_identity' | 'verification_failed_keyed_match' | 'verification_failed_name_match' | 'verification_failed_other';
  reason: string;
  requirement: string;
}

export interface AccountSepaDebitPaymentsSettings {
  creditor_id?: string;
}

export interface AccountSettings {
  account_bacs_debit_payments_settings?: AccountBacsDebitPaymentsSettings;
  account_branding_settings?: AccountBrandingSettings;
  account_card_payments_settings?: AccountCardPaymentsSettings;
  account_dashboard_settings?: AccountDashboardSettings;
  account_payments_settings?: AccountPaymentsSettings;
  account_payout_settings?: AccountPayoutSettings;
  account_sepa_debit_payments_settings?: AccountSepaDebitPaymentsSettings;
}

export interface AccountTosAcceptance {
  date?: number | null;
  ip?: string | null;
  user_agent?: string | null;
}

export interface Address {
  city?: string | null;
  country?: string | null;
  line1?: string | null;
  line2?: string | null;
  postal_code?: string | null;
  state?: string | null;
}

export interface AlipayAccount {
  created: number;
  customer?: any | null;
  fingerprint: string;
  id: string;
  livemode: boolean;
  metadata?: any;
  object: 'alipay_account';
  payment_amount?: number | null;
  payment_currency?: string | null;
  reusable: boolean;
  used: boolean;
  username: string;
}

export interface ApiErrors {
  charge?: string;
  code?: string;
  decline_code?: string;
  doc_url?: string;
  message?: string;
  param?: string;
  payment_intent?: PaymentIntent;
  payment_method?: PaymentMethod;
  setup_intent?: SetupIntent;
  source?: any;
  type: 'api_connection_error' | 'api_error' | 'authentication_error' | 'card_error' | 'idempotency_error' | 'invalid_request_error' | 'rate_limit_error';
}

export interface ApplePayDomain {
  created: number;
  domain_name: string;
  id: string;
  livemode: boolean;
  object: 'apple_pay_domain';
}

export interface Application {
  id: string;
  name?: string | null;
  object: 'application';
}

export interface ApplicationFee {
  account: any;
  amount: number;
  amount_refunded: number;
  application: any;
  balance_transaction?: any | null;
  charge: any;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  object: 'application_fee';
  originating_transaction?: any | null;
  refunded: boolean;
  refunds: any;
}

/**
  *This is an object representing your Stripe balance. You can retrieve it to see
  * the balance currently on your Stripe account.
  * 
  * You can also retrieve the balance history, which contains a list of
  * [transactions](https://stripe.com/docs/reporting/balance-transaction-types) that contributed to the balance
  * (charges, payouts, and so forth).
  * 
  * The available and pending amounts for each currency are broken down further by
  * payment source types.
  * 
  * Related guide: [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances).
 */
export interface Balance {
  available: Array<BalanceAmount>;
  connect_reserved?: Array<BalanceAmount>;
  balance_detail?: BalanceDetail;
  livemode: boolean;
  object: 'balance';
  pending: Array<BalanceAmount>;
}

export interface BalanceAmount {
  amount: number;
  currency: string;
  balance_amount_by_source_type?: BalanceAmountBySourceType;
}

export interface BalanceAmountBySourceType {
  bank_account?: number;
  card?: number;
  fpx?: number;
}

export interface BalanceDetail {
  available: Array<BalanceAmount>;
}

/**
  *Balance transactions represent funds moving through your Stripe account.
  * They're created for every type of transaction that comes into or flows out of your Stripe account balance.
  * 
  * Related guide: [Balance Transaction Types](https://stripe.com/docs/reports/balance-transaction-types).
 */
export interface BalanceTransaction {
  amount: number;
  available_on: number;
  created: number;
  currency: string;
  description?: string | null;
  exchange_rate?: number | null;
  fee: number;
  fee_details: Array<Fee>;
  id: string;
  net: number;
  object: 'balance_transaction';
  reporting_category: string;
  source?: any | null;
  status: string;
  type: 'adjustment' | 'advance' | 'advance_funding' | 'anticipation_repayment' | 'application_fee' | 'application_fee_refund' | 'charge' | 'connect_collection_transfer' | 'issuing_authorization_hold' | 'issuing_authorization_release' | 'issuing_dispute' | 'issuing_transaction' | 'payment' | 'payment_failure_refund' | 'payment_refund' | 'payout' | 'payout_cancel' | 'payout_failure' | 'refund' | 'refund_failure' | 'reserve_transaction' | 'reserved_funds' | 'stripe_fee' | 'stripe_fx_fee' | 'tax_fee' | 'topup' | 'topup_reversal' | 'transfer' | 'transfer_cancel' | 'transfer_failure' | 'transfer_refund';
}

/**
  *These bank accounts are payment methods on `Customer` objects.
  * 
  * On the other hand [External Accounts](https://stripe.com/docs/api#external_accounts) are transfer
  * destinations on `Account` objects for [Custom accounts](https://stripe.com/docs/connect/custom-accounts).
  * They can be bank accounts or debit cards as well, and are documented in the links above.
  * 
  * Related guide: [Bank Debits and Transfers](https://stripe.com/docs/payments/bank-debits-transfers).
 */
export interface BankAccount {
  account?: any | null;
  account_holder_name?: string | null;
  account_holder_type?: string | null;
  bank_name?: string | null;
  country: string;
  currency: string;
  customer?: any | null;
  default_for_currency?: boolean | null;
  fingerprint?: string | null;
  id: string;
  last4: string;
  metadata?: any | null;
  object: 'bank_account';
  routing_number?: string | null;
  status: string;
}

export interface BillingDetails {
  address?: any | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
}

/**
  *A session describes the instantiation of the customer portal for
  * a particular customer. By visiting the session's URL, the customer
  * can manage their subscriptions and billing details. For security reasons,
  * sessions are short-lived and will expire if the customer does not visit the URL.
  * Create sessions on-demand when customers intend to manage their subscriptions and billing details.
  * 
  * Integration guide: [Billing customer portal](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal).
 */
export interface BillingPortalSession {
  created: number;
  customer: string;
  id: string;
  livemode: boolean;
  object: 'billing_portal.session';
  return_url: string;
  url: string;
}

export interface BitcoinReceiver {
  active: boolean;
  amount: number;
  amount_received: number;
  bitcoin_amount: number;
  bitcoin_amount_received: number;
  bitcoin_uri: string;
  created: number;
  currency: string;
  customer?: string | null;
  description?: string | null;
  email?: string | null;
  filled: boolean;
  id: string;
  inbound_address: string;
  livemode: boolean;
  metadata: any;
  object: 'bitcoin_receiver';
  payment?: string | null;
  refund_address?: string | null;
  transactions?: any;
  uncaptured_funds: boolean;
  used_for_payment?: boolean | null;
}

export interface BitcoinTransaction {
  amount: number;
  bitcoin_amount: number;
  created: number;
  currency: string;
  id: string;
  object: 'bitcoin_transaction';
  receiver: string;
}

/**
  *This is an object representing a capability for a Stripe account.
  * 
  * Related guide: [Account capabilities](https://stripe.com/docs/connect/account-capabilities).
 */
export interface Capability {
  account: any;
  id: string;
  object: 'capability';
  requested: boolean;
  requested_at?: number | null;
  account_capability_requirements?: AccountCapabilityRequirements;
  status: 'active' | 'disabled' | 'inactive' | 'pending' | 'unrequested';
}

/**
  *You can store multiple cards on a customer in order to charge the customer
  * later. You can also store multiple debit cards on a recipient in order to
  * transfer to those cards later.
  * 
  * Related guide: [Card Payments with Sources](https://stripe.com/docs/sources/cards).
 */
export interface Card {
  account?: any | null;
  address_city?: string | null;
  address_country?: string | null;
  address_line1?: string | null;
  address_line1_check?: string | null;
  address_line2?: string | null;
  address_state?: string | null;
  address_zip?: string | null;
  address_zip_check?: string | null;
  available_payout_methods?: Array<'instant' | 'standard'> | null;
  brand: string;
  country?: string | null;
  currency?: string | null;
  customer?: any | null;
  cvc_check?: string | null;
  default_for_currency?: boolean | null;
  dynamic_last4?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string;
  id: string;
  last4: string;
  metadata: any;
  name?: string | null;
  object: 'card';
  recipient?: any | null;
  tokenization_method?: string | null;
}

export interface CardMandatePaymentMethodDetails {
}

/**
  *To charge a credit or a debit card, you create a `Charge` object. You can
  * retrieve and refund individual charges as well as list all charges. Charges
  * are identified by a unique, random ID.
  * 
  * Related guide: [Accept a payment with the Charges API](https://stripe.com/docs/payments/accept-a-payment-charges).
 */
export interface Charge {
  amount: number;
  amount_refunded: number;
  application?: any | null;
  application_fee?: any | null;
  application_fee_amount?: number | null;
  balance_transaction?: any | null;
  billing_details: BillingDetails;
  calculated_statement_descriptor?: string | null;
  captured: boolean;
  created: number;
  currency: string;
  customer?: any | null;
  description?: string | null;
  disputed: boolean;
  failure_code?: string | null;
  failure_message?: string | null;
  fraud_details?: any | null;
  id: string;
  invoice?: any | null;
  livemode: boolean;
  metadata: any;
  object: 'charge';
  on_behalf_of?: any | null;
  order?: any | null;
  outcome?: any | null;
  paid: boolean;
  payment_intent?: any | null;
  payment_method?: string | null;
  payment_method_details?: any | null;
  receipt_email?: string | null;
  receipt_number?: string | null;
  receipt_url?: string | null;
  refunded: boolean;
  refunds: any;
  review?: any | null;
  shipping?: any | null;
  source_transfer?: any | null;
  statement_descriptor?: string | null;
  statement_descriptor_suffix?: string | null;
  status: string;
  transfer?: any;
  transfer_data?: any | null;
  transfer_group?: string | null;
}

export interface ChargeFraudDetails {
  stripe_report?: string;
  user_report?: string;
}

export interface ChargeOutcome {
  network_status?: string | null;
  reason?: string | null;
  risk_level?: string;
  risk_score?: number;
  rule?: any;
  seller_message?: string | null;
  type: string;
}

export interface ChargeTransferData {
  amount?: number | null;
  destination: any;
}

/**
  *A Checkout Session represents your customer's session as they pay for
  * one-time purchases or subscriptions through [Checkout](https://stripe.com/docs/payments/checkout).
  * We recommend creating a new Session each time your customer attempts to pay.
  * 
  * Once payment is successful, the Checkout Session will contain a reference
  * to the [Customer](https://stripe.com/docs/api/customers), and either the successful
  * [PaymentIntent](https://stripe.com/docs/api/payment_intents) or an active
  * [Subscription](https://stripe.com/docs/api/subscriptions).
  * 
  * You can create a Checkout Session on your server and pass its ID to the
  * client to begin Checkout.
  * 
  * Related guide: [Checkout Server Quickstart](https://stripe.com/docs/payments/checkout/api).
 */
export interface CheckoutSession {
  amount_subtotal?: number | null;
  amount_total?: number | null;
  billing_address_collection?: 'auto' | 'required' | null;
  cancel_url: string;
  client_reference_id?: string | null;
  currency?: string | null;
  customer?: any | null;
  customer_email?: string | null;
  display_items?: Array<CheckoutSessionDisplayItem>;
  id: string;
  line_items?: any;
  livemode: boolean;
  locale?: 'auto' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'en-GB' | 'es' | 'es-419' | 'et' | 'fi' | 'fr' | 'fr-CA' | 'hu' | 'id' | 'it' | 'ja' | 'lt' | 'lv' | 'ms' | 'mt' | 'nb' | 'nl' | 'pl' | 'pt' | 'pt-BR' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'tr' | 'zh' | null;
  metadata?: any | null;
  mode?: 'payment' | 'setup' | 'subscription' | null;
  object: 'checkout.session';
  payment_intent?: any | null;
  payment_method_types: Array<string>;
  setup_intent?: any | null;
  shipping?: any | null;
  shipping_address_collection?: any | null;
  submit_type?: 'auto' | 'book' | 'donate' | 'pay' | null;
  subscription?: any | null;
  success_url: string;
  total_details?: any | null;
}

export interface CheckoutSessionCustomDisplayItemDescription {
  description?: string | null;
  images?: Array<string> | null;
  name: string;
}

export interface CheckoutSessionDisplayItem {
  amount?: number;
  currency?: string;
  checkout_session_custom_display_item_description?: CheckoutSessionCustomDisplayItemDescription;
  plan?: Plan;
  quantity?: number;
  sku?: Sku;
  type?: string;
}

export interface ConnectCollectionTransfer {
  amount: number;
  currency: string;
  destination: any;
  id: string;
  livemode: boolean;
  object: 'connect_collection_transfer';
}

/**
  *Stripe needs to collect certain pieces of information about each account
  * created. These requirements can differ depending on the account's country. The
  * Country Specs API makes these rules available to your integration.
  * 
  * You can also view the information from this API call as [an online
  * guide](/docs/connect/required-verification-information).
 */
export interface CountrySpec {
  default_currency: string;
  id: string;
  object: 'country_spec';
  supported_bank_account_currencies: any;
  supported_payment_currencies: Array<string>;
  supported_payment_methods: Array<string>;
  supported_transfer_countries: Array<string>;
  country_spec_verification_fields?: CountrySpecVerificationFields;
}

export interface CountrySpecVerificationFieldDetails {
  additional: Array<string>;
  minimum: Array<string>;
}

export interface CountrySpecVerificationFields {
  country_spec_verification_field_details?: CountrySpecVerificationFieldDetails;
  country_spec_verification_field_details?: CountrySpecVerificationFieldDetails;
}

/**
  *A coupon contains information about a percent-off or amount-off discount you
  * might want to apply to a customer. Coupons may be applied to [invoices](https://stripe.com/docs/api#invoices) or
  * [orders](https://stripe.com/docs/api#create_order-coupon). Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge).
 */
export interface Coupon {
  amount_off?: number | null;
  created: number;
  currency?: string | null;
  duration: 'forever' | 'once' | 'repeating';
  duration_in_months?: number | null;
  id: string;
  livemode: boolean;
  max_redemptions?: number | null;
  metadata: any;
  name?: string | null;
  object: 'coupon';
  percent_off?: number | null;
  redeem_by?: number | null;
  times_redeemed: number;
  valid: boolean;
}

/**
  *Issue a credit note to adjust an invoice's amount after the invoice is finalized.
  * 
  * Related guide: [Credit Notes](https://stripe.com/docs/billing/invoices/credit-notes).
 */
export interface CreditNote {
  amount: number;
  created: number;
  currency: string;
  customer: any;
  customer_balance_transaction?: any | null;
  discount_amount: number;
  discount_amounts?: Array<DiscountsResourceDiscountAmount>;
  id: string;
  invoice: any;
  lines: any;
  livemode: boolean;
  memo?: string | null;
  metadata: any;
  number: string;
  object: 'credit_note';
  out_of_band_amount?: number | null;
  pdf: string;
  reason?: 'duplicate' | 'fraudulent' | 'order_change' | 'product_unsatisfactory' | null;
  refund?: any | null;
  status: 'issued' | 'void';
  subtotal: number;
  tax_amounts: Array<CreditNoteTaxAmount>;
  total: number;
  type: 'post_payment' | 'pre_payment';
  voided_at?: number | null;
}

export interface CreditNoteLineItem {
  amount: number;
  description?: string | null;
  discount_amount: number;
  discount_amounts?: Array<DiscountsResourceDiscountAmount>;
  id: string;
  invoice_line_item?: string;
  livemode: boolean;
  object: 'credit_note_line_item';
  quantity?: number | null;
  tax_amounts: Array<CreditNoteTaxAmount>;
  tax_rates: Array<TaxRate>;
  type: 'custom_line_item' | 'invoice_line_item';
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
}

export interface CreditNoteTaxAmount {
  amount: number;
  inclusive: boolean;
  tax_rate: any;
}

/**
  *`Customer` objects allow you to perform recurring charges, and to track
  * multiple charges, that are associated with the same customer. The API allows
  * you to create, delete, and update your customers. You can retrieve individual
  * customers as well as a list of all your customers.
  * 
  * Related guide: [Save a card during payment](https://stripe.com/docs/payments/save-during-payment).
 */
export interface Customer {
  address?: any | null;
  balance?: number;
  created: number;
  currency?: string | null;
  default_source?: any | null;
  delinquent?: boolean | null;
  description?: string | null;
  discount?: any | null;
  email?: string | null;
  id: string;
  invoice_prefix?: string | null;
  invoice_setting_customer_setting?: InvoiceSettingCustomerSetting;
  livemode: boolean;
  metadata?: any;
  name?: string | null;
  next_invoice_sequence?: number;
  object: 'customer';
  phone?: string | null;
  preferred_locales?: Array<string> | null;
  shipping?: any | null;
  sources: any;
  subscriptions?: any | null;
  tax_exempt?: 'exempt' | 'none' | 'reverse' | null;
  tax_ids?: any;
}

export interface CustomerAcceptance {
  accepted_at?: number | null;
  offline_acceptance?: OfflineAcceptance;
  online_acceptance?: OnlineAcceptance;
  type: 'offline' | 'online';
}

/**
  *Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) value,
  * which denotes a debit or credit that's automatically applied to their next invoice upon finalization.
  * You may modify the value directly by using the [update customer API](https://stripe.com/docs/api/customers/update),
  * or by creating a Customer Balance Transaction, which increments or decrements the customer's `balance` by the specified `amount`.
  * 
  * Related guide: [Customer Balance](https://stripe.com/docs/billing/customer/balance) to learn more.
 */
export interface CustomerBalanceTransaction {
  amount: number;
  created: number;
  credit_note?: any | null;
  currency: string;
  customer: any;
  description?: string | null;
  ending_balance: number;
  id: string;
  invoice?: any | null;
  livemode: boolean;
  metadata?: any | null;
  object: 'customer_balance_transaction';
  type: 'adjustment' | 'applied_to_invoice' | 'credit_note' | 'initial' | 'invoice_too_large' | 'invoice_too_small' | 'migration' | 'unapplied_from_invoice' | 'unspent_receiver_credit';
}

export interface DeletedAccount {
  deleted: 'true';
  id: string;
  object: 'account';
}

export interface DeletedAlipayAccount {
  deleted: 'true';
  id: string;
  object: 'alipay_account';
}

export interface DeletedApplePayDomain {
  deleted: 'true';
  id: string;
  object: 'apple_pay_domain';
}

export interface DeletedBankAccount {
  currency?: string | null;
  deleted: 'true';
  id: string;
  object: 'bank_account';
}

export interface DeletedBitcoinReceiver {
  deleted: 'true';
  id: string;
  object: 'bitcoin_receiver';
}

export interface DeletedCard {
  currency?: string | null;
  deleted: 'true';
  id: string;
  object: 'card';
}

export interface DeletedCoupon {
  deleted: 'true';
  id: string;
  object: 'coupon';
}

export interface DeletedCustomer {
  deleted: 'true';
  id: string;
  object: 'customer';
}

export interface DeletedDiscount {
  coupon: Coupon;
  customer?: any | null;
  deleted: 'true';
  id?: string;
  invoice?: string | null;
  invoice_item?: string | null;
  object: 'discount';
  start: number;
  subscription?: string | null;
}

export interface DeletedExternalAccount {
  deleted_bank_account?: DeletedBankAccount;
  deleted_card?: DeletedCard;
}

export interface DeletedInvoice {
  deleted: 'true';
  id: string;
  object: 'invoice';
}

export interface DeletedInvoiceitem {
  deleted: 'true';
  id: string;
  object: 'invoiceitem';
}

export interface DeletedPaymentSource {
  deleted_alipay_account?: DeletedAlipayAccount;
  deleted_bank_account?: DeletedBankAccount;
  deleted_bitcoin_receiver?: DeletedBitcoinReceiver;
  deleted_card?: DeletedCard;
}

export interface DeletedPerson {
  deleted: 'true';
  id: string;
  object: 'person';
}

export interface DeletedPlan {
  deleted: 'true';
  id: string;
  object: 'plan';
}

export interface DeletedPrice {
  deleted: 'true';
  id: string;
  object: 'price';
}

export interface DeletedProduct {
  deleted: 'true';
  id: string;
  object: 'product';
}

export interface DeletedRadarValueList {
  deleted: 'true';
  id: string;
  object: 'radar.value_list';
}

export interface DeletedRadarValueListItem {
  deleted: 'true';
  id: string;
  object: 'radar.value_list_item';
}

export interface DeletedRecipient {
  deleted: 'true';
  id: string;
  object: 'recipient';
}

export interface DeletedSku {
  deleted: 'true';
  id: string;
  object: 'sku';
}

export interface DeletedSubscriptionItem {
  deleted: 'true';
  id: string;
  object: 'subscription_item';
}

export interface DeletedTaxId {
  deleted: 'true';
  id: string;
  object: 'tax_id';
}

export interface DeletedTerminalLocation {
  deleted: 'true';
  id: string;
  object: 'terminal.location';
}

export interface DeletedTerminalReader {
  deleted: 'true';
  id: string;
  object: 'terminal.reader';
}

export interface DeletedWebhookEndpoint {
  deleted: 'true';
  id: string;
  object: 'webhook_endpoint';
}

export interface DeliveryEstimate {
  date?: string;
  earliest?: string;
  latest?: string;
  type: string;
}

/**
  *A discount represents the actual application of a coupon to a particular
  * customer. It contains information about when the discount began and when it
  * will end.
  * 
  * Related guide: [Applying Discounts to Subscriptions](https://stripe.com/docs/billing/subscriptions/discounts).
 */
export interface Discount {
  coupon: Coupon;
  customer?: any | null;
  end?: number | null;
  id?: string;
  invoice?: string | null;
  invoice_item?: string | null;
  object: 'discount';
  start: number;
  subscription?: string | null;
}

export interface DiscountsResourceDiscountAmount {
  amount: number;
  discount: any;
}

/**
  *A dispute occurs when a customer questions your charge with their card issuer.
  * When this happens, you're given the opportunity to respond to the dispute with
  * evidence that shows that the charge is legitimate. You can find more
  * information about the dispute process in our [Disputes and
  * Fraud](/docs/disputes) documentation.
  * 
  * Related guide: [Disputes and Fraud](https://stripe.com/docs/disputes).
 */
export interface Dispute {
  amount: number;
  balance_transactions: Array<BalanceTransaction>;
  charge: any;
  created: number;
  currency: string;
  dispute_evidence?: DisputeEvidence;
  dispute_evidence_details?: DisputeEvidenceDetails;
  id: string;
  is_charge_refundable: boolean;
  livemode: boolean;
  metadata: any;
  object: 'dispute';
  payment_intent?: any | null;
  reason: string;
  status: 'charge_refunded' | 'lost' | 'needs_response' | 'under_review' | 'warning_closed' | 'warning_needs_response' | 'warning_under_review' | 'won';
}

export interface DisputeEvidence {
  access_activity_log?: string | null;
  billing_address?: string | null;
  cancellation_policy?: any | null;
  cancellation_policy_disclosure?: string | null;
  cancellation_rebuttal?: string | null;
  customer_communication?: any | null;
  customer_email_address?: string | null;
  customer_name?: string | null;
  customer_purchase_ip?: string | null;
  customer_signature?: any | null;
  duplicate_charge_documentation?: any | null;
  duplicate_charge_explanation?: string | null;
  duplicate_charge_id?: string | null;
  product_description?: string | null;
  receipt?: any | null;
  refund_policy?: any | null;
  refund_policy_disclosure?: string | null;
  refund_refusal_explanation?: string | null;
  service_date?: string | null;
  service_documentation?: any | null;
  shipping_address?: string | null;
  shipping_carrier?: string | null;
  shipping_date?: string | null;
  shipping_documentation?: any | null;
  shipping_tracking_number?: string | null;
  uncategorized_file?: any | null;
  uncategorized_text?: string | null;
}

export interface DisputeEvidenceDetails {
  due_by?: number | null;
  has_evidence: boolean;
  past_due: boolean;
  submission_count: number;
}

export interface EphemeralKey {
  created: number;
  expires: number;
  id: string;
  livemode: boolean;
  object: 'ephemeral_key';
  secret?: string;
}

/**
  *An error response from the Stripe API
 */
export interface Error {
  api_errors?: ApiErrors;
}

/**
  *Events are our way of letting you know when something interesting happens in
  * your account. When an interesting event occurs, we create a new `Event`
  * object. For example, when a charge succeeds, we create a `charge.succeeded`
  * event; and when an invoice payment attempt fails, we create an
  * `invoice.payment_failed` event. Note that many API requests may cause multiple
  * events to be created. For example, if you create a new subscription for a
  * customer, you will receive both a `customer.subscription.created` event and a
  * `charge.succeeded` event.
  * 
  * Events occur when the state of another API resource changes. The state of that
  * resource at the time of the change is embedded in the event's data field. For
  * example, a `charge.succeeded` event will contain a charge, and an
  * `invoice.payment_failed` event will contain an invoice.
  * 
  * As with other API resources, you can use endpoints to retrieve an
  * [individual event](https://stripe.com/docs/api#retrieve_event) or a [list of events](https://stripe.com/docs/api#list_events)
  * from the API. We also have a separate
  * [webhooks](http://en.wikipedia.org/wiki/Webhook) system for sending the
  * `Event` objects directly to an endpoint on your server. Webhooks are managed
  * in your
  * [account settings](https://dashboard.stripe.com/account/webhooks),
  * and our [Using Webhooks](https://stripe.com/docs/webhooks) guide will help you get set up.
  * 
  * When using [Connect](https://stripe.com/docs/connect), you can also receive notifications of
  * events that occur in connected accounts. For these events, there will be an
  * additional `account` attribute in the received `Event` object.
  * 
  * **NOTE:** Right now, access to events through the [Retrieve Event API](https://stripe.com/docs/api#retrieve_event) is
  * guaranteed only for 30 days.
 */
export interface Event {
  account?: string;
  api_version?: string | null;
  created: number;
  notification_event_data?: NotificationEventData;
  id: string;
  livemode: boolean;
  object: 'event';
  pending_webhooks: number;
  request?: any | null;
  type: string;
}

/**
  *`Exchange Rate` objects allow you to determine the rates that Stripe is
  * currently using to convert from one currency to another. Since this number is
  * variable throughout the day, there are various reasons why you might want to
  * know the current rate (for example, to dynamically price an item for a user
  * with a default payment in a foreign currency).
  * 
  * If you want a guarantee that the charge is made with a certain exchange rate
  * you expect is current, you can pass in `exchange_rate` to charges endpoints.
  * If the value is no longer up to date, the charge won't go through. Please
  * refer to our [Exchange Rates API](https://stripe.com/docs/exchange-rates) guide for more
  * details.
 */
export interface ExchangeRate {
  id: string;
  object: 'exchange_rate';
  rates: any;
}

export interface ExternalAccount {
  bank_account?: BankAccount;
  card?: Card;
}

export interface Fee {
  amount: number;
  application?: string | null;
  currency: string;
  description?: string | null;
  type: string;
}

/**
  *`Application Fee Refund` objects allow you to refund an application fee that
  * has previously been created but not yet refunded. Funds will be refunded to
  * the Stripe account from which the fee was originally collected.
  * 
  * Related guide: [Refunding Application Fees](https://stripe.com/docs/connect/destination-charges#refunding-app-fee).
 */
export interface FeeRefund {
  amount: number;
  balance_transaction?: any | null;
  created: number;
  currency: string;
  fee: any;
  id: string;
  metadata: any;
  object: 'fee_refund';
}

/**
  *This is an object representing a file hosted on Stripe's servers. The
  * file may have been uploaded by yourself using the [create file](https://stripe.com/docs/api#create_file)
  * request (for example, when uploading dispute evidence) or it may have
  * been created by Stripe (for example, the results of a [Sigma scheduled
  * query](#scheduled_queries)).
  * 
  * Related guide: [File Upload Guide](https://stripe.com/docs/file-upload).
 */
export interface File {
  created: number;
  filename?: string | null;
  id: string;
  links?: any | null;
  object: 'file';
  purpose: 'additional_verification' | 'business_icon' | 'business_logo' | 'customer_signature' | 'dispute_evidence' | 'identity_document' | 'pci_document' | 'tax_document_user_upload';
  size: number;
  title?: string | null;
  type?: string | null;
  url?: string | null;
}

/**
  *To share the contents of a `File` object with non-Stripe users, you can
  * create a `FileLink`. `FileLink`s contain a URL that can be used to
  * retrieve the contents of the file without authentication.
 */
export interface FileLink {
  created: number;
  expired: boolean;
  expires_at?: number | null;
  file: any;
  id: string;
  livemode: boolean;
  metadata: any;
  object: 'file_link';
  url?: string | null;
}

export interface FinancialReportingFinanceReportRunRunParameters {
  columns?: Array<string>;
  connected_account?: string;
  currency?: string;
  interval_end?: number;
  interval_start?: number;
  payout?: string;
  reporting_category?: string;
  timezone?: string;
}

export interface Inventory {
  quantity?: number | null;
  type: string;
  value?: string | null;
}

/**
  *Invoices are statements of amounts owed by a customer, and are either
  * generated one-off, or generated periodically from a subscription.
  * 
  * They contain [invoice items](https://stripe.com/docs/api#invoiceitems), and proration adjustments
  * that may be caused by subscription upgrades/downgrades (if necessary).
  * 
  * If your invoice is configured to be billed through automatic charges,
  * Stripe automatically finalizes your invoice and attempts payment. Note
  * that finalizing the invoice,
  * [when automatic](https://stripe.com/docs/billing/invoices/workflow/#auto_advance), does
  * not happen immediately as the invoice is created. Stripe waits
  * until one hour after the last webhook was successfully sent (or the last
  * webhook timed out after failing). If you (and the platforms you may have
  * connected to) have no webhooks configured, Stripe waits one hour after
  * creation to finalize the invoice.
  * 
  * If your invoice is configured to be billed by sending an email, then based on your
  * [email settings](https://dashboard.stripe.com/account/billing/automatic'),
  * Stripe will email the invoice to your customer and await payment. These
  * emails can contain a link to a hosted page to pay the invoice.
  * 
  * Stripe applies any customer credit on the account before determining the
  * amount due for the invoice (i.e., the amount that will be actually
  * charged). If the amount due for the invoice is less than Stripe's [minimum allowed charge
  * per currency](/docs/currencies#minimum-and-maximum-charge-amounts), the
  * invoice is automatically marked paid, and we add the amount due to the
  * customer's running account balance which is applied to the next invoice.
  * 
  * More details on the customer's account balance are
  * [here](https://stripe.com/docs/api/customers/object#customer_object-account_balance).
  * 
  * Related guide: [Send Invoices to Customers](https://stripe.com/docs/billing/invoices/sending).
 */
export interface Invoice {
  account_country?: string | null;
  account_name?: string | null;
  amount_due: number;
  amount_paid: number;
  amount_remaining: number;
  application_fee_amount?: number | null;
  attempt_count: number;
  attempted: boolean;
  auto_advance?: boolean;
  billing_reason?: 'automatic_pending_invoice_item_invoice' | 'manual' | 'subscription' | 'subscription_create' | 'subscription_cycle' | 'subscription_threshold' | 'subscription_update' | 'upcoming' | null;
  charge?: any | null;
  collection_method?: 'charge_automatically' | 'send_invoice' | null;
  created: number;
  currency: string;
  custom_fields?: Array<InvoiceSettingCustomField> | null;
  customer: any;
  customer_address?: any | null;
  customer_email?: string | null;
  customer_name?: string | null;
  customer_phone?: string | null;
  customer_shipping?: any | null;
  customer_tax_exempt?: 'exempt' | 'none' | 'reverse' | null;
  customer_tax_ids?: Array<InvoicesResourceInvoiceTaxId> | null;
  default_payment_method?: any | null;
  default_source?: any | null;
  default_tax_rates?: Array<TaxRate> | null;
  description?: string | null;
  discount?: any | null;
  discounts?: Array<any> | null;
  due_date?: number | null;
  ending_balance?: number | null;
  footer?: string | null;
  hosted_invoice_url?: string | null;
  id?: string;
  invoice_pdf?: string | null;
  lines: any;
  livemode: boolean;
  metadata?: any | null;
  next_payment_attempt?: number | null;
  number?: string | null;
  object: 'invoice';
  paid: boolean;
  payment_intent?: any | null;
  period_end: number;
  period_start: number;
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  receipt_number?: string | null;
  starting_balance: number;
  statement_descriptor?: string | null;
  status?: 'deleted' | 'draft' | 'open' | 'paid' | 'uncollectible' | 'void' | null;
  invoices_status_transitions?: InvoicesStatusTransitions;
  subscription?: any | null;
  subscription_proration_date?: number;
  subtotal: number;
  tax?: number | null;
  tax_percent?: number | null;
  invoice_threshold_reason?: InvoiceThresholdReason;
  total: number;
  total_discount_amounts?: Array<DiscountsResourceDiscountAmount> | null;
  total_tax_amounts?: Array<InvoiceTaxAmount> | null;
  transfer_data?: any | null;
  webhooks_delivered_at?: number | null;
}

export interface InvoiceItemThresholdReason {
  line_item_ids: Array<string>;
  usage_gte: number;
}

export interface InvoiceLineItemPeriod {
  end: number;
  start: number;
}

export interface InvoiceSettingCustomField {
  name: string;
  value: string;
}

export interface InvoiceSettingCustomerSetting {
  custom_fields?: Array<InvoiceSettingCustomField> | null;
  default_payment_method?: any | null;
  footer?: string | null;
}

export interface InvoiceSettingSubscriptionScheduleSetting {
  days_until_due?: number | null;
}

export interface InvoiceTaxAmount {
  amount: number;
  inclusive: boolean;
  tax_rate: any;
}

export interface InvoiceThresholdReason {
  amount_gte?: number | null;
  item_reasons: Array<InvoiceItemThresholdReason>;
}

export interface InvoiceTransferData {
  amount?: number | null;
  destination: any;
}

/**
  *Sometimes you want to add a charge or credit to a customer, but actually
  * charge or credit the customer's card only at the end of a regular billing
  * cycle. This is useful for combining several charges (to minimize
  * per-transaction fees), or for having Stripe tabulate your usage-based billing
  * totals.
  * 
  * Related guide: [Subscription Invoices](https://stripe.com/docs/billing/invoices/subscription#adding-upcoming-invoice-items).
 */
export interface Invoiceitem {
  amount: number;
  currency: string;
  customer: any;
  date: number;
  description?: string | null;
  discountable: boolean;
  discounts?: Array<any> | null;
  id: string;
  invoice?: any | null;
  livemode: boolean;
  metadata: any;
  object: 'invoiceitem';
  invoice_line_item_period?: InvoiceLineItemPeriod;
  plan?: any | null;
  price?: any | null;
  proration: boolean;
  quantity: number;
  subscription?: any | null;
  subscription_item?: string;
  tax_rates?: Array<TaxRate> | null;
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
}

export interface InvoicesResourceInvoiceTaxId {
  type: 'ae_trn' | 'au_abn' | 'br_cnpj' | 'br_cpf' | 'ca_bn' | 'ca_qst' | 'ch_vat' | 'cl_tin' | 'es_cif' | 'eu_vat' | 'hk_br' | 'id_npwp' | 'in_gst' | 'jp_cn' | 'kr_brn' | 'li_uid' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'no_vat' | 'nz_gst' | 'ru_inn' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'th_vat' | 'tw_vat' | 'unknown' | 'us_ein' | 'za_vat';
  value?: string | null;
}

export interface InvoicesStatusTransitions {
  finalized_at?: number | null;
  marked_uncollectible_at?: number | null;
  paid_at?: number | null;
  voided_at?: number | null;
}

/**
  *This resource has been renamed to [Early Fraud
  * Warning](#early_fraud_warning_object) and will be removed in a future API
  * version.
 */
export interface IssuerFraudRecord {
  actionable: boolean;
  charge: any;
  created: number;
  fraud_type: string;
  has_liability_shift: boolean;
  id: string;
  livemode: boolean;
  object: 'issuer_fraud_record';
  post_date: number;
}

/**
  *When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
  * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
  * purchase to be completed successfully.
  * 
  * Related guide: [Issued Card Authorizations](https://stripe.com/docs/issuing/purchases/authorizations).
 */
export interface IssuingAuthorization {
  amount: number;
  approved: boolean;
  authorization_method: 'chip' | 'contactless' | 'keyed_in' | 'online' | 'swipe';
  balance_transactions: Array<BalanceTransaction>;
  issuing.Card?: IssuingCard;
  cardholder?: any | null;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  issuing_authorization_merchant_data?: IssuingAuthorizationMerchantData;
  metadata: any;
  object: 'issuing.authorization';
  pending_request?: any | null;
  request_history: Array<IssuingAuthorizationRequest>;
  status: 'closed' | 'pending' | 'reversed';
  transactions: Array<IssuingTransaction>;
  issuing_authorization_verification_data?: IssuingAuthorizationVerificationData;
  wallet?: string | null;
}

/**
  *You can [create physical or virtual cards](https://stripe.com/docs/issuing/cards) that are issued to cardholders.
 */
export interface IssuingCard {
  brand: string;
  cancellation_reason?: 'lost' | 'stolen' | null;
  issuing.Cardholder?: IssuingCardholder;
  created: number;
  currency: string;
  cvc?: string;
  exp_month: number;
  exp_year: number;
  id: string;
  last4: string;
  livemode: boolean;
  metadata: any;
  number?: string;
  object: 'issuing.card';
  replaced_by?: any | null;
  replacement_for?: any | null;
  replacement_reason?: 'damaged' | 'expired' | 'lost' | 'stolen' | null;
  shipping?: any | null;
  issuing_card_authorization_controls?: IssuingCardAuthorizationControls;
  status: 'active' | 'canceled' | 'inactive';
  type: 'physical' | 'virtual';
}

/**
  *An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
  * 
  * Related guide: [How to create a Cardholder](https://stripe.com/docs/issuing/cards#create-cardholder)
 */
export interface IssuingCardholder {
  issuing_cardholder_address?: IssuingCardholderAddress;
  company?: any | null;
  created: number;
  email?: string | null;
  id: string;
  individual?: any | null;
  livemode: boolean;
  metadata: any;
  name: string;
  object: 'issuing.cardholder';
  phone_number?: string | null;
  issuing_cardholder_requirements?: IssuingCardholderRequirements;
  spending_controls?: any | null;
  status: 'active' | 'blocked' | 'inactive';
  type: 'company' | 'individual';
}

/**
  *As a [card issuer](https://stripe.com/docs/issuing), you can [dispute](https://stripe.com/docs/issuing/purchases/disputes) transactions that you do not recognize, suspect to be fraudulent, or have some other issue.
  * 
  * Related guide: [Disputing Transactions](https://stripe.com/docs/issuing/purchases/disputes)
 */
export interface IssuingDispute {
  balance_transactions: Array<BalanceTransaction>;
  id: string;
  livemode: boolean;
  object: 'issuing.dispute';
  transaction: any;
}

/**
  *When a non-stripe BIN is used, any use of an [issued card](https://stripe.com/docs/issuing) must be settled directly with the card network. The net amount owed is represented by an Issuing `Settlement` object.
 */
export interface IssuingSettlement {
  bin: string;
  clearing_date: number;
  created: number;
  currency: string;
  id: string;
  interchange_fees: number;
  livemode: boolean;
  metadata: any;
  net_total: number;
  network: 'visa';
  network_fees: number;
  network_settlement_identifier: string;
  object: 'issuing.settlement';
  settlement_service: string;
  transaction_count: number;
  transaction_volume: number;
}

/**
  *Any use of an [issued card](https://stripe.com/docs/issuing) that results in funds entering or leaving
  * your Stripe account, such as a completed purchase or refund, is represented by an Issuing
  * `Transaction` object.
  * 
  * Related guide: [Issued Card Transactions](https://stripe.com/docs/issuing/purchases/transactions).
 */
export interface IssuingTransaction {
  amount: number;
  authorization?: any | null;
  balance_transaction?: any | null;
  card: any;
  cardholder?: any | null;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  issuing_authorization_merchant_data?: IssuingAuthorizationMerchantData;
  metadata: any;
  object: 'issuing.transaction';
  purchase_details?: any | null;
  type: 'capture' | 'refund';
}

export interface IssuingAuthorizationMerchantData {
  category: string;
  city?: string | null;
  country?: string | null;
  name?: string | null;
  network_id: string;
  postal_code?: string | null;
  state?: string | null;
}

export interface IssuingAuthorizationPendingRequest {
  amount: number;
  currency: string;
  is_amount_controllable: boolean;
  merchant_amount: number;
  merchant_currency: string;
}

export interface IssuingAuthorizationRequest {
  amount: number;
  approved: boolean;
  created: number;
  currency: string;
  merchant_amount: number;
  merchant_currency: string;
  reason: 'account_disabled' | 'card_active' | 'card_inactive' | 'cardholder_inactive' | 'cardholder_verification_required' | 'insufficient_funds' | 'not_allowed' | 'spending_controls' | 'suspected_fraud' | 'verification_failed' | 'webhook_approved' | 'webhook_declined' | 'webhook_timeout';
}

export interface IssuingAuthorizationVerificationData {
  address_line1_check: 'match' | 'mismatch' | 'not_provided';
  address_postal_code_check: 'match' | 'mismatch' | 'not_provided';
  cvc_check: 'match' | 'mismatch' | 'not_provided';
  expiry_check: 'match' | 'mismatch' | 'not_provided';
}

export interface IssuingCardAuthorizationControls {
  allowed_categories?: Array<'ac_refrigeration_repair' | 'accounting_bookkeeping_services' | 'advertising_services' | 'agricultural_cooperative' | 'airlines_air_carriers' | 'airports_flying_fields' | 'ambulance_services' | 'amusement_parks_carnivals' | 'antique_reproductions' | 'antique_shops' | 'aquariums' | 'architectural_surveying_services' | 'art_dealers_and_galleries' | 'artists_supply_and_craft_shops' | 'auto_and_home_supply_stores' | 'auto_body_repair_shops' | 'auto_paint_shops' | 'auto_service_shops' | 'automated_cash_disburse' | 'automated_fuel_dispensers' | 'automobile_associations' | 'automotive_parts_and_accessories_stores' | 'automotive_tire_stores' | 'bail_and_bond_payments' | 'bakeries' | 'bands_orchestras' | 'barber_and_beauty_shops' | 'betting_casino_gambling' | 'bicycle_shops' | 'billiard_pool_establishments' | 'boat_dealers' | 'boat_rentals_and_leases' | 'book_stores' | 'books_periodicals_and_newspapers' | 'bowling_alleys' | 'bus_lines' | 'business_secretarial_schools' | 'buying_shopping_services' | 'cable_satellite_and_other_pay_television_and_radio' | 'camera_and_photographic_supply_stores' | 'candy_nut_and_confectionery_stores' | 'car_and_truck_dealers_new_used' | 'car_and_truck_dealers_used_only' | 'car_rental_agencies' | 'car_washes' | 'carpentry_services' | 'carpet_upholstery_cleaning' | 'caterers' | 'charitable_and_social_service_organizations_fundraising' | 'chemicals_and_allied_products' | 'child_care_services' | 'childrens_and_infants_wear_stores' | 'chiropodists_podiatrists' | 'chiropractors' | 'cigar_stores_and_stands' | 'civic_social_fraternal_associations' | 'cleaning_and_maintenance' | 'clothing_rental' | 'colleges_universities' | 'commercial_equipment' | 'commercial_footwear' | 'commercial_photography_art_and_graphics' | 'commuter_transport_and_ferries' | 'computer_network_services' | 'computer_programming' | 'computer_repair' | 'computer_software_stores' | 'computers_peripherals_and_software' | 'concrete_work_services' | 'construction_materials' | 'consulting_public_relations' | 'correspondence_schools' | 'cosmetic_stores' | 'counseling_services' | 'country_clubs' | 'courier_services' | 'court_costs' | 'credit_reporting_agencies' | 'cruise_lines' | 'dairy_products_stores' | 'dance_hall_studios_schools' | 'dating_escort_services' | 'dentists_orthodontists' | 'department_stores' | 'detective_agencies' | 'digital_goods_applications' | 'digital_goods_games' | 'digital_goods_large_volume' | 'digital_goods_media' | 'direct_marketing_catalog_merchant' | 'direct_marketing_combination_catalog_and_retail_merchant' | 'direct_marketing_inbound_telemarketing' | 'direct_marketing_insurance_services' | 'direct_marketing_other' | 'direct_marketing_outbound_telemarketing' | 'direct_marketing_subscription' | 'direct_marketing_travel' | 'discount_stores' | 'doctors' | 'door_to_door_sales' | 'drapery_window_covering_and_upholstery_stores' | 'drinking_places' | 'drug_stores_and_pharmacies' | 'drugs_drug_proprietaries_and_druggist_sundries' | 'dry_cleaners' | 'durable_goods' | 'duty_free_stores' | 'eating_places_restaurants' | 'educational_services' | 'electric_razor_stores' | 'electrical_parts_and_equipment' | 'electrical_services' | 'electronics_repair_shops' | 'electronics_stores' | 'elementary_secondary_schools' | 'employment_temp_agencies' | 'equipment_rental' | 'exterminating_services' | 'family_clothing_stores' | 'fast_food_restaurants' | 'financial_institutions' | 'fines_government_administrative_entities' | 'fireplace_fireplace_screens_and_accessories_stores' | 'floor_covering_stores' | 'florists' | 'florists_supplies_nursery_stock_and_flowers' | 'freezer_and_locker_meat_provisioners' | 'fuel_dealers_non_automotive' | 'funeral_services_crematories' | 'furniture_home_furnishings_and_equipment_stores_except_appliances' | 'furniture_repair_refinishing' | 'furriers_and_fur_shops' | 'general_services' | 'gift_card_novelty_and_souvenir_shops' | 'glass_paint_and_wallpaper_stores' | 'glassware_crystal_stores' | 'golf_courses_public' | 'government_services' | 'grocery_stores_supermarkets' | 'hardware_equipment_and_supplies' | 'hardware_stores' | 'health_and_beauty_spas' | 'hearing_aids_sales_and_supplies' | 'heating_plumbing_a_c' | 'hobby_toy_and_game_shops' | 'home_supply_warehouse_stores' | 'hospitals' | 'hotels_motels_and_resorts' | 'household_appliance_stores' | 'industrial_supplies' | 'information_retrieval_services' | 'insurance_default' | 'insurance_underwriting_premiums' | 'intra_company_purchases' | 'jewelry_stores_watches_clocks_and_silverware_stores' | 'landscaping_services' | 'laundries' | 'laundry_cleaning_services' | 'legal_services_attorneys' | 'luggage_and_leather_goods_stores' | 'lumber_building_materials_stores' | 'manual_cash_disburse' | 'marinas_service_and_supplies' | 'masonry_stonework_and_plaster' | 'massage_parlors' | 'medical_and_dental_labs' | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies' | 'medical_services' | 'membership_organizations' | 'mens_and_boys_clothing_and_accessories_stores' | 'mens_womens_clothing_stores' | 'metal_service_centers' | 'miscellaneous' | 'miscellaneous_apparel_and_accessory_shops' | 'miscellaneous_auto_dealers' | 'miscellaneous_business_services' | 'miscellaneous_food_stores' | 'miscellaneous_general_merchandise' | 'miscellaneous_general_services' | 'miscellaneous_home_furnishing_specialty_stores' | 'miscellaneous_publishing_and_printing' | 'miscellaneous_recreation_services' | 'miscellaneous_repair_shops' | 'miscellaneous_specialty_retail' | 'mobile_home_dealers' | 'motion_picture_theaters' | 'motor_freight_carriers_and_trucking' | 'motor_homes_dealers' | 'motor_vehicle_supplies_and_new_parts' | 'motorcycle_shops_and_dealers' | 'motorcycle_shops_dealers' | 'music_stores_musical_instruments_pianos_and_sheet_music' | 'news_dealers_and_newsstands' | 'non_fi_money_orders' | 'non_fi_stored_value_card_purchase_load' | 'nondurable_goods' | 'nurseries_lawn_and_garden_supply_stores' | 'nursing_personal_care' | 'office_and_commercial_furniture' | 'opticians_eyeglasses' | 'optometrists_ophthalmologist' | 'orthopedic_goods_prosthetic_devices' | 'osteopaths' | 'package_stores_beer_wine_and_liquor' | 'paints_varnishes_and_supplies' | 'parking_lots_garages' | 'passenger_railways' | 'pawn_shops' | 'pet_shops_pet_food_and_supplies' | 'petroleum_and_petroleum_products' | 'photo_developing' | 'photographic_photocopy_microfilm_equipment_and_supplies' | 'photographic_studios' | 'picture_video_production' | 'piece_goods_notions_and_other_dry_goods' | 'plumbing_heating_equipment_and_supplies' | 'political_organizations' | 'postal_services_government_only' | 'precious_stones_and_metals_watches_and_jewelry' | 'professional_services' | 'public_warehousing_and_storage' | 'quick_copy_repro_and_blueprint' | 'railroads' | 'real_estate_agents_and_managers_rentals' | 'record_stores' | 'recreational_vehicle_rentals' | 'religious_goods_stores' | 'religious_organizations' | 'roofing_siding_sheet_metal' | 'secretarial_support_services' | 'security_brokers_dealers' | 'service_stations' | 'sewing_needlework_fabric_and_piece_goods_stores' | 'shoe_repair_hat_cleaning' | 'shoe_stores' | 'small_appliance_repair' | 'snowmobile_dealers' | 'special_trade_services' | 'specialty_cleaning' | 'sporting_goods_stores' | 'sporting_recreation_camps' | 'sports_and_riding_apparel_stores' | 'sports_clubs_fields' | 'stamp_and_coin_stores' | 'stationary_office_supplies_printing_and_writing_paper' | 'stationery_stores_office_and_school_supply_stores' | 'swimming_pools_sales' | 't_ui_travel_germany' | 'tailors_alterations' | 'tax_payments_government_agencies' | 'tax_preparation_services' | 'taxicabs_limousines' | 'telecommunication_equipment_and_telephone_sales' | 'telecommunication_services' | 'telegraph_services' | 'tent_and_awning_shops' | 'testing_laboratories' | 'theatrical_ticket_agencies' | 'timeshares' | 'tire_retreading_and_repair' | 'tolls_bridge_fees' | 'tourist_attractions_and_exhibits' | 'towing_services' | 'trailer_parks_campgrounds' | 'transportation_services' | 'travel_agencies_tour_operators' | 'truck_stop_iteration' | 'truck_utility_trailer_rentals' | 'typesetting_plate_making_and_related_services' | 'typewriter_stores' | 'u_s_federal_government_agencies_or_departments' | 'uniforms_commercial_clothing' | 'used_merchandise_and_secondhand_stores' | 'utilities' | 'variety_stores' | 'veterinary_services' | 'video_amusement_game_supplies' | 'video_game_arcades' | 'video_tape_rental_stores' | 'vocational_trade_schools' | 'watch_jewelry_repair' | 'welding_repair' | 'wholesale_clubs' | 'wig_and_toupee_stores' | 'wires_money_orders' | 'womens_accessory_and_specialty_shops' | 'womens_ready_to_wear_stores' | 'wrecking_and_salvage_yards'> | null;
  blocked_categories?: Array<'ac_refrigeration_repair' | 'accounting_bookkeeping_services' | 'advertising_services' | 'agricultural_cooperative' | 'airlines_air_carriers' | 'airports_flying_fields' | 'ambulance_services' | 'amusement_parks_carnivals' | 'antique_reproductions' | 'antique_shops' | 'aquariums' | 'architectural_surveying_services' | 'art_dealers_and_galleries' | 'artists_supply_and_craft_shops' | 'auto_and_home_supply_stores' | 'auto_body_repair_shops' | 'auto_paint_shops' | 'auto_service_shops' | 'automated_cash_disburse' | 'automated_fuel_dispensers' | 'automobile_associations' | 'automotive_parts_and_accessories_stores' | 'automotive_tire_stores' | 'bail_and_bond_payments' | 'bakeries' | 'bands_orchestras' | 'barber_and_beauty_shops' | 'betting_casino_gambling' | 'bicycle_shops' | 'billiard_pool_establishments' | 'boat_dealers' | 'boat_rentals_and_leases' | 'book_stores' | 'books_periodicals_and_newspapers' | 'bowling_alleys' | 'bus_lines' | 'business_secretarial_schools' | 'buying_shopping_services' | 'cable_satellite_and_other_pay_television_and_radio' | 'camera_and_photographic_supply_stores' | 'candy_nut_and_confectionery_stores' | 'car_and_truck_dealers_new_used' | 'car_and_truck_dealers_used_only' | 'car_rental_agencies' | 'car_washes' | 'carpentry_services' | 'carpet_upholstery_cleaning' | 'caterers' | 'charitable_and_social_service_organizations_fundraising' | 'chemicals_and_allied_products' | 'child_care_services' | 'childrens_and_infants_wear_stores' | 'chiropodists_podiatrists' | 'chiropractors' | 'cigar_stores_and_stands' | 'civic_social_fraternal_associations' | 'cleaning_and_maintenance' | 'clothing_rental' | 'colleges_universities' | 'commercial_equipment' | 'commercial_footwear' | 'commercial_photography_art_and_graphics' | 'commuter_transport_and_ferries' | 'computer_network_services' | 'computer_programming' | 'computer_repair' | 'computer_software_stores' | 'computers_peripherals_and_software' | 'concrete_work_services' | 'construction_materials' | 'consulting_public_relations' | 'correspondence_schools' | 'cosmetic_stores' | 'counseling_services' | 'country_clubs' | 'courier_services' | 'court_costs' | 'credit_reporting_agencies' | 'cruise_lines' | 'dairy_products_stores' | 'dance_hall_studios_schools' | 'dating_escort_services' | 'dentists_orthodontists' | 'department_stores' | 'detective_agencies' | 'digital_goods_applications' | 'digital_goods_games' | 'digital_goods_large_volume' | 'digital_goods_media' | 'direct_marketing_catalog_merchant' | 'direct_marketing_combination_catalog_and_retail_merchant' | 'direct_marketing_inbound_telemarketing' | 'direct_marketing_insurance_services' | 'direct_marketing_other' | 'direct_marketing_outbound_telemarketing' | 'direct_marketing_subscription' | 'direct_marketing_travel' | 'discount_stores' | 'doctors' | 'door_to_door_sales' | 'drapery_window_covering_and_upholstery_stores' | 'drinking_places' | 'drug_stores_and_pharmacies' | 'drugs_drug_proprietaries_and_druggist_sundries' | 'dry_cleaners' | 'durable_goods' | 'duty_free_stores' | 'eating_places_restaurants' | 'educational_services' | 'electric_razor_stores' | 'electrical_parts_and_equipment' | 'electrical_services' | 'electronics_repair_shops' | 'electronics_stores' | 'elementary_secondary_schools' | 'employment_temp_agencies' | 'equipment_rental' | 'exterminating_services' | 'family_clothing_stores' | 'fast_food_restaurants' | 'financial_institutions' | 'fines_government_administrative_entities' | 'fireplace_fireplace_screens_and_accessories_stores' | 'floor_covering_stores' | 'florists' | 'florists_supplies_nursery_stock_and_flowers' | 'freezer_and_locker_meat_provisioners' | 'fuel_dealers_non_automotive' | 'funeral_services_crematories' | 'furniture_home_furnishings_and_equipment_stores_except_appliances' | 'furniture_repair_refinishing' | 'furriers_and_fur_shops' | 'general_services' | 'gift_card_novelty_and_souvenir_shops' | 'glass_paint_and_wallpaper_stores' | 'glassware_crystal_stores' | 'golf_courses_public' | 'government_services' | 'grocery_stores_supermarkets' | 'hardware_equipment_and_supplies' | 'hardware_stores' | 'health_and_beauty_spas' | 'hearing_aids_sales_and_supplies' | 'heating_plumbing_a_c' | 'hobby_toy_and_game_shops' | 'home_supply_warehouse_stores' | 'hospitals' | 'hotels_motels_and_resorts' | 'household_appliance_stores' | 'industrial_supplies' | 'information_retrieval_services' | 'insurance_default' | 'insurance_underwriting_premiums' | 'intra_company_purchases' | 'jewelry_stores_watches_clocks_and_silverware_stores' | 'landscaping_services' | 'laundries' | 'laundry_cleaning_services' | 'legal_services_attorneys' | 'luggage_and_leather_goods_stores' | 'lumber_building_materials_stores' | 'manual_cash_disburse' | 'marinas_service_and_supplies' | 'masonry_stonework_and_plaster' | 'massage_parlors' | 'medical_and_dental_labs' | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies' | 'medical_services' | 'membership_organizations' | 'mens_and_boys_clothing_and_accessories_stores' | 'mens_womens_clothing_stores' | 'metal_service_centers' | 'miscellaneous' | 'miscellaneous_apparel_and_accessory_shops' | 'miscellaneous_auto_dealers' | 'miscellaneous_business_services' | 'miscellaneous_food_stores' | 'miscellaneous_general_merchandise' | 'miscellaneous_general_services' | 'miscellaneous_home_furnishing_specialty_stores' | 'miscellaneous_publishing_and_printing' | 'miscellaneous_recreation_services' | 'miscellaneous_repair_shops' | 'miscellaneous_specialty_retail' | 'mobile_home_dealers' | 'motion_picture_theaters' | 'motor_freight_carriers_and_trucking' | 'motor_homes_dealers' | 'motor_vehicle_supplies_and_new_parts' | 'motorcycle_shops_and_dealers' | 'motorcycle_shops_dealers' | 'music_stores_musical_instruments_pianos_and_sheet_music' | 'news_dealers_and_newsstands' | 'non_fi_money_orders' | 'non_fi_stored_value_card_purchase_load' | 'nondurable_goods' | 'nurseries_lawn_and_garden_supply_stores' | 'nursing_personal_care' | 'office_and_commercial_furniture' | 'opticians_eyeglasses' | 'optometrists_ophthalmologist' | 'orthopedic_goods_prosthetic_devices' | 'osteopaths' | 'package_stores_beer_wine_and_liquor' | 'paints_varnishes_and_supplies' | 'parking_lots_garages' | 'passenger_railways' | 'pawn_shops' | 'pet_shops_pet_food_and_supplies' | 'petroleum_and_petroleum_products' | 'photo_developing' | 'photographic_photocopy_microfilm_equipment_and_supplies' | 'photographic_studios' | 'picture_video_production' | 'piece_goods_notions_and_other_dry_goods' | 'plumbing_heating_equipment_and_supplies' | 'political_organizations' | 'postal_services_government_only' | 'precious_stones_and_metals_watches_and_jewelry' | 'professional_services' | 'public_warehousing_and_storage' | 'quick_copy_repro_and_blueprint' | 'railroads' | 'real_estate_agents_and_managers_rentals' | 'record_stores' | 'recreational_vehicle_rentals' | 'religious_goods_stores' | 'religious_organizations' | 'roofing_siding_sheet_metal' | 'secretarial_support_services' | 'security_brokers_dealers' | 'service_stations' | 'sewing_needlework_fabric_and_piece_goods_stores' | 'shoe_repair_hat_cleaning' | 'shoe_stores' | 'small_appliance_repair' | 'snowmobile_dealers' | 'special_trade_services' | 'specialty_cleaning' | 'sporting_goods_stores' | 'sporting_recreation_camps' | 'sports_and_riding_apparel_stores' | 'sports_clubs_fields' | 'stamp_and_coin_stores' | 'stationary_office_supplies_printing_and_writing_paper' | 'stationery_stores_office_and_school_supply_stores' | 'swimming_pools_sales' | 't_ui_travel_germany' | 'tailors_alterations' | 'tax_payments_government_agencies' | 'tax_preparation_services' | 'taxicabs_limousines' | 'telecommunication_equipment_and_telephone_sales' | 'telecommunication_services' | 'telegraph_services' | 'tent_and_awning_shops' | 'testing_laboratories' | 'theatrical_ticket_agencies' | 'timeshares' | 'tire_retreading_and_repair' | 'tolls_bridge_fees' | 'tourist_attractions_and_exhibits' | 'towing_services' | 'trailer_parks_campgrounds' | 'transportation_services' | 'travel_agencies_tour_operators' | 'truck_stop_iteration' | 'truck_utility_trailer_rentals' | 'typesetting_plate_making_and_related_services' | 'typewriter_stores' | 'u_s_federal_government_agencies_or_departments' | 'uniforms_commercial_clothing' | 'used_merchandise_and_secondhand_stores' | 'utilities' | 'variety_stores' | 'veterinary_services' | 'video_amusement_game_supplies' | 'video_game_arcades' | 'video_tape_rental_stores' | 'vocational_trade_schools' | 'watch_jewelry_repair' | 'welding_repair' | 'wholesale_clubs' | 'wig_and_toupee_stores' | 'wires_money_orders' | 'womens_accessory_and_specialty_shops' | 'womens_ready_to_wear_stores' | 'wrecking_and_salvage_yards'> | null;
  spending_limits?: Array<IssuingCardSpendingLimit> | null;
  spending_limits_currency?: string | null;
}

export interface IssuingCardShipping {
  address: Address;
  carrier?: 'fedex' | 'usps' | null;
  eta?: number | null;
  name: string;
  service: 'express' | 'priority' | 'standard';
  status?: 'canceled' | 'delivered' | 'failure' | 'pending' | 'returned' | 'shipped' | null;
  tracking_number?: string | null;
  tracking_url?: string | null;
  type: 'bulk' | 'individual';
}

export interface IssuingCardSpendingLimit {
  amount: number;
  categories?: Array<'ac_refrigeration_repair' | 'accounting_bookkeeping_services' | 'advertising_services' | 'agricultural_cooperative' | 'airlines_air_carriers' | 'airports_flying_fields' | 'ambulance_services' | 'amusement_parks_carnivals' | 'antique_reproductions' | 'antique_shops' | 'aquariums' | 'architectural_surveying_services' | 'art_dealers_and_galleries' | 'artists_supply_and_craft_shops' | 'auto_and_home_supply_stores' | 'auto_body_repair_shops' | 'auto_paint_shops' | 'auto_service_shops' | 'automated_cash_disburse' | 'automated_fuel_dispensers' | 'automobile_associations' | 'automotive_parts_and_accessories_stores' | 'automotive_tire_stores' | 'bail_and_bond_payments' | 'bakeries' | 'bands_orchestras' | 'barber_and_beauty_shops' | 'betting_casino_gambling' | 'bicycle_shops' | 'billiard_pool_establishments' | 'boat_dealers' | 'boat_rentals_and_leases' | 'book_stores' | 'books_periodicals_and_newspapers' | 'bowling_alleys' | 'bus_lines' | 'business_secretarial_schools' | 'buying_shopping_services' | 'cable_satellite_and_other_pay_television_and_radio' | 'camera_and_photographic_supply_stores' | 'candy_nut_and_confectionery_stores' | 'car_and_truck_dealers_new_used' | 'car_and_truck_dealers_used_only' | 'car_rental_agencies' | 'car_washes' | 'carpentry_services' | 'carpet_upholstery_cleaning' | 'caterers' | 'charitable_and_social_service_organizations_fundraising' | 'chemicals_and_allied_products' | 'child_care_services' | 'childrens_and_infants_wear_stores' | 'chiropodists_podiatrists' | 'chiropractors' | 'cigar_stores_and_stands' | 'civic_social_fraternal_associations' | 'cleaning_and_maintenance' | 'clothing_rental' | 'colleges_universities' | 'commercial_equipment' | 'commercial_footwear' | 'commercial_photography_art_and_graphics' | 'commuter_transport_and_ferries' | 'computer_network_services' | 'computer_programming' | 'computer_repair' | 'computer_software_stores' | 'computers_peripherals_and_software' | 'concrete_work_services' | 'construction_materials' | 'consulting_public_relations' | 'correspondence_schools' | 'cosmetic_stores' | 'counseling_services' | 'country_clubs' | 'courier_services' | 'court_costs' | 'credit_reporting_agencies' | 'cruise_lines' | 'dairy_products_stores' | 'dance_hall_studios_schools' | 'dating_escort_services' | 'dentists_orthodontists' | 'department_stores' | 'detective_agencies' | 'digital_goods_applications' | 'digital_goods_games' | 'digital_goods_large_volume' | 'digital_goods_media' | 'direct_marketing_catalog_merchant' | 'direct_marketing_combination_catalog_and_retail_merchant' | 'direct_marketing_inbound_telemarketing' | 'direct_marketing_insurance_services' | 'direct_marketing_other' | 'direct_marketing_outbound_telemarketing' | 'direct_marketing_subscription' | 'direct_marketing_travel' | 'discount_stores' | 'doctors' | 'door_to_door_sales' | 'drapery_window_covering_and_upholstery_stores' | 'drinking_places' | 'drug_stores_and_pharmacies' | 'drugs_drug_proprietaries_and_druggist_sundries' | 'dry_cleaners' | 'durable_goods' | 'duty_free_stores' | 'eating_places_restaurants' | 'educational_services' | 'electric_razor_stores' | 'electrical_parts_and_equipment' | 'electrical_services' | 'electronics_repair_shops' | 'electronics_stores' | 'elementary_secondary_schools' | 'employment_temp_agencies' | 'equipment_rental' | 'exterminating_services' | 'family_clothing_stores' | 'fast_food_restaurants' | 'financial_institutions' | 'fines_government_administrative_entities' | 'fireplace_fireplace_screens_and_accessories_stores' | 'floor_covering_stores' | 'florists' | 'florists_supplies_nursery_stock_and_flowers' | 'freezer_and_locker_meat_provisioners' | 'fuel_dealers_non_automotive' | 'funeral_services_crematories' | 'furniture_home_furnishings_and_equipment_stores_except_appliances' | 'furniture_repair_refinishing' | 'furriers_and_fur_shops' | 'general_services' | 'gift_card_novelty_and_souvenir_shops' | 'glass_paint_and_wallpaper_stores' | 'glassware_crystal_stores' | 'golf_courses_public' | 'government_services' | 'grocery_stores_supermarkets' | 'hardware_equipment_and_supplies' | 'hardware_stores' | 'health_and_beauty_spas' | 'hearing_aids_sales_and_supplies' | 'heating_plumbing_a_c' | 'hobby_toy_and_game_shops' | 'home_supply_warehouse_stores' | 'hospitals' | 'hotels_motels_and_resorts' | 'household_appliance_stores' | 'industrial_supplies' | 'information_retrieval_services' | 'insurance_default' | 'insurance_underwriting_premiums' | 'intra_company_purchases' | 'jewelry_stores_watches_clocks_and_silverware_stores' | 'landscaping_services' | 'laundries' | 'laundry_cleaning_services' | 'legal_services_attorneys' | 'luggage_and_leather_goods_stores' | 'lumber_building_materials_stores' | 'manual_cash_disburse' | 'marinas_service_and_supplies' | 'masonry_stonework_and_plaster' | 'massage_parlors' | 'medical_and_dental_labs' | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies' | 'medical_services' | 'membership_organizations' | 'mens_and_boys_clothing_and_accessories_stores' | 'mens_womens_clothing_stores' | 'metal_service_centers' | 'miscellaneous' | 'miscellaneous_apparel_and_accessory_shops' | 'miscellaneous_auto_dealers' | 'miscellaneous_business_services' | 'miscellaneous_food_stores' | 'miscellaneous_general_merchandise' | 'miscellaneous_general_services' | 'miscellaneous_home_furnishing_specialty_stores' | 'miscellaneous_publishing_and_printing' | 'miscellaneous_recreation_services' | 'miscellaneous_repair_shops' | 'miscellaneous_specialty_retail' | 'mobile_home_dealers' | 'motion_picture_theaters' | 'motor_freight_carriers_and_trucking' | 'motor_homes_dealers' | 'motor_vehicle_supplies_and_new_parts' | 'motorcycle_shops_and_dealers' | 'motorcycle_shops_dealers' | 'music_stores_musical_instruments_pianos_and_sheet_music' | 'news_dealers_and_newsstands' | 'non_fi_money_orders' | 'non_fi_stored_value_card_purchase_load' | 'nondurable_goods' | 'nurseries_lawn_and_garden_supply_stores' | 'nursing_personal_care' | 'office_and_commercial_furniture' | 'opticians_eyeglasses' | 'optometrists_ophthalmologist' | 'orthopedic_goods_prosthetic_devices' | 'osteopaths' | 'package_stores_beer_wine_and_liquor' | 'paints_varnishes_and_supplies' | 'parking_lots_garages' | 'passenger_railways' | 'pawn_shops' | 'pet_shops_pet_food_and_supplies' | 'petroleum_and_petroleum_products' | 'photo_developing' | 'photographic_photocopy_microfilm_equipment_and_supplies' | 'photographic_studios' | 'picture_video_production' | 'piece_goods_notions_and_other_dry_goods' | 'plumbing_heating_equipment_and_supplies' | 'political_organizations' | 'postal_services_government_only' | 'precious_stones_and_metals_watches_and_jewelry' | 'professional_services' | 'public_warehousing_and_storage' | 'quick_copy_repro_and_blueprint' | 'railroads' | 'real_estate_agents_and_managers_rentals' | 'record_stores' | 'recreational_vehicle_rentals' | 'religious_goods_stores' | 'religious_organizations' | 'roofing_siding_sheet_metal' | 'secretarial_support_services' | 'security_brokers_dealers' | 'service_stations' | 'sewing_needlework_fabric_and_piece_goods_stores' | 'shoe_repair_hat_cleaning' | 'shoe_stores' | 'small_appliance_repair' | 'snowmobile_dealers' | 'special_trade_services' | 'specialty_cleaning' | 'sporting_goods_stores' | 'sporting_recreation_camps' | 'sports_and_riding_apparel_stores' | 'sports_clubs_fields' | 'stamp_and_coin_stores' | 'stationary_office_supplies_printing_and_writing_paper' | 'stationery_stores_office_and_school_supply_stores' | 'swimming_pools_sales' | 't_ui_travel_germany' | 'tailors_alterations' | 'tax_payments_government_agencies' | 'tax_preparation_services' | 'taxicabs_limousines' | 'telecommunication_equipment_and_telephone_sales' | 'telecommunication_services' | 'telegraph_services' | 'tent_and_awning_shops' | 'testing_laboratories' | 'theatrical_ticket_agencies' | 'timeshares' | 'tire_retreading_and_repair' | 'tolls_bridge_fees' | 'tourist_attractions_and_exhibits' | 'towing_services' | 'trailer_parks_campgrounds' | 'transportation_services' | 'travel_agencies_tour_operators' | 'truck_stop_iteration' | 'truck_utility_trailer_rentals' | 'typesetting_plate_making_and_related_services' | 'typewriter_stores' | 'u_s_federal_government_agencies_or_departments' | 'uniforms_commercial_clothing' | 'used_merchandise_and_secondhand_stores' | 'utilities' | 'variety_stores' | 'veterinary_services' | 'video_amusement_game_supplies' | 'video_game_arcades' | 'video_tape_rental_stores' | 'vocational_trade_schools' | 'watch_jewelry_repair' | 'welding_repair' | 'wholesale_clubs' | 'wig_and_toupee_stores' | 'wires_money_orders' | 'womens_accessory_and_specialty_shops' | 'womens_ready_to_wear_stores' | 'wrecking_and_salvage_yards'> | null;
  interval: 'all_time' | 'daily' | 'monthly' | 'per_authorization' | 'weekly' | 'yearly';
}

export interface IssuingCardholderAddress {
  address: Address;
}

export interface IssuingCardholderAuthorizationControls {
  allowed_categories?: Array<'ac_refrigeration_repair' | 'accounting_bookkeeping_services' | 'advertising_services' | 'agricultural_cooperative' | 'airlines_air_carriers' | 'airports_flying_fields' | 'ambulance_services' | 'amusement_parks_carnivals' | 'antique_reproductions' | 'antique_shops' | 'aquariums' | 'architectural_surveying_services' | 'art_dealers_and_galleries' | 'artists_supply_and_craft_shops' | 'auto_and_home_supply_stores' | 'auto_body_repair_shops' | 'auto_paint_shops' | 'auto_service_shops' | 'automated_cash_disburse' | 'automated_fuel_dispensers' | 'automobile_associations' | 'automotive_parts_and_accessories_stores' | 'automotive_tire_stores' | 'bail_and_bond_payments' | 'bakeries' | 'bands_orchestras' | 'barber_and_beauty_shops' | 'betting_casino_gambling' | 'bicycle_shops' | 'billiard_pool_establishments' | 'boat_dealers' | 'boat_rentals_and_leases' | 'book_stores' | 'books_periodicals_and_newspapers' | 'bowling_alleys' | 'bus_lines' | 'business_secretarial_schools' | 'buying_shopping_services' | 'cable_satellite_and_other_pay_television_and_radio' | 'camera_and_photographic_supply_stores' | 'candy_nut_and_confectionery_stores' | 'car_and_truck_dealers_new_used' | 'car_and_truck_dealers_used_only' | 'car_rental_agencies' | 'car_washes' | 'carpentry_services' | 'carpet_upholstery_cleaning' | 'caterers' | 'charitable_and_social_service_organizations_fundraising' | 'chemicals_and_allied_products' | 'child_care_services' | 'childrens_and_infants_wear_stores' | 'chiropodists_podiatrists' | 'chiropractors' | 'cigar_stores_and_stands' | 'civic_social_fraternal_associations' | 'cleaning_and_maintenance' | 'clothing_rental' | 'colleges_universities' | 'commercial_equipment' | 'commercial_footwear' | 'commercial_photography_art_and_graphics' | 'commuter_transport_and_ferries' | 'computer_network_services' | 'computer_programming' | 'computer_repair' | 'computer_software_stores' | 'computers_peripherals_and_software' | 'concrete_work_services' | 'construction_materials' | 'consulting_public_relations' | 'correspondence_schools' | 'cosmetic_stores' | 'counseling_services' | 'country_clubs' | 'courier_services' | 'court_costs' | 'credit_reporting_agencies' | 'cruise_lines' | 'dairy_products_stores' | 'dance_hall_studios_schools' | 'dating_escort_services' | 'dentists_orthodontists' | 'department_stores' | 'detective_agencies' | 'digital_goods_applications' | 'digital_goods_games' | 'digital_goods_large_volume' | 'digital_goods_media' | 'direct_marketing_catalog_merchant' | 'direct_marketing_combination_catalog_and_retail_merchant' | 'direct_marketing_inbound_telemarketing' | 'direct_marketing_insurance_services' | 'direct_marketing_other' | 'direct_marketing_outbound_telemarketing' | 'direct_marketing_subscription' | 'direct_marketing_travel' | 'discount_stores' | 'doctors' | 'door_to_door_sales' | 'drapery_window_covering_and_upholstery_stores' | 'drinking_places' | 'drug_stores_and_pharmacies' | 'drugs_drug_proprietaries_and_druggist_sundries' | 'dry_cleaners' | 'durable_goods' | 'duty_free_stores' | 'eating_places_restaurants' | 'educational_services' | 'electric_razor_stores' | 'electrical_parts_and_equipment' | 'electrical_services' | 'electronics_repair_shops' | 'electronics_stores' | 'elementary_secondary_schools' | 'employment_temp_agencies' | 'equipment_rental' | 'exterminating_services' | 'family_clothing_stores' | 'fast_food_restaurants' | 'financial_institutions' | 'fines_government_administrative_entities' | 'fireplace_fireplace_screens_and_accessories_stores' | 'floor_covering_stores' | 'florists' | 'florists_supplies_nursery_stock_and_flowers' | 'freezer_and_locker_meat_provisioners' | 'fuel_dealers_non_automotive' | 'funeral_services_crematories' | 'furniture_home_furnishings_and_equipment_stores_except_appliances' | 'furniture_repair_refinishing' | 'furriers_and_fur_shops' | 'general_services' | 'gift_card_novelty_and_souvenir_shops' | 'glass_paint_and_wallpaper_stores' | 'glassware_crystal_stores' | 'golf_courses_public' | 'government_services' | 'grocery_stores_supermarkets' | 'hardware_equipment_and_supplies' | 'hardware_stores' | 'health_and_beauty_spas' | 'hearing_aids_sales_and_supplies' | 'heating_plumbing_a_c' | 'hobby_toy_and_game_shops' | 'home_supply_warehouse_stores' | 'hospitals' | 'hotels_motels_and_resorts' | 'household_appliance_stores' | 'industrial_supplies' | 'information_retrieval_services' | 'insurance_default' | 'insurance_underwriting_premiums' | 'intra_company_purchases' | 'jewelry_stores_watches_clocks_and_silverware_stores' | 'landscaping_services' | 'laundries' | 'laundry_cleaning_services' | 'legal_services_attorneys' | 'luggage_and_leather_goods_stores' | 'lumber_building_materials_stores' | 'manual_cash_disburse' | 'marinas_service_and_supplies' | 'masonry_stonework_and_plaster' | 'massage_parlors' | 'medical_and_dental_labs' | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies' | 'medical_services' | 'membership_organizations' | 'mens_and_boys_clothing_and_accessories_stores' | 'mens_womens_clothing_stores' | 'metal_service_centers' | 'miscellaneous' | 'miscellaneous_apparel_and_accessory_shops' | 'miscellaneous_auto_dealers' | 'miscellaneous_business_services' | 'miscellaneous_food_stores' | 'miscellaneous_general_merchandise' | 'miscellaneous_general_services' | 'miscellaneous_home_furnishing_specialty_stores' | 'miscellaneous_publishing_and_printing' | 'miscellaneous_recreation_services' | 'miscellaneous_repair_shops' | 'miscellaneous_specialty_retail' | 'mobile_home_dealers' | 'motion_picture_theaters' | 'motor_freight_carriers_and_trucking' | 'motor_homes_dealers' | 'motor_vehicle_supplies_and_new_parts' | 'motorcycle_shops_and_dealers' | 'motorcycle_shops_dealers' | 'music_stores_musical_instruments_pianos_and_sheet_music' | 'news_dealers_and_newsstands' | 'non_fi_money_orders' | 'non_fi_stored_value_card_purchase_load' | 'nondurable_goods' | 'nurseries_lawn_and_garden_supply_stores' | 'nursing_personal_care' | 'office_and_commercial_furniture' | 'opticians_eyeglasses' | 'optometrists_ophthalmologist' | 'orthopedic_goods_prosthetic_devices' | 'osteopaths' | 'package_stores_beer_wine_and_liquor' | 'paints_varnishes_and_supplies' | 'parking_lots_garages' | 'passenger_railways' | 'pawn_shops' | 'pet_shops_pet_food_and_supplies' | 'petroleum_and_petroleum_products' | 'photo_developing' | 'photographic_photocopy_microfilm_equipment_and_supplies' | 'photographic_studios' | 'picture_video_production' | 'piece_goods_notions_and_other_dry_goods' | 'plumbing_heating_equipment_and_supplies' | 'political_organizations' | 'postal_services_government_only' | 'precious_stones_and_metals_watches_and_jewelry' | 'professional_services' | 'public_warehousing_and_storage' | 'quick_copy_repro_and_blueprint' | 'railroads' | 'real_estate_agents_and_managers_rentals' | 'record_stores' | 'recreational_vehicle_rentals' | 'religious_goods_stores' | 'religious_organizations' | 'roofing_siding_sheet_metal' | 'secretarial_support_services' | 'security_brokers_dealers' | 'service_stations' | 'sewing_needlework_fabric_and_piece_goods_stores' | 'shoe_repair_hat_cleaning' | 'shoe_stores' | 'small_appliance_repair' | 'snowmobile_dealers' | 'special_trade_services' | 'specialty_cleaning' | 'sporting_goods_stores' | 'sporting_recreation_camps' | 'sports_and_riding_apparel_stores' | 'sports_clubs_fields' | 'stamp_and_coin_stores' | 'stationary_office_supplies_printing_and_writing_paper' | 'stationery_stores_office_and_school_supply_stores' | 'swimming_pools_sales' | 't_ui_travel_germany' | 'tailors_alterations' | 'tax_payments_government_agencies' | 'tax_preparation_services' | 'taxicabs_limousines' | 'telecommunication_equipment_and_telephone_sales' | 'telecommunication_services' | 'telegraph_services' | 'tent_and_awning_shops' | 'testing_laboratories' | 'theatrical_ticket_agencies' | 'timeshares' | 'tire_retreading_and_repair' | 'tolls_bridge_fees' | 'tourist_attractions_and_exhibits' | 'towing_services' | 'trailer_parks_campgrounds' | 'transportation_services' | 'travel_agencies_tour_operators' | 'truck_stop_iteration' | 'truck_utility_trailer_rentals' | 'typesetting_plate_making_and_related_services' | 'typewriter_stores' | 'u_s_federal_government_agencies_or_departments' | 'uniforms_commercial_clothing' | 'used_merchandise_and_secondhand_stores' | 'utilities' | 'variety_stores' | 'veterinary_services' | 'video_amusement_game_supplies' | 'video_game_arcades' | 'video_tape_rental_stores' | 'vocational_trade_schools' | 'watch_jewelry_repair' | 'welding_repair' | 'wholesale_clubs' | 'wig_and_toupee_stores' | 'wires_money_orders' | 'womens_accessory_and_specialty_shops' | 'womens_ready_to_wear_stores' | 'wrecking_and_salvage_yards'> | null;
  blocked_categories?: Array<'ac_refrigeration_repair' | 'accounting_bookkeeping_services' | 'advertising_services' | 'agricultural_cooperative' | 'airlines_air_carriers' | 'airports_flying_fields' | 'ambulance_services' | 'amusement_parks_carnivals' | 'antique_reproductions' | 'antique_shops' | 'aquariums' | 'architectural_surveying_services' | 'art_dealers_and_galleries' | 'artists_supply_and_craft_shops' | 'auto_and_home_supply_stores' | 'auto_body_repair_shops' | 'auto_paint_shops' | 'auto_service_shops' | 'automated_cash_disburse' | 'automated_fuel_dispensers' | 'automobile_associations' | 'automotive_parts_and_accessories_stores' | 'automotive_tire_stores' | 'bail_and_bond_payments' | 'bakeries' | 'bands_orchestras' | 'barber_and_beauty_shops' | 'betting_casino_gambling' | 'bicycle_shops' | 'billiard_pool_establishments' | 'boat_dealers' | 'boat_rentals_and_leases' | 'book_stores' | 'books_periodicals_and_newspapers' | 'bowling_alleys' | 'bus_lines' | 'business_secretarial_schools' | 'buying_shopping_services' | 'cable_satellite_and_other_pay_television_and_radio' | 'camera_and_photographic_supply_stores' | 'candy_nut_and_confectionery_stores' | 'car_and_truck_dealers_new_used' | 'car_and_truck_dealers_used_only' | 'car_rental_agencies' | 'car_washes' | 'carpentry_services' | 'carpet_upholstery_cleaning' | 'caterers' | 'charitable_and_social_service_organizations_fundraising' | 'chemicals_and_allied_products' | 'child_care_services' | 'childrens_and_infants_wear_stores' | 'chiropodists_podiatrists' | 'chiropractors' | 'cigar_stores_and_stands' | 'civic_social_fraternal_associations' | 'cleaning_and_maintenance' | 'clothing_rental' | 'colleges_universities' | 'commercial_equipment' | 'commercial_footwear' | 'commercial_photography_art_and_graphics' | 'commuter_transport_and_ferries' | 'computer_network_services' | 'computer_programming' | 'computer_repair' | 'computer_software_stores' | 'computers_peripherals_and_software' | 'concrete_work_services' | 'construction_materials' | 'consulting_public_relations' | 'correspondence_schools' | 'cosmetic_stores' | 'counseling_services' | 'country_clubs' | 'courier_services' | 'court_costs' | 'credit_reporting_agencies' | 'cruise_lines' | 'dairy_products_stores' | 'dance_hall_studios_schools' | 'dating_escort_services' | 'dentists_orthodontists' | 'department_stores' | 'detective_agencies' | 'digital_goods_applications' | 'digital_goods_games' | 'digital_goods_large_volume' | 'digital_goods_media' | 'direct_marketing_catalog_merchant' | 'direct_marketing_combination_catalog_and_retail_merchant' | 'direct_marketing_inbound_telemarketing' | 'direct_marketing_insurance_services' | 'direct_marketing_other' | 'direct_marketing_outbound_telemarketing' | 'direct_marketing_subscription' | 'direct_marketing_travel' | 'discount_stores' | 'doctors' | 'door_to_door_sales' | 'drapery_window_covering_and_upholstery_stores' | 'drinking_places' | 'drug_stores_and_pharmacies' | 'drugs_drug_proprietaries_and_druggist_sundries' | 'dry_cleaners' | 'durable_goods' | 'duty_free_stores' | 'eating_places_restaurants' | 'educational_services' | 'electric_razor_stores' | 'electrical_parts_and_equipment' | 'electrical_services' | 'electronics_repair_shops' | 'electronics_stores' | 'elementary_secondary_schools' | 'employment_temp_agencies' | 'equipment_rental' | 'exterminating_services' | 'family_clothing_stores' | 'fast_food_restaurants' | 'financial_institutions' | 'fines_government_administrative_entities' | 'fireplace_fireplace_screens_and_accessories_stores' | 'floor_covering_stores' | 'florists' | 'florists_supplies_nursery_stock_and_flowers' | 'freezer_and_locker_meat_provisioners' | 'fuel_dealers_non_automotive' | 'funeral_services_crematories' | 'furniture_home_furnishings_and_equipment_stores_except_appliances' | 'furniture_repair_refinishing' | 'furriers_and_fur_shops' | 'general_services' | 'gift_card_novelty_and_souvenir_shops' | 'glass_paint_and_wallpaper_stores' | 'glassware_crystal_stores' | 'golf_courses_public' | 'government_services' | 'grocery_stores_supermarkets' | 'hardware_equipment_and_supplies' | 'hardware_stores' | 'health_and_beauty_spas' | 'hearing_aids_sales_and_supplies' | 'heating_plumbing_a_c' | 'hobby_toy_and_game_shops' | 'home_supply_warehouse_stores' | 'hospitals' | 'hotels_motels_and_resorts' | 'household_appliance_stores' | 'industrial_supplies' | 'information_retrieval_services' | 'insurance_default' | 'insurance_underwriting_premiums' | 'intra_company_purchases' | 'jewelry_stores_watches_clocks_and_silverware_stores' | 'landscaping_services' | 'laundries' | 'laundry_cleaning_services' | 'legal_services_attorneys' | 'luggage_and_leather_goods_stores' | 'lumber_building_materials_stores' | 'manual_cash_disburse' | 'marinas_service_and_supplies' | 'masonry_stonework_and_plaster' | 'massage_parlors' | 'medical_and_dental_labs' | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies' | 'medical_services' | 'membership_organizations' | 'mens_and_boys_clothing_and_accessories_stores' | 'mens_womens_clothing_stores' | 'metal_service_centers' | 'miscellaneous' | 'miscellaneous_apparel_and_accessory_shops' | 'miscellaneous_auto_dealers' | 'miscellaneous_business_services' | 'miscellaneous_food_stores' | 'miscellaneous_general_merchandise' | 'miscellaneous_general_services' | 'miscellaneous_home_furnishing_specialty_stores' | 'miscellaneous_publishing_and_printing' | 'miscellaneous_recreation_services' | 'miscellaneous_repair_shops' | 'miscellaneous_specialty_retail' | 'mobile_home_dealers' | 'motion_picture_theaters' | 'motor_freight_carriers_and_trucking' | 'motor_homes_dealers' | 'motor_vehicle_supplies_and_new_parts' | 'motorcycle_shops_and_dealers' | 'motorcycle_shops_dealers' | 'music_stores_musical_instruments_pianos_and_sheet_music' | 'news_dealers_and_newsstands' | 'non_fi_money_orders' | 'non_fi_stored_value_card_purchase_load' | 'nondurable_goods' | 'nurseries_lawn_and_garden_supply_stores' | 'nursing_personal_care' | 'office_and_commercial_furniture' | 'opticians_eyeglasses' | 'optometrists_ophthalmologist' | 'orthopedic_goods_prosthetic_devices' | 'osteopaths' | 'package_stores_beer_wine_and_liquor' | 'paints_varnishes_and_supplies' | 'parking_lots_garages' | 'passenger_railways' | 'pawn_shops' | 'pet_shops_pet_food_and_supplies' | 'petroleum_and_petroleum_products' | 'photo_developing' | 'photographic_photocopy_microfilm_equipment_and_supplies' | 'photographic_studios' | 'picture_video_production' | 'piece_goods_notions_and_other_dry_goods' | 'plumbing_heating_equipment_and_supplies' | 'political_organizations' | 'postal_services_government_only' | 'precious_stones_and_metals_watches_and_jewelry' | 'professional_services' | 'public_warehousing_and_storage' | 'quick_copy_repro_and_blueprint' | 'railroads' | 'real_estate_agents_and_managers_rentals' | 'record_stores' | 'recreational_vehicle_rentals' | 'religious_goods_stores' | 'religious_organizations' | 'roofing_siding_sheet_metal' | 'secretarial_support_services' | 'security_brokers_dealers' | 'service_stations' | 'sewing_needlework_fabric_and_piece_goods_stores' | 'shoe_repair_hat_cleaning' | 'shoe_stores' | 'small_appliance_repair' | 'snowmobile_dealers' | 'special_trade_services' | 'specialty_cleaning' | 'sporting_goods_stores' | 'sporting_recreation_camps' | 'sports_and_riding_apparel_stores' | 'sports_clubs_fields' | 'stamp_and_coin_stores' | 'stationary_office_supplies_printing_and_writing_paper' | 'stationery_stores_office_and_school_supply_stores' | 'swimming_pools_sales' | 't_ui_travel_germany' | 'tailors_alterations' | 'tax_payments_government_agencies' | 'tax_preparation_services' | 'taxicabs_limousines' | 'telecommunication_equipment_and_telephone_sales' | 'telecommunication_services' | 'telegraph_services' | 'tent_and_awning_shops' | 'testing_laboratories' | 'theatrical_ticket_agencies' | 'timeshares' | 'tire_retreading_and_repair' | 'tolls_bridge_fees' | 'tourist_attractions_and_exhibits' | 'towing_services' | 'trailer_parks_campgrounds' | 'transportation_services' | 'travel_agencies_tour_operators' | 'truck_stop_iteration' | 'truck_utility_trailer_rentals' | 'typesetting_plate_making_and_related_services' | 'typewriter_stores' | 'u_s_federal_government_agencies_or_departments' | 'uniforms_commercial_clothing' | 'used_merchandise_and_secondhand_stores' | 'utilities' | 'variety_stores' | 'veterinary_services' | 'video_amusement_game_supplies' | 'video_game_arcades' | 'video_tape_rental_stores' | 'vocational_trade_schools' | 'watch_jewelry_repair' | 'welding_repair' | 'wholesale_clubs' | 'wig_and_toupee_stores' | 'wires_money_orders' | 'womens_accessory_and_specialty_shops' | 'womens_ready_to_wear_stores' | 'wrecking_and_salvage_yards'> | null;
  spending_limits?: Array<IssuingCardholderSpendingLimit> | null;
  spending_limits_currency?: string | null;
}

export interface IssuingCardholderCompany {
  tax_id_provided: boolean;
}

export interface IssuingCardholderIdDocument {
  back?: any | null;
  front?: any | null;
}

export interface IssuingCardholderIndividual {
  dob?: any | null;
  first_name: string;
  last_name: string;
  verification?: any | null;
}

export interface IssuingCardholderIndividualDob {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

export interface IssuingCardholderRequirements {
  disabled_reason?: 'listed' | 'rejected.listed' | 'under_review' | null;
  past_due?: Array<'company.tax_id' | 'individual.dob.day' | 'individual.dob.month' | 'individual.dob.year' | 'individual.first_name' | 'individual.last_name' | 'individual.verification.document'> | null;
}

export interface IssuingCardholderSpendingLimit {
  amount: number;
  categories?: Array<'ac_refrigeration_repair' | 'accounting_bookkeeping_services' | 'advertising_services' | 'agricultural_cooperative' | 'airlines_air_carriers' | 'airports_flying_fields' | 'ambulance_services' | 'amusement_parks_carnivals' | 'antique_reproductions' | 'antique_shops' | 'aquariums' | 'architectural_surveying_services' | 'art_dealers_and_galleries' | 'artists_supply_and_craft_shops' | 'auto_and_home_supply_stores' | 'auto_body_repair_shops' | 'auto_paint_shops' | 'auto_service_shops' | 'automated_cash_disburse' | 'automated_fuel_dispensers' | 'automobile_associations' | 'automotive_parts_and_accessories_stores' | 'automotive_tire_stores' | 'bail_and_bond_payments' | 'bakeries' | 'bands_orchestras' | 'barber_and_beauty_shops' | 'betting_casino_gambling' | 'bicycle_shops' | 'billiard_pool_establishments' | 'boat_dealers' | 'boat_rentals_and_leases' | 'book_stores' | 'books_periodicals_and_newspapers' | 'bowling_alleys' | 'bus_lines' | 'business_secretarial_schools' | 'buying_shopping_services' | 'cable_satellite_and_other_pay_television_and_radio' | 'camera_and_photographic_supply_stores' | 'candy_nut_and_confectionery_stores' | 'car_and_truck_dealers_new_used' | 'car_and_truck_dealers_used_only' | 'car_rental_agencies' | 'car_washes' | 'carpentry_services' | 'carpet_upholstery_cleaning' | 'caterers' | 'charitable_and_social_service_organizations_fundraising' | 'chemicals_and_allied_products' | 'child_care_services' | 'childrens_and_infants_wear_stores' | 'chiropodists_podiatrists' | 'chiropractors' | 'cigar_stores_and_stands' | 'civic_social_fraternal_associations' | 'cleaning_and_maintenance' | 'clothing_rental' | 'colleges_universities' | 'commercial_equipment' | 'commercial_footwear' | 'commercial_photography_art_and_graphics' | 'commuter_transport_and_ferries' | 'computer_network_services' | 'computer_programming' | 'computer_repair' | 'computer_software_stores' | 'computers_peripherals_and_software' | 'concrete_work_services' | 'construction_materials' | 'consulting_public_relations' | 'correspondence_schools' | 'cosmetic_stores' | 'counseling_services' | 'country_clubs' | 'courier_services' | 'court_costs' | 'credit_reporting_agencies' | 'cruise_lines' | 'dairy_products_stores' | 'dance_hall_studios_schools' | 'dating_escort_services' | 'dentists_orthodontists' | 'department_stores' | 'detective_agencies' | 'digital_goods_applications' | 'digital_goods_games' | 'digital_goods_large_volume' | 'digital_goods_media' | 'direct_marketing_catalog_merchant' | 'direct_marketing_combination_catalog_and_retail_merchant' | 'direct_marketing_inbound_telemarketing' | 'direct_marketing_insurance_services' | 'direct_marketing_other' | 'direct_marketing_outbound_telemarketing' | 'direct_marketing_subscription' | 'direct_marketing_travel' | 'discount_stores' | 'doctors' | 'door_to_door_sales' | 'drapery_window_covering_and_upholstery_stores' | 'drinking_places' | 'drug_stores_and_pharmacies' | 'drugs_drug_proprietaries_and_druggist_sundries' | 'dry_cleaners' | 'durable_goods' | 'duty_free_stores' | 'eating_places_restaurants' | 'educational_services' | 'electric_razor_stores' | 'electrical_parts_and_equipment' | 'electrical_services' | 'electronics_repair_shops' | 'electronics_stores' | 'elementary_secondary_schools' | 'employment_temp_agencies' | 'equipment_rental' | 'exterminating_services' | 'family_clothing_stores' | 'fast_food_restaurants' | 'financial_institutions' | 'fines_government_administrative_entities' | 'fireplace_fireplace_screens_and_accessories_stores' | 'floor_covering_stores' | 'florists' | 'florists_supplies_nursery_stock_and_flowers' | 'freezer_and_locker_meat_provisioners' | 'fuel_dealers_non_automotive' | 'funeral_services_crematories' | 'furniture_home_furnishings_and_equipment_stores_except_appliances' | 'furniture_repair_refinishing' | 'furriers_and_fur_shops' | 'general_services' | 'gift_card_novelty_and_souvenir_shops' | 'glass_paint_and_wallpaper_stores' | 'glassware_crystal_stores' | 'golf_courses_public' | 'government_services' | 'grocery_stores_supermarkets' | 'hardware_equipment_and_supplies' | 'hardware_stores' | 'health_and_beauty_spas' | 'hearing_aids_sales_and_supplies' | 'heating_plumbing_a_c' | 'hobby_toy_and_game_shops' | 'home_supply_warehouse_stores' | 'hospitals' | 'hotels_motels_and_resorts' | 'household_appliance_stores' | 'industrial_supplies' | 'information_retrieval_services' | 'insurance_default' | 'insurance_underwriting_premiums' | 'intra_company_purchases' | 'jewelry_stores_watches_clocks_and_silverware_stores' | 'landscaping_services' | 'laundries' | 'laundry_cleaning_services' | 'legal_services_attorneys' | 'luggage_and_leather_goods_stores' | 'lumber_building_materials_stores' | 'manual_cash_disburse' | 'marinas_service_and_supplies' | 'masonry_stonework_and_plaster' | 'massage_parlors' | 'medical_and_dental_labs' | 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies' | 'medical_services' | 'membership_organizations' | 'mens_and_boys_clothing_and_accessories_stores' | 'mens_womens_clothing_stores' | 'metal_service_centers' | 'miscellaneous' | 'miscellaneous_apparel_and_accessory_shops' | 'miscellaneous_auto_dealers' | 'miscellaneous_business_services' | 'miscellaneous_food_stores' | 'miscellaneous_general_merchandise' | 'miscellaneous_general_services' | 'miscellaneous_home_furnishing_specialty_stores' | 'miscellaneous_publishing_and_printing' | 'miscellaneous_recreation_services' | 'miscellaneous_repair_shops' | 'miscellaneous_specialty_retail' | 'mobile_home_dealers' | 'motion_picture_theaters' | 'motor_freight_carriers_and_trucking' | 'motor_homes_dealers' | 'motor_vehicle_supplies_and_new_parts' | 'motorcycle_shops_and_dealers' | 'motorcycle_shops_dealers' | 'music_stores_musical_instruments_pianos_and_sheet_music' | 'news_dealers_and_newsstands' | 'non_fi_money_orders' | 'non_fi_stored_value_card_purchase_load' | 'nondurable_goods' | 'nurseries_lawn_and_garden_supply_stores' | 'nursing_personal_care' | 'office_and_commercial_furniture' | 'opticians_eyeglasses' | 'optometrists_ophthalmologist' | 'orthopedic_goods_prosthetic_devices' | 'osteopaths' | 'package_stores_beer_wine_and_liquor' | 'paints_varnishes_and_supplies' | 'parking_lots_garages' | 'passenger_railways' | 'pawn_shops' | 'pet_shops_pet_food_and_supplies' | 'petroleum_and_petroleum_products' | 'photo_developing' | 'photographic_photocopy_microfilm_equipment_and_supplies' | 'photographic_studios' | 'picture_video_production' | 'piece_goods_notions_and_other_dry_goods' | 'plumbing_heating_equipment_and_supplies' | 'political_organizations' | 'postal_services_government_only' | 'precious_stones_and_metals_watches_and_jewelry' | 'professional_services' | 'public_warehousing_and_storage' | 'quick_copy_repro_and_blueprint' | 'railroads' | 'real_estate_agents_and_managers_rentals' | 'record_stores' | 'recreational_vehicle_rentals' | 'religious_goods_stores' | 'religious_organizations' | 'roofing_siding_sheet_metal' | 'secretarial_support_services' | 'security_brokers_dealers' | 'service_stations' | 'sewing_needlework_fabric_and_piece_goods_stores' | 'shoe_repair_hat_cleaning' | 'shoe_stores' | 'small_appliance_repair' | 'snowmobile_dealers' | 'special_trade_services' | 'specialty_cleaning' | 'sporting_goods_stores' | 'sporting_recreation_camps' | 'sports_and_riding_apparel_stores' | 'sports_clubs_fields' | 'stamp_and_coin_stores' | 'stationary_office_supplies_printing_and_writing_paper' | 'stationery_stores_office_and_school_supply_stores' | 'swimming_pools_sales' | 't_ui_travel_germany' | 'tailors_alterations' | 'tax_payments_government_agencies' | 'tax_preparation_services' | 'taxicabs_limousines' | 'telecommunication_equipment_and_telephone_sales' | 'telecommunication_services' | 'telegraph_services' | 'tent_and_awning_shops' | 'testing_laboratories' | 'theatrical_ticket_agencies' | 'timeshares' | 'tire_retreading_and_repair' | 'tolls_bridge_fees' | 'tourist_attractions_and_exhibits' | 'towing_services' | 'trailer_parks_campgrounds' | 'transportation_services' | 'travel_agencies_tour_operators' | 'truck_stop_iteration' | 'truck_utility_trailer_rentals' | 'typesetting_plate_making_and_related_services' | 'typewriter_stores' | 'u_s_federal_government_agencies_or_departments' | 'uniforms_commercial_clothing' | 'used_merchandise_and_secondhand_stores' | 'utilities' | 'variety_stores' | 'veterinary_services' | 'video_amusement_game_supplies' | 'video_game_arcades' | 'video_tape_rental_stores' | 'vocational_trade_schools' | 'watch_jewelry_repair' | 'welding_repair' | 'wholesale_clubs' | 'wig_and_toupee_stores' | 'wires_money_orders' | 'womens_accessory_and_specialty_shops' | 'womens_ready_to_wear_stores' | 'wrecking_and_salvage_yards'> | null;
  interval: 'all_time' | 'daily' | 'monthly' | 'per_authorization' | 'weekly' | 'yearly';
}

export interface IssuingCardholderVerification {
  document?: any | null;
}

export interface IssuingTransactionFlightData {
  departure_at?: number | null;
  passenger_name?: string | null;
  refundable?: boolean | null;
  segments?: Array<IssuingTransactionFlightDataLeg> | null;
  travel_agency?: string | null;
}

export interface IssuingTransactionFlightDataLeg {
  arrival_airport_code?: string | null;
  carrier?: string | null;
  departure_airport_code?: string | null;
  flight_number?: string | null;
  service_class?: string | null;
  stopover_allowed?: boolean | null;
}

export interface IssuingTransactionFuelData {
  type: string;
  unit: string;
  unit_cost_decimal: string;
  volume_decimal?: string | null;
}

export interface IssuingTransactionLodgingData {
  check_in_at?: number | null;
  nights?: number | null;
}

export interface IssuingTransactionPurchaseDetails {
  flight?: any | null;
  fuel?: any | null;
  lodging?: any | null;
  receipt?: Array<IssuingTransactionReceiptData> | null;
  reference?: string | null;
}

export interface IssuingTransactionReceiptData {
  description?: string | null;
  quantity?: number | null;
  total?: number | null;
  unit_cost?: number | null;
}

/**
  *A line item.
 */
export interface Item {
  amount_subtotal?: number | null;
  amount_total?: number | null;
  currency: string;
  description: string;
  discounts?: Array<LineItemsDiscountAmount>;
  id: string;
  object: 'item';
  price: Price;
  quantity?: number | null;
  taxes?: Array<LineItemsTaxAmount>;
}

export interface LegalEntityCompany {
  address?: Address;
  address_kana?: any | null;
  address_kanji?: any | null;
  directors_provided?: boolean;
  executives_provided?: boolean;
  name?: string | null;
  name_kana?: string | null;
  name_kanji?: string | null;
  owners_provided?: boolean;
  phone?: string | null;
  structure?: 'government_instrumentality' | 'governmental_unit' | 'incorporated_non_profit' | 'limited_liability_partnership' | 'multi_member_llc' | 'private_company' | 'private_corporation' | 'private_partnership' | 'public_company' | 'public_corporation' | 'public_partnership' | 'sole_proprietorship' | 'tax_exempt_government_instrumentality' | 'unincorporated_association' | 'unincorporated_non_profit';
  tax_id_provided?: boolean;
  tax_id_registrar?: string;
  vat_id_provided?: boolean;
  verification?: any | null;
}

export interface LegalEntityCompanyVerification {
  legal_entity_company_verification_document?: LegalEntityCompanyVerificationDocument;
}

export interface LegalEntityCompanyVerificationDocument {
  back?: any | null;
  details?: string | null;
  details_code?: string | null;
  front?: any | null;
}

export interface LegalEntityDob {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

export interface LegalEntityJapanAddress {
  city?: string | null;
  country?: string | null;
  line1?: string | null;
  line2?: string | null;
  postal_code?: string | null;
  state?: string | null;
  town?: string | null;
}

export interface LegalEntityPersonVerification {
  additional_document?: any | null;
  details?: string | null;
  details_code?: string | null;
  legal_entity_person_verification_document?: LegalEntityPersonVerificationDocument;
  status: string;
}

export interface LegalEntityPersonVerificationDocument {
  back?: any | null;
  details?: string | null;
  details_code?: string | null;
  front?: any | null;
}

export interface LightAccountLogout {
}

export interface LineItem {
  amount: number;
  currency: string;
  description?: string | null;
  discount_amounts?: Array<DiscountsResourceDiscountAmount> | null;
  discountable: boolean;
  discounts?: Array<any> | null;
  id: string;
  invoice_item?: string;
  livemode: boolean;
  metadata: any;
  object: 'line_item';
  invoice_line_item_period?: InvoiceLineItemPeriod;
  plan?: any | null;
  price?: any | null;
  proration: boolean;
  quantity?: number | null;
  subscription?: string | null;
  subscription_item?: string;
  tax_amounts?: Array<InvoiceTaxAmount> | null;
  tax_rates?: Array<TaxRate> | null;
  type: 'invoiceitem' | 'subscription';
}

export interface LineItemsDiscountAmount {
  amount: number;
  discount: Discount;
}

export interface LineItemsTaxAmount {
  amount: number;
  tax_rate?: TaxRate;
}

export interface LoginLink {
  created: number;
  object: 'login_link';
  url: string;
}

/**
  *A Mandate is a record of the permission a customer has given you to debit their payment method.
 */
export interface Mandate {
  customer_acceptance: CustomerAcceptance;
  id: string;
  livemode: boolean;
  mandate_multi_use?: MandateMultiUse;
  object: 'mandate';
  payment_method: any;
  mandate_payment_method_details?: MandatePaymentMethodDetails;
  mandate_single_use?: MandateSingleUse;
  status: 'active' | 'inactive' | 'pending';
  type: 'multi_use' | 'single_use';
}

export interface MandateAuBecsDebit {
  url: string;
}

export interface MandateBacsDebit {
  network_status: 'accepted' | 'pending' | 'refused' | 'revoked';
  reference: string;
  url: string;
}

export interface MandateMultiUse {
}

export interface MandatePaymentMethodDetails {
  mandate_au_becs_debit?: MandateAuBecsDebit;
  mandate_bacs_debit?: MandateBacsDebit;
  card_mandate_payment_method_details?: CardMandatePaymentMethodDetails;
  mandate_sepa_debit?: MandateSepaDebit;
  type: string;
}

export interface MandateSepaDebit {
  reference: string;
  url: string;
}

export interface MandateSingleUse {
  amount: number;
  currency: string;
}

export interface Networks {
  available: Array<string>;
  preferred?: string | null;
}

export interface NotificationEventData {
  object: any;
  previous_attributes?: any;
}

export interface NotificationEventRequest {
  id?: string | null;
  idempotency_key?: string | null;
}

export interface OfflineAcceptance {
}

export interface OnlineAcceptance {
  ip_address?: string | null;
  user_agent?: string | null;
}

/**
  *Order objects are created to handle end customers' purchases of previously
  * defined [products](https://stripe.com/docs/api#products). You can create, retrieve, and pay individual orders, as well
  * as list all orders. Orders are identified by a unique, random ID.
  * 
  * Related guide: [Tax, Shipping, and Inventory](https://stripe.com/docs/orders).
 */
export interface Order {
  amount: number;
  amount_returned?: number | null;
  application?: string | null;
  application_fee?: number | null;
  charge?: any | null;
  created: number;
  currency: string;
  customer?: any | null;
  email?: string | null;
  external_coupon_code?: string;
  id: string;
  items: Array<OrderItem>;
  livemode: boolean;
  metadata: any;
  object: 'order';
  returns?: any | null;
  selected_shipping_method?: string | null;
  shipping?: any | null;
  shipping_methods?: Array<ShippingMethod> | null;
  status: string;
  status_transitions?: any | null;
  updated?: number | null;
  upstream_id?: string;
}

/**
  *A representation of the constituent items of any given order. Can be used to
  * represent [SKUs](https://stripe.com/docs/api#skus), shipping costs, or taxes owed on the order.
  * 
  * Related guide: [Orders](https://stripe.com/docs/orders/guide).
 */
export interface OrderItem {
  amount: number;
  currency: string;
  description: string;
  object: 'order_item';
  parent?: any | null;
  quantity?: number | null;
  type: string;
}

/**
  *A return represents the full or partial return of a number of [order items](https://stripe.com/docs/api#order_items).
  * Returns always belong to an order, and may optionally contain a refund.
  * 
  * Related guide: [Handling Returns](https://stripe.com/docs/orders/guide#handling-returns).
 */
export interface OrderReturn {
  amount: number;
  created: number;
  currency: string;
  id: string;
  items: Array<OrderItem>;
  livemode: boolean;
  object: 'order_return';
  order?: any | null;
  refund?: any | null;
}

export interface PackageDimensions {
  height: number;
  length: number;
  weight: number;
  width: number;
}

export interface PaymentFlowsPrivatePaymentMethodsAlipayDetails {
  fingerprint?: string | null;
  transaction_id?: string | null;
}

/**
  *A PaymentIntent guides you through the process of collecting a payment from your customer.
  * We recommend that you create exactly one PaymentIntent for each order or
  * customer session in your system. You can reference the PaymentIntent later to
  * see the history of payment attempts for a particular session.
  * 
  * A PaymentIntent transitions through
  * [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
  * throughout its lifetime as it interfaces with Stripe.js to perform
  * authentication flows and ultimately creates at most one successful charge.
  * 
  * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents).
 */
export interface PaymentIntent {
  amount: number;
  amount_capturable?: number;
  amount_received?: number;
  application?: any | null;
  application_fee_amount?: number | null;
  canceled_at?: number | null;
  cancellation_reason?: 'abandoned' | 'automatic' | 'duplicate' | 'failed_invoice' | 'fraudulent' | 'requested_by_customer' | 'void_invoice' | null;
  capture_method: 'automatic' | 'manual';
  charges?: any;
  client_secret?: string | null;
  confirmation_method: 'automatic' | 'manual';
  created: number;
  currency: string;
  customer?: any | null;
  description?: string | null;
  id: string;
  invoice?: any | null;
  last_payment_error?: any | null;
  livemode: boolean;
  metadata?: any;
  next_action?: any | null;
  object: 'payment_intent';
  on_behalf_of?: any | null;
  payment_method?: any | null;
  payment_method_options?: any | null;
  payment_method_types: Array<string>;
  receipt_email?: string | null;
  review?: any | null;
  setup_future_usage?: 'off_session' | 'on_session' | null;
  shipping?: any | null;
  statement_descriptor?: string | null;
  statement_descriptor_suffix?: string | null;
  status: 'canceled' | 'processing' | 'requires_action' | 'requires_capture' | 'requires_confirmation' | 'requires_payment_method' | 'succeeded';
  transfer_data?: any | null;
  transfer_group?: string | null;
}

export interface PaymentIntentNextAction {
  payment_intent_next_action_redirect_to_url?: PaymentIntentNextActionRedirectToUrl;
  type: string;
  use_stripe_sdk?: any;
}

export interface PaymentIntentNextActionRedirectToUrl {
  return_url?: string | null;
  url?: string | null;
}

export interface PaymentIntentPaymentMethodOptions {
  payment_method_options_bancontact?: PaymentMethodOptionsBancontact;
  payment_intent_payment_method_options_card?: PaymentIntentPaymentMethodOptionsCard;
}

export interface PaymentIntentPaymentMethodOptionsCard {
  installments?: any | null;
  network?: 'amex' | 'cartes_bancaires' | 'diners' | 'discover' | 'interac' | 'jcb' | 'mastercard' | 'unionpay' | 'unknown' | 'visa' | null;
  request_three_d_secure?: 'any' | 'automatic' | 'challenge_only' | null;
}

/**
  *PaymentMethod objects represent your customer's payment instruments.
  * They can be used with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or saved to
  * Customer objects to store instrument details for future payments.
  * 
  * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
 */
export interface PaymentMethod {
  payment_method_au_becs_debit?: PaymentMethodAuBecsDebit;
  payment_method_bacs_debit?: PaymentMethodBacsDebit;
  payment_method_bancontact?: PaymentMethodBancontact;
  billing_details: BillingDetails;
  payment_method_card?: PaymentMethodCard;
  payment_method_card_present?: PaymentMethodCardPresent;
  created: number;
  customer?: any | null;
  payment_method_eps?: PaymentMethodEps;
  payment_method_fpx?: PaymentMethodFpx;
  payment_method_giropay?: PaymentMethodGiropay;
  id: string;
  payment_method_ideal?: PaymentMethodIdeal;
  payment_method_interac_present?: PaymentMethodInteracPresent;
  livemode: boolean;
  metadata: any;
  object: 'payment_method';
  payment_method_p24?: PaymentMethodP24;
  payment_method_sepa_debit?: PaymentMethodSepaDebit;
  type: 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'card' | 'eps' | 'fpx' | 'giropay' | 'ideal' | 'p24' | 'sepa_debit';
}

export interface PaymentMethodAuBecsDebit {
  bsb_number?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
}

export interface PaymentMethodBacsDebit {
  fingerprint?: string | null;
  last4?: string | null;
  sort_code?: string | null;
}

export interface PaymentMethodBancontact {
}

export interface PaymentMethodCard {
  brand: string;
  checks?: any | null;
  country?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string;
  generated_from?: any | null;
  last4: string;
  networks?: any | null;
  three_d_secure_usage?: any | null;
  wallet?: any | null;
}

export interface PaymentMethodCardChecks {
  address_line1_check?: string | null;
  address_postal_code_check?: string | null;
  cvc_check?: string | null;
}

export interface PaymentMethodCardGeneratedCard {
  charge?: string | null;
  payment_method_details?: any | null;
}

export interface PaymentMethodCardPresent {
}

export interface PaymentMethodCardWallet {
  payment_method_card_wallet_amex_express_checkout?: PaymentMethodCardWalletAmexExpressCheckout;
  payment_method_card_wallet_apple_pay?: PaymentMethodCardWalletApplePay;
  dynamic_last4?: string | null;
  payment_method_card_wallet_google_pay?: PaymentMethodCardWalletGooglePay;
  payment_method_card_wallet_masterpass?: PaymentMethodCardWalletMasterpass;
  payment_method_card_wallet_samsung_pay?: PaymentMethodCardWalletSamsungPay;
  type: 'amex_express_checkout' | 'apple_pay' | 'google_pay' | 'masterpass' | 'samsung_pay' | 'visa_checkout';
  payment_method_card_wallet_visa_checkout?: PaymentMethodCardWalletVisaCheckout;
}

export interface PaymentMethodCardWalletAmexExpressCheckout {
}

export interface PaymentMethodCardWalletApplePay {
}

export interface PaymentMethodCardWalletGooglePay {
}

export interface PaymentMethodCardWalletMasterpass {
  billing_address?: any | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: any | null;
}

export interface PaymentMethodCardWalletSamsungPay {
}

export interface PaymentMethodCardWalletVisaCheckout {
  billing_address?: any | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: any | null;
}

export interface PaymentMethodDetails {
  payment_method_details_ach_credit_transfer?: PaymentMethodDetailsAchCreditTransfer;
  payment_method_details_ach_debit?: PaymentMethodDetailsAchDebit;
  payment_flows_private_payment_methods_alipay_details?: PaymentFlowsPrivatePaymentMethodsAlipayDetails;
  payment_method_details_au_becs_debit?: PaymentMethodDetailsAuBecsDebit;
  payment_method_details_bacs_debit?: PaymentMethodDetailsBacsDebit;
  payment_method_details_bancontact?: PaymentMethodDetailsBancontact;
  payment_method_details_card?: PaymentMethodDetailsCard;
  payment_method_details_card_present?: PaymentMethodDetailsCardPresent;
  payment_method_details_eps?: PaymentMethodDetailsEps;
  payment_method_details_fpx?: PaymentMethodDetailsFpx;
  payment_method_details_giropay?: PaymentMethodDetailsGiropay;
  payment_method_details_ideal?: PaymentMethodDetailsIdeal;
  payment_method_details_interac_present?: PaymentMethodDetailsInteracPresent;
  payment_method_details_klarna?: PaymentMethodDetailsKlarna;
  payment_method_details_multibanco?: PaymentMethodDetailsMultibanco;
  payment_method_details_p24?: PaymentMethodDetailsP24;
  payment_method_details_sepa_debit?: PaymentMethodDetailsSepaDebit;
  payment_method_details_sofort?: PaymentMethodDetailsSofort;
  payment_method_details_stripe_account?: PaymentMethodDetailsStripeAccount;
  type: string;
  payment_method_details_wechat?: PaymentMethodDetailsWechat;
}

export interface PaymentMethodDetailsAchCreditTransfer {
  account_number?: string | null;
  bank_name?: string | null;
  routing_number?: string | null;
  swift_code?: string | null;
}

export interface PaymentMethodDetailsAchDebit {
  account_holder_type?: 'company' | 'individual' | null;
  bank_name?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  routing_number?: string | null;
}

export interface PaymentMethodDetailsAuBecsDebit {
  bsb_number?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  mandate?: string;
}

export interface PaymentMethodDetailsBacsDebit {
  fingerprint?: string | null;
  last4?: string | null;
  mandate?: string | null;
  sort_code?: string | null;
}

export interface PaymentMethodDetailsBancontact {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  iban_last4?: string | null;
  preferred_language?: 'de' | 'en' | 'fr' | 'nl' | null;
  verified_name?: string | null;
}

export interface PaymentMethodDetailsCard {
  brand?: string | null;
  checks?: any | null;
  country?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding?: string | null;
  installments?: any | null;
  last4?: string | null;
  network?: string | null;
  three_d_secure?: any | null;
  wallet?: any | null;
}

export interface PaymentMethodDetailsCardChecks {
  address_line1_check?: string | null;
  address_postal_code_check?: string | null;
  cvc_check?: string | null;
}

export interface PaymentMethodDetailsCardInstallments {
  plan?: any | null;
}

export interface PaymentMethodDetailsCardInstallmentsPlan {
  count?: number | null;
  interval?: 'month' | null;
  type: 'fixed_count';
}

export interface PaymentMethodDetailsCardPresent {
  brand?: string | null;
  cardholder_name?: string | null;
  country?: string | null;
  emv_auth_data?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding?: string | null;
  generated_card?: string | null;
  last4?: string | null;
  network?: string | null;
  read_method?: string | null;
  receipt?: any | null;
}

export interface PaymentMethodDetailsCardPresentReceipt {
  application_cryptogram?: string | null;
  application_preferred_name?: string | null;
  authorization_code?: string | null;
  authorization_response_code?: string | null;
  cardholder_verification_method?: string | null;
  dedicated_file_name?: string | null;
  terminal_verification_results?: string | null;
  transaction_status_information?: string | null;
}

export interface PaymentMethodDetailsCardWallet {
  payment_method_details_card_wallet_amex_express_checkout?: PaymentMethodDetailsCardWalletAmexExpressCheckout;
  payment_method_details_card_wallet_apple_pay?: PaymentMethodDetailsCardWalletApplePay;
  dynamic_last4?: string | null;
  payment_method_details_card_wallet_google_pay?: PaymentMethodDetailsCardWalletGooglePay;
  payment_method_details_card_wallet_masterpass?: PaymentMethodDetailsCardWalletMasterpass;
  payment_method_details_card_wallet_samsung_pay?: PaymentMethodDetailsCardWalletSamsungPay;
  type: 'amex_express_checkout' | 'apple_pay' | 'google_pay' | 'masterpass' | 'samsung_pay' | 'visa_checkout';
  payment_method_details_card_wallet_visa_checkout?: PaymentMethodDetailsCardWalletVisaCheckout;
}

export interface PaymentMethodDetailsCardWalletAmexExpressCheckout {
}

export interface PaymentMethodDetailsCardWalletApplePay {
}

export interface PaymentMethodDetailsCardWalletGooglePay {
}

export interface PaymentMethodDetailsCardWalletMasterpass {
  billing_address?: any | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: any | null;
}

export interface PaymentMethodDetailsCardWalletSamsungPay {
}

export interface PaymentMethodDetailsCardWalletVisaCheckout {
  billing_address?: any | null;
  email?: string | null;
  name?: string | null;
  shipping_address?: any | null;
}

export interface PaymentMethodDetailsEps {
  verified_name?: string | null;
}

export interface PaymentMethodDetailsFpx {
  bank: 'affin_bank' | 'alliance_bank' | 'ambank' | 'bank_islam' | 'bank_muamalat' | 'bank_rakyat' | 'bsn' | 'cimb' | 'deutsche_bank' | 'hong_leong_bank' | 'hsbc' | 'kfh' | 'maybank2e' | 'maybank2u' | 'ocbc' | 'pb_enterprise' | 'public_bank' | 'rhb' | 'standard_chartered' | 'uob';
  transaction_id?: string | null;
}

export interface PaymentMethodDetailsGiropay {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  verified_name?: string | null;
}

export interface PaymentMethodDetailsIdeal {
  bank?: 'abn_amro' | 'asn_bank' | 'bunq' | 'handelsbanken' | 'ing' | 'knab' | 'moneyou' | 'rabobank' | 'regiobank' | 'sns_bank' | 'triodos_bank' | 'van_lanschot' | null;
  bic?: 'ABNANL2A' | 'ASNBNL21' | 'BUNQNL2A' | 'FVLBNL22' | 'HANDNL2A' | 'INGBNL2A' | 'KNABNL2H' | 'MOYONL21' | 'RABONL2U' | 'RBRBNL21' | 'SNSBNL2A' | 'TRIONL2U' | null;
  iban_last4?: string | null;
  verified_name?: string | null;
}

export interface PaymentMethodDetailsInteracPresent {
  brand?: string | null;
  cardholder_name?: string | null;
  country?: string | null;
  emv_auth_data?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding?: string | null;
  generated_card?: string | null;
  last4?: string | null;
  network?: string | null;
  read_method?: string | null;
  receipt?: any | null;
}

export interface PaymentMethodDetailsInteracPresentReceipt {
  account_type?: string;
  application_cryptogram?: string | null;
  application_preferred_name?: string | null;
  authorization_code?: string | null;
  authorization_response_code?: string | null;
  cardholder_verification_method?: string | null;
  dedicated_file_name?: string | null;
  terminal_verification_results?: string | null;
  transaction_status_information?: string | null;
}

export interface PaymentMethodDetailsKlarna {
}

export interface PaymentMethodDetailsMultibanco {
  entity?: string | null;
  reference?: string | null;
}

export interface PaymentMethodDetailsP24 {
  reference?: string | null;
  verified_name?: string | null;
}

export interface PaymentMethodDetailsSepaDebit {
  bank_code?: string | null;
  branch_code?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  mandate?: string | null;
}

export interface PaymentMethodDetailsSofort {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  country?: string | null;
  iban_last4?: string | null;
  verified_name?: string | null;
}

export interface PaymentMethodDetailsStripeAccount {
}

export interface PaymentMethodDetailsWechat {
}

export interface PaymentMethodEps {
}

export interface PaymentMethodFpx {
  bank: 'affin_bank' | 'alliance_bank' | 'ambank' | 'bank_islam' | 'bank_muamalat' | 'bank_rakyat' | 'bsn' | 'cimb' | 'deutsche_bank' | 'hong_leong_bank' | 'hsbc' | 'kfh' | 'maybank2e' | 'maybank2u' | 'ocbc' | 'pb_enterprise' | 'public_bank' | 'rhb' | 'standard_chartered' | 'uob';
}

export interface PaymentMethodGiropay {
}

export interface PaymentMethodIdeal {
  bank?: 'abn_amro' | 'asn_bank' | 'bunq' | 'handelsbanken' | 'ing' | 'knab' | 'moneyou' | 'rabobank' | 'regiobank' | 'sns_bank' | 'triodos_bank' | 'van_lanschot' | null;
  bic?: 'ABNANL2A' | 'ASNBNL21' | 'BUNQNL2A' | 'FVLBNL22' | 'HANDNL2A' | 'INGBNL2A' | 'KNABNL2H' | 'MOYONL21' | 'RABONL2U' | 'RBRBNL21' | 'SNSBNL2A' | 'TRIONL2U' | null;
}

export interface PaymentMethodInteracPresent {
}

export interface PaymentMethodOptionsBancontact {
  preferred_language: 'de' | 'en' | 'fr' | 'nl';
}

export interface PaymentMethodOptionsCardInstallments {
  available_plans?: Array<PaymentMethodDetailsCardInstallmentsPlan> | null;
  enabled: boolean;
  plan?: any | null;
}

export interface PaymentMethodP24 {
}

export interface PaymentMethodSepaDebit {
  bank_code?: string | null;
  branch_code?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
}

export interface PaymentPagesCheckoutSessionTotalDetails {
  amount_discount: number;
  amount_tax: number;
  payment_pages_checkout_session_total_details_resource_breakdown?: PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown;
}

export interface PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown {
  discounts: Array<LineItemsDiscountAmount>;
  taxes: Array<LineItemsTaxAmount>;
}

export interface PaymentPagesPaymentPageResourcesShippingAddressCollection {
  allowed_countries: Array<'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BV' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CV' | 'CW' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW' | 'ZZ'>;
}

export interface PaymentSource {
  account?: Account;
  alipay_account?: AlipayAccount;
  bank_account?: BankAccount;
  bitcoin_receiver?: BitcoinReceiver;
  card?: Card;
  source?: Source;
}

/**
  *A `Payout` object is created when you receive funds from Stripe, or when you
  * initiate a payout to either a bank account or debit card of a [connected
  * Stripe account](/docs/connect/payouts). You can retrieve individual payouts,
  * as well as list all payouts. Payouts are made on [varying
  * schedules](/docs/payouts#payout-schedule), depending on your country and
  * industry.
  * 
  * Related guide: [Receiving Payouts](https://stripe.com/docs/payouts).
 */
export interface Payout {
  amount: number;
  arrival_date: number;
  automatic: boolean;
  balance_transaction?: any | null;
  created: number;
  currency: string;
  description?: string | null;
  destination?: any | null;
  failure_balance_transaction?: any | null;
  failure_code?: string | null;
  failure_message?: string | null;
  id: string;
  livemode: boolean;
  metadata: any;
  method: string;
  object: 'payout';
  source_type: string;
  statement_descriptor?: string | null;
  status: string;
  type: 'bank_account' | 'card';
}

export interface Period {
  end?: number | null;
  start?: number | null;
}

/**
  *This is an object representing a person associated with a Stripe account.
  * 
  * Related guide: [Handling Identity Verification with the API](https://stripe.com/docs/connect/identity-verification-api#person-information).
 */
export interface Person {
  account: string;
  address?: Address;
  address_kana?: any | null;
  address_kanji?: any | null;
  created: number;
  legal_entity_dob?: LegalEntityDob;
  email?: string | null;
  first_name?: string | null;
  first_name_kana?: string | null;
  first_name_kanji?: string | null;
  gender?: string | null;
  id: string;
  id_number_provided?: boolean;
  last_name?: string | null;
  last_name_kana?: string | null;
  last_name_kanji?: string | null;
  maiden_name?: string | null;
  metadata?: any;
  object: 'person';
  phone?: string | null;
  political_exposure?: 'existing' | 'none';
  person_relationship?: PersonRelationship;
  requirements?: any | null;
  ssn_last_4_provided?: boolean;
  legal_entity_person_verification?: LegalEntityPersonVerification;
}

export interface PersonRelationship {
  director?: boolean | null;
  executive?: boolean | null;
  owner?: boolean | null;
  percent_ownership?: number | null;
  representative?: boolean | null;
  title?: string | null;
}

export interface PersonRequirements {
  currently_due: Array<string>;
  errors: Array<AccountRequirementsError>;
  eventually_due: Array<string>;
  past_due: Array<string>;
  pending_verification: Array<string>;
}

/**
  *You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
  * 
  * Plans define the base price, currency, and billing cycle for recurring purchases of products.
  * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.
  * 
  * For example, you might have a single "gold" product that has plans for $10/month, $100/year, €9/month, and €90/year.
  * 
  * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/billing/prices-guide).
 */
export interface Plan {
  active: boolean;
  aggregate_usage?: 'last_during_period' | 'last_ever' | 'max' | 'sum' | null;
  amount?: number | null;
  amount_decimal?: string | null;
  billing_scheme: 'per_unit' | 'tiered';
  created: number;
  currency: string;
  id: string;
  interval: 'day' | 'month' | 'week' | 'year';
  interval_count: number;
  livemode: boolean;
  metadata: any;
  nickname?: string | null;
  object: 'plan';
  product?: any | null;
  tiers?: Array<PlanTier> | null;
  tiers_mode?: 'graduated' | 'volume' | null;
  transform_usage?: any | null;
  trial_period_days?: number | null;
  usage_type: 'licensed' | 'metered';
}

export interface PlanTier {
  flat_amount?: number | null;
  flat_amount_decimal?: string | null;
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
  up_to?: number | null;
}

export interface PlatformTaxFee {
  account: string;
  id: string;
  object: 'platform_tax_fee';
  source_transaction: string;
  type: string;
}

/**
  *Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
  * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
  * 
  * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
  * 
  * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/billing/prices-guide).
 */
export interface Price {
  active: boolean;
  billing_scheme: 'per_unit' | 'tiered';
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  lookup_key?: string | null;
  metadata: any;
  nickname?: string | null;
  object: 'price';
  product: any;
  recurring?: any | null;
  tiers?: Array<PriceTier>;
  tiers_mode?: 'graduated' | 'volume' | null;
  transform_quantity?: any | null;
  type: 'one_time' | 'recurring';
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
}

export interface PriceTier {
  flat_amount?: number | null;
  flat_amount_decimal?: string | null;
  unit_amount?: number | null;
  unit_amount_decimal?: string | null;
  up_to?: number | null;
}

/**
  *Products describe the specific goods or services you offer to your customers.
  * For example, you might offer a Standard and Premium version of your goods or service; each version would be a separate Product.
  * They can be used in conjunction with [Prices](https://stripe.com/docs/api#prices) to configure pricing in Checkout and Subscriptions.
  * 
  * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) or accept [one-time payments with Checkout](https://stripe.com/docs/payments/checkout/client#create-products) and more about [Products and Prices](https://stripe.com/docs/billing/prices-guide)
 */
export interface Product {
  active: boolean;
  attributes?: Array<string> | null;
  caption?: string | null;
  created: number;
  deactivate_on?: Array<string>;
  description?: string | null;
  id: string;
  images: Array<string>;
  livemode: boolean;
  metadata: any;
  name: string;
  object: 'product';
  package_dimensions?: any | null;
  shippable?: boolean | null;
  statement_descriptor?: string | null;
  type: 'good' | 'service';
  unit_label?: string | null;
  updated: number;
  url?: string | null;
}

/**
  *An early fraud warning indicates that the card issuer has notified us that a
  * charge may be fraudulent.
  * 
  * Related guide: [Early Fraud Warnings](https://stripe.com/docs/disputes/measuring#early-fraud-warnings).
 */
export interface RadarEarlyFraudWarning {
  actionable: boolean;
  charge: any;
  created: number;
  fraud_type: string;
  id: string;
  livemode: boolean;
  object: 'radar.early_fraud_warning';
}

/**
  *Value lists allow you to group values together which can then be referenced in rules.
  * 
  * Related guide: [Default Stripe Lists](https://stripe.com/docs/radar/lists#managing-list-items).
 */
export interface RadarValueList {
  alias: string;
  created: number;
  created_by: string;
  id: string;
  item_type: 'card_bin' | 'card_fingerprint' | 'case_sensitive_string' | 'country' | 'email' | 'ip_address' | 'string';
  list_items: any;
  livemode: boolean;
  metadata: any;
  name: string;
  object: 'radar.value_list';
}

/**
  *Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
  * 
  * Related guide: [Managing List Items](https://stripe.com/docs/radar/lists#managing-list-items).
 */
export interface RadarValueListItem {
  created: number;
  created_by: string;
  id: string;
  livemode: boolean;
  object: 'radar.value_list_item';
  value: string;
  value_list: string;
}

export interface RadarReviewResourceLocation {
  city?: string | null;
  country?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  region?: string | null;
}

export interface RadarReviewResourceSession {
  browser?: string | null;
  device?: string | null;
  platform?: string | null;
  version?: string | null;
}

/**
  *With `Recipient` objects, you can transfer money from your Stripe account to a
  * third-party bank account or debit card. The API allows you to create, delete,
  * and update your recipients. You can retrieve individual recipients as well as
  * a list of all your recipients.
  * 
  * **`Recipient` objects have been deprecated in favor of
  * [Connect](https://stripe.com/docs/connect), specifically Connect's much more powerful
  * [Account objects](https://stripe.com/docs/api#account). Stripe accounts that don't already use
  * recipients can no longer begin doing so. Please use `Account` objects
  * instead.**
 */
export interface Recipient {
  active_account?: any | null;
  cards?: any | null;
  created: number;
  default_card?: any | null;
  description?: string | null;
  email?: string | null;
  id: string;
  livemode: boolean;
  metadata: any;
  migrated_to?: any | null;
  name?: string | null;
  object: 'recipient';
  rolled_back_from?: any;
  type: string;
}

export interface Recurring {
  aggregate_usage?: 'last_during_period' | 'last_ever' | 'max' | 'sum' | null;
  interval: 'day' | 'month' | 'week' | 'year';
  interval_count: number;
  usage_type: 'licensed' | 'metered';
}

/**
  *`Refund` objects allow you to refund a charge that has previously been created
  * but not yet refunded. Funds will be refunded to the credit or debit card that
  * was originally charged.
  * 
  * Related guide: [Refunds](https://stripe.com/docs/refunds).
 */
export interface Refund {
  amount: number;
  balance_transaction?: any | null;
  charge?: any | null;
  created: number;
  currency: string;
  description?: string;
  failure_balance_transaction?: any;
  failure_reason?: string;
  id: string;
  metadata: any;
  object: 'refund';
  payment_intent?: any | null;
  reason?: string | null;
  receipt_number?: string | null;
  source_transfer_reversal?: any | null;
  status?: string | null;
  transfer_reversal?: any | null;
}

/**
  *The Report Run object represents an instance of a report type generated with
  * specific run parameters. Once the object is created, Stripe begins processing the report.
  * When the report has finished running, it will give you a reference to a file
  * where you can retrieve your results. For an overview, see
  * [API Access to Reports](https://stripe.com/docs/reporting/statements/api).
  * 
  * Note that reports can only be run based on your live-mode data (not test-mode
  * data), and thus related requests must be made with a
  * [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
 */
export interface ReportingReportRun {
  created: number;
  error?: string | null;
  id: string;
  livemode: boolean;
  object: 'reporting.report_run';
  financial_reporting_finance_report_run_run_parameters?: FinancialReportingFinanceReportRunRunParameters;
  report_type: string;
  result?: any | null;
  status: string;
  succeeded_at?: number | null;
}

/**
  *The Report Type resource corresponds to a particular type of report, such as
  * the "Activity summary" or "Itemized payouts" reports. These objects are
  * identified by an ID belonging to a set of enumerated values. See
  * [API Access to Reports documentation](https://stripe.com/docs/reporting/statements/api)
  * for those Report Type IDs, along with required and optional parameters.
  * 
  * Note that reports can only be run based on your live-mode data (not test-mode
  * data), and thus related requests must be made with a
  * [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
 */
export interface ReportingReportType {
  data_available_end: number;
  data_available_start: number;
  default_columns?: Array<string> | null;
  id: string;
  name: string;
  object: 'reporting.report_type';
  updated: number;
  version: number;
}

export interface ReserveTransaction {
  amount: number;
  currency: string;
  description?: string | null;
  id: string;
  object: 'reserve_transaction';
}

/**
  *Reviews can be used to supplement automated fraud detection with human expertise.
  * 
  * Learn more about [Radar](/radar) and reviewing payments
  * [here](https://stripe.com/docs/radar/reviews).
 */
export interface Review {
  billing_zip?: string | null;
  charge?: any | null;
  closed_reason?: 'approved' | 'disputed' | 'refunded' | 'refunded_as_fraud' | null;
  created: number;
  id: string;
  ip_address?: string | null;
  ip_address_location?: any | null;
  livemode: boolean;
  object: 'review';
  open: boolean;
  opened_reason: 'manual' | 'rule';
  payment_intent?: any;
  reason: string;
  session?: any | null;
}

export interface Rule {
  action: string;
  id: string;
  predicate: string;
}

/**
  *If you have [scheduled a Sigma query](https://stripe.com/docs/sigma/scheduled-queries), you'll
  * receive a `sigma.scheduled_query_run.created` webhook each time the query
  * runs. The webhook contains a `ScheduledQueryRun` object, which you can use to
  * retrieve the query results.
 */
export interface ScheduledQueryRun {
  created: number;
  data_load_time: number;
  sigma_scheduled_query_run_error?: SigmaScheduledQueryRunError;
  file?: any | null;
  id: string;
  livemode: boolean;
  object: 'scheduled_query_run';
  result_available_until: number;
  sql: string;
  status: string;
  title: string;
}

/**
  *A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
  * For example, you could use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
  * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
  * 
  * Create a SetupIntent as soon as you're ready to collect your customer's payment credentials.
  * Do not maintain long-lived, unconfirmed SetupIntents as they may no longer be valid.
  * The SetupIntent then transitions through multiple [statuses](https://stripe.com/docs/payments/intents#intent-statuses) as it guides
  * you through the setup process.
  * 
  * Successful SetupIntents result in payment credentials that are optimized for future payments.
  * For example, cardholders in [certain regions](/guides/strong-customer-authentication) may need to be run through
  * [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication) at the time of payment method collection
  * in order to streamline later [off-session payments](https://stripe.com/docs/payments/setup-intents).
  * If the SetupIntent is used with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer), upon success,
  * it will automatically attach the resulting payment method to that Customer.
  * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
  * PaymentIntents to save payment methods in order to prevent saving invalid or unoptimized payment methods.
  * 
  * By using SetupIntents, you ensure that your customers experience the minimum set of required friction,
  * even as regulations change over time.
  * 
  * Related guide: [Setup Intents API](https://stripe.com/docs/payments/setup-intents).
 */
export interface SetupIntent {
  application?: any | null;
  cancellation_reason?: 'abandoned' | 'duplicate' | 'requested_by_customer' | null;
  client_secret?: string | null;
  created: number;
  customer?: any | null;
  description?: string | null;
  id: string;
  last_setup_error?: any | null;
  livemode: boolean;
  mandate?: any | null;
  metadata?: any;
  next_action?: any | null;
  object: 'setup_intent';
  on_behalf_of?: any | null;
  payment_method?: any | null;
  payment_method_options?: any | null;
  payment_method_types: Array<string>;
  single_use_mandate?: any | null;
  status: 'canceled' | 'processing' | 'requires_action' | 'requires_confirmation' | 'requires_payment_method' | 'succeeded';
  usage: string;
}

export interface SetupIntentNextAction {
  setup_intent_next_action_redirect_to_url?: SetupIntentNextActionRedirectToUrl;
  type: string;
  use_stripe_sdk?: any;
}

export interface SetupIntentNextActionRedirectToUrl {
  return_url?: string | null;
  url?: string | null;
}

export interface SetupIntentPaymentMethodOptions {
  setup_intent_payment_method_options_card?: SetupIntentPaymentMethodOptionsCard;
}

export interface SetupIntentPaymentMethodOptionsCard {
  request_three_d_secure?: 'any' | 'automatic' | 'challenge_only' | null;
}

export interface Shipping {
  address?: Address;
  carrier?: string | null;
  name?: string | null;
  phone?: string | null;
  tracking_number?: string | null;
}

export interface ShippingMethod {
  amount: number;
  currency: string;
  delivery_estimate?: any | null;
  description: string;
  id: string;
}

export interface SigmaScheduledQueryRunError {
  message: string;
}

/**
  *Stores representations of [stock keeping units](http://en.wikipedia.org/wiki/Stock_keeping_unit).
  * SKUs describe specific product variations, taking into account any combination of: attributes,
  * currency, and cost. For example, a product may be a T-shirt, whereas a specific SKU represents
  * the `size: large`, `color: red` version of that shirt.
  * 
  * Can also be used to manage inventory.
  * 
  * Related guide: [Tax, Shipping, and Inventory](https://stripe.com/docs/orders).
 */
export interface Sku {
  active: boolean;
  attributes: any;
  created: number;
  currency: string;
  id: string;
  image?: string | null;
  inventory: Inventory;
  livemode: boolean;
  metadata: any;
  object: 'sku';
  package_dimensions?: any | null;
  price: number;
  product: any;
  updated: number;
}

/**
  *`Source` objects allow you to accept a variety of payment methods. They
  * represent a customer's payment instrument, and can be used with the Stripe API
  * just like a `Card` object: once chargeable, they can be charged, or can be
  * attached to customers.
  * 
  * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
 */
export interface Source {
  source_type_ach_credit_transfer?: SourceTypeAchCreditTransfer;
  source_type_ach_debit?: SourceTypeAchDebit;
  source_type_alipay?: SourceTypeAlipay;
  amount?: number | null;
  source_type_au_becs_debit?: SourceTypeAuBecsDebit;
  source_type_bancontact?: SourceTypeBancontact;
  source_type_card?: SourceTypeCard;
  source_type_card_present?: SourceTypeCardPresent;
  client_secret: string;
  source_code_verification_flow?: SourceCodeVerificationFlow;
  created: number;
  currency?: string | null;
  customer?: string;
  source_type_eps?: SourceTypeEps;
  flow: string;
  source_type_giropay?: SourceTypeGiropay;
  id: string;
  source_type_ideal?: SourceTypeIdeal;
  source_type_klarna?: SourceTypeKlarna;
  livemode: boolean;
  metadata?: any | null;
  source_type_multibanco?: SourceTypeMultibanco;
  object: 'source';
  owner?: any | null;
  source_type_p24?: SourceTypeP24;
  source_receiver_flow?: SourceReceiverFlow;
  source_redirect_flow?: SourceRedirectFlow;
  source_type_sepa_debit?: SourceTypeSepaDebit;
  source_type_sofort?: SourceTypeSofort;
  source_order?: SourceOrder;
  statement_descriptor?: string | null;
  status: string;
  source_type_three_d_secure?: SourceTypeThreeDSecure;
  type: 'ach_credit_transfer' | 'ach_debit' | 'alipay' | 'au_becs_debit' | 'bancontact' | 'card' | 'card_present' | 'eps' | 'giropay' | 'ideal' | 'klarna' | 'multibanco' | 'p24' | 'sepa_debit' | 'sofort' | 'three_d_secure' | 'wechat';
  usage?: string | null;
  source_type_wechat?: SourceTypeWechat;
}

export interface SourceCodeVerificationFlow {
  attempts_remaining: number;
  status: string;
}

/**
  *Source mandate notifications should be created when a notification related to
  * a source mandate must be sent to the payer. They will trigger a webhook or
  * deliver an email to the customer.
 */
export interface SourceMandateNotification {
  source_mandate_notification_acss_debit_data?: SourceMandateNotificationAcssDebitData;
  amount?: number | null;
  source_mandate_notification_bacs_debit_data?: SourceMandateNotificationBacsDebitData;
  created: number;
  id: string;
  livemode: boolean;
  object: 'source_mandate_notification';
  reason: string;
  source_mandate_notification_sepa_debit_data?: SourceMandateNotificationSepaDebitData;
  source: Source;
  status: string;
  type: string;
}

export interface SourceMandateNotificationAcssDebitData {
  statement_descriptor?: string;
}

export interface SourceMandateNotificationBacsDebitData {
  last4?: string;
}

export interface SourceMandateNotificationSepaDebitData {
  creditor_identifier?: string;
  last4?: string;
  mandate_reference?: string;
}

export interface SourceOrder {
  amount: number;
  currency: string;
  email?: string;
  items?: Array<SourceOrderItem> | null;
  shipping?: Shipping;
}

export interface SourceOrderItem {
  amount?: number | null;
  currency?: string | null;
  description?: string | null;
  parent?: string | null;
  quantity?: number;
  type?: string | null;
}

export interface SourceOwner {
  address?: any | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  verified_address?: any | null;
  verified_email?: string | null;
  verified_name?: string | null;
  verified_phone?: string | null;
}

export interface SourceReceiverFlow {
  address?: string | null;
  amount_charged: number;
  amount_received: number;
  amount_returned: number;
  refund_attributes_method: string;
  refund_attributes_status: string;
}

export interface SourceRedirectFlow {
  failure_reason?: string | null;
  return_url: string;
  status: string;
  url: string;
}

/**
  *Some payment methods have no required amount that a customer must send.
  * Customers can be instructed to send any amount, and it can be made up of
  * multiple transactions. As such, sources can have multiple associated
  * transactions.
 */
export interface SourceTransaction {
  source_transaction_ach_credit_transfer_data?: SourceTransactionAchCreditTransferData;
  amount: number;
  source_transaction_chf_credit_transfer_data?: SourceTransactionChfCreditTransferData;
  created: number;
  currency: string;
  source_transaction_gbp_credit_transfer_data?: SourceTransactionGbpCreditTransferData;
  id: string;
  livemode: boolean;
  object: 'source_transaction';
  source_transaction_paper_check_data?: SourceTransactionPaperCheckData;
  source_transaction_sepa_credit_transfer_data?: SourceTransactionSepaCreditTransferData;
  source: string;
  status: string;
  type: 'ach_credit_transfer' | 'ach_debit' | 'alipay' | 'bancontact' | 'card' | 'card_present' | 'eps' | 'giropay' | 'ideal' | 'klarna' | 'multibanco' | 'p24' | 'sepa_debit' | 'sofort' | 'three_d_secure' | 'wechat';
}

export interface SourceTransactionAchCreditTransferData {
  customer_data?: string;
  fingerprint?: string;
  last4?: string;
  routing_number?: string;
}

export interface SourceTransactionChfCreditTransferData {
  reference?: string;
  sender_address_country?: string;
  sender_address_line1?: string;
  sender_iban?: string;
  sender_name?: string;
}

export interface SourceTransactionGbpCreditTransferData {
  fingerprint?: string;
  funding_method?: string;
  last4?: string;
  reference?: string;
  sender_account_number?: string;
  sender_name?: string;
  sender_sort_code?: string;
}

export interface SourceTransactionPaperCheckData {
  available_at?: string;
  invoices?: string;
}

export interface SourceTransactionSepaCreditTransferData {
  reference?: string;
  sender_iban?: string;
  sender_name?: string;
}

export interface SourceTypeAchCreditTransfer {
  account_number?: string | null;
  bank_name?: string | null;
  fingerprint?: string | null;
  refund_account_holder_name?: string | null;
  refund_account_holder_type?: string | null;
  refund_routing_number?: string | null;
  routing_number?: string | null;
  swift_code?: string | null;
}

export interface SourceTypeAchDebit {
  bank_name?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  routing_number?: string | null;
  type?: string | null;
}

export interface SourceTypeAlipay {
  data_string?: string | null;
  native_url?: string | null;
  statement_descriptor?: string | null;
}

export interface SourceTypeAuBecsDebit {
  bsb_number?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
}

export interface SourceTypeBancontact {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  iban_last4?: string | null;
  preferred_language?: string | null;
  statement_descriptor?: string | null;
}

export interface SourceTypeCard {
  address_line1_check?: string | null;
  address_zip_check?: string | null;
  brand?: string | null;
  country?: string | null;
  cvc_check?: string | null;
  dynamic_last4?: string | null;
  exp_month?: number | null;
  exp_year?: number | null;
  fingerprint?: string;
  funding?: string | null;
  last4?: string | null;
  name?: string | null;
  three_d_secure?: string;
  tokenization_method?: string | null;
}

export interface SourceTypeCardPresent {
  application_cryptogram?: string;
  application_preferred_name?: string;
  authorization_code?: string | null;
  authorization_response_code?: string;
  brand?: string | null;
  country?: string | null;
  cvm_type?: string;
  data_type?: string | null;
  dedicated_file_name?: string;
  emv_auth_data?: string;
  evidence_customer_signature?: string | null;
  evidence_transaction_certificate?: string | null;
  exp_month?: number | null;
  exp_year?: number | null;
  fingerprint?: string;
  funding?: string | null;
  last4?: string | null;
  pos_device_id?: string | null;
  pos_entry_mode?: string;
  read_method?: string | null;
  reader?: string | null;
  terminal_verification_results?: string;
  transaction_status_information?: string;
}

export interface SourceTypeEps {
  reference?: string | null;
  statement_descriptor?: string | null;
}

export interface SourceTypeGiropay {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  statement_descriptor?: string | null;
}

export interface SourceTypeIdeal {
  bank?: string | null;
  bic?: string | null;
  iban_last4?: string | null;
  statement_descriptor?: string | null;
}

export interface SourceTypeKlarna {
  background_image_url?: string;
  client_token?: string | null;
  first_name?: string;
  last_name?: string;
  locale?: string;
  logo_url?: string;
  page_title?: string;
  pay_later_asset_urls_descriptive?: string;
  pay_later_asset_urls_standard?: string;
  pay_later_name?: string;
  pay_later_redirect_url?: string;
  pay_now_asset_urls_descriptive?: string;
  pay_now_asset_urls_standard?: string;
  pay_now_name?: string;
  pay_now_redirect_url?: string;
  pay_over_time_asset_urls_descriptive?: string;
  pay_over_time_asset_urls_standard?: string;
  pay_over_time_name?: string;
  pay_over_time_redirect_url?: string;
  payment_method_categories?: string;
  purchase_country?: string;
  purchase_type?: string;
  redirect_url?: string;
  shipping_delay?: number;
  shipping_first_name?: string;
  shipping_last_name?: string;
}

export interface SourceTypeMultibanco {
  entity?: string | null;
  reference?: string | null;
  refund_account_holder_address_city?: string | null;
  refund_account_holder_address_country?: string | null;
  refund_account_holder_address_line1?: string | null;
  refund_account_holder_address_line2?: string | null;
  refund_account_holder_address_postal_code?: string | null;
  refund_account_holder_address_state?: string | null;
  refund_account_holder_name?: string | null;
  refund_iban?: string | null;
}

export interface SourceTypeP24 {
  reference?: string | null;
}

export interface SourceTypeSepaDebit {
  bank_code?: string | null;
  branch_code?: string | null;
  country?: string | null;
  fingerprint?: string | null;
  last4?: string | null;
  mandate_reference?: string | null;
  mandate_url?: string | null;
}

export interface SourceTypeSofort {
  bank_code?: string | null;
  bank_name?: string | null;
  bic?: string | null;
  country?: string | null;
  iban_last4?: string | null;
  preferred_language?: string | null;
  statement_descriptor?: string | null;
}

export interface SourceTypeThreeDSecure {
  address_line1_check?: string | null;
  address_zip_check?: string | null;
  authenticated?: boolean | null;
  brand?: string | null;
  card?: string | null;
  country?: string | null;
  customer?: string | null;
  cvc_check?: string | null;
  dynamic_last4?: string | null;
  exp_month?: number | null;
  exp_year?: number | null;
  fingerprint?: string;
  funding?: string | null;
  last4?: string | null;
  name?: string | null;
  three_d_secure?: string;
  tokenization_method?: string | null;
}

export interface SourceTypeWechat {
  prepay_id?: string;
  qr_code_url?: string | null;
  statement_descriptor?: string;
}

export interface StatusTransitions {
  canceled?: number | null;
  fulfiled?: number | null;
  paid?: number | null;
  returned?: number | null;
}

/**
  *Subscriptions allow you to charge a customer on a recurring basis.
  * 
  * Related guide: [Creating Subscriptions](https://stripe.com/docs/billing/subscriptions/creating).
 */
export interface Subscription {
  application_fee_percent?: number | null;
  billing_cycle_anchor: number;
  billing_thresholds?: any | null;
  cancel_at?: number | null;
  cancel_at_period_end: boolean;
  canceled_at?: number | null;
  collection_method?: 'charge_automatically' | 'send_invoice' | null;
  created: number;
  current_period_end: number;
  current_period_start: number;
  customer: any;
  days_until_due?: number | null;
  default_payment_method?: any | null;
  default_source?: any | null;
  default_tax_rates?: Array<TaxRate> | null;
  discount?: any | null;
  ended_at?: number | null;
  id: string;
  items: any;
  latest_invoice?: any | null;
  livemode: boolean;
  metadata: any;
  next_pending_invoice_item_invoice?: number | null;
  object: 'subscription';
  pause_collection?: any | null;
  pending_invoice_item_interval?: any | null;
  pending_setup_intent?: any | null;
  pending_update?: any | null;
  plan?: any | null;
  quantity?: number | null;
  schedule?: any | null;
  start_date: number;
  status: 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'trialing' | 'unpaid';
  tax_percent?: number | null;
  transfer_data?: any | null;
  trial_end?: number | null;
  trial_start?: number | null;
}

export interface SubscriptionBillingThresholds {
  amount_gte?: number | null;
  reset_billing_cycle_anchor?: boolean | null;
}

/**
  *Subscription items allow you to create customer subscriptions with more than
  * one plan, making it easy to represent complex billing relationships.
 */
export interface SubscriptionItem {
  billing_thresholds?: any | null;
  created: number;
  id: string;
  metadata: any;
  object: 'subscription_item';
  plan: Plan;
  price: Price;
  quantity?: number;
  subscription: string;
  tax_rates?: Array<TaxRate> | null;
}

export interface SubscriptionItemBillingThresholds {
  usage_gte?: number | null;
}

export interface SubscriptionPendingInvoiceItemInterval {
  interval: 'day' | 'month' | 'week' | 'year';
  interval_count: number;
}

/**
  *A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.
  * 
  * Related guide: [Subscription Schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
 */
export interface SubscriptionSchedule {
  canceled_at?: number | null;
  completed_at?: number | null;
  created: number;
  current_phase?: any | null;
  customer: any;
  subscription_schedules_resource_default_settings?: SubscriptionSchedulesResourceDefaultSettings;
  end_behavior: 'cancel' | 'none' | 'release' | 'renew';
  id: string;
  livemode: boolean;
  metadata?: any | null;
  object: 'subscription_schedule';
  phases: Array<SubscriptionSchedulePhaseConfiguration>;
  released_at?: number | null;
  released_subscription?: string | null;
  status: 'active' | 'canceled' | 'completed' | 'not_started' | 'released';
  subscription?: any | null;
}

/**
  *An Add Invoice Item describes the prices and quantities that will be added as pending invoice items when entering a phase.
 */
export interface SubscriptionScheduleAddInvoiceItem {
  price: any;
  quantity?: number | null;
}

/**
  *A phase item describes the price and quantity of a phase.
 */
export interface SubscriptionScheduleConfigurationItem {
  billing_thresholds?: any | null;
  plan: any;
  price: any;
  quantity?: number | null;
  tax_rates?: Array<TaxRate> | null;
}

export interface SubscriptionScheduleCurrentPhase {
  end_date: number;
  start_date: number;
}

/**
  *A phase describes the plans, coupon, and trialing status of a subscription for a predefined time period.
 */
export interface SubscriptionSchedulePhaseConfiguration {
  add_invoice_items: Array<SubscriptionScheduleAddInvoiceItem>;
  application_fee_percent?: number | null;
  billing_cycle_anchor?: 'automatic' | 'phase_start' | null;
  billing_thresholds?: any | null;
  collection_method?: 'charge_automatically' | 'send_invoice' | null;
  coupon?: any | null;
  default_payment_method?: any | null;
  default_tax_rates?: Array<TaxRate> | null;
  end_date: number;
  invoice_settings?: any | null;
  plans: Array<SubscriptionScheduleConfigurationItem>;
  proration_behavior?: 'always_invoice' | 'create_prorations' | 'none' | null;
  start_date: number;
  tax_percent?: number | null;
  transfer_data?: any | null;
  trial_end?: number | null;
}

export interface SubscriptionSchedulesResourceDefaultSettings {
  billing_cycle_anchor: 'automatic' | 'phase_start';
  billing_thresholds?: any | null;
  collection_method?: 'charge_automatically' | 'send_invoice' | null;
  default_payment_method?: any | null;
  invoice_settings?: any | null;
  transfer_data?: any | null;
}

export interface SubscriptionTransferData {
  amount_percent?: number | null;
  destination: any;
}

/**
  *The Pause Collection settings determine how we will pause collection for this subscription and for how long the subscription
  * should be paused.
 */
export interface SubscriptionsResourcePauseCollection {
  behavior: 'keep_as_draft' | 'mark_uncollectible' | 'void';
  resumes_at?: number | null;
}

/**
  *Pending Updates store the changes pending from a previous update that will be applied
  * to the Subscription upon successful payment.
 */
export interface SubscriptionsResourcePendingUpdate {
  billing_cycle_anchor?: number | null;
  expires_at: number;
  subscription_items?: Array<SubscriptionItem> | null;
  trial_end?: number | null;
  trial_from_plan?: boolean | null;
}

export interface TaxDeductedAtSource {
  id: string;
  object: 'tax_deducted_at_source';
  period_end: number;
  period_start: number;
  tax_deduction_account_number: string;
}

/**
  *You can add one or multiple tax IDs to a [customer](https://stripe.com/docs/api/customers).
  * A customer's tax IDs are displayed on invoices and credit notes issued for the customer.
  * 
  * Related guide: [Customer Tax Identification Numbers](https://stripe.com/docs/billing/taxes/tax-ids).
 */
export interface TaxId {
  country?: string | null;
  created: number;
  customer?: any | null;
  id: string;
  livemode: boolean;
  object: 'tax_id';
  type: 'ae_trn' | 'au_abn' | 'br_cnpj' | 'br_cpf' | 'ca_bn' | 'ca_qst' | 'ch_vat' | 'cl_tin' | 'es_cif' | 'eu_vat' | 'hk_br' | 'id_npwp' | 'in_gst' | 'jp_cn' | 'kr_brn' | 'li_uid' | 'mx_rfc' | 'my_frp' | 'my_itn' | 'my_sst' | 'no_vat' | 'nz_gst' | 'ru_inn' | 'sa_vat' | 'sg_gst' | 'sg_uen' | 'th_vat' | 'tw_vat' | 'unknown' | 'us_ein' | 'za_vat';
  value: string;
  verification?: any | null;
}

export interface TaxIdVerification {
  status: 'pending' | 'unavailable' | 'unverified' | 'verified';
  verified_address?: string | null;
  verified_name?: string | null;
}

/**
  *Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
  * 
  * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
 */
export interface TaxRate {
  active: boolean;
  created: number;
  description?: string | null;
  display_name: string;
  id: string;
  inclusive: boolean;
  jurisdiction?: string | null;
  livemode: boolean;
  metadata: any;
  object: 'tax_rate';
  percentage: number;
}

/**
  *A Connection Token is used by the Stripe Terminal SDK to connect to a reader.
  * 
  * Related guide: [Fleet Management](https://stripe.com/docs/terminal/readers/fleet-management#create).
 */
export interface TerminalConnectionToken {
  location?: string;
  object: 'terminal.connection_token';
  secret: string;
}

/**
  *A Location represents a grouping of readers.
  * 
  * Related guide: [Fleet Management](https://stripe.com/docs/terminal/readers/fleet-management#create).
 */
export interface TerminalLocation {
  address: Address;
  display_name: string;
  id: string;
  livemode: boolean;
  metadata: any;
  object: 'terminal.location';
}

/**
  *A Reader represents a physical device for accepting payment details.
  * 
  * Related guide: [Connecting to a Reader](https://stripe.com/docs/terminal/readers/connecting).
 */
export interface TerminalReader {
  device_sw_version?: string | null;
  device_type: 'bbpos_chipper2x' | 'verifone_P400';
  id: string;
  ip_address?: string | null;
  label: string;
  livemode: boolean;
  location?: string | null;
  metadata: any;
  object: 'terminal.reader';
  serial_number: string;
  status?: string | null;
}

/**
  *Cardholder authentication via 3D Secure is initiated by creating a `3D Secure`
  * object. Once the object has been created, you can use it to authenticate the
  * cardholder and create a charge.
 */
export interface ThreeDSecure {
  amount: number;
  authenticated: boolean;
  card: Card;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  object: 'three_d_secure';
  redirect_url?: string | null;
  status: string;
}

export interface ThreeDSecureDetails {
  authenticated?: boolean;
  authentication_flow?: 'challenge' | 'frictionless' | null;
  result: 'attempt_acknowledged' | 'authenticated' | 'failed' | 'not_supported' | 'processing_error';
  result_reason?: 'abandoned' | 'bypassed' | 'canceled' | 'card_not_enrolled' | 'network_not_supported' | 'protocol_error' | 'rejected' | null;
  succeeded?: boolean;
  version: '1.0.2' | '2.1.0' | '2.2.0';
}

export interface ThreeDSecureUsage {
  supported: boolean;
}

/**
  *Tokenization is the process Stripe uses to collect sensitive card or bank
  * account details, or personally identifiable information (PII), directly from
  * your customers in a secure manner. A token representing this information is
  * returned to your server to use. You should use our
  * [recommended payments integrations](https://stripe.com/docs/payments) to perform this process
  * client-side. This ensures that no sensitive card data touches your server,
  * and allows your integration to operate in a PCI-compliant way.
  * 
  * If you cannot use client-side tokenization, you can also create tokens using
  * the API with either your publishable or secret API key. Keep in mind that if
  * your integration uses this method, you are responsible for any PCI compliance
  * that may be required, and you must keep your secret API key safe. Unlike with
  * client-side tokenization, your customer's information is not sent directly to
  * Stripe, so we cannot determine how it is handled or stored.
  * 
  * Tokens cannot be stored or used more than once. To store card or bank account
  * information for later use, you can create [Customer](https://stripe.com/docs/api#customers)
  * objects or [Custom accounts](https://stripe.com/docs/api#external_accounts). Note that
  * [Radar](https://stripe.com/docs/radar), our integrated solution for automatic fraud protection,
  * supports only integrations that use client-side tokenization.
  * 
  * Related guide: [Accept a payment](https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token)
 */
export interface Token {
  bank_account?: BankAccount;
  card?: Card;
  client_ip?: string | null;
  created: number;
  id: string;
  livemode: boolean;
  object: 'token';
  type: string;
  used: boolean;
}

/**
  *To top up your Stripe balance, you create a top-up object. You can retrieve
  * individual top-ups, as well as list all top-ups. Top-ups are identified by a
  * unique, random ID.
  * 
  * Related guide: [Topping Up your Platform Account](https://stripe.com/docs/connect/top-ups).
 */
export interface Topup {
  amount: number;
  balance_transaction?: any | null;
  created: number;
  currency: string;
  description?: string | null;
  expected_availability_date?: number | null;
  failure_code?: string | null;
  failure_message?: string | null;
  id: string;
  livemode: boolean;
  metadata: any;
  object: 'topup';
  source: Source;
  statement_descriptor?: string | null;
  status: 'canceled' | 'failed' | 'pending' | 'reversed' | 'succeeded';
  transfer_group?: string | null;
}

/**
  *A `Transfer` object is created when you move funds between Stripe accounts as
  * part of Connect.
  * 
  * Before April 6, 2017, transfers also represented movement of funds from a
  * Stripe account to a card or bank account. This behavior has since been split
  * out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more
  * information, read about the
  * [transfer/payout split](https://stripe.com/docs/transfer-payout-split).
  * 
  * Related guide: [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers).
 */
export interface Transfer {
  amount: number;
  amount_reversed: number;
  balance_transaction?: any | null;
  created: number;
  currency: string;
  description?: string | null;
  destination?: any | null;
  destination_payment?: any;
  id: string;
  livemode: boolean;
  metadata: any;
  object: 'transfer';
  reversals: any;
  reversed: boolean;
  source_transaction?: any | null;
  source_type?: string | null;
  transfer_group?: string | null;
}

export interface TransferData {
  amount?: number;
  destination: any;
}

/**
  *[Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a
  * connected account, either entirely or partially, and can also specify whether
  * to refund any related application fees. Transfer reversals add to the
  * platform's balance and subtract from the destination account's balance.
  * 
  * Reversing a transfer that was made for a [destination
  * charge](/docs/connect/destination-charges) is allowed only up to the amount of
  * the charge. It is possible to reverse a
  * [transfer_group](https://stripe.com/docs/connect/charges-transfers#transfer-options)
  * transfer only if the destination account has enough balance to cover the
  * reversal.
  * 
  * Related guide: [Reversing Transfers](https://stripe.com/docs/connect/charges-transfers#reversing-transfers).
 */
export interface TransferReversal {
  amount: number;
  balance_transaction?: any | null;
  created: number;
  currency: string;
  destination_payment_refund?: any | null;
  id: string;
  metadata: any;
  object: 'transfer_reversal';
  source_refund?: any | null;
  transfer: any;
}

export interface TransferSchedule {
  delay_days: number;
  interval: string;
  monthly_anchor?: number;
  weekly_anchor?: string;
}

export interface TransformQuantity {
  divide_by: number;
  round: 'down' | 'up';
}

export interface TransformUsage {
  divide_by: number;
  round: 'down' | 'up';
}

/**
  *Usage records allow you to report customer usage and metrics to Stripe for
  * metered billing of subscription prices.
  * 
  * Related guide: [Metered Billing](https://stripe.com/docs/billing/subscriptions/metered-billing).
 */
export interface UsageRecord {
  id: string;
  livemode: boolean;
  object: 'usage_record';
  quantity: number;
  subscription_item: string;
  timestamp: number;
}

export interface UsageRecordSummary {
  id: string;
  invoice?: string | null;
  livemode: boolean;
  object: 'usage_record_summary';
  period: Period;
  subscription_item: string;
  total_usage: number;
}

/**
  *You can configure [webhook endpoints](https://stripe.com/docs/webhooks/) via the API to be
  * notified about events that happen in your Stripe account or connected
  * accounts.
  * 
  * Most users configure webhooks from [the dashboard](https://dashboard.stripe.com/webhooks), which provides a user interface for registering and testing your webhook endpoints.
  * 
  * Related guide: [Setting up Webhooks](https://stripe.com/docs/webhooks/configure).
 */
export interface WebhookEndpoint {
  api_version?: string | null;
  application?: string | null;
  created: number;
  description?: string | null;
  enabled_events: Array<string>;
  id: string;
  livemode: boolean;
  metadata: any;
  object: 'webhook_endpoint';
  secret?: string;
  status: string;
  url: string;
}

