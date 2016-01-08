/// <reference path="../FusionCore.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Skimia;
(function (Skimia) {
    var Fusion;
    (function (Fusion) {
        var Core;
        (function (Core) {
            var Providers;
            (function (Providers) {
                var ConfigProvider = (function (_super) {
                    __extends(ConfigProvider, _super);
                    function ConfigProvider() {
                        _super.apply(this, arguments);
                    }
                    ConfigProvider.prototype.init = function () {
                        this.$deferred = window.angular.injector(['ng']).get('$q').defer();
                        this.$deferload = window.angular.injector(['ng']).get('$q').defer();
                        this.config = new Config(this);
                        console.log(this.config);
                    };
                    ConfigProvider.prototype.getDeferredConfig = function () {
                        return this.$deferred.promise;
                    };
                    ConfigProvider.prototype.getDeferredLoading = function () {
                        return this.$deferload.promise;
                    };
                    ConfigProvider.prototype.$get = function () {
                        return this.config;
                    };
                    ConfigProvider.injectables = [];
                    return ConfigProvider;
                })(Skimia.Angular.Service);
                Providers.ConfigProvider = ConfigProvider;
                this.$deferload;
                fusionConfig(apiPath, string, tree, FusionTree, subType, string, version, string);
                void {
                    this: .config.setServicePath(apiPath),
                    this: .config.setFusionAccept(tree, subType, version)
                };
                setFusionShield(shield, string);
                {
                    this.config.setFusionShield(shield);
                }
                writeDefaults(flags);
                {
                    this.config.setFlags(flags);
                    this.$deferred.resolve(this.config);
                }
            })(Providers = Core.Providers || (Core.Providers = {}));
        })(Core = Fusion.Core || (Fusion.Core = {}));
    })(Fusion = Skimia.Fusion || (Skimia.Fusion = {}));
})(Skimia || (Skimia = {}));
var Config = (function () {
    function Config(provider) {
        this.provider = provider;
    }
    Object.defineProperty(Config.prototype, "Accept", {
        get: function () {
            return this.acceptHeader;
        },
        set: function (value) {
            this.acceptHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Shield", {
        get: function () {
            return this.shieldHeader ? this.shieldHeader : false;
        },
        set: function (value) {
            this.shieldHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "ServicePath", {
        set: function (value) {
            this.servicePath = value;
        },
        enumerable: true,
        configurable: true
    });
    Config.prototype.setFusionAccept = function (tree, subType, version) {
        this.Accept = 'application/' + tree + '.' + subType + '.' + version + '+json';
    };
    Config.prototype.setFusionShield = function (shield) {
        this.Shield = shield;
    };
    Config.prototype.setServicePath = function (path) {
        this.ServicePath = path;
    };
    Object.defineProperty(Config.prototype, "Flags", {
        get: function () {
            return this.flags;
        },
        set: function (value) {
            console.log(value);
            this.flags = value;
        },
        enumerable: true,
        configurable: true
    });
    Config.prototype.setFlags = function (flags) {
        this.Flags = flags;
    };
    return Config;
})();
exports.Config = Config;
(function (ConfigWritable) {
    ConfigWritable[ConfigWritable["None"] = 0] = "None";
    ConfigWritable[ConfigWritable["AngularHttp"] = 1] = "AngularHttp";
    ConfigWritable[ConfigWritable["AngularResource"] = 2] = "AngularResource";
    ConfigWritable[ConfigWritable["AngularData"] = 4] = "AngularData";
})(exports.ConfigWritable || (exports.ConfigWritable = {}));
var ConfigWritable = exports.ConfigWritable;
(function (FusionTree) {
    FusionTree[FusionTree["unregistered_x"] = 'x'] = "unregistered_x";
    FusionTree[FusionTree["personal_prs"] = 'prs'] = "personal_prs";
    FusionTree[FusionTree["vendor_vnd"] = 'vnd'] = "vendor_vnd";
})(exports.FusionTree || (exports.FusionTree = {}));
var FusionTree = exports.FusionTree;
module.module.run(function ($sfcConfig, $http) {
    if ($sfcConfig.Flags & ConfigWritable.AngularHttp || $sfcConfig.Flags & ConfigWritable.AngularData) {
        $http.defaults.headers.common = {
            Accept: $sfcConfig.Accept
        };
        if ($sfcConfig.Shield) {
            $http.defaults.headers.common['shield'] = $sfcConfig.Shield;
        }
    }
});
module.module.config(function ($sfcConfigProvider, DSHttpAdapterProvider) {
    var _this = this;
    $sfcConfigProvider.getDeferredConfig().then(function (config) {
        if (config.Flags & ConfigWritable.AngularData) {
            DSHttpAdapterProvider.defaults.basePath = 'http://localhost/skimia.dev/skimia-os2/public/skimia.api.svc';
            _this.$deferload.resolve(config);
        }
    });
});
module.bindProvider('$sfcConfig', ConfigProvider);
