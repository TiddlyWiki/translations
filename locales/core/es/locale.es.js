/***
|Nombre        |ComplementoTraducciónEspañol|
|Descripción   |Traducción de TiddlyWiki al español|
|Autores       |Sergio González y Pedro Domínguez (sgm214 (at) gmail (dot) com / alpedro (at) hotmail (dot) com); Yakov Litvin|
|Correcciónes  |Dave Gifford y Ton van Rooijen (giff (at) giffmex (dot) org / tonsweb (at) xs4all (dot) nl), Alfonso Arciniega|
|Source        |https://github.com/TiddlyWiki/translations/blob/master/locales/core/es/locale.es.js|
|Código        |~|
|Versión       |0.5.4|
|~VersiónNúcleo|2.10.1|
|Comentarios   |Por favor deje sus comentarios en https://github.com/TiddlyWiki/translations/issues o https://groups.google.com/g/tiddlywikiclassic|
|Licencia      |[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
***/
//{{{
// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "es"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options, { txtUserName: "SuNombre" });

merge(config.tasks, {
	// Since 2.6.3, action is not used (see 8790249); left here for backwards compatibility
	save: { text: "guardar", tooltip: "Guardar sus cambios hechos a este TiddlyWiki", action: saveChanges },
	// Since 2.6.6, sync is not used (see e901015); left here for backwards compatibility
	sync: { text: "sincronizar", tooltip: "Sincronizar los cambios hechos con otros servidores y archivos de TiddlyWiki", content: '<<sync>>' },
	importTask: { text: "importar", tooltip: "Importar tiddlers y plugins de " +
		"otros servidores y archivos de TiddlyWiki", content: '<<importTiddlers>>' },
	tweak: { text: "configurar", tooltip: "Cambiar la apariencia y comportamiento de TiddlyWiki", content: '<<options>>' },
	upgrade: { text: "actualizar", tooltip: "Actualizar el núcleo de TiddlyWiki", content: '<<upgrade>>' },
	plugins: { text: "complementos", tooltip: "Gestionar los complementos instalados", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	chkAnimate: "Activar las animaciones",
	chkAutoSave: "Guardar automáticamente los cambios",
	txtBackupFolder: "Nombre del directorio en que se guardan las copias de seguridad",
	chkCaseSensitiveSearch: "Distinguir mayúsculas y minúsculas en la búsqueda",
	chkConfirmDelete: "Requiere confirmación antes de borrar un tiddler",
	txtFileSystemCharSet: "Juego de caracteres por defecto para guardar los cambios (sólo Firefox/Mozilla)",
	chkForceMinorUpdate: "No cambiar el nombre del usuario y la fecha cuando se edita un tiddler",
	chkGenerateAnRssFeed: "Crear una noticia RSS cuando se guardan los cambios",
	chkHttpReadOnly: "Ocultar la edición cuando se muestra en HTTP",
	chkIncrementalSearch: "Búsqueda incremental de letra por letra",
	chkInsertTabs: "Usar el tabulador para crear texto en columnas en vez de servir para moverse entre campos",
	txtMaxEditRows: "Número máximo de filas en los recuadros de edición",
	chkOpenInNewWindow: "Abrir los enlaces externos en una ventana nueva",
	chkPreventAsyncSaving: "No intente guardado asíncrono (puede ser necesario para complementos antiguos)",
	chkRegExpSearch: "Permitir expresiones regulares en la búsqueda",
	chkRemoveExtraMarkers: "Reemplazar los marcadores de transclusión no utilizados con espacios en blanco",
	chkSaveBackups: "Mantener la copia de seguridad cuando se guardan los cambios",
	chkSaveEmptyTemplate: "Crear una plantilla vacía cuando se guardan los cambios",
	chkToggleLinks: "Al pulsar sobre un enlace de un tiddler, éste se cierra",
	txtTheme: "Nombre de tema para utilizar",
	txtUpgradeCoreURI: "URI personalizada para descargar el núcleo de TiddlyWiki (al actualizar)",
	txtUserName: "Nombre de usuario con el que firmará lo editado"
});

merge(config.messages, {
	customConfigError: "Hubo problemas al cargar los complementos. Mire el Gestor de Complementos para más detalles",
	pluginError: "Error: %0",
	pluginDisabled: "No ejecutado porque está inhabilitado en la etiqueta 'systemConfigDisable'",
	pluginForced: "Ejecutado porque lo fuerza la etiqueta 'systemConfigForce'",
	pluginVersionError: "No ejecutado porque este complemento necesita una versión más moderna de TiddlyWiki",
	nothingSelected: "No hay nada seleccionado. Debe marcar uno o más primero",
	savedSnapshotError: "Parece que este TiddlyWiki se ha guardado incorrectamente. Por favor mire https://classic.tiddlywiki.com/#SaveUnpredictabilities para más detalles",
	subtitleUnknown: "(desconocido)",
	undefinedTiddlerToolTip: "El tiddler '%0' no existe todavía",
	shadowedTiddlerToolTip: "El tiddler '%0' no existe todavía, pero tiene un valor oculto definido previamente",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "Enlace externo a %0",
	noTags: "No hay tiddlers sin etiquetas",
	notFileUrlError: "Debe guardar este TiddlyWiki en un archivo antes de que pueda guardar los cambios",
	cantSaveError: "No se pueden guardar los cambios. Algunas de las posibles causas pueden ser:\n- su navegador no permite guardar (Firefox, Internet Explorer, Safari and Opera funcionan bien si están correctamente configurados)\n- la ruta a su archivo TiddlyWiki tiene caracteres no válidos\n- El archivo HTML TiddlyWiki ha sido movido o renombrado",
	invalidFileError: "El archivo original '%0' parece que no es un archivo TiddlyWiki válido",
	backupSaved: "Copia de seguridad guardada",
	backupFailed: "Hubo un error al guardar la copia de seguridad",
	rssSaved: "Noticia RSS guardada",
	rssFailed: "Hubo un error al guardar la noticia RSS",
	emptySaved: "Plantilla en blanco guardada",
	emptyFailed: "Hubo un error al guardar la plantilla en blanco",
	mainSaved: "TiddlyWiki guardado",
	mainDownload: "Descargando/guardando archivo principal de TiddlyWiki",
	mainDownloadManual: "HAGA CLIC DERECHO AQUÍ para descargar/guardar archivo principal de TiddlyWiki",
	mainFailed: "Hubo un error al guardar el archivo principal TiddlyWiki. Sus cambios no se han guardado",
	macroError: "Error en la macro <<%0>>",
	macroErrorDetails: "Error mientras se ejecutaba la macro <<%0>>:\n%1",
	missingMacro: "No existe esta macro",
	overwriteWarning: "Un tiddler llamado '%0' ya existe. Elija OK si quiere sobrescribirlo",
	unsavedChangesWarning: "¡ATENCIÓN! Hay cambios sin guardar en su TiddlyWiki\n\nElija OK para guardarlos\nElija CANCELAR para descartarlos",
	confirmExit: "--------------------------------\n\nHay cambios sin guardar en su TiddlyWiki. Si prosigue perderá los cambios\n\n--------------------------------",
	saveInstructions: "Guardar los cambios",
	unsupportedTWFormat: "Formato de TiddlyWiki no soportado '%0'",
	tiddlerSaveError: "Hubo un error al guardar el tiddler '%0'",
	tiddlerLoadError: "Hubo un error al cargar el tiddler '%0'",
	wrongSaveFormat: "No se puede guardar en el formato '%0'. Usando el formato estandar para guardarlo.",
	invalidFieldName: "Nombre de campo no válido %0",
	fieldCannotBeChanged: "El campo '%0' no se puede cambiar",
	loadingMissingTiddler: "Intentando descargar el tiddler '%0' desde el servidor '%1' en:\n\n'%2' en el espacio de trabajo '%3'",
	upgradeDone: "Actualización a la versión %0 completada\n\nPulse 'OK' para cargar la nueva versión de TiddlyWiki",
	invalidCookie: "La Cookie '%0'es inválida"
});

merge(config.messages.messageClose, {
	text: "cerrar",
	tooltip: "cerrar este mensaje"
});

config.messages.backstage = {
	open: { text: "bastidores", tooltip: "Acceder a los bastidores para gestionar TiddlyWiki" },
	close: { text: "cerrar", tooltip: "Salir de los bastidores" },
	prompt: "bastidores: ",
	decal: {
		edit: { text: "editar", tooltip: "Editar el tiddler '%0'" }
	}
};

config.messages.listView = {
	tiddlerTooltip: "Pulse para ver el texto completo de este tiddler",
	previewUnavailable: "(Vista previa no disponible)"
};

config.messages.dates.months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
config.messages.dates.days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
config.messages.dates.shortMonths = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
config.messages.dates.shortDays = ["dom", "lun", "mar", "mié", "jue", "vie", "sab"];
// suffixes for dates, eg "1ro","2do","3ro"..."30mo","31ro"
config.messages.dates.daySuffixes = [
	"ro", "do", "ro", "to", "to", "to", "mo", "vo", "no", "mo",
	"ro", "do", "ro", "to", "to", "to", "mo", "vo", "no", "mo",
	"ro", "do", "ro", "to", "to", "to", "mo", "vo", "no", "mo",
	"ro"
];
config.messages.dates.am = "a. m.";
config.messages.dates.pm = "p. m.";

merge(config.messages.tiddlerPopup, {
});

merge(config.views.wikified.tag, {
	labelNoTags: "sin etiquetas",
	labelTags: "etiquetas: ",
	openTag: "Abrir la etiqueta '%0'",
	tooltip: "Mostrar los tiddlers que tengan la etiqueta '%0'",
	openAllText: "Abrir todos",
	openAllTooltip: "Abrir todos estos tiddlers",
	popupNone: "No existen otros tiddlers que tengan la etiqueta '%0'"
});

merge(config.views.wikified, {
	defaultText: "El tiddler '%0' no existe todavía. Haga doble click para crearlo",
	defaultModifier: "(perdido)",
	shadowModifier: "(tiddler oculto interno)",
	dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "creado"
});

merge(config.views.editor, {
	tagPrompt: "Escriba etiquetas separadas por espacios, [[use dobles corchetes]] si es necesario, o añada alguna existente",
	defaultText: "Escriba el texto para '%0'"
});

merge(config.views.editor.tagChooser, {
	text: "etiquetas",
	tooltip: "Elija etiquetas ya existentes para añadirlas a este artículo",
	popupNone: "No hay etiquetas definidas",
	tagTooltip: "Añadir la etiqueta '%0'"
});

merge(config.messages, {
	sizeTemplates: [
		{ unit: 1024 * 1024 * 1024, template: "%0\u00a0GB" },
		{ unit: 1024 * 1024, template: "%0\u00a0MB" },
		{ unit: 1024, template: "%0\u00a0KB" },
		{ unit: 1, template: "%0\u00a0B" }
	]
});

merge(config.macros.search, {
	label: "búsqueda",
	prompt: "Búsqueda en este TiddlyWiki",
	placeholder: "",
	accessKey: "F",
	successMsg: "%0 tiddlers encontrados que concuerden con %1",
	failureMsg: "No hay tiddlers que concuerden con %0"
});

merge(config.macros.tagging, {
	label: "etiquetado: ",
	labelNotTag: "Sin etiquetas",
	tooltip: "Listado de tiddlers etiquetados con '%0'"
});

merge(config.macros.timeline, {
	dateFormat: "DD MMM YYYY" });// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D

merge(config.macros.allTags, {
	tooltip: "Mostrar los tiddlers etiquetados con '%0'",
	noTags: "No hay tiddlers sin etiquetas"
});

config.macros.list.all.prompt = "Todos los tiddlers ordenados alfabéticamente";
config.macros.list.missing.prompt = "Tiddlers que tienen enlaces a ellos pero no están definidos";
config.macros.list.orphans.prompt = "Tiddlers que no están enlazados con otros, ni otros los enlazan";
config.macros.list.shadowed.prompt = "Tiddlers ocultos con contenidos predefinidos";
config.macros.list.touched.prompt = "Tiddlers que no han sido modificados localmente";

merge(config.macros.closeAll, {
	label: "cerrar todo",
	prompt: "Cerrar todos los tiddlers mostrados (excepto los que están siendo editados)"
});

merge(config.macros.permaview, {
	label: "vistapermanente",
	prompt: "Enlazar con una URL que recoge todos los tiddlers mostrados actualmente"
});

merge(config.macros.saveChanges, {
	label: "guardar cambios",
	prompt: "Guardar todos los tiddlers editados previamente",
	accessKey: "S"
});

merge(config.macros.newTiddler, {
	label: "nuevo tiddler",
	prompt: "Crear un nuevo tiddler",
	title: "Nuevo Tiddler",
	accessKey: "N"
});

merge(config.macros.newJournal, {
	label: "nuevo tiddler diario",
	prompt: "Crear un nuevo tiddler con la fecha y hora actual",
	accessKey: "J"
});

merge(config.macros.options, {
	wizardTitle: "Configurar opciones avanzadas",
	step1Title: "Estas opciones se guardarán en una cookie en su navegador",
	step1Html: "<input type='hidden' name='markList'></input><br>" +
		"<input type='checkbox' checked='false' name='chkUnknown'>Mostrar opciones desconocidas</input>",
	unknownDescription: "//(desconocido)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Opción", type: 'String' },
			{ name: 'Description', field: 'description', title: "Descripción", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Nombre", type: 'String' }
		],
		rowClasses: [
			{ className: 'lowlight', field: 'lowlight' }
		]
	}
});

merge(config.macros.plugins, {
	wizardTitle: "Configurar complementos",
	step1Title: "Complementos que están activados",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(Este complemento no ha sido ejecutado porque se cargó al inicio)",
	noPluginText: "No hay complementos instalados",
	confirmDeleteText: "¿Está seguro que quiere borrar estos complementos:\n\n%0?",
	removeLabel: "quitar la etiqueta de systemConfig",
	removePrompt: "Quitar la etiqueta systemConfig",
	deleteLabel: "borrar",
	deletePrompt: "Borrar estos tiddlers para siempre",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Descripción", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Versión", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Tamaño", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Forzado", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Deshabilitado", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Cargado", type: 'Boolean', trueText: "Si", falseText: "No" },
			{ name: 'Startup Time', field: 'startupTime', title: "Al inicio", type: 'String' },
			{ name: 'Error', field: 'error', title: "Estado", type: 'Boolean', trueText: "Error", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Registro", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	}
});
merge(config.macros.plugins.listViewTemplateReadOnly, {
	columns: [
		{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
		{ name: 'Description', field: 'Description', title: "Descripción", type: 'String' },
		{ name: 'Version', field: 'Version', title: "Versión", type: 'String' },
		{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Tamaño", type: 'Size' },
		{ name: 'Executed', field: 'executed', title: "Cargado", type: 'Boolean', trueText: "Si", falseText: "No" },
		{ name: 'Startup Time', field: 'startupTime', title: "Al inicio", type: 'String' },
		{ name: 'Error', field: 'error', title: "Estado", type: 'Boolean', trueText: "Error", falseText: "OK" },
		{ name: 'Log', field: 'log', title: "Registro", type: 'StringList' }
	]
});

merge(config.macros.toolbar, {
	moreLabel: "más",
	morePrompt: "Mostrar comandos adicionales",
	lessLabel: "menos",
	lessPrompt: "Ocultar comandos adicionales",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "actualizar",
	prompt: "Actualizar la vista de todo TiddlyWiki"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "No puede importar a un archivo TiddlyWiki de sólo lectura. Pruebe a abrirlo desde un archivo:// URL",
	wizardTitle: "Importar tiddlers de otro archivo o servidor",
	step1Title: "Primer paso: Localice el servidor o el archivo TiddlyWiki",
	step1Html: "Indique el tipo de servidor: <select name='selTypes'><option value=''>Elija...</option></select><br>" +
		"Escriba la URL o la ruta aquí: <input type='text' size=50 name='txtPath'><br>" +
		"...o navegue hasta un archivo: <input type='file' size=50 name='txtBrowse'><br><hr>" +
		"...o elija una fuente predefinida: <select name='selFeeds'><option value=''>Elige...</option></select>",
	openLabel: "abrir",
	openPrompt: "Abrir la conexión a este archivo o servidor",
	statusOpenHost: "Accediendo al anfitrión",
	statusGetWorkspaceList: "Obteniendo el listado de espacios de trabajo",
	step2Title: "Segundo paso: Elegir el espacio de trabajo",
	step2Html: "Escriba el nombre de un espacio de trabajo: <input type='text' size=50 name='txtWorkspace'><br>" +
		"...o seleccione uno: <select name='selWorkspace'><option value=''>Elegir...</option></select>",
	cancelLabel: "cancelar",
	cancelPrompt: "Cancelar esta importación",
	statusOpenWorkspace: "Accediendo al espacio de trabajo",
	statusGetTiddlerList: "Obteniendo el listado de tiddlers disponibles",
	errorGettingTiddlerList: "Hubo un error al obtener la lista de tiddlers, pulsa Cancelar para intentarlo de nuevo",
	errorGettingTiddlerListHttp404: "Hubo un error al obtener tiddlers de la URL, " +
		"asegúrese de que esta URL exista. Pulsa Cancelar para intentarlo de nuevo.",
	errorGettingTiddlerListHttp: "Hubo un error al obtener tiddlers de la URL, " +
		"asegúrese de que esta URL exista y tenga <a href='http://enable-cors.org/'>CORS</a> habilitado",
	errorGettingTiddlerListFile: "Hubo un error al obtener tiddlers del archivo local, " +
		"asegúrese de que esta archivo esté en el mismo directorio que su TiddlyWiki. " +
		"Pulsa Cancelar para intentarlo de nuevo.",
	step3Title: "Tercer paso: Elegir los tiddlers que quiere importar",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>" +
		"Mantener estos tiddlers enlazados a este servidor para poder sincronizar los cambios posteriores</input><br>" +
		"<input type='checkbox' name='chkSave'>Guardar los datos de este servidor en un tiddler con etiqueta 'systemServer' cuyo nombre será:</input>" +
		" <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "importar",
	importPrompt: "Importar estos tiddlers",
	confirmOverwriteText: "¿Está seguro de que quiere sobrescribir estos tiddlers:\n\n%0?",
	step4Title: "Cuarto paso: Importar %0 tiddler(s)",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "hecho",
	donePrompt: "Cerrar este asistente",
	statusDoingImport: "Importando tiddlers",
	statusDoneImport: "Todos los tiddlers se importaron",
	systemServerNamePattern: "%2 en %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "El tiddler '%0' ya existe. Pulse en 'OK' " +
		"para sobrescribirlo con el que hay en este servidor, o 'Cancel' para dejarlo sin modificar",
	serverSaveTemplate: "|''Tipo:''|%0|\n|''URL:''|%1|\n|''Espacio de trabajo:''|%2|\n\n" +
		"Este tiddler se creó automáticamente para recoger todos los datos de este servidor",
	serverSaveModifier: "(Sistema)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Tamaño", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Etiquetas", type: 'Tags' }
		],
		rowClasses: [
		]
	}
});

merge(config.macros.upgrade, {
	wizardTitle: "Actualizar TiddlyWiki",
	step1Title: "Actualizar o reparar el núcleo de TiddlyWiki a la última versión",
	step1Html: "Está a punto de actualizar el núcleo de TiddlyWiki ala última versión " +
		"(desde <a href='%0' class='externalLink' target='_blank'>%1</a>). " +
		"El contenido de TiddlyWiki permanecerá tras la actualización.<br><br>" +
		"Las actualizaciones del núcleo interfieren con complementos antiguos. " +
		"Si tiene problemas con la actualización, lea cómo solucionarlos " +
		"<a href='" + (config.macros.upgrade.docsUrl ? '%2' : 'https://classic.tiddlywiki.com/#HowToUpgrade') +
		"' class='externalLink' target='_blank'>aquí</a>.",
	errorCantUpgrade: "No se puede actualizar. Sólo se pueden actualizar archivos TiddlyWiki que estén guardados localmente (disco duro, etc.)",
	errorNotSaved: "Debe guardar los cambios antes de poder actualizar",
	step2Title: "Confirmar los detalles de la actualización",
	step2Html_downgrade: "Está a punto de retroceder en su versión de TilldyWiki, pasará a la versión anterior %0 desde %1.<br><br>" +
		"Retroceder a una versión anterior del núcleo no es recomendable",
	step2Html_restore: "Este archivo TiddlyWiki parece que usa la última versión disponible del núcleo (%0).<br><br>" +
		"Puede seguir con la actualización si quiere asegurarse que su núcleo no está estropeado o dañado",
	step2Html_upgrade: "Está a punto de actualizar TiddlyWiki a la versión %0 desde %1",
	upgradeLabel: "actualizar",
	upgradePrompt: "Preparándose para el proceso de actualización",
	statusPreparingBackup: "Preparando la copia de seguridad",
	statusSavingBackup: "Guardando la copia de seguridad",
	errorSavingBackup: "Hubo poblemas al guardar la copia de seguridad",
	errorVerifyingBackup: "No se pudo verificar que se guardó la copia de seguridad. " +
		"Esto se debe a que no se guardó en el momento de la verificación o " +
		"a que cargar archivos no funciona con su método de guardado (y es necesario para " +
		"el siguiente paso de la actualización). Para actualizar su TiddlyWiki, puede usar " +
		"otros métodos enumerados en <a href='%0' class='externalLink' target='_blank'>%0</a>",
	statusLoadingCore: "Cargando el código del núcleo",
	errorLoadingCore: "Error al cargar el código del núcleo",
	errorCoreFormat: "Error con el código del nuevo núcleo",
	statusSavingCore: "Guardando el código del nuevo núcleo",
	statusReloadingCore: "Recargando el código del nuevo núcleo",
	startLabel: "empezar",
	startPrompt: "Empezar el proceso de actualización",
	cancelLabel: "cancelar",
	cancelPrompt: "Cancelar la actualización",
	step3Title: "Actualización cancelada",
	step3Html: "Ha cancelado el proceso de actualización"
});

// Since 2.6.6, sync is not used (see e901015); left here for backwards compatibility
merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Tipo de servidor", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Servidor anfitrión", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Espacio de trabajo en el servidor", type: 'String' },
			{ name: 'Status', field: 'status', title: "Estado de la sincronización", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "URL del servidor", text: "Ver", type: 'Link' }
		],
		rowClasses: [
		],
		buttons: [
			{ caption: "Sincronizar estos tiddlers", name: 'sync' }
		]
	},
	wizardTitle: "Sincronizar con servidores y archivos externos",
	step1Title: "Elija los tiddlers que quieres sincronizar",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "sinc",
	syncPrompt: "Sincronizar estos tiddlers",
	hasChanged: "Modificado mientras estaba desconectado",
	hasNotChanged: "Sin cambios mientras estaba desconectado",
	syncStatusList: {
		none: { text: "...", display: null, className: 'notChanged' },
		changedServer: { text: "Modificado en el servidor", display: null, className: 'changedServer' },
		changedLocally: { text: "Modificado mientras estaba desconectado", display: null, className: 'changedLocally' },
		changedBoth: { text: "Modificado mientras estaba desconectado y también en el servidor", display: null, className: 'changedBoth' },
		notFound: { text: "No se encontró en el servidor", display: null, className: 'notFound' },
		putToServer: { text: "Guardada la actualización en el servidor", display: null, className: 'putToServer' },
		gotFromServer: { text: "Actualización recuperada del servidor", display: null, className: 'gotFromServer' }
	}
});

merge(config.commands.closeTiddler, {
	text: "cerrar",
	tooltip: "Cerrar este tiddler"
});

merge(config.commands.closeOthers, {
	text: "cerrar otros",
	tooltip: "Cerrar todos los otros tiddlers"
});

merge(config.commands.editTiddler, {
	text: "editar",
	tooltip: "Editar este tiddler",
	readOnlyText: "ver",
	readOnlyTooltip: "Ver el código de este tiddler"
});

merge(config.commands.saveTiddler, {
	text: "hecho",
	tooltip: "Guardar los cambios hechos en este tiddler"
});

merge(config.commands.cancelTiddler, {
	text: "cancelar",
	tooltip: "Cancelar los cambios hechos en este tiddler",
	warning: "¿Está seguro que quiere abandonar los cambios en '%0'?",
	readOnlyText: "hecho",
	readOnlyTooltip: "Vista normal de este tiddler"
});

merge(config.commands.deleteTiddler, {
	text: "borrar",
	tooltip: "Borrar este tiddler",
	warning: "¿Está seguro de que quiere borrar '%0'?"
});

merge(config.commands.permalink, {
	text: "enlacepermanente",
	tooltip: "Enlace permanente para este tiddler"
});

merge(config.commands.references, {
	text: "referencias",
	tooltip: "Mostrar tiddlers que enlazan con éste",
	popupNone: "Sin referencias"
});

merge(config.commands.jump, {
	text: "ir a",
	tooltip: "Ir a otro tiddler abierto"
});

// Since 2.6.6, sync is not used (see e901015); left here for backwards compatibility
merge(config.commands.syncing, {
	text: "sinc",
	tooltip: "Controlar la sincronización de este tiddler con un servidor o archivo externo",
	currentlySyncing: "<div>Sincronizando ahora mediante  <span class='popupHighlight'>'%0'</span> a:</div>" +
		"<div>anfitrión: <span class='popupHighlight'>%1</span></div>" +
		"<div>espacio de trabajo: <span class='popupHighlight'>%2</span></div>",
	notCurrentlySyncing: "Ahora no se está sincronizando",
	captionUnSync: "Parar la sincronización de este tiddler",
	chooseServer: "Sincronizar este tiddler con otro servidor:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  "
});

merge(config.commands.fields, {
	text: "campos",
	tooltip: "Mostrar los campos extras de este tiddler",
	emptyText: "No hay campos extras en este tiddler",
	listViewTemplate: {
		columns: [
			{ name: 'Field', field: 'field', title: "Campo", type: 'String' },
			{ name: 'Value', field: 'value', title: "Valor", type: 'String' }
		],
		rowClasses: [
		],
		buttons: [
		]
	}
});

var gettingStartedTitle = "ParaEmpezar";

merge(config.shadowTiddlers, {
	DefaultTiddlers: "[[" + gettingStartedTitle + "]]",
	MainMenu: "[[" + gettingStartedTitle + "]]\n\n\n^^~TiddlyWiki versión <<version>>",
	[gettingStartedTitle]: "Al comenzar, quizás quieras:\n" +
		"* Configurar tu nombre de usuario para atribuir tus ediciones: <<option txtUserName>>\n" +
		"* Cambiar el [[título|SiteTitle]] de la página (ahora \"<<tiddler SiteTitle>>\") y " +
			"el [[subtítulo|SiteSubtitle]] (ahora \"<<tiddler SiteSubtitle>>\"); " +
			"también configuran el título de la pestaña del navegador\n" +
		"* Crear un tiddler donde tu contenido \"comience\"\n" + 
		"** Usa el botón en la barra lateral o [[enlaza|Mi primer tiddler]] aquí, " +
			"sigue el enlace, edítalo y haz clic en \"hecho\"\n" + // config.commands.saveTiddler.text
		"** Se mostrará en la pestaña Historial (normalmente a la derecha), " + // from config.shadowTiddlers.SideBarTabs
			"pero tal vez quieras enlazarlo en el MainMenu (normalmente a la izquierda)\n" + // translate MainMenu?
		"** y/o hacer que se abra cuando ~TiddlyWiki se abra editando la lista de " +
			"[[DefaultTiddlers]] (separando los enlaces con espacios o saltos de línea)\n" +
		"* Guardar tu ~TiddlyWiki\n" +
		"** Aunque \"guardar como descarga\" funciona en cualquier navegador, no es tan conveniente, " +
			"por lo que probablemente quieras usar [[un guardador dedicado|https://classic.tiddlywiki.com/#%5B%5BSetting up saving%5D%5D]]",
	SiteTitle: "Mi TiddlyWiki",
	SiteSubtitle: "un diario web personal, reutilizable y no lineal",
	SiteUrl: "",
	OptionsPanel: "Estas opciones personales de visualización de TiddlyWiki se guardan en el navegador\n\n" +
		"Su nombre de usuario con el que firmará tus escritos. Escríbalo como si fuera una PalabraWiki (ej JuanEscribió)\n" +
		"<<option txtUserName>>\n\n<<option chkSaveBackups>> Guardar copia de seguridad\n<<option chkAutoSave>> Autoguardado\n" +
		"<<option chkRegExpSearch>> Búscar expresiones regulares\n<<option chkCaseSensitiveSearch>> Buscar distinguiendo mayúsculas\n" +
		"<<option chkAnimate>> Permitir animaciones\n\n----\nMirar también las [[OpcionesAvanzadas|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY">>' +
		'<<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "opciones \u00bb" "Cambiar las opciones avanzadas de TiddlyWiki">>',
	SideBarTabs: '<<tabs txtMainTab "Historial" "Historial" TabTimeline "Todo" "Todos los tiddlers" TabAll "Etiquetas" "Todas las etiquetas" TabTags "Más" "Más listados" TabMore>>',
	TabMore: '<<tabs txtMoreTab "Perdidos" "Tiddlers perdidos" TabMoreMissing "Huérfanos" "Tiddlers huérfanos" TabMoreOrphans "Ocultos" "Tiddlers ocultos" TabMoreShadowed>>'
});

merge(config.annotations, {
	AdvancedOptions: "Este tiddler oculto permite controlar bastantes opciones avanzadas",
	ColorPalette: "Los valores en este tiddler oculto configuran el esquema de colores de la interfaz de ~TiddlyWiki",
	DefaultTiddlers: "Los tiddlers listados en este tiddler oculto son que se mostrarán por defecto cuando se abre ~TiddlyWiki",
	EditTemplate: "La plantilla HTML en este tiddler oculto indica cómo se muestran los tiddlers mientras se editan",
	[gettingStartedTitle]: "Este tiddler oculto contiene las instrucciones básicas de utilización",
	ImportTiddlers: "Este tiddler oculto permite acceder a los tiddlers que se están importando",
	MainMenu: "Este tiddler oculto contiene los apartados que se muestran en el menú principal de la columna de la izquierda de la pantalla",
	MarkupPreHead: "Este tiddler se inserta al principio de la sección <head> del archivo HTML de TiddlyWiki",
	MarkupPostHead: "Este tiddler se inserta al final de la sección  <head> del archivo HTML de TiddlyWiki",
	MarkupPreBody: "Este tiddler se inserta al principio de la sección <body> del archivo HTML de TiddlyWiki",
	MarkupPostBody: "Este tiddler se inserta al final de la sección <body> del archivo HTML de TiddlyWiki, justo antes del bloque de script",
	OptionsPanel: "Este tiddler oculto contiene los apartados de la opción desplegable Opciones, de la barra de la derecha",
	PageTemplate: "La plantilla HTML en este tiddler oculto determina la estructura general de ~TiddlyWiki",
	PluginManager: "Este tiddler oculto permite acceder al Gestor de Complementos",
	SideBarOptions: "Este tiddler oculto contiene lo que hay en el apartado de opciones de la barra de la derecha",
	SideBarTabs: "Este tiddler oculto contiene lo que hay en el panel de pestañas de la barra de la derecha",
	SiteSubtitle: "Este tiddler oculto contiene la segunda parte del título de la página",
	SiteTitle: "Este tiddler oculto contiene la primera parte del título de la página",
	SiteUrl: "Este tiddler oculto debería contener la dirección completa URL en la que se publica",
	StyleSheetColours: "Este tiddler oculto contiene las definiciones CSS relacionadas con el color de los elementos de la página" +
		"''NO EDITE ESTE TIDDLER'', si quiere hacer alguna modificación hágalo en el tiddler oculto StyleSheet",
	StyleSheet: "En este tiddler oculto se pueden poner definiciones CSS personales",
	StyleSheetLayout: "Este tiddler oculto contiene las definiciones CSS relacionadas con la distribución de los elementos de la página. " +
		"''NO EDITE ESTE TIDDLER'', si quiere hacer alguna modificación hágalo en el tiddler oculto StyleSheet",
	StyleSheetLocale: "Este tiddler oculto contiene las definiciones CSS relacionadas con la traducción al idioma local",
	StyleSheetPrint: "Este tiddler oculto contiene las definiciones CSS relacionadas con la impresión",
	SystemSettings: "Las opciones de configuración se pueden almacenar aquí usando la notación de segmento (tal como {{{chkAutoSave: true}}} o {{{|txtUserName|El gran inventor|}}})",
	TabAll: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Todo' de la barra de la derecha",
	TabMore: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Más' de la barra de la derecha",
	TabMoreMissing: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Perdidos' de la barra de la derecha",
	TabMoreOrphans: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Huérfanos' de la barra de la derecha",
	TabMoreShadowed: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Ocultos' de la barra de la derecha",
	TabTags: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Etiquetas' de la barra de la derecha",
	TabTimeline: "Este tiddler oculto contiene todo lo que hay en la pestaña 'Historial' de la barra de la derecha",
	ToolbarCommands: "Este tiddler oculto determina los comandos que deben mostrarse en la barra de herramientas de cualquier tiddler",
	ViewTemplate: "Este tiddler oculto contiene la plantilla HTML que determina cómo se muestran los tiddlers"
});

//}}}
