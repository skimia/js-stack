/// <reference path="../liveApp.ts"/>

jStackApp.module.service('User', function (DS) {
    return DS.defineResource('user');
}).run(function (Auth,User, $rootScope, LxNotificationService, LxDialogService) {

    //User.findAll();

    $rootScope.$on('sfc:auth:loginRequired', function(event, data){
        LxNotificationService.error('Vous n\'etes pas connecté');
        LxDialogService.open('test');
    });
}); // Make sure the User resource actually gets defined