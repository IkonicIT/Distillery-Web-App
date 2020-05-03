import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgGridModule } from 'ag-grid-angular';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatDialogModule, MatSidenavModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { NgxPermissionsModule } from 'ngx-permissions';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import { IndentComponent } from './modules/indent/indent.component';
import { StockComponent } from './modules/stock/stock.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { CustomgridComponent } from './custom/customgrid/customgrid.component';
import { PriceListComponent } from './modules/price-list/price-list.component';
import { LicenseProfilesComponent } from './modules/license-profiles/license-profiles.component';
import { AlertsComponent } from './modules/alerts/alerts.component';
import { FeedbackComponent } from './modules/feedback/feedback.component';
import { FeaturesComponent } from './features/features.component';
import { AppConfigService } from './services/app.config.service';
import { HttpService } from './services/http.service';
import { HttpInterceptorService } from './services/httpinterceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialoguePopupComponent } from './custom/dialogue-popup/dialogue-popup.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EligibilityComponent } from './modules/eligibility/eligibility.component';
import { ProcessfeeComponent } from './modules/processfee/processfee.component';
import { SupplierwiseComponent } from './modules/supplierwise/supplierwise.component';
import { PenalityDetailsComponent } from './modules/penality-details/penality-details.component';
import { ConsolidatePaymentComponent } from './modules/consolidate-payment/consolidate-payment.component';
import { GnrsupplierPaymentComponent } from './modules/gnrsupplier-payment/gnrsupplier-payment.component';
import { MissupplierPaymentComponent } from './modules/missupplier-payment/missupplier-payment.component';
import { PenalityReportComponent } from './modules/penality-report/penality-report.component';
import { GrnProcessingfeeComponent } from './modules/grn-processingfee/grn-processingfee.component';
import { TransactionRollbackComponent } from './modules/transaction-rollback/transaction-rollback.component';
import { TransactionComponent } from './modules/transaction/transaction.component';
import { SupplierPaymentComponent } from './modules/supplier-payment/supplier-payment.component';
import { DateFilterPipe } from './modules/indent/date-filter.pipe';
import { DatePipe } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './services/loader.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { SpiritHomeComponent } from './modules/spirit/spirit-home/spirit-home.component';
import { SpiritProcurementComponent } from './modules/spirit/spirit-procurement/spirit-procurement.component';
import { SpiritPrintApprovedComponent } from './modules/spirit/spirit-print-approved/spirit-print-approved.component';
import { SpiritReceiptsComponent } from './modules/spirit/spirit-receipts/spirit-receipts.component';
import { LabHomeComponent } from './modules/lab/lab-home/lab-home.component';
import { LabSamplesComponent } from './modules/lab/lab-samples/lab-samples.component';
import { LabFinishedComponent } from './modules/lab/lab-finished/lab-finished.component';
import { LabReportsComponent } from './modules/lab/lab-reports/lab-reports.component';
import { LabBatchDeactivationComponent } from './modules/lab/lab-batch-deactivation/lab-batch-deactivation.component';
import { HologramHomeComponent } from './modules/hologram/hologram-home/hologram-home.component';
import { HologramDailyIndentComponent } from './modules/hologram/hologram-daily-indent/hologram-daily-indent.component';
import { HologramPurchaseIndentComponent } from './modules/hologram/hologram-purchase-indent/hologram-purchase-indent.component';
import { HologramUsageComponent } from './modules/hologram/hologram-usage/hologram-usage.component';
import { HologramInventoryComponent } from './modules/hologram/hologram-inventory/hologram-inventory.component';
import { HologramDamageComponent } from './modules/hologram/hologram-damage/hologram-damage.component';
import { HologramVerificationComponent } from './modules/hologram/hologram-verification/hologram-verification.component';
import { LabBatchDeactivationStatusComponent } from './modules/lab/lab-batch-deactivation-status/lab-batch-deactivation-status.component';
import { LabSampleFormSavedComponent } from './modules/lab/lab-sample-form-saved/lab-sample-form-saved.component';
import { LabSampleForwardComponent } from './modules/lab/lab-sample-forward/lab-sample-forward.component';
import { LabSampleStatusWindowComponent } from './modules/lab/lab-sample-status-window/lab-sample-status-window.component';
import { LabSampleFormComponent } from './modules/lab/lab-sample-form/lab-sample-form.component';
import { SpiritRequestComponent } from './modules/spirit/spirit-request/spirit-request.component';
import { HologramDailyIndentCheckInventoryComponent } from './modules/hologram/hologram-daily-indent-check-inventory/hologram-daily-indent-check-inventory.component';
import { HologramDailyIndentCheckInventoryAllocationComponent } from './modules/hologram/hologram-daily-indent-check-inventory-allocation/hologram-daily-indent-check-inventory-allocation.component';
import { HologramDailyIndentFormComponent } from './modules/hologram/hologram-daily-indent-form/hologram-daily-indent-form.component';
import { HologramDailyIndentFormSavedComponent } from './modules/hologram/hologram-daily-indent-form-saved/hologram-daily-indent-form-saved.component';
import { HologramIndentPurchaseStatusForwardedFormComponent } from './modules/hologram/hologram-indent-purchase-status-forwarded-form/hologram-indent-purchase-status-forwarded-form.component';
import { HologramPurchaseIndentFormComponent } from './modules/hologram/hologram-purchase-indent-form/hologram-purchase-indent-form.component';
import { HologramPurchaseIndentFormSavedComponent } from './modules/hologram/hologram-purchase-indent-form-saved/hologram-purchase-indent-form-saved.component';
import { HologramPurchaseIndentStatusViewComponent } from './modules/hologram/hologram-purchase-indent-status-view/hologram-purchase-indent-status-view.component';
import { HologramPurchaseIndentStatusViewForwardButtonComponent } from './modules/hologram/hologram-purchase-indent-status-view-forward-button/hologram-purchase-indent-status-view-forward-button.component';
import { HologramScanCodeComponent } from './modules/hologram/hologram-scan-code/hologram-scan-code.component';
import { SpiritIndentFormComponent } from './modules/spirit/spirit-indent-form/spirit-indent-form.component';
import { SpiritForwardComponent } from './modules/spirit/spirit-forward/spirit-forward.component';
import { SpiritRefernceComponent } from './modules/spirit/spirit-refernce/spirit-refernce.component';
import { SpiritGenerateReceiptComponent } from './modules/spirit/spirit-generate-receipt/spirit-generate-receipt.component';
import { SpiritUnloadComponent } from './modules/spirit/spirit-unload/spirit-unload.component';
import { SpiritBlendStockComponent } from './modules/spirit/spirit-blend-stock/spirit-blend-stock.component';
import { SpiritBottlingComponent } from './modules/spirit/spirit-bottling/spirit-bottling.component';
import { MyProfileComponent } from './modules/my-profile/my-profile.component';
import { ChangePasswordComponent } from './modules/change-password/change-password.component';
import { ExciseDutiesComponent } from './modules/excise-duty/excise-duties/excise-duties.component';
import { ExiseRemitanceComponent } from './modules/excise-duty/exise-remitance/exise-remitance.component';
import { ExiseHomeComponent } from './modules/excise-duty/exise-home/exise-home.component';
import { ExiseRemitanceFormComponent } from './modules/excise-duty/exise-remitance-form/exise-remitance-form.component';
import { ExiseDepartmentComponent } from './modules/excise-duty/exise-department/exise-department.component';

//production components

import { ProductionComponent } from './modules/production/production.component';
import { ProductsComponent } from './modules/production/products/products.component';
import { ProductionLineComponent } from './modules/production/production-line/production-line.component';

import { ProductionLineAllocationComponent } from './modules/production/production-line-allocation/production-line-allocation.component';

import { ProductionStartComponent } from './modules/production/production-start/production-start.component';
import { ProductsListRefreshedComponent } from './modules/production/products-list-refreshed/products-list-refreshed.component';
import { ProductionLineFormComponent } from './modules/production/production-line-form/production-line-form.component';
import { ProductionLineInformationComponent } from './modules/production/production-line-information/production-line-information.component';
import { ProductionLinePreviewComponent } from './modules/production/production-line-preview/production-line-preview.component';
import { ProductionLineEditBatchComponent } from './modules/production/production-line-edit-batch/production-line-edit-batch.component';
import { ProductionLineEditBatchQuantityComponent } from './modules/production/production-line-edit-batch-quantity/production-line-edit-batch-quantity.component';
import { ProductionLineEditBatchQuantitySuccessComponent } from './modules/production/production-line-edit-batch-quantity-success/production-line-edit-batch-quantity-success.component';
import { ProductionReportComponent } from './modules/production/production-report/production-report.component';
import { ManulaProductionComponent } from './modules/production/manula-production/manula-production.component';
import { ManualProductionLineInformatonComponent } from './modules/production/manual-production-line-informaton/manual-production-line-informaton.component';
import { ManualProductionCaseAssociationComponent } from './modules/production/manual-production-case-association/manual-production-case-association.component';
import { ManualProductionCaseAssociationPreviewComponent } from './modules/production/manual-production-case-association-preview/manual-production-case-association-preview.component';
import { ManualProductionUploadSpoolComponent } from './modules/production/manual-production-upload-spool/manual-production-upload-spool.component';
import { DistHeaderComponent } from './common/dist-header/dist-header.component';
import { LocalStoreService } from './services/common/local-store.service';
import { DistFooterComponent } from './common/dist-footer/dist-footer.component';
import { CsdComponent } from './modules/csd/csd.component';
import { CsdStatusComponent } from './modules/csd/csd-status/csd-status.component';
import { CsdReportComponent } from './modules/csd/csd-report/csd-report.component';
import { CsdDetailsComponent } from './modules/csd/csd-details/csd-details.component';
import { DepotHomeComponent } from './modules/inter-depot/depot-home/depot-home.component';
import { DepotStatusComponent } from './modules/inter-depot/depot-status/depot-status.component';
import { DepotTransferComponent } from './modules/inter-depot/depot-transfer/depot-transfer.component';
import { DepotTransferIndentComponent } from './modules/inter-depot/depot-transfer-indent/depot-transfer-indent.component';
import { DepotTransferLocalComponent } from './modules/inter-depot/depot-transfer-local/depot-transfer-local.component';
import { ShipmentComponent } from './modules/shipment/shipment.component';
import { ShipmentRouteComponent } from './modules/shipment/shipment-route/shipment-route.component';
import { ShipmentRouteAddedComponent } from './modules/shipment/shipment-route-added/shipment-route-added.component';
import { ShipmentOfsComponent } from './modules/shipment/shipment-ofs/shipment-ofs.component';
import { ShipmentRouterComponent } from './modules/shipment/shipment-router/shipment-router.component';
import { ShipmentOfsStatusComponent } from './modules/shipment/shipment-ofs-status/shipment-ofs-status.component';
import { ShipmentShipmentsComponent } from './modules/shipment/shipment-shipments/shipment-shipments.component';
import { ShipmentTransportPermitRequestComponent } from './modules/shipment/shipment-transport-permit-request/shipment-transport-permit-request.component';
import { ShipmentTransportOfsComponent } from './modules/shipment/shipment-transport-ofs/shipment-transport-ofs.component';
import { ShipmentTransportOfsSaveComponent } from './modules/shipment/shipment-transport-ofs-save/shipment-transport-ofs-save.component';
import { ShipmentTransportOfsSavedTableComponent } from './modules/shipment/shipment-transport-ofs-saved-table/shipment-transport-ofs-saved-table.component';
import { ShipmentTransportOfsSavedTableSavedComponent } from './modules/shipment/shipment-transport-ofs-saved-table-saved/shipment-transport-ofs-saved-table-saved.component';
import { ShipmentChallanSavedComponent } from './modules/shipment/shipment-challan-saved/shipment-challan-saved.component';
import { ShipmentTpGenerationComponent } from './modules/shipment/shipment-tp-generation/shipment-tp-generation.component';
import { ShipmentEditComponent } from './modules/shipment/shipment-edit/shipment-edit.component';
import { ShipmentEditPreviewComponent } from './modules/shipment/shipment-edit-preview/shipment-edit-preview.component';
import { ShipmentEditPreviewSaveComponent } from './modules/shipment/shipment-edit-preview-save/shipment-edit-preview-save.component';
import { ShipmentGenerateListComponent } from './modules/shipment/shipment-generate-list/shipment-generate-list.component';
import { ShipmentGrnComponent } from './modules/shipment/shipment-grn/shipment-grn.component';
import { ShipmentEvcComponent } from './modules/shipment/shipment-evc/shipment-evc.component';
import { ExportComponent } from './modules/export/export.component';
import { ExportExportComponent } from './modules/export/export-export/export-export.component';
import { AddChallanComponent } from './modules/export/add-challan/add-challan.component';
import { ChallanInformationComponent } from './modules/export/challan-information/challan-information.component';
import { ChallanInformationSavedComponent } from './modules/export/challan-information-saved/challan-information-saved.component';
import { ExportIndentExportComponent } from './modules/export/export-indent-export/export-indent-export.component';
import { ExportIndentExportSaveComponent } from './modules/export/export-indent-export-save/export-indent-export-save.component';
import { ExportStatusIndentComponent } from './modules/export/export-status-indent/export-status-indent.component';
import { DashboardHomeComponent } from './modules/dashboard/dashboard-home/dashboard-home.component';
import { ApbclComponent } from './modules/users/apbcl/apbcl.component';
import { DepotComponent } from './modules/users/depot/depot.component';
import { RetailersComponent } from './modules/users/retailers/retailers.component';
import { UserHomeComponent } from './modules/users/user-home/user-home.component';
import { BeerStockComponent } from './modules/distillery/beer-stock/beer-stock.component';
import { OfsComponent } from './modules/distillery/ofs/ofs.component';
import { RouteComponent } from './modules/distillery/route/route.component';
import { DistilleryHomeComponent } from './modules/distillery/distillery-home/distillery-home.component';
import { DistilleryProductsComponent } from './modules/distillery/distillery-products/distillery-products.component';
import { DistilleryStockComponent } from './modules/distillery/distillery-stock/distillery-stock.component';
import { HologramDistilleryComponent } from './modules/hologram/hologram-distillery/hologram-distillery.component';
import { HologramDepotComponent } from './modules/hologram/hologram-depot/hologram-depot.component';
import { ShipmentDistilleryComponent } from './modules/shipment/shipment-distillery/shipment-distillery.component';
import { ShipmentDepotComponent } from './modules/shipment/shipment-depot/shipment-depot.component';
import { ShipmentRevalidationComponent } from './modules/shipment/shipment-revalidation/shipment-revalidation.component';
import { DepotTransferSupplierComponent } from './modules/inter-depot/depot-transfer-supplier/depot-transfer-supplier.component';
import { DepotLocalSupplierComponent } from './modules/inter-depot/depot-local-supplier/depot-local-supplier.component';
import { ImportHomeComponent } from './modules/import/import-home/import-home.component';
import { ImportShipmentComponent } from './modules/import/import-shipment/import-shipment.component';
import { ProductsProductsComponent } from './modules/products/products-products/products-products.component';
import { ProductsBrandComponent } from './modules/products/products-brand/products-brand.component';
import { ProductsItemcodeMappingComponent } from './modules/products/products-itemcode-mapping/products-itemcode-mapping.component';
import { ProductsHomeComponent } from './modules/products/products-home/products-home.component';
import { AlertSubscriptionComponent } from './modules/alerts/alert-subscription/alert-subscription.component';
import { AlertCircularsComponent } from './modules/alerts/alert-circulars/alert-circulars.component';
import { AlertAlertsComponent } from './modules/alerts/alert-alerts/alert-alerts.component';
import { EligbilityComponent } from './modules/legacy-files/eligbility/eligbility.component';
import { PaymentverifyComponent } from './modules/legacy-files/paymentverify/paymentverify.component';
import { FeedbackFeedbackComponent } from './modules/feedback/feedback-feedback/feedback-feedback.component';
import { FeedbackIssueLogComponent } from './modules/feedback/feedback-issue-log/feedback-issue-log.component';
import { LicenseeProfilesComponent } from './modules/licensee-profiles/licensee-profiles.component';
import { BarsComponent } from './modules/licensee-profiles/bars/bars.component';
import { ClubsComponent } from './modules/licensee-profiles/clubs/clubs.component';
import { EliteComponent } from './modules/licensee-profiles/elite/elite.component';
import { Ep1Component } from './modules/licensee-profiles/ep1/ep1.component';
import { ExpiredLicenseeComponent } from './modules/licensee-profiles/expired-licensee/expired-licensee.component';
import { F2Component } from './modules/licensee-profiles/f2/f2.component';
import { LicenseeStatusComponent } from './modules/licensee-profiles/licensee-status/licensee-status.component';
import { ShopsComponent } from './modules/licensee-profiles/shops/shops.component';
import { SuspendedRetailersComponent } from './modules/licensee-profiles/suspended-retailers/suspended-retailers.component';
import { T2Component } from './modules/licensee-profiles/t2/t2.component';
import { Td1Td2Component } from './modules/licensee-profiles/td1-td2/td1-td2.component';
import { LicenseeSalesComponent } from './modules/licensee-sales/licensee-sales.component';
import { BarSalesComponent } from './modules/licensee-sales/bar-sales/bar-sales.component';
import { ClubSalesComponent } from './modules/licensee-sales/club-sales/club-sales.component';
import { Td1SalesComponent } from './modules/licensee-sales/td1-sales/td1-sales.component';
import { Td2SalesComponent } from './modules/licensee-sales/td2-sales/td2-sales.component';
import { ShopSalesComponent } from './modules/licensee-sales/shop-sales/shop-sales.component';
import { BclOutletsComponent } from './modules/bcl-outlets/bcl-outlets.component';
import { OutletProfilesComponent } from './modules/bcl-outlets/outlet-profiles/outlet-profiles.component';
import { OutletRetunsComponent } from './modules/bcl-outlets/outlet-retuns/outlet-retuns.component';
import { OutletSalesComponent } from './modules/bcl-outlets/outlet-sales/outlet-sales.component';
import { OutletStatusComponent } from './modules/bcl-outlets/outlet-status/outlet-status.component';
import { AgedChallansComponent } from './modules/indent-management/aged-challans/aged-challans.component';
import { CancelledIdcComponent } from './modules/indent-management/cancelled-idc/cancelled-idc.component';
import { ChallansStatusComponent } from './modules/indent-management/challans-status/challans-status.component';
import { DistilleryIndentComponent } from './modules/indent-management/distillery-indent/distillery-indent.component';
import { ReconciledChallanasComponent } from './modules/indent-management/reconciled-challanas/reconciled-challanas.component';
import { RetailerCardsComponent } from './modules/indent-management/retailer-cards/retailer-cards.component';
import { RetailerChallanTransferComponent } from './modules/indent-management/retailer-challan-transfer/retailer-challan-transfer.component';
import { RetailerIndentComponent } from './modules/indent-management/retailer-indent/retailer-indent.component';
import { SpecialIndentComponent } from './modules/indent-management/special-indent/special-indent.component';
import { UploadCardsComponent } from './modules/indent-management/upload-cards/upload-cards.component';
import { BreakagesComponent } from './modules/breakages/breakages.component';
import { BreakagesDepotComponent } from './modules/breakages/breakages-depot/breakages-depot.component';
import { BeerComponent } from './modules/beer/beer.component';
import { BeerOfsEntitlementComponent } from './modules/beer/beer-ofs-entitlement/beer-ofs-entitlement.component';
import { BeerShipmentComponent } from './modules/beer/beer-shipment/beer-shipment.component';
import { IndentSpecialComponent } from './modules/beer/indent-special/indent-special.component';
import { PricingComponent } from './modules/pricing/pricing.component';
import { BasicPriceRulesComponent } from './modules/pricing/basic-price-rules/basic-price-rules.component';
import { CoomputedPricesComponent } from './modules/pricing/coomputed-prices/coomputed-prices.component';
import { MrpPerformanceComponent } from './modules/pricing/mrp-performance/mrp-performance.component';
import { OfferedBasicPriceComponent } from './modules/pricing/offered-basic-price/offered-basic-price.component';
import { OfsApprovalComponent } from './modules/pricing/ofs-approval/ofs-approval.component';
import { RecomputeComponent } from './modules/pricing/recompute/recompute.component';
import { RecomputeBrandwiseComponent } from './modules/pricing/recompute-brandwise/recompute-brandwise.component';
import { StateLevyComponent } from './modules/pricing/state-levy/state-levy.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { BeerIndentComponent } from './modules/beer/beer-indent/beer-indent.component';
import { DepotsComponent } from './modules/depots/depots.component';
import { BreakageVerificationComponent } from './modules/depots/breakage-verification/breakage-verification.component';
import { DepotsChallanComponent } from './modules/depots/depots-challan/depots-challan.component';
import { DepotsRetailerReturnsComponent } from './modules/depots/depots-retailer-returns/depots-retailer-returns.component';
import { DepotsStockComponent } from './modules/depots/depots-stock/depots-stock.component';
import { IndentExportSubmittedComponent } from './modules/export/indent-export-submitted/indent-export-submitted.component';
import { RolemanagementComponent } from './modules/rolemanagement/rolemanagement.component';
import { UsermanagementComponent } from './modules/usermanagement/usermanagement.component';
import { WalletComponent } from './modules/wallet/wallet.component';
import { WalletPopupComponent } from './modules/wallet/wallet-popup/wallet-popup.component';
import { CartComponent } from './modules/cart/cart.component';
import { CarouselComponent } from './modules/cart/carousel/carousel.component';
import { from } from 'rxjs';
import { AddRouteComponent } from './modules/add-route/add-route.component';
import { VehicleTrackingRouteComponent } from './modules/vehicle-tracking-route/vehicle-tracking-route.component';
import { AddVehicleTrackingComponent } from './modules/add-vehicle-tracking/add-vehicle-tracking.component';
import { UpdateStockComponent } from './modules/update-stock/update-stock.component';
import { AccumulationChartModule, PieSeriesService, AccumulationDataLabelService,
   AccumulationLegendService, AccumulationTooltipService } from '@syncfusion/ej2-angular-charts';
import { SpecialIfsComponent } from './modules/indent-management/special-ifs/special-ifs.component';
import { IfsComponent } from './modules/indent-management/ifs/ifs.component';
import { MatTableModule } from '@angular/material' ;
import { MatPaginatorModule } from '@angular/material';
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { ImportsComponent } from './modules/imports/imports.component';
import { ExciseComponent } from './modules/excise/excise.component';
import { VehicleTrackingComponent } from './modules/vehicle-tracking/vehicle-tracking.component';
import { WalletAmountComponent } from './modules/wallet/wallet-amount/wallet-amount.component';
import { ShortagesComponent } from './modules/breakages/shortages/shortages.component';
import { IndentManagementHomeComponent } from './modules/indent-management-home/indent-management-home.component';
import { ReportsHomeComponent } from './modules/reports-home/reports-home.component';
import { ReportsBrandWineComponent } from './reports-brand-wine/reports-brand-wine.component';
import { SidemenuService } from './services/apiServices/sidemenu.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { PaginationService } from './pagination.service';
import { NoPrivilegesComponent } from './services/common/no-privileges/no-privileges.component';
import { FiledErrorComponent } from './common/filed-error/filed-error.component';
import { SubMenuDirective } from './services/sub-menu.directive';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'manage-users', component: ManageUsersComponent, canActivate: [AuthGuard] },
  {
    path: 'login', component: LoginlayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'landing', component: LandingComponent }
    ]
  },



  {
    path: 'home', component: HomelayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: IndentComponent },
      { path: 'module/indent/:type', component: IndentComponent },
      { path : 'inter-depot', component: DepotHomeComponent },
      { path: 'transactions/supplier-payment', component: SupplierPaymentComponent },
      { path: 'vehicle-tracking', component:VehicleTrackingComponent },
      { path: 'excise', component: ExciseComponent },
      { path: 'imports', component: ImportsComponent },
      { path: 'update-stock', component: UpdateStockComponent },
      { path: 'module/transactions', component: TransactionsComponent },

      { path: 'module/stock', component: StockComponent },
      { path: 'module/price', component: PriceListComponent },
      { path: 'module/license', component: LicenseProfilesComponent },
      { path: 'module/alerts', component: AlertsComponent },
      { path: 'module/alerts/subscription', component: AlertSubscriptionComponent },
      { path: 'module/alerts/circulars', component: AlertCircularsComponent },
      { path: 'module/alerts/alert', component: AlertAlertsComponent },
      { path: 'module/feedback', component: FeedbackComponent },
      { path: 'module/feedback/feedback-feedback', component: FeedbackFeedbackComponent },
      { path: 'module/feedback/feedback-issue', component: FeedbackIssueLogComponent },
      { path: 'module/logout', component: LogoutComponent },
      { path: 'module/eligibility', component: EligibilityComponent },
      { path: 'module/processfee', component: ProcessfeeComponent },
      { path: 'module/processfee/supplierwise', component: ProcessfeeComponent },
      { path: 'module/supplierwise', component: SupplierwiseComponent },
      { path: 'module/penality-details', component: PenalityDetailsComponent },
      { path: 'module/consolidate-payment', component: ConsolidatePaymentComponent },
      { path: 'module/gnrsupplier-payment', component: GnrsupplierPaymentComponent },
      { path: 'module/missupplier-payment', component: MissupplierPaymentComponent },
      { path: 'module/penality-report', component: PenalityReportComponent },
      { path: 'module/grn-processingfee', component: GrnProcessingfeeComponent },
      { path: 'module/transaction-rollback', component: TransactionRollbackComponent },
      { path: 'module/transaction', component: TransactionComponent },
      { path: 'module/supplier-payment', component: SupplierPaymentComponent },
      { path: 'spirit', component: SpiritHomeComponent },
      { path: 'spirit/procurement', component: SpiritProcurementComponent },
      { path: 'spirit/print-approved', component: SpiritPrintApprovedComponent },
      { path: 'spirit/receipit', component: SpiritReceiptsComponent },
      { path: 'module/profile', component: MyProfileComponent },
      { path: 'lab', component: LabHomeComponent },
      { path: 'lab/batch-deactivation', component: LabBatchDeactivationComponent },
      { path: 'lab/reports', component: LabReportsComponent },
      { path: 'lab/samples', component: LabSamplesComponent },
      { path: 'lab/finished', component: LabFinishedComponent },

      { path: 'hologram', component: HologramHomeComponent },
      { path: 'hologram/indent-daily', component: HologramDailyIndentComponent },
      { path: 'hologram/damaged', component: HologramDamageComponent },
      { path: 'hologram/inventory', component: HologramInventoryComponent },
      { path: 'hologram/indent-purchase', component: HologramPurchaseIndentComponent },
      { path: 'hologram/usage', component: HologramUsageComponent },
      { path: 'hologram/vefification', component: HologramVerificationComponent },
      { path: 'hologram/distillery', component: HologramDistilleryComponent },
      { path: 'hologram/depot', component: HologramDepotComponent },

      { path: 'excise-duty', component: ExiseHomeComponent },
      { path: 'excise-duty/duties', component: ExciseDutiesComponent },
      { path: 'excise-duty/remitance', component: ExiseRemitanceComponent },
      { path: 'excise-duty/department', component: ExiseDepartmentComponent },
      // production components paths
      { path: 'production', component: ProductionComponent },
      { path: 'production/products', component: ProductsComponent },
      { path: 'production/production-line', component: ProductionLineComponent },
      { path: 'production/production-start', component: ProductionStartComponent },
      { path: 'production/production-report', component: ProductionReportComponent },
      { path: 'production/manual-production', component: ManulaProductionComponent },

      { path: 'csd', component: CsdComponent },
      { path: 'depot-home', component: DepotHomeComponent },
      { path: 'depot-home/depot-local', component: DepotTransferLocalComponent },
      { path: 'depot-home/depot-transfer', component: DepotTransferComponent },
      { path: 'depot-home/depot-transfer-supplier', component: DepotTransferSupplierComponent },
      { path: 'depot-home/depot-local-supplier', component: DepotLocalSupplierComponent },
      { path: 'shipment', component: ShipmentComponent },
      { path: 'shipment/shipment-ofs', component:ShipmentOfsComponent},
      { path: 'shipment/shipment-router', component:ShipmentRouterComponent},
      { path: 'shipment/shipment-shipments', component: ShipmentShipmentsComponent },
      { path: 'shipment/shipment-distillery', component:ShipmentDistilleryComponent },
      { path: 'shipment/shipment-depot', component:ShipmentDepotComponent },
      { path: 'shipment/shipment-revalidation', component:ShipmentRevalidationComponent },
      { path: 'export', component:ExportComponent },
      { path:'export/export-export', component:ExportExportComponent },
      { path:'export/add-challan', component:AddChallanComponent },
      { path:'dashboard', component: DashboardHomeComponent },
      { path:'user', component: UserHomeComponent },
      { path:'user/apbcl', component: ApbclComponent },
      { path:'user/depot', component: DepotComponent },
      { path: 'user/retailers', component: RetailersComponent },
      { path: 'distillery', component: DistilleryHomeComponent },
      { path: 'distillery/beer-stock', component: BeerStockComponent },
      { path: 'distillery/ofs', component: OfsComponent },
      { path: 'distillery/products', component: DistilleryProductsComponent },
      { path: 'distillery/route', component: RouteComponent },
      { path: 'distillery/stock', component: DistilleryStockComponent },
      { path: 'import', component: ImportHomeComponent },
      { path: 'import-shipment', component: ImportShipmentComponent },
      { path: 'products', component: ProductsHomeComponent },
      { path: 'products/products-brand', component: ProductsBrandComponent },
      { path: 'products/products-products', component: ProductsProductsComponent },
      { path: 'products/products-iteamcode', component: ProductsItemcodeMappingComponent },
      { path: 'paymentverify', component: PaymentverifyComponent },
      { path: 'eligbility', component: EligbilityComponent },
      { path: 'licensee-profiles', component: LicenseeProfilesComponent },
      { path: 'licensee-profiles/bars', component: BarsComponent },
      { path: 'licensee-profiles/clubs', component: ClubsComponent },
      { path: 'licensee-profiles/elite', component: EliteComponent },
      { path : 'licensee-profiles/ep1', component: Ep1Component },
      { path: 'licensee-profiles/expired-licensee', component: ExpiredLicenseeComponent },
      { path: 'licensee-profiles/f2', component:F2Component },
      { path: 'licensee-profiles/licensee-status', component:LicenseeStatusComponent },
      { path: 'licensee-profiles/shops', component: ShopsComponent },
      { path: 'licensee-profiles/suspended-retailers', component: SuspendedRetailersComponent },
      { path: 'licensee-profiles/t2', component: T2Component },
      { path: 'licensee-profiles/td1-td2', component: Td1Td2Component },
    // licensee sales
      { path: 'licensee-sales', component: LicenseeSalesComponent },
      { path: 'licensee-sales/bar-sales', component: BarSalesComponent },
      { path: 'licensee-sales/club-sales', component: ClubSalesComponent },
      { path: 'licensee-sales/td1-sales', component: Td1SalesComponent },
      { path : 'licensee-sales/td2-sales', component: Td2SalesComponent },
      { path: 'licensee-sales/shop-sales', component: ShopSalesComponent },
      { path: 'reports-home', component: ReportsHomeComponent },
      { path: 'reports-brand-wine', component: ReportsBrandWineComponent },
      // bcl-outlets COmponent
      { path: 'bcl-outlets', component: BclOutletsComponent },
      { path: 'bcl-outlets/outlet-profiles', component: OutletProfilesComponent },
      { path: 'bcl-outlets/outlet-returns', component: OutletRetunsComponent },
      { path: 'bcl-outlets/outlet-sales', component: OutletSalesComponent },
      { path: 'bcl-outlets/outlet-status', component: OutletStatusComponent },
      // Indent Management
      { path: 'indent-management', component:IndentManagementHomeComponent },
      { path: 'indent-management/aged-challans', component:AgedChallansComponent },
      { path: 'indent-management/cancelled-idc', component:CancelledIdcComponent},
      { path: 'indent-management/challan-status', component:ChallansStatusComponent },
      { path:'indent-management/distillery-indent', component:DistilleryIndentComponent },
      { path: 'indent-management/reconciled-challanas', component:ReconciledChallanasComponent },
      { path: 'indent-management/retailer-cards', component:RetailerCardsComponent },
      { path: 'indent-management/retailer-challan-transfer', component:RetailerChallanTransferComponent },
      { path: 'indent-management/retailer-indent', component:RetailerIndentComponent },
      { path: 'indent-management/special-indent', component:SpecialIndentComponent },
      { path: 'indent-management/upload-cards', component:UploadCardsComponent },
      { path: 'indent-management/special-ifs', component:SpecialIfsComponent },
      { path: 'breakages', component: BreakagesComponent },
      { path: 'breakages/brakages-depot', component: BreakagesDepotComponent },
      { path: 'breakages/shortage', component: ShortagesComponent },
      { path: 'beer', component: BeerComponent },
      { path: 'beer/beer-ofs-entitlement', component: BeerOfsEntitlementComponent },
      { path: 'beer/beer-shipment', component: BeerShipmentComponent },
      { path: 'beer/beer-indent', component: BeerIndentComponent },
      { path: 'beer/beer-indent-special', component: IndentSpecialComponent },

      // pricing
      { path: 'pricing', component: PricingComponent },
      { path: 'pricing/basic-price-rules', component: BasicPriceRulesComponent },
      { path: 'pricing/coomputed-prices', component: CoomputedPricesComponent },
      { path: 'pricing/mrp-performance', component: MrpPerformanceComponent },
      { path: 'pricing/offered-basic-price', component: OfferedBasicPriceComponent },
      { path: 'pricing/ofs-approval', component: OfsApprovalComponent },
      { path: 'pricing/recompute', component: RecomputeComponent },
      { path: 'pricing/recompute-brandwise', component: RecomputeBrandwiseComponent },
      { path: 'pricing/state-levy', component: StateLevyComponent },
      { path: 'reports', component: ReportsComponent },
      // breakages depot
      { path: 'breakages/breakages-depot', component:BreakagesDepotComponent },
      // depots components
      { path: 'depots', component: DepotsComponent },
      
      { path: 'depots/depots-breakage-verification', component: BreakageVerificationComponent },
      { path: 'depots/depots-challan', component: DepotsChallanComponent },
      { path: 'depots/depots-retailer-returns', component: DepotsRetailerReturnsComponent },
      { path: 'depots/depots-stock', component: DepotsStockComponent },
      
      { path:'rolemanagement', component:RolemanagementComponent },
      { path:'usermanagement', component:UsermanagementComponent },
      { path: 'Wallet', component: WalletComponent },
      { path: 'Wallet-amount', component: WalletAmountComponent },
      { path:'cart', component: CartComponent },
      { path:'add-route', component:AddRouteComponent },
      { path:'vehicle-tracking-route', component:VehicleTrackingRouteComponent },
      { path:'add-vehicle-tracking', component:AddVehicleTrackingComponent },
      { path:'update-stock', component:UpdateStockComponent }

      
      
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    HomeComponent,
    IndentComponent,
    StockComponent,
    LoginlayoutComponent,
    HomelayoutComponent,
    CustomgridComponent,
    PriceListComponent,
    LicenseProfilesComponent,
    AlertsComponent,
    FeedbackComponent,
    FeaturesComponent,
    DialoguePopupComponent,
    LogoutComponent,
    HeaderComponent,
    SidebarComponent,
    ForgotPasswordComponent,
    EligibilityComponent,
    ProcessfeeComponent,
    SupplierwiseComponent,
    PenalityDetailsComponent,
    ConsolidatePaymentComponent,
    GnrsupplierPaymentComponent,
    MissupplierPaymentComponent,
    PenalityReportComponent,
    GrnProcessingfeeComponent,
    TransactionRollbackComponent,
    TransactionComponent,
    SupplierPaymentComponent,
    DateFilterPipe,
    ManageUsersComponent,
    SpiritHomeComponent,
    SpiritProcurementComponent,
    SpiritReceiptsComponent,
    SpiritPrintApprovedComponent,
    LoaderComponent,
    LabHomeComponent,
    LabSamplesComponent,
    LabFinishedComponent,
    LabReportsComponent,
    LabBatchDeactivationComponent,
    HologramHomeComponent,
    HologramDailyIndentComponent,
    HologramPurchaseIndentComponent,
    HologramUsageComponent,
    HologramInventoryComponent,
    HologramDamageComponent,
    HologramVerificationComponent,
    LabBatchDeactivationStatusComponent,
    LabSampleFormSavedComponent,
    LabSampleForwardComponent,
    LabSampleStatusWindowComponent,
    LabSampleFormComponent,
    SpiritRequestComponent,
    HologramDailyIndentCheckInventoryComponent,
    HologramDailyIndentCheckInventoryAllocationComponent,
    HologramDailyIndentFormComponent,
    HologramDailyIndentFormSavedComponent,
    HologramIndentPurchaseStatusForwardedFormComponent,
    HologramPurchaseIndentFormComponent,
    HologramPurchaseIndentFormSavedComponent,
    HologramPurchaseIndentStatusViewComponent,
    HologramPurchaseIndentStatusViewForwardButtonComponent,
    HologramScanCodeComponent,
    SpiritIndentFormComponent,
    SpiritForwardComponent,
    SpiritRefernceComponent,
    SpiritGenerateReceiptComponent,
    SpiritUnloadComponent,
    SpiritBlendStockComponent,
    SpiritBottlingComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    ExciseDutiesComponent,
    ExiseRemitanceComponent,
    ExiseHomeComponent,
    ExiseRemitanceFormComponent,
    ExiseDepartmentComponent,
    // production Components
    ProductionComponent,
    ProductsComponent,
    ProductionLineComponent,
    ProductionStartComponent,

    ProductionLineAllocationComponent,

    // HologramHealFeedComponent,

    // HologramHealDeallocateComponent,
    // HologramHealFeedRefreshComponent,
    ProductsListRefreshedComponent,
    ProductionLineFormComponent,
    ProductionLineInformationComponent,
    ProductionLinePreviewComponent,
    ProductionLineEditBatchComponent,
    ProductionLineEditBatchQuantityComponent,
    ProductionLineEditBatchQuantitySuccessComponent,
    ProductionReportComponent,
    // HealDeAllocateComponent,
    // HologramHealDeAllocateSpoolComponent,
    // SpoolDeAllocationComponent,
    // SpoolDeAllocationSuccessComponent,
    ManulaProductionComponent,
    ManualProductionLineInformatonComponent,
    ManualProductionCaseAssociationComponent,
    ManualProductionCaseAssociationPreviewComponent,
    ManualProductionUploadSpoolComponent,
    DistHeaderComponent,
    DistFooterComponent,
    CsdComponent,
    CsdReportComponent,
    CsdStatusComponent,
    CsdDetailsComponent,
    DepotHomeComponent,
    DepotStatusComponent,
    DepotTransferComponent,
    DepotTransferIndentComponent,
    DepotTransferLocalComponent,
    ShipmentComponent,
    ShipmentRouteComponent,
    ShipmentRouteAddedComponent,
    ShipmentOfsComponent,
    ShipmentRouterComponent,
    ShipmentOfsStatusComponent,
    ShipmentShipmentsComponent,
    ShipmentTransportPermitRequestComponent,
    ShipmentTransportOfsComponent,
    ShipmentTransportOfsSaveComponent,
    ShipmentTransportOfsSavedTableComponent,
    ShipmentTransportOfsSavedTableSavedComponent,
    ShipmentChallanSavedComponent,
    ShipmentTpGenerationComponent,
    ShipmentEditComponent,
    ShipmentEditPreviewComponent,
    ShipmentEditPreviewSaveComponent,
    ShipmentGenerateListComponent,
    ShipmentGrnComponent,
    ShipmentEvcComponent,
    ExportComponent,
    ExportExportComponent,
    IndentExportSubmittedComponent,
    AddChallanComponent,
    ChallanInformationComponent,
    ChallanInformationSavedComponent,
    ExportIndentExportComponent,
    ExportIndentExportSaveComponent,
    ExportStatusIndentComponent,
    DashboardHomeComponent,
    ApbclComponent,
    DepotComponent,
    RetailersComponent,
    UserHomeComponent,
    BeerStockComponent,
    OfsComponent,
    RouteComponent,
    DistilleryHomeComponent,
    DistilleryProductsComponent,
    DistilleryStockComponent,
    HologramDistilleryComponent,
    HologramDepotComponent,
    ShipmentDistilleryComponent,
    ShipmentDepotComponent,
    ShipmentRevalidationComponent,
    DepotTransferSupplierComponent,
    DepotLocalSupplierComponent,
    ImportHomeComponent,
    ImportShipmentComponent,
    ProductsProductsComponent,
    ProductsBrandComponent,
    ProductsItemcodeMappingComponent,
    ProductsHomeComponent,
    AlertSubscriptionComponent,
    AlertCircularsComponent,
    AlertAlertsComponent,
    EligbilityComponent,
    PaymentverifyComponent,
    FeedbackFeedbackComponent,
    FeedbackIssueLogComponent,
    LicenseeProfilesComponent,
    BarsComponent,
    ClubsComponent,
    EliteComponent,
    Ep1Component,
    ExpiredLicenseeComponent,
    F2Component,
    LicenseeStatusComponent,
    ShopsComponent,
    SuspendedRetailersComponent,
    T2Component,
    Td1Td2Component,
    //licensee sales
    LicenseeSalesComponent,
    BarSalesComponent,
    ClubSalesComponent,
    ShopSalesComponent,
    Td1SalesComponent,
    Td2SalesComponent,
    //bcl-outlets components
    BclOutletsComponent,
    OutletProfilesComponent,
    OutletRetunsComponent,
    OutletSalesComponent,
    OutletStatusComponent,
    //indentmanagement
    AgedChallansComponent,
    CancelledIdcComponent,
    ChallansStatusComponent,
    DistilleryIndentComponent,
    ReconciledChallanasComponent,
    RetailerCardsComponent,
    RetailerChallanTransferComponent,
    RetailerIndentComponent,
    SpecialIndentComponent,
    UploadCardsComponent,
    BreakagesComponent,
    BreakagesDepotComponent,
    //beer components
    BeerComponent,
    BeerOfsEntitlementComponent,
    BeerShipmentComponent,
    BeerIndentComponent,
    IndentSpecialComponent,
    BasicPriceRulesComponent,
    CoomputedPricesComponent,
    MrpPerformanceComponent,
    OfferedBasicPriceComponent,
    OfsApprovalComponent,
    RecomputeComponent,
    RecomputeBrandwiseComponent,
    StateLevyComponent,
    PricingComponent,
    ReportsComponent,
    
    BreakageVerificationComponent,
    DepotsChallanComponent,
    DepotsRetailerReturnsComponent,
    DepotsComponent,
    DepotsStockComponent,
    RolemanagementComponent,
    UsermanagementComponent,
    WalletComponent,
    WalletPopupComponent,
    CartComponent,
    CarouselComponent,
    AddRouteComponent,
    VehicleTrackingRouteComponent,
    AddVehicleTrackingComponent,
    UpdateStockComponent,
    SpecialIfsComponent,
    IfsComponent,
    UpdateStockComponent,
    TransactionsComponent,
    ImportsComponent,
    ExciseComponent,
    VehicleTrackingComponent,
    WalletAmountComponent,
    ShortagesComponent,
    IndentManagementHomeComponent,
    ReportsHomeComponent,
    ReportsBrandWineComponent,
    NoPrivilegesComponent,
    FiledErrorComponent,
    SubMenuDirective
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatSidenavModule,
    NgbModule,
    AccumulationChartModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    AgGridModule.withComponents(null),
    CustomMaterialModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDatepickerModule, MatInputModule, MatNativeDateModule,
    FormsModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgxPermissionsModule.forRoot()
  ],
  entryComponents: [IfsComponent,ExiseRemitanceFormComponent,
    ChangePasswordComponent, SpiritBottlingComponent,
    SpiritBlendStockComponent, SpiritUnloadComponent,
    SpiritGenerateReceiptComponent, SpiritRefernceComponent,
    SpiritIndentFormComponent, SpiritRequestComponent,
    LabSampleFormComponent, LabSampleFormSavedComponent,
    LabSampleStatusWindowComponent, LabSampleForwardComponent,
    LabBatchDeactivationStatusComponent, HologramPurchaseIndentFormComponent,
    HologramPurchaseIndentFormSavedComponent,
    HologramPurchaseIndentStatusViewComponent,
    HologramPurchaseIndentStatusViewForwardButtonComponent,
    HologramIndentPurchaseStatusForwardedFormComponent,
    HologramScanCodeComponent, HologramDailyIndentFormComponent,
    HologramDailyIndentFormSavedComponent, HologramDailyIndentCheckInventoryComponent,
    HologramDailyIndentCheckInventoryAllocationComponent,
    ProductionLineAllocationComponent,

    ProductsListRefreshedComponent,
    ProductionLineFormComponent,
    ProductionLineInformationComponent,
    ProductionLinePreviewComponent,
    ProductionLineEditBatchComponent,
    ProductionLineEditBatchQuantityComponent,
    ProductionLineEditBatchQuantitySuccessComponent,

    ManualProductionCaseAssociationComponent,
    ManualProductionCaseAssociationPreviewComponent,
    ManualProductionUploadSpoolComponent,
    CsdReportComponent,
    CsdStatusComponent,
    CsdDetailsComponent,
    DepotStatusComponent,
    DepotTransferIndentComponent,
    ShipmentRouteComponent,
    ShipmentRouteAddedComponent,
    ShipmentOfsStatusComponent,
    ShipmentTransportPermitRequestComponent,
    ShipmentTransportOfsComponent,
    ShipmentTransportOfsSaveComponent,
    ShipmentTransportOfsSavedTableComponent,
    ShipmentChallanSavedComponent,
    ShipmentTpGenerationComponent,
    ShipmentEditComponent,
    ShipmentEditPreviewComponent,
    ShipmentEditPreviewSaveComponent,
    ShipmentGenerateListComponent,
    ShipmentEvcComponent,
    ShipmentGrnComponent,
    ChallanInformationComponent,
    ChallanInformationSavedComponent,
    ExportIndentExportComponent,
    ExportIndentExportSaveComponent,
    ExportStatusIndentComponent,
    IndentExportSubmittedComponent,
    WalletPopupComponent,
    FiledErrorComponent
  ],
  providers: [AppConfigService, HttpService, LocalStoreService, PaginationService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }, LoaderService,SidemenuService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    DatePipe, PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
