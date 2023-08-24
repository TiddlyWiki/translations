/***
|''Name:''|JapaneseTranslationPlugin |
|''Description:''|Translation of TiddlyWiki into Japanese |
|''Author:''|OGOSHI Masayuki &lt;ogoshima@gmail.com&gt; |
|''Source:''|http://ogoshi.tiddlyspot.com/#JapaneseTranslationPlugin |
|''Version:''|0.4.1-ja|
|''Date:''|Apr 29, 2010|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.1 Japan |http://creativecommons.org/licenses/by-sa/2.1/jp/]] |
|''~CoreVersion:''|2.6.0|

TiddlyWiki を日本語化するプラグイン。TiddlyWiki Version 2.6 上で動作を確認しました。
ライセンスは英語版のCCライセンスに準じる日本語版の CC-by-SA 2.1 ライセンスとします。

オリジナルとなる英語版のクレジットは以下のとおり。
|''Name:''|EnglishTranslationPlugin|
|''Description:''|Translation of TiddlyWiki into English|
|''Author:''|MartinBudden (mjbudden (at) gmail (dot) com)|
|''CodeRepository:''|http://svn.tiddlywiki.org/Trunk/association/locales/core/en/locale.en.js |
|''Version:''|0.4.1|
|''Date:''|Mar 10, 2010|
|''Comments:''|Please make comments at http://groups.google.co.uk/group/TiddlyWikiDev |
|''License:''|[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|''~CoreVersion:''|2.6.0|
***/

//{{{
//--
//-- Translateable strings
//--

// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "ja"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options,{txtUserName: "氏名"});

merge(config.tasks,{
	save: {text: "保存", tooltip: "このTiddlyWikiを保存します", action: saveChanges},
	sync: {text: "同期", tooltip: "他のTiddlyWikiファイルやサーバと同期をとります", content: '<<sync>>'},
	importTask: {text: "取り込み", tooltip: "他のTiddlyWikiファイルやサーバからtiddlerやプラグインを取り込みます", content: '<<importTiddlers>>'},
	tweak: {text: "詳細設定", tooltip: "TiddlyWikiの細かな振る舞いを設定します", content: '<<options>>'},
	upgrade: {text: "アップグレード", tooltip: "TiddlyWiki本体をバージョンアップします", content: '<<upgrade>>'},
	plugins: {text: "プラグイン", tooltip: "インストール済みのプラグインを管理します", content: '<<plugins>>'}
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc,{
	txtUserName: "編集したtiddlerに記録されるユーザ名",
	chkRegExpSearch: "検索に正規表現を使います",
	chkCaseSensitiveSearch: "検索で大文字小文字を区別します",
	chkIncrementalSearch: "インクリメンタルサーチを行います",
	chkAnimate: "アニメーションを許可します",
	chkSaveBackups: "保存時にバックアップファイルを残します",
	chkAutoSave: "自動保存します",
	chkGenerateAnRssFeed: "保存時にRSSフィードを生成します",
	chkSaveEmptyTemplate: "空のテンプレートファイルを保存時に生成します",
	chkOpenInNewWindow: "外部へのリンクを新しいウィンドウで開きます",
	chkToggleLinks: "tiddlerへのリンククリックでtiddlerを閉じます",
	chkHttpReadOnly: "HTTP経由で開いているときに編集機能を隠します",
	chkForceMinorUpdate: "更新時にユーザ名と日付を変更しません",
	chkConfirmDelete: "tiddlerを消去する時に確認をします",
	chkInsertTabs: "タブキーを押したとき、フィールド間の移動ではなくタブ文字を挿入します",
	txtBackupFolder: "バックアップ用フォルダの名前",
	txtMaxEditRows: "編集領域の最大行数",
	txtTheme: "使用するテーマ名",
	txtFileSystemCharSet: "保存時のデフォルト文字コード(Firefox/Mozillaのみ)"});

merge(config.messages,{
	customConfigError: "プラグインの読み込み時に問題が発生しました。詳細は PluginManager をご覧ください",
	pluginError: "エラー: %0",
	pluginDisabled: "'systemConfigDisable'タグによって実行が禁止されています",
	pluginForced: "'systemConfigForce'タグによって強制実行されました",
	pluginVersionError: "このプラグインの実行には、新しいバージョンの TiddlyWiki が必要です。",
	nothingSelected: "何も選択されていません。一つ以上選択する必要があります。",
	savedSnapshotError: "この~TiddlyWikiは正常に保存されていません。詳細は http://www.tiddlywiki.com/#DownloadSoftware をご覧ください。",
	subtitleUnknown: "(unknown)",
	undefinedTiddlerToolTip: "この tiddler '%0' はまだ作成されていません",
	shadowedTiddlerToolTip: "この tiddler '%0' はまだ作成されていませんが、隠された規定値があります",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "(外部へのリンク) %0",
	noTags: "タグの付いた tiddler はありません",
	notFileUrlError: "変更を保存するにはこの~TiddlyWikiをファイルとして保存(ダウンロード)する必要があります",
	cantSaveError: "変更を保存できませんでした。以下の理由が考えられます:\n- 使用しているブラウザが保存に対応していない(Firefox/Internet Explorer/Safari/Operaは、正しく設定していれば保存できます)\n- TiddlyWikiファイルの保存path名に不正な文字が含まれている\n- TiddlyWiki HTMLファイルが移動または名前を変更された",
	invalidFileError: "元のファイル '%0' は正しい~TiddlyWikiファイルではありません",
	backupSaved: "バックアップを保存しました",
	backupFailed: "バックアップの保存に失敗しました",
	rssSaved: "RSSフィードを保存しました",
	rssFailed: "RSSフィードの保存に失敗しました",
	emptySaved: "空のテンプレートファイルを保存しました",
	emptyFailed: "空のテンプレートファイルの保存に失敗しました",
	mainSaved: "TiddlyWikiファイルを保存しました",
	mainFailed: "TiddlyWikiファイルの保存に失敗しました。変更した内容は保存されていません",
	macroError: "次のマクロでエラー発生 <<\%0>>",
	macroErrorDetails: "次のマクロを実行中にエラー発生 <<\%0>>:\n%1",
	missingMacro: "マクロがありません",
	overwriteWarning: "'%0'という名前のtiddlerはすでに存在します。OKで上書きします",
	unsavedChangesWarning: "注意! TiddlyWiki の変更が保存されていません。\n\n'OK'で保存\n'キャンセル'で変更を破棄",
	confirmExit: "--------------------------------\n\nTiddlyWikiの変更が保存されていません。このまま続けると変更が失われます\n\n--------------------------------",
	saveInstructions: "変更を保存",
	unsupportedTWFormat: "次の TiddlyWiki フォーマットには対応していません '%0'",
	tiddlerSaveError: "tiddler '%0' を保存時にエラー発生",
	tiddlerLoadError: "tiddler '%0' の読込時にエラー発生",
	wrongSaveFormat: "保存フォーマット '%0' で保存できません。標準フォーマットで保存します",
	invalidFieldName: "%0 は不正なファイル名です",
	fieldCannotBeChanged: "領域 '%0' は変更できません",
	loadingMissingTiddler: "tiddler '%0' の '%1' サーバーからの回復を試しています:\n\nワークスペース '%3' の中の '%2'",
	upgradeDone: "バージョン %0 へのアップグレードが完了しました。\n'OK' をクリックすると新しくなったTiddlyWikiをリロードします。"});

merge(config.messages.messageClose,{
	text: "閉じる",
	tooltip: "このメッセージを閉じます"});

config.messages.backstage = {
	open: {text: "クイックメニュー", tooltip: "クイックメニューを開きます"},
	close: {text: "閉じる", tooltip: "クイックメニューを閉じます"},
	prompt: "クイックメニュー: ",
	decal: {
		edit: {text: "編集", tooltip: "tiddler '%0' を編集します"}
	}
};

config.messages.listView = {
	tiddlerTooltip: "このtiddlerのテキスト全体を表示します",
	previewUnavailable: "(プレビューがありません)"
};

config.messages.dates.months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月","12月"];
config.messages.dates.days = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
config.messages.dates.shortMonths = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
config.messages.dates.shortDays = ["日", "月", "火", "水", "木", "金", "土"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = ["日","日","日","日","日","日","日","日","日","日",
		"日","日","日","日","日","日","日","日","日","日",
		"日","日","日","日","日","日","日","日","日","日",
		"日"];
config.messages.dates.am = "am";
config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup,{
	});

merge(config.views.wikified.tag,{
	labelNoTags: "タグ無し",
	labelTags: "タグ: ",
	openTag: "'%0' タグを開く",
	tooltip: "'%0' タグの付いたtiddlerを表示",
	openAllText: "全て開く",
	openAllTooltip: "以下のtiddlerを全て開く",
	popupNone: "'%0' タグの付いたtiddlerは他にありません"});

merge(config.views.wikified,{
	defaultText: "tiddler '%0' はまだ作成されていません。ダブルクリックで作成できます",
	defaultModifier: "(missing)",
	shadowModifier: "(built-in shadow tiddler)",
	dateFormat: "YYYY.MM.DD", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "作成"});

merge(config.views.editor,{
	tagPrompt: "スペース区切りでタグを入力。スペースを含める場合は[[二重の角括弧]]で囲みます。既存のタグを選択≫",
	defaultText: "'%0' の内容を入力してください"});

merge(config.views.editor.tagChooser,{
	text: "タグ",
	tooltip: "既存のタグを選択して追加します",
	popupNone: "タグが定義されていません",
	tagTooltip: "'%0' タグを追加します"});

merge(config.messages,{
	sizeTemplates:
		[
		{unit: 1024*1024*1024, template: "%0\u00a0GB"},
		{unit: 1024*1024, template: "%0\u00a0MB"},
		{unit: 1024, template: "%0\u00a0KB"},
		{unit: 1, template: "%0\u00a0B"}
		]});

merge(config.macros.search,{
	label: "検索",
	prompt: "この TiddlyWiki 内を検索します",
	accessKey: "F",
	successMsg: "%0 件のtiddlerで %1 が見つかりました",
	failureMsg: "%0 は見つかりませんでした"});

merge(config.macros.tagging,{
	label: "タグあり: ",
	labelNotTag: "タグなし",
	tooltip: "'%0' タグを付けたtiddlerリスト"});

merge(config.macros.timeline,{
	dateFormat: "YYYY年MM月DD日"});// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D

merge(config.macros.allTags,{
	tooltip: "'%0' タグの付いたtiddlerを表示",
	noTags: "タグの付いたtiddlerがありません"});

config.macros.list.all.prompt = "アルファベット順 全tiddler";
config.macros.list.missing.prompt = "リンクがあるのに存在しないtiddler";
config.macros.list.orphans.prompt = "どこからもリンクされていないtiddler";
config.macros.list.shadowed.prompt = "規定で隠されているtiddler";
config.macros.list.touched.prompt = "ローカルに変更されているtiddler";

merge(config.macros.closeAll,{
	label: "全て閉じる",
	prompt: "表示されている全てのtiddlerを閉じます (編集中を除く)"});

merge(config.macros.permaview,{
	label: "現況リンク",
	prompt: "現在のtiddler表示状態を再現するURLをアドレス欄に生成します"});

merge(config.macros.saveChanges,{
	label: "保存",
	prompt: "全てのtiddlerを保存します",
	accessKey: "S"});

merge(config.macros.newTiddler,{
	label: "新規作成",
	prompt: "新しいtiddlerを作成します",
	title: "新規作成",
	accessKey: "N"});

merge(config.macros.newJournal,{
	label: "新規ジャーナル",
	prompt: "現在日時がタイトルの新しいtiddlerを作成します",
	accessKey: "J"});

merge(config.macros.options,{
	wizardTitle: "詳細設定",
	step1Title: "これらのオプション設定はブラウザのcookieに保存されます",
	step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>未知のオプションを表示</input>",
	unknownDescription: "//(未知)//",
	listViewTemplate: {
		columns: [
			{name: 'Option', field: 'option', title: "オプション設定", type: 'String'},
			{name: 'Description', field: 'description', title: "説明", type: 'WikiText'},
			{name: 'Name', field: 'name', title: "オプション名", type: 'String'}
			],
		rowClasses: [
			{className: 'lowlight', field: 'lowlight'}
			]}
	});

merge(config.macros.plugins,{
	wizardTitle: "プラグイン管理",
	step1Title: "ロードされているプラグイン",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(このプラグインは起動後に追加されたので実行されていません)",
	noPluginText: "プラグインはインストールされていません",
	confirmDeleteText: "本当にこのプラグインを削除して良いですか?:\n\n%0",
	removeLabel: "systemConfig タグを除去",
	removePrompt: "systemConfig タグを除去します",
	deleteLabel: "削除",
	deletePrompt: "これらのtiddlerを削除します",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Description', field: 'Description', title: "説明", type: 'String'},
			{name: 'Version', field: 'Version', title: "バージョン", type: 'String'},
			{name: 'Size', field: 'size', tiddlerLink: 'size', title: "サイズ", type: 'Size'},
			{name: 'Forced', field: 'forced', title: "強制実行", tag: 'systemConfigForce', type: 'TagCheckbox'},
			{name: 'Disabled', field: 'disabled', title: "無効化", tag: 'systemConfigDisable', type: 'TagCheckbox'},
			{name: 'Executed', field: 'executed', title: "ロード済み", type: 'Boolean', trueText: "Yes", falseText: "No"},
			{name: 'Startup Time', field: 'startupTime', title: "起動時実行", type: 'String'},
			{name: 'Error', field: 'error', title: "ステータス", type: 'Boolean', trueText: "Error", falseText: "OK"},
			{name: 'Log', field: 'log', title: "ログ", type: 'StringList'}
			],
		rowClasses: [
			{className: 'error', field: 'error'},
			{className: 'warning', field: 'warning'}
			]}
	});

merge(config.macros.toolbar,{
	moreLabel: "その他",
	morePrompt: "その他のコマンドも表示します",
	lessLabel: "隠す",
	lessPrompt: "その他のコマンドを隠します",
	separator: "|"
	});

merge(config.macros.refreshDisplay,{
	label: "再表示",
	prompt: "TiddlyWiki全体を再描画します"
	});

merge(config.macros.importTiddlers,{
	readOnlyWarning: "読込専用のTiddlyWikiには取り込めません。TiddlyWikiファイルを file:// 形式のURLで開いてみてください",
	wizardTitle: "他のファイルあるいはサーバーからtiddlerを取り込む",
	step1Title: "手順 1: TiddlyWikiファイルあるいはサーバーの位置を指定します",
	step1Html: "種別指定: <select name='selTypes'><option value=''>選択...</option></select><br>URLまたはパス名を入力: <input type='text' size=50 name='txtPath'><br>またはファイルを選択: <input type='file' size=50 name='txtBrowse'><br><hr>または既定のフィードを選択: <select name='selFeeds'><option value=''>選択...</option></select>",
	openLabel: "開く",
	openPrompt: "このファイルあるいはサーバーへ接続する",
	openError: "TiddlyWikiファイルを取り込む際に問題が発生しました",
	statusOpenHost: "ホストをオープン中",
	statusGetWorkspaceList: "有効なワークスペースのリストを取得中",
	step2Title: "手順 2: ワークスペースの選択",
	step2Html: "ワークスペース名を入力: <input type='text' size=50 name='txtWorkspace'><br>またはワークスペースを選択: <select name='selWorkspace'><option value=''>選択...</option></select>",
	cancelLabel: "キャンセル",
	cancelPrompt: "この取り込みをキャンセルする",
	statusOpenWorkspace: "ワークスペースをオープン中",
	statusGetTiddlerList: "有効なtiddlerのリストを取得中",
	errorGettingTiddlerList: "tiddlerのリストを取得中にエラーが発生しました。'キャンセル'でやり直します。",
	step3Title: "手順 3: 取り込むtiddlerの選択",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>変更を同期できるよう、各tiddlerにこのサーバー（ファイル）へのリンクを保持する</input><br><input type='checkbox' name='chkSave'>'systemServer' タグを付けたtiddlerにこのサーバーの詳細を保存する:</input> <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "取込",
	importPrompt: "これらのtiddlerを取り込む",
	confirmOverwriteText: "本当にこれらのtiddlerを上書きして良いですか? :\n\n%0",
	step4Title: "手順 4: tiddler %0 を取り込み",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "完了",
	donePrompt: "ウィザードを閉じる",
	statusDoingImport: "tidderlを取り込み中",
	statusDoneImport: "全てのtiddlerを取り込みました",
	systemServerNamePattern: "%1 / %2",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "'%0' というtiddlerは既に存在します。'OK'で上書きします。'キャンセル'で変更しません。",
	serverSaveTemplate: "|''種別:''|%0|\n|''URL:''|%1|\n|''ワークスペース:''|%2|\n\nこのtiddlerはこのサーバーの詳細情報を記録するために自動的に作成されました",
	serverSaveModifier: "(System)",
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Size', field: 'size', tiddlerLink: 'size', title: "サイズ", type: 'Size'},
			{name: 'Tags', field: 'tags', title: "タグ", type: 'Tags'}
			],
		rowClasses: [
			]}
	});

merge(config.macros.upgrade,{
	wizardTitle: "TiddlyWiki本体のアップグレード",
	step1Title: "このTiddlyWikiを最新版へ更新（あるいは修復）",
	step1Html: "TiddlyWiki本体のバージョンを <a href='%0' class='externalLink' target='_blank'>%1</a> から最新版に更新しようとしています。この更新をしてもあなたの作成したデータが削除されることはありません。<br><br>なお、本体をアップデートすることで旧プラグインの動作に支障が出る可能性があります。もし更新後の動作に問題が生じたときは、次のサイトを参照してください。<a href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
	errorCantUpgrade: "このTiddlyWikiを更新できませんでした。ローカルに保存したファイルにしか、TiddlyWikiの更新はできません。",
	errorNotSaved: "更新を行う前にまずファイルを保存してください。",
	step2Title: "更新作業の詳細を確認",
	step2Html_downgrade: "TiddlyWikiのバージョンを %0 から %1 へダウングレードしようとしています。<br><br>TiddlyWiki本体を旧バージョンにダウングレードすることは推奨されません。",
	step2Html_restore: "このTiddlyWikiはすでに最新版(%0)です。<br><br>もちろんTiddlyWiki本体が破損していたときなどのために、このまま更新を継続することもできます。",
	step2Html_upgrade: "TiddlyWikiのバージョンを %0 から %1 に更新しようとしています。",
	upgradeLabel: "更新",
	upgradePrompt: "更新処理の準備",
	statusPreparingBackup: "バックアップの準備中",
	statusSavingBackup: "バックアップファイル保存中",
	errorSavingBackup: "バックアップファイルの保存中にエラーが発生しました",
	statusLoadingCore: "本体プログラムを読み込み中",
	errorLoadingCore: "本体プログラムの読み込み中にエラーが発生しました",
	errorCoreFormat: "新しいプログラムにエラーが発生しました",
	statusSavingCore: "本体プログラムの保存中",
	statusReloadingCore: "本体プログラムのリロード中",
	startLabel: "開始",
	startPrompt: "更新処理を開始する",
	cancelLabel: "キャンセル",
	cancelPrompt: "更新処理を中断する",
	step3Title: "更新処理を中断",
	step3Html: "更新処理を中断しました"
	});

merge(config.macros.sync,{
	listViewTemplate: {
		columns: [
			{name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector'},
			{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
			{name: 'Server Type', field: 'serverType', title: "種別", type: 'String'},
			{name: 'Server Host', field: 'serverHost', title: "サーバーホスト", type: 'String'},
			{name: 'Server Workspace', field: 'serverWorkspace', title: "ワークスペース", type: 'String'},
			{name: 'Status', field: 'status', title: "同期ステータス", type: 'String'},
			{name: 'Server URL', field: 'serverUrl', title: "サーバーURL", text: "開く", type: 'Link'}
			],
		rowClasses: [
			],
		buttons: [
			{caption: "これらのtiddlerを同期", name: 'sync'}
			]},
	wizardTitle: "外部サーバーやファイルとの同期",
	step1Title: "同期したいtiddlerを選択してください",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "同期",
	syncPrompt: "各tiddlerを同期します",
	hasChanged: "ローカル側変更あり",
	hasNotChanged: "ローカル側変更なし",
	syncStatusList: {
		none: {text: "...", display:null, className:'notChanged'},
		changedServer: {text: "サーバー側で変更あり", display:null, className:'changedServer'},
		changedLocally: {text: "ローカル側で変更あり", display:null, className:'changedLocally'},
		changedBoth: {text: "双方で変更あり", display:null, className:'changedBoth'},
		notFound: {text: "サーバーに見つかりません", display:null, className:'notFound'},
		putToServer: {text: "更新をサーバーに保存しました", display:null, className:'putToServer'},
		gotFromServer: {text: "サーバーから更新を取得しました", display:null, className:'gotFromServer'}
		}
	});

merge(config.commands.closeTiddler,{
	text: "閉じる",
	tooltip: "このtiddlerを閉じます"});

merge(config.commands.closeOthers,{
	text: "他を閉じる",
	tooltip: "他の全てのtiddlerを閉じます"});

merge(config.commands.editTiddler,{
	text: "編集",
	tooltip: "このtiddlerを編集します",
	readOnlyText: "閲覧",
	readOnlyTooltip: "このtiddlerのソースを表示します"});

merge(config.commands.saveTiddler,{
	text: "確定",
	tooltip: "このtiddlerへの変更を保存します"});

merge(config.commands.cancelTiddler,{
	text: "キャンセル",
	tooltip: "このtiddlerへの変更を破棄します",
	warning: "本当に '%0' の変更を破棄して良いですか?",
	readOnlyText: "終了",
	readOnlyTooltip: "このtiddlerを通常表示にします"});

merge(config.commands.deleteTiddler,{
	text: "削除",
	tooltip: "このtiddlerを削除します",
	warning: "本当に '%0' を削除して良いですか?"});

merge(config.commands.permalink,{
	text: "リンクURL",
	tooltip: "このtiddlerへのURLをアドレス欄に生成します"});

merge(config.commands.references,{
	text: "参照一覧",
	tooltip: "このtiddlerへの参照を一覧表示します",
	popupNone: "参照がありません"});

merge(config.commands.jump,{
	text: "ジャンプ",
	tooltip: "他に開いているtiddlerへジャンプ"});

merge(config.commands.syncing,{
	text: "同期",
	tooltip: "このtiddlerと外部のサーバー(ファイル)との同期を制御します",
	currentlySyncing: "<div>現在の同期状態<br>種別: <span class='popupHighlight'>'%0'</span><br></"+"div><div>ホスト: <span class='popupHighlight'>%1</span></"+"div><br><div>ワークスペース: <span class='popupHighlight'>%2</span></"+"div>", // Note escaping of closing <div> tag
	notCurrentlySyncing: "同期されていません",
	captionUnSync: "このtiddlerの同期を停止",
	chooseServer: "このtiddlerを次のサーバーと同期する:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  "});

merge(config.commands.fields,{
	text: "拡張情報",
	tooltip: "このtiddlerの拡張情報を表示します",
	emptyText: "このtiddlerには拡張情報がありません",
	listViewTemplate: {
		columns: [
			{name: 'Field', field: 'field', title: "項目", type: 'String'},
			{name: 'Value', field: 'value', title: "値", type: 'String'}
			],
		rowClasses: [
			],
		buttons: [
			]}});

merge(config.shadowTiddlers,{
	DefaultTiddlers: "[[TranslatedGettingStarted]]",
	MainMenu: "[[TranslatedGettingStarted]]\n\n\n^^~TiddlyWiki version <<version>>\n(c) 2010 [[UnaMesa|http://www.unamesa.org/]]^^",
	TranslatedGettingStarted: "この空の~TiddlyWikiを使い始めるにあたって、まずは以下のtiddlerを編集してください。:\n;SiteTitle & SiteSubtitle: \n:このサイトのタイトルおよびサブタイトル。この上に表示されています。<br>保存後はブラウザのタイトルバーにも表示されます。\n;MainMenu: \n:メニュー。たいていは左側に表示されています。\n;DefaultTiddlers: \n:ここにtiddlerの名前が書かれていると、この TiddlyWiki を開いたときに、<br>そのtiddlerが初期表示されます。\nあなたの名前(編集したtiddlerに表示されます): <<option txtUserName>>",
	SiteTitle: "My TiddlyWiki",
	SiteSubtitle: "a reusable non-linear personal web notebook",
	SiteUrl: "",
	OptionsPanel: "これらの~TiddlyWikiを制御する各オプションの設定は、使用中のブラウザに保存されます。\n\n署名として使用するあなたの名前を~WikiWord形式(例 JoeBloggs)で入力してください。\n<<option txtUserName>>\n\n<<option chkSaveBackups>> バックアップを保存\n<<option chkAutoSave>> 自動保存\n<<option chkRegExpSearch>> 正規表現で検索\n<<option chkCaseSensitiveSearch>> 検索で大文字小文字を区別\n<<option chkAnimate>> アニメーション\n\n----\n詳細設定 [[TranslatedAdvancedOptions|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "YYYY年MM月DD日" "ジャーナル">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "オプション \u00bb" "TiddlyWiki の詳細設定">>',
	SideBarTabs: '<<tabs txtMainTab "時系列" "更新時刻の降順" TabTimeline "全て" "全てのtiddler" TabAll "タグ別" "全てのタグ" TabTags "その他" "その他の一覧" TabMore>>',
	TabMore: '<<tabs txtMoreTab "未作成" "リンクがあるのに存在しないtiddler" TabMoreMissing "孤立" "どこからもリンクされていないtiddler" TabMoreOrphans "隠し" "隠されているtiddler" TabMoreShadowed>>'});

merge(config.annotations,{
	AdvancedOptions: "このtiddlerでは詳細オプションを設定できます",
	ColorPalette: "この隠しtiddlerで設定された各値によって、この~TiddlyWikiでの色の枠組みが規定されます。",
	DefaultTiddlers: "この隠しtiddlerに列挙された各tiddlerは、この~TiddlyWIkiを開くと同時に自動的に表示されます。",
	EditTemplate: "この隠しtiddlerにあるHTMLテンプレートは、tiddler編集中の表示方法を決定します。",
	GettingStarted: "この隠しtiddlerは基本的な使用方法を説明します。",
	ImportTiddlers: "この隠しtiddlerは他のtiddlerの取り込み機能を提供します。",
	MainMenu: "この隠しtiddlerの内容は「メインメニュー」に表示されます。画面左手に表示されます。",
	MarkupPreHead: "この隠しtiddlerの内容は、このTiddlyWikiHTMLファイルの<head>セクション開始直後に挿入されます。",
	MarkupPostHead: "この隠しtiddlerの内容は、このTiddlyWikiHTMLファイルの<head>セクション終了直前に挿入されます。",
	MarkupPreBody: "この隠しtiddlerの内容は、このTiddlyWikiHTMLファイルの<body>セクション開始直後に挿入されます。",
	MarkupPostBody: "この隠しtiddlerの内容は、このTiddlyWikiHTMLファイルのスクリプトブロック直後にある、<body>セクション終了直前に挿入されます。",
	OptionsPanel: "この隠しtiddlerの内容は、右手のサイドバー内でスライド式のオプションパネルとして表示されます。",
	PageTemplate: "この隠しtiddlerにあるHTMLテンプレートは、~TiddlyWiki全体のレイアウトを決定します。",
	PluginManager: "この隠しtiddlerはプラグインマネージャ機能を提供します。",
	SideBarOptions: "この隠しtiddlerの内容は右手のサイドバー内のオプションパネルとして表示されます。",
	SideBarTabs: "この隠しtiddlerの内容は右手のサイドバー内にタブパネルとして表示されます。",
	SiteSubtitle: "この隠しtiddlerはページのサブタイトルとして利用されます。",
	SiteTitle: "この隠しtiddlerはページのメインタイトルとして利用されます。",
	SiteUrl: "この隠しtiddlerには、このTiddlyWikiを公開する際のURLを指定する必要があります。",
	StyleSheetColors: "この隠しtiddlerはページ内各要素の色に関するCSSを規定します。このtiddlerを編集しないでください。色を修正するには代わりに StyleSheet 隠しtiddler を編集してください。",
	StyleSheet: "この隠しtiddlerはカスタムCSSを規定します。",
	StyleSheetLayout: "この隠しtiddlerはページ内各要素のレイアウトに関するCSSを規定します。このtiddlerを編集しないでください。レイアウトを修正するには代わりに StyleSheet 隠しtiddler を編集してください。",
	StyleSheetLocale: "この隠しtiddlerはページ内各要素の翻訳ロケールに関するCSSを規定します。",
	StyleSheetPrint: "この隠しtiddlerは印刷に関するCSSを規定します。",
	TabAll: "この隠しtiddlerの内容は右手のサイドバー内「全て」タブに表示されます。",
	TabMore: "この隠しtiddlerの内容は右手のサイドバー内「その他」タブに表示されます。",
	TabMoreMissing: "この隠しtiddlerの内容は右手のサイドバー内「未作成」タブに表示されます。",
	TabMoreOrphans: "この隠しtiddlerの内容は右手のサイドバー内「孤立」タブに表示されます。",
	TabMoreShadowed: "この隠しtiddlerの内容は右手のサイドバー内「隠し」タブに表示されます。",
	TabTags: "この隠しtiddlerの内容は右手のサイドバー内「タグ別」タブに表示されます。",
	TabTimeline: "この隠しtiddlerの内容は右手のサイドバー内「時系列」タブに表示されます。",
	ToolbarCommands: "この隠しtiddlerはtiddlerツールバーにどのようなコマンドを表示するかを決定します。",
	ViewTemplate: "この隠しtiddlerにあるHTMLテンプレートは、各tiddlerの表示方法を決定します。"
	});
//}}}