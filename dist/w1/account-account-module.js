(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n  <p>Use the form below to change your password.</p>\n\n  <div fxLayout=\"row\">\n\n    <div fxFlex=\"40%\" fxFlex.md=\"60%\" fxFlex.sm=\"50%\" fxFlex.xs=\"100%\">\n\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" [type]=\"hideCurrentPassword ? 'password' : 'text'\"\n          autocomplete=\"current-password\">\n        <mat-icon matSuffix (click)=\"hideCurrentPassword = !hideCurrentPassword\">\n          {{hideCurrentPassword ? 'visibility' : 'visibility_off'}}\n        </mat-icon>\n\n        <mat-error *ngIf=\"form.controls['currentPassword'].hasError('required')\">\n          Please enter a your current password\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" [type]=\"hideNewPassword ? 'password' : 'text'\" autocomplete=\"new-password\">\n        <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\">\n          {{hideNewPassword ? 'visibility' : 'visibility_off'}}\n        </mat-icon>\n\n        <mat-error *ngIf=\"form.controls['newPassword'].hasError('required')\">\n          Please enter a new password\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Confirm New Password\" formControlName=\"newPasswordConfirm\" [type]=\"hideNewPassword ? 'password' : 'text'\"\n          autocomplete=\"new-password\">\n        <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\">\n          {{hideNewPassword ? 'visibility' : 'visibility_off'}}\n        </mat-icon>\n\n        <mat-error *ngIf=\"form.controls['newPasswordConfirm'].hasError('required')\">\n          Please confirm your new password\n        </mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\" [disabled]=\"form.invalid || disableSubmit\" (click)=\"changePassword()\">Save</button>\n\n    </div>\n\n  </div>\n\n</form>\n\n<!-- <div class=\"password-rules\" fxFlex=\"65%\" fxFlex.sm=\"90%\" fxFlex.xs=\"95%\">\n    Password rules:\n    <mat-list>\n      <mat-list-item>\n        Must be at least 6 characters\n      </mat-list-item>\n\n      <mat-list-item>\n        Must contain at least one non alphanumeric character\n      </mat-list-item>\n\n      <mat-list-item>\n        Must contain at least one lowercase ('a'-'z')\n      </mat-list-item>\n\n      <mat-list-item>\n        Must contain at least one uppercase ('A'-'Z')\n      </mat-list-item>\n    </mat-list>\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile-details/profile-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile-details/profile-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-card\">\n  <img src=\"assets/user.png\" [alt]=\"fullName\">\n\n  <h2 class=\"title\">\n    {{fullName}}\n  </h2>\n\n  <label>\n    {{alias}}\n  </label>\n\n  <label>\n    {{email}}\n  </label>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n\n  <div fxFlex=\"95%\">\n\n    <mat-card>\n      <mat-card-content>\n        <h2>My Profile</h2>\n\n        <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\n\n          <div fxFlex=\"30%\" fxFlex.sm=\"95%\" fxFlex.xs=\"95%\">\n            <app-profile-details></app-profile-details>\n          </div>\n\n          <div fxFlex></div>\n\n          <div fxFlex=\"65%\" fxFlex.sm=\"95%\" fxFlex.xs=\"950%\">\n\n\n            <mat-tab-group>\n              <mat-tab label=\"Change Password\">\n                <app-change-password></app-change-password>\n              </mat-tab>\n            </mat-tab-group>\n\n\n          </div>\n\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>");

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");





var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/account/change-password/change-password.component.ts");
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-details/profile-details.component */ "./src/app/account/profile-details/profile-details.component.ts");








var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"]
            ],
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"], _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailsComponent"]],
            exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/change-password/change-password.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".password-rules .mat-divider {\n    position: unset !important;\n}\n.container{\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N3b3JkLXJ1bGVzIC5tYXQtZGl2aWRlciB7XG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/change-password/change-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/services/spinner.service */ "./src/app/core/services/spinner.service.ts");







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService, logger, spinnerService, notificationService) {
        this.authService = authService;
        this.logger = logger;
        this.spinnerService = spinnerService;
        this.notificationService = notificationService;
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newPasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.form.get('currentPassword').valueChanges
            .subscribe(function (val) { _this.currentPassword = val; });
        this.form.get('newPassword').valueChanges
            .subscribe(function (val) { _this.newPassword = val; });
        this.form.get('newPasswordConfirm').valueChanges
            .subscribe(function (val) { _this.newPasswordConfirm = val; });
        this.spinnerService.visibility.subscribe(function (value) {
            _this.disableSubmit = value;
        });
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.newPassword !== this.newPasswordConfirm) {
            this.notificationService.openSnackBar('New passwords do not match.');
            return;
        }
        var email = this.authService.getCurrentUser().email;
        this.authService.changePassword(email, this.currentPassword, this.newPassword)
            .subscribe(function (data) {
            _this.logger.info("User " + email + " changed password.");
            _this.form.reset();
            _this.notificationService.openSnackBar('Your password has been changed.');
        }, function (error) {
            _this.notificationService.openSnackBar(error.error);
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
        { type: _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-change-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/account/change-password/change-password.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
            _core_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/account/profile-details/profile-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/account/profile-details/profile-details.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-card {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wcm9maWxlLWRldGFpbHMvcHJvZmlsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3Byb2ZpbGUtZGV0YWlscy9wcm9maWxlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/profile-details/profile-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/profile-details/profile-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");



var ProfileDetailsComponent = /** @class */ (function () {
    function ProfileDetailsComponent(authService) {
        this.authService = authService;
    }
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        this.fullName = this.authService.getCurrentUser().fullName;
        this.email = this.authService.getCurrentUser().email;
    };
    ProfileDetailsComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    ProfileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile-details/profile-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-details.component.css */ "./src/app/account/profile-details/profile-details.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/account/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/account/profile/profile.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/account/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(titleService) {
        this.titleService = titleService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('angular-material-template - Profile');
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/account/profile/profile.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map