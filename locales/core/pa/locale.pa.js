/***
|Name          |PunjabiTranslationPlugin|
|Description   |Translation of TiddlyWiki into Punjabi|
|Author        |Shavinder Singh (shavinderpalsingh (at) gmail (dot) com)|
|CodeRepository|http://punjabi.tiddlyspot.com/#PunjabiTranslationPlugin|
|Version       |0.0.1|
|Date          |Feb 5, 2012|
|Comments      |Please make comments at http://groups.google.com/group/tiddlywiki|
|License       |[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|~CoreVersion  |2.6.1|
***/

//{{{
//--
//-- Translateable strings
//--

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "pa"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options, { txtUserName: "ਤੁਹਾਡਾਨਾਮ" });

merge(config.tasks, {
	save: { text: "ਸੇਵ", tooltip: "ਇਸ ਟਿਡਲੀਵਿਕੀ ਦੇ ਬਦਲਾਓ ਸੇਵ ਕਰੋ", action: saveChanges },
	sync: { text: "ਸੁਮੇਲੋ", tooltip: "ਬਦਲਾਵਾਂ ਨੂ ਬਾਕੀ ਟਿਡਲੀਵਿਕੀ ਫਾਈਲਾਂ ਤੇ ਸਰਵਰਾਂ ਨਾਲ ਸੁਮੇਲੋ", content: '<<sync>>' },
	importTask: { text: "ਇੰਪੋਰਟ", tooltip: "ਟਿਡਲਰਾਂ ਅਤੇ ਪਲੱਗਿਨਾਂ ਨੂੰ ਦੂਜੀਆਂ ਟਿਡਲੀਵਿਕੀ ਫਾਈਲਾਂ ਅਤੇ ਸਰਵਰਾਂ ਤੋਂ ਇੰਪੋਰਟ ਕਰੋ", content: '<<importTiddlers>>' },
	tweak: { text: "ਟ੍ਵੀਕ", tooltip: "ਟਿਡਲੀਵਿਕੀ ਦੀ ਦਿਖ ਅਤੇ ਵਿਓਹਾਰ ਨੂੰ ਟ੍ਵੀਕੋ", content: '<<options>>' },
	upgrade: { text: "ਅਪਗ੍ਰੇਡ", tooltip: "ਟਿਡਲੀਵਿਕੀ ਦੇ ਕੋਰ-ਕੋਡ ਨੂੰ ਅਪਗ੍ਰੇਡ ਕਰੋ", content: '<<upgrade>>' },
	plugins: { text: "ਪਲੱਗਿਨ", tooltip: "ਇੰਸਟਾਲ ਹੋਏ ਹੋਏ ਪਲੱਗਿਨਾਂ ਨੂੰ ਮੈਨੇਜ ਕਰੋ", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	txtUserName: "ਤੁਹਾਡੇ ਸੰਪਾਦਨਾਂ ਲਈ ਯੂਜ਼ਰ-ਨੇਮ",
	chkRegExpSearch: "ਖੋਜਾਂ ਲਈ ਰੈਗੂਲਰ-ਐਕਸਪ੍ਰੈਸ਼ਨ ਚਾਲੂ ਕਰੋ",
	chkCaseSensitiveSearch: "ਕੇਸ-ਸੰਵੇਦਨਸ਼ੀਲ ਖੋਜ",
	chkIncrementalSearch: "ਅੱਖਰ-ਅੱਖਰ ਵ੍ਰਿਦੀਸ਼ੀਲ ਖੋਜ",
	chkAnimate: "ਐਨੀਮੇਸ਼ਨ ਚਾਲੂ ਕਰੋ",
	chkSaveBackups: "ਬਦਲਾਓ ਸੇਵ ਕਰਨ ਵੇਲੇ ਬੈਕਅਪ ਫਾਈਲ ਰੱਖੋ",
	chkAutoSave: "ਆਪਣੇ ਆਪ ਬਦਲਾਓ ਸੇਵ ਕਰੋ",
	chkGenerateAnRssFeed: "ਬਦਲਾਓ ਸੇਵ ਕਰਣ ਵੇਲੇ RSS ਫੀਡ ਪੈਦਾ ਕਰੋ",
	chkSaveEmptyTemplate: "ਬਦਲਾਓ ਸੇਵ ਕਰਣ ਵੇਲੇ ਖਾਲੀ ਟੈਂਪਲੇਟ ਪੈਦਾ ਕਰੋ",
	chkOpenInNewWindow: "ਬਾਹਰਲੇ ਲਿੰਕ ਨਵੀਂ ਖਿੜਕੀ ਵਿਚ ਖੋਲੋ",
	chkToggleLinks: "ਟਿਡਲਰ ਖੋਲਣ ਵਾਲੇ ਲਿੰਕਾਂ ਤੇ ਕਲਿਕ ਕਰਣ ਨਾਲ ਓਹ ਬੰਦ ਹੋ ਜਾਣ",
	chkHttpReadOnly: "HTTP ਰਾਹੀ ਦੇਖੇ ਜਾਣ ਵੇਲੇ ਸੰਪਾਦਨ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਛੁਪਾ ਦੇਓ",
	chkForceMinorUpdate: "ਟਿਡਲਰਾਂ ਦੇ ਸੰਪਾਦਨ ਵੇਲੇ ਸੰਪਾਦਕ ਯੂਜ਼ਰ-ਨੇਮ  ਅਤੇ ਤਰੀਕ ਨੂੰ ਨਵੀਨ ਨਾ ਕਰੋ",
	chkConfirmDelete: "ਟਿਡਲਰਾਂ ਨੂੰ ਮਿਟਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪੁਸ਼ਟੀ ਦੀ ਲੋੜ ਕਰੋ",
	chkInsertTabs: "ਟੈਬ ਕੀਅ ਦਾ ਪ੍ਰਯੋਗ ਫੀਲਡਾਂ ਵਿਚਾਲੇ ਚਲਣ ਦੀ ਬਜਾਏ ਟੈਬ ਅੱਖਰ ਪਾਉਣ ਲਈ ਕਰੋ",
	txtBackupFolder: "ਬੈਕਅਪਾਂ ਵਾਸਤੇ ਪ੍ਰਯੋਗ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਫੋਲਡਰ ਦਾ ਨਾਮ",
	txtMaxEditRows: "ਸੰਪਾਦਨ ਖਾਨਿਆਂ ਵਿਚ ਵਧ ਤੋਂ ਵਧ ਸਤਰਾਂ",
	txtTheme: "ਪ੍ਰਯੋਗ ਹੋਣ ਵਾਲੇ ਥੀਮ ਦਾ ਨਾਮ",
	txtFileSystemCharSet: "ਬਦਲਾਵ ਸੇਵ ਕਰਣ ਲਈ ਡਿਫਾਲਟ ਕਰੈਕਟਰ-ਸੈੱਟ (ਕੇਵਲ ਫਾਇਰਫਾਕਸ/ਮੌਜੀਲਾ ਲਈ)" });

merge(config.messages, {
	customConfigError: "ਪਲੱਗਿਨ ਲੋਡ ਕਰਦਿਆਂ ਸਮੱਸਿਆਵਾਂ ਦਾ ਸਾਹਮਣਾ ਹੋਇਆ. ਵੇਰਵੇ ਲਈ ਪਲੱਗਿਨ-ਮਨੇਜਰ ਦੇਖੋ",
	pluginError: "ਐਰਰ: %0",
	pluginDisabled: "ਐਗਜ਼ੀਕਿਊਟ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਕਿਉਂਕਿ 'systemConfigDisable' ਟੈਗ ਨਾਲ ਕਿਰਿਆਹੀਣ ਕੀਤਾ ਗਿਆ",
	pluginForced: "'systemConfigForce' ਟੈਗ ਦ੍ਵਾਰਾ ਜ਼ਬਰਨ ਐਗਜ਼ੀਕਿਊਟ ਕੀਤਾ ਗਿਆ",
	pluginVersionError: "ਐਗਜ਼ੀਕਿਊਟ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਕਿਉਂਕਿ ਇਸ ਪਲੱਗਿਨ ਨੂੰ ਟਿਡਲੀਵਿਕੀ ਦੀ ਨਵੀਨ ਵਰਜ਼ਨ ਦੀ ਲੋੜ ਹੈ",
	nothingSelected: "ਕੁਝ ਵੀ ਚੁਣਿਆ ਨਹੀਂ ਹੋਇਆ. ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਇਕ ਜਾਂ ਵਧ ਆਈਟਮਾਂ ਨੂੰ ਚੁਣਨਾ ਹੋਵੇਗਾ.",
	savedSnapshotError: "ਇੰਜ ਲਗਦਾ ਹੈ ਕੀ ਟਿਡਲੀਵਿਕੀ ਸਹੀ ਸੇਵ ਨਹੀਂ ਕੀਤੀ ਗਈ. ਕਿਰਪਾ ਕਰਕੇ ਵੇਰਵੇ ਲਈ http://www.tiddlywiki.com/#Download ਦੇਖੋ.",
	subtitleUnknown: "(ਅਗਿਆਤ)",
	undefinedTiddlerToolTip: "'%0' ਟਿਡਲਰ ਹਾਲੇ ਹੋਂਦ ਵਿਚ ਨਹੀਂ ਹੈ",
	shadowedTiddlerToolTip: "ਟਿਡਲਰ '%0' ਹੋਂਦ ਵਿਚ ਨਹੀਂ ਹੈ, ਪਰ ਉਸਦੀ ਇਕ ਪੂਰਵ-ਨਿਸ਼ਚਿਤ ਕੀਮਤ ਹੈ",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "%0 ਦਾ ਬਾਹਰਲਾ ਲਿੰਕ",
	noTags: "ਕੋਈ ਵੀ ਟੈਗ ਹੋਏ ਟਿਡਲਰ ਨਹੀਂ ਹਨ",
	notFileUrlError: "ਬਦਲਾਓ ਸੇਵ ਕਰਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਇਸ ਟਿਡਲੀਵਿਕੀ ਨੂੰ ਇਕ ਫਾਈਲ ਰੂਪ'ਚ ਸੇਵ ਕਰਨਾ ਪਵੇਗਾ",
	cantSaveError: "ਬਦਲਾਓ ਸੇਵ ਕਰਨਾ ਸੰਭਵ ਨਹੀਂ ਹੈ. ਸੰਭਵ ਕਾਰਣਾਂ 'ਚ ਸ਼ਾਮਿਲ ਹਨ:\n ਤੁਹਾਡਾ ਬ੍ਰਾਉਜ਼ਰ ਸੇਵ ਕਰਣ ਨੂੰ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ (ਫਾਇਰਫੋਕਸ, ਇੰਟ੍ਰਨੈਟ ਐਕਸਪਲੋਰਰ, ਸਫਾਰੀ, ਔਪੇਰਾ ਸਾਰੇ ਸਹੀ ਕਨਫਿਗਰ ਕੀਤੇ ਹੋਣ ਤੇ ਕੰਮ ਕਰਦੇ ਹਨ)\n- ਤੁਹਾਡੀ ਟਿਡਲੀਵਿਕੀ ਦੇ ਪਾਥਨੇਮ ਵਿਚ ਗੈਰ-ਕਾਨੂੰਨੀ ਅੱਖਰ ਸ਼ਾਮਿਲ ਹਨ\n- ਟਿਡਲੀਵਿਕੀ HTML ਫਾਈਲ ਸਥਾਨਾਂਤਰਿਤ ਜਾਂ ਨਾਮਾਂਤ੍ਰਿਤ ਕੀਤੀ ਗਈ ਹੈ",
	invalidFileError: "ਮੂਲ ਫਾਈਲ %0 ਵੈਧ ਟਿਡਲੀਵਿਕੀ ਨਹੀਂ ਜਾਪਦੀ",
	backupSaved: "ਬੈਕੱਪ ਸੇਵ ਕਰ ਲਿਆ ਗਿਆ",
	backupFailed: "ਬੈਕੱਪ ਫਾਈਲ ਸੇਵ ਕਰਨਾ ਅਸਫਲ ਰਿਹਾ",
	rssSaved: "RSS ਫੀਡ ਸੇਵ ਕਰ ਲਈ ਗਈ",
	rssFailed: "RSS ਫੀਡ ਫਾਈਲ ਸੇਵ ਕਰਨਾ ਅਸਫਲ ਰਿਹਾ",
	emptySaved: "ਖਾਲੀ ਖਾਕਾ ਸੇਵ ਕਰ ਲਿਆ ਗਿਆ",
	emptyFailed: "ਖਾਲੀ ਖਾਕਾ ਸੇਵ ਕਰਨਾ ਅਸਫਲ ਰਿਹਾ",
	mainSaved: "ਮੁੱਖ ਟਿਡਲੀਵਿਕੀ ਫਾਈਲ ਸੇਵ ਕਰ ਲਈ ਗਈ",
	mainFailed: "ਮੁੱਖ ਟਿਡਲੀਵਿਕੀ  ਫਾਈਲ ਸੇਵ ਕਰਨਾ ਅਸਫਲ ਰਿਹਾ. ਤੁਹਾਡੀਆਂ ਤਬਦੀਲੀਆਂ ਸੇਵ ਨਹੀਂ ਹੋਈਆਂ",
	macroError: "ਮੈਕਰੋ ਵਿਚ ਐਰਰ <<\%0>>",
	macroErrorDetails: "ਮੈਕਰੋ ਐਗਜ਼ੀਕਿਊਟ ਕਰਣ ਦੌਰਾਨ ਐਰਰ <<\%0>>:\n%1",
	missingMacro: "ਅਜਿਹਾ ਕੋਈ ਮੈਕਰੋ ਨਹੀਂ",
	overwriteWarning: "'%0' ਨਾਮੀ ਟਿਡਲਰ ਪਹਿਲਾਂ ਹੀ ਹੋਂਦ ਵਿਚ ਹੈ. ਉਸਨੂੰ ਅਧਿਲੇਖਿਤ ਕਰਣ ਲਈ OK ਕਰੋ",
	unsavedChangesWarning: "ਚੇਤਾਵਨੀ! ਟਿਡਲੀਵਿਕੀ ਵਿਚ ਸੇਵ ਨਾ ਕੀਤੇ ਹੋਏ ਬਦਲਾਓ ਹਨ\n\nਸੇਵ ਕਰਣ ਲਈ OK ਚੁਣੋ\nਰੱਦ ਕਰਣ ਲਈ CANCEL ਚੁਣੋ",
	confirmExit: "--------------------------------\n\nਟਿਡਲੀਵਿਕੀ ਵਿਚ ਸੇਵ ਨਾ ਕੀਤੇ ਹੋਏ ਬਦਲਾਓ ਹਨ. ਜੇ ਤੁਸੀਂ ਜਾਰੀ ਰੱਖਿਆ ਤਾਂ ਓਹ ਬਦਲਾਓ ਗੁਆ ਲਵੋਂਗੇ\n\n--------------------------------",
	saveInstructions: "ਬਦਲਾਓ ਸੇਵ ਕਰੋ",
	unsupportedTWFormat: "ਅਣਸਮਰਥਿਤ ਟਿਡਲੀਵਿਕੀ ਫੌਰਮੈਟ '%0'",
	tiddlerSaveError: "ਟਿਡਲਰ ਸੇਵ ਕਰਦਿਆਂ ਐਰਰ '%0'",
	tiddlerLoadError: "ਟਿਡਲਰ ਲੋਡ ਕਰਦਿਆਂ ਐਰਰ '%0'",
	wrongSaveFormat: "'%0' ਸਟੋਰੇਜ ਫੌਰਮੈਟ ਵਿਚ ਸੇਵ ਨਹੀ ਕੀਤਾ ਜਾ ਸਕਦਾ. ਸੇਵ ਕਰਣ ਲਈ ਸਟੈਂਡਰਡ ਫੋਰਮੈਟ ਨੂੰ ਪ੍ਰਯੋਗ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ.",
	invalidFieldName: "ਅਵੈਧ ਫੀਲਡ ਨਾਮ %0",
	fieldCannotBeChanged: "ਫੀਲਡ '%0' ਨੂੰ ਬਦਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ",
	loadingMissingTiddler: "'%0' ਟਿਡਲਰ ਨੂੰ '%3' ਵਰਕਸਪੇਸ ਵਿਚੋਂ ਅਤੇ '%2' ਤੇ ਸਥਿਤ '%1' ਸਰਵਰ ਤੋਂ ਪੁਨ-ਪ੍ਰਾਪਤ ਕਰਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ",
	upgradeDone: "%0 ਵਰਜ਼ਨ ਤੱਕ ਅਪਗ੍ਰੇਡ ਹੁਣ ਸਮਪੂਰਣ ਹੋ ਗਿਆ\n\nਨਵੀਂ ਅਤੇ ਅਪਗ੍ਰੇਡ ਹੋਈ ਟਿਡਲੀਵਿਕੀ ਨੂੰ ਪੁਨਰ-ਲੋਡ ਕਰਣ ਲਈ 'OK' ਦੱਬੋ",
	invalidCookie: "ਅਵੈਧ ਕੁਕੀ '%0'" });

merge(config.messages.messageClose, {
	text: "ਬੰਦ",
	tooltip: "ਇਸ ਸੁਨੇਹੇ ਸਥਾਨ ਨੂੰ ਬੰਦ ਕਰੋ" });

config.messages.backstage = {
	open: { text: "ਬੈਕ ਸਟੇਜ", tooltip: "ਬੈਕ ਸਟੇਜ ਏਰੀਏ ਨੂੰ ਲੇਖਣ ਅਤੇ ਸੰਪਾਦਨ ਕਾਰਜਾਂ ਵਾਸਤੇ ਖੋਲੋ" },
	close: { text: "ਬੰਦ", tooltip: "ਬੈਕ ਸਟੇਜ ਏਰੀਏ ਨੂੰ ਬੰਦ ਕਰੋ" },
	prompt: "ਬੈਕ ਸਟੇਜ: ",
	decal: {
		edit: { text: "ਸੰਪਾਦਨ", tooltip: "'%0' ਟਿਡਲਰ ਨੂੰ ਸੰਪਾਦਿਤ ਕਰੋ" }
	}
};

config.messages.listView = {
	tiddlerTooltip: "ਇਸ ਟਿਡਲਰ ਦੇ ਪੂਰਨ ਪਾਠ ਲਈ ਕਲਿੱਕ ਕਰੋ",
	previewUnavailable: "(ਪ੍ਰੀਵਿਊ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹੈ)"
};

config.messages.dates.months = ["ਜਨਵਰੀ", "ਫਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਿਸੰਬਰ"];
config.messages.dates.days = ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁਕਰਵਾਰ", "ਸ਼ਨੀਵਾਰ"];
config.messages.dates.shortMonths = ["ਜਨ", "ਫਰ", "ਮਾਰ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕ", "ਨਵੰ", "ਦਿਸੰ"];
config.messages.dates.shortDays = ["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁਧ", "ਵੀਰ", "ਸ਼ੁਕਰ", "ਸ਼ਨੀ"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = [
	"", "", "", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "", "", "",
	""];
config.messages.dates.am = "am";
config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup, {
});

merge(config.views.wikified.tag, {
	labelNoTags: "ਕੋਈ ਟੈਗ ਨਹੀਂ",
	labelTags: "ਟੈਗ: ",
	openTag: "'%0' ਟੈਗ ਖੋਲੋ",
	tooltip: "'%0' ਨਾਲ ਟੈਗ ਕੀਤੇ ਟਿਡਲਰ ਦਿਖਾਓ",
	openAllText: "ਸਾਰੇ ਖੋਲੋ",
	openAllTooltip: "ਇਹ ਸਾਰੇ ਟਿਡਲਰ ਖੋਲੋ",
	popupNone: "'%0' ਨਾਲ ਟੈਗ ਕੀਤੇ ਹੋਰ ਕੋਈ ਟਿਡਲਰ ਨਹੀਂ ਹਨ" });

merge(config.views.wikified, {
	defaultText: "'%0'ਟਿਡਲਰ ਹਾਲੇ ਹੋਂਦ ਵਿਚ ਨਹੀਂ ਹੈ. ਸਿਰਜਣ ਵਾਸਤੇ ਡਬਲ-ਕਲਿੱਕ ਕਰੋ.",
	defaultModifier: "(ਲਾਪਤਾ)",
	shadowModifier: "(ਅੰਤਰ-ਨਿਰਮਿਤ ਪਰਛਾਵਾਂ ਟਿਡਲਰ)",
	dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "ਸਿਰਜਿਆ" });

merge(config.views.editor, {
	tagPrompt: "ਖਾਲੀ ਥਾਂ ਨਾਲ ਵਿਛੋੜ ਕੇ ਟੈਗ ਟਾਈਪ ਕਰੋ, ਲੋੜ ਪਵੇ ਤਾਂ [[ ਡਬਲ ਬਰੈਕਟ ]] ਦੀ ਵਰਤੋਂ ਕਰੋ , ਜਾਂ ਮੌਜੂਦਾ ਟੈਗਸ ਨੂੰ ਸ਼ਾਮਿਲ ਕਰੋ",
	defaultText: "'%0' ਲਈ ਟੈਕਸਟ ਟਾਈਪ ਕਰੋ" });

merge(config.views.editor.tagChooser, {
	text: "ਟੈਗ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਲਾਉਣ ਲਈ ਮੌਜੋਦਾ ਟੈਗ ਚੁਣੋ",
	popupNone: "ਕੋਈ ਵੀ ਟੈਗ ਪਰਿਭਾਸ਼ਿਤ ਨਹੀਂ",
	tagTooltip: "'%0' ਟੈਗ ਲਾਓ" });

merge(config.messages, {
	sizeTemplates: [
		{ unit: 1024 * 1024 * 1024, template: "%0\u00a0GB" },
		{ unit: 1024 * 1024, template: "%0\u00a0MB" },
		{ unit: 1024, template: "%0\u00a0KB" },
		{ unit: 1, template: "%0\u00a0B" }
	] });

merge(config.macros.search, {
	label: "ਖੋਜ",
	prompt: "ਇਸ ਟਿਡਲੀਵਿਕੀ ਵਿਚ ਖੋਜੋ",
	accessKey: "F",
	successMsg: "%1 ਨਾਲ ਰਲਦੇ %0 ਟਿਡਲਰ ਮਿਲੇ",
	failureMsg: "%0 ਨਾਲ ਰਲਦਾ ਕੋਈ ਟਿਡਲਰ ਨਹੀਂ ਮਿਲਿਆ" });

merge(config.macros.tagging, {
	label: "ਟੈਗ ਕਰਦਾ ਹੈ: ",
	labelNotTag: "ਟੈਗ ਨਹੀ ਕਰਦਾ",
	tooltip: "'%0' ਨਾਲ ਟੈਗ ਕੀਤੇ ਟਿਡਲਰਾਂ ਦੀ ਸੂਚੀ" });

merge(config.macros.timeline, {
	dateFormat: "DD MMM YYYY" });// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D

merge(config.macros.allTags, {
	tooltip: "'%0' ਨਾਲ ਟੈਗ ਕੀਤੇ ਟਿਡਲਰ ਦਿਖਾਓ",
	noTags: "ਕੋਈ ਵੀ ਟੈਗ ਕੀਤੇ ਟਿਡਲਰ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹਨ" });

config.macros.list.all.prompt = "ਸਾਰੇ ਟਿਡਲਰ ਵਰਣਕਰਮ ਅਨੁਸਾਰ";
config.macros.list.missing.prompt = "ਟਿਡਲਰ ਜਿਹਨਾਂ ਦੇ ਲਿੰਕ ਪ੍ਰਾਪਤ ਹਨ ਪਰ ਪਰਿਭਾਸ਼ਿਤ ਨਹੀਂ ਕੀਤੇ ਹੋਏ";
config.macros.list.orphans.prompt = "ਟਿਡਲਰ ਜਿਹੜੇ ਕਿਸੇ ਵੀ ਹੋਰ ਟਿਡਲਰ ਤੋ ਲਿੰਕ ਨਹੀ ਕੀਤੇ ਹੋਏ";
config.macros.list.shadowed.prompt = "ਟਿਡਲਰ ਜਿਹੜੇ ਡਿਫਾਲਟ ਸਮਗਰੀ ਨਾਲ ਪਰਛਾਵਾਂ-ਯੁਕਤ ਕੀਤੇ ਹੋਏ ਹਨ";
config.macros.list.touched.prompt = "ਟਿਡਲਰ ਜਿਹੜੇ ਸਥਾਨਕ ਪਧਰ ਤੇ ਪਰਿਵਰਤਿਤ ਕੀਤੇ ਗਏ ਹਨ";

merge(config.macros.closeAll, {
	label: "ਸਾਰੇ ਬੰਦ ਕਰੋ",
	prompt: "ਸਾਰੇ ਪ੍ਰਦਰਸ਼ਿਤ ਟਿਡਲਰ ਬੰਦ ਕਰੋ (ਸੰਪਾਦਿਤ ਕੀਤੇ ਜਾ ਰਹਿਆਂ ਨੂੰ ਛੱਡ ਕੇ )" });

merge(config.macros.permaview, {
	label: "ਸਥਾਈ-ਦ੍ਰਿਸ਼ ",
	prompt: "ਇਸ ਵਕਤ ਪ੍ਰਦਰਸ਼ਿਤ ਟਿਡਲਰਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਣ ਲਈ URL ਲਿੰਕ" });

merge(config.macros.saveChanges, {
	label: "ਬਦਲਾਓ ਸੇਵ ਕਰੋ",
	prompt: "ਸਾਰੇ ਟਿਡਲਰਾਂ ਨੂੰ ਇੱਕ ਨਵੀਂ ਟਿਡਲੀਵਿਕੀ 'ਚ ਸੇਵ ਕਰੋ",
	accessKey: "S" });

merge(config.macros.newTiddler, {
	label: "ਨਵਾਂ ਟਿਡਲਰ",
	prompt: "ਨਵਾਂ ਟਿਡਲਰ ਸਿਰਜੋ",
	title: "ਨਵਾਂ ਟਿਡਲਰ",
	accessKey: "N" });

merge(config.macros.newJournal, {
	label: "ਨਵਾਂ ਰੋਜ਼ਨਾਮਚਾ",
	prompt: "ਇਸ ਵਕਤ ਦੀ ਮਿਤੀ ਤੇ ਸਮੇਂ ਤੋਂ ਨਵਾਂ ਟਿਡਲਰ ਸਿਰਜੋ",
	accessKey: "J" });

merge(config.macros.options, {
	wizardTitle: "ਅਗਲੇਰੇ ਵਿਕਲਪ ਟ੍ਵੀਕੋ",
	step1Title: "ਇਹ ਵਿਕਲਪ ਤੁਹਾਡੇ ਬਰਾਉਸਰ ਵਿਚ ਕੂਕੀਜ਼ ਵਿਚ ਸੇਵ ਕੀਤੇ ਜਾਂਦੇ ਹਨ",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>ਅਗਿਆਤ ਵਿਕਲਪ ਦਿਖਾਓ </input>",
	unknownDescription: "//(ਅਗਿਆਤ)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Option", type: 'String' },
			{ name: 'Description', field: 'description', title: "Description", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Name", type: 'String' }
		],
		rowClasses: [
			{ className: 'lowlight', field: 'lowlight' }
		]
	}
});

merge(config.macros.plugins, {
	wizardTitle: "ਪਲੱਗਿਨਾਂ ਨੂੰ ਮੈਨੇਜ ਕਰੋ",
	step1Title: "ਇਸ ਵਕਤ ਲੋਡ ਕੀਤੇ ਹੋਏ ਪਲੱਗਿਨ",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(ਇਹ ਪਲੱਗਿੰਨ ਐਗਜ਼ੀਕਿਊਟ ਨਹੀਂ ਹੋਇਆ ਕਿਉਂਕਿ ਇਹ ਸਟਾਰਟ-ਅੱਪ ਪਿੱਛੋ ਸ਼ਾਮਿਲ ਕੀਤਾ ਗਿਆ ਹੈ)",
	noPluginText: "ਕੋਈ ਪਲੱਗਿਨ ਇੰਸਟਾਲ ਨਹੀਂ ਕੀਤਾ ਹੈ",
	confirmDeleteText: "ਕੀ ਤੁਸੀਂ ਨਿਸ਼ਚਿਤ ਹੀ ਇਹਨਾਂ ਪਲੱਗਿਨਾਂ ਨੂੰ ਡਿਲੀਟ ਕਰਨਾਂ ਚਾਹੁੰਦੇ ਹੋਂ ?:\n\n%0",
	removeLabel: "systemConfig ਟੈਗ ਹਟਾਓ",
	removePrompt: "systemConfig ਟੈਗ ਹਟਾਓ",
	deleteLabel: "ਡਿਲੀਟ",
	deletePrompt: "ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਸਦਾ ਲਈ ਡਿਲੀਟ ਕਰੋ",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Description", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Version", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Size", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Forced", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Disabled", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Loaded", type: 'Boolean', trueText: "Yes", falseText: "No" },
			{ name: 'Startup Time', field: 'startupTime', title: "Startup Time", type: 'String' },
			{ name: 'Error', field: 'error', title: "Status", type: 'Boolean', trueText: "Error", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	}
});

merge(config.macros.toolbar, {
	moreLabel: "ਜ਼ਿਆਦਾ",
	morePrompt: "ਵਧੇਰੀਆਂ ਕਮਾਂਡਾਂ ਦਿਖਾਓ",
	lessLabel: "ਥੋੜਾ",
	lessPrompt: "ਵਧੇਰੀਆਂ ਕਮਾਂਡਾਂ ਛੁਪਾਓ",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "ਰਿਫਰੈਸ਼",
	prompt: "ਪੂਰੇ ਟਿਡਲੀਵਿਕੀ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਪੁਨਰ-ਚਿਤ੍ਰਿਤ ਕਰੋ"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "ਤੁਸੀਂ ਕੇਵਲ-ਪੜ੍ਹਨ ਵਾਲੀ ਟਿਡਲੀਵਿਕੀ ਵਿਚ ਇਮਪੋਰਟ ਨਹੀਂ ਕਰ ਸਕਦੇ. file:// URL ਤੋਂ ਉਸਨੂੰ ਖੋਲਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਕੇ ਵੇਖ ਲਵੋ",
	wizardTitle: "ਕਿਸੇ ਹੋਰ ਫਾਈਲ ਜਾਂ ਸਰਵਰ ਤੋਂ ਟਿਡਲਰ ਇਮਪੋਰਟ ਕਰੋ",
	step1Title: "ਪਹਿਲਾ ਚਰਣ (੧): ਸਰਵਰ ਜਾਂ ਟਿਡਲੀਵਿਕੀ ਫਾਈਲ ਦਾ ਸਥਾਨ ਨਿਰਧਾਰਨ ਕਰੋ",
	step1Html: "ਸਰਵਰ ਦੀ ਕਿਸਮ ਨਿਦ੍ਰਿਸ਼ਟ ਕਰੋ: <select name='selTypes'><option value=''>Choose...</option></select><br>ਇਥੇ URL ਜਾਂ ਪਾਥ-ਨਾਮ ਦਰਜ ਕਰੋ: <input type='text' size=50 name='txtPath'><br>...ਜਾਂ ਫਾਈਲ ਲਈ ਫਰੋਲ ਕਰੋ: <input type='file' size=50 name='txtBrowse'><br><hr>...ਜਾਂ ਪੂਰਵ-ਪਰਿਭਾਸ਼ਿਤ ਫੀਡ ਚੁਣੋ: <select name='selFeeds'><option value=''>ਚੁਣੋ...</option></select>",
	openLabel: "ਖੋਲੋ",
	openPrompt: "ਇਸ ਫਾਈਲ ਜਾਂ ਸਰਵਰ ਨੂੰ ਕੁਨੈਕਸ਼ਨ ਖੋਲੋ",
	statusOpenHost: "ਹੋਸਟ ਨੂੰ ਖੋਲਿਆ ਜਾ ਰਿਹਾ ਹੈ",
	statusGetWorkspaceList: "ਉਪਲਬਧ ਵਰਕਸਪੇਸਾਂ ਦੀ ਸੂਚੀ ਪ੍ਰਾਪਤ ਕੀਤੀ ਜਾ ਰਾਹੀ ਹੈ",
	step2Title: "ਦੂਸਰਾ ਚਰਣ: ਵਰਕਸਪੇਸ ਚੁਣੋ",
	step2Html: "ਵਰਕਸਪੇਸ ਦਾ ਨਾਮ ਪਾਓ: <input type='text' size=50 name='txtWorkspace'><br>...ਜਾਂ ਵਰਕਸਪੇਸ ਚੁਣੋ: <select name='selWorkspace'><option value=''>ਚੁਣੋ...</option></select>",
	cancelLabel: "ਰੱਦ",
	cancelPrompt: "ਇਸ ਇਮਪੋਰਟ ਨੂੰ ਰੱਦ ਕਰੋ",
	statusOpenWorkspace: "ਵਰਕਸਪੇਸ ਖੋਲੀ ਜਾ ਰਹੀ ਹੈ",
	statusGetTiddlerList: "ਉਪਲਬਧ ਟਿਡਲਰਾਂ ਦੀ ਸੂਚੀ ਪ੍ਰਾਪਤ ਕੀਤੀ ਜਾ ਰਾਹੀ ਹੈ",
	errorGettingTiddlerList: "ਟਿਡਲਰਾਂ ਦੀ ਸੂਚੀ ਪ੍ਰਾਪਤ ਕਰਣ ਵਿਚ ਐਰਰ, ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰਣ ਲਈ ਕੈਂਸਲ ਕਲਿੱਕ ਕਰੋ",
	step3Title: "ਤੀਸਰਾ ਚਰਣ: ਇਮਪੋਰਟ ਕਰਣ ਵਾਸਤੇ ਟਿਡਲਰ ਚੁਣੋ",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਇਸ ਸਰਵਰ ਨਾਲ ਲਿੰਕ ਕਰੀ ਰੱਖੋ ਤਾਂ ਜੋ ਤੁਸੀਂ ਅਨੁਵਰਤੀ ਬਦਲਾਵਾਂ ਨਾਲ ਸੁਮੇਲ ਕਰ ਸਕੋਂ </input><br><input type='checkbox' name='chkSave'>ਇਸ ਸਰਵਰ ਦਾ ਵੇਰਵਾ ਇਸ ਨਾਮਕ ਇੱਕ 'systemServer' ਟਿਡਲਰ ਵਿਚ ਸੇਵ ਕਰੋ:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "ਇਮਪੋਰਟ",
	importPrompt: "ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਇਮਪੋਰਟ ਕਰੋ",
	confirmOverwriteText: "ਕੀ ਤੁਸੀਂ ਨਿਸ਼ਚਿਤ ਹੀ ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਅਧਿਲੇਖਿਤ(overwrite) ਕਰਣਾ ਚਾਹੁੰਦੇ ਹੋ:\n\n%0",
	step4Title: "ਚੌਥਾ ਚਰਣ: %0 ਟਿਡਲਰ ਇਮਪੋਰਟ ਕੀਤੇ ਜਾ ਰਹੇ ਹਨ",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "ਮੁਕੰਮਲ",
	donePrompt: "ਇਸ ਵਿਜ਼ਰਡ ਨੂੰ ਬੰਦ ਕਰੋ",
	statusDoingImport: "ਟਿਡਲਰ ਇਮਪੋਰਟ ਹੋ ਰਹੇ ਹਨ",
	statusDoneImport: "ਸਾਰੇ ਟਿਡਲਰ ਇਮਪੋਰਟ ਹੋ ਗਏ",
	systemServerNamePattern: "%2 on %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "'%0' ਟਿਡਲਰ ਪਹਿਲਾਂ ਹੀ ਮੌਜੂਦ ਹੈ. ਉਸ ਨੂੰ ਇਸ ਸਰਵਰ ਦੇ ਵੇਰਵੇ ਨਾਲ ਅਧਿਲੇਖਿਤ(overwrite) ਕਰਣ ਲਈ 'OK' ਕਲਿੱਕ ਕਰੋ. ਉਸ ਨੂੰ ਜਿਓਂ ਦਾ ਤਿਉਂ ਛੱਡਣ ਲਈ 'Cancel' ਕਲਿੱਕ ਕਰੋ",
	serverSaveTemplate: "|''Type:''|%0|\n|''URL:''|%1|\n|''Workspace:''|%2|\n\nThis tiddler was automatically created to record the details of this server",
	serverSaveModifier: "(System)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Size", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Tags", type: 'Tags' }
		],
		rowClasses: [
		]
	}
});

merge(config.macros.upgrade, {
	wizardTitle: "ਟਿਡਲੀਵਿਕੀ ਦੇ ਕੋਰ-ਕੋਡ ਨੂੰ ਅਪਗ੍ਰੇਡ ਕਰੋ",
	step1Title: "ਇਸ ਟਿਡਲੀਵਿਕੀ ਨੂੰ ਨਵੀਨਤਮ ਪ੍ਰਕਾਸ਼ਨ ਮੁਤਾਬਿਕ ਅਪਡੇਟ ਜਾਂ ਰਿਪੇਅਰ ਕਰੋ",
	step1Html: "ਤੁਸੀਂ ਟਿਡਲੀਵਿਕੀ ਦੇ ਕੋਰ-ਕੋਡ ਦੇ ਨਵੀਨਤਮ ਪ੍ਰਕਾਸ਼ਨ ਤੱਕ ਅਪਗ੍ਰੇਡ ਕਰਣ ਜਾ ਰਹੇ ਹੋ (from <a href='%0' class='externalLink' target='_blank'>%1</a>). ਤੁਹਾਡੀ ਸਮੱਗਰੀ ਅਪਗ੍ਰੇਡ ਦੇ ਪਾਰ ਵੀ ਸੁਰੱਖਿਅਤ ਰਹੇਗੀ.<br><br>ਧਿਆਨ ਦਿਓ, ਕੋਰ ਅਪਗ੍ਰੇਡ ਦਾ ਪੁਰਾਣੇ ਪਲੱਗਿੰਨਾਂ ਦੇ ਚੱਲਣ ਵਿੱਚ ਕਈ ਵਾਰੀ ਵਿਘਨਕਾਰੀ ਹੋਣ ਦਾ ਪਤਾ ਲਗਦਾ ਹੈ. ਜੇ ਅਪਗ੍ਰੇਡ ਕੀਤੀ ਹੋਈ ਫਾਈਲ ਨਾਲ ਸਮੱਸਿਆ ਆਵੇ ਤਾਂ ਇਥੇ ਦੇਖੋ: <a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "ਇਸ ਟਿਡਲੀਵਿਕੀ ਨੂੰ ਅਪਗ੍ਰੇਡ ਕਰਣ ਤੋਂ ਅਸਮਰਥ. ਤੁਸੀਂ ਕੇਵਲ ਸਥਾਨਕ ਤਲ ਤੇ ਸਾਂਭੀ ਟਿਡਲੀਵਿਕੀ ਫਾਈਲ ਨੂੰ ਹੀ ਅਪਗ੍ਰੇਡ ਕਰ ਸਕਦੇ ਹੋ.",
	errorNotSaved: "ਅਪਗ੍ਰੇਡ ਕਰਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਬਦਲਾਓ ਸੇਵ ਕਰਣੇ ਪੈਣਗੇ",
	step2Title: "ਅਪਗ੍ਰੇਡ ਦੇ ਵੇਰਵੇ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
	step2Html_downgrade: "ਤੁਸੀਂ ਟਿਡਲੀਵਿਕੀ ਪ੍ਰਕਾਸ਼ਨ ਨੰ %0 ਤੋਂ %1 ਵੱਲ ਡਾਊਨ-ਗ੍ਰੇਡ ਕਰਣ ਜਾ ਰਹੇ ਹੋਂ. <br><br>ਕੋਰ-ਕੋਡ ਨੂੰ ਪਹਿਲੇ ਪ੍ਰਕਾਸ਼ਨ ਵੱਲ ਡਾਉਨ-ਗ੍ਰੇਡ ਕਰਣ ਦੀ ਸਿਫਾਰਿਸ਼ ਨਹੀਂ ਕੀਤੀ ਜਾਂਦੀ",
	step2Html_restore: "ਇੰਜ ਲਗਦਾ ਹੈ ਕੀ ਇਹ ਟਿਡਲੀਵਿਕੀ ਪਹਿਲਾਂ ਹੀ ਕੋਰ -ਕੋਡ ਦੇ ਨਵੀਨਤਮ ਪ੍ਰਕਾਸ਼ਨ ਨੂੰ ਵਰਤ ਰਹੀ ਹੈ (%0).<br><br>ਤੁਸੀਂ ਫਿਰ ਵੀ ਕੋਰ-ਕੋਡ ਦੇ ਭ੍ਰਸ਼ਟ ਜਾਂ ਸ਼ਤੀਗ੍ਰਸਤ ਹੋਣ ਦੀ ਸ਼ੰਕਾ ਦੂਰ ਕਰਣ ਲਈ ਅਪਗ੍ਰੇਡ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋਂ",
	step2Html_upgrade: "ਤੁਸੀਂ ਟਿਡਲੀਵਿਕੀ ਪ੍ਰਕਾਸ਼ਨ ਨੰ  %0 ਤੋਂ %1 ਤੱਕ ਅਪਗ੍ਰੇਡ ਕਰਣ ਜਾ ਰਹੇ ਹੋਂ",
	upgradeLabel: "ਅਪਗ੍ਰੇਡ",
	upgradePrompt: "ਅਪਗ੍ਰੇਡ ਪ੍ਰਕਿਰਿਆ ਲਈ ਤਿਆਰੀ",
	statusPreparingBackup: "ਬੈਕ-ਅੱਪ ਦੀ ਤਿਆਰੀ ਕੀਤੀ ਜਾ ਰਹੀ ਐ",
	statusSavingBackup: "ਬੈਕ -ਅੱਪ ਫਾਈਲ ਸੇਵ ਕੀਤਾ ਜਾ ਰਿਹਾ ਐ",
	errorSavingBackup: "ਬੈਕ - ਅੱਪ ਫਾਈਲ ਸੇਵ ਕਰਣ ਵਿੱਚ ਸਮੱਸਿਆ ਆਈ",
	statusLoadingCore: "ਕੋਰ-ਕੋਡ ਨੂੰ ਲੋਡ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ",
	errorLoadingCore: "ਕੋਰ -ਕੋਡ ਨੂੰ ਲੋਡ ਕਰਣ ਵਿੱਚ ਐਰਰ",
	errorCoreFormat: "ਨਵੇਂ ਕੋਰ -ਕੋਡ ਵਿਚ ਐਰਰ",
	statusSavingCore: "ਨਵੇਂ ਕੋਰ -ਕੋਡ ਨੂੰ ਸੇਵ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ",
	statusReloadingCore: "ਨਵੇਂ ਕੋਰ-ਕੋਡ ਨੂੰ ਪੁਨਰ-ਲੋਡ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ",
	startLabel: "ਸ਼ੁਰੂ ਕਰੋ",
	startPrompt: "ਅਪਗ੍ਰੇਡ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਕਰੋ",
	cancelLabel: "ਕੈਂਸਲ",
	cancelPrompt: "ਅਪਗ੍ਰੇਡ ਪ੍ਰਕਿਰਿਆ ਕੈਂਸਲ ਕਰੋ",
	step3Title: "ਅਪਗ੍ਰੇਡ ਕੈਂਸਲ ਕਰ ਦਿੱਤਾ ਗਿਆ",
	step3Html: "ਤੁਸੀਂ ਅਪਗ੍ਰੇਡ ਪ੍ਰਕਿਰਿਆ ਕੈਂਸਲ ਕਰ ਦਿੱਤੀ ਹੈ"
});

merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Server type", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Server host", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Server workspace", type: 'String' },
			{ name: 'Status', field: 'status', title: "Synchronisation status", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "Server URL", text: "View", type: 'Link' }
		],
		rowClasses: [
		],
		buttons: [
			{ caption: "ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਸੁਮੇਲੋ", name: 'sync' }
		]
	},
	wizardTitle: "ਬਾਹਰਲੇ ਸਰਵਰ ਤੇ ਫਾਈਲ ਨਾਲ ਸੁਮੇਲ ਕਰੋ",
	step1Title: "ਸੁਮੇਲਣ ਲਈ ਟਿਡਲਰ ਚੁਣੋ",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "ਸੁਮੇਲੋ",
	syncPrompt: "ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਸੁਮੇਲੋ",
	hasChanged: "Changed while unplugged",
	hasNotChanged: "Unchanged while unplugged",
	syncStatusList: {
		none: { text: "...", display: null, className: 'notChanged' },
		changedServer: { text: "Changed on server", display: null, className: 'changedServer' },
		changedLocally: { text: "Changed while unplugged", display: null, className: 'changedLocally' },
		changedBoth: { text: "Changed while unplugged and on server", display: null, className: 'changedBoth' },
		notFound: { text: "Not found on server", display: null, className: 'notFound' },
		putToServer: { text: "Saved update on server", display: null, className: 'putToServer' },
		gotFromServer: { text: "Retrieved update from server", display: null, className: 'gotFromServer' }
	}
});

merge(config.commands.closeTiddler, {
	text: "ਬੰਦ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਬੰਦ ਕਰੋ" });

merge(config.commands.closeOthers, {
	text: "ਬਾਕੀ ਬੰਦ",
	tooltip: "ਬਾਕੀ ਟਿਡਲਰਾਂ ਨੂੰ ਬੰਦ ਕਰੋ" });

merge(config.commands.editTiddler, {
	text: "ਸੰਪਾਦਨ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਦਾ ਸੰਪਾਦਨ ਕਰੋ",
	readOnlyText: "ਦੇਖੋ",
	readOnlyTooltip: "ਇਸ ਟਿਡਲਰ ਦੇ ਸੋਰਸ ਨੂੰ ਦੇਖੋ" });

merge(config.commands.saveTiddler, {
	text: "ਮੁਕੰਮਲ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਦੇ ਬਦਲਾਓ ਸੇਵ ਕਰੋ" });

merge(config.commands.cancelTiddler, {
	text: "ਕੈਂਸਲ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਦੇ ਬਦਲਾਓ ਰੱਦ ਕਰੋ",
	warning: "ਕੀ ਤੁਸੀਂ ਨਿਸ਼ਚਿਤ ਹੀ ਇਸ ਟਿਡਲਰ ਦੇ ਬਦਲਾਵਾਂ ਨੂੰ ਰੱਦ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋਂ : '%0'?",
	readOnlyText: "ਮੁਕੰਮਲ",
	readOnlyTooltip: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਸਧਾਰਨ ਤੋਰ ਤੇ ਦੇਖੋ" });

merge(config.commands.deleteTiddler, {
	text: "ਡਿਲੀਟ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਮਿਟਾਓ",
	warning: "ਕੀ ਤੁਸੀਂ ਨਿਸ਼ਚਿਤ ਹੀ ਇਸ ਟਿਡਲਰ ਨੂੰ ਡਿਲੀਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋਂ :'%0'?" });

merge(config.commands.permalink, {
	text: "ਸਥਾਈ-ਲਿੰਕ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਦਾ ਸਥਾਈ ਲਿੰਕ" });

merge(config.commands.references, {
	text: "ਹਵਾਲੇ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਲਿੰਕ ਹੁੰਦੇ ਟਿਡਲਰ ਦਿਖਾਓ",
	popupNone: "ਕੋਈ ਹਵਾਲੇ ਨਹੀਂ" });

merge(config.commands.jump, {
	text: "ਛਾਲ ਮਾਰੋ",
	tooltip: "ਹੋਰ ਖੁੱਲੇ ਹੋਏ ਟਿਡਲਰ ਵੱਲ ਛਾਲ ਮਾਰੋ" });

merge(config.commands.syncing, {
	text: "ਸੁਮੇਲ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਦੀ ਕਿਸੇ ਸਰਵਰ ਜਾਂ ਬਾਹਰਲੀ ਫਾਈਲ ਨਾਲ ਸੁਮੇਲ ਕੰਟ੍ਰੋਲ ਕਰੋ",
	currentlySyncing: "<div>ਇਸ ਵਕਤ ਇਸ ਰਾਹੀ ਸੁਮੇਲ ਹੋ ਰਿਹਾ ਹੈ: <span class='popupHighlight'>'%0'</span> to:</" + "div><div>host: <span class='popupHighlight'>%1</span></" + "div><div>workspace: <span class='popupHighlight'>%2</span></" + "div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "ਇਸ ਵਕਤ ਸੁਮੇਲ ਨਹੀਂ ਹੋ ਰਿਹਾ",
	captionUnSync: "ਇਸ ਟਿਡਲਰ ਦੇ ਸੁਮੇਲ ਨੂੰ ਰੋਕੋ",
	chooseServer: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਕਿਸੇ ਹੋਰ ਸਰਵਰ ਨਾਲ ਸੁਮੇਲੋ:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  " });

merge(config.commands.fields, {
	text: "ਫੀਲਡ",
	tooltip: "ਇਸ ਟਿਡਲਰ ਦੇ ਵਿਸਤਾਰਿਤ ਫੀਲਡ ਦਿਖਾਓ",
	emptyText: "ਇਸ ਟਿਡਲਰ ਦੇ ਕੋਈ ਵਿਸਤਾਰਿਤ ਫੀਲਡ ਨਹੀਂ ਹਨ",
	listViewTemplate: {
		columns: [
			{ name: 'Field', field: 'field', title: "Field", type: 'String' },
			{ name: 'Value', field: 'value', title: "Value", type: 'String' }
		],
		rowClasses: [
		],
		buttons: [
		]
	} });

merge(config.shadowTiddlers, {
	DefaultTiddlers: "[[TranslatedGettingStarted]]",
	MainMenu: "[[TranslatedGettingStarted]]\n\n\n^^~ਟਿਡਲੀਵਿਕੀ ਪ੍ਰਕਾਸ਼ਨ ਨੰ: <<version>>\n© 2010 [[UnaMesa|http://www.unamesa.org/]]^^",
	TranslatedGettingStarted: "ਇਸ ਟਿਡਲੀਵਿਕੀ ਤੇ ਕੰਮ ਸ਼ੁਰੂ ਕਰਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਇਹਨਾਂ ਟਿਡਲਰਾਂ ਨੂੰ ਬਦਲਣ ਦੀ ਲੋੜ ਪਵੇਗੀ:\n* SiteTitle & SiteSubtitle: ਇਸ ਸਾਈਟ ਦਾ ਸਿਰਨਾਵਾਂ ਤੇ ਉਪ-ਸਿਰਨਾਵਾਂ, ਜਿਵੇਂ ਉੱਪਰ ਨਜ਼ਰ ਆ ਰਿਹਾ ਹੈ ( ਸੇਵ ਕਰਣ ਪਿੱਛੋਂ, ਇਹ ਬ੍ਰਾਉਜ਼ਰ ਦੇ ਟਾਈਟਲ ਬਾਰ ਵਿਚ ਵੀ ਨਜ਼ਰ ਆਉਣਗੇ )\n* MainMenu: ਮੈਨ੍ਯੂ (ਆਮ ਤੌਰ ਤੇ ਖੱਬੇ ਪਾਸੇ )\n* DefaultTiddlers: ਇਸ ਵਿਚ ਉਹਨਾਂ ਟਿਡਲਰਾਂ ਦੇ ਨਾਮ ਦਰਜ ਹਨ ਜੋ ਤੁਸੀਂ ਟਿਡਲੀਵਿਕੀ ਖੁਲਣ ਤੇ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਣਾ ਚਾਹੁੰਦੇ ਹੋਂ \nਤੁਹਾਨੂੰ ਆਪਣੇ ਸੰਪਾਦਨਾਂ ਤੇ ਹਸਤਾਖਰ ਕਰਣ ਲਈ ਆਪਣਾ ਯੂਜ਼ਰ-ਨੇਮ ਵੀ ਪਾਉਣਾ ਪਵੇਗਾ: <<option txtUserName>>",
	SiteTitle: "ਮੇਰੀ ਟਿਡਲੀਵਿਕੀ",
	SiteSubtitle: "ਇੱਕ ਮੁੜ ਵਰਤੀ ਜਾ ਸਕਦੀ, ਗੈਰ ਰੈਖਿਕ, ਨਿਜੀ ਵੈੱਬ ਨੋਟਬੁੱਕ",
	SiteUrl: "",
	OptionsPanel: "ਟਿਡਲੀਵਿਕੀ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰਣ ਵਾਲੇ ਇਹ ਇੰਟਰਫੇਸ ਵਿਕਲਪ ਤੁਹਾਡੇ ਬ੍ਰਾਉਜ਼ਰ ਵਿਚ ਸੇਵ ਕੀਤੇ ਜਾਂਦੇ ਹਨ \n\n ਤੁਹਾਡੇ ਸੰਪਾਦਨਾਂ ਨੂੰ ਹਸ੍ਤਾਖ੍ਰਿਤ ਕਰਣ ਲਈ ਤੁਹਾਡਾ ਯੂਜ਼ਰ ਨੇਮ. ਇਸ ਨੂੰ ਵਿਕੀਵਰਡ ਦੇ ਤੌਰ ਤੇ ਲਿਖੋ (ਜਿਵੇਂ: JoeBloggs)\n<<option txtUserName>>\n\n<<option chkSaveBackups>> ਬੈਕ-ਅੱਪ ਸੇਵ ਕਰੋ \n<<option chkAutoSave>> ਸਵੈ-ਸੇਵ \n<<option chkRegExpSearch>> Regexp ਖੋਜ\n<<option chkCaseSensitiveSearch>> ਕੇਸ-ਸੰਵੇਦਨਸ਼ੀਲ ਖੋਜ\n<<option chkAnimate>> ਐਨੀਮੇਸ਼ਨਾਂ ਚਾਲੂ ਕਰੋ\n\n----\nAlso see [[TranslatedAdvancedOptions|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY" "journal">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "ਵਿਕਲਪ \u00bb" "ਟਿਡਲੀਵਿਕੀ ਦੇ ਅਗਲੇਰੇ ਵਿਕਲਪ ਬਦਲੋ">>',
	SideBarTabs: '<<tabs txtMainTab "ਸਮੇ ਰੇਖਾ" "ਸਮੇ ਰੇਖਾ" TabTimeline "ਸਭ" "ਸਾਰੇ ਟਿਡਲਰ" TabAll "ਟੈਗ" "ਸਾਰੇ ਟੈਗ" TabTags "ਹੋਰ" "ਹੋਰ ਸੂਚੀਆਂ" TabMore>>',
	TabMore: '<<tabs txtMoreTab "ਲਾਪਤਾ" "ਲਾਪਤਾ ਟਿਡਲਰ" TabMoreMissing "ਅਨਾਥ" "ਅਨਾਥ ਟਿਡਲਰ" TabMoreOrphans "ਪਰਛਾਵੇਂ" "ਪਰਛਾਵੇਂ ਟਿਡਲਰ" TabMoreShadowed>>'
});

merge(config.annotations, {
	AdvancedOptions: "ਇਹ ਪਰਛਾਵਾਂ ਟਿਡਲਰ ਕਈ ਸਾਰੇ ਅਗਲੇਰੇ ਵਿਕਲਪਾਂ ਲਈ ਪ੍ਰਵੇਸ਼ ਦਿੰਦਾ ਹੈ",
	ColorPalette: "ਇਸ ਟਿਡਲਰ ਵਿਚਲੀਆਂ ਕੀਮਤਾਂ ਟਿਡਲੀਵਿਕੀ ਯੂਜ਼ਰ-ਇੰਟਰਫੇਸ ਦੀ ਰੰਗ ਯੋਜਨਾ ਨਿਸ਼ਚਿਤ ਕਰਦੀਆਂ ਹਨ ",
	DefaultTiddlers: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੂਚਿਤ ਟਿਡਲਰ ਟਿਡਲੀਵਿਕੀ ਸ਼ੁਰੂ ਹੋਣ ਤੇ ਆਪੇ ਹੀ ਪ੍ਰਦਰਸ਼ਿਤ ਹੋ ਜਾਣਗੇ",
	EditTemplate: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚਲਾ HTML ਖਾਕਾ ਇਹ ਨਿਸ਼ਚਿਤ ਕਰਦਾ ਹੈ ਕਿ ਸੰਪਾਦਨ ਕਰਣ ਵੇਲੇ ਟਿਡਲਰ ਕਿਹੋ ਜਿਹੇ ਲਗਦੇ ਹਨ",
	GettingStarted: "ਇਹ ਪਰਛਾਵਾਂ ਟਿਡਲਰ ਬੁਨਿਆਦੀ ਵਰਤੋਂ ਨਿਰਦੇਸ਼ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ",
	ImportTiddlers: "ਇਹ ਪਰਛਾਵਾਂ ਟਿਡਲਰ ਟਿਡਲਰ ਇਮਪੋਰਟ ਕਰਣ ਲਈ ਪ੍ਰਵੇਸ਼ ਦਿੰਦਾ ਹੈ",
	MainMenu: "ਇਹ ਪਰਛਾਵਾਂ ਟਿਡਲਰ, ਸਕ੍ਰੀਨ ਦੇ ਖੱਬੇ ਹਥ ਕੌਲਮ ਵਿਚਲੇ ਮੇਨ ਮੈਨ੍ਯੂ ਦੀ ਸਮੱਗਰੀ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
	MarkupPreHead: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਟਿਡਲੀਵਿਕੀ HTML  ਫਾਈਲ ਦੇ <head> ਹਿੱਸੇ ਦੇ ਉੱਤੇ ਸੰਮਿਲਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
	MarkupPostHead: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਟਿਡਲੀਵਿਕੀ HTML  ਫਾਈਲ ਦੇ <head> ਹਿੱਸੇ ਦੇ ਹੇਠਾਂ ਸੰਮਿਲਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
	MarkupPreBody: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਟਿਡਲੀਵਿਕੀ HTML  ਫਾਈਲ ਦੇ <body> ਹਿੱਸੇ ਦੇ ਉੱਤੇ ਸੰਮਿਲਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
	MarkupPostBody: "ਇਸ ਟਿਡਲਰ ਨੂੰ ਟਿਡਲੀਵਿਕੀ HTML  ਫਾਈਲ ਦੇ <head> ਹਿੱਸੇ ਦੇ ਹੇਠਾਂ, script ਹਿੱਸੇ ਤੋਂ ਇੱਕਦਮ ਪਿੱਛੋਂ ਸੰਮਿਲਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
	OptionsPanel: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਨੂੰ ਸੱਜੇ-ਹਥ ਸਾਇਡਬਾਰ ਵਿਚਲੇ ਵਿਕਲਪ ਪੈਨਲ ਸਲਾਈਡਰ ਦੀ ਸਮੱਗਰੀ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
	PageTemplate: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚਲਾ HTML ਖਾਕਾ ਟਿਡਲੀਵਿਕੀ ਦੇ ਸਮੁੱਚੇ ਨਕਸ਼ੇ ਨੂੰ ਨਿਸ਼ਚਿਤ ਕਰਦਾ ਹੈ",
	PluginManager: "ਇਹ ਪਰਛਾਵਾਂ ਟਿਡਲਰ ਪਲੱਗਿੰਨ ਮਨੇਜਰ ਤੱਕ ਪ੍ਰਵੇਸ਼ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ",
	SideBarOptions: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਨੂੰ ਸੱਜੇ ਹਥ ਸਾਇਡਬਾਰ ਵਿਚਲੇ ਵਿਕਲਪ ਪੈਨਲ ਦੀ ਸਮੱਗਰੀ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
	SideBarTabs: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਨੂੰ ਸੱਜੇ ਹਥ ਸਾਇਡਬਾਰ ਵਿਚਲੇ ਟੈਬ ਪੈਨਲ ਦੀ ਸਮੱਗਰੀ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
	SiteSubtitle: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਨੂੰ ਪੇਜ ਸਿਰਨਾਵੇਂ ਦੇ ਪਿਛਲੇ ਹਿੱਸੇ ਦੇ ਤੌਰ ਤੇ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
	SiteTitle: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਨੂੰ ਪੇਜ ਸਿਰਨਾਵੇਂ ਦੇ ਪਹਿਲੇ ਹਿੱਸੇ ਦੇ ਤੌਰ ਤੇ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
	SiteUrl: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸਾਈਟ ਦੇ ਪ੍ਰਕਾਸ਼ਨ ਵਾਸਤੇ ਪੂਰਾ URL ਪਾਉਣਾ ਹੁੰਦਾ ਹੈ",
	StyleSheetColors: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਪੇਜ ਦੇ ਤੱਤਾਂ ਦੇ ਰੰਗਾਂ ਨਾਲ ਸੰਬੰਧਿਤ CSS ਪਰਿਭਾਸ਼ਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ.  ''ਇਸ ਟਿਡਲਰ ਦਾ ਸੰਪਾਦਨ ਨਾ ਕਰੋ !'', ਸਗੋਂ StyleSheet ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਆਪਣੇ ਬਦਲਾਓ ਕਰੋ",
	StyleSheet: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਮਰਜ਼ੀ ਦੀਆਂ CSS ਪਰਿਭਾਸ਼ਾਵਾਂ ਆ ਸਕਦੀਆਂ ਹਨ",
	StyleSheetLayout: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਪੇਜ ਦੇ ਤੱਤਾਂ ਦੇ ਨਕਸ਼ੇ ਨਾਲ ਸੰਬੰਧਿਤ CSS ਪਰਿਭਾਸ਼ਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ.  ''ਇਸ ਟਿਡਲਰ ਦਾ ਸੰਪਾਦਨ ਨਾ ਕਰੋ !'', ਸਗੋਂ StyleSheet ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਆਪਣੇ ਬਦਲਾਓ ਕਰੋ",
	StyleSheetLocale: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਅਨੁਵਾਦ ਖੇਤਰ ਨਾਲ ਸੰਬੰਧਿਤ CSS ਪਰਿਭਾਸ਼ਾਵਾਂ ਸੰਮਿਲਿਤ ਹਨ",
	StyleSheetPrint: "ਇਸ ਪਰਛਾਂਵੇ ਟਿਡਲਰ ਵਿਚ ਪ੍ਰਿੰਟਿੰਗ ਨਾਲ ਸੰਬੰਧਿਤ CSS ਪਰਿਭਾਸ਼ਾ ਸੰਮਿਲਿਤ ਹਨ",
	TabAll: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਸਭ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	TabMore: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਹੋਰ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	TabMoreMissing: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਲਾਪਤਾ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	TabMoreOrphans: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਅਨਾਥ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	TabMoreShadowed: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਪਰਛਾਂਵੇ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	TabTags: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਟੈਗ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	TabTimeline: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚ ਸੱਜੇ ਹਥ ਦੇ ਸਾਇਡਬਾਰ ਵਿਚਲੇ 'ਸਮੇ ਰੇਖਾ' ਟੈਬ ਦੀ ਸਮੱਗਰੀ ਸੰਮਿਲਿਤ ਹੈ",
	ToolbarCommands: "ਇਹ ਪਰਛਾਵਾਂ ਟਿਡਲਰ ਇਹ ਨਿਸ਼ਚਿਤ ਕਰਦਾ ਹੈ ਕਿ ਟਿਡਲਰ ਟੂਲਬਾਰ ਵਿਚ ਕਿਹੜੀਆਂ ਕਮਾਂਡਾਂ ਪ੍ਰਦਰਸ਼ਿਤ ਹੁੰਦੀਆਂ ਹਨ",
	ViewTemplate: "ਇਸ ਪਰਛਾਵੇਂ ਟਿਡਲਰ ਵਿਚਲਾ HTML ਖਾਕਾ ਟਿਡਲਰਾਂ ਦੀ ਦਿੱਖ ਨਿਸ਼ਚਿਤ ਕਰਦਾ ਹੈ"
});
//}}}
