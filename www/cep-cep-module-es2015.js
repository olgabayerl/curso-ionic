(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cep-cep-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cep/Cep.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cep/Cep.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Busca de CEP\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Busca de CEP</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <form [formGroup]=\"formCep\" (ngSubmit)=\"buscaEnderecoCEP()\">\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-input placeholder=\"Informe o CEP do endereço\" type=\"text\" formControlName=\"cep\"></ion-input>    \r\n      <div *ngIf=\"formCep.controls.cep.errors\">\r\n        <span *ngIf=\"formCep.controls.cep.errors.required\"><small>Campo obrigatório</small></span>\r\n      </div>  \r\n      <ion-button type=\"submit\" color=\"primary\" [disabled]=\"!formCep.valid\" size=\"small\">Buscar</ion-button>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-label>{{endereco}}</ion-label>\r\n    </div>\r\n  </ion-item>\r\n</form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/cep/Cep.page.scss":
/*!***********************************!*\
  !*** ./src/app/cep/Cep.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlcC9DZXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/cep/cep-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cep/cep-routing.module.ts ***!
  \*******************************************/
/*! exports provided: CepPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepPageRoutingModule", function() { return CepPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cep_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cep.page */ "./src/app/cep/cep.page.ts");




const routes = [
    {
        path: '',
        component: _cep_page__WEBPACK_IMPORTED_MODULE_3__["CepPage"],
    }
];
let CepPageRoutingModule = class CepPageRoutingModule {
};
CepPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CepPageRoutingModule);



/***/ }),

/***/ "./src/app/cep/cep.module.ts":
/*!***********************************!*\
  !*** ./src/app/cep/cep.module.ts ***!
  \***********************************/
/*! exports provided: CepPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepPageModule", function() { return CepPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _cep_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cep.page */ "./src/app/cep/cep.page.ts");
/* harmony import */ var _cep_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cep-routing.module */ "./src/app/cep/cep-routing.module.ts");








let CepPageModule = class CepPageModule {
};
CepPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _cep_routing_module__WEBPACK_IMPORTED_MODULE_6__["CepPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_cep_page__WEBPACK_IMPORTED_MODULE_5__["CepPage"]]
    })
], CepPageModule);



/***/ }),

/***/ "./src/app/cep/cep.page.ts":
/*!*********************************!*\
  !*** ./src/app/cep/cep.page.ts ***!
  \*********************************/
/*! exports provided: CepPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepPage", function() { return CepPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_cep_cep_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cep/cep.service */ "./src/app/services/cep/cep.service.ts");





let CepPage = class CepPage {
    constructor(alertController, formBuilder, cepService) {
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.cepService = cepService;
        this.formCep = this.formBuilder.group({
            'cep': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    mostraAlerta(titulo, mensagem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: titulo,
                message: mensagem,
                buttons: ['OK']
            });
        });
    }
    buscaEnderecoCEP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let address = "";
            yield this.cepService.buscaEnderecoCEP(this.formCep.controls["cep"].value).then((resposta) => {
                address = this.cepService.converterRespostaParaCep(resposta);
                this.endereco = address;
            }).catch(() => {
                this.mostraAlerta("Erro", "Cep não encontrado!");
            });
        });
    }
};
CepPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_cep_cep_service__WEBPACK_IMPORTED_MODULE_4__["CepService"] }
];
CepPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Cep',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./Cep.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cep/Cep.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./Cep.page.scss */ "./src/app/cep/Cep.page.scss")).default]
    })
], CepPage);



/***/ }),

/***/ "./src/app/services/cep/cep.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cep/cep.service.ts ***!
  \*********************************************/
/*! exports provided: CepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepService", function() { return CepService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");




let CepService = class CepService {
    constructor(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    buscaEnderecoCEP(cep) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = 'https://viacep.com.br/ws/' + cep + '/json';
            return this.httpClient.get(url).toPromise();
        });
    }
    converterRespostaParaCep(cepNaResposta) {
        let endereco = cepNaResposta.logradouro + ", " + cepNaResposta.bairro + ", " + cepNaResposta.localidade + " - " + cepNaResposta.uf;
        this.storageService.insereStorage("endereco", endereco);
        return endereco;
    }
};
CepService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
CepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CepService);



/***/ })

}]);
//# sourceMappingURL=cep-cep-module-es2015.js.map