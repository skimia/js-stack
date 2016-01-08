/// <reference path="../liveApp.ts"/>

class JSStack extends Skimia.Angular.Component{
    selector = 'jsStack';
    restrict = 'E';
    manager = {
        alias: 'JSStack',
        class: JSStackManager,
        bindings: {
            //name: '@liveSection'
        }
    };
    view = {
        templateCache: 'jstack/JSStack.html',
        transclude: true
    }
}


class JSStackManager extends Skimia.Angular.Manager{

    static injectables = ['$rootScope','$scope', '$element', 'Auth','LxDialogService','LxNotificationService'];

    public services:{
        $rootScope:ng.IScope;
        $scope:ng.IScope;
        $element:JQuery;
        Auth:Skimia.Fusion.Core.Services.AuthService;
        LxDialogService:any;
        LxNotificationService:any;
    };

    protected credentials={};

    protected events;
    get Events() {
        return this.events;
    }



    public init(){

        this.registerEvents();

    }

    public registerEvents() {

        this.services.$rootScope.$on('sfc:auth:loginRequired', function(event, data){
            this.services.LxNotificationService.error('Vous n\'etes pas connecté');
            this.services.LxDialogService.open('loginForm');
        });

        var Events = {
            logout:()=>{
                this.services.Auth.logout();
            },
            login:()=>{
                this.services.LxDialogService.open('loginForm');

            },
            doLogin:(email,password)=>{
                this.services.Auth.login(email,password);
                this.credentials = {};
                this.services.LxDialogService.close('loginForm');
            }
        };

        this.events = Events;
    }
}

jStackApp.bindComponent(JSStack);
