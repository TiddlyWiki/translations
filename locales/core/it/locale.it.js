/***
|Name           |ItalianTranslationPlugin|
|Description    |Translation of TiddlyWiki into Italian Language|
|Authors        |Pollio Maurizio (pollio.maurizio (at) gmail (dot) com)|
|Source         |https://github.com/TiddlyWiki/translations/blob/master/locales/core/it/locale.it.js|
|Original Source|http://pollio.maurizio.googlepages.com/MiniGuidaTiddlyWiki.html, http://pollio.maurizio.googlepages.com/it_2_6.js|
|Version        |2.6|
|Date           |Dec 15, 2011|
|License        |[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/deed.it]] |
|~CoreVersion   |2.6|
***/

//{{{
// --
// -- Translateable strings
// --

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "it"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options, { txtUserName: "TuoNome" });

merge(config.tasks, {
	save: { text: "Salva", tooltip: "Salva le modifiche in questo TiddlyWiki", action: saveChanges },
	sync: { text: "Sincronizza", tooltip: "Sincronizza questo TiddlyWiki con altri file o server TiddlyWiki", content: '<<sync>>' },
	importTask: { text: "Importa", tooltip: "Importa frammenti e plugin da altri file o server TiddlyWiki", content: '<<importTiddlers>>' },
	tweak: { text: "Modifica", tooltip: "Modifica le opzioni di questo TiddlyWiki", content: '<<options>>' },
	upgrade: { text: "Aggiorna", tooltip: "Aggiorna il codice base di TiddlyWiki", content: '<<upgrade>>' },
	plugins: { text: "Plugin", tooltip: "Gestisce i plugin installati in questo TiddlyWiki", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	txtUserName: "Digita un nome utente per firmare le tue modifiche",
	chkRegExpSearch: "Abilita nella ricerca l'uso delle espressioni regolari",
	chkCaseSensitiveSearch: "Abilita la ricerca sensibile alle maiuscole e minuscole",
	chkIncrementalSearch: "Abilita la ricerca incrementale key-by-key",
	chkAnimate: "Abilita animazioni",
	chkSaveBackups: "Genera una copia di backup quando si salvano le modifiche",
	chkAutoSave: "Abilita il salvataggio automatico delle modifiche",
	chkGenerateAnRssFeed: "Genera un feed RSS quando si salvano le modifiche",
	chkSaveEmptyTemplate: "Genera un modello vuoto quando si salvano le modifiche",
	chkOpenInNewWindow: "Apri i link esterni in una nuova finestra",
	chkToggleLinks: "Cliccando su un collegamento ad un frammento già aperto lo chiude",
	chkHttpReadOnly: "Non rendere editabile dal web",
	chkForceMinorUpdate: "Tratta le modifiche come minori non aggiornando il nome utente e la data quando modifichi i frammenti",
	chkConfirmDelete: "Chiedi conferma prima di eliminare il frammento",
	chkInsertTabs: "Usa il tasto tab per inserire caratteri di tabulazione invece di saltare al prossimo campo",
	txtBackupFolder: "Specifica il percorso della directory di backup",
	txtMaxEditRows: "Specifica il massimo numero di righe nelle finestre di modifica dei frammenti",
	txtTheme: "Specifica il nome del tema da utilizzare",
	txtFileSystemCharSet: "Set di caratteri di default per salvare le modifiche (solo Firefox/Mozilla)" });

merge(config.messages, {
	customConfigError: "Si sono verificati dei problemi nel caricare i plugin. Vedi PluginManager per i dettagli",
	pluginError: "Errore: %0",
	pluginDisabled: "Plugin non eseguito perchè disabilitato mediante l'etichetta 'systemConfigDisable' ",
	pluginForced: "Plugin eseguito perchè forzato mediante l'etichetta 'systemConfigForce' ",
	pluginVersionError: "Plugin non eseguito perchè richiede una versione più aggiornata di TiddlyWiki",
	nothingSelected: "Nessuna selezione. Devi selezionare prima uno o più elementi",
	savedSnapshotError: "Sembra che questo TiddlyWiki sia stato salvato scorrettamente. Per informazioni vai a http://www.tiddlywiki.com/#DownloadSoftware per ulteriori dettagli",
	subtitleUnknown: "(sconosciuto)",
	undefinedTiddlerToolTip: "Il frammento '%0' non esiste",
	shadowedTiddlerToolTip: "Il frammento '%0' non esiste, è un modello predefinito",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "Collegamento a %0",
	noTags: "Non ci sono frammenti del tipo",
	notFileUrlError: "Devi esportare questo TiddlyWiki in un file prima di poterlo salvare",
	cantSaveError: "Non si possono salvare le modifiche con questo browser. Possibili cause possono essere:\n- il tuo browser non supporta il salvataggio (Firefox, Internet Explorer, Safari e Opera, se opportunamente configurati, funzionano bene)\n- il path del tuo file TiddlyWiki contiene caratteri non consentiti\n- il file HTML di TiddlyWiki è stato spostato o rinominato",
	invalidFileError: "Il file originale '%0' non sembra di tipo TiddlyWiki",
	backupSaved: "Backup riuscito",
	backupFailed: "Salvataggio file di backup non riuscito",
	rssSaved: "RSS feed salvato come",
	rssFailed: "Salvataggio file RSS feed non riuscito",
	emptySaved: "Modello vuoto salvato",
	emptyFailed: "Salvataggio file modello vuoto non riuscito",
	mainSaved: "File TiddlyWiki primario salvato",
	mainFailed: "File TiddlyWiki principale non salvato. Le tue modifiche non sono state salvate",
	macroError: "Errore nella macro <<\%0>>",
	macroErrorDetails: "Errore in esecuzione della macro <<\%0>>:\n%1",
	missingMacro: "La macro non esiste",
	overwriteWarning: "Il frammento '%0' esiste già. OK per sostituirlo",
	unsavedChangesWarning: "ATTENZIONE! Non sono state ancora salvate le modifiche in TiddlyWiki\n\nOK per salvare\nANNULLA per annullarle",
	confirmExit: "--------------------------------\n\nCi sono delle modifiche non salvate in TiddlyWiki. Se continui perderai le modifiche\n\n--------------------------------",
	saveInstructions: "SaveChanges",
	unsupportedTWFormat: "Formato TiddlyWiki non supportato '%0'",
	tiddlerSaveError: "Errore nel salvataggio del frammento '%0'",
	tiddlerLoadError: "Errore nel caricamento del frammento '%0'",
	wrongSaveFormat: "Non è possibile salvare nel formato '%0'. Usa il formato standard per salvare",
	invalidFieldName: "Nome di campo invalido %0",
	fieldCannotBeChanged: "Campo '%0' non può essere modificato",
	loadingMissingTiddler: "Tentativo di recuperare il frammento '%0' dal '%1' server at:\n\n'%2' nel workspace '%3'",
	upgradeDone: "Aggiornamento alla versione %0 completato\n\nClicca 'OK' per ricaricare la versione aggiornata di TiddlyWiki",
	invalidCookie: "Cookie non valido '%0'" });

merge(config.messages.messageClose, {
	text: "Chiudi",
	tooltip: "Chiude l'area messaggi" });

config.messages.backstage = {
	open: { text: "Strumenti", tooltip: "Apre l'area strumenti per eseguire azioni di gestione e modifica della configurazione" },
	close: { text: "Chiudi", tooltip: "Chiude l'area strumenti" },
	prompt: "Strumenti: ",
	decal: {
		edit: { text: "Modifica", tooltip: "Modifica il frammento '%0'" }
	}
};

config.messages.listView = {
	tiddlerTooltip: "Clicca per visualizzare il contenuto (full text) di questo frammento",
	previewUnavailable: "(preview non disponibile)"
};

config.messages.dates.months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
config.messages.dates.days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
config.messages.dates.shortMonths = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
config.messages.dates.shortDays = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = [
	"mo", "do", "zo", "to", "to", "to", "mo", "vo", "no", "mo",
	"mo", "mo", "mo", "mo", "mo", "mo", "mo", "mo", "mo", "mo",
	"mo", "mo", "mo", "mo", "mo", "mo", "mo", "mo", "mo", "mo",
	"mo"
];
config.messages.dates.am = "am";
config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup, {
});

merge(config.views.wikified.tag, {
	labelNoTags: "Nessuna categoria",
	labelTags: "Categorie: ",
	openTag: "Apri la categoria '%0'",
	tooltip: "Mostra frammenti del tipo '%0'",
	openAllText: "Apri tutti i frammenti di questa categoria",
	openAllTooltip: "Apri tutti",
	popupNone: "Non ci sono altri frammenti del tipo '%0'" });

merge(config.views.wikified, {
	defaultText: "Il frammento '%0' non esiste ancora. Doppio click per crearlo",
	defaultModifier: "(mancante)",
	shadowModifier: "(frammento nascosto incorporato)",
	dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "creato" });

merge(config.views.editor, {
	tagPrompt: "Aggiungi le categorie separandole con uno spazio, [[se il titolo della categoria è più lungo di una parola mettilo tra due parentesi quadre]] o scegli tra quelle esistenti",
	defaultText: "Edita '%0'" });

merge(config.views.editor.tagChooser, {
	text: "Esistenti",
	tooltip: "Seleziona la categoria tra quelle già presenti",
	popupNone: "Non è definita nessuna categoria",
	tagTooltip: "Aggiungi la categoria '%0'" });

merge(config.messages, {
	sizeTemplates:
		[
			{ unit: 1024 * 1024 * 1024, template: "%0\u00a0GB" },
			{ unit: 1024 * 1024, template: "%0\u00a0MB" },
			{ unit: 1024, template: "%0\u00a0KB" },
			{ unit: 1, template: "%0\u00a0B" }
		] });

merge(config.macros.search, {
	label: "Trova",
	prompt: "Cerca in questo TiddlyWiki",
	accessKey: "F",
	successMsg: "%0 Trovati frammenti contenenti %1",
	failureMsg: "Nessun frammento contiene %0" });

merge(config.macros.tagging, {
	label: "Crea Categorie: ",
	labelNotTag: "Categoria:",
	tooltip: "Frammenti di tipo '%0'" });

merge(config.macros.timeline, {
	// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	dateFormat: "DD MMM YYYY" });

merge(config.macros.allTags, {
	tooltip: "Mostra i frammenti del tipo '%0'",
	noTags: "Non ci sono frammenti categorizzati" });

config.macros.list.all.prompt = "Elenca tutti i frammenti in ordine alfabetico";
config.macros.list.missing.prompt = "Elenca i frammenti collegati tra loro ma non ancora definiti";
config.macros.list.orphans.prompt = "Elenca i frammenti non collegati";
config.macros.list.shadowed.prompt = "Elenca i frammenti nascosti contenenti le impostazioni del programma";
config.macros.list.touched.prompt = "Elenca i frammenti che sono stati modificati localmente";

merge(config.macros.closeAll, {
	label: "Chiudi tutti",
	prompt: "Chiude tutti i frammenti aperti (esclusi quelli in modifica)" });

merge(config.macros.permaview, {
	label: "Indirizzo di Pagina",
	prompt: "Indica sulla barra l'indirizzo della pagina e dei frammenti aperti" });

merge(config.macros.saveChanges, {
	label: "Salva modifiche",
	prompt: "Salva tutti i frammenti per creare un nuovo TiddlyWiki",
	accessKey: "S" });

merge(config.macros.newTiddler, {
	label: "Nuovo",
	prompt: "Crea un nuovo frammento",
	title: "Nuovo",
	accessKey: "N" });

merge(config.macros.newJournal, {
	label: "Oggi",
	prompt: "Crea un nuovo frammento con data e ora corrente",
	accessKey: "J" });

merge(config.macros.options, {
	wizardTitle: "Modifica le opzioni",
	step1Title: "Queste opzioni sono salvate nei cookies del tuo browser",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>Mostra le opzioni sconosciute</input>",
	unknownDescription: "//(sconosciuta)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Opzione", type: 'String' },
			{ name: 'Description', field: 'description', title: "Descrizione", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Nome", type: 'String' }
		],
		rowClasses: [
			{ className: 'lowlight', field: 'lowlight' }
		] }
});

merge(config.macros.plugins, {
	wizardTitle: "Gestione plugin",
	step1Title: "Plugin attualmente installati",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(Questo plugin non è stato eseguito perchè è stato caricato dopo l'avvio di TiddlyWiki)",
	noPluginText: "Non ci sono plugin installati",
	confirmDeleteText: "Sei sicuro di voler cancellare questo/i plugin?:\n\n%0",
	removeLabel: "Rimuovi l'etichetta systemConfig",
	removePrompt: "Rimuovi l'etichetta systemConfig",
	deleteLabel: "Cancella",
	deletePrompt: "Cancella definitivamente questi frammenti",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Frammento", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Descrizione", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Versione", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Dimensione", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Forzato", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Disabilitato", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Caricato", type: 'Boolean', trueText: "Yes", falseText: "No" },
			{ name: 'Startup Time', field: 'startupTime', title: "Tempo di Startup", type: 'String' },
			{ name: 'Error', field: 'error', title: "Stato", type: 'Boolean', trueText: "Errore", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	},
	listViewTemplateReadOnly: {
		columns: [
			{ name: 'Tiddler', field: 'tiddler', title: "Frammento", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Descrizione", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Versione", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Dimensione", type: 'Size' },
			{ name: 'Executed', field: 'executed', title: "Caricato", type: 'Boolean', trueText: "Yes", falseText: "No" },
			{ name: 'Startup Time', field: 'startupTime', title: "tempo di Startup", type: 'String' },
			{ name: 'Error', field: 'error', title: "Stato", type: 'Boolean', trueText: "Errore", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	}
});

merge(config.macros.toolbar, {
	moreLabel: "Altro",
	morePrompt: "Mostra altri comandi",
	lessLabel: "Meno",
	lessPrompt: "Nascondi altri comandi",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "Rinnova",
	prompt: "Rinnova l'intero display di TiddlyWiki"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "Non puoi importare frammenti in un TiddlyWiki aperto in sola lettura. Prova ad aprirlo da file:// URL",
	wizardTitle: "Importa frammenti da altri file o server",
	step1Title: "Passo 1: Individua il server o il file TiddlyWiki",
	step1Html: "Specifica il tipo di server: <select name='selTypes'><option value=''>Scegli...</option></select><br>Digita l'URL o il percorso qui: <input type='text' size=50 name='txtPath'><br>...o esplora per un file: <input type='file' size=50 name='txtBrowse'><br><hr>...o seleziona un feed predefinito: <select name='selFeeds'><option value=''>Scegli...</option></select>",
	openLabel: "Apri",
	openPrompt: "Apri la connessione per questo file o server",
	statusOpenHost: "Apro l'host",
	statusGetWorkspaceList: "Ottengo la lista dei workspace disponibili",
	step2Title: "Passo 2: Scegli il workspace",
	step2Html: "Digita il nome di un workspace: <input type='text' size=50 name='txtWorkspace'><br>...o seleziona un workspace: <select name='selWorkspace'><option value=''>Scegli...</option></select>",
	cancelLabel: "Cancella",
	cancelPrompt: "Cancella l'importazione",
	statusOpenWorkspace: "Apro il workspace",
	statusGetTiddlerList: "Ottengo la lista dei frammenti disponibili",
	errorGettingTiddlerList: "Errore nel prelevare la lista dei frammenti, clicca Cancel per provare ancora",
	step3Title: "Passo 3: Scegli il/i frammento/i da importare",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>Mantieni questi frammenti collegati a questo server in modo da poterli sincronizzare per successive modifiche</input><br><input type='checkbox' name='chkSave'>Salva i dettagli di questo server in un frammento 'systemServer' con il nome:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "Importa",
	importPrompt: "Importa questi frammenti",
	confirmOverwriteText: "Sei sicuro di voler sovrascrivere questi frammenti:\n\n%0",
	step4Title: "Passo 4: Importato/i %0 frammento/i",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "Fatto",
	donePrompt: "Chiudi questo wizard",
	statusDoingImport: "Importo i frammenti",
	statusDoneImport: "Tutti i frammenti importati",
	systemServerNamePattern: "%2 on %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "Il frammento '%0' già esiste. Clicca su 'OK' per sovrascriverlo o 'Cancel' per lasciarlo inalterato",
	serverSaveTemplate: "|''Type:''|%0|\n|''URL:''|%1|\n|''Workspace:''|%2|\n\nQuesto frammento è stato creato automaticamente per memorizzare i dettagli di questo server",
	serverSaveModifier: "(System)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Frammento", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Dimensioni", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Categorie", type: 'Tags' }
		],
		rowClasses: [
		]
	}
});

merge(config.macros.upgrade, {
	wizardTitle: "Aggiorna il codice base di TiddlyWiki",
	step1Title: "Aggiorna o ripara questo TiddlyWiki all'ultima versione",
	step1Html: "Stai per aggiornare all'ultima versione del codice base di TiddlyWiki (da <a href='%0' class='externalLink' target='_blank'>%1</a>). Il contenuto del tuo TiddlyWiki viene preservato nel processo di aggiornamento.<br><br>Tieni presente che l'aggiornamento del codice base può interferire con vecchi plugins. Se si verificano problemi con il file aggiornato, consulta <a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "Impossibile aggiornare questo TiddlyWiki. E' possibile aggiornare solo TiddlyWiki memorizzati in locale",
	errorNotSaved: "Devi salvare le modifiche prima di realizzare l'aggiornamento",
	step2Title: "Conferma i dettagli dell'aggiornamento",
	step2Html_downgrade: "Stai per realizzare un downgrade di TiddlyWiki alla versione %0 dalla %1.<br><br>Non è consigliato il downgrade del codice base ad una vecchia versione",
	step2Html_restore: "Questo TiddlyWiki utilizza già l'ultima versione del codice base (%0).<br><br>Puoi comunque continuare l'aggiornamento per assicurarti che il codice base non sia stato corrotto o danneggiato",
	step2Html_upgrade: "Stai per aggiornare TiddlyWiki alla versione %0 dalla %1",
	upgradeLabel: "Aggiorna",
	upgradePrompt: "Preparazione del processo di aggiornamento",
	statusPreparingBackup: "Preparazione backup",
	statusSavingBackup: "Salvataggio del file di backup",
	errorSavingBackup: "Si è verificato un problema nel salvataggio del file di backup",
	statusLoadingCore: "Caricamento del codice base",
	errorLoadingCore: "Errore nel caricamento del codice base",
	errorCoreFormat: "Errore con il nuovo codice base",
	statusSavingCore: "Salvataggio del nuovo codice base",
	statusReloadingCore: "Ricarico il nuovo codice base",
	startLabel: "Inizia",
	startPrompt: "Inizia l'aggiornamento",
	cancelLabel: "Cancella",
	cancelPrompt: "Cancella l'aggiornamento",
	step3Title: "Aggiornamento cancellato",
	step3Html: "Hai cancellato il processo di aggiornamento"
});

merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Frammento", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Tipo server", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Host server", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Server workspace", type: 'String' },
			{ name: 'Status', field: 'status', title: "Stato sincronizzazione", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "Server URL", text: "Visualizza", type: 'Link' }
		],
		rowClasses: [
		],
		buttons: [
			{ caption: "Sincronizza questi frammenti", name: 'sync' }
		]
	},
	wizardTitle: "Sincronizza con file o server esterni",
	step1Title: "Scegli il frammento da sincronizzare",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "Sincronizza",
	syncPrompt: "Sincronizza questi frammenti",
	hasChanged: "Modificato in locale",
	hasNotChanged: "Non modificato in locale",
	syncStatusList: {
		none: { text: "...", color: "none" },
		changedServer: { text: "Modificato sul server", color: '#80ff80' },
		changedLocally: { text: "Modificato in locale", color: '#80ff80' },
		changedBoth: { text: "Modificato in locale e sul server", color: '#ff8080' },
		notFound: { text: "Non trovato sul server", color: '#ffff80' },
		putToServer: { text: "Modifiche salvate sul server", color: '#ff80ff' },
		gotFromServer: { text: "Recupero aggiornamenti dal server", color: '#80ffff' }
	}
});

merge(config.commands.closeTiddler, {
	text: "Chiudi",
	tooltip: "Chiude questo frammento" });

merge(config.commands.closeOthers, {
	text: "Chiude altri",
	tooltip: "Chiude tutti gli altri frammenti" });

merge(config.commands.editTiddler, {
	text: "Modifica",
	tooltip: "Edita il frammento",
	readOnlyText: "Visualizza",
	readOnlyTooltip: "Visualizza il contenuto di questo frammento" });

merge(config.commands.saveTiddler, {
	text: "Salva",
	tooltip: "Salva le modifiche" });

merge(config.commands.cancelTiddler, {
	text: "Annulla",
	tooltip: "Annulla le modifiche",
	warning: "Sei sicuro di voler annullare le modifiche a '%0'?",
	readOnlyText: "Chiudi",
	readOnlyTooltip: "Visualizza il frammento nel modo usuale" });

merge(config.commands.deleteTiddler, {
	text: "Elimina",
	tooltip: "Elimina questo frammento",
	warning: "Sei sicuro di voler eliminare '%0'?" });

merge(config.commands.permalink, {
	text: "Indirizzo",
	tooltip: "Indica sulla barra l'indirizzo di questo frammento" });

merge(config.commands.references, {
	text: "Collegati",
	tooltip: "Elenca i frammenti che puntano qui",
	popupNone: "Nessun frammento punta qui" });

merge(config.commands.jump, {
	text: "Vai a",
	tooltip: "Vai ad un altro frammento aperto" });

merge(config.commands.syncing, {
	text: "Sincronizzazione",
	tooltip: "Controlla la sincronizzazione di questo frammento con un file o un server esterno",
	currentlySyncing: "<div>Attualmente sincronizzato attraverso <span class='popupHighlight'>'%0'</span> to:</" + "div><div>host: <span class='popupHighlight'>%1</span></" + "div><div>workspace: <span class='popupHighlight'>%2</span></" + "div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "Non sincronizzato",
	captionUnSync: "Ferma la sincronizzazione di questo frammento",
	chooseServer: "Sincronizza questo frammento con un altro server:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  " });

merge(config.commands.fields, {
	text: "Campi",
	tooltip: "Mostra i campi estesi di questo frammento",
	emptyText: "Non esistono campi estesi per questo frammento",
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
	MainMenu: "[[TranslatedGettingStarted]]\n\n\n^^~TiddlyWiki versione <<version>>\n© 2007 [[UnaMesa|http://www.unamesa.org/]]^^",
	TranslatedGettingStarted: "Per iniziare ad usare questo documento vuoto, comincia ad editare i seguenti frammenti:\n* SiteTitle & SiteSubtitle: Il titolo ed il sottotitolo del sito (dopo il salvataggio saranno anche visibili nella barra del browser)\n* MainMenu: Il menu principale di ~TiddliWiki\n* DefaultTiddlers: Inserisci i frammenti che desideri compaiano all'apertura di questo ~TiddlyWiki\nInserisci anche un nome utente che ti permetterà di firmare le tue modifiche (usa un formato di parola Wiki es. ~MarioRossi): <<option txtUserName>>",
	SiteTitle: "Il mio ~TiddlyWiki",
	SiteSubtitle: "Un programma non lineare per scrivere web",
	SiteUrl: "http://www.tiddlywiki.com/",
	OptionsPanel: "Queste opzioni sono utilizzate per personalizzare il tuo ~TiddlyWiki e vengono salvate nel browser.\n\nDigita un nome utente per firmare le tue modifiche. Usa un formato di parola Wiki (es. ~MarioRossi)\n<<option txtUserName>>\n\n<<option chkSaveBackups>> Salva backups\n<<option chkAutoSave>> Salvataggio automatico\n<<option chkRegExpSearch>> Ricerca estesa\n<<option chkCaseSensitiveSearch>> Considera caratteri nella ricerca\n<<option chkAnimate>> Abilita animazioni\n\n----\nVedi anche [[Opzioni avanzate|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "Opzioni »" "Modifica le opzioni di TiddlyWiki">>',
	SideBarTabs: '<<tabs txtMainTab "Data" "Elenca i frammenti cronologicamente" TabTimeline "Tutti" "Tutti i frammenti in ordine alfabetico" TabAll "Categorie" "Elenca i frammenti per tipo" TabTags "Altro" "Altri elenchi" TabMore>>',
	TabMore: '<<tabs txtMoreTab "Mancanti" "Frammenti non ancora editati" TabMoreMissing "Orfani" "Frammenti non collegati tra loro" TabMoreOrphans "Nascosti" "Frammenti nascosti" TabMoreShadowed>>' });

merge(config.annotations, {
	AdvancedOptions: "Questo frammento nascosto permette l'accesso alle opzioni avanzate di TiddlyWiki",
	ColorPalette: "I valori presenti in questo frammento nascosto determinano lo schema dei colori dell'interfaccia utente di TiddlyWiki",
	DefaultTiddlers: "I frammenti elencati in questo frammento nascosto saranno automaticamente visualizzati quando viene avviato TiddlyWiki",
	EditTemplate: "Il template HTML contenuto in questo frammento nascosto determina come vengono visualizzati i frammenti quando sono editati",
	GettingStarted: "Questo frammento nascosto fornisce le istruzioni d'uso di base",
	ImportTiddlers: "Questo frammento nascosto fornisce accesso alla funzione di importazione frammenti",
	MainMenu: "Questo frammento nascosto definisce il contenuto del menu principale di TiddlyWiki visualizzato nella colonna di sinistra",
	MarkupPreHead: "Questo frammento è inserito nel top della sezione <head> del file HTML di TiddlyWiki",
	MarkupPostHead: "Questo frammento è inserito nel bottom della sezione <head> del file HTML di TiddlyWiki",
	MarkupPreBody: "Questo frammento è inserito nel top della sezione <body> del file HTML di TiddlyWiki",
	MarkupPostBody: "Questo frammento è inserito alla fine della sezione <body> del file HTML di TiddlyWiki immediatamente prima del blocco script",
	OptionsPanel: "Questo frammento nascosto definisce il contenuto del pannello opzioni visualizzato nella sidebar",
	PageTemplate: "Il template HTML contenuto in questo frammento nascosto determina il layout complessivo di TiddlyWiki",
	PluginManager: "Questo frammento nascosto fornisce accesso al gestore plugin",
	SideBarOptions: "Questo frammento nascosto definisce il contenuto della sidebar",
	SideBarTabs: "Questo frammento nascosto è usato per i contenuti dei tabs della sidebar",
	SiteSubtitle: "Questo frammento nascosto definisce la seconda parte del titolo della pagina",
	SiteTitle: "Questo frammento nascosto definisce la prima parte del titolo della pagina",
	SiteUrl: "Questo frammento nascosto dovrebbe essere personalizzato con l'URL completo utilizzato per pubblicare il sito",
	StyleSheetColors: "Questo frammento nascosto contiene le definizioni CSS relative al colore degli elementi di pagina. ''NON EDITATE QUESTO FRAMMENTO'', piuttosto fate le modifiche nel frammento nascosto StyleSheet",
	StyleSheet: "Questo frammento nascosto può contenere le definizioni CSS personalizzate",
	StyleSheetLayout: "Questo frammento nascosto contiene le definizioni CSS relative al layout degli elementi di pagina. ''NON EDITATE QUESTO FRAMMENTO'', piuttosto fate le modifiche nel frammento nascosto StyleSheet",
	StyleSheetLocale: "Questo frammento nascosto contiene le definizioni CSS relative alla traduzione locale",
	StyleSheetPrint: "Questo frammento nascosto contiene le definizioni CSS per la stampa",
	SystemSettings: "Questo frammento nascosto contiene le opzioni di configurazione di questo TiddlyWiki",
	TabAll: "Questo frammento nascosto definisce i contenuti del tab 'Tutti' della sidebar",
	TabMore: "Questo frammento nascosto definisce i contenuti del tab 'Altro' della sidebar",
	TabMoreMissing: "Questo frammento nascosto definisce i contenuti del tab 'Mancanti' della sidebar",
	TabMoreOrphans: "Questo frammento nascosto definisce i contenuti del tab 'Orfani' della sidebar",
	TabMoreShadowed: "Questo frammento nascosto definisce i contenuti del tab 'Nascosti' della sidebar",
	TabTags: "Questo frammento nascosto definisce i contenuti del tab 'Categorie' della sidebar",
	TabTimeline: "Questo frammento nascosto definisce i contenuti del tab 'Data' della sidebar",
	ToolbarCommands: "Questo frammento nascosto definisce quali comandi sono visualizzati nella toolbar",
	ViewTemplate: "Il template HTML contenuto in questo frammento nascosto determina l'aspetto dei frammenti"
});

//}}}