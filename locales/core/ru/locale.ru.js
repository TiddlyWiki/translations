/***
|Name            |TiddlyWiki:rus|
|Description     |Russian translation of TiddlyWiki. Supports core up to 2.6.4 (for later versions, some bits may be missing or inaccurate)|
|Описание        |Русификация TiddlyWiki. Поддерживает ядро до 2.6.4 включительно (в более поздних версиях переводы некоторых строк могут отсутствовать или устареть)|
|Version         |0.9.10|
|Date            |26.08.2023|
|Author          |vmunt|
|Source          |https://github.com/TiddlyWiki/translations/blob/master/locales/core/ru/locale.ru.js|
|Original Source |vmunt.dyndns.org ([[archived|https://web.archive.org/web/20130130043044/http://vmunt.dyndns.org/]])|
|Feedback        |Please comment, ask, and suggest at https://github.com/TiddlyWiki/translations/issues (and at https://groups.google.com/g/tiddlywikiclassic if you need to draw more attention)|
|License         |BSD open source license|
|Credits         |Idea by Глеб Тржемецкий (Gleb Trzhemetski), https://glebsite.net; fixes by Karel Winterksy|
***/
//{{{
// Строки в "двойных кавычках" предназначены для перевода; строки в 'одиночных кавычках' переводить нужно оставить как есть

config.locale = "ru";

merge(config.tasks, {
	// Since 2.6.3, action is not used (see 8790249); left here for backwards compatibility
	save: { text: "сохранить", tooltip: "Сохранить изменения в эту TiddlyWiki", action: saveChanges },
	sync: { text: "синхронизация", tooltip: "Синхронизировать изменения с другим файлом или сервером TiddlyWiki", content: '<<sync>>' },
	importTask: { text: "импорт", tooltip: "Импортировать заметки и плагины из другого файла или с сервера TiddlyWiki", content: '<<importTiddlers>>' },
	tweak: { text: "настройка", tooltip: "Настроить TiddlyWiki", content: '<<options>>' },
	upgrade: { text: "обновление", tooltip: "Обновить код ядра TiddlyWiki", content: '<<upgrade>>' },
	plugins: { text: "плагины", tooltip: "Управление плагинами", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	txtUserName: "Имя пользователя для подписывания ваших правок",
	chkRegExpSearch: "Включить поиск с помощью регулярных выражений",
	chkCaseSensitiveSearch: "Регистрозависимый поиск",
	chkIncrementalSearch: "Последовательный поиск (слово-за-словом)",
	chkAnimate: "Разрешить анимацию",
	chkSaveBackups: "Сделать резервную копию при сохранении изменений",
	chkAutoSave: "Автоматическое сохранение изменений",
	chkGenerateAnRssFeed: "Генерировать RSS-ленту при сохранении изменений",
	chkSaveEmptyTemplate: "Генерировать пустой шаблон при сохранении изменений",
	chkOpenInNewWindow: "Открывать внешние ссылки в новом окне",
	chkToggleLinks: "Нажатие на ссылках для открытия заметок также и закрывает их",
	chkHttpReadOnly: "Скрывать возможности редактирования при обращении через протокол HTTP",
	chkForceMinorUpdate: "Не обновлять автора изменений и дату редактирования заметок",
	chkConfirmDelete: "Спрашивать подтверждение при удалении заметок",
	chkInsertTabs: "При нажатии табуляции вставлять символ табуляции вместо перехода между полями ввода",
	txtBackupFolder: "Имя папки для резервных копий",
	txtMaxEditRows: "Максимальное количество строк в окне редактирования",
	txtTheme: "Имя темы для использования",
	txtFileSystemCharSet: "Кодировка символов в файле TiddlyWiki для сохранения изменений (только для Firefox/Mozilla)"
});

merge(config.messages, {
	customConfigError: "Не удалось загрузить плагин. Подробности смотрите в PluginManager",
	pluginError: "Ошибка: %0",
	pluginDisabled: "Не выполнено в связи с запретом, установленным меткой 'systemConfigDisable'",
	pluginForced: "Действие выполнено принудительно согласно установленной метке 'systemConfigForce'",
	pluginVersionError: "Плагин не запущен, так как разработан для более новой версии TiddlyWiki",
	nothingSelected: "Ничего не выбрано. Сначала вы должны выбрать один или несколько элементов",
	savedSnapshotError: "Похоже, что эта TiddlyWiki была сохранена с ошибкой. Обратитесь к http://www.tiddlywiki.com/#Download за более детальной информацией",
	subtitleUnknown: "(неизвестно)",
	undefinedTiddlerToolTip: "Заметка '%0' пока не существует",
	shadowedTiddlerToolTip: "Заметка '%0' пока не создана, но имеет предопределённое служебное значение",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "Внешняя ссылка на %0",
	noTags: "Нет помеченных заметок",
	notFileUrlError: "Вам нужно сначала сохранить эту TiddlyWiki в файл, прежде чем вы сможете сохранять изменения",
	cantSaveError: "Сохранить изменения невозможно. Возможные причины включают:\n- Ваша программа просмотра не поддерживает сохранение (Firefox, Internet Explorer, Safari и Opera все работают, но только тогда, когда правильно настроены)\n- путь к файлу TiddlyWiki содержит запрещённые символы\n- файл TiddlyWiki был перемещён, удалён или переименован\n-вы используете Firefox версии старше 14.0",
	invalidFileError: "Исходный файл '%0' не является корректной TiddlyWiki",
	backupSaved: "Резервная копия сохранена",
	backupFailed: "Не удалось сделать резервную копию",
	rssSaved: "RSS-лента сохранена",
	rssFailed: "Не удалось сохранить файл с RSS-лентой",
	emptySaved: "Пустой шаблон сохранён",
	emptyFailed: "Не удалось сохранить файл с пустым шаблоном",
	mainSaved: "Главный файл TiddlyWiki сохранён",
	mainFailed: "Не удалось сохранить главный файл TiddlyWiki. Ваши изменения не сохранены",
	macroError: "Ошибка в макросе <<%0>>",
	macroErrorDetails: "Ошибка при выполнении макроса <<%0>>:\n%1",
	missingMacro: "Нет такого макроса",
	overwriteWarning: "Заметка с именем '%0' уже существует. Нажмите OK для перезаписи её содержимого",
	unsavedChangesWarning: "ВНИМАНИЕ! В TiddlyWiki есть несохранённые изменения\n\nНажмите OK для сохранения\nНажмите CANCEL, если изменения не нужны",
	confirmExit: "--------------------------------\n\nВ TiddlyWiki есть несохранённые изменения. Продолжив, вы потеряете эти изменения\n\n--------------------------------",
	saveInstructions: "SaveChanges",
	unsupportedTWFormat: "Неподдерживаемый формат TiddlyWiki '%0'",
	tiddlerSaveError: "Ошибка при сохранении заметки '%0'",
	tiddlerLoadError: "Ошибка при загрузке заметки '%0'",
	wrongSaveFormat: "Невозможно сохранить с форматом хранения '%0'. Используется стандартный формат для сохранения.",
	invalidFieldName: "Неверное имя поля %0",
	fieldCannotBeChanged: "Поле '%0' изменить нельзя",
	loadingMissingTiddler: "Пытаюсь восстановить заметку '%0' с сервера '%1' по адресу:\n\n'%2' в 'рабочем пространстве' '%3'",
	upgradeDone: "Обновление до версии %0 завершено\n\nНажмите 'OK' для перезагрузки обновлённой TiddlyWiki",
	invalidCookie: "Неправильная cookie-переменная '%0'"
});

merge(config.messages.messageClose, { text: "[X]", tooltip: "закрыть эту область сообщения" });

config.messages.backstage = {
	open: { text: "обслуживание", tooltip: "Откройте меню обслуживания для проведения сервисных задач" },
	close: { text: "закрыть", tooltip: "Закрыть меню обслуживания" },
	prompt: "Обслуживание: ",
	decal: { edit: { text: "правка", tooltip: "Редактировать заметку '%0'" } }
};

config.messages.listView = {
	tiddlerTooltip: "Щёлкните тут для просмотра полного текста этой заметки",
	previewUnavailable: "(предварительный просмотр недоступен)"
};

config.messages.dates.months = [
	"января", "февраля", "марта", "апреля", "мая", "июня",
	"июля", "августа", "сентября", "октября", "ноября", "декабря"
];
config.messages.dates.days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
config.messages.dates.shortMonths = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
config.messages.dates.shortDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = [
	"-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е",
	"-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е",
	"-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е", "-е",
	"-е"
];
config.messages.dates.am = "утра";
config.messages.dates.pm = "дня";

merge(config.views.wikified.tag, {
	labelNoTags: "меток нет",
	labelTags: "метки: ",
	openTag: "Открыть метку '%0'",
	tooltip: "Показать заметки, помеченные как '%0'",
	openAllText: "Открыть всё",
	openAllTooltip: "Открыть все эти заметки",
	popupNone: "Нет других заметок, помеченных '%0'"
});

merge(config.views.wikified, {
	defaultText: "Заметка '%0' пока не создана. Создайте её двойным щелчком мышки",
	defaultModifier: "(отсутствует)",
	shadowModifier: "(встроенная служебная заметка)",
	dateFormat: "DD.0MM.YYYY",
	createdPrompt: "создана"
});

merge(config.views.editor, {
	tagPrompt: "Введите метки, разделённые пробелами, в случае необходимости [[используйте двойные квадратные скобки|use double square brackets]], или добавьте существующие метки",
	defaultText: "Введите текст для '%0'"
});

merge(config.views.editor.tagChooser, {
	text: "метки",
	tooltip: "Выберите существующую метку для добавления к этой заметке",
	popupNone: "Нет ни одной метки",
	tagTooltip: "Добавьте метку для '%0'"
});

merge(config.messages, {
	sizeTemplates: [
		{ unit: 1024 * 1024 * 1024, template: "%0\u00a0 Gb" },
		{ unit: 1024 * 1024, template: "%0\u00a0 Mb" },
		{ unit: 1024, template: "%0\u00a0 Kb" },
		{ unit: 1, template: "%0\u00a0 b" }
	]
});

merge(config.macros.search, {
	label: "поиск",
	prompt: "Поиск в этой TiddlyWiki",
	placeholder: "",
	accessKey: "F",
	successMsg: "Найдено %0 заметок с текстом %1",
	failureMsg: "Нет ни одной заметки с текстом %0"
});

merge(config.macros.tagging, {
	label: "метки: ",
	labelNotTag: "(нет меток)",
	tooltip: "Список заметок, помеченных как '%0'"
});

merge(config.macros.timeline, {
	dateFormat: "DD.0MM.YYYY"
});

merge(config.macros.allTags, {
	tooltip: "Показать заметки, помеченные как '%0'",
	noTags: "Нет ни одной помеченной заметки"
});

config.macros.list.all.prompt = "Все заметки в алфавитном порядке";
config.macros.list.missing.prompt = "Отсутствующие заметки, на которые при этом есть ссылки с других заметок";
config.macros.list.orphans.prompt = "Заметки, на которые нет ни одной ссылки из других заметок";
config.macros.list.shadowed.prompt = "Служебные заметки";
config.macros.list.touched.prompt = "Заметки, которые были изменены";

merge(config.macros.closeAll, {
	label: "закрыть всё",
	prompt: "Закрыть все отображённые заметки (за исключением редактируемых)"
});

merge(config.macros.permaview, {
	label: "прямая ссылка",
	prompt: "Создание адресной строки для открытия TiddlyWiki с текущими открытыми заметками"
});

merge(config.macros.saveChanges, {
	label: "сохранить",
	prompt: "Сохранение TiddlyWiki со всеми заметками",
	accessKey: "S"
});

merge(config.macros.newTiddler, {
	label: "новая заметка",
	prompt: "Создать новую заметку",
	title: "Новая заметка",
	accessKey: "N"
});

merge(config.macros.newJournal, {
	label: "новая журнальная запись",
	prompt: "Создать новую заметку с текущей датой и временем",
	accessKey: "J"
});

merge(config.macros.options, {
	wizardTitle: "Расширенные пункты настройки",
	step1Title: "Эти настройки ваша программа просмотра сохраняет с помощью cookies",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>Показать настройки без описания</input>",
	unknownDescription: "//(unknown)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Возможности", type: 'String' },
			{ name: 'Description', field: 'description', title: "Описание", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Имя", type: 'String' }
		],
		rowClasses: [{ className: 'lowlight', field: 'lowlight' }]
	}
});

merge(config.macros.plugins, {
	wizardTitle: "Управление плагинами",
	step1Title: "Подключенные плагины",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(Этот плагин не запущен, так как после его добавления ещё не было перезапуска TiddlyWiki)",
	noPluginText: "Нет установленных плагинов",
	confirmDeleteText: "Вы уверены, что хотите удалить эти плагины:\n\n%0",
	removeLabel: "удалить метку systemConfig",
	removePrompt: "Удалить метку systemConfig",
	deleteLabel: "удалить",
	deletePrompt: "Удалить эту заметку навсегда",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Заметка", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Описание", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Версия", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Размер", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Forced", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Запрещён", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Загружен", type: 'Boolean', trueText: "Да", falseText: "Нет" },
			{ name: 'Startup Time', field: 'startupTime', title: "Стартовый", type: 'String' },
			{ name: 'Error', field: 'error', title: "Состояние", type: 'Boolean', trueText: "Ошибка", falseText: "Норма" },
			{ name: 'Log', field: 'log', title: "Протокол", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	},
	listViewTemplateReadOnly: {
		columns: [
			{ name: 'Tiddler', field: 'tiddler', title: "Заметка", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Описание", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Версия", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Размер", type: 'Size' },
			{ name: 'Executed', field: 'executed', title: "Загружен", type: 'Boolean', trueText: "Да", falseText: "Нет" },
			{ name: 'Startup Time', field: 'startupTime', title: "Стартовый", type: 'String' },
			{ name: 'Error', field: 'error', title: "Состояние", type: 'Boolean', trueText: "Ошибка", falseText: "Норма" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	}
});

merge(config.macros.toolbar, {
	moreLabel: "прочее",
	morePrompt: "Показать дополнительные команды",
	lessLabel: "кратко",
	lessPrompt: "Скрыть дополнительные команды",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "обновить",
	prompt: "Обновить отображение TiddlyWiki"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "TiddlyWiki открыта только для чтения, поэтому добавить в неё что-либо невозможно. Попробуйте открыть её как файл (через обращение file://)",
	wizardTitle: "Импорт заметок из другого файла или c сервера",
	step1Title: "Шаг 1: Укажите сервер или файл TiddlyWiki",
	step1Html: "Укажите тип сервера: <select name='selTypes'><option value=''>Выберите...</option></select><br>введите адрес или путь к файлу тут: <input type='text' size=50 name='txtPath'><br>...или найдите файл: <input type='file' size=50 name='txtBrowse'><br><hr>...или выберите заготовку: <select name='selFeeds'><option value=''>Выберите...</option></select>",
	openLabel: "открыть",
	openPrompt: "Подключиться к этому файлу или серверу",
	openError: "Возникли проблемы с получением файла TiddlyWiki", // v.2.6.0, removed in v.2.6.1
	statusOpenHost: "Открытие узла",
	statusGetWorkspaceList: "Получение списка доступных рабочих областей",
	step2Title: "Шаг 2: Выберите рабочую область",
	step2Html: "Введите имя рабочей области: <input type='text' size=50 name='txtWorkspace'><br>...или выберите рабочую область: <select name='selWorkspace'><option value=''>Выберите...</option></select>",
	cancelLabel: "отмена",
	cancelPrompt: "Отмена этого импорта",
	statusOpenWorkspace: "Открытие рабочего пространства",
	statusGetTiddlerList: "Получение списка разрешённых заметок",
	errorGettingTiddlerList: "Ошибка при получении списка заметок, нажмите Отмену и попробуйте снова",
	step3Title: "Шаг 3: Выберите импортируемые заметки",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>Оставить эти заметки связанными с этим сервером для облегчения последующих синхронизаций</input><br><input type='checkbox' name='chkSave'>Сохранить параметры этого сервера в заметке с названием 'systemServer':</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "импорт",
	importPrompt: "Импортировать эти заметки",
	confirmOverwriteText: "Вы действительно хотите заменить эти заметки:\n\n%0",
	step4Title: "Шаг 4: Импортируется заметок: %0",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "завершить",
	donePrompt: "Закрыть этот мастер-диалог",
	statusDoingImport: "Импортирование заметок",
	statusDoneImport: "Все заметки импортированы",
	systemServerNamePattern: "%2 из %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "Заметка '%0' уже существует. Нажмите 'OK' для замены её на заметку с указанного сервера, или нажмите 'Cancel' для оставления её неизменной",
	serverSaveTemplate: "|''Введите:''|%0|\n|''Адрес:''|%1|\n|''Рабочее пространство:''|%2|\n\nЭта заметка будет автоматически создана для записи параметров этого сервера",
	serverSaveModifier: "(System)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Заметка", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Размер", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Метки", type: 'Tags' }
		],
		rowClasses: []
	}
});

merge(config.macros.upgrade, {
	wizardTitle: "Обновление кода ядра TiddlyWiki",
	step1Title: "Обновление или восстановление этой TiddlyWiki до последней версии",
	step1Html: "Вы готовы обновить код ядра TiddlyWiki до последней версии (с адреса <a href='%0' class='externalLink' target='_blank'>%1</a>). Информационное наполнение этого файла будет сохранено.<br><br>Заметьте, что обновление кода ядра может вызвать конфликт с уже подключенными старыми плагинами. Если у Вас появились проблемы с обновлённым файлом, почитайте здесь: <a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "Не могу обновить эту TiddlyWiki. Вы можете производить обновление TiddlyWiki-файлов, сохранённых только локально",
	errorNotSaved: "Вы должны сохранить изменения, прежде чем производить обновление",
	step2Title: "Подтвердите параметры обновления",
	step2Html_downgrade: "У Вас получается ухудшение версии файла TiddlyWiki с версии %1 до версии %0.<br><br>Замена версии кода ядра на более раннюю не рекомендуется",
	step2Html_restore: "Похоже, что эта TiddlyWiki уже использует последнюю версию кода ядра (%0).<br><br>Вы можете продолжить замену кода ядра в любом случае для того, чтобы быть уверенными, что код ядра не повреждён и не испорчен",
	step2Html_upgrade: "Вы готовы обновить версию TiddlyWiki с %1 до %0?",
	upgradeLabel: "обновление",
	upgradePrompt: "Приготовьтесь к процессу обновления",
	statusPreparingBackup: "Делается резервная копия",
	statusSavingBackup: "Сохраняется резервная копия",
	errorSavingBackup: "Возникла проблема с сохранением файла резервной копии",
	statusLoadingCore: "Загрузка кода ядра",
	errorLoadingCore: "Ошибка при загрузке кода ядра",
	errorCoreFormat: "Ошибка в новом коде ядра",
	statusSavingCore: "Сохранение нового кода ядра",
	statusReloadingCore: "Повторная загрузка нового кода ядра",
	startLabel: "пуск",
	startPrompt: "Запуск процесса обновления",
	cancelLabel: "отмена",
	cancelPrompt: "Отмена процесса обновления",
	step3Title: "Процесс обновления прерван",
	step3Html: "Вы отменили процесс обновления TiddlyWiki"
});

merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Заметка", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Тип сервера", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Хранилище сервера (host)", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Рабочее пространство сервера", type: 'String' },
			{ name: 'Status', field: 'status', title: "Состояние синхронизации", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "Адресная строка", text: "View", type: 'Link' }
		],
		rowClasses: [],
		buttons: [{ caption: "Синхронизировать эти заметки", name: 'sync' }]
	},
	wizardTitle: "Синхронизировать с внешним сервером или файлом",
	step1Title: "Выберите заметки, которые Вы хотите синхронизировать",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "синхронизация",
	syncPrompt: "Синхронизировать эти заметки",
	hasChanged: "Изменены с момента последней синхронизации",
	hasNotChanged: "Нет изменений с момента последней синхронизации",
	syncStatusList: {
		none: { text: "...", display: 'none', className: 'notChanged' },
		changedServer: { text: "Изменены на сервере", display: null, className: 'changedServer' },
		changedLocally: { text: "Изменены локально", display: null, className: 'changedLocally' },
		changedBoth: { text: "Изменены в обоих местах сразу", display: null, className: 'changedBoth' },
		notFound: { text: "Отсутствует на сервере", display: null, className: 'notFound' },
		putToServer: { text: "Обновление сохранено на сервер", display: null, className: 'putToServer' },
		gotFromServer: { text: "Обновления получены с сервера", display: null, className: 'gotFromServer' }
	}
});

merge(config.macros.annotations, {});

merge(config.commands.closeTiddler, {
	text: "закрыть",
	tooltip: "Закрыть заметку"
});

merge(config.commands.closeOthers, {
	text: "закрыть остальные",
	tooltip: "Закрыть все остальные заметки"
});

merge(config.commands.editTiddler, {
	text: "правка",
	tooltip: "Исправить заметку",
	readOnlyText: "просмотр",
	readOnlyTooltip: "Просмотр исходного текста заметки"
});

merge(config.commands.saveTiddler, {
	text: "сохранить",
	tooltip: "Сохранить изменения"
});

merge(config.commands.cancelTiddler, {
	text: "отмена",
	tooltip: "Отменить изменения",
	warning: "Вы действительно уверены, что хотите потерять все изменения в заметке '%0'?",
	readOnlyText: "возврат",
	readOnlyTooltip: "Просмотр заметки в нормальном режиме"
});

merge(config.commands.deleteTiddler, {
	text: "удалить",
	tooltip: "Удалить эту заметку",
	warning: "Вы уверены, что хотите удалить '%0'?"
});

merge(config.commands.permalink, {
	text: "прямая ссылка",
	tooltip: "Адресная строка для этой заметки"
});

merge(config.commands.references, {
	text: "ссылки",
	tooltip: "Показать все заметки, которые ссылаются на эту заметку",
	popupNone: "Нет ссылок"
});

merge(config.commands.jump, {
	text: "переход",
	tooltip: "Переход на другую открытую заметку"
});

merge(config.commands.syncing, {
	text: "синхронизация",
	tooltip: "Управление синхронизацией этой заметки с сервером или внешним файлом",
	currentlySyncing: "<div>Синхронизирую с помощью <span class='popupHighlight'>'%0'</span> с:</" + "div><div>хранилищем: <span class='popupHighlight'>%1</span></" + "div><div>рабочее пространство: <span class='popupHighlight'>%2</span></" + "div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "Пока не синхронизировано",
	captionUnSync: "Остановить синхронизацию этой заметки",
	chooseServer: "Привести в соответствие эту заметку с другим сервером:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  "
});

merge(config.commands.fields, {
	text: "поля",
	tooltip: "Отображение расширенных параметров этой заметки",
	emptyText: "У этой заметки нет расширенных параметров",
	listViewTemplate: {
		columns: [
			{ name: 'Field', field: 'field', title: "Поле", type: 'String' },
			{ name: 'Value', field: 'value', title: "Значение", type: 'String' }
		],
		rowClasses: [],
		buttons: []
	}
});

merge(config.shadowTiddlers, {
	DefaultTiddlers: "[[GettingStarted]]",
	MainMenu: "[[GettingStarted]]",
	SiteTitle: "Моя TiddlyWiki",
	SiteSubtitle: "гипертекстовая записная книжка",
	SiteUrl: "",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD.0MM.YYYY" "journal">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "настройки \u00bb" "Изменение настроек TiddlyWiki">>',
	SideBarTabs: '<<tabs txtMainTab "история" "История" TabTimeline "все" "Все заметки" TabAll "метки" "Все метки" TabTags "ещё" "Другие списки" TabMore>>',
	TabMore: '<<tabs txtMoreTab "нет" "Отсутствующие заметки" TabMoreMissing "одиночки" "Потерянные заметки" TabMoreOrphans "служебные" "Служебные заметки" TabMoreShadowed>>'
});

merge(config.annotations, {
	AdvancedOptions: "Эта служебная заметка обеспечивает доступ к некоторым дополнительным настройкам",
	ColorPalette: "Значения из этой служебной заметки определяют цветовую схему пользовательского интерфейса TiddlyWiki",
	DefaultTiddlers: "Заметки, перечисленные здесь автоматически будут открываться при каждом запуске TiddlyWiki",
	EditTemplate: "Шаблон HTML в этой служебной заметке определяет, как заметки будут выглядеть, пока они редактируются",
	GettingStarted: "Эта служебная заметка содержит инструкции по начальному использованию",
	ImportTiddlers: "Эта служебная заметка обеспечивает доступ к импортированным заметкам",
	MainMenu: "Эта служебная заметка используется для хранения содержимого главного меню (//обычно отображается в левой колонке экрана//)",
	MarkupPreHead: "Эта заметка вставляется в начало раздела <head> этого HTML-файла c TiddlyWiki",
	MarkupPostHead: "Эта заметка вставляется в конец раздела <head> этого HTML-файла c TiddlyWiki",
	MarkupPreBody: "Эта заметка вставляется в начало раздела <body> этого HTML-файла c TiddlyWiki",
	MarkupPostBody: "Эта заметка вставляется в конец раздела <body> этого HTML-файла с TiddlyWiki сразу же после блока кода",
	OptionsPanel: "Эта служебная заметка используется для хранения скрываемой панели Настроек, расположенной на боковой панели",
	PageTemplate: "HTML-шаблон в этой служебной заметке определяет общий вид TiddlyWiki",
	PluginManager: "Эта служебная заметка обеспечивает доступ к управлению плагинами",
	SideBarOptions: "Эта служебная заметка используется для хранения панели поиска и настроек на боковой панели",
	SideBarTabs: "Эта служебная заметка содержит начинку панели со списком служебных заметок на боковой панели",
	SiteSubtitle: "Эта служебная заметка содержит вторую часть заголовка страницы",
	SiteTitle: "Эта служебная заметка содержит первую часть заголовка страницы",
	SiteUrl: "В эту служебную заметку должен быть занесён полный URL публикации этой TiddlyWiki",
	StyleSheetColors: "Эта служебная заметка содержит CSS-описания, относящиеся к цветам элементов страницы. ''НЕ ИЗМЕНЯЙТЕ ЭТУ ЗАМЕТКУ''. Все изменения делайте в служебной заметке StyleSheet",
	StyleSheet: "Эта заметка может содержать Ваши определения и изменения стилей CSS",
	StyleSheetLayout: "Эта служебная заметка содержит СSS-описания, относящиеся к расположению элементов страниц.''НЕ ИЗМЕНЯЙТЕ ЭТУ ЗАМЕТКУ''. Все изменения делайте в служебной заметке StyleSheet",
	StyleSheetLocale: "Эта служебная заметка содержит CSS-описания, относящиеся к переводу на местный язык",
	StyleSheetPrint: "Эта служебная заметка содержит CSS-описания для печати",
	SystemSettings: "Эта заметка используется для хранения параметров настройки этой TiddlyWiki",
	TabAll: "Эта служебная заметка содержит начинку закладки 'Все' на боковой панели",
	TabMore: "Эта служебная заметка содержит начинку закладки 'Ещё' на боковой панели",
	TabMoreMissing: "Эта служебная заметка содержит начинку закладки 'Нет' на боковой панели",
	TabMoreOrphans: "Эта служебная заметка содержит начинку закладки 'Потери' на боковой панели",
	TabMoreShadowed: "Эта служебная заметка содержит начинку закладки 'Служебные' на боковой панели",
	TabTags: "Эта служебная заметка содержит начинку закладки 'Метки' на боковой панели",
	TabTimeline: "Эта служебная заметка содержит начинку закладки 'История' на боковой панели",
	ToolbarCommands: "Эта служебная заметка определяет, какие команды будут показываться в меню заметки",
	ViewTemplate: "HTML-шаблон в этой сервисной заметке определяет, как будет выглядеть заметка",
	WindowTitle: "Эта служебная заметка содержит полный вид заголовка страницы"
});
//}}}
