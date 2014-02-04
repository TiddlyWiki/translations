/***
|''Name:''|TurkishTranslationPlugin|
|''Description:''|Translation of TiddlyWiki into Turkish|
|''Author:''|ali.tekdemir@gmail.com|
|''CodeRepository:''|http://svn.tiddlywiki.org/Trunk/association/locales/core/tr/locale.tr.js |
|''Version:''|0.4.3|
|''Date:''|Nov 22, 2010|
|''Comments:''|Please make comments at http://groups.google.co.uk/group/TiddlyWikiDev |
|''License:''|[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|''~CoreVersion:''|2.6.0|
***/

//{{{
//--
//-- Translateable strings
//--

// Satırlardaki "çif tırnak içi" çevrilmeli; 'tek tırnak içi' müdahale edilmemeli

config.locale = "tr"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
merge(config.options,{txtUserName: "SeninAdın"});

merge(config.tasks,{
save: {text: "kaydet", tooltip: "TiddlyWiki de yaptığınız değişiklikleri kaydedin", action: saveChanges},
sync: {text: "Eşitleme", tooltip: "Değişiklikleri diğer TiddlyWiki dosyaları ve sunucuları ile senkronize et", content: '<<sync>>'},
importTask: {text: "içe aktarma", tooltip: "Tiddleri ve eklentileri diğer TiddlyWiki dosyaları ve sunucularından içe aktar", content: '<<importTiddlers>>'},
tweak: {text: "ayar", tooltip: "TiddlyWiki görünümünü ve davranışını ayarla", content: '<<options>>'},
upgrade: {text: "Yükselt", tooltip: "TiddlyWiki çekirdek kodu yükseltme", content: '<<upgrade>>'},
plugins: {text: "Eklentiler", tooltip: "Yüklü Eklentileri Yönet", content: '<<plugins>>'}
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc,{
txtUserName: "Düzenlemelerinizi imzalamak için kullanıcı adı",
chkRegExpSearch: "Aramalar için düzenli ifadeleri etkinleştirin",
chkCaseSensitiveSearch: "Büyük küçük harf duyarlı arama",
chkIncrementalSearch: "Birebir yazıldığı gibi arama",
chkAnimate: "Animasyonları etkinleştir",
chkSaveBackups: "Değişiklikleri kaydederken yedekleme dosyası tut",
chkAutoSave: "Değişiklikleri otomatik kaydet",
chkGenerateAnRssFeed: "Değişiklikleri kaydederken bir RSS beslemesi oluştur",
chkSaveEmptyTemplate: "Değişiklikleri kaydetmeden boş bir şablon oluştur",
chkOpenInNewWindow: "Dış bağlantıları yeni bir pencerede aç",
chkToggleLinks: "Clicking on links to open tiddlers causes them to close",
chkHttpReadOnly: "HTTP üzerinden görüntülendiğinde düzenleme özelliklerini gizle",
chkForceMinorUpdate: "Tiddleri düzenlerken değiştirici adını ve tarih güncellemesi yapmasın",
chkConfirmDelete: "Tiddleri silmeden önce onay iste",
chkInsertTabs: "Tab tuşunu alanlar arasında hareket yerine sekme karakterleri eklemek için kullanın",
txtBackupFolder: "Yedekleme için kullanılacak klasörün ismi",
txtMaxEditRows: "Düzenleme kutularındaki satırların maksimum sayısı",
txtTheme: "Kullanmak için tema adı",
txtFileSystemCharSet: "Değişiklikleri kaydetmek için varsayılan karakter seti (yalnızca Firefox/Mozilla)"});

merge(config.messages,{
customConfigError: "Eklentiler yüklenirken probleme rastlandı. Detaylar için PluginManager",
pluginError: "Hata:  %0",
pluginDisabled: "Çalışmadı çünkü 'systemConfigDisable' etiketi devredışı",
pluginForced: "Çalıştı çünkü 'systemConfigForce' etiketi çalışmaya zorlandı",
pluginVersionError: "Bu eklenti alışmadı çünkü TiddlyWiki nin daha yeni bir sürümü gerekir",
nothingSelected: "Hiçbir şey seçilmedi. Önce bir veya daha fazla öğe seçmelisiniz",
savedSnapshotError: "Bu TiddlyWiki yanlış kaydedilmiş olduğu görülüyor. Detaylar için http://www.tiddlywiki.com/#Download",
subtitleUnknown: "(bilinmeyen)",
undefinedTiddlerToolTip: "Tiddler henüz yok '%0'",
shadowedTiddlerToolTip: "Tiddler '%0' henüz yok, fakat önceden belirlenmiş bir gölge değere sahiptir",
tiddlerLinkTooltip: "%0 - %1, %2",
externalLinkTooltip: "Harici bağlantı %0",
noTags: "Hiçbir etiketli tiddler yok",
notFileUrlError: "Değişiklikleri kaydetmeden önce bu TiddlyWiki bir dosyaya kaydetmeniz gerekir",
cantSaveError: "Bu değişiklikleri kaydetmek mümkün değildir. Olası sebepler şunlardır:\n-tarayıcınız kaydetme desteklemiyor (Firefox, Internet Explorer, Safari ve Opera tüm çalışma düzgün 

yapılandırılmış ise)\n-sizin TiddlyWiki dosyasının dosyayolu geçersiz karakterler içeriyor\n-TiddlyWiki HTML dosyası taşınmış veya yeniden adlandırılmış",
invalidFileError: "Orijinal dosya '%0' geçerli bir TiddlyWiki olarak görünmüyor",
backupSaved: "Yedek kaydedildi",
backupFailed: "Yedekleme dosyası kaydedilemedi",
rssSaved: "RSS kaydedildi",
rssFailed: "RSS kaydedilemedi",
emptySaved: "Boş şablon kaydedildi",
emptyFailed: "Boş şablon kaydedilemedi",
mainSaved: "Ana TiddlyWiki dosyası kaydedildi",
mainFailed: "Ana TiddlyWiki dosyası kaydedilemedi. Yaptığınız değişiklikler kaydedilmedi",
macroError: "Macroda hata <<\%0>>",
macroErrorDetails: "Makro çalıştırılırken hata <<\%0>>:\n%1",
missingMacro: "Böyle bir makro",
overwriteWarning: "Tiddler adında '%0' zaten var. Üzerine yazmak için OK seçin",
unsavedChangesWarning: "UYARI! TiddlyWiki de kaydedilmemiş değişiklikler var\n\nKaydetmek için OK seç\nİptal için İPTAL seçin",
confirmExit: "--------------------------------\n\nTiddlyWiki de kaydedilmemiş değişiklikler var. Eğer devam ederseniz, bu değişiklikleri kaybedersiniz\n\n--------------------------------",
saveInstructions: "DeğişiklikleriKaydet",
unsupportedTWFormat: "Desteklenmeyen TiddlyWiki biçimi '%0'",
tiddlerSaveError: "Tiddler kaydederken hata oluştu '%0'",
tiddlerLoadError: "Tiddler yüklenirken hata oluştu'%0'",
wrongSaveFormat: "Depolama biçimi '%0' ile kaydedilemiyor. Kaydetmek için standart bir format kullan.",
invalidFieldName: "Geçersiz alan adı %0",
fieldCannotBeChanged: "Alan '%0' değiştirilemez",
loadingMissingTiddler: "'%1' sunucusundan tiddlera '%0' alınmaya çalışılıyor:\n\n'%2' çalışma alanında '%3'",
upgradeDone: "Güncelleme %0 şimdi tamamlandı\n\nGüncellenen TiddlyWiki nin karşına çıkması için 'OK' tıkla",
invalidCookie: "Geçersiz çerez '%0'"});

merge(config.messages.messageClose,{
text: "kapat",
tooltip: "bu mesaj alanını kapat"});

config.messages.backstage = {
open: {text: "backstage", tooltip: "İçerik yazma ve düzenleme görevlerini gerçekleştirmek için backstage alanı açmak"},
close: {text: "kapat", tooltip: "Arkaplan alanını kapat"},
prompt: "backstage: ",
decal: {
edit: {text: "Düzenle", tooltip: "Tiddler '%0' Düzenle"}
}
};

config.messages.listView = {
tiddlerTooltip: "Bu tiddler tam metni için tıklayınız.",
previewUnavailable: "(önizleme yok)"
};

config.messages.dates.months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım","Aralık"];
config.messages.dates.days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
config.messages.dates.shortMonths = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
config.messages.dates.shortDays = ["Pzr", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = ["inci","inci","üncü","üncü","inci","ıncı","inci","inci","uncu","uncu",
"inci","inci","üncü","üncü","inci","ıncı","inci","inci","uncu","inci",
"inci","inci","üncü","üncü","inci","ıncı","inci","inci","uncu","uncu",
"inci"];
config.messages.dates.am = "am";
config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup,{
});

merge(config.views.wikified.tag,{
labelNoTags: "etiketsiz",
labelTags: "etiketler: ",
openTag: "Etiketi aç '%0'",
tooltip: "Etiketli tiddleri göster '%0'",
openAllText: "Hepsini aç",
openAllTooltip: "Tüm tiddleri aç",
popupNone: "'%0' ile etiketlenen diğer tiddler"});

merge(config.views.wikified,{
defaultText: "Tiddler '%0' henüz yok. Oluşturmak için çift tıklayın",
defaultModifier: "(eksik)",
shadowModifier: "(gölge tiddler oluştur)",
dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
createdPrompt: "oluşturuldu"});

merge(config.views.editor,{
tagPrompt: "Boşluklarla ayrılmış tip etiketleri için gerekirse [[çift köşeli parantez kullanın]], ya da var olandan ekle",
defaultText: "'%0' için metni yazın"});

merge(config.views.editor.tagChooser,{
text: "etiketler",
tooltip: "Bu tiddlere eklemek için var olan etiketleri seçin",
popupNone: "Tanımlı hiçbir etiket yok",
tagTooltip: "'%0' Etiket ekle"});

merge(config.messages,{
sizeTemplates:
[
{unit: 1024*1024*1024, template: "%0\u00a0GB"},
{unit: 1024*1024, template: "%0\u00a0MB"},
{unit: 1024, template: "%0\u00a0KB"},
{unit: 1, template: "%0\u00a0B"}
]});

merge(config.macros.search,{
label: "Arama",
prompt: "Bu TiddlyWiki de ara",
accessKey: "F",
successMsg: "%0 tiddlers eşleşen %1 bulundu",
failureMsg: "Eşleşen tidler bulunamadı %0"});

merge(config.macros.tagging,{
label: "etiketleme: ",
labelNotTag: "etiketsiz",
tooltip: "'%0' ile etiketlenen tiddler listesi"});

merge(config.macros.timeline,{
dateFormat: "DD MMM YYYY"});// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D

merge(config.macros.allTags,{
tooltip: "Etiketli tiddleri göster '%0'",
noTags: "Hiçbir etiketli tiddler yok"});

config.macros.list.all.prompt = "Alfabetik sırayla tüm tiddlers";
config.macros.list.missing.prompt = "Tiddler bağlantıları var fakat tanımlı değiller";
config.macros.list.orphans.prompt = "Tiddler diğer tiddlerle linkli değil";
config.macros.list.shadowed.prompt = "Tiddlers shadowed with default contents";
config.macros.list.touched.prompt = "Yerel olarak değiştirilmiş tiddlers";

merge(config.macros.closeAll,{
label: "tümünü kapat",
prompt: "Görüntülenen tüm tiddleri kapat (düzenlenmekte olan hariç)"});

merge(config.macros.permaview,{
label: "permaview",
prompt: "Tüm görüntülenen tiddlers alan URL Link"});

merge(config.macros.saveChanges,{
label: "değişiklikleri kaydet",
prompt: "Yeni bir TiddlyWiki oluşturmak üzere, tüm tiddleri kaydet",
accessKey: "S"});

merge(config.macros.newTiddler,{
label: "yeni tiddler",
prompt: "Yeni bir tiddler oluştur",
title: "Yeni Tiddler",
accessKey: "N"});

merge(config.macros.newJournal,{
label: "yeni günlük",
prompt: "Şimdiki tarih ve saatten yeni bir tiddler oluştur",
accessKey: "J"});

merge(config.macros.options,{
wizardTitle: "Gelişmiş seçeneklere ince ayar",
step1Title: "Bu seçenekler için tarayıcınızda çerezler kaydedilir",
step1Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='false' name='chkUnknown'>Bilinmeyen tercihleri göster</input>",
unknownDescription: "//(unknown)//",
listViewTemplate: {
columns: [
{name: 'Option', field: 'option', title: "Seçenek", type: 'String'},
{name: 'Description', field: 'description', title: "Açıklama", type: 'WikiMetin'},
{name: 'Name', field: 'name', title: "İsim", type: 'String'}
],
rowClasses: [
{className: 'lowlight', field: 'lowlight'}
]}
});

merge(config.macros.plugins,{
wizardTitle: "Eklentileri Yönet",
step1Title: "Yüklü eklentiler",
step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
skippedText: "(This plugin has not been executed because it was added since startup)",
noPluginText: "Yüklü bir eklenti yok",
confirmDeleteText: "Bu eklentileri silmek istediğinizden emin misiniz:\n\n%0",
removeLabel: "systemConfig etiketini kaldır",
removePrompt: "systemConfig etiketini kaldır",
deleteLabel: "Sil",
deletePrompt: "Kalıcı olarak bu tiddleri sil",
listViewTemplate: {
columns: [
{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
{name: 'Description', field: 'Description', title: "Açıklama", type: 'String'},
{name: 'Version', field: 'Version', title: "Version", type: 'String'},
{name: 'Size', field: 'size', tiddlerLink: 'size', title: "Boyut", type: 'Size'},
{name: 'Forced', field: 'forced', title: "Zorla", tag: 'systemConfigForce', type: 'TagCheckbox'},
{name: 'Disabled', field: 'disabled', title: "Engelli", tag: 'systemConfigDisable', type: 'TagCheckbox'},
{name: 'Executed', field: 'executed', title: "Yüklenen", type: 'Boolean', trueText: "Evet", falseText: "Hayır"},
{name: 'Startup Time', field: 'startupTime', title: "Başlangıç Zamanı", type: 'String'},
{name: 'Error', field: 'error', title: "Durum", type: 'Boolean', trueText: "Hata", falseText: "OK"},
{name: 'Log', field: 'log', title: "Kayıt", type: 'StringList'}
],
rowClasses: [
{className: 'error', field: 'error'},
{className: 'warning', field: 'warning'}
]},
listViewTemplateReadOnly: {
columns: [
{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
{name: 'Description', field: 'Description', title: "Açıklama", type: 'String'},
{name: 'Version', field: 'Version', title: "Version", type: 'String'},
{name: 'Size', field: 'size', tiddlerLink: 'size', title: "Boyut", type: 'Size'},
{name: 'Executed', field: 'executed', title: "Yüklenen", type: 'Boolean', trueText: "Evet", falseText: "Hayır"},
{name: 'Startup Time', field: 'startupTime', title: "Başlangıç Zamanı", type: 'String'},
{name: 'Error', field: 'error', title: "Durum", type: 'Boolean', trueText: "Hata", falseText: "OK"},
{name: 'Log', field: 'log', title: "Log", type: 'StringList'}
],
rowClasses: [
{className: 'error', field: 'error'},
{className: 'warning', field: 'warning'}
]}
});

merge(config.macros.toolbar,{
moreLabel: "daha",
morePrompt: "Ek komutları göster",
lessLabel: "daha az",
lessPrompt: "Ek komutlar gizle",
separator: "|"
});

merge(config.macros.refreshDisplay,{
label: "yenile",
prompt: "Tüm TiddlyWiki ekranı yeniden çiz"
});

merge(config.macros.importTiddlers,{
readOnlyWarning: "Salt okunur TiddlyWiki dosyasını içe aktaramazsın. Dosyadan açmayı deneyin:// URL",
wizardTitle: "Tiddlers başka bir dosya veya sunucudan aktar",
step1Title: "Adım 1: sunucu veya TiddlyWiki dosyasını bulun",
step1Html: "Sunucusunun türünü belirtin: <select name='selTypes'><option value=''>Seç...</option></select><br>URL veya dosya yolunu buraya gir: <input type='text' size=50 name='txtPath'><br>...veya 

dosyayı bulmak için: <input type='file' size=50 name='txtBrowse'><br><hr>...veya önceden tanımlanmış bir linki seçin: <select name='selFeeds'><option value=''>Seç...</option></select>",
openLabel: "aç",
openPrompt: "Bu dosya veya sunucuya bağlantı açın",
statusOpenHost: "Host açılıyor",
statusGetWorkspaceList: "Mevcut çalışma alanlarının listesini al",
step2Title: "Adım 2: Çalışma alanı seçin",
step2Html: "Bir çalışma alanı adını girin: <input type='text' size=50 name='txtWorkspace'><br>...ya da bir çalışma alanı seçin: <select name='selWorkspace'><option 

value=''>Seç...</option></select>",
cancelLabel: "iptal",
cancelPrompt: "Bu içe aktarımı iptal et",
statusOpenWorkspace: "Çalışma alanı açılıyor",
statusGetTiddlerList: "Kullanılabilir tiddlers listesini al",
errorGettingTiddlerList: "Tiddlers listesi alınırken bir hata oluştu, tekrar denemek için iptal et tıklayın",
step3Title: "Adım 3: almak için tiddlers seçin",
step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>Bu sunucuya bağlı bu tiddleri tutun, böylece daha sonraki değişiklikleri senkronize 

edebilirsiniz</input><br><input type='checkbox' name='chkSave'>Bu serverdaki detayları 'systemServer' tiddler kaydet:</input> <input type='text' size=25 name='txtSaveTiddler'>",
importLabel: "içe aktar",
importPrompt: "Bu tiddleri içe aktar",
confirmOverwriteText: "Bu tiddlers üzerine yazmak istiyor musunuzs:\n\n%0",
step4Title: "Adım 4: Aktarılıyor %0 tiddler",
step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
doneLabel: "bitti",
donePrompt: "Sihirbazı kapat",
statusDoingImport: "Aktarılan tiddler",
statusDoneImport: "Tüm tiddler aktarıldı",
systemServerNamePattern: "%1 de %2",
systemServerNamePatternNoWorkspace: "%1",
confirmOverwriteSaveTiddler: "Tiddler '%0' zaten var. Bu sunucuya detayları ile üzerine yazmak için 'OK' tıkla, veya 'İptal' ile değiştirilmemiş olarak bırakın",
serverSaveTemplate: "|''Tip:''|%0|\n|''URL:''|%1|\n|''Çalışma Alanı:''|%2|\n\nBu tiddlers otomatik olarak sunucuda kayıt detayları oluşturdu",
serverSaveModifier: "(System)",
listViewTemplate: {
columns: [
{name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector'},
{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
{name: 'Size', field: 'size', tiddlerLink: 'size', title: "Boyut", type: 'Size'},
{name: 'Tags', field: 'tags', title: "Etiketler", type: 'Tags'}
],
rowClasses: [
]}
});

merge(config.macros.upgrade,{
wizardTitle: "TiddlyWiki çekirdek kodu yükseltme",
step1Title: "Bu TiddlyWiki son sürüme güncelle veya onar",
step1Html: "TiddlyWiki çekirdek kodunu son sürüme yükseltmek üzeresin (from <a href='%0' class='externalLink' target='_blank'>%1</a>). İçeriğiniz güncelemeye karşı korunmuş 

olacaktır.<br><br>Unutmayın, çekirdek güncellemeleri eski eklentileri etkileyebilir olduğu bilinmekte. Yükseltilen dosya ile sorun yaşarsanız bkz. <a 

href='http://www.tiddlywiki.org/wiki/CoreUpgrades' class='externalLink' target='_blank'>http://www.tiddlywiki.org/wiki/CoreUpgrades</a>",
errorCantUpgrade: "Bu TiddlyWiki yükseltme yapılamıyor. Sadece yerel olarak saklanan TiddlyWiki yükseltme dosyaları yapabilirsiniz",
errorNotSaved: "Bir yükseltme gerçekleştirmek için önce değişiklikleri kaydetmeniz gerekir",
step2Title: "Yükseltme ayrıntılarını doğrulayın",
step2Html_downgrade: "TiddlyWiki versiyonunu %1 den %0 a düşürmek üzeresiniz.<br><br>Çekirdek kodu daha önceki bir sürümüne düşürmek tavsiye edilmez",
step2Html_restore: "Bu TiddlyWiki zaten çekirdek kodunun en son versiyonu kullanıyor görünüyor (%0).<br><br>Yükseltmeye devam edebilirsin yine de çekirdek kodunun bozulmuş veya hasar görmemiş 

olduğundan emin olun",
step2Html_upgrade: "TiddlyWiki version yükseltmek üzeresiniz %1 den %0",
upgradeLabel: "Yükselt",
upgradePrompt: "Yükseltme işlemi için hazırlayın",
statusPreparingBackup: "Yedekleme hazırlanması",
statusSavingBackup: "Yedekleme dosyası kaydetme",
errorSavingBackup: "Yedekleme dosyası kaydedilirken bir sorun vardı",
statusLoadingCore: "Çekirdek kodu yükleme",
errorLoadingCore: "Çekirdek kod yükleme hatası",
errorCoreFormat: "Yeni çekirdek kodu ile hata",
statusSavingCore: "Yeni çekirdek kodu kaydetme",
statusReloadingCore: "Yeni çekirdek kodu yeniden yükleme",
startLabel: "Başlat",
startPrompt: "Yükseltme işlemini başlatma",
cancelLabel: "İptal",
cancelPrompt: "Yükseltme işlemini iptal et",
step3Title: "Yükseltme iptal edildi",
step3Html: "Yükseltme işlemini iptal ettiniz"
});

merge(config.macros.sync,{
listViewTemplate: {
columns: [
{name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector'},
{name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler'},
{name: 'Server Type', field: 'serverType', title: "Sunucu türü", type: 'String'},
{name: 'Server Host', field: 'serverHost', title: "Server host", type: 'String'},
{name: 'Server Workspace', field: 'serverWorkspace', title: "Sunucu çalışma alanı", type: 'String'},
{name: 'Status', field: 'status', title: "Senkronizasyon durumu", type: 'String'},
{name: 'Server URL', field: 'serverUrl', title: "Sunucu URL", text: "Görünüm", type: 'Link'}
],
rowClasses: [
],
buttons: [
{caption: "Bu tiddleri eşitle", name: 'sync'}
]},
wizardTitle: "Harici sunucular ve dosyaları ile senkronize",
step1Title: "Eşitlemek istediğiniz tiddleri seçin",
step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
syncLabel: "Eşitleme",
syncPrompt: "Bu tiddleri eşitle",
hasChanged: "Bağlı değilken değişen",
hasNotChanged: "Bağlı değilken değişmeyen",
syncStatusList: {
none: {text: "...", display:'none', className:'notChanged'},
changedServer: {text: "Sunucuda değiştirilen", display:null, className:'changedServer'},
changedLocally: {text: "Bağlı değilken değişen", display:null, className:'changedLocally'},
changedBoth: {text: "Changed while unplugged and on server", display:null, className:'changedBoth'},
notFound: {text: "Sunucuda bulunamadı", display:null, className:'notFound'},
putToServer: {text: "Güncelleme sunucuya kaydedildi", display:null, className:'putToServer'},
gotFromServer: {text: "Sunucudan alınan güncelleştirme", display:null, className:'gotFromServer'}
}
});

merge(config.commands.closeTiddler,{
text: "kapat",
tooltip: "Bu tiddler kapat"});

merge(config.commands.closeOthers,{
text: "diğerleri kapat",
tooltip: "Tüm diğer tiddleri kapat"});

merge(config.commands.editTiddler,{
text: "Düzenle",
tooltip: "Bu tiddleri düzenle",
readOnlyText: "görünüm",
readOnlyTooltip: "Bu tiddler kaynağını görüntüle"});

merge(config.commands.saveTiddler,{
text: "bitti",
tooltip: "Bu tiddlerdeki değişiklikleri kaydet"});

merge(config.commands.cancelTiddler,{
text: "iptal",
tooltip: "Bu tiddlerdeki değişiklikleri geri al",
warning: "Değişikliklerinizi '%0' terk etmek istediğinizden emin misiniz?",
readOnlyText: "bitti",
readOnlyTooltip: "Bu tiddleri normal görüntüle"});

merge(config.commands.deleteTiddler,{
text: "sil",
tooltip: "Bu tiddler sil",
warning: "'%0' Silmek istediğinizden emin misiniz?"});

merge(config.commands.permalink,{
text: "permalink",
tooltip: "Permalink for this tiddler"});

merge(config.commands.references,{
text: "referanslar",
tooltip: "Bu link ile Tiddleri göster",
popupNone: "Referans yok"});

merge(config.commands.jump,{
text: "atla",
tooltip: "Diğer açık tiddlere atla"});

merge(config.commands.syncing,{
text: "syncing",
tooltip: "Bir sunucu veya harici bir dosya ile bu tiddleri senkronizasyonu kontrol edin",
currentlySyncing: "<div>Şimdi senkronize edilen <span class='popupHighlight'>'%0'</span> to:</"+"div><div>host: <span class='popupHighlight'>%1</span></"+"div><div>çalışma alanı: <span 

class='popupHighlight'>%2</span></"+"div>", // Note escaping of closing <div> tag
notCurrentlySyncing: "Şimdi senkronize yok",
captionUnSync: "Bu tiddler senkronizesini durdur",
chooseServer: "Başka bir sunucu ile bu tiddler senkronizesi:",
currServerMarker: "\u25cf ",
notCurrServerMarker: " "});

merge(config.commands.fields,{
text: "fields",
tooltip: "Bu tiddlerin genişletilmiş alanları göster",
emptyText: "Bu tiddler için genişletilmiş alan yok",
listViewTemplate: {
columns: [
{name: 'Field', field: 'field', title: "Alan", type: 'String'},
{name: 'Value', field: 'value', title: "Değer", type: 'String'}
],
rowClasses: [
],
buttons: [
]}});

merge(config.shadowTiddlers,{
DefaultTiddlers: "[[BuradanBaşla]]",
MainMenu: "[[BuradanBaşla]]\n\n\n^^~TiddlyWiki versiyonu <<version>>\n© 2012 [[UnaMesa|http://www.unamesa.org/]]^^",
BuradanBaşla: "Bu boş TiddlyWiki kullanmaya başlamak için, aşağıdaki tiddleri değiştirmeniz gerekir:\n* SiteTitle & SiteSubtitle: Sitenin başlık ve alt başlığı, yukarıda gösterildiği gibi 

(kaydettikten sonra, onlar da tarayıcı başlık çubuğunda görünecektir)\n* MainMenu: Menu (genelde solda)\n* StandartTiddler: Sizin TiddlyWiki açıldığında görünmesini istediğiniz tiddlers adlarını 

içerir\nAyrıca düzenlemelerin imzalanması için kullanıcı adınızı girmeniz gerekir: <<option txtUserName>>",
SiteTitle: "Benim TiddlyWiki",
SiteSubtitle: "doğrusal olmayan kullanışlı kişisel web defteri",
SiteUrl: "",
OptionsPanel: "Bu AraYüz Tercihleri TiddlyWiki özelleştirmeleri için tarayıcınızda kaydedildi\n\nDüzenlemelerinizin imzalanması için adınızın WikiWord kelimesi gibi olması lazım (örn 

AliTekdemir)\n<<option txtUserName>>\n\n<<option chkSaveBackups>> Yedeği kaydet\n<<option chkAutoSave>> Otomatik kaydet\n<<option chkRegExpSearch>> Düzenli ifade araması\n<<option 

chkCaseSensitiveSearch>> Büyük-küçük harf duyarlı arama\n<<option chkAnimate>> Animasyonlar etkin\n\n----\nayrıca bakınız [[GelişmişÖzelSeçenekler|AdvancedOptions]]",
SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY" "günlük">><<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "tercihler \u00bb" "TiddlyWiki 

gelişmiş ayarları değiştir">>',
SideBarTabs: '<<tabs txtMainTab "Zaman Çizelgesi" "Zaman Çizelgesi" TabTimeline "Tümü" "Tüm tiddler" TabAll "Etiketler" "Tüm etiketler" TabTags "Dahası" "Dahası" TabMore>>',
TabMore: '<<tabs txtMoreTab "Kayıp" "Kayıp tiddler" TabMoreMissing "Linksiz" "Linksiz tiddler" TabMoreOrphans "Gölge" "Gölgedeki tiddler" TabMoreShadowed>>'
});

merge(config.annotations,{
AdvancedOptions: "Bu gölge tiddler çeşitli gelişmiş seçeneklere erişim sağlar.",
ColorPalette: "Bu değerler bu gölge tiddlers ~TiddlyWiki kullanıcı arayüzü renk düzenini belirler",
DefaultTiddlers: "~TiddlyWiki başladığında bu gölge tiddlers de listelenen tiddlers otomatik olarak görüntülenir",
EditTemplate: "Bu gölge tiddler html şablonunda düzenlenmekte olan tiddlers nasıl görüneceğini belirler",
BuradanBaşla: "Bu gölge tiddler temel kullanım yönergeleri sağlar",
ImportTiddlers: "Bu gölge tiddlers aktarılan tiddlere erişim sağlar",
MainMenu: "Bu gölge tiddlers ekranın sol sütunda ana menünün içeriği olarak kullanılır",
MarkupPreHead: "Bu tiddler TiddlyWiki HTML dosyasının <head> bölümününe olarak eklenir",
MarkupPostHead: "Bu tiddler TiddlyWiki HTML dosyasının <head> bölümünün altına eklenir",
MarkupPreBody: "Bu tiddler TiddlyWiki HTML dosyasının <body> bölümününe eklenir",
MarkupPostBody: "Bu tiddler TiddlyWiki HTML dosyasının <body> bölümünün hemen komut dosyası bloğu sonrasında sonuna eklenir",
OptionsPanel: "Bu gölge tiddler sağ-taraf kenar çubuğu seçenekleri paneli sürgüsünün içeriği olarak kullanılır",
PageTemplate: "Bu gölge tiddler içinde HTML şablonu genel ~TiddlyWiki düzenini belirler",
PluginManager: "Bu gölge tiddler eklenti yöneticisine erişim sağlar",
SideBarOptions: "Bu gölge tiddler sağ kenar çubuğu seçeneği panelin içeriği olarak kullanılır",
SideBarTabs: "Bu gölge tiddler sağ-taraf kenar çubuğu sekme panelin içeriği olarak kullanılır",
SiteSubtitle: "Bu gölge tiddler sayfa başlığının ikinci bölümü olarak kullanılır",
SiteTitle: "Bu gölge tiddler sayfa başlığının ilk bölümü olarak kullanılır",
SiteUrl: "Bu gölge tiddler yayın için tam hedef URL ye ayarlanması gerekir",
StyleSheetColors: "Bu gölge tiddler sayfa öğelerinin rengi ile ilgili CSS tanımları içerir. ''BU TIDDLERI DÜZENLEMEYİN'', bunun yerine StyleSheet gölge tiddler değişikliklerinizi yapın",
StyleSheet: "Bu tiddler özel CSS tanımları içerebilir",
StyleSheetLayout: "Bu gölge tiddler sayfa öğelerinin düzeni ile ilgili CSS tanımları içerir. ''BU TIDDLERI DÜZENLEMEYİN'', bunun yerine StyleSheet gölge tiddler değişikliklerini yapın",
StyleSheetLocale: "Bu gölge tiddler çeviri yereli ile ilgili CSS tanımları içerir",
StyleSheetPrint: "Bu gölge tiddler baskı için CSS tanımları içerir",
SystemSettings: "Bu tiddler bu TiddlyWiki belgesi için yapılandırma seçeneklerini saklamak için kullanılır",
TabAll: "Bu gölge tiddler sağ kenar çubuğu 'Tümü' sekmesi içeriğini içerir",
TabMore: "Bu gölge tiddler sağ kenar çubuğu 'Daha Fazla' sekmesini içeriğini içerir",
TabMoreMissing: "Bu gölge tiddler sağ kenar çubuğu 'Missing' sekmesi içeriğini içerir",
TabMoreOrphans: "Bu gölge tiddler sağ kenar çubuğu 'Orphans' sekmesi içeriğini barındırır",
TabMoreShadowed: "Bu gölge tiddler sağ kenar çubuğunda 'Gölgelenmiş' sekmenin içeriğini barındırır",
TabTags: "Bu gölge tiddler sağ kenar çubuğunda 'Etiketler' sekmesinin içeriğini barındırır",
TabTimeline: "Bu gölge tiddler sağ kenar çubuğu 'Timeline' sekmesi içeriğini içerir",
ToolbarCommands: "Bu gölge tiddler hangi komutların tiddler araç çubuğunda gösterileceğini belirler",
ViewTemplate: "HTML şablonu gölge tiddlerdeki tiddlerin nasıl görüneceğini belirler"
});

//}}}