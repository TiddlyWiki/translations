This file is to help updating core translations from version to version.

Changes in Lingo.js are shown below for each version.
Note that some commits have changes in other files;
some only have changes of codestyle which may guide you, but they don't affect functionality.

v2.9.4
* [edcd6b3](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/edcd6b3) feat: support async loading in saving (disabled by default)
* [65977fe](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/65977fe) feat: add label element around 'Show unknown options'
* [6990f19](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/6990f19), [2eb045f](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2eb045f), [d75345d](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/d75345d) codestyle: reduce line lengths in Lingo.js

v2.9.3
* [2611b86](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2611b86) .., sort options alphabetically
* [97957e9](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/97957e9) update savedSnapshotError message
* [89833e5](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/89833e5) improve annotation of SystemSettings

v2.9.2
* [2f83235](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/2f83235) shorten mainSaved
* [9f9ace2](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/9f9ace2), [172bebf](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/172bebf) introduce txtUpgradeCoreURI option to overwrite default URI for loading TW core when upgrading

v2.9.1 ([update example](https://github.com/TiddlyWiki/translations/commit/08f11c3987430dac4a3386f1841f051888faa5f6))
* [e957aa1](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/e957aa1) add option description for chkRemoveExtraMarkers

v2.8.1-2.9.0
* no changes

v2.8.0 ([update example](https://github.com/TiddlyWiki/translations/commit/802a0f2fb156c527bc2f52b5a764b38be947b8f9))
* [8bf8ca0](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/8bf8ca0) download saving: add mainDownload, mainDownloadManual to config.messages

v2.7.0-2.7.2
* no changes

v2.6.6 ([update example](https://github.com/TiddlyWiki/translations/commit/fa5c60d4b0a17e0028933d770fc0c437352e1c41))
* [e901015](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/e901015) Either remove lingo for sync (removed from core), or [keep](https://github.com/TiddlyWiki/translations/commit/fa5c60d4b0a17e0028933d770fc0c437352e1c41) it for backwards compatibility

v2.6.5 ([update example](https://github.com/TiddlyWiki/translations/commit/4a5cb0abb4e25fad5d22e1fbfa0613690a688e4f))
* [6e74ae4](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/6e74ae4) Add error messages for importing

v2.6.4
* no changes

v2.6.3 ([update example](https://github.com/TiddlyWiki/translations/commit/3afe0d0d95d416e61e5faaa3e65fac525227354a))
* [9a3bf25](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/9a3bf25) Remove unnecessary escape characters
* [8790249](https://github.com/TiddlyWiki/TiddlyWikiClassic/commit/8790249) Either remove saveChanges action from config.tasks or [keep](https://github.com/TiddlyWiki/translations/commit/3afe0d0d95d416e61e5faaa3e65fac525227354a#diff-8dfb600fe28956a2928bdc29bb31f3c61ad12de0416eadebdebf3b226c1e841eR26) it for backwards compatibility
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