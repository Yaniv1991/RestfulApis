(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/companies/companies.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/companies/companies.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- <a routerLink=\"companyAddOrUpdate/add/0\" ><img src=\"..\\assets\\images\\AddButton.png\" alt=\"Add New company\"></a> -->\n  <div class=\"headdiv\">\n    <button class=\"buttonadd\" a routerLink='../companyAddOrUpdate/0'>Add New</button>\n  </div>\n  <div class=\"company\" *ngFor=\"let company of companies\">\n    <app-company [company]=\"company\"></app-company>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company-add-update/company-add-update.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company-add-update/company-add-update.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div *ngIf=\"add\" class=\"form\">\n    <form>\n      <label class=\"formlabel\" >Company Name</label><input class=\"forminput\" name=\"name\" type=\"text\" [(ngModel)]=\"company.name\">\n      <label class=\"formlabel\" for=\"email\">Email</label><input class=\"forminput\" name = \"email\" type=\"email\" [(ngModel)]=\"company.email\">\n      <label class=\"formlabel\" for=\"password\">Password</label><input class=\"forminput\" name = \"password\" type=\"password\" [(ngModel)]=\"company.password\">\n      <button type=\"submit\" class=\"submitbutton\" (click)=\"submitChanges()\">Submit</button>\n    </form>\n  </div>\n  <div *ngIf=\"!add\" class=\"wrapper\">\n      <img src=\"assets/images/Loading_Infinity.gif\" *ngIf=\"!company\">\n    <div class=\"form\" *ngIf=\"company\">\n      <form>\n        <label class=\"formlabel\" for=\"company_name\">Company Name</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"company.name\" name=\"name\">\n        <label class=\"formlabel\" for=\"email\">Email</label><input class=\"forminput\" type=\"email\" [(ngModel)]=\"company.email\" name=\"email\">\n        <label class=\"formlabel\" for=\"password\">Password</label><input class=\"forminput\" type=\"password\" [(ngModel)]=\"company.password\" name=\"password\">\n        <button type=\"submit\" class=\"submitbutton\" (click)=\"submitChanges()\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/company.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/company.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table>\n      <tr>\n        <td class=\"title\">Company id</td>\n        <td class=\"details\">{{company.id}}</td>\n      </tr>\n      <tr>\n        <td class=\"title\">Company Name</td>\n        <td class=\"details\">{{company.name}}</td>\n      </tr>\n      <tr>\n        <td class=\"title\">Email</td>\n        <td class=\"details\">{{company.email}}</td>\n      </tr>\n      \n      <tr>\n          <td><button class=\"buttonupdate\" a routerLink='{{url}}'>Update</button></td>\n          <!-- TODO: Need to decide how \"Delte\" button should work.\n                       For now did it with a \"deleteCustomer\" method in ts file. -->\n          <td><button class=\"buttondelete\" (click)=\"promptMessage()\">Delete</button></td>\n        </tr>\n    </table>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coupon-add-update/coupon-add-update.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coupon-add-update/coupon-add-update.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>coupon-add-update works!</p> -->\n<div *ngIf=\"add\" class=\"wrapper\">\n    <div class=\"form\">\n        <form>\n            <label  class=\"formlabel\" for=\"title\">Title</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"coupon.title\" name=\"title\" >\n            <label  class=\"formlabel\" for=\"message\">Message</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"coupon.message\" name=\"message\" >\n            <label  class=\"formlabel\" for=\"amount\">Stock</label><input class=\"forminput\" type=\"number\" [(ngModel)]=\"coupon.amount\" name=\"amount\">\n            <label  class=\"formlabel\" for=\"price\">Price</label><input class=\"forminput\" type=\"number\" [(ngModel)]=\"coupon.price\" name=\"price\">\n            <label  class=\"formlabel\" for=\"startdate\">Start Date</label><input class=\"forminput\" type=\"date\" [(ngModel)]=\"coupon.startDate\" name=\"startDate\">\n            <label  class=\"formlabel\" for=\"enddate\">End Date</label><input class=\"forminput\" type=\"date\" [(ngModel)]=\"coupon.endDate\" name=\"endDate\">\n            <label  class=\"formlabel\" for=\"coupontype\">Type</label>\n            <select class=\"forminput\"  [(ngModel)]=\"coupon.type\" name=\"type\">\n              <option value=\"couponType.AUTOMOBILE\">Automobile</option>\n              <option value=\"couponType.CAMPING\" >Camping</option>\n              <option value=\"couponType.COMPUTER\">Computer</option>\n              <option value=\"couponType.ELECTRICITY\">Electricity</option>\n              <option value=\"couponType.FASHION\">Fashion</option>\n              <option value=\"couponType.FOOD\">Food</option>\n              <option value=\"couponType.HEALTH\">Health</option>\n              <option value=\"couponType.MUSIC\">Music</option>\n              <option value=\"couponType.RESTURANT\">Resturant</option>\n              <option value=\"couponType.SPA\">Spa</option>\n              <option value=\"couponType.SPORTS\">Sports</option>\n              <option value=\"couponType.TRAVELING\">Traveling</option>\n            </select>\n            <label  class=\"formlabel\" for=\"image\">Image URL</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"coupon.image\" name=\"image\">\n            <button type=\"submit\" class=\"submitbutton\" (click)=\"submitChanges()\">Submit</button>\n        </form>\n      </div>\n</div>\n<div *ngIf=\"!add\" class=\"wrapper\">\n    <img src=\"assets/images/Loading_Infinity.gif\" *ngIf=\"!coupon\">\n    <div class=\"form\" *ngIf=\"coupon\">\n        <form>\n            <label  class=\"formlabel\" for=\"title\">Title</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"coupon.title\" name=\"title\" >\n            <label  class=\"formlabel\" for=\"message\">Description</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"coupon.description\" name=\"description\" >\n            <label  class=\"formlabel\" for=\"amount\">Stock</label><input class=\"forminput\" type=\"number\" [(ngModel)]=\"coupon.amount\" name=\"amount\">\n            <label  class=\"formlabel\" for=\"price\">Price</label><input class=\"forminput\" type=\"number\" [(ngModel)]=\"coupon.price\" name=\"price\">\n            <label  class=\"formlabel\" for=\"startdate\">Start Date</label><input class=\"forminput\" type=\"date\" [(ngModel)]=\"coupon.startDate\" name=\"startDate\">\n            <label  class=\"formlabel\" for=\"enddate\">End Date</label><input class=\"forminput\" type=\"date\" [(ngModel)]=\"coupon.endDate\" name=\"endDate\">\n            <label  class=\"formlabel\" for=\"coupontype\">Type</label>\n            <select class=\"forminput\"  [(ngModel)]=\"coupon.couponType\" name=\"couponType\">\n              <option value=\"couponType.AUTOMOBILE\">Automobile</option>\n              <option value=\"couponType.CAMPING\">Camping</option>\n              <option value=\"couponType.COMPUTER\">Computer</option>\n              <option value=\"couponType.ELECTRICITY\">Electricity</option>\n              <option value=\"couponType.FASHION\">Fashion</option>\n              <option value=\"couponType.FOOD\">Food</option>\n              <option value=\"couponType.HEALTH\">Health</option>\n              <option value=\"couponType.MUSIC\">Music</option>\n              <option value=\"couponType.RESTURANT\">Resturant</option>\n              <option value=\"couponType.SPA\">Spa</option>\n              <option value=\"couponType.SPORTS\">Sports</option>\n              <option value=\"couponType.TRAVELING\">Traveling</option>\n            </select >\n            <label  class=\"formlabel\" for=\"image\">Image URL</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"coupon.image\" name=\"image\">\n            <!-- TDOD (Yaniv) Add file upload mechnincs-->\n            <button type=\"submit\" class=\"submitbutton\" (click)=\"submitChanges()\">Submit</button>\n        </form>\n      </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coupon/coupon.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coupon/coupon.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"!coupon\" src = \"assets/images/Loading_Infinity.gif\">\n<div *ngIf=\"coupon\" class=\"coupon\">\n  <div class=\"container\">\n    <h3>{{coupon.title}}</h3>\n    <h4>{{coupon.category}}</h4>\n  </div>\n  <img [src]=\"coupon.image\" class=\"image\">\n  <div class=\"container\" style=\"background-color:white\">\n    <h2><b>{{coupon.price}} ILS</b></h2>\n    <p>{{coupon.description}}</p>\n  </div>\n  <div class=\"container\">\n    <p>Only&nbsp;<span class=\"promo\">{{coupon.amount}}</span>&nbsp;left in stock</p>\n    <p class=\"expire\">Expires: {{coupon.endDate}}</p>\n  </div>\n  <div *ngIf=\"isCustomer\" class=\"container\">\n    <div class=\"purchase\">\n      <button class=\"buttonpurchase\" *ngIf=\"!purchased\" (click)=\"purchaseCoupon()\">Purchase</button>\n    </div>\n  </div>\n  <div *ngIf=\"!isCustomer\" class=\"othercontainer\">\n    <table>\n      <tr>\n        <td class=\"update\">\n          <button class=\"buttonupdate\" a routerLink=\"{{url}}\">Update</button>\n          <!-- <a routerLink=\"/addOrUpdate/update/coupon/{{coupon.id}}\" class=\"update\"><img src=\"../assets/images/UpdateButton.png\" alt=\"Update\"></a> -->\n        </td>\n        <td class=\"delete\">\n          <button class=\"buttondelete\" (click)=\"promptMessage()\">Delete</button>\n          <!-- <a (click)=\"deleteCoupon()\" class=\"delete\"><img src=\"../assets/images/deleteButton.png\" alt=\"Delete\"></a> -->\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coupons/coupons.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coupons/coupons.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"!coupons\" src = \"assets/images/Loading_Infinity.gif\">\r\n\r\n<div *ngIf=\"coupons\" class=\"wrapper\">\r\n  <div class=\"headcomp\" *ngIf=\"!isCustomer\">\r\n  <table class=\"comptable\">\r\n    <tr>\r\n        <button class=\"buttonadd\" a routerLink='/couponAddOrUpdate/0'>Add New</button>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <form>\r\n          <label for=\"couponType\" class=\"formLabel\">Category</label><br>\r\n          <select [(ngModel)]=\"couponType\" class=\"forminput\" id=\"coupon_type\" name=\"couponType\">\r\n            <option value=\"ALL\" selected>All</option>\r\n            <option value=\"AUTOMOBILE\">Automobile</option>\r\n            <option value=\"CAMPING\">Camping</option>\r\n            <option value=\"COMPUTER\">Computer</option>\r\n            <option value=\"ELECTRICITY\">Electricity</option>\r\n            <option value=\"FASHION\">Fashion</option>\r\n            <option value=\"FOOD\">Food</option>\r\n            <option value=\"HEALTH\">Health</option>\r\n            <option value=\"MUSIC\">Music</option>\r\n            <option value=\"RESTURANT\">Resturant</option>\r\n            <option value=\"SPA\">Spa</option>\r\n            <option value=\"SPORT\">Sport</option>\r\n            <option value=\"TRAVELING\">Traveling</option>\r\n          </select>\r\n        </form>\r\n      </td>\r\n      <td>\r\n        <form>\r\n          <label for=\"price\" class=\"formLabel\">Max Price</label><br><input type=\"number\" class=\"forminput\" [(ngModel)]=\"price\" name=\"price\" placeholder=\"100\">\r\n        </form>\r\n      </td>\r\n      <td>\r\n        <form>\r\n          <label for=\"date\" class=\"formLabel\">End Date</label><br><input type=\"date\" class=\"forminput\" [(ngModel)]=\"endDate\" name=\"endDate\">\r\n        </form>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <button class=\"searchbutton\" (click)=\"searchByType()\">Search</button>\r\n      </td>\r\n      <td>\r\n        <button class=\"searchbutton\" (click)=\"searchByPrice()\">Search</button>\r\n      </td>\r\n      <td>\r\n        <button class=\"searchbutton\" (click)=\"searchByEndDate()\">Search</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  </div>\r\n  <div class=\"headcust\" *ngIf=\"isCustomer\">\r\n    <table class=\"custtable\">\r\n      <tr>\r\n        <td>\r\n          <form>\r\n            <label for=\"couponType\" class=\"formLabel\">Category</label><br>\r\n            <select [(ngModel)]=\"couponType\" class=\"forminput\" id=\"coupon_type\" name=\"couponType\">\r\n              <option value=\"ALL\" selected>All</option>\r\n              <option value=\"AUTOMOBILE\">Automobile</option>\r\n              <option value=\"CAMPING\">Camping</option>\r\n              <option value=\"COMPUTER\">Computer</option>\r\n              <option value=\"ELECTRICITY\">Electricity</option>\r\n              <option value=\"FASHION\">Fashion</option>\r\n              <option value=\"FOOD\">Food</option>\r\n              <option value=\"HEALTH\">Health</option>\r\n              <option value=\"MUSIC\">Music</option>\r\n              <option value=\"RESTURANT\">Resturant</option>\r\n              <option value=\"SPA\">Spa</option>\r\n              <option value=\"SPORT\">Sport</option>\r\n              <option value=\"TRAVELING\">Traveling</option>\r\n            </select>\r\n          </form>\r\n        </td>\r\n        <td>\r\n          <form>\r\n            <label for=\"price\" class=\"formLabel\">Max Price</label><br><input type=\"number\" class=\"forminput\" [(ngModel)]=\"price\" name=\"price\" placeholder=\"100\">\r\n          </form>\r\n        </td>\r\n        <td>\r\n          <form>\r\n            <label for=\"date\" class=\"formLabel\">End Date</label><br><input type=\"date\" class=\"forminput\" [(ngModel)]=\"endDate\" name=\"endDate\">\r\n          </form>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <button class=\"searchbutton\" (click)=\"searchByType()\">Search</button>\r\n        </td>\r\n        <td>\r\n          <button class=\"searchbutton\" (click)=\"searchByPrice()\">Search</button>\r\n        </td>\r\n        <td>\r\n          <button class=\"searchbutton\" (click)=\"searchByEndDate()\">Search</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"coupon\" *ngFor=\"let coupon of coupons\">\r\n    <app-coupon [coupon]=\"coupon\" [isCustomer]=\"isCustomer\" [purchased] = \"purchased\"></app-coupon>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/customer-add-update/customer-add-update.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/customer-add-update/customer-add-update.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"add\" class=\"addForm\">\n  <div class=\"form\">\n      <form>\n          <label for=\"name\" class=\"formlabel\">Name</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"customer.name\" name=\"name\">\n          <label for=\"email\" class=\"formlabel\">Email</label><input class=\"forminput\" type=\"email\" [(ngModel)]=\"customer.email\" name=\"email\">\n          <label for=\"password\" class=\"formlabel\">Password</label><input class=\"forminput\" type=\"password\" [(ngModel)]=\"customer.password\" name=\"password\">\n          <button type=\"submit\" class=\"submitbutton\" (click)=\"submitChanges()\">Submit</button>\n        </form>\n    </div>\n</div>\n<div *ngIf=\"!add\" class=\"updateForm\">\n  <img src=\"assets/images/Loading_Infinity.gif\" *ngIf=\"!customer\">\n  <div class=\"form\" *ngIf=\"customer\">\n    <form>\n      <label for=\"name\" class=\"formlabel\">Name</label><input class=\"forminput\" type=\"text\" [(ngModel)]=\"customer.name\" name=\"name\">\n      <label for=\"email\" class=\"formlabel\">Email</label><input class=\"forminput\" type=\"email\" [(ngModel)]=\"customer.email\" name=\"email\">\n      <label for=\"password\" class=\"formlabel\">Password</label><input class=\"forminput\" type=\"password\" [(ngModel)]=\"customer.password\" name=\"password\">\n      <button type=\"submit\" class=\"submitbutton\" (click)=\"submitChanges()\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/customer/customer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/customer/customer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table>\n    <tr>\n      <td class=\"title\">Customer id</td>\n      <td class=\"details\">{{customer.id}}</td>\n    </tr>\n    <tr>\n      <td class=\"title\">Name</td>\n      <td class=\"details\">{{customer.name}}</td>\n    </tr>\n    <tr>\n      <td class=\"title\">Email</td>\n      <td class=\"details\">{{customer.email}}</td>\n    </tr>\n    <tr>\n      <td><button class=\"buttonupdate\" a routerLink='{{url}}'>Update</button></td>\n      <!-- TODO: Need to decide how \"Delte\" button should work.\n                   For now did it with a \"deleteCustomer\" method in ts file. -->\n      <td><button class=\"buttondelete\" (click)=\"promptMessage()\">Delete</button></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/customers/customers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/customers/customers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"headdiv\">\n      <button class=\"buttonadd\" a routerLink='../customerAddOrUpdate/0'>Add New</button>\n    </div>\n    <div class=\"customer\" *ngFor=\"let customer of customers\">\n      <app-customer [customer]=\"customer\"></app-customer>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>All Rights Reserved &copy;</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <marquee>Testing...</marquee> -->\n  <h1>Yaniv & Gil Coupon System Project 2019</h1>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <app-header></app-header>\n  </header>\n  <aside>\n    <app-menu></app-menu>\n  </aside>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  <footer>\n    <app-footer></app-footer>\n  </footer>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted\" class=\"loginForm\">\n  <form #formInfo=\"ngForm\">\n      <div class=\"header\">Log-in</div>\n        <label for=\"email\" class=\"formLabel\">Email</label>\n        <input [(ngModel)]=\"email\" type=\"email\" class=\"forminput email\" required name=\"name\" id=\"email\"/>\n        <!-- <td>Email is {{email}}</td> -->\n        <label for=\"password\" class=\"formLabel\">Password</label>\n        <input [(ngModel)]=\"password\" type=\"text\" class=\"forminput password\" required  name=\"password\" id=\"password\"/>\n        <label for=\"clientType\" class=\"formLabel\">Client Type</label>\n        <select [(ngModel)]=\"clientType\" name=\"clientType\" id=\"clientType\" class=\"forminput clientType\">\n          <option value=\"ADMIN\">Admin</option>\n          <option value=\"COMPANY\">Company</option>\n          <option value=\"CUSTOMER\">Customer</option>\n        </select>\n        <button class=\"submitbutton\" (click)=\"onSubmit()\" [disabled] = \"!formInfo.form.valid\">Submit</button>\n  </form>\n</div>\n<div *ngIf=\"submitted\" class=\"userLoggedIn\">\n  <table>\n    <tr>\n      <td colspan=\"2\"><span class=\"loggedText\">Logged in</span></td>\n    </tr>\n    <tr>\n      <td><span class=\"loggedText\">Email:</span></td>\n      <td>\n        <span class=\"loggedText\">{{ this.email }}</span>\n      </td>\n    </tr>\n    <tr>\n      <td colspan='2'><button (click)=\"logout()\">Logout</button></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"menuItems\">\n  <div *ngFor=\"let entry of menuItems\">\n    <button a routerLink=\"{{entry.routePath}}\" class=\"menubutton\">{{entry.description}}</button>\n  </div>\n  <button class=\"menubutton\" (click)=\"logout()\">Logout</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page404/page404.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page404/page404.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>page404 works!</p> -->\n<div class=\"page\">\n  <!-- <div class=\"container\">\n    <h3>404 Page not found</h3>\n  </div> -->\n  <img src=\"assets/images/404Error.png\">\n  <div class=\"container\" style=\"background-color:white\">\n    <hr class=\"line\">\n    <h2><b>404 ERROR</b></h2>\n    <hr class=\"line\">\n    <p>Oops! Looks like you're in a page that doesn't exist.</p>\n    <p>Don't worry - We've got you covered.</p>\n  </div>\n  <div class=\"container\">\n    <p><span class=\"text\">Just click the button below</span></p>\n    <button class=\"button\">Go Back Home</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/coupon/coupon.component */ "./src/app/components/coupon/coupon.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_company_add_update_company_add_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company-add-update/company-add-update.component */ "./src/app/components/company-add-update/company-add-update.component.ts");
/* harmony import */ var _components_coupon_add_update_coupon_add_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/coupon-add-update/coupon-add-update.component */ "./src/app/components/coupon-add-update/coupon-add-update.component.ts");
/* harmony import */ var _components_customer_add_update_customer_add_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/customer-add-update/customer-add-update.component */ "./src/app/components/customer-add-update/customer-add-update.component.ts");












const routes = [
    { path: 'home', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'coupons/:isCustomer', component: _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_5__["CouponsComponent"] },
    { path: 'customer/:myCoupons', component: _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_5__["CouponsComponent"] },
    { path: 'coupons/coupon/:id', component: _components_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_4__["CouponComponent"] },
    { path: 'customers', component: _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"] },
    { path: 'companies', component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_7__["CompaniesComponent"] },
    { path: 'companyAddOrUpdate/:id', component: _components_company_add_update_company_add_update_component__WEBPACK_IMPORTED_MODULE_9__["CompanyAddUpdateComponent"] },
    { path: 'couponAddOrUpdate/:id', component: _components_coupon_add_update_coupon_add_update_component__WEBPACK_IMPORTED_MODULE_10__["CouponAddUpdateComponent"] },
    { path: 'customerAddOrUpdate/:id', component: _components_customer_add_update_customer_add_update_component__WEBPACK_IMPORTED_MODULE_11__["CustomerAddUpdateComponent"] },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/coupon/coupon.component */ "./src/app/components/coupon/coupon.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_customer_add_update_customer_add_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/customer-add-update/customer-add-update.component */ "./src/app/components/customer-add-update/customer-add-update.component.ts");
/* harmony import */ var _components_company_add_update_company_add_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/company-add-update/company-add-update.component */ "./src/app/components/company-add-update/company-add-update.component.ts");
/* harmony import */ var _components_coupon_add_update_coupon_add_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/coupon-add-update/coupon-add-update.component */ "./src/app/components/coupon-add-update/coupon-add-update.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





// import { AppComponent } from '../assets/appcomponent_bk/app.component';


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
            _components_coupon_coupon_component__WEBPACK_IMPORTED_MODULE_6__["CouponComponent"],
            _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_7__["CouponsComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
            _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _components_company_company_component__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"],
            _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_15__["CustomersComponent"],
            _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_16__["CompaniesComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _components_customer_add_update_customer_add_update_component__WEBPACK_IMPORTED_MODULE_19__["CustomerAddUpdateComponent"],
            _components_company_add_update_company_add_update_component__WEBPACK_IMPORTED_MODULE_20__["CompanyAddUpdateComponent"],
            _components_coupon_add_update_coupon_add_update_component__WEBPACK_IMPORTED_MODULE_21__["CouponAddUpdateComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"]],
        bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/companies/companies.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/companies/companies.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonadd {\r\n  background-color: #3ee034;\r\n  border: 2px solid #3ee034;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 25%;\r\n}\r\n.buttonadd:hover {\r\n  background-color: white;\r\n  color: #3ee034;\r\n  border: 2px solid #3ee034;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 30%);\r\n}\r\n.headdiv {\r\n  grid-column: span 3;\r\n}\r\n.company {\r\n  grid-column: span 1;\r\n}\r\n.company:hover {\r\n  border: 5px dotted darkgrey;\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQ3FCLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbmFkZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlZTAzNDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjM2VlMDM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5idXR0b25hZGQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjM2VlMDM0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZWUwMzQ7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwJSk7XHJcbn1cclxuLmhlYWRkaXYge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XHJcbn1cclxuLmNvbXBhbnkge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbn1cclxuLmNvbXBhbnk6aG92ZXIge1xyXG4gIGJvcmRlcjogNXB4IGRvdHRlZCBkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/companies/companies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/companies/companies.component.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");



let CompaniesComponent = class CompaniesComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.adminService.getAllCompanies().subscribe((companies) => this.companies = companies, (error) => { alert(error.message); });
    }
    goToAdd() {
        this.router.navigateByUrl('companyAddOrUpdate/add/0');
    }
};
CompaniesComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: __webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/companies/companies.component.html"),
        styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/components/companies/companies.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
], CompaniesComponent);



/***/ }),

/***/ "./src/app/components/company-add-update/company-add-update.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/company-add-update/company-add-update.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n.form {\r\n  width: 80%;\r\n  height: 100%;\r\n  background-color:inherit;\r\n  margin: 0 auto;\r\n  margin-top: 25px;\r\n  text-align: center;\r\n  overflow: auto;\r\n}\r\n.formlabel {\r\n  background-color: inherit;\r\n  color: white;\r\n  text-shadow: black 0.1em 0.1em 0.2em;\r\n  font-family: Courier New, monospace;\r\n  font-weight: 600;\r\n  font-stretch: expanded;\r\n  font-size: 22px;\r\n  text-align: left;\r\n  /* border: 2px solid black;\r\n  border-radius: 4px; */\r\n  display: inline-block;\r\n  padding: 5px;\r\n  width: 20%;\r\n  margin-bottom: 10px;\r\n}\r\n.forminput {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 70%;\r\n  height: auto;\r\n  padding: 10px;\r\n  padding-left: 50px;\r\n  border: 2px solid red;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n.submitbutton {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 50%;\r\n}\r\n.submitbutton:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWFkZC11cGRhdGUvY29tcGFueS1hZGQtdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7dUJBQ3FCO0VBQ3JCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFDcUIsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWFkZC11cGRhdGUvY29tcGFueS1hZGQtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5mb3JtIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmZvcm1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDAuMWVtIDAuMWVtIDAuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdWJtaXRidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uc3VibWl0YnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdGVhbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/company-add-update/company-add-update.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/company-add-update/company-add-update.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanyAddUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddUpdateComponent", function() { return CompanyAddUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");





let CompanyAddUpdateComponent = class CompanyAddUpdateComponent {
    constructor(activatedRoute, adminService, router) {
        this.activatedRoute = activatedRoute;
        this.adminService = adminService;
        this.router = router;
    }
    ngOnInit() {
        this.url = '/companies';
        const str = this.activatedRoute.snapshot.params.id.toString();
        // tslint:disable-next-line: radix
        this.id = +str;
        // tslint:disable-next-line: triple-equals
        this.add = (this.id == 0);
        if (!this.add) {
            this.adminService.getCompanyById(this.id).subscribe((company) => this.company = company, (error) => { alert(error.message); });
        }
        else {
            this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"](this.id, '', '', '');
        }
    }
    submitChanges() {
        if (this.add) {
            this.adminService.addCompany(this.company).subscribe(() => { this.router.navigateByUrl(this.url); }, (error) => { alert(error.message); });
        }
        else {
            this.adminService.updateCompany(this.company).subscribe(() => { this.router.navigateByUrl(this.url); }, (error) => { alert(error.message); });
        }
    }
};
CompanyAddUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"])
], CompanyAddUpdateComponent.prototype, "company", void 0);
CompanyAddUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-add-update',
        template: __webpack_require__(/*! raw-loader!./company-add-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company-add-update/company-add-update.component.html"),
        styles: [__webpack_require__(/*! ./company-add-update.component.css */ "./src/app/components/company-add-update/company-add-update.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CompanyAddUpdateComponent);



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonupdate {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n.buttonupdate:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n.buttondelete {\r\n  background-color: red;\r\n  border: 2px solid red;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n.buttondelete:hover {\r\n  background-color: white;\r\n  color: red;\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFDcUIsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQ3FCLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9udXBkYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgLyogU2FmYXJpICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idXR0b251cGRhdGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbn1cclxuLmJ1dHRvbmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ1dHRvbmRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/prompt.service */ "./src/app/services/prompt.service.ts");






let CompanyComponent = class CompanyComponent {
    constructor(adminService, promptService, router) {
        this.adminService = adminService;
        this.promptService = promptService;
        this.router = router;
    }
    ngOnInit() {
        this.url = '/companyAddOrUpdate/' + this.company.id;
    }
    promptMessage() {
        this.promptService.promptBeforeDelete('Delete Company ' + this.company.name, () => { this.deleteCompany(); });
    }
    deleteCompany() {
        this.adminService.deleteCompany(this.company).
            subscribe(() => {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/companies']);
            }, (error) => { alert(error.message); });
        });
    }
};
CompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_5__["PromptService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"])
], CompanyComponent.prototype, "company", void 0);
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/company.component.html"),
        styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
        src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_5__["PromptService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CompanyComponent);



/***/ }),

/***/ "./src/app/components/coupon-add-update/coupon-add-update.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/coupon-add-update/coupon-add-update.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n.form {\r\n  width: 80%;\r\n  height: 100%;\r\n  background-color:inherit;\r\n  margin: 0 auto;\r\n  margin-top: 25px;\r\n  text-align: center;\r\n  overflow: auto;\r\n}\r\n.formlabel {\r\n  background-color: inherit;\r\n  color: white;\r\n  text-shadow: black 0.1em 0.1em 0.2em;\r\n  font-family: Courier New, monospace;\r\n  font-weight: 600;\r\n  font-stretch: expanded;\r\n  font-size: 22px;\r\n  text-align: left;\r\n  /* border: 2px solid black;\r\n  border-radius: 4px; */\r\n  display: inline-block;\r\n  padding: 5px;\r\n  width: 20%;\r\n  margin-bottom: 10px;\r\n}\r\n.forminput {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 70%;\r\n  height: auto;\r\n  padding: 10px;\r\n  padding-left: 50px;\r\n  border: 2px solid red;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n.submitbutton {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 50%;\r\n}\r\n.submitbutton:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vwb24tYWRkLXVwZGF0ZS9jb3Vwb24tYWRkLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCO3VCQUNxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQ3FCLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cG9uLWFkZC11cGRhdGUvY291cG9uLWFkZC11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmZvcm0ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uZm9ybWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogYmxhY2sgMC4xZW0gMC4xZW0gMC4yZW07XHJcbiAgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXN0cmV0Y2g6IGV4cGFuZGVkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnN1Ym1pdGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5zdWJtaXRidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/coupon-add-update/coupon-add-update.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coupon-add-update/coupon-add-update.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CouponAddUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAddUpdateComponent", function() { return CouponAddUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupon.service */ "./src/app/services/coupon.service.ts");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var src_app_models_CouponType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/CouponType */ "./src/app/models/CouponType.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");







let CouponAddUpdateComponent = class CouponAddUpdateComponent {
    constructor(activatedRoute, couponService, companyService, router) {
        this.activatedRoute = activatedRoute;
        this.couponService = couponService;
        this.companyService = companyService;
        this.router = router;
        this.couponTypes = [src_app_models_CouponType__WEBPACK_IMPORTED_MODULE_5__["CouponType"].AUTOMOBILE, src_app_models_CouponType__WEBPACK_IMPORTED_MODULE_5__["CouponType"].CAMPING, src_app_models_CouponType__WEBPACK_IMPORTED_MODULE_5__["CouponType"].COMPUTER,
            src_app_models_CouponType__WEBPACK_IMPORTED_MODULE_5__["CouponType"].ELECTRICITY];
    }
    ngOnInit() {
        this.url = '/coupons/company';
        this.id = this.activatedRoute.snapshot.params.id;
        // tslint:disable-next-line:triple-equals
        this.add = this.id == 0;
        if (!this.add) {
            this.couponService.getSingleCoupon(this.id).subscribe((coupon) => this.coupon = coupon, (error) => { alert(error.message); });
        }
        else {
            this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_4__["Coupon"](this.id, 0, '', '', src_app_models_CouponType__WEBPACK_IMPORTED_MODULE_5__["CouponType"].FOOD, 0, null, null, '');
        }
    }
    submitChanges() {
        if (this.add) {
            this.companyService.addCoupon(this.coupon).subscribe(() => { this.router.navigateByUrl(this.url); }, (error) => { alert(error.message); });
        }
        else {
            this.companyService.updateCoupon(this.coupon).subscribe(() => { this.router.navigateByUrl(this.url); }, (error) => { alert(error.message); });
        }
    }
};
CouponAddUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__["CouponService"] },
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CouponAddUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-add-update',
        template: __webpack_require__(/*! raw-loader!./coupon-add-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coupon-add-update/coupon-add-update.component.html"),
        styles: [__webpack_require__(/*! ./coupon-add-update.component.css */ "./src/app/components/coupon-add-update/coupon-add-update.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__["CouponService"],
        src_app_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CouponAddUpdateComponent);



/***/ }),

/***/ "./src/app/components/coupon/coupon.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/coupon/coupon.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coupon {\r\n  border: 5px dotted #bbb; /* Dotted border */\r\n  width: 100%;\r\n  border-radius: 15px; /* Rounded border */\r\n  margin: 0 auto; /* Center the coupon */\r\n  max-width: 600px;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n  background-color: #f1f1f1;\r\n  grid-column: span 2;\r\n}\r\n\r\n.othercontainer {\r\n  padding: 2px 16px;\r\n  background-color: #f1f1f1;\r\n  grid-column: span 2;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.promo {\r\n  background: #ccc;\r\n  padding: 3px;\r\n  grid-column: span 2;\r\n}\r\n\r\n.expire {\r\n  color: red;\r\n  grid-column: span 2;\r\n}\r\n\r\n.purchase {\r\n  grid-column: span 2;\r\n  margin: 0 auto;\r\n}\r\n\r\n.image {\r\n  grid-column: span 2;\r\n  margin: 0 auto;\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n}\r\n\r\n.update {\r\n  grid-column: span 1;\r\n  margin: 0 auto;\r\n}\r\n\r\n.delete {\r\n  grid-column: span 1;\r\n  margin: 0 auto;\r\n}\r\n\r\n.buttonpurchase {\r\n  background-color: gold;\r\n  border: 2px solid gold;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 80%;\r\n}\r\n\r\n.buttonpurchase:hover {\r\n  background-color: white;\r\n  color: gold;\r\n  border: 2px solid gold;\r\n}\r\n\r\n.buttonupdate {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.buttonupdate:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n\r\n.buttondelete {\r\n  background-color: red;\r\n  border: 2px solid red;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.buttondelete:hover {\r\n  background-color: white;\r\n  color: red;\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBRSxrQkFBa0I7RUFDM0MsV0FBVztFQUNYLG1CQUFtQixFQUFFLG1CQUFtQjtFQUN4QyxjQUFjLEVBQUUsc0JBQXNCO0VBQ3RDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUNxQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUNxQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUNxQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vwb24vY291cG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cG9uIHtcclxuICBib3JkZXI6IDVweCBkb3R0ZWQgI2JiYjsgLyogRG90dGVkIGJvcmRlciAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgY291cG9uICovXHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxufVxyXG5cclxuLm90aGVyY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxufVxyXG5cclxuLnByb21vIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59XHJcblxyXG4uZXhwaXJlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbn1cclxuLnB1cmNoYXNlIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXgtaGVpZ2h0OiA4MCU7XHJcbn1cclxuLnVwZGF0ZSB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZGVsZXRlIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5idXR0b25wdXJjaGFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi5idXR0b25wdXJjaGFzZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGdvbGQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcclxufVxyXG4uYnV0dG9udXBkYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgLyogU2FmYXJpICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idXR0b251cGRhdGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbn1cclxuLmJ1dHRvbmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ1dHRvbmRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/coupon/coupon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/coupon/coupon.component.ts ***!
  \*******************************************************/
/*! exports provided: CouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponComponent", function() { return CouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/coupon.service */ "./src/app/services/coupon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/prompt.service */ "./src/app/services/prompt.service.ts");








let CouponComponent = class CouponComponent {
    constructor(couponService, companyService, customerService, promptService, activatedRoute, router) {
        this.couponService = couponService;
        this.companyService = companyService;
        this.customerService = customerService;
        this.promptService = promptService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        const id = this.coupon ? this.coupon.id : this.activatedRoute.snapshot.params.id;
        this.couponService.getSingleCoupon(id).subscribe(coupon => {
            this.coupon = coupon;
            // tslint:disable-next-line: triple-equals
            this.url = '/couponAddOrUpdate/' + this.coupon.id;
        }, (error) => { alert(error.message); });
    }
    promptMessage() {
        this.promptService.promptBeforeDelete('Delete Coupon ' + this.coupon.title, () => { this.deleteCoupon(); });
    }
    deleteCoupon() {
        this.companyService.removeCoupon(this.coupon)
            .subscribe(() => {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                this.router.navigateByUrl('/coupons/company');
            });
        }, (error) => { alert(error.message); });
    }
    purchaseCoupon() {
        this.customerService.purchase(this.coupon)
            .subscribe(() => {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                this.router.navigateByUrl('/coupons/isCustomer');
            });
        }, (error) => { alert(error.message); });
    }
};
CouponComponent.ctorParameters = () => [
    { type: src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__["CouponService"] },
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"] },
    { type: src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_7__["PromptService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"])
], CouponComponent.prototype, "coupon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CouponComponent.prototype, "isCustomer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CouponComponent.prototype, "purchased", void 0);
CouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon',
        template: __webpack_require__(/*! raw-loader!./coupon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coupon/coupon.component.html"),
        styles: [__webpack_require__(/*! ./coupon.component.css */ "./src/app/components/coupon/coupon.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__["CouponService"],
        src_app_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"],
        src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"],
        src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_7__["PromptService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CouponComponent);



/***/ }),

/***/ "./src/app/components/coupons/coupons.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 32%);\r\n}\r\n.comptable {\r\n  width: 100%;\r\n}\r\n.headcomp {\r\n  grid-column: span 3;\r\n  grid-template-columns: repeat(3, 30%);\r\n}\r\n.custtable {\r\n  width: 100%;\r\n}\r\n.headcust {\r\n  grid-column: span 3;\r\n  grid-template-columns: repeat(3, 30%);\r\n}\r\ntd {\r\n  width: 33%;\r\n}\r\n.button {\r\n  grid-column: span 1;\r\n}\r\n.search {\r\n  grid-column: span 1;\r\n}\r\n.coupon {\r\n  grid-column: span 1;\r\n}\r\n.coupon:hover {\r\n  border: 5px dotted darkgrey;\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n.buttonadd {\r\n  background-color: #3ee034;\r\n  border: 2px solid #3ee034;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n.buttonadd:hover {\r\n  background-color: white;\r\n  color: #3ee034;\r\n  border: 2px solid #3ee034;\r\n}\r\n.searchbutton {\r\n  background-color: #346ae0;\r\n  border: 2px solid #346ae0;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 50%;\r\n}\r\n.searchbutton:hover {\r\n  background-color: white;\r\n  color: #346ae0;\r\n  border: 2px solid #346ae0;\r\n}\r\n.formLabel {\r\n  background-color: inherit;\r\n  color: white;\r\n  text-shadow: black 0.1em 0.1em 0.2em;\r\n  font-family: Courier New, monospace;\r\n  font-weight: 600;\r\n  font-stretch: expanded;\r\n  font-size: 22px;\r\n  text-align: left;\r\n  /* border: 2px solid black;\r\n  border-radius: 4px; */\r\n  display: inline-block;\r\n  padding: 5px;\r\n  width: 80%;\r\n  margin-bottom: 10px;\r\n}\r\n.forminput {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 80%;\r\n  height: auto;\r\n  font-size: 20px;\r\n  padding: 10px;\r\n  border: 2px solid red;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vwb25zL2NvdXBvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUNxQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFDcUIsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCO3VCQUNxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vwb25zL2NvdXBvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMiUpO1xyXG59XHJcbi5jb21wdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFkY29tcCB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMCUpO1xyXG59XHJcbi5jdXN0dGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFkY3VzdCB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMCUpO1xyXG59XHJcbnRkIHtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxufVxyXG4uY291cG9uIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG59XHJcbi5jb3Vwb246aG92ZXIge1xyXG4gIGJvcmRlcjogNXB4IGRvdHRlZCBkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnV0dG9uYWRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2VlMDM0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZWUwMzQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgLyogU2FmYXJpICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idXR0b25hZGQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjM2VlMDM0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZWUwMzQ7XHJcbn1cclxuLnNlYXJjaGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NmFlMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMzQ2YWUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5zZWFyY2hidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMzQ2YWUwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNDZhZTA7XHJcbn1cclxuLmZvcm1MYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDAuMWVtIDAuMWVtIDAuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/coupons/coupons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.ts ***!
  \*********************************************************/
/*! exports provided: CouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsComponent", function() { return CouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/coupon.service */ "./src/app/services/coupon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CouponsComponent = class CouponsComponent {
    constructor(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.isCustomer = (this.activatedRoute.snapshot.params.isCustomer === 'isCustomer'
            || this.activatedRoute.snapshot.params.myCoupons === 'myCoupons');
        if (this.activatedRoute.snapshot.params.myCoupons === 'myCoupons') {
            this.purchased = true;
            this.isCustomer = true;
        }
        else {
            this.purchased = false;
        }
        // this.couponType = CouponType.ALL;
        this.service.getCoupons(this.purchased).subscribe(list => { this.coupons = list; }, (error) => { alert(error.message); });
    }
    searchByType() {
        if (this.couponType.toString() === 'ALL') {
            this.service.getCoupons(this.purchased).subscribe(list => { this.coupons = list; });
        }
        else {
            this.service.getByType(this.couponType, this.isCustomer).subscribe((coupons) => { this.coupons = coupons; }, (error) => { alert(error.message); });
        }
    }
    searchByPrice() {
        this.service.getByPrice(this.price, this.isCustomer).subscribe((coupons) => { this.coupons = coupons; }, (error) => { alert(error.message); });
    }
    searchByEndDate() {
        this.service.getByEndDate(this.purchased, this.endDate).subscribe((coupons) => { this.coupons = coupons; }, (error) => { alert(error.message); });
    }
};
CouponsComponent.ctorParameters = () => [
    { type: src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupons',
        template: __webpack_require__(/*! raw-loader!./coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coupons/coupons.component.html"),
        styles: [__webpack_require__(/*! ./coupons.component.css */ "./src/app/components/coupons/coupons.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_coupon_service__WEBPACK_IMPORTED_MODULE_2__["CouponService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CouponsComponent);



/***/ }),

/***/ "./src/app/components/customer-add-update/customer-add-update.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/customer-add-update/customer-add-update.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  width: 80%;\r\n  height: 80%;\r\n  background-color:inherit;\r\n  margin: 0 auto;\r\n  margin-top: 25px;\r\n  text-align: center;\r\n}\r\n.formlabel {\r\n  background-color: inherit;\r\n  color: white;\r\n  text-shadow: black 0.1em 0.1em 0.2em;\r\n  font-family: Courier New, monospace;\r\n  font-weight: 600;\r\n  font-stretch: expanded;\r\n  font-size: 22px;\r\n  text-align: left;\r\n  /* border: 2px solid black;\r\n  border-radius: 4px; */\r\n  display: inline-block;\r\n  padding: 5px;\r\n  width: 20%;\r\n  margin-bottom: 10px;\r\n}\r\n.forminput {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 70%;\r\n  height: auto;\r\n  padding: 10px;\r\n  padding-left: 50px;\r\n  border: 2px solid red;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n.submitbutton {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 50%;\r\n}\r\n.submitbutton:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci1hZGQtdXBkYXRlL2N1c3RvbWVyLWFkZC11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCO3VCQUNxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQ3FCLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItYWRkLXVwZGF0ZS9jdXN0b21lci1hZGQtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDAuMWVtIDAuMWVtIDAuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdWJtaXRidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uc3VibWl0YnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdGVhbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/customer-add-update/customer-add-update.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/customer-add-update/customer-add-update.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerAddUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddUpdateComponent", function() { return CustomerAddUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");






let CustomerAddUpdateComponent = class CustomerAddUpdateComponent {
    constructor(activatedRoute, customerService, adminService, router) {
        this.activatedRoute = activatedRoute;
        this.customerService = customerService;
        this.adminService = adminService;
        this.router = router;
    }
    ngOnInit() {
        this.url = '/customers';
        const str = this.activatedRoute.snapshot.params.id.toString();
        this.id = +str;
        // tslint:disable-next-line: triple-equals
        this.add = this.id === 0;
        if (!this.add) {
            this.customerService.getCustomerById(this.id).subscribe((customer) => this.customer = customer);
        }
        else {
            this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](this.id, '', '', '');
        }
    }
    submitChanges() {
        if (this.add) {
            this.adminService.addCustomer(this.customer).subscribe(() => { this.router.navigateByUrl(this.url); });
        }
        else {
            this.adminService.updateCustomer(this.customer).subscribe(() => { this.router.navigateByUrl(this.url); });
        }
    }
};
CustomerAddUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"])
], CustomerAddUpdateComponent.prototype, "customer", void 0);
CustomerAddUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-add-update',
        template: __webpack_require__(/*! raw-loader!./customer-add-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/customer-add-update/customer-add-update.component.html"),
        styles: [__webpack_require__(/*! ./customer-add-update.component.css */ "./src/app/components/customer-add-update/customer-add-update.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CustomerAddUpdateComponent);



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonupdate {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n.buttonupdate:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n.buttondelete {\r\n  background-color: red;\r\n  border: 2px solid red;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n.buttondelete:hover {\r\n  background-color: white;\r\n  color: red;\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUNxQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFDcUIsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnVwZGF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnV0dG9udXBkYXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdGVhbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG59XHJcbi5idXR0b25kZWxldGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgLyogU2FmYXJpICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idXR0b25kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/prompt.service */ "./src/app/services/prompt.service.ts");







let CustomerComponent = class CustomerComponent {
    constructor(customerService, adminService, promptService, router) {
        this.customerService = customerService;
        this.adminService = adminService;
        this.promptService = promptService;
        this.router = router;
    }
    ngOnInit() {
        this.url = '/customerAddOrUpdate/' + this.customer.id;
    }
    promptMessage() {
        this.promptService.promptBeforeDelete('Delete Customer ' + this.customer.name, () => { this.deleteCustomer(); });
    }
    deleteCustomer() {
        this.adminService.deleteCustomer(this.customer)
            .subscribe(() => {
            this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/customers']);
            });
        }, (error) => { alert(error.message); });
    }
};
CustomerComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
    { type: src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_6__["PromptService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"])
], CustomerComponent.prototype, "customer", void 0);
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/customer/customer.component.html"),
        styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
        src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_6__["PromptService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CustomerComponent);



/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/customers/customers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonadd {\r\n  background-color: #3ee034;\r\n  border: 2px solid #3ee034;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 25%;\r\n}\r\n.buttonadd:hover {\r\n  background-color: white;\r\n  color: #3ee034;\r\n  border: 2px solid #3ee034;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 30%);\r\n}\r\n.headdiv {\r\n  grid-column: span 3;\r\n}\r\n.customer {\r\n  grid-column: span 1;\r\n}\r\n.customer:hover {\r\n  border: 5px dotted darkgrey;\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQ3FCLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbmFkZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlZTAzNDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjM2VlMDM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5idXR0b25hZGQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjM2VlMDM0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzZWUwMzQ7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwJSk7XHJcbn1cclxuLmhlYWRkaXYge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XHJcbn1cclxuLmN1c3RvbWVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG59XHJcbi5jdXN0b21lcjpob3ZlciB7XHJcbiAgYm9yZGVyOiA1cHggZG90dGVkIGRhcmtncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/customers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");





let CustomersComponent = class CustomersComponent {
    constructor(adminService, client, router) {
        this.adminService = adminService;
        this.client = client;
        this.router = router;
    }
    ngOnInit() {
        this.adminService.getAllCustomers().subscribe((customers) => this.customers = customers, (error) => { alert(error.message); });
    }
};
CustomersComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: __webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/customers/customers.component.html"),
        styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/customers/customers.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CustomersComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n  height: 100%;\r\n}\r\n\r\np{\r\n  margin: 0;\r\n  color: darkblue;\r\n  /* vertical center allign*/\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%)\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1DQUEwQjtVQUExQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogZGFya2JsdWU7XHJcbiAgLyogdmVydGljYWwgY2VudGVyIGFsbGlnbiovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  height: 100%;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  color: darkblue;\r\n  font-size: 40px;\r\n  /* vertical center allign*/\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%)\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBMEI7VUFBMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICAvKiB2ZXJ0aWNhbCBjZW50ZXIgYWxsaWduKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/layout/layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n  height: 100%;\r\n  border: 2px solid black;\r\n  background-image: linear-gradient(to bottom right, red, gold);\r\n  /* background-color: palegreen; */\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  display: grid;\r\n  grid-template-rows: 13% 80% 7%;\r\n  grid-template-columns: repeat(12, 1fr)\r\n}\r\n\r\nheader {\r\n  grid-column: span 12;\r\n  border: 2px solid black;\r\n}\r\n\r\naside {\r\n  grid-column: span 2;\r\n  border: 2px solid black;\r\n}\r\n\r\nmain {\r\n  grid-column: span 10;\r\n  border: 2px solid black;\r\n}\r\n\r\nfooter {\r\n  grid-column: span 12;\r\n  border: 2px solid black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDZEQUE2RDtFQUM3RCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmVkLCBnb2xkKTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ3JlZW47ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzJSA4MCUgNyU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcilcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxMjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5hc2lkZSB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5tYWluIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAxMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5mb290ZXIge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n.loginForm {\r\n  width: 80%;\r\n  height: 80%;\r\n  background-color:inherit;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n.header {\r\n  background-color: inherit;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n.formLabel {\r\n  background-color: inherit;\r\n  color: white;\r\n  text-shadow: black 0.1em 0.1em 0.2em;\r\n  font-family: Courier New, monospace;\r\n  font-weight: 600;\r\n  font-stretch: expanded;\r\n  font-size: 22px;\r\n  text-align: left;\r\n  /* border: 2px solid black;\r\n  border-radius: 4px; */\r\n  display: inline-block;\r\n  padding: 5px;\r\n  width: 25%;\r\n  margin-bottom: 10px;\r\n}\r\n.forminput {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 75%;\r\n  height: auto;\r\n  padding: 10px;\r\n  padding-left: 50px;\r\n  border: 2px solid red;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n.email {\r\n  background-image: url('/assets/images/emailicon.png');\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n.password {\r\n  background-image: url('/assets/images/passwordicon.png');\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n.clientType {\r\n  background-image: url('/assets/images/usericon.png');\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n.textBox {\r\n  width: 60%;\r\n}\r\n.userLoggedIn {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: aquamarine;\r\n  margin: 0 auto;\r\n}\r\n.loggedText {\r\n  background-color: inherit;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n.submitbutton {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 50%;\r\n}\r\n.submitbutton:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjt1QkFDcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHdEQUF3RDtFQUN4RCx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFDcUIsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubG9naW5Gb3JtIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtTGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiBibGFjayAwLjFlbSAwLjFlbSAwLjJlbTtcclxuICBmb250LWZhbWlseTogQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc3RyZXRjaDogZXhwYW5kZWQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAqL1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtaW5wdXQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZW1haWwge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZW1haWxpY29uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4ucGFzc3dvcmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcGFzc3dvcmRpY29uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uY2xpZW50VHlwZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy91c2VyaWNvbi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnRleHRCb3gge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuLnVzZXJMb2dnZWRJbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxvZ2dlZFRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWJtaXRidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdGVhbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uc3VibWl0YnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogdGVhbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0ZWFsO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/components/menu/menu.component.ts");




let LoginComponent = class LoginComponent {
    constructor(authenticationService, menuComponent) {
        this.authenticationService = authenticationService;
        this.menuComponent = menuComponent;
        // tslint:disable-next-line: no-inferrable-types
        this.email = '';
        // tslint:disable-next-line: no-inferrable-types
        this.password = '';
        this.submitted = false;
    }
    ngOnInit() { }
    isInvalid() {
        return this.loginForm.invalid;
    }
    onSubmit() {
        this.authenticationService.login(this.email, this.password, this.clientType, () => {
            this.menuComponent.refresh();
        }, () => { alert('No user matching the credentials was found'); })
            .subscribe(clientType => { this.clientType = clientType; });
    }
    logout() {
        this.authenticationService.logout();
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        providers: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n  font-size: x-large;\r\n  color: blue;\r\n  margin: 10px;\r\n  display: block;\r\n}\r\n\r\n.active-link{\r\n  color: magenta;\r\n  font-weight: bold\r\n}\r\n\r\n.menubutton {\r\n  background-color: teal;\r\n  border: 2px solid teal;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;;\r\n  margin: 0 auto;\r\n  margin-bottom: 10px; /* Safari */\r\n  transition-duration: 0.5s;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.menubutton:hover {\r\n  background-color: white;\r\n  color: teal;\r\n  border: 2px solid teal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUIsRUFDZ0IsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBjb2xvcjogYmx1ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGlua3tcclxuICBjb2xvcjogbWFnZW50YTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5tZW51YnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1lbnVidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB0ZWFsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRlYWw7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MenuComponent = class MenuComponent {
    constructor(menuService, authenticationService, router) {
        this.menuService = menuService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.menuService.getMenuItems().subscribe(mi => {
            this.menuItems = mi;
        }, (error) => { alert(error.message); });
    }
    ngOnInit() {
        this.menuService.getMenuItems().subscribe(mi => {
            this.menuItems = mi;
        }, (error) => { alert(error.message); });
    }
    logout() {
        this.authenticationService.logout(() => {
            this.router.navigateByUrl('');
        });
    }
    refresh() {
        location.reload(true);
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/components/page404/page404.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/page404/page404.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n  /* border: 5px dotted #bbb; Dotted border */\r\n  width: 100%;\r\n  /* border-radius: 15px; Rounded border */\r\n  margin: 0 auto; /* Center the coupon */\r\n  /* max-width: 600px; */\r\n}\r\n\r\n.line {\r\n  color: #87BDD5;\r\n  width: 100%;\r\n  height: 2px;\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.promo {\r\n  background: #ccc;\r\n  padding: 3px;\r\n}\r\n\r\n.button {\r\n  color: #87BDD5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWMsRUFBRSxzQkFBc0I7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIC8qIGJvcmRlcjogNXB4IGRvdHRlZCAjYmJiOyBEb3R0ZWQgYm9yZGVyICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMTVweDsgUm91bmRlZCBib3JkZXIgKi9cclxuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBjb3Vwb24gKi9cclxuICAvKiBtYXgtd2lkdGg6IDYwMHB4OyAqL1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgY29sb3I6ICM4N0JERDU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5wcm9tbyB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGNvbG9yOiAjODdCREQ1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
    }
};
Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page404',
        template: __webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page404/page404.component.html"),
        styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Page404Component);



/***/ }),

/***/ "./src/app/models/CouponType.ts":
/*!**************************************!*\
  !*** ./src/app/models/CouponType.ts ***!
  \**************************************/
/*! exports provided: CouponType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponType", function() { return CouponType; });
var CouponType;
(function (CouponType) {
    CouponType[CouponType["AUTOMOBILE"] = 0] = "AUTOMOBILE";
    CouponType[CouponType["CAMPING"] = 1] = "CAMPING";
    CouponType[CouponType["COMPUTER"] = 2] = "COMPUTER";
    CouponType[CouponType["ELECTRICITY"] = 3] = "ELECTRICITY";
    CouponType[CouponType["FASHION"] = 4] = "FASHION";
    CouponType[CouponType["FOOD"] = 5] = "FOOD";
    CouponType[CouponType["HEALTH"] = 6] = "HEALTH";
    CouponType[CouponType["MUSIC"] = 7] = "MUSIC";
    CouponType[CouponType["RESTURANT"] = 8] = "RESTURANT";
    CouponType[CouponType["SPA"] = 9] = "SPA";
    CouponType[CouponType["SPORTS"] = 10] = "SPORTS";
    CouponType[CouponType["TRAVELING"] = 11] = "TRAVELING";
})(CouponType || (CouponType = {}));


/***/ }),

/***/ "./src/app/models/clientType.ts":
/*!**************************************!*\
  !*** ./src/app/models/clientType.ts ***!
  \**************************************/
/*! exports provided: ClientType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientType", function() { return ClientType; });
var ClientType;
(function (ClientType) {
    ClientType[ClientType["CUSTOMER"] = 0] = "CUSTOMER";
    ClientType[ClientType["COMPANY"] = 1] = "COMPANY";
    ClientType[ClientType["ADMIN"] = 2] = "ADMIN";
})(ClientType || (ClientType = {}));


/***/ }),

/***/ "./src/app/models/company.ts":
/*!***********************************!*\
  !*** ./src/app/models/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
Company.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/coupon.ts":
/*!**********************************!*\
  !*** ./src/app/models/coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
class Coupon {
    constructor(id, amount, title, description, couponType, price, startDate, endDate, image) {
        this.id = id;
        this.amount = amount;
        this.title = title;
        this.description = description;
        this.couponType = couponType;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
    }
}
Coupon.ctorParameters = () => [
    { type: Number },
    { type: Number },
    { type: String },
    { type: String },
    { type: undefined },
    { type: Number },
    { type: Date },
    { type: Date },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
Customer.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminService = class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.adminRootUrl = `http://localhost:8080/Rest/Admin`;
    }
    addCompany(company) {
        return this.httpClient.post(this.adminRootUrl + '/Company/Create', company, { withCredentials: true });
    }
    getCompanyById(id) {
        return this.httpClient.get(this.adminRootUrl + '/Company/Get?id=' + id, { withCredentials: true });
    }
    getAllCompanies() {
        return this.httpClient.get(this.adminRootUrl + '/Company/GetAll', { withCredentials: true });
    }
    updateCompany(company) {
        return this.httpClient.put(this.adminRootUrl + '/Company/Update', company, { withCredentials: true });
    }
    deleteCompany(company) {
        return this.httpClient.delete(this.adminRootUrl + '/Company/Remove/' + company.id, { withCredentials: true });
    }
    addCustomer(customer) {
        return this.httpClient.post(this.adminRootUrl + '/Customer/Create', customer, { withCredentials: true });
    }
    getCustomerById(id) {
        return this.httpClient.get(this.adminRootUrl + '/Customer/Get?id=' + id, { withCredentials: true });
    }
    getAllCustomers() {
        return this.httpClient.get(this.adminRootUrl + '/Customer/GetAll', { withCredentials: true });
    }
    updateCustomer(customer) {
        return this.httpClient.put(this.adminRootUrl + '/Customer/Update', customer, { withCredentials: true });
    }
    deleteCustomer(customer) {
        return this.httpClient.delete(this.adminRootUrl + '/Customer/Remove/' + customer.id, { withCredentials: true });
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _models_clientType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/clientType */ "./src/app/models/clientType.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthenticationService = class AuthenticationService {
    constructor(httpClient, cookieService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.loginUrl = `http://localhost:8080/Rest/Login`;
    }
    getClientType() {
        if (this.cookieService.check('clientType')) {
            return _models_clientType__WEBPACK_IMPORTED_MODULE_4__["ClientType"][this.cookieService.get('clientType')];
        }
        if (this.user) {
            return this.user.clientType;
        }
        return _models_clientType__WEBPACK_IMPORTED_MODULE_4__["ClientType"].CUSTOMER;
    }
    login(email, password, clientType, success, failure) {
        this.user = { email, password, clientType };
        this.httpClient.post(this.loginUrl, this.user, { withCredentials: true }).subscribe(userFromDB => {
            if (userFromDB) {
                this.user = userFromDB;
                this.cookieService.set('clientType', clientType.toString());
                success();
                // tslint:disable-next-line:no-shadowed-variable
                return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](clientType => clientType);
            }
            else {
                this.cookieService.delete('clientType');
                failure();
            }
        });
        // tslint:disable-next-line:no-shadowed-variable
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](clientType => clientType);
    }
    logout(success) {
        this.httpClient.get(`http://localhost:8080/Rest/Logout`).subscribe(() => {
            this.user = null;
            this.cookieService.delete('clientType');
            if (success) {
                success();
            }
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompanyService = class CompanyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.companyRootUrl = 'http://localhost:8080/Rest/Company';
    }
    getCoupons() {
        let methodCoupons;
        this.couponService.getCoupons(false).subscribe((couponsFromService) => { methodCoupons = couponsFromService; });
        return methodCoupons;
    }
    getSingle(id) {
        this.couponService.getSingleCoupon(id).subscribe(singleCoupon => singleCoupon);
        return null; // ??
    }
    addCoupon(coupon) {
        return this.httpClient.post(this.companyRootUrl + '/Create', coupon, { withCredentials: true });
    }
    removeCoupon(coupon) {
        return this.httpClient.delete(this.companyRootUrl + '/Remove?id=' + coupon.id, { withCredentials: true });
    }
    updateCoupon(coupon) {
        console.log('Updating coupon ' + coupon);
        return this.httpClient.put(this.companyRootUrl + '/Update', coupon, { withCredentials: true });
    }
    getByType(type) {
        this.couponService.getByType(type, false).subscribe(couponFromService => couponFromService);
        return null;
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CompanyService);



/***/ }),

/***/ "./src/app/services/coupon.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/coupon.service.ts ***!
  \********************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CouponService = class CouponService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.visitorRootUrl = `http://localhost:8080/Rest/Visitor`;
        this.customerRootUrl = `http://localhost:8080/Rest/Customer`;
        this.companyRootUrl = `http://localhost:8080/Rest/Company`;
    }
    getCoupons(getAllPurchasedCoupons = false) {
        if (getAllPurchasedCoupons) {
            return this.httpClient.get(this.customerRootUrl + '/getAllPurchasedCoupons', { withCredentials: true });
        }
        return this.httpClient.get(this.visitorRootUrl + '/GetAllCoupons', { withCredentials: true });
    }
    getSingleCoupon(id) {
        return this.httpClient.get(this.visitorRootUrl + `/GetOne/` + id, { withCredentials: true });
    }
    getByType(type, customer) {
        if (customer) {
            return this.httpClient.get(this.customerRootUrl + '/getAllPurchasedCoupons/' + type, { withCredentials: true });
        }
        return this.httpClient.get(this.visitorRootUrl + '/GetAllCoupons/' + type, { withCredentials: true });
    }
    getByPrice(price, isCustomer) {
        const priceContextPath = '/GetAllCouponsByPrice?price=';
        if (isCustomer) {
            return this.httpClient.get(this.customerRootUrl +
                '/getAllPurchasedCouponsByPrice?price=' + price, { withCredentials: true });
        }
        return this.httpClient.get(this.visitorRootUrl + priceContextPath + price, { withCredentials: true });
    }
    getByEndDate(purchasedCoupons, endDate) {
        if (purchasedCoupons) {
            return this.httpClient.get(this.customerRootUrl +
                '/getAllPurchasedCouponsByEndDate?date=' + endDate, { withCredentials: true });
        }
        return this.httpClient.get(this.visitorRootUrl +
            '/GetAllCouponsByEndDate?date=' + endDate, { withCredentials: true });
    }
};
CouponService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CouponService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CouponService);



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomerService = class CustomerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.customerRootUrl = `http://localhost:8080/Rest/Customer`;
        this.adminRootUrl = `http://localhost:8080/Rest/Admin`;
    }
    purchase(coupon) {
        return this.httpClient.post(this.customerRootUrl + `/Purchase`, coupon, { withCredentials: true });
    }
    getCoupons() {
        this.couponService.getCoupons(true).subscribe(couponsFromService => couponsFromService);
        return null;
    }
    getByType(type) {
        this.couponService.getByType(type, true).subscribe(couponList => couponList);
        return null;
    }
    getByPrice(price) {
        this.couponService.getByPrice(price, true).subscribe(list => list);
        return null;
    }
    getCustomerById(id) {
        return this.httpClient.get(this.adminRootUrl + '/Customer/Get?id=' + id, { withCredentials: true });
    }
    getAllCustomers() {
        return this.httpClient.get(this.adminRootUrl + '/Customer/GetAll', { withCredentials: true });
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CustomerService);



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _models_clientType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/clientType */ "./src/app/models/clientType.ts");





let MenuService = class MenuService {
    constructor(httpClient, authenticationService) {
        this.httpClient = httpClient;
        this.authenticationService = authenticationService;
    }
    getMenuItems() {
        this.authenticationService.getClientType();
        return this.httpClient.get(this.getMenuItemsByClientType());
    }
    getMenuItemsByClientType() {
        if (this.authenticationService.getClientType() === _models_clientType__WEBPACK_IMPORTED_MODULE_4__["ClientType"].ADMIN) {
            return 'assets/json/menuitemsAdmin.json';
        }
        if (this.authenticationService.getClientType() === _models_clientType__WEBPACK_IMPORTED_MODULE_4__["ClientType"].COMPANY) {
            return 'assets/json/menuitemsCompany.json';
        }
        return 'assets/json/menuitemsCustomer.json';
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], MenuService);



/***/ }),

/***/ "./src/app/services/prompt.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/prompt.service.ts ***!
  \********************************************/
/*! exports provided: PromptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptService", function() { return PromptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PromptService = class PromptService {
    constructor() { }
    promptBeforeDelete(message, action) {
        const response = prompt(message + ' ? \nEnter "DELETE"');
        // tslint:disable-next-line:triple-equals
        if (response == 'DELETE') {
            action();
        }
        else {
            window.alert('You have canceled the delete action');
        }
    }
};
PromptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PromptService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Java\Final Project\CouponSystemFront\coupon-system-angular\coupon system front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map