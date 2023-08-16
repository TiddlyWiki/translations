/***
|Name          |PolishTranslationPlugin|
|Description   |Translation of TiddlyWiki into Polish|
|Author        |Ryszard Niewisiewicz (*ziemiowid* *at* *gmail* *dot* *com*)|
|CodeRepository|https://github.com/ziemiowid/translations/blob/master/locales/core/pl/locale.pl.js |
|Version       |0.9.0|
|Date          |Jan 08, 2012|
|Comments      |Please make comments at http://groups.google.co.uk/group/TiddlyWikiDev|
|License       |[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|~CoreVersion  |2.6.0|

// Based on english translation by MartinBudden (mjbudden (at) gmail (dot) com)
// https://github.com/TiddlyWiki/translations/blob/master/locales/core/en/locale.en.js (commit 966556b66a)
// using previous polish translation by Marcin Gedlek (psorek23 (at) gmail (dot) com)
// https://github.com/TiddlyWiki/translations/blob/master/locales/core/pl/locale.pl.js (commit 966556b66a)

Kilka decyzji tłumacza:
* tiddler        - notatka
* shadow tiddler - notatka podmienna
* plugin         - wtyczka
* tag            - tag
* core code      - kod podstawowy
* backstage     - zaplecze
***/

//{{{
//--
//-- Translateable strings
//--

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "pl"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options, { txtUserName: "TwojeImię" });

merge(config.tasks, {
	save: { text: "Zapisz", tooltip: "Zapisz zmiany", action: saveChanges },
	sync: { text: "Synchronizuj", tooltip: "Synchronizuj zmiany z plikami i serwerami TiddlyWiki", content: '<<sync>>' },
	importTask: { text: "Importuj", tooltip: "Importuj notatki i wtyczki z plików i serwerów TiddlyWiki", content: '<<importTiddlers>>' },
	tweak: { text: "Dostosuj", tooltip: "Dostosuj wygląd i zachowanie TiddlyWiki", content: '<<options>>' },
	upgrade: { text: "Zaktualizuj", tooltip: "Aktualizuj podstawowy kod TiddlyWiki", content: '<<upgrade>>' }, // TODO Czy można znaleźć słowo lepsze niż Aktualizuj
	plugins: { text: "Wtyczki", tooltip: "Zarządzaj zainstalowanymi wtyczkami", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	txtUserName: "Nazwa użytkownika którą będziesz podpisywał swoje zmiany",
	chkRegExpSearch: "Włącz wyszukiwanie przy pomocy wyrażeń regularnych",
	chkCaseSensitiveSearch: "Wyszukiwanie z uwzględnieniem wielkości liter",
	chkIncrementalSearch: "Dynamiczne wyszukiwanie w czasie wpisywania",
	chkAnimate: "Włącz animacje",
	chkSaveBackups: "Zapisując zmiany twórz kopie zapasowe",
	chkAutoSave: "Automatycznie zapisuj zmiany",
	chkGenerateAnRssFeed: "Zapisując zmiany generuj kanał RSS",
	chkSaveEmptyTemplate: "Zapisując zmiany generuj pusty szablon",
	chkOpenInNewWindow: "Odnośniki zewnętrzne otwieraj w nowym oknie",
	chkToggleLinks: "Klikanie na linkach otwierających notatki powoduje ich zamknięcie",
	chkHttpReadOnly: "Ukryj możliwość edytowania przy przeglądaniu przez HTTP",
	chkForceMinorUpdate: "Nie aktualizuj nazwy użytkownika i daty modyfikacji w czasie edycji notatek",
	chkConfirmDelete: "Potwierdzaj usuwanie notatek",
	chkInsertTabs: "Klawisz tabulacji wstawia znaki tabulacji zamiast przemieszczać kursor pomiędzy polami",
	txtBackupFolder: "Nazwa katalogu kopii zapasowych",
	txtMaxEditRows: "Maksymalna ilość wierszy w okienku edycji",
	txtTheme: "Nazwa tematu",
	txtFileSystemCharSet: "Domyślne kodowanie użyte do zapisania zmian (tylko Firefox/Mozilla)" });

merge(config.messages, {
	customConfigError: "Wystąpiły problemy podczas wczytywania wtyczek. Zobacz więcej szczegółów w PluginManager",
	pluginError: "Błąd: %0",
	pluginDisabled: "Nie uruchomiona, wyłączone w tagu 'systemConfigDisable'",
	pluginForced: "Uruchomiona, wymuszone poprzez tag 'systemConfigForce'",
	pluginVersionError: "Nie uruchomiona, ta wtyczka wymaga nowszej wersji TiddlyWiki",
	nothingSelected: "Nic nie zaznaczono. Musisz zaznaczyć jedną lub więcej rzeczy",
	savedSnapshotError: "TiddlyWiki została najprawdopodobniej niepoprawnie zapisana. Zobacz http://www.tiddlywiki.com/#DownloadSoftware",
	subtitleUnknown: "(nieznany)",
	undefinedTiddlerToolTip: "Notatka '%0' jeszcze nie istnieje",
	shadowedTiddlerToolTip: "Notatka '%0' jeszcze nie istnieje, ale ma określoną treść podmienną",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "Zewnętrzny link do %0",
	noTags: "Brak tagów w notatkach",
	notFileUrlError: "Musisz najpierw zapisać TiddlyWiki aby wprowadzać zmiany",
	cantSaveError: "Nie można zapisać zmian. Możliwe przyczyny:\n- Twoja przeglądarka nie obsługuje zapisywania (Firefox, Internet Explorer, Safari i Opera powinny działać)\n- ścieżka do twojej TiddlyWiki zawiera niepoprawne znaki\n- Plik TiddlyWiki został przeniesiony lub zmienił nazwe",
	invalidFileError: "Oryginalny plik '%0' nie jest prawidłowym plikiem TiddlyWiki",
	backupSaved: "Kopia zapasowa zapisana",
	backupFailed: "Nie udało się zapisać kopii zapasowej",
	rssSaved: "RSS zapisane",
	rssFailed: "Nie udało się zapisać RSS",
	emptySaved: "Pusty plik zapisany",
	emptyFailed: "Nie udało się zapisać pustego pliku",
	mainSaved: "Plik TiddlyWiki zapisany",
	mainFailed: "Nie udało się zapisać pliku TiddlyWiki. Twoje zmiany nie zostały zapisane",
	macroError: "Błąd w makro <<\%0>>",
	macroErrorDetails: "Błąd wykonywania makro <<\%0>>:\n%1",
	missingMacro: "Nie ma takiego makro",
	overwriteWarning: "Notatka '%0' już istnieje. Kliknij OK aby ją zastąpić",
	unsavedChangesWarning: "UWAGA! Niezapisane zmiany w TiddlyWiki\n\n kliknij OK aby zapisać\nWybierz ANULUJ aby nie zapisywać",
	confirmExit: "--------------------------------\n\nNiezapisane zmiany w TiddlyWiki. jeżeli będziesz kontynuował stracisz je\n\n--------------------------------",
	saveInstructions: "ZapiszZmiany",
	unsupportedTWFormat: "Nieobsługiwany format TiddlyWiki '%0'",
	tiddlerSaveError: "Błąd przy zapisywaniu notatki '%0'",
	tiddlerLoadError: "Błąd podczas wczytywania notatki '%0'",
	wrongSaveFormat: "Nie można zapisać w formacie '%0'. Zapisywanie w formacie standardowym.",
	invalidFieldName: "Zła nazwa pola %0",
	fieldCannotBeChanged: "Pole '%0' nie może zostać zmienione",
	loadingMissingTiddler: "Próba pobrania notatki '%0' z serwera '%1' o adresie:\n\n'%2' w przestrzeni roboczej '%3'",
	upgradeDone: "Aktualizacja do wersji %0 została zakończona\n\nKliknij 'OK' by wczytać aktualizowaną TiddlyWiki",
	invalidCookie: "Nieprawidłowe cookie '%0'" });

merge(config.messages.messageClose, {
	text: "Zamknij",
	tooltip: "zamknij ten komunikat" });

config.messages.backstage = {
	open: { text: "Zaplecze", tooltip: "Otwórz obszar konfiguracyjny by wykonać zadania edycyjne" },
	close: { text: "Zamknij", tooltip: "Zamknij obszar konfiguracji" },
	prompt: "Obszar konfiguracji: ",
	decal: {
		edit: { text: "Edytuj", tooltip: "Edytuj notatkę '%0'" }
	}
};

config.messages.listView = {
	tiddlerTooltip: "Kliknij by zobaczyć pełny tekst tej notatki",
	previewUnavailable: "(brak podglądu)"
};

config.messages.dates.months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
config.messages.dates.days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
config.messages.dates.shortMonths = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];
config.messages.dates.shortDays = ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
//config.messages.dates.daySuffixes = ["st","nd","rd","th","th","th","th","th","th","th",
//		"th","th","th","th","th","th","th","th","th","th",
//		"st","nd","rd","th","th","th","th","th","th","th",
//		"st"];
//config.messages.dates.am = "am";
//config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup, {
});

merge(config.views.wikified.tag, {
	labelNoTags: "brak tagów",
	labelTags: "tagi: ",
	openTag: "Otwórz tag '%0'",
	tooltip: "Pokaż notatki z tagiem '%0'",
	openAllText: "Otwórz wszystkie",
	openAllTooltip: "Otwórz wszystkie z tych notatek",
	popupNone: "Żadna inna notatka nie ma tagu '%0'" });

merge(config.views.wikified, {
	defaultText: "Notatka '%0' nie istnieje. Kliknij dwukrotnie aby ją utworzyć",
	defaultModifier: "(brakujący)",
	shadowModifier: "(wbudowana notatka podmienna)",
	dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "utworzono" });

merge(config.views.editor, {
	tagPrompt: "Wprowadź tagi oddzielone spacjami, w razie potrzeby [[używając podwójnych nawiasów]], lub dodaj istniejące tagi",
	defaultText: "Wprowadź tekst dla '%0'" });

merge(config.views.editor.tagChooser, {
	text: "tagi",
	tooltip: "Wybierz istniejący tag aby go dodać do notatki",
	popupNone: "Brak zdefiniowanych tagów",
	tagTooltip: "Dodaj tag '%0'" });

merge(config.messages, {
	sizeTemplates: [
		{ unit: 1024 * 1024 * 1024, template: "%0\u00a0GB" },
		{ unit: 1024 * 1024, template: "%0\u00a0MB" },
		{ unit: 1024, template: "%0\u00a0KB" },
		{ unit: 1, template: "%0\u00a0B" }
	] });

merge(config.macros.search, {
	label: "Szukaj",
	prompt: "Szukaj w TiddlyWiki",
	accessKey: "F",
	successMsg: "Znaleziono %0 notatek pasujących do %1",
	failureMsg: "Brak pasującej notatki %0" });

merge(config.macros.tagging, {
	label: "tagi: ",
	labelNotTag: "brak taggów",
	tooltip: "Lista notatek oznaczonych tagiem '%0'" });

merge(config.macros.timeline, {
	// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	dateFormat: "DD MMM YYYY" });

merge(config.macros.allTags, {
	tooltip: "Pokaż notatki z tagiem '%0'",
	noTags: "Brak notatek z tagiem" });

config.macros.list.all.prompt = "Notatki w porządku alfabetycznym";
config.macros.list.missing.prompt = "Notatki do których prowadzi jakiś link ale nie istnieją";
config.macros.list.orphans.prompt = "Notatki do których nie istnieje odwołanie";
config.macros.list.shadowed.prompt = "Notatki podmienne z domyślną treścią";
config.macros.list.touched.prompt = "Notatki które zostały lokalnie zmodyfikowane";

merge(config.macros.closeAll, {
	label: "Zamknij wszystkie",
	prompt: "Zamyka wszystkie widoczne notatki (poza tymi które są edytowane)" });

merge(config.macros.permaview, {
	label: "Stały widok",
	prompt: "Link otwierający wszystkie otwarte teraz notatki" });

merge(config.macros.saveChanges, {
	label: "Zapisz zmiany",
	prompt: "Zapisuje wszystkie notatki w TiddlyWiki",
	accessKey: "S" });

merge(config.macros.newTiddler, {
	label: "Nowa notatka",
	prompt: "Tworzy nową notatkę",
	title: "Nowa Notatka",
	accessKey: "N" });

merge(config.macros.newJournal, {
	label: "Nowa notatka dziennika",
	prompt: "Tworzy nową notatkę z aktualną datą i godziną",
	accessKey: "J" });

merge(config.macros.options, {
	wizardTitle: "Dostosuj opcje zaawansowane",
	step1Title: "Te opcje są zapisane przy pomocy cookie przeglądarki",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>Pokaż nieznane opcje</input>",
	unknownDescription: "//(nieznana)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Opcja", type: 'String' },
			{ name: 'Description', field: 'description', title: "Opis", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Nazwa", type: 'String' }
		],
		rowClasses: [
			{ className: 'lowlight', field: 'lowlight' }
		]
	}
});

merge(config.macros.plugins, {
	wizardTitle: "Zarządzaj wtyczkami",
	step1Title: "Aktualnie załadowane wtyczki",
	step1Html: "<input type='hidden' name='markList'></input>",
	skippedText: "(Ta wtyczka nie jest uruchomiona ponieważ właśnie została dodana)",
	noPluginText: "Brak zainstalowanych wtyczek",
	confirmDeleteText: "Czy jesteś pewien że chcesz usunąć te wtyczki?:\n\n%0",
	removeLabel: "Usuń tag systemConfig",
	removePrompt: "Czy usunąć tag systemConfig",
	deleteLabel: "Usuń",
	deletePrompt: "Usuń te notatki na zawsze",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Notatka", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Opis", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Wersja", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Wielkość", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Wymuszona", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Wyłączona", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Wykonana", type: 'Boolean', trueText: "Tak", falseText: "Nie" },
			{ name: 'Startup Time', field: 'startupTime', title: "Czas wykonywania", type: 'String' },
			{ name: 'Error', field: 'error', title: "Status", type: 'Boolean', trueText: "Błąd", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	},
	listViewTemplateReadOnly: {
		columns: [
			{ name: 'Tiddler', field: 'tiddler', title: "Notatka", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Opis", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Wersja", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Wielkość", type: 'Size' },
			{ name: 'Executed', field: 'executed', title: "Wykonana", type: 'Boolean', trueText: "Tak", falseText: "Nie" },
			{ name: 'Startup Time', field: 'startupTime', title: "Czas wykonywania", type: 'String' },
			{ name: 'Error', field: 'error', title: "Status", type: 'Boolean', trueText: "Błąd", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	}
});

merge(config.macros.toolbar, {
	moreLabel: "Więcej",
	morePrompt: "Pokaż dodatkowe polecenia",
	lessLabel: "Mniej",
	lessPrompt: "Ukryj dodatkowe polecenia",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "Odśwież",
	prompt: "Odśwież wygląd TiddlyWiki"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "Nie możesz importować do pliku TiddlyWiki tylko do odczytu. Proszę spróbuj otworzyć go przy użyciu URL file://",
	wizardTitle: "Importuj notatki z innej TiddlyWiki",
	step1Title: "Krok 1: Odnajdź serwer lub plik TiddlyWiki",
	step1Html: "Określ typ serwera: <select name='selTypes'><option value=''>Wybierz...</option></select><br>Wprowadź ścieżkę lub URL: <input type='text' size=50 name='txtPath'><br>...lub wybierz plik: <input type='file' size=50 name='txtBrowse'><br><hr>...lub wybierz zdefiniowany kanał: <select name='selFeeds'><option value=''>Wybierz...</option></select>",
	openLabel: "Otwórz",
	openPrompt: "Otwórz połączenie do tego pliku lub serwera",
	statusOpenHost: "Otwórz serwer",
	statusGetWorkspaceList: "Pobieranie listy dostępnych przestrzeni roboczych",
	step2Title: "Krok 2: Wybierz przestrzeń roboczą",
	step2Html: "Wprowadź nazwę przestrzeni roboczej: <input type='text' size=50 name='txtWorkspace'><br>...lub wybierz przestrzeń roboczą : <select name='selWorkspace'><option value=''>Wybierz...</option></select>",
	cancelLabel: "Przerwij",
	cancelPrompt: "Przerwij ten import",
	statusOpenWorkspace: "Otwieranie przestrzeni roboczej",
	statusGetTiddlerList: "Pobieranie listy dostępnych notatek",
	errorGettingTiddlerList: "Błąd w czasie pobierania dostępnych notatek, kliknij Przerwij by ponowić próbę",
	step3Title: "Krok 3: Wybierz notatki do zaimportowania",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>Zachowaj połączenie tych notatek do serwera tak by możliwe było pobieranie póżniejszych zmian</input><br><input type='checkbox' name='chkSave'>Zapisz szczegóły serwera w notatce 'systemServer' nazwanej:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "Importuj",
	importPrompt: "Importuj te notatki",
	confirmOverwriteText: "Czy jesteś pewien że chcesz nadpisać te notatki:\n\n%0",
	step4Title: "Krok 4: Importowanie %0 notatek",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "zakończone",
	donePrompt: "Zamknij to okno",
	statusDoingImport: "Importowanie notatek",
	statusDoneImport: "Wszystkie notatki zostały zaimportowane",
	systemServerNamePattern: "%2 na %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "Notatka '%0' już istnieje. Kliknij 'OK' by zastąpić ją danymi serwera, lub 'Przerwij' by pozostawić ją niezmienioną",
	serverSaveTemplate: "|''Typ:''|%0|\n|''URL:''|%1|\n|''Przestrzeń robocza:''|%2|\n\nTa notatka została automatycznie utworzona by zarejestrować dane tego serwera",
	serverSaveModifier: "(System)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Notatka", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Wielkość", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Tagi", type: 'Tags' }
		],
		rowClasses: [
		]
	}
});

merge(config.macros.upgrade, {
	wizardTitle: "Aktualizuj podstawowy kod TiddlyWiki",
	step1Title: "Aktualizuj lub napraw tą TiddlyWiki do najnowszego wydania",
	step1Html: "Jesteś o krok od aktualizacji do ostatniego wydania podstawowego kodu TiddlyWiki (z <a href='%0' class='externalLink' target='_blank'>%1</a>). Aktualizacja nie zmieni treści twoich notatek.<br><br>Weź pod uwagę, że, jak wiadomo, aktualizacje podstawowego kodu wpływają na działanie starszych wtyczek. Jeżeli napotkasz problemy po aktualizacji, sprawdź <a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "Nie jest możliwa aktualizacja tej TiddlyWiki. Możliwa jest jedynie aktualizacja plików TiddlyWiki które są przechowywane lokalnie",
	errorNotSaved: "Przed wykonaniem aktualizacji musisz zapisać zmiany",
	step2Title: "Potwierdź szczegóły aktualizacji",
	step2Html_downgrade: "Jesteś o krok od dezaktualizacji TiddlyWiki z wersji %1 do wersji %1.<br><br>Dezaktualizacja do wcześniejszej wersji kodu podstawowego nie jest polecana",
	step2Html_restore: "Ta TiddlyWiki używa już ostatniej wersji kodu podstawowego (%0).<br><br>Możesz jednak dokończyć uaktualnienie by być pewnym, że kod podstawowy nie został zakłócony lub uszkodzony",
	step2Html_upgrade: "Jesteś o krok od aktualizacji TiddlyWiki z wersji %1 do wersji %0",
	upgradeLabel: "Aktualizacja",
	upgradePrompt: "Przygotuj się do procesu aktualizacji",
	statusPreparingBackup: "Przygotowanie kopii zapasowej",
	statusSavingBackup: "Zapis kopii zapasowej",
	errorSavingBackup: "Napotkano problem w czasie zapisywania kopii zapasowej",
	statusLoadingCore: "Ładowanie kodu podstawowego",
	errorLoadingCore: "Błąd w czasie ładowania kodu podstawowego",
	errorCoreFormat: "Problem z nowym kodem podstawowym",
	statusSavingCore: "Zapisywanie nowego kodu podstawowego",
	statusReloadingCore: "Przeładowywanie nowego kodu podstawowego",
	startLabel: "Rozpocznij",
	startPrompt: "Rozpocznij proces aktualizacji",
	cancelLabel: "Przerwij",
	cancelPrompt: "Przerywa proces aktualizacji",
	step3Title: "Aktualizacja przerwana",
	step3Html: "Przerwałeś proces aktualizacji"
});

merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Notatka", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Typ serwera", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Server host", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Przestrzeń robocza", type: 'String' },
			{ name: 'Status', field: 'status', title: "Status synchronizacji", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "URL serwera", text: "Zobacz", type: 'Link' }
		],
		rowClasses: [
		],
		buttons: [
			{ caption: "Synchronizuj te notatki", name: 'sync' }
		]
	},
	wizardTitle: "Synchronizuj treść z zewnętrznymi serwerami i kanałami",
	step1Title: "Wybierz notatki które chcesz synchronizować",
	step1Html: '<input type="hidden" name="markList"></input>',
	syncLabel: "Synchronizuj",
	syncPrompt: "Synchronizuj te notatki",
	hasChanged: "Changed while unplugged",
	hasNotChanged: "Unchanged while unplugged",
	syncStatusList: {
		none: { text: "...", display: 'brak', className: 'notChanged' },
		changedServer: { text: "Zmienione na serwerze", display: null, className: 'changedServer' },
		changedLocally: { text: "Zmienione lokalnie", display: null, className: 'changedLocally' },
		changedBoth: { text: "Zmienione lokalnie i na serwerze", display: null, className: 'changedBoth' },
		notFound: { text: "Brak na serwerze", display: null, className: 'notFound' },
		putToServer: { text: "Aktualizacja zapisana na serwerze", display: null, className: 'putToServer' },
		gotFromServer: { text: "Aktualizacja pobrana z serwera", display: null, className: 'gotFromServer' }
	}
});

merge(config.commands.closeTiddler, {
	text: "Zamknij",
	tooltip: "Zamknij tą notatkę" });

merge(config.commands.closeOthers, {
	text: "Zamknij inne",
	tooltip: "Zamyka wszystkie notatki oprócz tej" });

merge(config.commands.editTiddler, {
	text: "Edytuj",
	tooltip: "Edytuj tę notatkę",
	readOnlyText: "widok",
	readOnlyTooltip: "Zobacz źródło notatki" });

merge(config.commands.saveTiddler, {
	text: "Gotowe",
	tooltip: "Zapisuje zmiany w tej notatce" });

merge(config.commands.cancelTiddler, {
	text: "Anuluj",
	tooltip: "Wyjdź nie zapisując zmian",
	warning: "Porzucić zmiany w '%0'?",
	readOnlyText: "gotowe",
	readOnlyTooltip: "Powrót do normalnego widoku" });

merge(config.commands.deleteTiddler, {
	text: "Usuń",
	tooltip: "Usuwa tą notatkę",
	warning: "Chcesz usunąć '%0'?" });

merge(config.commands.permalink, {
	text: "Stały widok",
	tooltip: "Adres tej notatki" });

merge(config.commands.references, {
	text: "Odwołania",
	tooltip: "Pokazuje notatki które się odwołują do tej",
	popupNone: "Brak odwołań" });

merge(config.commands.jump, {
	text: "Skocz",
	tooltip: "Skacze do kolejnej otwartej notatki" });

merge(config.commands.syncing, {
	text: "Synchronizowanie",
	tooltip: "Kontrola synchronizacji tej notatki z serwerem lub plikiem zewnętrznym",
	currentlySyncing: "<div>Synchronizowana przez <span class='popupHighlight'>'%0'</span> z:</" + "div><div>serwer: <span class='popupHighlight'>%1</span></" + "div><div>przestrzeń robocza: <span class='popupHighlight'>%2</span></" + "div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "Niesynchronizowana",
	captionUnSync: "Przerwij synchronizowanie tej notatki",
	chooseServer: "Zsynchronizuj tę notatkę z serwerem:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  " });

merge(config.commands.fields, {
	text: "Pola",
	tooltip: "Pokaż rozszerzone pola tej notatki",
	emptyText: "Brak rozszerzonych pól tej notatki",
	listViewTemplate: {
		columns: [
			{ name: 'Field', field: 'field', title: "Pole", type: 'String' },
			{ name: 'Value', field: 'value', title: "Wartość", type: 'String' }
		],
		rowClasses: [
		],
		buttons: [
		]
	} });

merge(config.shadowTiddlers, {
	DefaultTiddlers: "[[SzybkiStart]]",
	MainMenu: "[[SzybkiStart]]",
	SzybkiStart: "By rozpocząć pracę z pustą TiddlyWiki, musisz zmodyfikować następujące notatki:\n* SiteTitle &amp; SiteSubtitle: tytuł i podtytuł strony, które widzisz powyżej (po zapisaniu będą widoczne w pasku tytułowym przeglądarki)\n* MainMenu: główne menu (zwykle widoczne z lewej strony)\n* DefaultTiddlers: zawiera nazwy notatek, które będą wyświetlane po otwarciu TiddlyWiki\nPowinieneś również wprowadzić swoją nazwę użytkownika, którą będziesz podpisywał swoje zmiany: <<option txtUserName>>",
	SiteTitle: "[[TiddlyWiki|SiteTitle]]",
	SiteSubtitle: "[[Osobisty nieliniowy notatnik wielokrotnego użytku|SiteSubtitle]]",
	SiteUrl: "",
	OptionsPanel: "Te ustawienia interfejsu służące do konfiguracji ~TiddlyWiki są przechowywane przez twoją przeglądarkę\n\nNazwa użytkownika którym będą oznaczone twoje zmiany. Napisz ją jako WikiSłowo (np. JanBloger)\n<<option txtUserName>>\n\n<<option chkSaveBackups>> Twórz kopie zapasowe\n<<option chkAutoSave>> Zapisuj automatycznie\n<<option chkRegExpSearch>> Wyszukiwanie wyrażeń regularnych\n<<option chkCaseSensitiveSearch>> Wyszukiwanie wg wielkości liter\n<<option chkAnimate>> Pozwól na animacje\n\n----\nPatrz także [[Opcje zaawansowane|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "Opcje »" "Zmień opcje">>',
	SideBarTabs: '<<tabs txtMainTab "Czas" "Czas" TabTimeline "A-Z" "Wszystkie notatki" TabAll "Tagi" "Wszystkie tagi" TabTags "Więcej" "Więcej info" TabMore>>',
	TabMore: '<<tabs txtMoreTab "Brakujące" "Brakujące notatki" TabMoreMissing "Sieroty" "Notatki bez odwołań" TabMoreOrphans "Podmienne" "Notatki podmienne" TabMoreShadowed>>'
});

merge(config.annotations, {
	AdvancedOptions: "Ta zakładka podmienna zapewnia dostęp do pewnych opcji zaawansowanych",
	ColorPalette: "Wartości w tej notatce podmiennej określają schemat kolorów interfejsu użytkownika TiddlyWiki",
	DefaultTiddlers: "Notatki wymienione w tej notatce podmiennej będą automatycznie wyświetlone przy starcie TiddlyWiki",
	EditTemplate: "Szablon HTML tej notatki podmiennej określa wygląd notatek w czasie edycji",
	SzybkiStart: "Ta notatka podmienna zawiera podstawowe informacje o używaniu TiddlyWiki",
	ImportTiddlers: "Ta notatka podmienna umożliwia importowanie notatek",
	MainMenu: "Ta notatka podmienna jest używana jako treść głównego menu w lewej kolumnie ekranu",
	MarkupPreHead: "Ta notatka jest wstawiona na początku sekcji <head> pliku HTML TiddlyWiki",
	MarkupPostHead: "Ta notatka jest wstawiona na końcu sekcji <head> pliku HTML TiddlyWiki",
	MarkupPreBody: "Ta notatka jest wstawiona na początku sekcji <body> pliku HTML TiddlyWiki",
	MarkupPostBody: "Ta notatka jest wstawiona na końcu sekcji <body> pliku HTML TiddlyWiki, bezpośrednio o bloku skryptów",
	OptionsPanel: "Ta notatka podmienna jest używana jako treść penelu opcji w prawej kolumnie",
	PageTemplate: "Szablon HTML tej notatki podmiennej określa ogólny układ TiddlyWiki",
	PluginManager: "Ta notatka podmienna zapewnia dostęp do managera wtyczek",
	SideBarOptions: "Ta notatka podmienna jest używana jako treść  panelu opcji w prawej kolumnie",
	SideBarTabs: "Ta notatka podmienna używana jest jako treść panelu zakładek w prawej kolumnie",
	SiteSubtitle: "Ta notatka podmienna używana jest jako druga część tytułu strony",
	SiteTitle: "Ta notatka podmienna używana jest jako pierwsza część tytułu strony",
	SiteUrl: "Ta notatka podmienna powinna wskazywać pełny adres URL publikacji",
	StyleSheetColors: "Ta notatka podmienna zawiera definicje CSS związane z kolorami elementów strony. ''NIE EDYTUJ TEJ NOTATKI'', swoje zmiany wprowadź w notatce podmiennej StyleSheet",
	StyleSheet: "Ta notatka może zawierać definicje CSS użytkownika",
	StyleSheetLayout: "Ta notatka podmienna zawiera definicje CSS związane z układem elementów strony. ''NIE EDYTUJ TEJ NOTATKI'', swoje zmiany wprowadź w notatce podmiennej StyleSheet",
	StyleSheetLocale: "Ta notatka podmienna zawiera definicje CSS związane z tłumaczeniem",
	StyleSheetPrint: "Ta notatka podmienna zawiera definicje CSS używane przy wydruku",
	SystemSettings: "Ta notatka jest używana do zapisywania konfiguracji tego dokumentu TiddlyWiki",
	TabAll: "Ta notatka podmienna zawiera treść zakładki 'Wszystkie' w prawej kolumnie",
	TabMore: "Ta notatka podmienna zawiera treść zakładki 'Więcej' w prawej kolumnie",
	TabMoreMissing: "Ta notatka podmienna zawiera treść zakładki 'Brakujące' w prawej kolumnie",
	TabMoreOrphans: "Ta notatka podmienna zawiera treść zakładki 'Sieroty' w prawej kolumnie",
	TabMoreShadowed: "Ta notatka podmienna zawiera treść zakładki 'Podmienne' w prawej kolumnie",
	TabTags: "Ta notatka podmienna zawiera treść zakładki 'Tagi' w prawej kolumnie",
	TabTimeline: "Ta notatka podmienna zawiera treść zakładki 'Linia czasu' w  tab in the right-hand sidebar",
	ToolbarCommands: "Ta notatka podmienna określa które polecenia są widoczne w pasku narzędziowym notatki",
	ViewTemplate: "Szablon HTML w tej notatce podmiennej określa jak wyglądają notatki"
});
//}}}
