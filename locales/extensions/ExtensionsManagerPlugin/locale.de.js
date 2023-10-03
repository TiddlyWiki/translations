/***
|Name         |ExtensionsExplorerPluginGermanTranslation|
|Description  |German translation for [[ExtensionsExplorerPlugin|https://github.com/YakovL/TiddlyWiki_ExtensionsExplorerPlugin]]|
|PluginVersion|0.6.4|
|Version      |1.0.0|
|Requires     |ExtensionsExplorerPlugin|
***/
//{{{
merge(config.macros.extensionsExplorer.lingo, {
	backstageButtonLabel: "Erweiterungen",
	backstageButtonTooltip: "Prüfen, ob es neue Versionen gibt oder neue Erweiterungen installieren",
	installButtonLabel: "Installieren",
	installButtonPrompt: "Erweiterung herunterladen und installieren",
	otherActionsPrompt: "Andere Funktionen anzeigen",
	getFailedToLoadMsg: name => name + " herunterladen fehlgeschlagen",
	getSucceededToLoadMsg: name => `${name} heruntergeladen, Import und Installation folgt...`,
	noSourceUrlAvailable: "Quell-URL fehlt",
	getEvalSuccessMsg: name => `${name} erfolgreich installiert (neu laden nicht notwendig)`,
	getEvalFailMsg: (name, error) => `${name} fehlgeschlagen mit Fehler: ${error}`,
	getImportSuccessMsg: (title, versionString, isUpdated) => isUpdated ?
		`${title}${versionString ? " auf " + versionString : ""} aktualisiert` :
		`${title}${versionString ? " v" + versionString : ""} installiert`,

	updateButtonCheckLabel: "Prüfen",
	updateButtonCheckPrompt: "Auf neue Version prüfen",
	updateButtonUpdateLabel: "Aktualisieren",
	updateButtonUpdatePrompt: "Auf neue Version aktualisieren",
	getUpdateAvailableMsg: name => `Neue Version von ${name} ist verfügbar!`,
	getUpdateAvailableAndVersionsMsg: (existingTiddler, newTiddler) => {
		const getVersionString = config.macros.extensionsExplorer.getVersionString
		return `Neue Version von ${existingTiddler.title} ist verfügbar ` +
			"(aktuelle Version: " + getVersionString(existingTiddler) +
			", verfügbare Version: " + getVersionString(newTiddler) + ")"
	},
	updateNotAvailable: "Keine neue Version verfügbar",
	getUpdateConfirmMsg: (title, loadedVersion, presentVersion) => {
		const loadedVersionString = loadedVersion ? formatVersion(loadedVersion) : ""
		const presentVersionString = presentVersion ? formatVersion(presentVersion) : ""
		return `Soll ${title} aktualisiert werden` +
			` (new version: ${loadedVersionString || "unknown"}, ` +
		 	`current version: ${presentVersionString || "unknown"})?`
	},

	centralSourcesListAnnotation: "Das JSON hier beschreibt Erweiterungen, so dass ExtensionsExplorerPlugin diese installieren kann"
});
//}}}