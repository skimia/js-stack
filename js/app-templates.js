angular.module("jstack").run(['$templateCache', function(a) { a.put('jstack/JSStack.html', '<lx-dialog class="dialog dialog--l" id="loginForm" auto-close="false" onclose="closingDialog()" onscrollend="scrollEndDialog()">\n' +
    '    <div class="dialog__header">\n' +
    '        <div class="toolbar bgc-light-blue-500 pl++">\n' +
    '            <span class="toolbar__label tc-white fs-title">\n' +
    '                Connexion au Skimia OS\n' +
    '            </span>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog__content">\n' +
    '        <lx-tabs links-tc="light" links-bgc="light-blue-500" indicator="orange-500" no-divider="true" layout="inline">\n' +
    '            <lx-tab heading="Compte Local">\n' +
    '                <div class="p+">\n' +
    '                    <p>Veuillez utiliser vos identifiants afin de vous connecter.</p>\n' +
    '\n' +
    '                    <lx-text-field label="eMail" fixed-label="true" icon="email-outline" ng-init="JSStack.credentials = {email:\'john.doe@example.com\',password:\'foobar\'}">\n' +
    '                        <input type="email" ng-model="JSStack.credentials.email">\n' +
    '                    </lx-text-field>\n' +
    '                    <lx-text-field label="Mot de passe" fixed-label="true" icon="lock-outline">\n' +
    '                        <input type="password" ng-model="JSStack.credentials.password">\n' +
    '                    </lx-text-field>\n' +
    '                </div>\n' +
    '            </lx-tab>\n' +
    '\n' +
    '            <!--<lx-tab heading="Compte Skimia">\n' +
    '                <div class="p+">\n' +
    '                    <p>Veuillez utiliser vos identifiants Skimia pour vous connecter.</p>\n' +
    '\n' +
    '                    <lx-text-field label="eMail" fixed-label="true" icon="email-outline">\n' +
    '                        <input type="email" ng-model="textFields.description">\n' +
    '                    </lx-text-field>\n' +
    '                    <lx-text-field label="Mot de passe" fixed-label="true" icon="lock-outline">\n' +
    '                        <input type="password" ng-model="textFields.password">\n' +
    '                    </lx-text-field>\n' +
    '                </div>\n' +
    '            </lx-tab>-->\n' +
    '\n' +
    '            <lx-tab heading="Réseaux Sociaux">\n' +
    '                <div flex-container="row">\n' +
    '                    <div class="p++" flex-item="8">\n' +
    '                        <p>Dans une mise a jour future</p>\n' +
    '                    </div>\n' +
    '                    <div class="p++" flex-item="4">\n' +
    '                        <button class="btn btn--s btn--blue btn--raised" lx-ripple>J\'ai besoin de ça</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </lx-tab>\n' +
    '        </lx-tabs>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="dialog__actions">\n' +
    '        <button class="btn btn--m btn--red btn--flat" lx-ripple lx-dialog-close>Retour sur webapp</button>\n' +
    '        <button class="btn btn--m btn--black btn--flat" lx-ripple\n' +
    '                ng-click="JSStack.Events.doLogin(JSStack.credentials.email,JSStack.credentials.password)">Se Connecter</button>\n' +
    '    </div>\n' +
    '</lx-dialog>\n' +
    '\n' +
    '<div class="card">\n' +
    '    <div class="toolbar">\n' +
    '        <div class="toolbar__left mr+++">\n' +
    '            <button class="btn btn--l btn--black btn--icon" lx-ripple>\n' +
    '                <i class="mdi mdi-menu"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '        <span class="toolbar__label fs-title">JS Stack example app</span>\n' +
    '\n' +
    '        <div class="toolbar__right">\n' +
    '            <lx-search-filter closed theme="light"></lx-search-filter>\n' +
    '\n' +
    '            <button class="btn btn--m btn--green btn--fab" lx-ripple\n' +
    '                    ng-hide="JSStack.services.Auth.IsConnected"\n' +
    '                    ng-click="JSStack.Events.login()">\n' +
    '                <i class="mdi mdi-lock"></i>\n' +
    '            </button>\n' +
    '\n' +
    '            <lx-dropdown position="right" from-top ng-show="JSStack.services.Auth.IsConnected">\n' +
    '                <button class="btn btn--m btn--blue btn--fab" lx-ripple lx-dropdown-toggle>\n' +
    '                    <i class="mdi mdi-lock-open"></i>\n' +
    '                </button>\n' +
    '\n' +
    '                <lx-dropdown-menu>\n' +
    '                    <ul>\n' +
    '                        <li><a class="dropdown-link dropdown-link--is-header" ng-bind="JSStack.services.Auth.User.email"></a></li>\n' +
    '                        <li><a class="dropdown-link" ng-click="JSStack.Events.logout()">Se déconnecter</a></li>\n' +
    '                    </ul>\n' +
    '                </lx-dropdown-menu>\n' +
    '            </lx-dropdown>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	 }]);