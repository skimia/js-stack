
/// <reference path="vendors/framework.ts"/>
/// <reference path="vendors/js-data-angular.d.ts"/>

var jStackApp = new Skimia.Angular.Module('jstack', ['js-data','lumx','fusion.core','LocalStorageModule']);

jStackApp.module.config(function($sfcConfigProvider:Skimia.Fusion.Core.Providers.ConfigProvider, $sfcEventProvider:Skimia.Fusion.Core.Providers.EventProvider){

    console.log($sfcConfigProvider);
    console.log($sfcEventProvider);

    $sfcConfigProvider.fusionConfig(
        'http://localhost/skimia.dev/skimia-os2/public/skimia.api.svc',
        Skimia.Fusion.Core.Providers.FusionTree.unregistered_x,
        'skimia',
        'v1'
    );
    $sfcConfigProvider.setAuthenticationMethod('jwt');

    $sfcConfigProvider.writeDefaults(
        Skimia.Fusion.Core.Providers.ConfigWritable.AngularHttp |
        Skimia.Fusion.Core.Providers.ConfigWritable.AngularResource |
        Skimia.Fusion.Core.Providers.ConfigWritable.AngularData
    );

    $sfcEventProvider.injectDefaultsHandlers();


});
