Translating TiddlyWiki
======================

This repository contains translations for TiddlyWiki 2.x.

Available translations
----------------------

To see if the language you want is available, either look through [locales/core](./locales/core)
or use [ExtensionsExplorerPlugin](https://github.com/YakovL/TiddlyWiki_ExtensionsExplorerPlugin)
and the Translations collection in the Central collection.

To install a translation, either use ExtensionsExplorerPlugin or create a plugin tiddler
(tagged `systemConfg`) and put the content of `locale.xx.js` file to the plugin text, save, and reload
(note: the full installation will be complete after another save and reload).
For instance, German translation can be found in [locales/core/de/locale.de.js](./locales/core/de/locale.de.js).

Contributing
------------

Are you you thinking of writing a translation for TiddlyWiki?
That is fantastic: it will make a real difference to the community.
This page is here to get you going.

If you have any questions you would like addressed, please please ask at https://groups.google.com/group/TiddlyWikiClassic.


How to contribute
-----------------

First, check [here](https://github.com/TiddlyWiki/translations/tree/master/locales/core) if the translation you need already exists.

Next, set up a TiddlyWiki where you will test the translation. Usually, it's better to [download](https://classic.tiddlywiki.com) an empty one.

How to update a translation
---------------------------

1. <details><summary>Install the translation as a plugin, i.e.:</summary>

   1. create a tiddler, name it like EnglishTranslationPlugin,
   2. copy translation text to tiddler text,
   3. tag it with "systemConfig",
   4. save changes, and reload your TW.

   Or install it via [ExtensionsExplorerPlugin](https://github.com/YakovL/TiddlyWiki_ExtensionsExplorerPlugin)
   from the Translations collection in the central collection.
   </details>
2. <details><summary>Translate a string to learn the iteration approach:</summary>

   1. find it in the interface;
   2. find it in the plugin (use search) and change;
   3. save and reload; check that the interface was indeed changed;
   4. restore the initial value if you did this just for learning.
   5. Some strings are more difficult to get (like specific import errors), so you may want to translate them without such a review.
   </details>
3. Optionally, review the interface. If some labels or messages are inaccurate, you can change their translations.
   Similarly, if a string is not translated, you can "fill the gap", at least if the template has the string.
   - Note: Please try to be consistent with the terms used. If you translate "tiddler" as "note" in some places
     and as "entry" in others, that will complicate things for users, so do your best to use the same translation for a term everywhere.
4. If you are updating a translation from an earlier CoreVersion to the current one, you can:
   - check out [the history of the core lingo updates](./Core%20lingo%20history.md) and apply changes from it version-by-version;
      - if something is missing (like changes for early TW versions), please ask for assistance (see the link above);
   - compare the translation with the [English template](./locales/core/en/locale.en.js) or with [other translations](./locales/core/):
     find missing strings, update structure, reuse best practices.
5. Once you're happy with the result, [create a pull request or an issue](https://classic.tiddlywiki.com/dev/docs_from_TiddlyWikiDev.tiddlyspace.com.html#%5B%5BUsing%20git%20and%20GitHub%5D%5D) suggesting your changes in this repository.
   - It's usually better to start small (especially for PRs): say, propose an update from 2.6.2 to 2.6.3 instead of 2.9.4.
     Once your first PR is accepted (which will be faster for a small change), you can go on confidently.

How to create a TiddlyWiki translation
--------------------------------------

Note: If you want to translate a non-left-to-right language (like Arabic),
that's especially valuable and welcome, but may require extra efforts.
Please start by announcing this in the community (see the link above) or in an issue to get assistance.

1. <details><summary>Create your new translation plugin from the <a href="https://github.com/TiddlyWiki/translations/blob/master/locales/core/en/locale.en.js">template</a> in a TW that you'll be using to build and test:</summary>

   1. Create a new tiddler, name it like EnglishTranslationPlugin (use your language name);
   2. Tag it with "systemConfig";
   3. Copy the text of the template to the tiddler text;
   4. Click "done" and save your changes.
   </details>
2. Translate your first bit: for instance, find `config.macros.saveChanges` in the plugin
   and change `"save changes"` to your language. Save, reload, and make sure that the button now has the new label.
   Set `Version` to something like 0.0.1.
3. Choose an approach to iterate over the lines to translate (enclosed in `"translate me"`, unlike `'do not translate me'`):
   - you can go sequentially through the template, line by line (this makes it easier to track the progress for you and others);
   - or you can start with the most visible strings (it may be preferable when you translate for somebody else to start using TW,
     but it makes it difficult to track the progress, especially if your language uses the Latin alphabet).
4. Set `config.locale` for your language (like `pl` for Polish) so that browsers will recognize it
   (and, for instance, make correct autotranslations when somebody needs them).
   - That should be an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) (BCP47); you can look it up, for instance,
     [here](https://www.iana.org/assignments/language-subtag-registry) or [here](http://www.loc.gov/standards/iso639-2/php/code_list.php) (using search).
   - Note: After the plugin applies the locale, another save and reload is needed to get it into effect.
5. Update the metadata on the top of the translation:
   - translate `<Description>`,
   - set `Source` (filename should contain the language code as in `config.locale`, like `locale.pl.js` for Polish), `Author`,
   - if you migrate a translation from somewhere else, you may set `Original Source`,
   - any other info that you see as important to add.
   - Optionally, you can also translate some comments that may help further contributors to update the translation
     (like those indicating which strings should be translated and which should not).
6. [Сreate a pull request or an issue](https://classic.tiddlywiki.com/dev/docs_from_TiddlyWikiDev.tiddlyspace.com.html#%5B%5BUsing%20git%20and%20GitHub%5D%5D)
   with your translation as early as possible: usually, it's a good idea to do so after the steps above,
   so that you get assistance and feedback early and hence don't reiterate things much.
   - If you create a PR, the translation filename should be that specified in `Source`.
7. Translate the rest of the strings, following an approach you've chosen earlier.
   When you finish translating strings, it's usually a good idea to set `Version` to no less than 1.0.0.
   - Don't forget to test your translation.
   - Publishing a partial translation is also welcome: it's better to do this than not to finish and not to publish anything.
8. Optionally, announce your work to those potentially interested, including those to whom you'd like to promote TW
   and the community (see the link above).

If you want to learn more about language tags
---------------------------------------------

[W3C Internationalization Best Practices](http://www.w3.org/TR/i18n-html-tech-lang/)

http://www.w3.org/International/articles/language-tags/Overview.en.php
