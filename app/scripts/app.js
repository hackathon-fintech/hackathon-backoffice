'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'swagger-client',
    'angular-loading-bar',
    'datatables'
  ])
  .run(function($rootScope, swaggerClient) {
    $rootScope.api = swaggerClient(BancoInteligenteSchema);
    window.localStorage.setItem('APP_SECRET', '4m9fvhgi58gqqa5akuiv0al6t9');
    $rootScope.atendidos = 24;
  })
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });

    $urlRouterProvider.otherwise('/dashboard/usersInBank');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: [
                  'scripts/directives/header/header.js',
                  'scripts/directives/header/header-notification/header-notification.js',
                  'scripts/directives/sidebar/sidebar.js',
                  'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                ]
              }),
              $ocLazyLoad.load({
                name: 'toggle-switch',
                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                  "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                ]
              }),
              $ocLazyLoad.load({
                name: 'ngAnimate',
                files: ['bower_components/angular-animate/angular-animate.js']
              })
            $ocLazyLoad.load({
              name: 'ngCookies',
              files: ['bower_components/angular-cookies/angular-cookies.js']
            })
            $ocLazyLoad.load({
              name: 'ngResource',
              files: ['bower_components/angular-resource/angular-resource.js']
            })
            $ocLazyLoad.load({
              name: 'ngSanitize',
              files: ['bower_components/angular-sanitize/angular-sanitize.js']
            })
            $ocLazyLoad.load({
              name: 'ngTouch',
              files: ['bower_components/angular-touch/angular-touch.js']
            })
          }
        }
      })
      .state('dashboard.home', {
        url: '/home',
        controller: 'MainCtrl',
        templateUrl: 'views/dashboard/home.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: [
                'scripts/controllers/main.js',
                'scripts/directives/timeline/timeline.js',
                'scripts/directives/notifications/notifications.js',
                'scripts/directives/chat/chat.js',
                'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form', {
        templateUrl: 'views/form.html',
        url: '/form'
      })
      .state('dashboard.blank', {
        templateUrl: 'views/pages/blank.html',
        url: '/blank'
      })
      .state('login', {
        templateUrl: 'views/pages/login.html',
        url: '/login'
      })
      .state('print', {
        templateUrl: 'views/print.html',
        url: '/print?deposits',
        controller: 'PrintCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'print.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/print.js']
              })
          }
        }
      })
      .state('dashboard.usersInBank', {
        templateUrl: 'views/users_in_bank.html',
        url: '/usersInBank',
        controller: 'UsersInBankCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'usersInBank.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/usersInBank.js', 'scripts/directives/dashboard/stats/stats.js']
              })
          }
        }
      })
      .state('dashboard.deposit', {
        templateUrl: 'views/deposit.html',
        url: '/deposit',
        controller: 'DepositCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'deposit.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/deposit.js', 'scripts/directives/dashboard/stats/stats.js']
              })
          }
        }
      })
      .state('dashboard.executive', {
        templateUrl: 'views/executive.html',
        url: '/executive',
        controller: 'ExecutiveCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'executive.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/executive.js']
              })
          }
        }
      })
      .state('dashboard.informations', {
        templateUrl: 'views/informations.html',
        url: '/informations',
        controller: 'InformationsCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'informations.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/informations.js', 'scripts/directives/dashboard/stats/stats.js']
              })
          }
        }
      })
      .state('dashboard.emergencies', {
        templateUrl: 'views/emergencies.html',
        url: '/emergencies',
        controller: 'EmergenciesCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'emergencies.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/emergencies.js']
              })
          }
        }
      })
      .state('dashboard.userRequirements', {
        templateUrl: 'views/userRequirements.html',
        url: '/userRequirements?user',
        controller: 'UserRequirementsCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'userRequirements.js'
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/userRequirements.js']
              })
          }
        }
      })
      .state('dashboard.chart', {
        templateUrl: 'views/chart.html',
        url: '/chart',
        controller: 'ChartCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'chart.js',
                files: [
                  'bower_components/angular-chart.js/dist/angular-chart.min.js',
                  'bower_components/angular-chart.js/dist/angular-chart.css'
                ]
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/chartContoller.js']
              })
          }
        }
      })
      .state('dashboard.table', {
        templateUrl: 'views/table.html',
        url: '/table'
      })
      .state('dashboard.panels-wells', {
        templateUrl: 'views/ui-elements/panels-wells.html',
        url: '/panels-wells'
      })
      .state('dashboard.buttons', {
        templateUrl: 'views/ui-elements/buttons.html',
        url: '/buttons'
      })
      .state('dashboard.notifications', {
        templateUrl: 'views/ui-elements/notifications.html',
        url: '/notifications'
      })
      .state('dashboard.typography', {
        templateUrl: 'views/ui-elements/typography.html',
        url: '/typography'
      })
      .state('dashboard.icons', {
        templateUrl: 'views/ui-elements/icons.html',
        url: '/icons'
      })
      .state('dashboard.grid', {
        templateUrl: 'views/ui-elements/grid.html',
        url: '/grid'
      })
  }]);