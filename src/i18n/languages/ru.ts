import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ru: Translation = {
	[Key.home]: "Главная",
	[Key.about]: "О себе",
	[Key.archive]: "Архив",
	[Key.search]: "Поиск",
	[Key.searchNoResults]: "Результаты не найдены.",
	[Key.searchTypeSomething]: "Введите ключевое слово для поиска...",
	[Key.searchLoading]: "Поиск...",
	[Key.searchSummary]: "Резюме",
	[Key.searchContent]: "Содержание",
	[Key.searchViewMore]: "Показать еще ({count} шт)",
	[Key.other]: "Прочее",
	[Key.all]: "Все",

	[Key.tags]: "Теги",
	[Key.categories]: "Категории",
	[Key.allCategories]: "Все категории",
	[Key.allTags]: "Все теги",
	[Key.recentPosts]: "Последние посты",
	[Key.postList]: "Список постов",
	[Key.tableOfContents]: "Содержание",
	[Key.tocEmpty]: "На этой странице нет оглавления",
	[Key.music]: "Музыка",
	[Key.musicNoPlaying]: "Ничего не воспроизводится",
	[Key.musicLyrics]: "Текст песни",
	[Key.musicVolume]: "Громкость",
	[Key.musicPlayMode]: "Переключить режим воспроизведения",
	[Key.musicPrev]: "Предыдущий трек",
	[Key.musicNext]: "Следующий трек",
	[Key.musicPlaylist]: "Плейлист",
	[Key.musicNoLyrics]: "Текст песни отсутствует",
	[Key.musicLoadingLyrics]: "Загрузка текста песни...",
	[Key.musicFailedLyrics]: "Ошибка загрузки текста песни",
	[Key.musicNoSongs]: "Нет песен",
	[Key.musicError]: "Ошибка плеера",
	[Key.musicPlay]: "Воспроизвести",
	[Key.musicPause]: "Пауза",
	[Key.musicProgress]: "Прогресс воспроизведения",
	[Key.musicCover]: "Обложка",
	[Key.musicNoCover]: "Нет обложки",
	[Key.musicAudioPlayer]: "Аудиоплеер",

	// Объявление
	[Key.announcement]: "Объявление",
	[Key.announcementClose]: "Закрыть",

	[Key.comments]: "Комментарии",
	[Key.commentSection]: "Комментарии",
	[Key.commentSubtitle]: "Поделитесь своими мыслями и обсудите с остальными",
	[Key.commentNotConfigured]: "Система комментариев не настроена",
	[Key.guestbookCommentHint]:
		"Вы еще не включили систему комментариев в файле конфигурации. После включения посетители смогут оставлять сообщения здесь",
	[Key.friends]: "Ссылки",
	[Key.friendsDescription]:
		"Вот мои друзья, добро пожаловать посетить и общаться друг с другом",
	[Key.searchFriends]: "Поиск друзей...",
	[Key.friendsEmpty]: "Друзей пока нет.",
	[Key.guestbook]: "Гостевая книга",
	[Key.guestbookDescription]:
		"Добро пожаловать, оставьте свой след здесь, поделитесь своими мыслями и предложениями",
	[Key.untitled]: "Без названия",
	[Key.uncategorized]: "Без категории",
	[Key.noTags]: "Нет тегов",

	[Key.wordCount]: "слово",
	[Key.wordsCount]: "слова",
	[Key.minuteCount]: "минута",
	[Key.minutesCount]: "минуты",
	[Key.postCount]: "пост",
	[Key.postsCount]: "постов",
	[Key.tagsCount]: "тегов",
	[Key.noData]: "Нет данных",

	[Key.themeColor]: "Цвет темы",

	[Key.lightMode]: "Светлая",
	[Key.darkMode]: "Тёмная",
	[Key.systemMode]: "Система",

	[Key.more]: "Ещё",
	[Key.collapse]: "Свернуть",

	[Key.author]: "Автор",
	[Key.publishedAt]: "Опубликовано",
	[Key.updatedAt]: "Обновлено",
	[Key.readTime]: "Время чтения",
	[Key.license]: "Лицензия",

	// Отслеживание аниме
	[Key.anime]: "Аниме",
	[Key.animeSubtitle]:
		"Мой список отслеживания аниме, данные из Bilibili и TMDB",
	[Key.animeTotal]: "Всего",
	[Key.animeAverageRating]: "Средний рейтинг",
	[Key.animeSearch]: "Поиск аниме...",
	[Key.animeAllTypes]: "Все типы",
	[Key.animeTV]: "TV Аниме",
	[Key.animeMovie]: "Фильм",
	[Key.animeRatingDesc]: "По рейтингу ↓",
	[Key.animeRatingAsc]: "По рейтингу ↑",
	[Key.animeDateDesc]: "Сначала новые",
	[Key.animeDateAsc]: "Сначала старые",
	[Key.animeNoResults]: "Аниме не найдено",
	[Key.animeLastUpdated]: "Данные обновлены",
	[Key.animeSource]: "Источник",
	[Key.animeEpStatus]: "Прогресс",
	[Key.animeViewDetails]: "Подробнее",
	[Key.animeNotConfigured]: "Источник данных не настроен",
	[Key.animeNotConfiguredDesc]:
		"Настройте Bilibili UID или TMDB API Key в src/config/siteConfig.ts",
	[Key.animeBilibiliAvg]: "Bilibili ср.",
	[Key.animeTmdbAvg]: "TMDB ср.",
	[Key.animeDualSynced]: "Два источника",
	[Key.animeNoOverview]: "Нет описания",
	[Key.animeClose]: "Закрыть",
	[Key.animeSynopsis]: "Описание",
	[Key.animeWatchNow]: "Смотреть",
	[Key.animeViewTmdb]: "Подробнее на TMDB",
	[Key.animeAllWithCount]: "Все ({count})",
	[Key.animeTVWithCount]: "ТВ ({count})",
	[Key.animeMovieWithCount]: "Фильм ({count})",

	// Пагинация
	[Key.paginationFirst]: "Первая",
	[Key.paginationPrev]: "Предыдущая",
	[Key.paginationNext]: "Следующая",
	[Key.paginationLast]: "Последняя",
	[Key.paginationPage]: "Страница",
	[Key.paginationOf]: "из",
	[Key.paginationTotal]: ", всего",
	[Key.paginationRecords]: " записей",

	// 404 Страница
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Страница не найдена",
	[Key.notFoundDescription]:
		"Извините, страница, которую вы посетили, не существует или была перемещена.",
	[Key.backToHome]: "Вернуться на главную",

	// Последнее изменение
	[Key.lastModifiedPrefix]: "Последнее обновление: ",
	[Key.lastModifiedOutdated]: "Некоторый контент может быть устаревшим",
	[Key.lastModifiedDaysAgo]: "{days} дней назад",
	[Key.year]: "год",
	[Key.month]: "месяц",
	[Key.day]: "день",
	[Key.hour]: "час",
	[Key.minute]: "минута",
	[Key.second]: "секунда",

	// Статистика просмотров
	[Key.pageViews]: "Просмотры",
	[Key.pageViewsLoading]: "Загрузка...",
	[Key.pageViewsError]: "Статистика недоступна",

	// Закреплено
	[Key.pinned]: "Закреплено",

	// Похожие статьи
	[Key.relatedPosts]: "Похожие статьи",
	[Key.randomPosts]: "Случайные статьи",
	[Key.smartRecommend]: "Умный",
	[Key.randomRecommend]: "Случайный",
	[Key.noRelatedPosts]: "Нет похожих статей",
	[Key.noRandomPosts]: "Нет случайных статей",

	// Зашифровано
	[Key.postEncrypted]: "Эта статья зашифрована",

	// Режим обоев
	[Key.wallpaperMode]: "Режим обоев",
	[Key.wallpaperBannerMode]: "Баннер обои",
	[Key.wallpaperFullscreenMode]: "Полноэкранные обои",
	[Key.wallpaperOverlayMode]: "Прозрачный",
	[Key.wallpaperNoneMode]: "Однотонный фон",

	// Настройки обоев
	[Key.wallpaperSettings]: "Настройки обоев",
	[Key.wallpaperTitle]: "Заголовок главных обоев",
	[Key.wallpaperCarousel]: "Карусель обоев",
	[Key.wavesAnimation]: "Анимация волн",
	[Key.gradientTransition]: "Градиентный переход",
	[Key.sakuraEffect]: "Эффект сакуры",
	[Key.effectsSettings]: "Настройки эффектов",
	[Key.overlaySettings]: "Настройки прозрачности",
	[Key.overlayOpacity]: "Прозрачность обоев",
	[Key.overlayBlur]: "Размытие фона",
	[Key.overlayCardOpacity]: "Прозрачность карточек",

	// Макет списка сообщений
	[Key.postListLayout]: "Макет списка сообщений",
	[Key.postListLayoutList]: "Список",
	[Key.postListLayoutGrid]: "Сетка",

	// Страница спонсоров
	[Key.sponsor]: "Спонсор",
	[Key.sponsorTitle]: "Поддержать меня",
	[Key.sponsorDescription]:
		"Если мой контент был полезен для вас, добро пожаловать поддержать меня следующими способами. Ваша поддержка - это движущая сила моего постоянного творчества!",
	[Key.sponsorMethods]: "Способы оплаты",
	[Key.sponsorList]: "Спонсоры",
	[Key.sponsorEmpty]: "Пока нет спонсоров",
	[Key.sponsorAmount]: "Сумма",
	[Key.sponsorDate]: "Дата",
	[Key.sponsorMessage]: "Сообщение",
	[Key.sponsorAnonymous]: "Анонимно",
	[Key.scanToSponsor]: "Сканировать для поддержки",
	[Key.sponsorGoTo]: "Перейти к спонсору",
	[Key.sponsorButton]: "Поддержка и Поделиться",
	[Key.sponsorButtonText]:
		"Если эта статья помогла вам, пожалуйста, поделитесь или поддержите!",

	[Key.shareOnSocial]: "Поделиться статьей",
	[Key.shareOnSocialDescription]:
		"Если эта статья помогла вам, пожалуйста, поделитесь ею с другими!",

	// Статистика сайта
	[Key.siteStats]: "Статистика сайта",
	[Key.siteStatsPostCount]: "Статьи",
	[Key.siteStatsCategoryCount]: "Категории",
	[Key.siteStatsTagCount]: "Теги",
	[Key.siteStatsTotalWords]: "Всего слов",
	[Key.siteStatsRunningDays]: "Дней работы",
	[Key.siteStatsLastUpdate]: "Последняя активность",
	[Key.siteStatsDaysAgo]: "{days} дней назад",
	[Key.siteStatsDays]: "{days} дней",
	[Key.today]: "Сегодня",

	// Информация о сайте
	[Key.siteInfo]: "Информация о сайте",
	[Key.siteInfoBuildTime]: "Время сборки",
	[Key.siteInfoBuildPlatform]: "Платформа сборки",
	[Key.siteInfoBlogVersion]: "Версия блога",
	[Key.siteInfoAstroVersion]: "Astro",
	[Key.siteInfoNodeVersion]: "Node",
	[Key.siteInfoPnpmVersion]: "pnpm",
	[Key.siteInfoSystem]: "Система",
	[Key.siteInfoExpand]: "Показать информацию о сборке",
	[Key.siteInfoCollapse]: "Скрыть информацию о сборке",
	[Key.siteInfoDomain]: "Домен",
	[Key.siteInfoLicense]: "Лицензия",

	// Компонент календаря
	[Key.calendarSunday]: "Вс",
	[Key.calendarMonday]: "Пн",
	[Key.calendarTuesday]: "Вт",
	[Key.calendarWednesday]: "Ср",
	[Key.calendarThursday]: "Чт",
	[Key.calendarFriday]: "Пт",
	[Key.calendarSaturday]: "Сб",
	[Key.calendarJanuary]: "Янв",
	[Key.calendarFebruary]: "Фев",
	[Key.calendarMarch]: "Мар",
	[Key.calendarApril]: "Апр",
	[Key.calendarMay]: "Май",
	[Key.calendarJune]: "Июн",
	[Key.calendarJuly]: "Июл",
	[Key.calendarAugust]: "Авг",
	[Key.calendarSeptember]: "Сен",
	[Key.calendarOctober]: "Окт",
	[Key.calendarNovember]: "Ноя",
	[Key.calendarDecember]: "Дек",
	[Key.calendar]: "Календарь сайта",
	[Key.calendarHeatmapWeek]: "Неделя {week} {month}, {count} записей",
	[Key.advertisement]: "Реклама",

	[Key.shareArticle]: "Поделиться",
	[Key.generatingPoster]: "Создание постера...",
	[Key.copied]: "Скопировано",
	[Key.copyLink]: "Копировать ссылку",
	[Key.savePoster]: "Сохранить постер",
	[Key.scanToRead]: "Сканируйте, чтобы прочитать",

	// Конфигурация блоков коллапсируемого кода
	[Key.codeCollapsibleShowMore]: "Развернуть",
	[Key.codeCollapsibleShowLess]: "Свернуть",
	[Key.codeCollapsibleExpanded]: "Блок кода развернут",
	[Key.codeCollapsibleCollapsed]: "Блок кода свернут",

	// Страница галереи
	[Key.gallery]: "Галерея",
	[Key.galleryDescription]: "Запечатлеть прекрасные моменты жизни",
	[Key.galleryPhotos]: "фото",
	[Key.galleryAlbums]: "альбомов",
	[Key.galleryNoAlbums]: "Пока нет альбомов",
	[Key.galleryBackToAlbums]: "Вернуться к альбомам",
	[Key.searchAlbums]: "Поиск альбомов...",

	// Защита паролем
	[Key.passwordProtected]: "Защищено паролем",
	[Key.passwordProtectedDesc]:
		"Этот контент защищён паролем. Пожалуйста, введите пароль для просмотра.",
	[Key.passwordHint]: "Подсказка",
	[Key.passwordPlaceholder]: "Введите пароль",
	[Key.passwordSubmit]: "Разблокировать",
	[Key.passwordError]: "Неверный пароль, попробуйте снова.",
	[Key.passwordProtectedRss]:
		"Эта статья зашифрована. Пожалуйста, посетите сайт для просмотра.",

	// 自定义
	[Key.cBackToTop]: "Вернуться к началу",
};
