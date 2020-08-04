function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cep-cep-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cep/Cep.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cep/Cep.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCepCepPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Busca de CEP\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Busca de CEP</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <form [formGroup]=\"formCep\" (ngSubmit)=\"buscaEnderecoCEP()\">\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-input placeholder=\"Informe o CEP do endereço\" type=\"text\" formControlName=\"cep\"></ion-input>    \r\n      <div *ngIf=\"formCep.controls.cep.errors\">\r\n        <span *ngIf=\"formCep.controls.cep.errors.required\"><small>Campo obrigatório</small></span>\r\n      </div>  \r\n      <ion-button type=\"submit\" color=\"primary\" [disabled]=\"!formCep.valid\" size=\"small\">Buscar</ion-button>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-label>{{endereco}}</ion-label>\r\n    </div>\r\n  </ion-item>\r\n</form>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/cep/Cep.page.scss":
  /*!***********************************!*\
    !*** ./src/app/cep/Cep.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppCepCepPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlcC9DZXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/cep/cep-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/cep/cep-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: CepPageRoutingModule */

  /***/
  function srcAppCepCepRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CepPageRoutingModule", function () {
      return CepPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cep_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cep.page */
    "./src/app/cep/cep.page.ts");

    var routes = [{
      path: '',
      component: _cep_page__WEBPACK_IMPORTED_MODULE_3__["CepPage"]
    }];

    var CepPageRoutingModule = function CepPageRoutingModule() {
      _classCallCheck(this, CepPageRoutingModule);
    };

    CepPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CepPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cep/cep.module.ts":
  /*!***********************************!*\
    !*** ./src/app/cep/cep.module.ts ***!
    \***********************************/

  /*! exports provided: CepPageModule */

  /***/
  function srcAppCepCepModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CepPageModule", function () {
      return CepPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _cep_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cep.page */
    "./src/app/cep/cep.page.ts");
    /* harmony import */


    var _cep_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cep-routing.module */
    "./src/app/cep/cep-routing.module.ts");

    var CepPageModule = function CepPageModule() {
      _classCallCheck(this, CepPageModule);
    };

    CepPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _cep_routing_module__WEBPACK_IMPORTED_MODULE_6__["CepPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      declarations: [_cep_page__WEBPACK_IMPORTED_MODULE_5__["CepPage"]]
    })], CepPageModule);
    /***/
  },

  /***/
  "./src/app/cep/cep.page.ts":
  /*!*********************************!*\
    !*** ./src/app/cep/cep.page.ts ***!
    \*********************************/

  /*! exports provided: CepPage */

  /***/
  function srcAppCepCepPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CepPage", function () {
      return CepPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_cep_cep_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/cep/cep.service */
    "./src/app/services/cep/cep.service.ts");

    var CepPage = /*#__PURE__*/function () {
      function CepPage(alertController, formBuilder, cepService) {
        _classCallCheck(this, CepPage);

        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.cepService = cepService;
        this.formCep = this.formBuilder.group({
          'cep': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
      }

      _createClass(CepPage, [{
        key: "mostraAlerta",
        value: function mostraAlerta(titulo, mensagem) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: titulo,
                      message: mensagem,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "buscaEnderecoCEP",
        value: function buscaEnderecoCEP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var address;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    address = "";
                    _context2.next = 3;
                    return this.cepService.buscaEnderecoCEP(this.formCep.controls["cep"].value).then(function (resposta) {
                      address = _this.cepService.converterRespostaParaCep(resposta);
                      _this.endereco = address;
                    })["catch"](function () {
                      _this.mostraAlerta("Erro", "Cep não encontrado!");
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CepPage;
    }();

    CepPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_cep_cep_service__WEBPACK_IMPORTED_MODULE_4__["CepService"]
      }];
    };

    CepPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-Cep',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./Cep.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cep/Cep.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./Cep.page.scss */
      "./src/app/cep/Cep.page.scss"))["default"]]
    })], CepPage);
    /***/
  },

  /***/
  "./src/app/services/cep/cep.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/cep/cep.service.ts ***!
    \*********************************************/

  /*! exports provided: CepService */

  /***/
  function srcAppServicesCepCepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CepService", function () {
      return CepService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/app/services/storage/storage.service.ts");

    var CepService = /*#__PURE__*/function () {
      function CepService(httpClient, storageService) {
        _classCallCheck(this, CepService);

        this.httpClient = httpClient;
        this.storageService = storageService;
      }

      _createClass(CepService, [{
        key: "buscaEnderecoCEP",
        value: function buscaEnderecoCEP(cep) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var url;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    url = 'https://viacep.com.br/ws/' + cep + '/json';
                    return _context3.abrupt("return", this.httpClient.get(url).toPromise());

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "converterRespostaParaCep",
        value: function converterRespostaParaCep(cepNaResposta) {
          var endereco = cepNaResposta.logradouro + ", " + cepNaResposta.bairro + ", " + cepNaResposta.localidade + " - " + cepNaResposta.uf;
          this.storageService.insereStorage("endereco", endereco);
          return endereco;
        }
      }]);

      return CepService;
    }();

    CepService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }];
    };

    CepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CepService);
    /***/
  }
}]);
//# sourceMappingURL=cep-cep-module-es5.js.map