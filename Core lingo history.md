This file is to help updating core translations from version to version.

Changes in Lingo.js are shown below for each version.
Note that some commits have changes in other files;
some only have changes of codestyle which may guide you, but they don't affect functionality.

v2.10.1 ([update example](https://github.com/TiddlyWiki/translations/commit/1292aaa))
* [2b21dbd](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2b21dbdc2893d6684a02a0b9340717cf71d9b336) update the upgrade wizard (`config.tasks.upgrade`, `config.macros.upgrade.wizardTitle`, `.step1Title`)
* [e0d20ec](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/e0d20ec3fcbecbc5d006304de5cbb58ab4f60259) update the GettingStarted shadow

v2.10.0 ([update example](https://github.com/TiddlyWiki/translations/commit/7371ff4), [make title "GettingStarted" easily translatable](https://github.com/TiddlyWiki/translations/commit/832dee8))
* [20ec30c](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/20ec30c57095d689ed2c9b9c892def79a846dcb3) remove an extra link in GettingStarted
* [49da59f](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/49da59ffa69cea59b6c911b60fa47bdd23a5e480) add `errorVerifyingBackup` to `config.macros.upgrade`
* [4d4e19d](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/4d4e19ddc17d94f0b65b7c3dbb7aa936f1ce02b8) update instructions in the upgrade wizard

v2.9.4 (update examples: [main](https://github.com/TiddlyWiki/translations/commit/2a2ee7c), [optional codestyle update](https://github.com/TiddlyWiki/translations/commit/bf64a6d))
* [edcd6b3](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/edcd6b3) Add description for chkPreventAsyncSaving
* [65977fe](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/65977fe) Update UI in step1Html for options macro
* [6990f19](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/6990f19#diff-9aa6abd771e6f878f084695b64c9549f38348152cd66901c60304313df6ec5ce), [2eb045f](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2eb045f), [d75345d](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/d75345d) codestyle: reduce line lengths in Lingo.js
  * Note: this is an optional update, it makes code more readable, but doesn't affect the translation itself


v2.9.3 ([update example](https://github.com/TiddlyWiki/translations/commit/19a3c62))
* [2611b86](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2611b86) Sort options alphabetically
  * Note: this is an optional update, it makes the options list easier to look through, but doesn't affect the translation itself
* [97957e9](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/97957e9) Update savedSnapshotError message
* [89833e5](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/89833e5) Improve annotation of SystemSettings

v2.9.2 ([update example](https://github.com/TiddlyWiki/translations/commit/f4747f5))
* [2f83235](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2f83235) Shorten mainSaved
* [9f9ace2](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/9f9ace2), [172bebf](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/172bebf) Introduce txtUpgradeCoreURI option to overwrite default URI for loading TW core when upgrading

v2.9.1 ([update example](https://github.com/TiddlyWiki/translations/commit/08f11c3))
* [e957aa1](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/e957aa1) Add option description for chkRemoveExtraMarkers

v2.8.1-2.9.0
* no changes

v2.8.0 ([update example](https://github.com/TiddlyWiki/translations/commit/802a0f2))
* [8bf8ca0](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/8bf8ca0) Download saving: add mainDownload, mainDownloadManual to config.messages

v2.7.0-2.7.2
* no changes

v2.6.6 ([update example](https://github.com/TiddlyWiki/translations/commit/fa5c60d))
* [e901015](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/e901015) Either remove lingo for sync (removed from core), or [keep](https://github.com/TiddlyWiki/translations/commit/fa5c60d) it for backwards compatibility

v2.6.5 ([update example](https://github.com/TiddlyWiki/translations/commit/4a5cb0a))
* [6e74ae4](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/6e74ae4) Add error messages for importing

v2.6.4
* no changes

v2.6.3 ([update example](https://github.com/TiddlyWiki/translations/commit/3afe0d0))
* [9a3bf25](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/9a3bf25) Remove unnecessary escape characters
* [8790249](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/8790249) Either remove saveChanges action from config.tasks or [keep](https://github.com/TiddlyWiki/translations/commit/3afe0d0#diff-8dfb600fe28956a2928bdc29bb31f3c61ad12de0416eadebdebf3b226c1e841eR26) it for backwards compatibility
* [11aab93](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/11aab93) Add empty placeholder for the search macro

v2.6.2
* [5db9295](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/5db9295) Add annotation for SystemSettings
* [702620b](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/702620b) Add listViewTemplateReadOnly for the plugins macro

v2.6.1
* [0fb03b7](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/0fb03b7) Add invalidCookie message
* [eefa58d](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/eefa58d) Remove unused openError in config.macros.importTiddlers

v2.6.0
* [4c9f678](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/4c9f678) Empty SiteUrl

previous changes (source: `git log --oneline -- .\js\Lingo.js`; TODO: ideally, add tags between those, down to 2.2)
* d25e8e8 Ticket #608 toolbar ">" should toggle between "more/less" and display extra commands on separate line
* 528844c Ticket #952 Give 'txtTheme' option a description so it's easier to find/understand/use
* 081935a minor documentation addition, whitespace corrections
* 7b45e3a Ticket #871 Extend the list of plugins by a version column
* 97a95ed Core - reverting error in core checked in by idiot - me.  Less/more behavior on tiddlers reinstated.
* 40124f8 Core jQuery refactoring. Deprecating hasClass and removeClass from the core.  All internall calls to thos funcitons now use jQuery directly.
* c899b81 increased core version, URL correction
* c8f8602 Ticket #739
* 2eadae7 reverting accidental commits
* 82d9883 minor adjustments
* a98f045 added info backstage tab
* ced2f43 Sync wizard row background colours are hardcoded javascript (Ticket #714)
* 909f765 Changed implied (wikiword) links to explicit links to give greater clarity to translators
* 5fecd00 Moved ToolbarCommands shadow tiddler from Lingo.js to Config.js, since it contains no localizable text
* 4124d18 Added ability to be more selective about which tiddlers are displayed in the synchronization wizard
* 4d4f35c ImportTiddlers wizard: error when specyfing non-TiddlyWiki source (ticket #620)
* ec727e9 Added option to enable/disable incremental searching (ticket #467)
* 9256e64 Fixed problem with upgrade attempts over http (ticket #584)
* 12e0d1a Added unsaved changes warning before performing upgrade (ticket #600)498bb75 Improved upgrade process to include a version check and confirmation
* message (ticket #585)
* 6b86e37 Second part of patch to support automatic core upgrades (ticket #554)44b0fd0 Removed non-ASCII characters from Lingo.js so that it can be used via a <script> tag (ticket #572)
* 2c24aa4 First part of new core upgrade mechanism (ticket #554)
* b6cb0b9 Friendlier toolbar customisation (ticket #488)
* 887f04e Corrected annotation for MarkupPostBody tiddler (ticket #499)
* 48b364b Made the warning against modifying StyleSheetLayout and StyleSheetColors be stronger (ticket #404)
* 25f3f5c Fixed problem with sync error in Internet Explorer (ticket #421)
* ...
