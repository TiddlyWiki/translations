/***
|Name          |Tradução do TiddliWiki pt-BR|
|Description   |Translation of TiddlyWiki 2.6.0 in Brazilian Portuguese|
|Author        |Frederico José Andries Lopes (frelopes (at) gmail (dot) com)|
|CodeRepository|http://svn.tiddlywiki.org/Trunk/association/locales/core/pt-BR/locale.pt-BR.js |
|Version       |0.4.3|
|Date          |Jan 13, 2012|
|Comments      |Based on version 2.6 pt-PT by Paulo Soares|
|Licença       |[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|~CoreVersion  |2.6.0|
***/

//{{{
//--
//-- Translateable strings
//--

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "pt-BR"; // W3C language tag

if (config.options.txtUserName == "YourName")
	merge(config.options, { txtUserName: "OSeuNome" });

merge(config.tasks, {
	save: { text: "salvar", tooltip: "Salva as alterações neste TiddlyWiki", action: saveChanges },
	sync: { text: "sincronizar", tooltip: "Sincroniza alterações com outros arquivos TiddlyWiki ou servidores", content: '<<sync>>' },
	importTask: { text: "importar", tooltip: "Importa tiddlers e plugins de outros arquivos TiddlyWiki ou servidores", content: '<<importTiddlers>>' },
	tweak: { text: "configurar", tooltip: "Configura a aparência e o comportamento do TiddlyWiki", content: '<<options>>' },
	upgrade: { text: "atualizar", tooltip: "Atualiza o miolo (core) do TiddlyWiki", content: '<<upgrade>>' },
	plugins: { text: "plugins", tooltip: "Gerenciar plugins instalados", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	txtUserName: "Nome de usuário para assinar as edições",
	chkRegExpSearch: "Ativar expressões regulares na busca",
	chkCaseSensitiveSearch: "Busca sensível a maiúsculas",
	chkIncrementalSearch: "Busca incremental caracter-a-caracter",
	chkAnimate: "Ativar animações",
	chkSaveBackups: "Manter arquivo de backup ao salvar alterações",
	chkAutoSave: "Salvar alterações automaticamente",
	chkGenerateAnRssFeed: "Gerar um arquivo RSS ao salvar alterações",
	chkSaveEmptyTemplate: "Gerar um modelo vazio ao salvar alterações",
	chkOpenInNewWindow: "Abrir links externos em novas janelas",
	chkToggleLinks: "Feche o tiddler clicando em links para tiddlers abertos",
	chkHttpReadOnly: "Esconde funções de edição quando acedido por HTTP",
	chkForceMinorUpdate: "Não atualizar o nome de usuário nem a data ao editar tiddlers",
	chkConfirmDelete: "Requerer confirmação ao deletar tiddlers",
	chkInsertTabs: "Usar a tecla TAB para inserir caracteres de tabulação em vez de saltar para o próximo campo",
	txtBackupFolder: "Nome do diretório para os arquivos de backup",
	txtMaxEditRows: "Número máximo de linhas nas caixas de edição",
	txtTheme: "Nome do tema a ser usado",
	txtFileSystemCharSet: "Código de caracteres por omissão para salvar alterações (apenas em Firefox/Mozilla)" });

merge(config.messages, {
	customConfigError: "Foram encontrados alguns problemas ao carregar plugins. Veja o PluginManager para mais detalhes",
	pluginError: "Erro: %0",
	pluginDisabled: "Não executado porque foi desativado pela etiqueta 'systemConfigDisable'",
	pluginForced: "Executado porque foi forçado pela etiqueta 'systemConfigForce'",
	pluginVersionError: "Não executado porque este plugin requer uma versão mais recente do TiddlyWiki",
	nothingSelected: "Nada está selecionado. Você deve selecionar um ou mais itens primeiro",
	savedSnapshotError: "Parece que este TiddlyWiki foi salvo incorretamente. Por favor, veja http://www.tiddlywiki.com/#Download para mais detalhes",
	subtitleUnknown: "(desconhecido)",
	undefinedTiddlerToolTip: "O tiddler '%0' ainda não existe",
	shadowedTiddlerToolTip: "O tiddler '%0' ainda não existe, mas tem um modelo pré-definido",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "Ligação externa a %0",
	noTags: "Não há tiddlers com etiquetas",
	notFileUrlError: "É necessário salvar este TiddlyWiki num arquivo antes de poder salvar alterações",
	cantSaveError: "Não é possível salvar alterações. Possíveis razões incluem:\n- o seu browser não o permite (funciona sob Firefox, Internet Explorer, Safari ou Opera se esses estiverem configurados adequadamente)\n- o nome do caminho para o seu arquivo TiddlyWiki contém caracteres ilegais\n- o nome ou a localização do arquivo TiddlyWiki foram alterados",
	invalidFileError: "O arquivo original '%0' não parece ser um TiddlyWiki válido",
	backupSaved: "Arquivo de backup salvo",
	backupFailed: "Falha ao salvar o arquivo de backup",
	rssSaved: "Arquivo RSS salvo",
	rssFailed: "Falha ao salvar o arquivo RSS",
	emptySaved: "Modelo vazio salvo",
	emptyFailed: "Falha ao salvar o modelo vazio",
	mainSaved: "Arquivo principal de TiddlyWiki salvo",
	mainFailed: "Falha ao salvar o arquivo principal de TiddlyWiki. Suas alterações não foram salvas",
	macroError: "Erro na macro <<%0>>",
	macroErrorDetails: "Erro ao executar a macro <<%0>>:\n%1",
	missingMacro: "Essa macro não existe",
	overwriteWarning: "Um tiddler chamado '%0' já existe. Escolha OK para substituí-lo",
	unsavedChangesWarning: "ATENÇÃO! Há alterações no TiddlyWiki que ainda não foram salvas\n\nEscolha OK para salvar\nEscolha CANCEL para abandonar as alterações",
	confirmExit: "--------------------------------\n\nHá alterações no TiddlyWiki que ainda não foram salvas. Se você continuar, vai perder essas alterações\n\n--------------------------------",
	saveInstructions: "Salvar alterações",
	unsupportedTWFormat: "Formato TiddlyWiki não suportado '%0'",
	tiddlerSaveError: "Erro ao salvar tiddler '%0'",
	tiddlerLoadError: "Erro ao carregar tiddler '%0'",
	wrongSaveFormat: "Não é possível salvar no formato de armazenamento '%0'. Use o formato padrão para salvar.",
	invalidFieldName: "Nome de campo inválido %0",
	loadingMissingTiddler: "Tentando obter o tiddler '%0' do servidor '%1' em:\n\n'%2' no espaço de trabalho '%3'",
	upgradeDone: "A atualização para a versão %0 está completa\n\nClique 'OK' para recarregar o TiddlyWiki atualizado",
	invalidCookie: "Cookie inválido '%0'" });

merge(config.messages.messageClose, {
	text: "fechar",
	tooltip: "Fecha esta área de mensagens" });

config.messages.backstage = {
	open: { text: "bastidores", tooltip: "Abre a área de bastidores para executar tarefas de edição e administração" },
	close: { text: "fechar", tooltip: "Fecha a área de bastidores" },
	prompt: "bastidores: ",
	decal: {
		edit: { text: "editar", tooltip: "Edita o tiddler '%0'" }
	}
};

config.messages.listView = {
	tiddlerTooltip: "Clique para ver o texto completo deste tiddler",
	previewUnavailable: "(preview não disponível)"
};

config.messages.dates.months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
config.messages.dates.days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
config.messages.dates.shortMonths = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
config.messages.dates.shortDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

merge(config.messages.tiddlerPopup, {
});

merge(config.views.wikified.tag, {
	labelNoTags: "sem etiquetas",
	labelTags: "etiquetas: ",
	openTag: "Abrir etiqueta '%0'",
	tooltip: "Abrir tiddlers etiquetados com '%0'",
	openAllText: "Abrir todos",
	openAllTooltip: "Abrir todos esses tiddlers",
	popupNone: "Não há outros tiddlers etiquetados com '%0'" });

merge(config.views.wikified, {
	defaultText: "O tiddler '%0' ainda não existe. Dê um duplo clique para criá-lo",
	defaultModifier: "(em falta)",
	shadowModifier: "(tiddler modelo pré-definido)",
	dateFormat: "DD MMM YYYY",
	createdPrompt: "criado em" });

merge(config.views.editor, {
	tagPrompt: "Escreva as etiquetas separadas por espaços, [[use colchetes duplos]] se necessário, ou atribua existentes",
	defaultText: "Escreva o texto para '%0'" });

merge(config.views.editor.tagChooser, {
	text: "etiquetas",
	tooltip: "Escolha entre as etiquetas existentes para atribuir a este tiddler",
	popupNone: "Não há etiquetas definidas",
	tagTooltip: "Atribuir a etiqueta '%0'" });

merge(config.messages, {
	sizeTemplates:
		[
			{ unit: 1024 * 1024 * 1024, template: "%0\u00a0GB" },
			{ unit: 1024 * 1024, template: "%0\u00a0MB" },
			{ unit: 1024, template: "%0\u00a0KB" },
			{ unit: 1, template: "%0\u00a0B" }
		] });

merge(config.macros.search, {
	label: "buscar",
	prompt: "Busca neste TiddlyWiki",
	accessKey: "F",
	successMsg: "%0 tiddlers encontrados que contêm %1",
	failureMsg: "Não foi encontrado nenhum tiddler que contenha %0" });

merge(config.macros.tagging, {
	label: "etiquetando:",
	labelNotTag: "não etiquetando",
	tooltip: "Lista de tiddlers etiquetados com '%0'" });

merge(config.macros.timeline, {
	dateFormat: "DD MMM YYYY" });

merge(config.macros.allTags, {
	tooltip: "Mostra tiddlers com a etiqueta '%0'",
	noTags: "Não há tiddlers etiquetados" });

config.macros.list.all.prompt = "Todos os tiddlers em ordem alfabética";
config.macros.list.missing.prompt = "Tiddlers com links para eles, mas que não existem";
config.macros.list.orphans.prompt = "Tiddlers sem links de outros tiddlers";
config.macros.list.shadowed.prompt = "Tiddlers no modelo com conteúdo pré-definido";
config.macros.list.touched.prompt = "Tiddlers que foram modificados localmente";

merge(config.macros.closeAll, {
	label: "fechar todos",
	prompt: "Fecha todos os tiddlers abertos (exceto os que estão sendo editados)" });

merge(config.macros.permaview, {
	label: "permavista",
	prompt: "Link a uma URL que mostra todos os tiddlers abertos" });

merge(config.macros.saveChanges, {
	label: "salvar alterações",
	prompt: "Salva todas as alterações em arquivo",
	accessKey: "S" });

merge(config.macros.newTiddler, {
	label: "novo tiddler",
	prompt: "Cria um novo tiddler",
	title: "Novo tiddler",
	accessKey: "N" });

merge(config.macros.newJournal, {
	label: "novo diário",
	prompt: "Cria um novo tiddler com a data e hora atuais",
	accessKey: "J" });

merge(config.macros.options, {
	wizardTitle: "Configurar opções avançadas",
	step1Title: "Estas opções são salvas em cookies no seu browser",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>Mostra opções desconhecidas</input>",
	unknownDescription: "//(desconhecido)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Opção", type: 'String' },
			{ name: 'Description', field: 'description', title: "Descrição", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Nome", type: 'String' }
		],
		rowClasses: [
			{ className: 'lowlight', field: 'lowlight' }
		] }
});

merge(config.macros.plugins, {
	wizardTitle: "Gerenciar plugins",
	step1Title: "Plugins carregados",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(Este plugin não foi executado porque foi incluido depois da inicialização)",
	noPluginText: "Não há plugins instalados",
	confirmDeleteText: "Você tem certeza que quer deletar esses plugins:\n\n%0",
	removeLabel: "remover a etiqueta systemConfig",
	removePrompt: "Remove a etiqueta systemConfig",
	deleteLabel: "deletar",
	deletePrompt: "Elimina esses tiddlers para sempre",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Descrição", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Versão", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Tamanho", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Forçado", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Desativado", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Carregado", type: 'Boolean', trueText: "Sim", falseText: "Não" },
			{ name: 'Startup Time', field: 'startupTime', title: "Tempo de arranque", type: 'String' },
			{ name: 'Error', field: 'error', title: "Estado", type: 'Boolean', trueText: "Erro", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Registro", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		] },
	listViewTemplateReadOnly: {
		columns: [
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Descrição", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Versão", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Tamanho", type: 'Size' },
			{ name: 'Executed', field: 'executed', title: "Carregado", type: 'Boolean', trueText: "Sim", falseText: "Não" },
			{ name: 'Startup Time', field: 'startupTime', title: "Tempo de inicialização", type: 'String' },
			{ name: 'Error', field: 'error', title: "Estado", type: 'Boolean', trueText: "Erro", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Registro", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		] }
});

merge(config.macros.toolbar, {
	moreLabel: "mais",
	morePrompt: "Mostra comandos adicionais",
	lessLabel: "menos",
	lessPrompt: "Esconde comandos adicionais",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "refresca",
	prompt: "Refresca a apresentação de todo o TiddlyWiki"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "Não pode importar para um arquivo TiddlyWiki só de leitura. Tente abrir a partir de um URL do tipo file://",
	wizardTitle: "Importar tiddlers de outro arquivo TiddlyWiki ou servidor",
	step1Title: "Passo 1: Localize o servidor ou o arquivo TiddlyWiki",
	step1Html: "Especifique o tipo de servidor: <select name='selTypes'><option value=''>Escolha...</option></select><br>Escreva o URL ou o caminho aqui: <input type='text' size=50 name='txtPath'><br>...ou procure um arquivo: <input type='file' size=50 name='txtBrowse'><br><hr>...ou selecione uma localização pré-definida: <select name='selFeeds'><option value=''>Escolha...</option></select>",
	openLabel: "abrir",
	openPrompt: "Abre a ligação a este arquivo ou servidor",
	statusOpenHost: "Abrindo o anfitrião",
	statusGetWorkspaceList: "Obtendo a lista de espaços de trabalho disponíveis",
	step2Title: "Passo 2: Escolha o espaço de trabalho",
	step2Html: "Escreva o nome de um espaço de trabalho: <input type='text' size=50 name='txtWorkspace'><br>...or selecione um espaço de trabalho: <select name='selWorkspace'><option value=''>Escolha...</option></select>",
	cancelLabel: "cancelar",
	cancelPrompt: "Cancela esta importação",
	statusOpenWorkspace: "Abrindo o espaço de trabalho",
	statusGetTiddlerList: "Obtendo a lista de tiddlers disponíveis",
	errorGettingTiddlerList: "Erro ao transferir a lista de tiddlers. Clique em Cancelar para tentar novamente",
	step3Title: "Passo 3: Escolha os tiddlers para importar",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>Manter esses tiddlers ligados a este servidor para poder sincronizar mudanças subsequentes</input><br><input type='checkbox' name='chkSave'>salvar os detalhes deste servidor num tiddler 'systemServer' chamado:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "importar",
	importPrompt: "Importa os tiddlers",
	confirmOverwriteText: "Tem a certeza que quer substituir esses tiddlers:\n\n%0",
	step4Title: "Passo 4: Importando %0 tiddler(s)",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "fechar",
	donePrompt: "Fecha este assistente",
	statusDoingImport: "Importando tiddlers",
	statusDoneImport: "Todos os tiddlers importados",
	systemServerNamePattern: "%2 de %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "O tiddler '%0' já existe. Clique 'OK' para o substituir pelos detalhes deste servidor, ou 'Cancel' para manter sem alterações",
	serverSaveTemplate: "|''Tipo:''|%0|\n|''URL:''|%1|\n|''Espaço de trabalho:''|%2|\n\nEste tiddler foi criado automaticamente para registrar os detalhes deste servidor",
	serverSaveModifier: "(Sistema)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Tamanho", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Etiquetas", type: 'Tags' }
		],
		rowClasses: [
		] }
});

merge(config.macros.upgrade, {
	wizardTitle: "Atualização do miolo (core) do TiddlyWiki",
	step1Title: "Atualize ou repare este TiddlyWiki para a versão mais recente",
	step1Html: "Vai proceder com a atualização para o miolo (core) do TiddlyWiki mais recente (a partir de <a href='%0' class='externalLink' target='_blank'>%1</a>). O seu conteúdo será preservado pela atualização.<br><br>Note que as atualizações do miolo (core) podem interferir com plugins antigos. Se tiver problemas com o arquivo atualizado, veja <a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "Não é possível atualizar este TiddlyWiki.  Só são possíveis as atualizações de arquivos TiddlyWiki salvos localmente",
	errorNotSaved: "É necessário salvar as modificações antes de atualizar",
	step2Title: "Confirme os detalhes da atualização",
	step2Html_downgrade: "Vai regredir para a versão %0 do TiddlyWiki a partir da versão %1.<br><br>Regredir para uma versão anterior do miolo (core) não é recomendado",
	step2Html_restore: "Parece que este TiddlyWiki já usa a última versão do miolo (core) (%0).<br><br>Você pode continuar a atualização para garantir que o miolo (core) não foi corrompido ou danificado",
	step2Html_upgrade: "Vai atualizar o TiddlyWiki da versão %1 para a versão %0",
	upgradeLabel: "atualizar",
	upgradePrompt: "Prepare-se para o processo de atualização",
	statusPreparingBackup: "Preparando cópia de segurança",
	statusSavingBackup: "Salvando cópia de segurança",
	errorSavingBackup: "Ocorreu um problema ao salvar a cópia de segurança",
	statusLoadingCore: "Transferindo o miolo (core)",
	errorLoadingCore: "Erro ao transferir o miolo (core)",
	errorCoreFormat: "Erro com o novo miolo (core)",
	statusSavingCore: "Salvando o novo miolo (core)",
	statusReloadingCore: "Recarregando o novo miolo (core)",
	startLabel: "iniciar",
	startPrompt: "Inicie a atualização",
	cancelLabel: "cancelar",
	cancelPrompt: "Cancele a atualização",
	step3Title: "atualização cancelada",
	step3Html: "A atualização foi cancelada"
});

merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Tipo de servidor", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Anfitrião do servidor", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Espaço de trabalho do servidor", type: 'String' },
			{ name: 'Status', field: 'status', title: "Estado da sincronização", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "URL do servidor", text: "Ver", type: 'Link' }
		],
		rowClasses: [
		],
		buttons: [
			{ caption: "Sincroniza este tiddlers", name: 'sync' }
		] },
	wizardTitle: "Sincronizar com arquivos ou servidores externos",
	step1Title: "Escolha os tiddlers que quer sincronizar",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "sincronizar",
	syncPrompt: "Sincroniza este tiddlers",
	hasChanged: "Alterado enquanto desligado",
	hasNotChanged: "Sem alterações enquanto desligado",
	syncStatusList: {
		none: { text: "...", display: 'none', className: 'notChanged' },
		changedServer: { text: "Alterado no servidor", display: null, className: 'changedServer' },
		changedLocally: { text: "Alterado enquanto desligado", display: null, className: 'changedLocally' },
		changedBoth: { text: "Alterado enquanto desligado e no servidor",  display: null, className: 'changedBoth' },
		notFound: { text: "Não encontrado no servidor", display: null, className: 'notFound' },
		putToServer: { text: "Atualizado no servidor", display: null, className: 'putToServer' },
		gotFromServer: { text: "Obtida atualização do servidor", display: null, className: 'gotFromServer' }
	}
});

merge(config.macros.annotations, {
});

merge(config.commands.closeTiddler, {
	text: "fechar",
	tooltip: "Fecha este tiddler" });

merge(config.commands.closeOthers, {
	text: "isolar",
	tooltip: "Fecha todos os outros tiddlers" });

merge(config.commands.editTiddler, {
	text: "editar",
	tooltip: "Edita este tiddler",
	readOnlyText: "ver",
	readOnlyTooltip: "Ver o conteúdo deste tiddler" });

merge(config.commands.saveTiddler, {
	text: "salvar",
	tooltip: "Salva as alterações neste tiddler" });

merge(config.commands.cancelTiddler, {
	text: "cancelar",
	tooltip: "Cancela as alterações neste tiddler",
	warning: "Tem certeza que quer cancelar as alterações a '%0'?",
	readOnlyText: "voltar",
	readOnlyTooltip: "Ver este tiddler normalmente" });

merge(config.commands.deleteTiddler, {
	text: "deletar",
	tooltip: "Deleta este tiddler",
	warning: "Você tem certeza que quer deletar '%0'?" });

merge(config.commands.permalink, {
	text: "permaligação",
	tooltip: "Permaligação para este tiddler" });

merge(config.commands.references, {
	text: "referências",
	tooltip: "Mostra tiddlers que ligam a este",
	popupNone: "Sem referências" });

merge(config.commands.jump, {
	text: "saltar",
	tooltip: "Salta para outro tiddler aberto" });

merge(config.commands.syncing, {
	text: "sinc",
	tooltip: "Controla sincronização deste tiddler com um servidor ou arquivo externo",
	currentlySyncing: "<div>Sincronizando via <span class='popupHighlight'>'%0'</span> para:</" + "div><div>anfitrião: <span class='popupHighlight'>%1</span></" + "div><div>espaço de trabalho: <span class='popupHighlight'>%2</span></" + "div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "Sem sincronização",
	captionUnSync: "Parar sincronização deste tiddler",
	chooseServer: "Sincronizar este tiddler com outro servidor:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  " });

merge(config.commands.fields, {
	text: "campos",
	tooltip: "Mostra os campos estendidos deste tiddler",
	emptyText: "Este tiddler não tem campos estendidos",
	listViewTemplate: {
		columns: [
			{ name: 'Field', field: 'field', title: "Campo", type: 'String' },
			{ name: 'Value', field: 'value', title: "Valor", type: 'String' }
		],
		rowClasses: [
		],
		buttons: [
		] } });

merge(config.shadowTiddlers, {
	DefaultTiddlers: "[[ComoIniciar]]",
	MainMenu: "[[ComoIniciar]]",
	ComoIniciar: "Para começar a usar este TiddlyWiki vazio, você terá que modificar os seguintes tiddlers:\n* SiteTitle & SiteSubtitle: O título e o subtítulo do site, como pode ver acima (depois de salvar as alterações, eles aparecerão também na barra de título do browser)\n* MainMenu: O menu (usualmente à direita)\n* DefaultTiddlers: Contém o nome dos tiddlers que você pretende que apareçam quando o TiddlyWiki é aberto\nSerá também necessário inserir o nome de usuário que servirá para assinar as edições: <<option txtUserName>>",
	SiteTitle: "O meu TiddlyWiki",
	SiteSubtitle: "um bloco de notas reutilizável e não-linear na web",
	SiteUrl: "",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "opções \u00bb" "Muda as opções avançadas do TiddlyWiki">>',
	OptionsPanel: "Estas opções de personalização do TiddlyWiki ficam salvas no seu browser\n\nO seu nome de usuário para assinar os textos. Use uma PalavraWiki (eg, JoséSilva)\n\n<<option txtUserName>>\n<<option chkSaveBackups>> salvarbackups\n<<option chkAutoSave>> Autosalvar\n<<option chkRegExpSearch>> buscaExpReg\n<<option chkCaseSensitiveSearch>> buscaSensívMaiúsc\n<<option chkAnimate>> AtivarAnimações\n\n----\nVeja as [[OpçõesAvançadas|AdvancedOptions]]",
	SideBarTabs: '<<tabs txtMainTab "Data" "Tiddlers por ordem cronológica" TabTimeline "Título" "Tiddlers por ordem alfabética" TabAll "Etiquetas" "Todas as etiquetas" TabTags "Mais" "Mais listas" TabMore>>',
	TabMore: '<<tabs txtMoreTab "Em falta" "Tiddlers em falta" TabMoreMissing "Órfãos" "Tiddlers sem links de outros tiddlers" TabMoreOrphans "Modelo" "Tiddlers no modelo" TabMoreShadowed>>',
	ToolbarCommands: "|~ViewToolbar|closeTiddler closeOthers +editTiddler > fields syncing permalink references jump|\n|~EditToolbar|+saveTiddler -cancelTiddler deleteTiddler|" });

merge(config.annotations, {
	AdvancedOptions: "Este tiddler modelo dá acesso a várias opções avançadas",
	ColorPalette: "Esses valores neste tiddler modelo determinam o esquema de cores da interface de usuário do ~TiddlyWiki",
	DefaultTiddlers: "Os tiddlers listados neste tiddler modelo serão automaticamente abertos na inicialização do ~TiddlyWiki",
	EditTemplate: "O modelo em HTML neste tiddler modelo determina o aspecto dos tiddlers enquanto são editados",
	ComoIniciar: "Este tiddler modelo fornece algumas instruções básicas de utilização",
	ImportTiddlers: "Este tiddler modelo dá acesso à importação de tiddlers",
	MainMenu: "Este tiddler modelo é usado como conteúdo do menu principal na coluna da esquerda do ecran",
	MarkupPreHead: "Este tiddler é inserido no topo da seção <head> do arquivo TiddlyWiki",
	MarkupPostHead: "Este tiddler é inserido no fundo da seção <head> do arquivo TiddlyWiki",
	MarkupPreBody: "Este tiddler é inserido no topo da seção <body> do arquivo TiddlyWiki",
	MarkupPostBody: "Este tiddler é inserido no fim da seção <head> do arquivo TiddlyWiki immediatamente após o bloco <script>",
	OptionsPanel: "Este tiddler modelo é usado como conteúdo do painel deslizante de opções na barra lateral da direita",
	PageTemplate: "O modelo em HTML neste tiddler modelo determina o aspecto geral do ~TiddlyWiki",
	PluginManager: "Este tiddler modelo dá acesso ao gestor de plugins",
	SideBarOptions: "Este tiddler modelo é usado como conteúdo do painel de opções na barra lateral da direita",
	SideBarTabs: "Este tiddler modelo é usado como conteúdo do painel de abas na barra lateral da direita",
	SiteSubtitle: "Este tiddler modelo é usado como a segunda parte do título da página",
	SiteTitle: "Este tiddler modelo é usado como a primeira parte do título da página",
	SiteUrl: "Este tiddler modelo deve conter o URL completo para publicação",
	StyleSheetColors: "Este tiddler modelo contém definições CSS relacionadas com a cor dos elementos da página. ''NÃO EDITE ESTE TIDDLER'', em vez disso faça as suas alterações no tiddler modelo StyleSheet",
	StyleSheet: "Este tiddler pode conter definições CSS do usuário",
	StyleSheetLayout: "Este tiddler modelo contém definições CSS relacionadas com a disposição dos elementos da página. ''NÃO EDITE ESTE TIDDLER'', em vez disso faça as suas alterações no tiddler modelo StyleSheet",
	StyleSheetLocale: "Este tiddler modelo contém definições CSS relacionadas com traduções",
	StyleSheetPrint: "Este tiddler modelo contém definições CSS relacionadas com a impressão",
	SystemSettings: "Este tiddler é usado para salvar opções de configuração deste documento ~TiddlyWiki",
	TabAll: "Este tiddler modelo define o conteúdo da aba 'Título' na barra lateral da direita",
	TabMore: "Este tiddler modelo define o conteúdo da aba 'Mais' na barra lateral da direita",
	TabMoreMissing: "Este tiddler modelo define o conteúdo da aba 'Em falta' na barra lateral da direita",
	TabMoreOrphans: "Este tiddler modelo define o conteúdo da aba 'Órfãos' na barra lateral da direita",
	TabMoreShadowed: "Este tiddler modelo define o conteúdo da aba 'Modelo' na barra lateral da direita",
	TabTags: "Este tiddler modelo define o conteúdo da aba 'Etiquetas' na barra lateral da direita",
	TabTimeline: "Este tiddler modelo define o conteúdo da aba 'Data' na barra lateral da direita",
	ToolbarCommands: "Este tiddler modelo determina quais os comandos que aparecem na barra de ferramentas dos tiddlers",
	ViewTemplate: "O modelo em HTML neste tiddler modelo determina o aspecto dos tiddlers"
});

delete config.shadowTiddlers.GettingStarted;
//}}}