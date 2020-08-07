function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["denuncia-denuncia-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/denuncia/denuncia.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/denuncia/denuncia.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDenunciaDenunciaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Denúncia\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Denúncia</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <form [formGroup]=\"formDenuncia\" (ngSubmit)=\"cadastraDenuncia()\">\r\n  <ion-item lines=\"full\">\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-input placeholder=\"Informe seu nome\" type=\"text\" formControlName=\"nome\"></ion-input>\r\n      <div *ngIf=\"formDenuncia.controls.nome.errors\">\r\n        <span *ngIf=\"formDenuncia.controls.nome.errors.required\"><small>Campo obrigatório</small></span>\r\n      </div>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item lines=\"full\">\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-input placeholder=\"Informe seu e-mail\" type=\"text\" formControlName=\"email\"></ion-input>\r\n      <div *ngIf=\"formDenuncia.controls.email.errors\">\r\n        <span *ngIf=\"formDenuncia.controls.email.errors.required\"><small>Campo obrigatório</small></span>\r\n        <span *ngIf=\"formDenuncia.controls.email.errors.pattern\"><small>Formato inválido</small></span>\r\n      </div>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-input placeholder=\"Informe o endereço da ocorrência\" type=\"text\" formControlName=\"endereco\"></ion-input>\r\n      <div *ngIf=\"formDenuncia.controls.endereco.errors\">\r\n        <span *ngIf=\"formDenuncia.controls.endereco.errors.required\"><small>Campo obrigatório</small></span>\r\n      </div>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n      <ion-datetime displayFormat=\"DD-MM-YYYY\" placeholder=\"Informe a data da ocorrência\" formControlName=\"data\"></ion-datetime>\r\n      <div *ngIf=\"formDenuncia.controls.data.errors\">\r\n        <span *ngIf=\"formDenuncia.controls.data.errors.required\"><small>Campo obrigatório</small></span>\r\n      </div>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div style=\"justify-content: space-between;\">\r\n    <ion-textarea placeholder=\"Descreva a denúncia\" type=\"text\" formControlName=\"descricao\"></ion-textarea>\r\n      <div *ngIf=\"formDenuncia.controls.descricao.errors\">\r\n        <span *ngIf=\"formDenuncia.controls.descricao.errors.required\"><small>Campo obrigatório</small></span>\r\n      </div>\r\n    </div>\r\n  </ion-item>\r\n  <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!formDenuncia.valid\">Enviar</ion-button>  \r\n  <ion-item>\r\n    <ion-label>Coordenadas: {{coordendas.latitude}}, {{coordendas.longitude}}</ion-label>\r\n  </ion-item>\r\n  <ion-button expand=\"block\" (click)=\"recuperaCoordenadas()\">Obter Localização</ion-button>\r\n</form>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/denuncia/denuncia-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/denuncia/denuncia-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: denunciaPageRoutingModule */

  /***/
  function srcAppDenunciaDenunciaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "denunciaPageRoutingModule", function () {
      return denunciaPageRoutingModule;
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


    var _denuncia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./denuncia.page */
    "./src/app/denuncia/denuncia.page.ts");

    var routes = [{
      path: '',
      component: _denuncia_page__WEBPACK_IMPORTED_MODULE_3__["denunciaPage"]
    }];

    var denunciaPageRoutingModule = function denunciaPageRoutingModule() {
      _classCallCheck(this, denunciaPageRoutingModule);
    };

    denunciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], denunciaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/denuncia/denuncia.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/denuncia/denuncia.module.ts ***!
    \*********************************************/

  /*! exports provided: denunciaPageModule */

  /***/
  function srcAppDenunciaDenunciaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "denunciaPageModule", function () {
      return denunciaPageModule;
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


    var _denuncia_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./denuncia.page */
    "./src/app/denuncia/denuncia.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _denuncia_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./denuncia-routing.module */
    "./src/app/denuncia/denuncia-routing.module.ts");

    var denunciaPageModule = function denunciaPageModule() {
      _classCallCheck(this, denunciaPageModule);
    };

    denunciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _denuncia_routing_module__WEBPACK_IMPORTED_MODULE_7__["denunciaPageRoutingModule"]],
      declarations: [_denuncia_page__WEBPACK_IMPORTED_MODULE_5__["denunciaPage"]]
    })], denunciaPageModule);
    /***/
  },

  /***/
  "./src/app/denuncia/denuncia.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/denuncia/denuncia.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDenunciaDenunciaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbnVuY2lhL2RlbnVuY2lhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/denuncia/denuncia.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/denuncia/denuncia.page.ts ***!
    \*******************************************/

  /*! exports provided: denunciaPage */

  /***/
  function srcAppDenunciaDenunciaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "denunciaPage", function () {
      return denunciaPage;
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


    var _models_denuncia_denuncia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/denuncia/denuncia */
    "./src/app/models/denuncia/denuncia.ts");
    /* harmony import */


    var _services_denuncia_denuncia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/denuncia/denuncia.service */
    "./src/app/services/denuncia/denuncia.service.ts");
    /* harmony import */


    var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/storage/storage.service */
    "./src/app/services/storage/storage.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

    var denunciaPage = /*#__PURE__*/function () {
      function denunciaPage(alertController, formBuilder, denunciaService, storageService, geolocation) {
        _classCallCheck(this, denunciaPage);

        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.denunciaService = denunciaService;
        this.storageService = storageService;
        this.geolocation = geolocation;
        this.formDenuncia = this.formBuilder.group({
          'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
          'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
          'endereco': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
          'data': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          'descricao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])]
        });
        this.recuperaEnderecoStorage();
        this.verificaCoordenadas();
      }

      _createClass(denunciaPage, [{
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
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "cadastraDenuncia",
        value: function cadastraDenuncia() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var denuncia;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    denuncia = new _models_denuncia_denuncia__WEBPACK_IMPORTED_MODULE_4__["Denuncia"]();
                    denuncia.nome = this.formDenuncia.controls["nome"].value;
                    denuncia.email = this.formDenuncia.controls["email"].value;
                    denuncia.endereco = this.formDenuncia.controls["endereco"].value;
                    denuncia.data = this.formDenuncia.controls["data"].value;
                    denuncia.descricao = this.formDenuncia.controls["descricao"].value;
                    this.denunciaService.insereDenuncia(denuncia).then(function () {
                      _this.mostraAlerta("Sucesso", "Cadastro efetuado!");
                    })["catch"](function (error) {
                      console.log(error);
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "recuperaEnderecoStorage",
        value: function recuperaEnderecoStorage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var endereco;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storageService.recuperaStorage("endereco");

                  case 2:
                    endereco = _context3.sent;
                    this.formDenuncia.controls["endereco"].setValue(endereco);
                    console.log("Endereço: " + endereco);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "recuperaCoordenadas",
        value: function recuperaCoordenadas() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.geolocation.getCurrentPosition().then(function (resp) {
                      _this2.coordenadas = resp;
                      console.log(JSON.stringify(resp));
                    })["catch"](function (error) {
                      _this2.mostraAlerta('Erro ao obter as coordenadas!', error);

                      console.log(error);
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "verificaCoordenadas",
        value: function verificaCoordenadas() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var watch;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    watch = this.geolocation.watchPosition();
                    watch.subscribe(function (data) {
                      _this3.posicoes.push(data);

                      console.log(data);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return denunciaPage;
    }();

    denunciaPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_denuncia_denuncia_service__WEBPACK_IMPORTED_MODULE_5__["DenunciaService"]
      }, {
        type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }];
    };

    denunciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-denuncia',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./denuncia.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/denuncia/denuncia.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./denuncia.page.scss */
      "./src/app/denuncia/denuncia.page.scss"))["default"]]
    })], denunciaPage);
    /***/
  },

  /***/
  "./src/app/models/denuncia/denuncia.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/denuncia/denuncia.ts ***!
    \*********************************************/

  /*! exports provided: Denuncia */

  /***/
  function srcAppModelsDenunciaDenunciaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Denuncia", function () {
      return Denuncia;
    });

    var Denuncia = function Denuncia() {
      _classCallCheck(this, Denuncia);
    };
    /***/

  },

  /***/
  "./src/app/services/denuncia/denuncia.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/denuncia/denuncia.service.ts ***!
    \*******************************************************/

  /*! exports provided: DenunciaService */

  /***/
  function srcAppServicesDenunciaDenunciaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DenunciaService", function () {
      return DenunciaService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var DenunciaService = /*#__PURE__*/function () {
      function DenunciaService(firestore) {
        _classCallCheck(this, DenunciaService);

        this.firestore = firestore;
        this.collectionName = 'denuncias';
      }

      _createClass(DenunciaService, [{
        key: "insereDenuncia",
        value: function insereDenuncia(denuncia) {
          var denunciaRecord = {
            nome: denuncia.nome,
            email: denuncia.email,
            endereco: denuncia.endereco,
            data: denuncia.data,
            descricao: denuncia.descricao,
            timestamp: new Date()
          };
          return this.firestore.collection(this.collectionName).add(denunciaRecord);
        }
      }]);

      return DenunciaService;
    }();

    DenunciaService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    DenunciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DenunciaService);
    /***/
  }
}]);
//# sourceMappingURL=denuncia-denuncia-module-es5.js.map